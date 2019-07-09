import React from 'react';
import { BemTags } from '@scipe/ui';
import Iconoclass from '@scipe/iconoclass';
import ActionSpec from '../action-spec';
import ActionExample from '../action-example';
import A from '../a';

export default class ApiPublishAction extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section id="publish-action" className={bem`@__sub-section`}>
        <h3 className={bem`@__default-ui-type--subhead-1 @__icon-title`}>
          PublishAction <Iconoclass iconName="dispatcher" round={true} />
        </h3>

        <p>
          Publish actions (<A>PublishAction</A>) are used in the context of
          editorial workflows to release a version of a <A>Graph</A> publicly (<A
          >
            ReadPermission
          </A>{' '}
          with <code>public</code> <A>Audience</A>).
        </p>

        <p className={bem`@__warning`}>
          A <A>PublishAction</A> will also remove any blinding settings (<A>
            ViewIdentityPermission
          </A>) and make all the identities of a <A>Graph</A> visible.
        </p>

        <ActionExample
          action={{
            '@id': 'action:actionId',
            '@type': 'PublishAction',
            actionStatus: 'CompletedActionStatus',
            agent: 'role:roleId',
            object: 'graph:graphId?version=1.0.0-pre'
          }}
        />

        <ActionSpec
          scope={['Graph']}
          type="PublishAction"
          instantiated={true}
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
              value: 'releaseId'
            }
          }}
        />
      </section>
    );
  }
}
