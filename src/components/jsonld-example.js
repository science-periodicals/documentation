import React from 'react';
import PropTypes from 'prop-types';
import jsonldMarkup from 'jsonld-markup';
import uuid from 'uuid';
import d3 from 'd3';
import jsonldVis from 'jsonld-vis';
import decamelize from 'decamelize';
import { contextUrl } from '@scipe/jsonld';
import context from '@scipe/ontology/context';
import { BemTags, ExpansionPanel, ExpansionPanelPreview } from '@scipe/ui';

jsonldVis(d3);

export default class JsonldExample extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    root: PropTypes.bool,
    treeView: PropTypes.bool,
    data: PropTypes.object.isRequired,
    children: PropTypes.any
  };

  static defaultProps = {
    root: true,
    treeView: true
  };

  constructor(props) {
    super(props);
    this.id = `jsonld-vis-${props.id || uuid.v4()}`;
    this.state = {
      isHidden: true
    };

    this.handleToggleHidden = this.handleToggleHidden.bind(this);
  }

  componentDidUpdate(prevState, prevProps) {
    if (prevProps !== this.props) {
      this.makeViz();
    }
  }

  componentDidMount() {
    this.makeViz();
  }

  makeViz() {
    const { data } = this.props;
    if (this.$viz) {
      if (this.$viz) {
        // remove previous viz (if any)
        while (this.$viz.firstChild) {
          this.$viz.removeChild(this.$viz.firstChild);
        }
      }
      d3.jsonldVis(this.patchData(data), '#' + this.id, {
        w: 600,
        h: 350,
        maxLabelWidth: 200,
        transitionDuration: 450,
        scalingFactor: 5,
        tipClassName: 'archive-d3-tip'
      });
    }
  }

  patchData(data) {
    const { root } = this.props;

    return Object.assign(
      {
        '@context': contextUrl
      },
      root
        ? {
            '@id':
              data['@id'] ||
              (data['@type']
                ? `http://example.com/${decamelize(data['@type'], '-')}`
                : 'scipe:id')
          }
        : undefined,
      data
    );
  }

  handleToggleHidden(e) {
    e.preventDefault();
    this.setState({ isHidden: !this.state.isHidden });
  }

  render() {
    const bem = new BemTags('@sa');

    const { data, treeView, children, id } = this.props;
    return (
      <figure id={id} className={bem`jsonld-example`}>
        <div className={bem`__content`}>
          <div className={bem`__jsonld`}>
            <pre>
              <code
                dangerouslySetInnerHTML={{
                  __html: jsonldMarkup(
                    this.patchData(data),
                    context['@context']
                  )
                }}
              />
            </pre>
          </div>
          {treeView && (
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
          )}
        </div>
        {children && (
          <figcaption className={bem`@__default-ui-type--caption`}>
            {children}
          </figcaption>
        )}
      </figure>
    );
  }
}
