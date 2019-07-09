import React, { Fragment } from 'react';
import { BemTags, SchemaLink as A } from '@scipe/ui';
import Iconoclass from '@scipe/iconoclass';
import ActionSpec from '../action-spec';
import ActionExample from '../action-example';
import JsonldExample from '../jsonld-example';
import Info from '../info';
import WorkflowActions from './api-workflow-actions';

const ALL = [
  {
    '@type': 'Audience',
    audienceType: 'editor'
  },
  {
    '@type': 'Audience',
    audienceType: 'author'
  },
  {
    '@type': 'Audience',
    audienceType: 'reviewer'
  },
  {
    '@type': 'Audience',
    audienceType: 'producer'
  }
];

export default class ApiCreateWorkflowSpecificationAction extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section
        id="create-workflow-specification-action"
        className={bem`api @__sub-section`}
      >
        <h3 className={bem`@__default-ui-type--subhead-1 @__icon-title`}>
          CreateWorkflowSpecificationAction{' '}
          <Iconoclass tagName="span" iconName="star" round={true} />
        </h3>

        <p>
          Create workflow specification actions (
          <A>CreateWorkflowSpecificationAction</A>) are used to create editorial
          workflows (<A>WorkflowSpecification</A>).
        </p>

        <p>
          A <A>WorkflowSpecification</A> defines the creation of a <A>Graph</A>{' '}
          through a <A>CreateGraphAction</A> listed as a <A>potentialAction</A>{' '}
          of the <A>WorkflowSpecification</A>. The <A>result</A> of the{' '}
          <A>CreateGraphAction</A> (<A>Graph</A>) is used to specify the{' '}
          <A>Graph</A> <a href="#access-control-and-permissions">permissions</a>{' '}
          and the various potential actions (workflow actions) associated with
          it. To specify workflow actions, a <A>StartWorkflowStageAction</A>{' '}
          must be listed as the only potential action of the <A>Graph</A>.
        </p>

        <p>
          The <A>StartWorkflowStageAction</A> can specify actions that are part
          of that stage using the <A>result</A> property of the{' '}
          <A>StartWorkflowStageAction</A>. When the <A>CreateGraphAction</A> is
          later executed (<a href="#create-graph-action">see here</a>), this
          first stage is instantiated and the workflow actions made available to
          their respective agent and audiences.
        </p>
        <ul className={bem`@__condition-list`}>
          <li>
            <p className={bem`@__condition-list-condition`}>
              <Iconoclass
                tagName="span"
                iconName="info"
                className={bem`@__condition-list-icon`}
                size="18px"
              />
              A stage typically ends in 2 ways:
            </p>
            <ul>
              <li>
                <Iconoclass
                  iconName="arrowNext"
                  className={bem`@__condition-list-arrow`}
                  size="18px"
                />
                either with a <A>PublishAction</A>
              </li>
              <li>
                <Iconoclass
                  iconName="arrowNext"
                  className={bem`@__condition-list-arrow`}
                  size="18px"
                />
                or with an <A>AssessAction</A>
              </li>
            </ul>
          </li>
        </ul>
        <p>
          Assess actions (<A>AssessAction</A>) have a <A>potentialResult</A>{' '}
          property providing a list of potential next stages (
          <A>StartWorkflowStageAction</A>) or a way to end the workflow (
          <A>RejectAction</A>). Note that it is possible to reference previous
          stages (or the current) stage as part of the potential results. When
          the <A>AssessAction</A> is executed, the selected potential result
          (marked as the <A>result</A> of the <A>AssessAction</A>) will be
          executed either terminating the workflow (<A>RejectAction</A>) or
          instantiating a next stage (<A>StartWorkflowStageAction</A>).
        </p>

        <ActionExample
          action={{
            '@id': 'action:actionId',
            '@type': 'CreateWorkflowSpecificationAction',
            agent: 'user:userId',
            actionStatus: 'CompletedActionStatus',
            object: 'journal:journalId',
            result: {
              '@type': 'WorkflowSpecification',
              potentialAction: {
                '@type': 'CreateGraphAction',
                agent: {
                  '@type': 'Role',
                  roleName: 'author'
                },
                participant: ALL,
                result: {
                  '@type': 'Graph',
                  hasDigitalDocumentPermission: [
                    {
                      '@type': 'DigitalDocumentPermission',
                      permissionType: 'AdminPermission',
                      grantee: [
                        {
                          '@type': 'Audience',
                          audienceType: 'editor'
                        },
                        {
                          '@type': 'Audience',
                          audienceType: 'producer'
                        }
                      ]
                    },
                    {
                      '@type': 'DigitalDocumentPermission',
                      permissionType: 'WritePermission',
                      grantee: [
                        {
                          '@type': 'Audience',
                          audienceType: 'author'
                        },
                        {
                          '@type': 'Audience',
                          audienceType: 'reviewer'
                        }
                      ]
                    }
                  ],
                  // Submission stage
                  potentialAction: {
                    '@id': '_:submissionStage',
                    '@type': 'StartWorkflowStageAction',
                    name: 'Submission Stage',
                    participant: ALL,
                    result: [
                      {
                        '@id': '_:askAction',
                        '@type': 'AskAction',
                        actionStatus: 'ActiveActionStatus',
                        agent: {
                          roleName: 'author'
                        },
                        participant: ALL,
                        name: 'Ethical compliance',
                        question: {
                          '@type': 'Question',
                          text: 'Were experimental animals used?'
                        }
                      },

                      {
                        '@type': 'CreateReleaseAction',
                        actionStatus: 'ActiveActionStatus',
                        agent: {
                          roleName: 'author'
                        },
                        participant: ALL,
                        name: 'send to editor',
                        requiresCompletionOf: ['_:askAction'],
                        result: {
                          '@type': 'Graph',
                          potentialAction: {
                            '@id': '_:submissionAssessAction',
                            '@type': 'AssessAction',
                            actionStatus: 'ActiveActionStatus',
                            name: 'pre-screening',
                            agent: {
                              roleName: 'editor'
                            },
                            participant: ALL,
                            potentialResult: [
                              '_:submissionStage',
                              {
                                '@id': '_:rejectAction',
                                '@type': 'RejectAction',
                                actionStatus: 'PotentialActionStatus',
                                agent: {
                                  roleName: 'editor'
                                },
                                participant: ALL
                              },

                              // Peer review stage
                              {
                                '@type': 'StartWorkflowStageAction',
                                actionStatus: 'PotentialActionStatus',
                                name: 'Peer review stage',
                                participant: ALL,
                                result: [
                                  {
                                    '@id': '_:reviewAction',
                                    '@type': 'ReviewAction',
                                    actionStatus: 'ActiveActionStatus',
                                    agent: {
                                      roleName: 'reviewer'
                                    },
                                    completeOn: 'OnEndorsed',
                                    name: 'data availability',
                                    potentialAction: [
                                      {
                                        '@type': 'AuthorizeAction',
                                        completeOn: 'OnWorkflowStageEnd',
                                        actionStatus: 'PotentialActionStatus',
                                        recipient: [
                                          {
                                            '@type': 'Audience',
                                            audienceType: 'editor'
                                          },
                                          {
                                            '@type': 'Audience',
                                            audienceType: 'producer'
                                          }
                                        ]
                                      },
                                      {
                                        '@id': '_:endorseAction',
                                        '@type': 'EndorseAction',
                                        actionStatus: 'PotentialActionStatus',
                                        activateOn:
                                          'OnObjectStagedActionStatus',
                                        agent: { roleName: 'editor' }
                                      }
                                    ]
                                  },

                                  {
                                    '@id': '_:assessAction',
                                    '@type': 'AssessAction',
                                    actionStatus: 'ActiveActionStatus',
                                    agent: {
                                      roleName: 'editor'
                                    },
                                    participant: ALL,
                                    requiresCompletionOf: ['_:reviewAction'],
                                    potentialResult: [
                                      // Production stage
                                      {
                                        '@id': '_:productionStage',
                                        '@type': 'StartWorkflowStageAction',
                                        actionStatus: 'PotentialActionStatus',
                                        participant: ALL,
                                        result: {
                                          '@type': 'PublishAction',
                                          actionStatus: 'ActiveActionStatus',
                                          agent: {
                                            roleName: 'producer'
                                          },
                                          participant: ALL
                                        }
                                      },
                                      '_:rejectAction'
                                    ],
                                    potentialAction: [
                                      {
                                        '@type': 'InformAction',
                                        agent: {
                                          roleName: 'editor',
                                          name: 'editor in chief'
                                          // will generate: -> 'editor-in-chief@journal-of-x.sci.pe' in the email
                                        },
                                        recipient: {
                                          '@type': 'Audience',
                                          audienceType: 'author'
                                        },
                                        participant: ALL,
                                        actionStatus: 'PotentialActionStatus',
                                        completeOn:
                                          'OnObjectCompletedActionStatus',
                                        ifMatch: '_:productionStage',
                                        instrument: {
                                          '@type': 'EmailMessage',
                                          about: ['_:assessAction'],
                                          messageAttachment: ['_:reviewAction']
                                        }
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        }
                      }
                    ]
                  }
                }
              }
            }
          }}
        />

        <ActionSpec
          type="CreateWorkflowSpecificationAction"
          scope={'Periodical'}
          instantiated={true}
          spec={{
            agent: [
              {
                '@type': 'Person',
                value: 'userId'
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
            object: {
              '@type': 'Periodical',
              value: 'periodicalId'
            },
            result: {
              '@type': 'WorkflowSpecification',
              value: (
                <Fragment>
                  see the <a href="#workflow-actions">table below</a> for
                  details on the actions defining the editorial workflow
                </Fragment>
              )
            }
          }}
        />

        <WorkflowActions />

        <Info className={bem`@__info-panel`}>
          <header>Common patterns</header>

          <section>
            <header>Graph permissions and blinding settings</header>

            <p>
              Graph permissions and blinding settings are set using the{' '}
              <A>hasDigitalDocumentPermission</A> property of the <A>result</A>{' '}
              of the <A>CreateGraphAction</A> (see{' '}
              <a href="#access-control-and-permissions">
                Access control and permissions section
              </a>
              )
            </p>

            <p className={bem`@__warning`}>
              Permissions and blinding settings will apply to all the future
              release (<A>CreateReleaseAction</A>) of the <A>Graph</A>.
            </p>

            <JsonldExample
              root={false}
              data={{
                '@type': 'CreateWorkflowSpecificationAction',
                result: {
                  '@type': 'WorkflowSpecification',
                  potentialAction: {
                    '@type': 'CreateGraphAction',
                    result: {
                      '@type': 'Graph',
                      hasDigitalDocumentPermission: {
                        '@type': 'DigitalDocumentPermission',
                        permissionType: 'AdminPermission',
                        grantee: {
                          '@type': 'Audience',
                          audienceType: 'editor'
                        }
                      }
                    }
                  }
                }
              }}
            >
              Here the editors will have <A>AdminPermission</A>.
            </JsonldExample>
          </section>

          <section>
            <header>Action permissions and time sensitive audiences</header>

            <p>
              Action permission and access controls are set using the{' '}
              <A>agent</A> and <A>participant</A> properties (see{' '}
              <a href="#access-control-and-permissions">
                Access control and permissions section
              </a>
              ). The <A>agent</A> property specifies who can perform the action
              whereas the <A>participant</A> property lists the audiences of the
              action (who can view the action).
            </p>

            <p>
              <A>AuthorizeAction</A> and <A>DeauthorizeAction</A> can be added
              as potential action of an <A>Action</A> to alter its audience
              based on <a href="#triggers">triggers</a>.{' '}
            </p>

            <JsonldExample
              root={false}
              data={{
                '@type': 'ReviewAction',
                actionStatus: 'ActiveActionStatus',
                agent: {
                  '@type': 'ContributorRole',
                  roleName: 'reviewer'
                },
                participant: {
                  '@type': 'Audience',
                  audienceType: 'editor'
                },
                potentialAction: {
                  '@type': 'AuthorizeAction',
                  completeOn: 'OnWorkflowStageEnd',
                  actionStatus: 'PotentialActionStatus',
                  recipient: {
                    '@type': 'Audience',
                    audienceType: 'reviewer'
                  }
                }
              }}
            >
              Here the <A>ReviewAction</A> needs to be performed by a{' '}
              <code>reviewer</code> and is first visible to that{' '}
              <code>reviewer</code> (<A>agent</A>) as well as any{' '}
              <code>editor</code> (<A>participant</A>). The potential{' '}
              <A>AuthorizeAction</A> allows to specify that the{' '}
              <A>ReviewAction</A> will be made available to all the reviewers (
              <A>recipient</A> of the <A>AuthorizeAction</A>) once the workflow
              stage ends (<A>completeOn</A> / <A>OnWorkflowStageEnd</A>{' '}
              trigger).
            </JsonldExample>
          </section>

          <section>
            <header>Blocking actions</header>
            <p>
              The <A>requiresCompletionOf</A> allows to prevent the completion
              of an <A>Action</A> <em>before</em> other actions (listed in{' '}
              <A>requiresCompletionOf</A>) are completed.
            </p>

            <JsonldExample
              root={false}
              data={{
                '@type': 'StartWorkflowStageAction',
                result: [
                  {
                    '@id': '_:reviewActionId',
                    '@type': 'ReviewAction',
                    actionStatus: 'ActiveActionStatus'
                  },
                  {
                    '@type': 'AssessAction',
                    actionStatus: 'ActiveActionStatus',
                    requiresCompletionOf: ['_:reviewActionId']
                  }
                ]
              }}
            >
              Here, the assessment (<A>AssessAction</A>) cannot be performed
              until the <A>ReviewAction</A> listed in{' '}
              <A>requiresCompletionOf</A> has been completed.
            </JsonldExample>
          </section>

          <section>
            <header>Sub-stage</header>

            <p>
              When actions are only relevant after a release of the <A>Graph</A>{' '}
              has been made (typically the case for review and assess actions
              that operate on well defined version of the <A>Graph</A>), they
              should be listed as potential actions of the <A>result</A> of a{' '}
              <A>CreateReleaseAction</A>.
            </p>

            <JsonldExample
              root={false}
              data={{
                '@type': 'StartWorkflowStageAction',
                result: [
                  {
                    '@type': 'AskAction',
                    actionStatus: 'ActiveActionStatus'
                  },
                  {
                    '@type': 'CreateReleaseAction',
                    actionStatus: 'ActiveActionStatus',
                    result: {
                      '@type': 'Graph',
                      potentialAction: {
                        '@type': 'ReviewAction',
                        actionStatus: 'ActiveActionStatus'
                      }
                    }
                  }
                ]
              }}
            >
              <p>Here the stage is broken down in 2 sub-stages:</p>
              <ol>
                <li>
                  A first sub-stage where the user has to complete an{' '}
                  <A>AskAction</A> and a <A>CreateReleaseAction</A>
                </li>
                <li>
                  A second sub-stage (only available after the{' '}
                  <A>CreateReleaseAction</A> have been completed) where the user
                  needs to complete the <A>ReviewAction</A>. This allows the
                  <A>ReviewAction</A> to have its <A>object</A> properly set to
                  the result of the release (versioned graph) and ensure that
                  the review is made on a well defined release as opposed to the
                  changing <A>Graph</A>.
                </li>
              </ol>
            </JsonldExample>
          </section>

          <section>
            <header className={bem`@__default-ui-type--subhead-3`}>
              Endorsements & quality control
            </header>

            <p>
              Endorse actions (<A>EndorseAction</A>) can be used along with the{' '}
              <A>completedOn</A> property to provide a way to define a quality
              control workflow. This is achieved by:
            </p>

            <ol className={bem`@__list @--ordered`}>
              <li>
                Adding a potential <A>EndorseAction</A> to the action that needs
                to be be endorsed with an <A>activateOn</A> /{' '}
                <A>OnObjectStagedActionStatus</A>{' '}
                <a href="#triggers">trigger</a>.
              </li>
              <li>
                Specifying that the action that needs to be endorsed can only be
                completed once it is endorsed (<A>completeOn</A> /{' '}
                <A>OnEndorsed</A> <a href="#triggers">trigger</a>).
              </li>
            </ol>

            <p>The workflow is then the following:</p>

            <ol className={bem`@__list @--ordered`}>
              <li>
                The agent of the action that needs to be endorsed sets the
                action status of the action to <A>StagedActionStatus</A>. This
                activates the <A>EndorseAction</A> through its <A>activateOn</A>{' '}
                / <A>OnObjectStagedActionStatus</A>{' '}
                <a href="#triggers">trigger</a>
              </li>
              <li>
                The <A>agent</A> of the <A>EndorseAction</A> reviews the result
                of the action and provides feedback or requests changes through
                annotations (<A>CommentAction</A>)
              </li>
              <li>
                The agent of the action that needs to be endorsed addressess
                those changes
              </li>
              <li>
                The agent of the <A>EndorseAction</A> endorses the action and
                this endorsement automatically marks the
                <A>EndorseAction</A> as completed through the <A>completeOn</A>{' '}
                / <A>OnEndorsed</A> <a href="#triggers">trigger</a>.{' '}
              </li>
            </ol>

            <JsonldExample
              root={false}
              data={{
                '@type': 'ReviewAction',
                agent: {
                  '@type': 'ContributorRole',
                  agent: 'reviewer'
                },
                actionStatus: 'ActiveActionStatus',
                completeOn: 'OnEndorsed',
                potentialAction: {
                  '@id': '_:endorse',
                  actionStatus: 'PotentialActionStatus',
                  '@type': 'EndorseAction',
                  activateOn: 'OnObjectStagedActionStatus',
                  agent: {
                    '@type': 'ContributorRole',
                    roleName: 'editor'
                  }
                }
              }}
            >
              Quality control workflow. Here the <A>ReviewAction</A> cannot be
              completed until the <A>agent</A> of the <A>EndorseAction</A> (
              <code>editor</code>) endorses it. This provids a way for the{' '}
              <code>editor</code> to work with the reviewer to get the desired
              review.
            </JsonldExample>
          </section>

          <section>
            <header>Multiple instances</header>

            <p>
              Additional controls regarding the number of required instance of
              an action can be specified using the <A>minInstances</A> and{' '}
              <A>maxInstances</A> properties of actions.
            </p>

            <p>
              When set, the action will be instantiated in as many instances as
              defined by the <A>maxInstances</A> property during the execution
              of the stage the action is part of (
              <A>StartWorkflowStageAction</A>). Users will then be able to
              cancel some of those instances (<A>CancelAction</A>) down to the
              number specified by the <A>minInstances</A> property (and no
              further).
            </p>

            <JsonldExample
              root={false}
              data={{
                '@type': 'StartWorkflowStageAction',
                result: {
                  '@type': 'ReviewAction',
                  minInstances: 2,
                  maxInstances: 5
                }
              }}
            >
              Here, completing the <A>StartWorkflowStageAction</A> will result
              in the instantiation of <strong>5</strong> <A>ReviewAction</A> (
              <A>maxInstances</A>). During the stage, the user will have the
              possibility to cancel (<A>CancelAction</A>) up to 3 review actions
              so that at least <strong>2</strong> review actions remain (
              <A>minInstances</A>).
            </JsonldExample>
          </section>

          <section>
            <header>Structured reviews</header>
            <p>
              The <A>instrument</A> property of a <A>ReviewAction</A> can be
              used to specify custom questions helping to generate the resulting{' '}
              <A>Review</A> (indicated by the <A>resultReview</A> property).
            </p>

            <p>
              In addition to questions, <A>ReviewAction</A> is used to gather a
              structured <A>Rating</A> through the <A>reviewRating</A> property
              of the resulting <A>resultReview</A>.
            </p>

            <JsonldExample
              root={false}
              data={{
                '@type': 'ReviewAction',
                actionStatus: 'CompletedActionStatus',
                object: 'scipe:graphId',
                name: 'subject matter relevance',
                instrument: [
                  {
                    '@type': 'Answer',
                    parentItem: {
                      '@type': 'Question',
                      text: 'Is methionine mentioned ?'
                    },
                    text: 'yes'
                  }
                ],
                resultReview: {
                  '@type': 'Review',
                  reviewBody: 'Overall it fits well',
                  reviewRating: {
                    '@type': 'Rating',
                    bestRating: 5,
                    ratingValue: 4,
                    worstRating: 1
                  }
                }
              }}
            >
              Example of a <A>ReviewAction</A>
              with <A>Rating</A> helped by questions and answers (
              <A>Question</A> and <A>Answer</A>) specified with the{' '}
              <A>instrument</A> property.
            </JsonldExample>
          </section>

          <section>
            <header>Author services</header>
            <p>
              Author services can be offered through the <A>potentialService</A>{' '}
              property of <A>CreateReleaseAction</A>.
            </p>

            <p>
              <A>potentialService</A> must list the <code>@id</code> of services
              available to the organization owning the periodical to which the
              workflow applies.
            </p>

            <p>
              During the workflow excecution, the <A>agent</A> of the{' '}
              <A>CreateReleaseAction</A> will be able to actionate the service
              through a <A>BuyAction</A> (see <a href="#buy-action">here</a>).
            </p>

            <JsonldExample
              root={false}
              data={{
                '@type': 'CreateReleaseAction',
                agent: {
                  '@type': 'ContributorRole',
                  roleName: 'author'
                },
                potentialService: ['service:typesetting']
              }}
            >
              Here a typesetting service is made available as an author service.
            </JsonldExample>
          </section>

          <section>
            <header>Article Processing Charge</header>
            <p>
              <abbr title="Article Processing Charge">APC</abbr>s can be
              collected by adding an <A>expectsAcceptanceOf</A> property to a{' '}
              <A>CreateReleaseAction</A>. This allows to specify at what stage
              in the workflow the{' '}
              <abbr title="Article Processing Charge">APC</abbr> should be
              collected.
            </p>

            <p>
              The <A>expectsAcceptanceOf</A> property must point to the{' '}
              <code>@id</code> of an <A>Offer</A>
              created by the organization owning the periodical to which the
              workflow applies.
            </p>

            <p>
              During the workflow excecution, the <A>agent</A> of the{' '}
              <A>CreateReleaseAction</A> will be able to pay the{' '}
              <abbr title="Article Processing Charge">APC</abbr> through a{' '}
              <A>PayAction</A> (see <a href="#pay-action">here</a>).
            </p>

            <JsonldExample
              root={false}
              data={{
                '@type': 'CreateReleaseAction',
                agent: {
                  '@type': 'ContributorRole',
                  roleName: 'author'
                },
                expectsAcceptanceOf: 'offer:apc'
              }}
            >
              Specifying an <abbr title="Article Processing Charge">APC</abbr>{' '}
              through the <A>expectsAcceptanceOf</A> property of a{' '}
              <A>CreateReleaseAction</A>
            </JsonldExample>
          </section>

          <section>
            <header>Decision letter templates</header>

            <p>
              Email templates for decision letters can be specified by adding an{' '}
              <A>InformAction</A> as a potential action of an{' '}
              <A>AssessAction</A>
            </p>

            <p>
              Each <A>InformAction</A> must have an <A>ifMatch</A> property
              pointing to the <code>@id</code> of one of the potential results
              of the <A>AssessAction</A>. This allows to specify different
              templates for each potential outcome (<A>potentialResult</A>) of
              the <A>AsessAction</A>.
            </p>

            <JsonldExample
              data={{
                '@id': '_:assessAction',
                '@type': 'AssessAction',
                agent: {
                  '@type': 'ContributorRole',
                  roleName: 'editor'
                },
                potentialResult: ['_:accept', '_:reject'],
                potentialAction: {
                  '@type': 'InformAction',
                  agent: {
                    roleName: 'editor',
                    name: 'editor-in-chief'
                  },
                  recipient: {
                    '@type': 'Audience',
                    audienceType: 'author'
                  },
                  actionStatus: 'PotentialActionStatus',
                  completeOn: 'OnObjectCompletedActionStatus',
                  ifMatch: '_:accept',
                  instrument: {
                    '@type': 'EmailMessage',
                    about: ['_:assessAction'],
                    messageAttachment: ['_:reviewAction'],
                    text: {
                      '@type': 'sa:ejs',
                      '@value':
                        '<%= emailMessage.about.object.name %> was accepted'
                    }
                  }
                }
              }}
            >
              Example of a decision letter email template. Here the email will
              be sent to the authors (<A>recipient</A> of the{' '}
              <A>InformAction</A>) by the <code>editor-in-chief</code> (
              <A>agent</A> of the <A>InformAction</A>) when the{' '}
              <A>AssessAction</A> is completed (<A>completeOn</A> /{' '}
              <A>OnObjectCompletedActionStatus</A> trigger) <strong>and</strong>{' '}
              results in the accept stage (<A>ifMatch</A>: <code>_:accept</code>
              )
            </JsonldExample>
          </section>
        </Info>
      </section>
    );
  }
}
