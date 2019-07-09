import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import d3 from 'd3';
import jsonldVis from 'jsonld-vis';
import jsonldMarkup from 'jsonld-markup';
import context from '@scipe/ontology/context';
import { ExpansionPanel, ExpansionPanelPreview } from '@scipe/ui';
jsonldVis(d3);

export default class Schema extends React.Component {
  constructor(props) {
    super(props);
    this.id = `jsonld-vis-${props.id || uuid.v4()}`;
    this.state = {
      isHidden: true
    };

    this.handleToggleHidden = this.handleToggleHidden.bind(this);
  }

  componentDidMount() {
    const { data } = this.props;
    d3.jsonldVis(data, '#' + this.id, {
      w: 600,
      h: 350,
      maxLabelWidth: 200,
      transitionDuration: 450,
      scalingFactor: 5,
      tipClassName: 'ds3-d3-tip'
    });
  }

  handleToggleHidden(e) {
    e.preventDefault();
    this.setState({ isHidden: !this.state.isHidden });
  }

  render() {
    const { data } = this.props;
    const { isHidden } = this.state;

    return (
      <ExpansionPanel className="ds3-schema" defaultExpanded={false}>
        <ExpansionPanelPreview>
          Collected structured data (schema.org)
        </ExpansionPanelPreview>

        <figure>
          <div id={this.id} />
          <figcaption>
            <a href="#" onClick={this.handleToggleHidden}>
              view as JSON-LD
            </a>
            {!isHidden && (
              <pre>
                <code
                  dangerouslySetInnerHTML={{
                    __html: jsonldMarkup(data, context['@context'])
                  }}
                />
              </pre>
            )}
          </figcaption>
        </figure>
      </ExpansionPanel>
    );
  }
}

Schema.propTypes = {
  id: PropTypes.string,
  data: PropTypes.object.isRequired
};
