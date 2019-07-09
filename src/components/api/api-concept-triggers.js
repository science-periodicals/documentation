import React from 'react';
import { BemTags, SchemaLink as A } from '@scipe/ui';
import JsonldExample from '../jsonld-example';

export default class ApiConceptTriggers extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section id="triggers" className={bem`api @__sub-section`}>
        <h3 className={bem`@__default-ui-type--subhead-1`}>Triggers</h3>

        <p>
          Triggers are used to automatically set the value of some properties in
          response to external changes.
        </p>
        <div className={bem`@__table`}>
          <table>
            <caption>Available triggers</caption>

            <thead>
              <tr>
                <th>Property</th>
                <th>
                  Expected value (<A>TriggerType</A>)
                </th>
                <th>Effect</th>
                <th>Used on these types</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <A>activateOn</A>
                </td>
                <td>
                  <ul className={bem`@__inline-list`}>
                    <li>
                      <A>OnObjectStagedActionStatus</A>
                    </li>
                  </ul>
                </td>
                <td>
                  Set the <A>actionStatus</A> property to{' '}
                  <A>ActivateActionStatus</A>
                </td>
                <td>
                  <ul className={bem`@__inline-list`}>
                    <li>
                      <A>EndorseAction</A>
                    </li>
                  </ul>
                </td>
              </tr>

              <tr>
                <td>
                  <A>completedOn</A>
                </td>
                <td>
                  One of{' '}
                  <ul className={bem`@__inline-list`}>
                    <li>
                      <A>OnObjectActiveActionStatus</A>
                    </li>
                    <li>
                      <A>OnObjectStagedActionStatus</A>
                    </li>
                    <li>
                      <A>OnObjectFailedActionStatus</A>
                    </li>
                    <li>
                      <A>OnObjectCompletedActionStatus</A>
                    </li>
                    <li>
                      <A>OnEndorsed</A>
                    </li>
                    <li>
                      <A>OnWorkflowStageEnd</A>
                    </li>
                    <li>
                      <A>OnWorkerEnd</A>
                    </li>
                  </ul>
                </td>
                <td>
                  Set the <A>actionStatus</A> property to{' '}
                  <A>CompletedActionStatus</A>
                </td>
                <td>
                  <ul className={bem`@__inline-list`}>
                    <li>
                      <A>AskAction</A>
                    </li>
                    <li>
                      <A>CreateReleaseAction</A>
                    </li>
                    <li>
                      <A>ReviewAction</A>
                    </li>
                    <li>
                      <A>AssessAction</A>
                    </li>
                    <li>
                      <A>PublishAction</A>
                    </li>
                    <li>
                      <A>AuthorizeAction</A>
                    </li>
                    <li>
                      <A>InformAction</A>
                    </li>
                    <li>
                      <A>UploadAction</A>
                    </li>
                  </ul>
                </td>
              </tr>

              <tr>
                <td>
                  <A>valueRequiredOn</A>
                </td>
                <td>
                  <ul className={bem`@__inline-list`}>
                    <li>
                      <A>OnPublicationAccepted</A>
                    </li>
                  </ul>
                </td>
                <td>
                  Set the <A>valueRequired</A> property to <code>true</code>
                </td>
                <td>
                  <ul className={bem`@__inline-list`}>
                    <li>
                      <A>PropertyValueSpecification</A>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <JsonldExample
          data={{
            '@type': 'ReviewAction',
            agent: 'role:reviewerId',
            actionStatus: 'ActiveActionStatus',
            potentialAction: {
              '@type': 'AuthorizeAction',
              actionStatus: 'PotentialActionStatus',
              completeOn: 'OnObjectCompletedActionStatus',
              recipient: {
                '@type': 'Audience',
                audienceType: 'editor'
              }
            }
          }}
        >
          Example of a trigger (<A>completeOn</A>:{' '}
          <A>OnObjectCompletedActionStatus</A>). Here the editors (<code>
            editor
          </code>{' '}
          <A>Audience</A>) will gain access to the <A>ReviewAction</A> when the{' '}
          <A>ReviewAction</A> (<A>object</A> of the <A>AuthorizeAction</A>)
          currently in <A>ActiveActionStatus</A> will be completed.
        </JsonldExample>
      </section>
    );
  }
}
