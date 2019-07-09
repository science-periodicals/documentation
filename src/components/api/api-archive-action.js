import React from 'react';
import { BemTags } from '@scipe/ui';
import Iconoclass from '@scipe/iconoclass';
import ActionSpec from '../action-spec';
import ActionExample from '../action-example';
import A from '../a';

// TODO archive Graph and Periodical

export default class ApiArchiveAction extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section id="archive-action" className={bem`@__sub-section`}>
        <h3 className={bem`@__default-ui-type--subhead-1 @__icon-title`}>
          ArchiveAction <Iconoclass iconName="gear" round={true} />
        </h3>

        <p>
          Archive actions (<A>ArchvieAction</A>) are used to archive publication
          types (<A>PublicationTypes</A>), services (<A>Service</A>) or workflow
          specifications (<A>WorkflowSpecification</A>).
        </p>

        <ActionExample
          action={{
            '@type': 'ArchiveAction',
            actionStatus: 'CompletedActionStatus',
            agent: 'user:userId',
            object: 'service:serviceId'
          }}
        />

        <ActionSpec
          type="ArchiveAction"
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
