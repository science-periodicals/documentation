import React, { Fragment } from 'react';
import { BemTags } from '@scipe/ui';
import Iconoclass from '@scipe/iconoclass';
import ActionSpec from '../action-spec';
import ObjectSpec from '../object-spec';
import ActionExample from '../action-example';
import A from '../a';

export default class ApiAskAction extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section id="ask-action" className={bem`@__sub-section`}>
        <h3 className={bem`@__default-ui-type--subhead-1 @__icon-title`}>
          AskAction <Iconoclass iconName="dispatcher" round={true} />
        </h3>

        <p>
          Ask actions (<A>AskAction</A>) are used in conjonction with reply
          actions (<A>ReplyAction</A>) in the context of editorial workflows to
          collect answers to questions (<A>Question</A>) regarding a{' '}
          <A>Graph</A>.
        </p>

        <ActionExample
          action={{
            '@id': 'action:actionId',
            '@type': 'AskAction',
            actionStatus: 'CompletedActionStatus',
            agent: 'role:roleId',
            question: {
              '@id': 'question:questionId',
              '@type': 'Question',
              text: 'Were experimental animals used?',
              suggestedAnswer: [
                {
                  '@type': 'Answer',
                  text: 'yes'
                },
                {
                  '@type': 'Answer',
                  text: 'no'
                }
              ]
            },
            result: {
              '@type': 'Answer',
              text: 'yes',
              parentItem: 'question:questionId'
            }
          }}
        />

        <ActionSpec
          scope={['Graph']}
          type="AskAction"
          instantiated={true}
          spec={{
            agent: {
              '@type': 'ContributorRole',
              value: 'scopeRoleId'
            },
            actionStatus: {
              '@type': 'ActionStatusType',
              value: (
                <Fragment>
                  One of:
                  <ul>
                    <li>
                      <code>{`"ActiveActionStatus"`}</code>
                    </li>
                    <li>
                      <code>{`"StagedActionStatus"`}</code>
                    </li>
                    <li>
                      <code>{`"CompletedActionStatus"`}</code>
                    </li>
                  </ul>
                  <p className={bem`@__warning`}>
                    An <A>AskAction</A> can only be completed when all its
                    questions have been answered.
                  </p>
                </Fragment>
              )
            },
            object: {
              '@type': 'Graph',
              value: (
                <Fragment>
                  The <code>@id</code> of a <A>Graph</A> or a release
                </Fragment>
              )
            },
            result: {
              '@type': 'Answer',
              value: (
                <ObjectSpec
                  spec={{
                    '@type': 'Answer',
                    text: 'required',
                    parentItem: (
                      <Fragment>
                        The <code>@id</code> of a <A>Question</A> listed in the{' '}
                        <A>question</A> property of the <A>AskAction</A>.
                        Answers can also be provided by using reply actions (<A>
                          ReplyAction
                        </A>).
                      </Fragment>
                    )
                  }}
                  others={true}
                />
              )
            }
          }}
        />
      </section>
    );
  }
}
