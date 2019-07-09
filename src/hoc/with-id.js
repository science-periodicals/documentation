import React from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';

export default function WithId(ComposedComponent) {
  class Customized extends React.PureComponent {
    setId() {
      const $root = findDOMNode(this);
      if (!$root.id) {
        $root.id = this.props.id;
      }
    }

    componentDidMount() {
      this.setId();
    }

    componentDidUpdate() {
      this.setId();
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  Customized.propTypes = {
    id: PropTypes.string
  };

  return Customized;
}
