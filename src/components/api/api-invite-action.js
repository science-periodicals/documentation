import React, { Fragment } from 'react';
import { BemTags } from '@scipe/ui';
import Iconoclass from '@scipe/iconoclass';
import Info from '../info';
import JsonldExample from '../jsonld-example';
import ActionSpec from '../action-spec';
import ObjectSpec from '../object-spec';
import ActionExample from '../action-example';
import A from '../a';

export default class ApiInviteAction extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section id="invite-action" className={bem`@__sub-section`}>
        <h3 className={bem`@__default-ui-type--subhead-1 @__icon-title`}>
          InviteAction <Iconoclass iconName="personAdd" round={true} />
        </h3>

        <p>
          Invite actions (<A>InviteAction</A>) are used in conjonction with{' '}
          accept and reject actions (<A>AccceptAction</A>, <A>RejectAction</A>)
          to invite a <A>recipient</A> to a <A>Graph</A>, <A>Periodical</A> or
          an <A>Organization</A>.
        </p>

        <p>
          Depending on its <A>actionStatus</A> property an <A>InviteAction</A>{' '}
          is:
        </p>

        <ul>
          <li>
            queued (ready to be sent) (<A>PotentialActionStatus</A>)
          </li>
          <li>
            sent and waiting for the recipient to accept or reject it (<A>
              ActiveActionActionStatus
            </A>)
          </li>
          <li>
            executed (accepted or rejected) (<A>CompletedActionStatus</A>)
          </li>
        </ul>

        <p className={bem`@__warning`}>
          The <A>CompletedActionStatus</A> can only be set through an{' '}
          <A>AcceptAction</A> or a <A>RejectAction</A>
        </p>

        <ActionExample
          action={{
            '@type': 'InviteAction',
            actionStatus: 'ActiveActionStatus',
            agent: 'role:roleId',
            recipient: {
              roleName: 'reviewer',
              recipient: { email: 'mailto:recipient@example.com' }
            },
            object: 'graph:graphId'
          }}
        />

        <ActionSpec
          scope={['Graph', 'Periodical', 'Organization']}
          type="InviteAction"
          spec={{
            actionStatus: {
              '@type': 'ActionStatusType',
              value: ['PotentialActionStatus', 'ActiveActionStatus']
            },
            agent: {
              '@type': 'ContributorRole',
              value: 'scopeRoleId'
            },
            recipient: [
              {
                '@type': 'Person',
                value: (
                  <Fragment>
                    A user <code>@id</code> or a <A>Person</A> object with at
                    least an <A>email</A> property in case of a non registered
                    user.
                  </Fragment>
                )
              },
              {
                '@type': 'ContributorRole',
                value: (
                  <ObjectSpec
                    spec={{
                      '@type': 'ContributorRole',
                      recipient: (
                        <Fragment>
                          A user <code>@id</code> or a <A>Person</A> object with
                          at least an <A>email</A> property in case of a non
                          registered user.
                        </Fragment>
                      ),
                      roleName: (
                        <Fragment>
                          required, one of <code>{`"author"`}</code>,{' '}
                          <code>{`"reviewer"`}</code>, <code>{`"editor"`}</code>,{' '}
                          <code>{`"producer"`}</code>
                        </Fragment>
                      )
                    }}
                    others={true}
                  />
                )
              }
            ],
            participant: {
              '@type': 'Audience',
              value: 'audience'
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

        <Info>
          <header>
            Granting admin permission to the recipient of an invite
          </header>

          <p>
            In case of invite to <A>Periodical</A>, it is possible to grant{' '}
            <A>AdminPermission</A> to the <A>recipient</A> of an{' '}
            <A>InviteAction</A> by adding a <A>DigitalDocumentPermission</A> as{' '}
            <A>instrument</A> of the <A>InviteAction</A>.
          </p>

          <JsonldExample
            root={false}
            data={{
              '@type': 'InviteAction',
              actionStatus: 'ActiveActionStatus',
              agent: 'role:roleId',
              recipient: {
                roleName: 'editor',
                name: 'editor-in-chief',
                recipient: { email: 'mailto:recipient@example.com' }
              },
              instrument: {
                '@type': 'DigitalDocumentPermission',
                permissionType: 'AdminPermission',
                grantee: { email: 'mailto:recipient@example.com' }
              },
              object: 'journal:journalId'
            }}
          >
            Inviting a recipient as admin
          </JsonldExample>
        </Info>
      </section>
    );
  }
}
