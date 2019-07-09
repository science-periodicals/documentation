import React, { Fragment } from 'react';
import { BemTags } from '@scipe/ui';
import Iconoclass from '@scipe/iconoclass';
import ActionSpec from '../action-spec';
import ObjectSpec from '../object-spec';
import JsonldExample from '../jsonld-example';
import ActionExample from '../action-example';
import Info from '../info';
import A from '../a';

// TODO document @mentions (`recipient`).

export default class ApiCommentAction extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section id="comment-action" className={bem`@__sub-section`}>
        <h3 className={bem`@__default-ui-type--subhead-1 @__icon-title`}>
          CommentAction <Iconoclass iconName="comment" round={true} />
        </h3>

        <p>
          Comment actions (<A>CommentAction</A>) are used in the context of
          editorial workflows to create comments (<A>Comment</A>) targeted to
          specific audiences (specified as <A>participant</A> of the{' '}
          <A>CommentAction</A>).
        </p>

        <ActionExample
          action={{
            '@type': 'CommentAction',
            actionStatus: 'ActiveActionStatus',
            agent: 'role:roleId',
            participant: {
              '@type': 'Audience',
              audienceType: 'editor'
            },
            object: {
              '@type': 'TargetSelector',
              hasSelector: {
                '@type': 'HtmlSelector',
                node: 'node:encodingId',
                htmlId: 'id',
                startOffset: 0,
                endOffset: 10
              },
              object: 'graph:graphId'
            },
            resultComment: {
              '@type': 'Comment',
              text: 'Hello'
            }
          }}
        />

        <ActionSpec
          scope={['Graph']}
          type="CommentAction"
          spec={{
            actionStatus: {
              '@type': 'ActionStatusType',
              value: ['ActiveActionStatus', 'CompletedActionStatus']
            },
            agent: {
              '@type': 'ContributorRole',
              value: 'scopeRoleId'
            },
            participant: {
              '@type': 'Audience',
              value: 'audience'
            },
            object: [
              {
                '@type': 'TargetRole',
                value: (
                  <ObjectSpec
                    spec={{
                      '@type': 'TargetRole',
                      hasSelector: (
                        <Fragment>
                          A <A>Selector</A> (or subclass thereof)
                        </Fragment>
                      ),
                      object: <ObjectId />
                    }}
                  />
                )
              },
              {
                '@type': 'Thing',
                value: <ObjectId />
              }
            ],
            resultComment: {
              '@type': 'Comment',
              value: (
                <ObjectSpec
                  spec={{
                    '@type': 'Comment',
                    parentItem: (
                      <Fragment>
                        The <code>@id</code> of a parent comment if the{' '}
                        <A>CommentAction</A> is used to create a child comment
                        part of a <a href="#comment-threads">comment thread</a>
                      </Fragment>
                    )
                  }}
                  others={true}
                />
              )
            }
          }}
        />

        <Info id="comment-threads">
          <header>Comment threads</header>

          <p>
            Additional comments can be attached to a parent comment by pointing
            to the parent comment <code>@id</code> using the <A>parentItem</A>{' '}
            property of the child comment.
          </p>

          <p className={bem`@__warning`}>
            Child comments can be added as long as the <A>actionStatus</A>{' '}
            property of the parent comment is set to <A>ActiveActionStatus</A>.
            Once the parent comment is in <A>CompletedActionStatus</A> the
            comment thread is considered as “closed”.
          </p>

          <JsonldExample
            root={false}
            data={{
              '@type': 'CommentAction',
              actionStatus: 'CompletedActionStatus',
              agent: 'role:roleId',
              participant: {
                '@type': 'Audience',
                audienceType: 'editor'
              },
              object: {
                '@type': 'TargetSelector',
                hasSelector: {
                  '@type': 'HtmlSelector',
                  node: 'node:encodingId',
                  htmlId: 'id',
                  startOffset: 0,
                  endOffset: 10
                },
                object: 'graph:graphId'
              },
              resultComment: {
                '@type': 'Comment',
                parentItem: 'comment:commentId',
                text: 'I am a child comment'
              }
            }}
          >
            Creating a child comment as part of a comment thread
          </JsonldExample>
        </Info>
      </section>
    );
  }
}

function ObjectId() {
  return (
    <Fragment>
      The <code>@id</code> of the object of the comment (<A>Graph</A> or{' '}
      <A>Action</A>).
    </Fragment>
  );
}
