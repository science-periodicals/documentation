import React, { Fragment } from 'react';
import { BemTags } from '@scipe/ui';
import Iconoclass from '@scipe/iconoclass';
import ActionSpec from '../action-spec';
import ObjectSpec from '../object-spec';
import ActionExample from '../action-example';
import A from '../a';

export default class ApiReviewAction extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section id="review-action" className={bem`@__sub-section`}>
        <h3 className={bem`@__default-ui-type--subhead-1 @__icon-title`}>
          ReviewAction <Iconoclass iconName="gear" round={true} />
        </h3>

        <p>
          Review actions (<A>ReviewAction</A>) are used in the context of
          editorial workflows to create reviews (<A>Review</A>) about a{' '}
          <a href="#versioned">version</a> of a <A>Graph</A>.
        </p>

        <ActionExample
          action={{
            '@id': 'action:actionId',
            '@type': 'ReviewAction',
            actionStatus: 'CompletedActionStatus',
            agent: 'role:roleId',
            instrument: {
              '@type': 'Answer',
              parentItem: {
                '@type': 'Question',
                text: 'Is methionine mentioned ?'
              },
              text: 'yes'
            },
            resultReview: {
              '@type': 'Review',
              reviewBody: 'A seminal paper',
              reviewRating: {
                '@type': 'Rating',
                bestRating: 5,
                ratingValue: 5,
                worstRating: 1
              }
            }
          }}
        />

        <ActionSpec
          scope={['Graph']}
          type="ReviewAction"
          instantiated={true}
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
              value: 'releaseId'
            },
            instrument: {
              '@type': 'Answer',
              value: (
                <Fragment>
                  <ObjectSpec
                    spec={{
                      '@type': 'Answer',
                      parentItem: <A>Question</A>,
                      text: 'required'
                    }}
                    others={true}
                  />
                  Note that answers can also be provided by using reply actions
                  (<A>ReplyAction</A>).
                </Fragment>
              )
            },
            resultReview: {
              '@type': 'Review',
              value: (
                <ObjectSpec
                  spec={{
                    '@type': 'Review',
                    reviewBody: 'required',
                    reviewRating: (
                      <ObjectSpec
                        spec={{
                          '@type': 'Rating',
                          bestRating: 5,
                          ratingValue: (
                            <Fragment>
                              A number in between the values of{' '}
                              <A>worstRating</A> and <A>bestRating</A>
                            </Fragment>
                          ),
                          worstRating: 1
                        }}
                        others={true}
                      />
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
