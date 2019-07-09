import React from 'react';
import { BemTags } from '@scipe/ui';
import Iconoclass from '@scipe/iconoclass';
import ActionSpec from '../action-spec';
import ActionExample from '../action-example';
import A from '../a';
import SeeAntonymAction from './see-antonym-action';

export default class ApiAssignAction extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section id="assign-action" className={bem`@__sub-section`}>
        <h3 className={bem`@__default-ui-type--subhead-1 @__icon-title`}>
          AssignAction <Iconoclass iconName="dispatcher" round={true} />
        </h3>

        <p>
          Assign actions (<A>AssignAction</A>) are used in the context of
          editorial workflows to allow an assigner (the <A>agent</A> of the{' '}
          <A>AssignAction</A>) to assign a workflow action (the <A>object</A> of
          the <A>AssignAction</A>) to the value specified by the{' '}
          <A>recipient</A> property of the <A>AssignAction</A> (assignee).
        </p>

        <SeeAntonymAction type="UnassignAction" />

        <ActionExample
          action={{
            '@type': 'AssignAction',
            actionStatus: 'CompletedActionStatus',
            agent: 'role:assignerId',
            recipient: 'role:assigneeId',
            object: 'action:actionId'
          }}
        />

        <ActionSpec
          scope={['Graph']}
          type="AssignAction"
          spec={{
            agent: {
              '@type': 'ContributorRole',
              value: 'scopeRoleId'
            },
            recipient: {
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
