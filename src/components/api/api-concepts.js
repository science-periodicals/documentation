import React from 'react';
import { BemTags } from '@scipe/ui';
import ApiConceptJsonld from './api-concept-jsonld';
import ApiConceptActions from './api-concept-actions';
import ApiConceptGraph from './api-concept-graph';
import ApiConceptMvcc from './api-concept-mvcc';
import ApiConceptRoles from './api-concept-roles';
import ApiConceptContactPoints from './api-concept-contact-points';
import ApiConceptAudiences from './api-concept-audiences';
import ApiConceptSelectors from './api-concept-selectors';
import ApiConceptAcl from './api-concept-acl';
import ApiConceptStyle from './api-concept-style';
import ApiConceptTriggers from './api-concept-triggers';

export default class ApiConcepts extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section id="concepts" className={bem`api @__section`}>
        <h2 className={bem`@__default-ui-type--headline`}>Concepts</h2>

        <ApiConceptJsonld />
        <ApiConceptActions />
        <ApiConceptGraph />
        <ApiConceptMvcc />
        <ApiConceptRoles />
        <ApiConceptContactPoints />
        <ApiConceptAudiences />
        <ApiConceptSelectors />
        <ApiConceptAcl />
        <ApiConceptTriggers />
        <ApiConceptStyle />
      </section>
    );
  }
}
