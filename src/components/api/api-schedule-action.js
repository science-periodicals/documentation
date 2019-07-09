import React from 'react';
import { BemTags } from '@scipe/ui';
import Iconoclass from '@scipe/iconoclass';
import ActionSpec from '../action-spec';
import ActionExample from '../action-example';
import A from '../a';

export default class ApiScheduleAction extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section id="schedule-action" className={bem`@__sub-section`}>
        <h3 className={bem`@__default-ui-type--subhead-1 @__icon-title`}>
          ScheduleAction <Iconoclass iconName="calendar" round={true} />
        </h3>

        <p>
          Schedule actions (<A>ScheduleAction</A>) are used in the context of
          editorial workflows to reschedule actions.
        </p>

        <ActionExample
          action={{
            '@type': 'ScheduleAction',
            actionStatus: 'CompletedActionStatus',
            agent: 'role:roleId',
            object: 'action:actionId',
            scheduledTime: new Date().toISOString()
          }}
        />

        <ActionSpec
          scope={['Graph']}
          type="ScheduleAction"
          spec={{
            actionStatus: {
              '@type': 'ActionStatusType',
              value: 'CompletedActionStatus'
            },
            agent: {
              '@type': 'ContributorRole',
              value: 'scopeRoleId'
            },
            object: {
              '@type': 'Action',
              value: 'workflowActionId'
            },
            scheduledTime: {
              '@type': 'DateTime',
              value: 'dateTime'
            }
          }}
        />
      </section>
    );
  }
}
