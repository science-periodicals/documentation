import React from 'react';
import { BemTags } from '@scipe/ui';
import Iconoclass from '@scipe/iconoclass';
import ActionSpec from '../action-spec';
import ActionExample from '../action-example';
import A from '../a';
import SeeAntonymAction from './see-antonym-action';

export default class ApiUnassignContactPointAction extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section
        id="unassign-contact-point-action"
        className={bem`@__sub-section`}
      >
        <h3 className={bem`@__default-ui-type--subhead-1 @__icon-title`}>
          UnassignContactPointAction <Iconoclass iconName="gear" round={true} />
        </h3>

        <p>
          Unassign contact point actions (<A>UnassignContactPointAction</A>) are
          used to unassign an existing contact point (<A>ContactPoint</A>) from
          a <A>Role</A> (belonging to a <A>Graph</A> or a <A>Periodical</A>) or
          an <A>Organization</A>.
        </p>

        <SeeAntonymAction type="AssignContactPointAction" />

        <ActionExample
          action={{
            '@type': 'UnassignContactPointAction',
            actionStatus: 'CompletedActionStatus',
            agent: 'user:userId',
            recipient: 'role:roleId',
            object: 'contact:contactPointId'
          }}
        />

        <ActionSpec
          scope={['Graph', 'Periodical']}
          type="UnassignContactPointAction"
          spec={{
            agent: {
              '@type': 'Person',
              value: 'userId'
            },
            recipient: [
              {
                '@type': 'ContributorRole',
                value: 'scopeRoleId'
              },
              {
                '@type': 'Organization',
                value: 'organizationId'
              }
            ],
            actionStatus: {
              '@type': 'ActionStatusType',
              value: 'CompletedActionStatus'
            },
            object: {
              '@type': 'ContactPoint',
              value: 'contactPointId'
            }
          }}
        />
      </section>
    );
  }
}
