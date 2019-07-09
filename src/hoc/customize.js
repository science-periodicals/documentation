import React from 'react';
import { arrayify, getId } from '@scipe/jsonld';
import { getTargetCollectionId } from 'schema.org/utils';
import { Value } from '@scipe/ui';
import PropTypes from 'prop-types';

export default function Customize(ComposedComponent) {
  class Customized extends React.Component {
    render() {
      const id =
        ComposedComponent.ds3Id ||
        `ds3:${ComposedComponent.displayName || ComposedComponent.name}`;
      const { styleGuide } = this.props;
      const updateAction = arrayify(styleGuide.potentialAction).find(
        action =>
          action.object &&
          getTargetCollectionId(action) === getId(styleGuide) &&
          action.targetCollection.hasSelector &&
          action.targetCollection.hasSelector.nodeId === id
      );
      let children;
      if (updateAction && updateAction.object.text) {
        children = <Value>{updateAction.object.text}</Value>;
      }

      return (
        <ComposedComponent {...this.props} updateAction={updateAction}>
          {children}
        </ComposedComponent>
      );
    }
  }

  Customized.propTypes = {
    styleGuide: PropTypes.object.isRequired
  };

  Customized.ds3Id =
    ComposedComponent.ds3Id ||
    `ds3:${ComposedComponent.displayName || ComposedComponent.name}`;

  return Customized;
}
