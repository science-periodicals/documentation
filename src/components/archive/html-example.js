import React from 'react';
import PropTypes from 'prop-types';
import hljs from 'highlight.js';
import uuid from 'uuid';
import d3 from 'd3';
import jsonldVis from 'jsonld-vis';
import jsonldMarkup from 'jsonld-markup';
import { jsonld, frame, contextUrl, unprefix } from '@scipe/jsonld';
import { BemTags, ExpansionPanel, ExpansionPanelPreview } from '@scipe/ui';
import context from '@scipe/ontology/context';

jsonldVis(d3);

const bem = new BemTags('@sa', '@archive');

export default class HtmlExample extends React.Component {
  constructor(props) {
    super(props);
    this.id = `jsonld-vis-${props.id || uuid.v4()}`;
    this.state = {
      jsonld: null
    };
  }

  componentDidMount() {
    this._isMounted = true;
    this.makeViz();
  }

  componentDidUpdate(prevState) {
    if (prevState !== this.state) {
      this.makeViz();
    }
  }

  componentWillUnMount() {
    this._isMounted = false;
  }

  componentWillMount() {
    const { data } = this.props;
    this.getJsonLd(data);
  }

  componentWillReceiveProps(nextProps) {
    const { data } = nextProps;
    if (data !== this.props.data) {
      this.getJsonLd(data);
    }
  }

  makeViz() {
    const { jsonld } = this.state;
    if (jsonld && this.$viz) {
      if (this.$viz) {
        // remove previous viz (if any)
        while (this.$viz.firstChild) {
          this.$viz.removeChild(this.$viz.firstChild);
        }
      }
      d3.jsonldVis(jsonld, '#' + this.id, {
        w: 600,
        h: 350,
        maxLabelWidth: 200,
        transitionDuration: 450,
        scalingFactor: 5,
        tipClassName: 'archive-d3-tip'
      });
    }
  }

  getJsonLd(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    if (!doc.body.getAttribute('prefix')) {
      doc.body.setAttribute(
        'prefix',
        'schema: http://schema.org/ rdf: http://www.w3.org/1999/02/22-rdf-syntax-ns# xsd: http://www.w3.org/2001/XMLSchema# sa: http://ns.sci.pe# scipe: https://sci.pe/'
      );
    }

    let docFrame;
    if (this.props.frame) {
      docFrame = this.props.frame;
    } else {
      const frameId =
        doc.body.firstElementChild &&
        (doc.body.firstElementChild.getAttribute('resource') ||
          doc.body.firstElementChild.getAttribute('about'));
      if (frameId) {
        docFrame = { '@id': frameId };
      }
    }

    if (docFrame) {
      jsonld.fromRDF(doc, { format: 'text/html' }, (err, data) => {
        if (err) {
          return console.error(err);
        }
        jsonld.compact(data, 'https://sci.pe', (err, data) => {
          if (err) {
            return console.error(err);
          }

          function fix(node) {
            if (!node) return node;
            return Object.keys(node).reduce((fixedNode, key) => {
              let value = node[key];
              if (typeof value === 'string') {
                value = value
                  .replace(/^↵?\v?\r?\n?\s+/, '')
                  .replace(/↵?\v?\r?\n?\s+$/, '');
              } else if (typeof value['@value'] === 'string') {
                value['@value'] = value['@value']
                  .replace(/^↵?\v?\r?\n?\s+/, '')
                  .replace(/↵?\v?\r?\n?\s+$/, '');
              }
              if (key.startsWith('schema:') || key.startsWith('sa:')) {
                key = unprefix(key);
              }
              fixedNode[key] = value;

              return fixedNode;
            }, {});
          }

          if (data && data['@graph']) {
            data['@graph'] = data['@graph'].map(fix);
          } else {
            data = fix(data);
          }

          frame(
            data,
            docFrame,
            { removeUnnecessaryBlankNodeIds: true },
            (err, data) => {
              if (err) {
                return console.error(err);
              }
              if (this._isMounted) {
                const jsonld =
                  data['@graph'].length > 1
                    ? Object.assign({ '@type': 'Graph' }, data)
                    : data['@graph'][0];

                this.setState({ jsonld: fix(jsonld) });
              }
            }
          );
        });
      });
    }
  }

  render() {
    const { data, children } = this.props;
    const { jsonld } = this.state;
    const html = hljs.highlight('html', data);

    return (
      <figure className={bem`html-example`}>
        <div className={bem`__html`}>
          <pre>
            <code
              dangerouslySetInnerHTML={{
                __html: html.value
              }}
            />
          </pre>
        </div>

        {jsonld && (
          <div className={bem`__extra`}>
            <ExpansionPanel defaultExpanded={false}>
              <ExpansionPanelPreview>
                Extracted JSON-LD (framed & compacted)
              </ExpansionPanelPreview>
              <div className={bem`__jsonld`}>
                <pre>
                  <code
                    dangerouslySetInnerHTML={{
                      __html: jsonldMarkup(
                        Object.assign(
                          {
                            '@context': contextUrl
                          },
                          jsonld
                        ),
                        context['@context']
                      )
                    }}
                  />
                </pre>
              </div>
            </ExpansionPanel>
            <ExpansionPanel defaultExpanded={false}>
              <ExpansionPanelPreview>Tree view</ExpansionPanelPreview>
              <div className={bem`__viz`}>
                <div
                  id={this.id}
                  ref={el => {
                    this.$viz = el;
                  }}
                />
              </div>
            </ExpansionPanel>
          </div>
        )}

        {children && (
          <figcaption className={bem`@__default-ui-type--caption`}>
            {children}
          </figcaption>
        )}
      </figure>
    );
  }
}

HtmlExample.propTypes = {
  id: PropTypes.string,
  data: PropTypes.string.isRequired,
  frame: PropTypes.object,
  children: PropTypes.any
};
