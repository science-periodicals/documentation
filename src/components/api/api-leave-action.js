import React, { Fragment } from 'react';
import { BemTags } from '@scipe/ui';
import Iconoclass from '@scipe/iconoclass';
import ActionSpec from '../action-spec';
import ActionExample from '../action-example';
import A from '../a';
import SeeAntonymAction from './see-antonym-action';

export default class ApiLeaveAction extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section id="leave-action" className={bem`@__sub-section`}>
        <h3 className={bem`@__default-ui-type--subhead-1 @__icon-title`}>
          LeaveAction <Iconoclass iconName="personAdd" round={true} />
        </h3>

        <p>
          Leave actions (<A>LeaveAction</A>) are used to set the <A>endDate</A>{' '}
          of a <A>Role</A> (<A>agent</A>) contributing an <A>object</A> (<A>
            Graph
          </A>, <A>Periodical</A> or <A>Organization</A>).
        </p>

        <SeeAntonymAction type="JoinAction" />

        <ActionExample
          action={{
            '@type': 'LeaveAction',
            actionStatus: 'CompletedActionStatus',
            agent: 'role:roleId',
            object: 'graph:graphId'
          }}
        />

        <ActionSpec
          type="LeaveAction"
          scope={['Graph', 'Periodical', 'Organization']}
          spec={{
            actionStatus: {
              '@type': 'ActionStatusType',
              value: 'CompletedActionStatus'
            },
            agent: [
              {
                '@type': 'Person',
                value: (
                  <Fragment>
                    <p>
                      The <code>@id</code> of a registered user.
                    </p>
                    <p className={bem`@__warning`}>
                      Specifying the <A>agent</A> as user <code>@id</code> will
                      have the effect of terminating any roles involving the
                      user.
                    </p>
                  </Fragment>
                )
              },
              {
                '@type': 'ContributorRole',
                value: 'scopeRoleId'
              }
            ],
            object: [
              {
                '@type': 'Graph',
                value: 'graphId'
              },
              {
                '@type': 'Periodical',
                value: 'periodicalId'
              },
              {
                '@type': 'Organization',
                value: 'organizationId'
              }
            ]
          }}
        />
      </section>
    );
  }
}
