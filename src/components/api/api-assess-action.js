import React, { Fragment } from 'react';
import { BemTags } from '@scipe/ui';
import Iconoclass from '@scipe/iconoclass';
import ActionSpec from '../action-spec';
import ActionExample from '../action-example';
import A from '../a';

export default class ApiAssessAction extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section id="assess-action" className={bem`@__sub-section`}>
        <h3 className={bem`api @__default-ui-type--subhead-1 @__icon-title`}>
          AssessAction <Iconoclass iconName="dispatcher" round={true} />
        </h3>

        <p>
          Assess actions (<A>AssessAction</A>) are used in the context of
          editorial workflows to capture the assessment (<A>result</A>) made by
          the <A>agent</A> regarding the action’s <A>object</A>.
        </p>

        <ActionExample
          action={{
            '@id': 'action:actionId',
            '@type': 'AssessAction',
            agent: 'role:editor',
            actionStatus: 'CompletedActionStatus',
            object: 'graph:graphId?version=1.0.0-pre',
            result: 'action:reject'
          }}
        />

        <ActionSpec
          type="AssessAction"
          scope={'Graph'}
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
            },
            result: {
              '@type': 'Action',
              value: (
                <Fragment>
                  The <code>@id</code> of an <A>Action</A> (<A>
                    StartWorkflowStageAction
                  </A>{' '}
                  or <A>RejectAction</A>) listed in the <A>potentialResult</A>{' '}
                  of the action
                </Fragment>
              )
            }
          }}
        />
      </section>
    );
  }
}
