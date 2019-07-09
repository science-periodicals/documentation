import React, { Fragment } from 'react';
import { BemTags } from '@scipe/ui';
import Iconoclass from '@scipe/iconoclass';
import ActionSpec from '../action-spec';
import ObjectSpec from '../object-spec';
import ActionExample from '../action-example';
import A from '../a';
import SeeAntonymAction from './see-antonym-action';

export default class ApiAuthorizeAction extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section id="authorize-action" className={bem`@__sub-section`}>
        <h3 className={bem`@__default-ui-type--subhead-1 @__icon-title`}>
          AuthorizeAction <Iconoclass iconName="gear" round={true} />
        </h3>

        <p>
          Authorize actions (<A>AuthorizeAction</A>) are used to
        </p>
        <ul>
          <li>
            Add digital document permissions (<A>DigitalDocumentPermission</A>)
            to graphs or periodicals
          </li>
          <li>Add audiences to actions</li>
        </ul>

        <SeeAntonymAction type="DeauthorizeAction" />

        <ActionExample
          action={{
            '@type': 'AuthorizeAction',
            actionStatus: 'CompletedActionStatus',
            agent: 'user:userId',
            object: 'journal:journalId',
            instrument: {
              '@type': 'DigitalDocumentPermission',
              permissionType: 'AdminPermission',
              grantee: {
                '@type': 'Audience',
                audienceType: 'producer'
              }
            }
          }}
        >
          Here we grant producers with <A>AdminPermission</A> to a{' '}
          <A>Periodical</A>
        </ActionExample>

        <ActionExample
          action={{
            '@type': 'AuthorizeAction',
            actionStatus: 'CompletedActionStatus',
            agent: 'user:userId',
            object: 'action:actionId',
            recipient: {
              '@type': 'Audience',
              audienceType: 'editor'
            }
          }}
        >
          Here we add the <code>editor</code> audience to an <A>Action</A>
        </ActionExample>

        <ActionSpec
          type="AuthorizeAction"
          spec={{
            agent: {
              '@type': 'Person',
              value: 'userId'
            },
            actionStatus: {
              '@type': 'ActionStatusType',
              value: 'CompletedActionStatus'
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
                '@type': 'Action',
                value: 'workflowActionId'
              }
            ],

            instrument: {
              '@type': 'DigitalDocumentPermission',
              value: (
                <Fragment>
                  <ObjectSpec
                    spec={{
                      '@type': 'DigitalDocumentPermission',
                      permissionType: (
                        <Fragment>
                          A valid <A>DigitalDocumentPermissionType</A>
                        </Fragment>
                      ),
                      grantee: (
                        <Fragment>
                          either:
                          <ul>
                            <li>
                              <ObjectSpec
                                spec={{
                                  '@type': 'Audience',
                                  audienceType: (
                                    <Fragment>
                                      One of <code>{`"editor"`}</code>,{' '}
                                      <code>{`"reviewer"`}</code>,{' '}
                                      <code>{`"author"`}</code>,{' '}
                                      <code>{`"producer"`}</code>
                                    </Fragment>
                                  )
                                }}
                              />
                            </li>
                            <li>
                              A user <code>@id</code>
                            </li>
                          </ul>
                        </Fragment>
                      ),
                      permissionScope: (
                        <Fragment>required for some permission type</Fragment>
                      )
                    }}
                  />
                  <p className={bem`@__warning`}>
                    <A>instrument</A> is only required when the <A>object</A> is
                    a <A>Graph</A> or <A>Periodical</A>
                  </p>
                </Fragment>
              )
            },

            recipient: {
              '@type': 'Audience',
              value: (
                <Fragment>
                  <ObjectSpec
                    spec={{
                      '@type': 'Audience',
                      audienceType: (
                        <Fragment>
                          One of <code>{`"editor"`}</code>,{' '}
                          <code>{`"reviewer"`}</code>, <code>{`"author"`}</code>,{' '}
                          <code>{`"producer"`}</code>
                        </Fragment>
                      ),
                      name: '(optional)'
                    }}
                  />
                  <p className={bem`@__warning`}>
                    <A>recipient</A> is only required when the <A>object</A> is
                    an <A>Action</A>
                  </p>
                </Fragment>
              )
            }
          }}
        />
      </section>
    );
  }
}
