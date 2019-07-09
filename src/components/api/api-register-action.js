import React, { Fragment } from 'react';
import { BemTags } from '@scipe/ui';
import Iconoclass from '@scipe/iconoclass';
import ActionSpec from '../action-spec';
import ActionExample from '../action-example';
import A from '../a';

export default class ApiRegisterAction extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section id="register-action" className={bem`@__sub-section`}>
        <h3 className={bem`@__default-ui-type--subhead-1 @__icon-title`}>
          RegisterAction <Iconoclass iconName="gear" round={true} />
        </h3>

        <p>
          Register actions (<A>RegisterAction</A>) are used to register new
          users (<A>Person</A>) to sci.pe.
        </p>

        <ActionExample
          action={{
            '@type': 'RegisterAction',
            actionStatus: 'ActiveActionStatus',
            agent: {
              '@id': 'user:username',
              '@type': 'Person',
              email: 'mailto:user@example.com',
              password: 'secret'
            },
            object: 'https://sci.pe'
          }}
        />

        <ActionSpec
          type="RegisterAction"
          spec={{
            agent: {
              '@type': 'Person',
              value: (
                <Fragment>
                  <p>An object with:</p>
                  <ul>
                    <li>
                      <code>@id</code> (of the form{' '}
                      <code>{'user:<username>'}</code>)
                    </li>
                    <li>
                      <code>@type</code> (set to “Person“)
                    </li>
                    <li>
                      <A>email</A> (a valid email address prefixed by{' '}
                      <code>mailto:</code>)
                    </li>
                    <li>
                      <A>password</A>
                    </li>
                    <li>
                      Any other properties of the <A>Person</A> class (optional)
                    </li>
                  </ul>
                </Fragment>
              )
            },
            actionStatus: {
              '@type': 'ActionStatusType',
              value: 'ActiveActionStatus'
            },
            object: {
              '@type': '@id',
              value: 'https://sci.pe'
            }
          }}
        />

        <p className={bem`@__warning`}>
          POSTing an active register action will trigger the delivery of an
          email containing an activation link to the <A>agent</A> of the action.
          Registration will only take effect (and set the <A>actionStatus</A> of
          the <A>RegisterAction</A> to <A>CompletedActionStatus</A>) after the
          user clicks on the activation link.
        </p>
      </section>
    );
  }
}
