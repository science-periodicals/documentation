import React from 'react';
import { BemTags } from '@scipe/ui';
import Iconoclass from '@scipe/iconoclass';
import ActionSpec from '../action-spec';
import ActionExample from '../action-example';
import A from '../a';

export default class ApiEndorseAction extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section id="endorse-action" className={bem`@__sub-section`}>
        <h3 className={bem`@__default-ui-type--subhead-1 @__icon-title`}>
          EndorseAction{' '}
          <Iconoclass iconName="checkDoublePending" round={true} />
        </h3>

        <p>
          Endorse actions (<A>EndorseAction</A>) are used in the context of
          editorial workflows to endorse actions that are part of the editorial
          workflow (including actions resulting from author services).
        </p>

        <ActionExample
          action={{
            '@id': 'action:actionId',
            '@type': 'EndorseAction',
            actionStatus: 'CompletedActionStatus',
            agent: 'role:roleId',
            object: 'action:actionId'
          }}
        />

        <ActionSpec
          scope={['Graph']}
          type="EndorseAction"
          instantiated={true}
          spec={{
            actionStatus: {
              '@type': 'ActionStatusType',
              value: 'CompletedActionStatus'
            },
            agent: {
              '@type': 'ContributorRole',
              agent: 'scopeRoleId'
            },
            object: { '@type': 'Action', value: 'workflowActionId' }
          }}
        />
      </section>
    );
  }
}
