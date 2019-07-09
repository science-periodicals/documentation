import React from 'react';
import { BemTags } from '@scipe/ui';
import Iconoclass from '@scipe/iconoclass';
import ActionSpec from '../action-spec';
import ActionExample from '../action-example';
import A from '../a';
import SeeAntonymAction from './see-antonym-action';

export default class ApiDeactivateAction extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section id="deactivate-action" className={bem`@__sub-section`}>
        <h3 className={bem`@__default-ui-type--subhead-1 @__icon-title`}>
          DeactivateAction <Iconoclass iconName="gear" round={true} />
        </h3>

        <p>
          Deactivate actions (<A>DeactivateAction</A>) are used to deactivate
          services (<A>Service</A>), workflow specifications (<A>
            WorkflowSpecification
          </A>) or publication types (<A>PublicationType</A>).
        </p>

        <SeeAntonymAction type="ActivateAction" />

        <ActionExample
          action={{
            '@type': 'DeactivateAction',
            actionStatus: 'CompletedActionStatus',
            agent: 'user:userId',
            object: 'service:serviceId'
          }}
        />

        <ActionSpec
          type="DeactivateAction"
          spec={{
            actionStatus: {
              '@type': 'ActionStatusType',
              value: 'CompletedActionStatus'
            },
            agent: {
              '@type': 'Person',
              value: 'userId'
            },
            object: [
              {
                '@type': 'Service',
                value: 'serviceId'
              },
              {
                '@type': 'WorkflowSpecification',
                value: 'workflowId'
              },
              {
                '@type': 'PublicationType',
                value: 'publicationTypeId'
              }
            ]
          }}
        />
      </section>
    );
  }
}
