import React, { Fragment } from 'react';
import { BemTags } from '@scipe/ui';
import Iconoclass from '@scipe/iconoclass';
import ActionSpec from '../action-spec';
import ObjectSpec from '../object-spec';
import ActionExample from '../action-example';
import A from '../a';
import SeeAntonymAction from './see-antonym-action';

export default class ApiAuthorizeContributorAction extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section
        id="authorize-contributor-action"
        className={bem`@__sub-section`}
      >
        <h3 className={bem`@__default-ui-type--subhead-1 @__icon-title`}>
          AuthorizeContributorAction{' '}
          <Iconoclass iconName="personAdd" round={true} />
        </h3>

        <p>
          Authorize contributor actions (<A>AuthorizeContributorAction</A>) are
          used to add a <a href="#persona">persona</a> (<A>recipient</A>) to an{' '}
          <A>object</A> (<A>Graph</A>, <A>Periodical</A> or <A>Organization</A>)
          without requiring the approval of the <A>recipient</A>.
        </p>

        <p className={bem`@sa__warning`}>
          Persona can only be added to an <A>object</A> if the underlying user
          is already a contributor of the <A>object</A> or, in case when the
          object is a <A>Graph</A>, if the <A>recipient</A> (<A>Role</A>) is a
          contributor of the <A>Periodical</A> associated with the <A>Graph</A>.{' '}
          When this condition are not satisfied, <A>InviteAction</A> or{' '}
          <A>JoinAction</A> should be used.
        </p>

        <SeeAntonymAction type="DeauthorizeContributorAction" />

        <ActionExample
          action={{
            '@type': 'AuthorizeContributorAction',
            actionStatus: 'CompletedActionStatus',
            agent: 'role:roleId',
            recipient: 'role:producerRoleId',
            object: 'graph:graphId'
          }}
        />

        <ActionSpec
          type="AuthorizeContributorAction"
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
            recipient: {
              '@type': 'ContributorRole',
              value: (
                <Fragment>
                  Either:
                  <ul>
                    <li>
                      <ObjectSpec
                        others={true}
                        spec={{
                          '@type': 'ContributorRole',
                          roleName: 'required',
                          name: 'optional',
                          agent: 'required'
                        }}
                      />
                    </li>
                    <li>
                      Or, in case where the <A>object</A> is a <A>Graph</A> the{' '}
                      <code>@id</code> of a <A>ContributorRole</A> belonging to
                      the journal (<A>Periodical</A>) to which the <A>Graph</A>{' '}
                      belongs (<A>isPartOf</A>).
                    </li>
                  </ul>
                </Fragment>
              )
            },
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
