import React, { Fragment } from 'react';
import { BemTags } from '@scipe/ui';
import Iconoclass from '@scipe/iconoclass';
import ActionSpec from '../action-spec';
import ActionExample from '../action-example';
import A from '../a';
import SeeAntonymAction from './see-antonym-action';

export default class ApiRejectAction extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section id="reject-action" className={bem`@__sub-section`}>
        <h3 className={bem`@__default-ui-type--subhead-1 @__icon-title`}>
          RejectAction <Iconoclass iconName="personAdd" round={true} />
        </h3>

        <p>
          Reject actions (<A>RejectAction</A>) are used to reject (decline)
          invite actions (<A>InviteAction</A>).
        </p>

        <SeeAntonymAction type="AcceptAction" />

        <ActionExample
          action={{
            '@type': 'RejectAction',
            actionStatus: 'CompletedActionStatus',
            agent: 'role:roleId',
            object: 'action:inviteActionId'
          }}
        />

        <ActionSpec
          scope={['Graph', 'Periodical', 'Organization']}
          type="RejectAction"
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
                    The <code>@id</code> of a registered user matching the{' '}
                    <A>recipient</A> of the <A>object</A> of the{' '}
                    <A>RejectAction</A> (<A>InviteAction</A>)
                  </Fragment>
                )
              },
              {
                '@type': 'ContributorRole',
                value: (
                  <Fragment>
                    The <code>@id</code> of a <A>ContributorRole</A> matching
                    the <A>recipient</A> of the <A>object</A> of the{' '}
                    <A>RejectAction</A> (<A>InviteAction</A>)
                  </Fragment>
                )
              }
            ],
            object: {
              '@type': 'Action',
              value: 'inviteActionId'
            }
          }}
        />
      </section>
    );
  }
}
