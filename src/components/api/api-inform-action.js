import React, { Fragment } from 'react';
import { BemTags, TextLogo } from '@scipe/ui';
import Iconoclass from '@scipe/iconoclass';
import Info from '../info';
import ActionSpec from '../action-spec';
import ActionExample from '../action-example';
import A from '../a';

// TODO update email doc, email are rendered with a nodeMap we don't frame anymore

export default class ApiInformAction extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section id="inform-action" className={bem`@__sub-section`}>
        <h3 className={bem`@__default-ui-type--subhead-1 @__icon-title`}>
          InformAction <Iconoclass iconName="email" round={true} />
        </h3>

        <p>
          Inform actions (<A>InformAction</A>) are used to notify recipients of
          information pertinent to them (through an <A>EmailMessage</A>), with
          no expectation of a response.
        </p>

        <ActionExample
          action={{
            '@type': 'InformAction',
            agent: 'role:editor',
            recipient: {
              '@type': 'Audience',
              audienceType: 'author'
            },
            actionStatus: 'CompletedActionStatus',
            object: 'action:createReleaseActionId',
            instrument: {
              '@type': 'EmailMessage',
              text: {
                '@type': 'sa:ejs',
                '@value': '<%= emailMessage.about.name %> was just published'
              }
            }
          }}
        />

        <ActionSpec
          type="InformAction"
          scope={'Graph'}
          spec={{
            agent: {
              '@type': 'ContributorRole',
              value: 'scopeRoleId'
            },
            recipient: [
              {
                '@type': 'Audience',
                value: 'audience'
              },
              {
                '@type': 'ContributorRole',
                value: 'scopeRoleId'
              }
            ],
            actionStatus: {
              '@type': 'ActionStatusType',
              value: 'CompletedActionStatus'
            },
            instrument: {
              '@type': 'EmailMessage',
              value: (
                <Fragment>
                  <p>An object with:</p>
                  <ul>
                    <li>
                      <code>@type</code>: <code>{`"EmailMessage"`}</code>
                    </li>
                    <li>
                      <A>description</A>: the subject of the email
                    </li>
                    <li>
                      <A>text</A>: the body of the email. An{' '}
                      <a href="http://ejs.co/">EJS</a> template can be used. In
                      this case, <A>text</A> must be a{' '}
                      <a href="https://www.w3.org/TR/json-ld/#typed-values">
                        typed
                      </a>{' '}
                      value with a <code>@type</code> of <code>sa:ejs</code>.{' '}
                      <a href="http://ejs.co/">EJS</a> templates are rendered in
                      the context of a framed <A>EmailMessage</A>. In
                      particular, the <A>about</A> and <A>messageAttachment</A>{' '}
                      properties of the <A>EmailMessage</A>
                      can be used to reference nodes of the graph useful for the
                      email.
                    </li>
                    <li>
                      Any other properties of the <A>EmailMessage</A> class
                      (optional) with the constraint that:
                      <ul>
                        <li>
                          the <A>sender</A> property must be identical to the{' '}
                          <A>agent</A> of the action
                        </li>
                        <li>
                          the <A>recipient</A> property must list a subset (or
                          all) of the recipients listed in the action
                        </li>
                      </ul>
                    </li>
                  </ul>
                </Fragment>
              )
            },
            object: {
              '@type': 'Action',
              value: 'workflowActionId'
            }
          }}
        />

        <Info id="email-template">
          <header>Email markup</header>

          <p>
            <TextLogo /> emails are schema.org compliant allowing authors to
            increase user engagement with{' '}
            <a href="https://developers.google.com/gmail/markup/">
              actions and highlights in emails
            </a>
            . The{' '}
            <a href="http://schema.org/EmailMessage">
              <code>EmailMessage</code>
            </a>{' '}
            is embedded as a JSON-LD island in the email body allowing email
            authors to embed any relevant schema.org constructs to the email.
          </p>
        </Info>
      </section>
    );
  }
}
