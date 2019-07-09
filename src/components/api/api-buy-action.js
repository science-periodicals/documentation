import React, { Fragment } from 'react';
import { BemTags } from '@scipe/ui';
import Iconoclass from '@scipe/iconoclass';
import ActionSpec from '../action-spec';
import ActionExample from '../action-example';
import A from '../a';

export default class ApiBuyAction extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section id="buy-action" className={bem`@__sub-section`}>
        <h3 className={bem`@__default-ui-type--subhead-1 @__icon-title`}>
          BuyAction <Iconoclass iconName="money" round={true} />
        </h3>

        <p>
          Buy actions (<A>BuyAction</A>) are used to buy offers (<A>Offer</A>)
          associated with services (<A>Service</A>).
        </p>

        <ActionExample
          action={{
            '@type': 'BuyAction',
            actionStatus: 'CompletedActionStatus',
            agent: 'role:roleId',
            object: 'offer:offerId',
            instrumentOf: 'action:actionId',
            instrument: 'node:encodingId'
          }}
        />

        <ActionSpec
          scope={['Graph']}
          type="BuyAction"
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
                  <A>offers</A> property of the <A>Service</A> purchased.
                </Fragment>
              )
            },
            instrumentOf: {
              '@type': 'CreateReleaseAction',
              value: (
                <Fragment>
                  The <code>@id</code> of a <A>CreateReleaseAction</A> listing
                  the purchased <A>Service</A> as <A>potentialService</A>
                </Fragment>
              )
            },
            instrument: {
              '@type': 'MediaObject',
              value: (
                <Fragment>
                  The <code>@id</code> of an encoding (<A>MediaObject</A>)
                  required to satisfy the service output requirements (e.g. the
                  document to typeset for a service outputting typesetting
                  actions (<A>TypesettingAction</A>))
                </Fragment>
              )
            }
          }}
        />
      </section>
    );
  }
}
