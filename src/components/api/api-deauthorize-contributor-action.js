import React, { Fragment } from 'react';
import { BemTags } from '@scipe/ui';
import Iconoclass from '@scipe/iconoclass';
import ActionSpec from '../action-spec';
import ActionExample from '../action-example';
import A from '../a';
import SeeAntonymAction from './see-antonym-action';

export default class ApiDeauthorizeContributorAction extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section
        id="deauthorize-contributor-action"
        className={bem`@__sub-section`}
      >
        <h3 className={bem`@__default-ui-type--subhead-1 @__icon-title`}>
          DeauthorizeContributorAction{' '}
          <Iconoclass iconName="personAdd" round={true} />
        </h3>

        <p>
          Deauthorize contributor actions (<A>DeauthorizeContributorAction</A>)
          are used to unauthorize future contributions of a user or{' '}
          <a href="#persona">persona</a> (<A>recipient</A>) to an <A>object</A>{' '}
          (<A>Graph</A>, <A>Periodical</A> or <A>Organization</A>).
        </p>

        <SeeAntonymAction type="AuthorizeContributorAction" />

        <ActionExample
          action={{
            '@type': 'DeauthorizeContributorAction',
            actionStatus: 'CompletedActionStatus',
            agent: 'role:roleId',
            recipient: 'role:producerRoleId',
            object: 'graph:graphId'
          }}
        />

        <ActionSpec
          type="DeauthorizeContributorAction"
          scope={['Graph', 'Periodical', 'Organization']}
          spec={{
            actionStatus: {
              '@type': 'ActionStatusType',
              value: 'CompletedActionStatus'
            },
            agent: [
              {
                '@type': 'Person',
                value: 'userId'
              },
              { '@type': 'ContributorRole', value: 'scopeRoleId' }
            ],
            recipient: [
              {
                '@type': 'Person',
                value: (
                  <Fragment>
                    <p>
                      The <code>@id</code> of a registered user.
                    </p>
                    <p className={bem`@__warning`}>
                      Specifying the <A>agent</A> as user <code>@id</code> will
                      have the effect of deauthorizing any roles involving the
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
