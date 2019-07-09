import React from 'react';
import { BemTags } from '@scipe/ui';
import Iconoclass from '@scipe/iconoclass';
import ActionSpec from '../action-spec';
import ActionExample from '../action-example';
import A from '../a';
import SeeAntonymAction from './see-antonym-action';

export default class ApiUnasssignAction extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section id="unasssign-action" className={bem`@__sub-section`}>
        <h3 className={bem`@__default-ui-type--subhead-1 @__icon-title`}>
          UnasssignAction <Iconoclass iconName="dispatcher" round={true} />
        </h3>

        <p>
          Unasssign actions (<A>UnasssignAction</A>) are used in the context of
          editorial workflows to unassign a workflow action (the <A>object</A>{' '}
          of the <A>UnassignAction</A>).
        </p>

        <SeeAntonymAction type="AssignAction" />

        <ActionExample
          action={{
            '@type': 'UnasssignAction',
            actionStatus: 'CompletedActionStatus',
            agent: 'role:roleId',
            object: 'action:actionId'
          }}
        />

        <ActionSpec
          scope={['Graph']}
          type="UnasssignAction"
          spec={{
            agent: {
              '@type': 'ContributorRole',
              value: 'scopeRoleId'
            },

            actionStatus: {
              '@type': 'ActionStatusType',
              value: 'CompletedActionStatus'
            },
            object: {
              '@type': 'Action',
              value: 'workflowActionId'
            }
          }}
        />
      </section>
    );
  }
}
