import React from 'react';
import PropTypes from 'prop-types';
import { flatten } from '@scipe/jsonld';
import {
  BemTags,
  CreateGraphActionEditor,
  withScreenDim,
  CSS_XLARGE_DESKTOP
} from '@scipe/ui';

export default withScreenDim(
  class WorkflowExample extends React.Component {
    static propTypes = {
      createGraphAction: PropTypes.object.isRequired,
      children: PropTypes.any,
      screenWidth: PropTypes.string
    };

    static getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.createGraphAction !== prevState.prevCreateGraphAction) {
        return {
          prevCreateGraphAction: nextProps.createGraphAction
        };
      }
      return null;
    }

    constructor(props) {
      super(props);
      this.state = {
        createGraphAction: {},
        prevCreateGraphAction: null
      };
    }

    componentDidMount() {
      this._mounted = true;
      this.setCreateGraphActioNodeMap();
    }

    componentDidUpdate(prevProps, prevState) {
      if (this.props.createGraphAction !== prevState.prevCreateGraphAction) {
        this.setCreateGraphActioNodeMap();
      }
    }

    componentWillUnmount() {
      this._mounted = false;
    }

    setCreateGraphActioNodeMap(props) {
      props = props || this.props;
      const { createGraphAction } = props;

      flatten(createGraphAction.result, (err, flattened) => {
        if (err) console.error(err);
        if (this._mounted) {
          this.setState({
            createGraphAction: Object.assign({}, createGraphAction, {
              result: { '@graph': flattened['@graph'] }
            })
          });
        }
      });
    }

    render() {
      const bem = new BemTags('@sa', '@documentation');
      const { children, screenWidth } = this.props;
      const { createGraphAction } = this.state;

      if (!createGraphAction.result) return null;

      return (
        <figure className={bem`workflow-example`}>
          <CreateGraphActionEditor
            readOnly={true}
            disabled={true}
            createGraphAction={createGraphAction}
            layout="singleColumn"
          />
          {children && (
            <figcaption className={bem`__caption @__default-ui-type--caption`}>
              {children}
            </figcaption>
          )}
        </figure>
      );
    }
  }
);
