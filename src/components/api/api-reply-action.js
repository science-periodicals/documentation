import React from 'react';
import { BemTags } from '@scipe/ui';
import Iconoclass from '@scipe/iconoclass';
import ActionSpec from '../action-spec';
import ObjectSpec from '../object-spec';
import ActionExample from '../action-example';
import A from '../a';

export default class ApiReplyAction extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section id="reply-action" className={bem`@__sub-section`}>
        <h3 className={bem`@__default-ui-type--subhead-1 @__icon-title`}>
          ReplyAction <Iconoclass iconName="dispatcher" round={true} />
        </h3>

        <p>
          Reply actions (<A>ReplyAction</A>) are used in the context of
          editorial workflows to answer questions (<A>Question</A>).
        </p>

        <ActionExample
          action={{
            '@type': 'ReplyAction',
            actionStatus: 'CompletedActionStatus',
            agent: 'role:roleId',
            object: 'question:questionId',
            resultComment: {
              '@type': 'Answer',
              text: 'yes'
            }
          }}
        />

        <ActionSpec
          scope={['Graph']}
          type="ReplyAction"
          spec={{
            agent: {
              '@type': 'ContributorRole',
              value: 'scopeRoleId'
            },
            actionStatus: {
              '@type': 'ActionStatusType',
              value: [
                'ActiveActionStatus',
                'StagedActionStatus',
                'CompletedActionStatus'
              ]
            },
            object: {
              '@type': 'Graph',
              value: 'questionId'
            },
            resultComment: {
              '@type': 'Answer',
              value: (
                <ObjectSpec
                  spec={{
                    '@type': 'Answer',
                    text: 'required'
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
