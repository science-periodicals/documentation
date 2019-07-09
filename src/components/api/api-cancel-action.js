import React, { Fragment } from 'react';
import { BemTags, SchemaLink as A } from '@scipe/ui';
import Iconoclass from '@scipe/iconoclass';
import ActionSpec from '../action-spec';
import ActionExample from '../action-example';

export default class ApiCancelAction extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section id="cancel-action" className={bem`@__sub-section`}>
        <h3 className={bem`@__default-ui-type--subhead-1 @__icon-title`}>
          CancelAction <Iconoclass iconName="gear" round={true} />
        </h3>

        <p>
          Cancel actions (<A>CancelAction</A>) are used to cancel:
        </p>

        <ul>
          <li>
            active <A>UploadAction</A>
          </li>
          <li>
            active document transformation actions (<A>ImageProcessingAction</A>,{' '}
            <A>AudioVideoProcessingAction</A>, <A>DocumentProcessingAction</A>)
          </li>
          <li>
            Instances of actions part of an editorial workflow and having a{' '}
            <A>minInstances</A> and <A>maxInstances</A> property with{' '}
            <code>{`maxInstances > minInstance`}</code>
          </li>
        </ul>

        <ActionExample
          action={{
            '@type': 'CancelAction',
            actionStatus: 'CompletedActionStatus',
            agent: 'role:roleId',
            object: 'action:actionId'
          }}
        />

        <ActionSpec
          scope={['Graph']}
          type="CancelAction"
          spec={{
            agent: {
              '@type': 'ContributorRole',
              value: 'scopeRoleId'
            },
            actionStatus: {
              '@type': 'ActionStatusType',
              value: 'CompletedActionStatus'
            },
            object: [
              {
                '@type': 'Action',
                value: (
                  <Fragment>
                    <p>
                      The <code>@id</code> of an active <A>UploadAction</A>,{' '}
                      <A>ImageProcessingAction</A>,{' '}
                      <A>AudioVideoProcessingAction</A>,{' '}
                      <A>DocumentProcessingAction</A> or any action part of an
                      editorial workflow and having a <A>minInstances</A> and{' '}
                      <A>maxInstances</A> property with{' '}
                      <code>{`maxInstances > minInstance`}</code>.
                    </p>
                    <p className={bem`@__warning`}>
                      In this later case only{' '}
                      <strong>unassigned actions</strong> down to the value
                      specified by the <A>minInstances</A> property can be
                      cancelled.
                    </p>
                  </Fragment>
                )
              }
            ]
          }}
        />
      </section>
    );
  }
}
