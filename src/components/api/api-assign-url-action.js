import React, { Fragment } from 'react';
import { BemTags } from '@scipe/ui';
import Iconoclass from '@scipe/iconoclass';
import ActionSpec from '../action-spec';
import ActionExample from '../action-example';
import A from '../a';
import SeeAntonymAction from './see-antonym-action';

export default class ApiAssignUrlAction extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section id="assign-url-action" className={bem`@__sub-section`}>
        <h3 className={bem`@__default-ui-type--subhead-1 @__icon-title`}>
          AssignUrlAction <Iconoclass iconName="gear" round={true} />
        </h3>

        <p>
          Assign URL actions (<A>AssignUrlAction</A>) are used to assign custom
          domains (and automatically provision the relevant SSL certificates) to
          journals (<A>Periodical</A>).
        </p>

        <SeeAntonymAction type="UnassignUrlAction" />

        <ActionExample
          action={{
            '@type': 'AssignUrlAction',
            actionStatus: 'CompletedActionStatus',
            agent: 'user:userId',
            recipient: 'journal:journalId',
            object: 'http://example.com'
          }}
        />

        <ActionSpec
          scope={['Graph']}
          type="AssignAction"
          spec={{
            agent: {
              '@type': 'Person',
              value: 'userId'
            },
            recipient: {
              '@type': 'Periodical',
              value: 'periodicalId'
            },
            actionStatus: {
              '@type': 'ActionStatusType',
              value: 'CompletedActionStatus'
            },
            object: {
              '@type': 'URL',
              value: <Fragment>The custom domain</Fragment>
            }
          }}
        />
      </section>
    );
  }
}
