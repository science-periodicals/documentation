import React from 'react';
import { BemTags } from '@scipe/ui';
import Iconoclass from '@scipe/iconoclass';
import ActionSpec from '../action-spec';
import ActionExample from '../action-example';
import A from '../a';

export default class ApiCreateReleaseAction extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section id="create-release-action" className={bem`@__sub-section`}>
        <h3 className={bem`@__default-ui-type--subhead-1 @__icon-title`}>
          CreateReleaseAction <Iconoclass iconName="dispatcher" round={true} />
        </h3>

        <p>
          Create release actions (<A>CreateReleaseAction</A>) are used in the
          context of editorial workflows to create{' '}
          <a href="#versioning">
            <strong>versioned</strong> releases
          </a>{' '}
          (snapshots) of graphs (<A>Graphs</A>).
        </p>

        <ActionExample
          action={{
            '@id': 'action:actionId',
            '@type': 'CreateReleaseAction',
            agent: 'role:roleId',
            actionStatus: 'CompletedActionStatus',
            object: 'graph:graphId'
          }}
        />

        <ActionSpec
          type="CreateReleaseAction"
          instantiated={true}
          scope={['Graph']}
          spec={{
            agent: {
              '@type': 'ContributorRole',
              value: 'scopeRoleId'
            },
            actionStatus: {
              '@type': 'ActionStatusType',
              value: [
                'ActiveActionStatus',
                'StagedActionStatus',
                'CompletedActionStatus'
              ]
            },
            object: {
              '@type': 'Graph',
              value: 'graphId'
            }
          }}
        />
      </section>
    );
  }
}
