import React from 'react';
import { BemTags } from '@scipe/ui';
import Iconoclass from '@scipe/iconoclass';
import ActionSpec from '../action-spec';
import ActionExample from '../action-example';
import A from '../a';
import SeeAntonymAction from './see-antonym-action';

export default class ApiActivateAction extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section id="activate-action" className={bem`@__sub-section`}>
        <h3 className={bem`@__default-ui-type--subhead-1 @__icon-title`}>
          ActivateAction <Iconoclass iconName="gear" round={true} />
        </h3>

        <p>
          Activate actions (<A>ActivateAction</A>) are used to activate services
          (<A>Service</A>), workflow specifications (<A>
            WorkflowSpecification
          </A>) or publication types (<A>PublicationType</A>).
        </p>

        <SeeAntonymAction type="DeactivateAction" />

        <ActionExample
          action={{
            '@type': 'ActivateAction',
            actionStatus: 'CompletedActionStatus',
            agent: 'user:userId',
            object: 'service:serviceId'
          }}
        />

        <ActionSpec
          type="ActivateAction"
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
