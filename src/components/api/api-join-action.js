import React, { Fragment } from 'react';
import { BemTags } from '@scipe/ui';
import Iconoclass from '@scipe/iconoclass';
import ActionSpec from '../action-spec';
import ObjectSpec from '../object-spec';
import ActionExample from '../action-example';
import A from '../a';
import SeeAntonymAction from './see-antonym-action';

export default class ApiJoinAction extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section id="join-action" className={bem`@__sub-section`}>
        <h3 className={bem`@__default-ui-type--subhead-1 @__icon-title`}>
          JoinAction <Iconoclass iconName="personAdd" round={true} />
        </h3>

        <p>
          Join actions (<A>JoinAction</A>) are used to allow user already
          contributing to a <A>Graph</A>, <A>Periodical</A> or{' '}
          <A>Organization</A> to join it as an additional role (<a href="#persona">
            persona
          </a>).
        </p>

        <SeeAntonymAction type="LeaveAction" />

        <ActionExample
          action={{
            '@type': 'JoinAction',
            actionStatus: 'CompletedActionStatus',
            agent: 'role:roleId',
            object: 'graph:graphId'
          }}
        />

        <ActionSpec
          type="JoinAction"
          scope={['Graph', 'Periodical', 'Organization']}
          spec={{
            actionStatus: {
              '@type': 'ActionStatusType',
              value: 'CompletedActionStatus'
            },
            agent: {
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
