import React from 'react';
import PropTypes from 'prop-types';

export default function DomSpy(ComposedComponent) {
  class DomSpied extends React.PureComponent {
    componentDidMount() {
      if (this.$root) {
        this.props.onUpdate(this.$root);
      }
    }

    componentDidUpdate(prevProps, prevState) {
      if (this.$root) {
        this.props.onUpdate(this.$root);
      }
    }

    render() {
      return (
        <div ref={$el => (this.$root = $el)}>
          <ComposedComponent {...this.props} />
        </div>
      );
    }
  }

  DomSpied.propTypes = {
    onUpdate: PropTypes.func.isRequired
  };

  DomSpied.ds3Id =
    ComposedComponent.ds3Id ||
    `ds3:${ComposedComponent.displayName || ComposedComponent.name}`;

  return DomSpied;
}
