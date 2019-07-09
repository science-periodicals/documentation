import React, { Fragment } from 'react';
import { BemTags } from '@scipe/ui';
import Iconoclass from '@scipe/iconoclass';
import ActionSpec from '../action-spec';
import ActionExample from '../action-example';
import A from '../a';

export default class ApiPayAction extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section id="pay-action" className={bem`@__sub-section`}>
        <h3 className={bem`@__default-ui-type--subhead-1 @__icon-title`}>
          PayAction <Iconoclass iconName="money" round={true} />
        </h3>

        <p>
          Pay actions (<A>PayAction</A>) are used in the context of editorial
          workflows to pay <abbr title="Article Processing Charge">APC</abbr> (<A
          >
            Offer
          </A>).
        </p>

        <ActionExample
          action={{
            '@type': 'PayAction',
            actionStatus: 'CompletedActionStatus',
            agent: 'role:roleId',
            object: 'offer:offerId',
            instrumentOf: 'action:actionId'
          }}
        />

        <ActionSpec
          scope={['Graph']}
          type="PayAction"
          spec={{
            agent: {
              '@type': 'ContributorRole',
              value: 'scopeRoleId'
            },
            actionStatus: {
              '@type': 'ActionStatusType',
              value: 'CompletedActionStatus'
            },
            object: {
              '@type': 'Offer',
              value: (
                <Fragment>
                  The <code>@id</code> of an <A>Offer</A> listed in the{' '}
                  <A>expectsAcceptanceOf</A> property of the{' '}
                  <A>CreateReleaseAction</A> listed in the <A>instrumentOf</A>{' '}
                  property of the <A>PayAction</A>.
                </Fragment>
              )
            },
            instrumentOf: {
              '@type': 'CreateReleaseAction',
              value: (
                <Fragment>
                  The <code>@id</code> of a <A>CreateReleaseAction</A> listing
                  the paid <A>Offer</A> in its <A>expectsAcceptanceOf</A>{' '}
                  property
                </Fragment>
              )
            }
          }}
        />
      </section>
    );
  }
}
