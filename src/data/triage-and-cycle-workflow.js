import { yesNo, agent, audience } from '../utils/workflow-utils';

export default {
  '@type': 'CreateGraphAction',
  result: {
    '@type': 'Graph',

    potentialAction: {
      /********************/
      /* SUBMISSION STAGE */
      /********************/
      '@type': 'StartWorkflowStageAction',
      actionStatus: 'PotentialActionStatus',
      name: 'Submission stage',
      participant: audience('all'),
      result: [
        {
          '@type': 'CreateReleaseAction',
          actionStatus: 'ActiveActionStatus',
          name: 'Upload files',
          releaseRequirement: 'SubmissionReleaseRequirement',
          description:
            'Upload all files for submission including your manuscript and any supporting data, code, or media files.',
          expectedDuration: 'P10D',
          agent: agent('author'),
          participant: audience('author'),
          potentialAction: [
            {
              '@type': 'AuthorizeAction',
              actionStatus: 'PotentialActionStatus',
              completeOn: 'OnObjectCompletedActionStatus',
              recipient: audience('editor')
            },
            {
              '@type': 'AuthorizeAction',
              actionStatus: 'PotentialActionStatus',
              completeOn: 'OnWorkflowStageEnd',
              recipient: audience('reviewer')
            }
          ],
          result: {
            '@type': 'Graph',
            potentialAction: [
              {
                '@id': '_:declareAction',
                '@type': 'DeclareAction',
                actionStatus: 'ActiveActionStatus',
                agent: agent('author'),
                participant: audience('all'),
                expectedDuration: 'P10D',
                name: 'Answer submission questions',
                description:
                  'Complete author submission questions to help the editorial office complete a quick assessment of your submission prior to peer review.',
                question: [
                  {
                    '@type': 'Question',
                    text: 'Has the submission been published elsewhere?',
                    suggestedAnswer: yesNo()
                  }
                ],
                potentialAction: {
                  '@type': 'AuthorizeAction',
                  actionStatus: 'PotentialActionStatus',
                  completeOn: 'OnObjectCompletedActionStatus',
                  recipient: audience('editor', 'producer')
                }
              },
              {
                '@id': '_:triageAction',
                '@type': 'ReviewAction',
                actionStatus: 'ActiveActionStatus',
                expectedDuration: 'P3D',
                agent: agent('editor', 'editorial office'),
                participant: audience('editor'),
                name: 'Triage manuscript',
                description:
                  'Determine whether the manuscript is within the scope of the journal, check that all author requirements have been met, and complete a rapid review of the submission.',
                minInstances: 1,
                maxInstances: 1,
                answer: [
                  {
                    '@type': 'Answer',
                    parentItem: {
                      '@type': 'Question',
                      text: 'Have all author submission requirements been met?',
                      suggestedAnswer: yesNo()
                    }
                  }
                ]
              },
              {
                '@id': '_:submissionAssessActionId',
                '@type': 'AssessAction',
                actionStatus: 'ActiveActionStatus',
                expectedDuration: 'P5D',
                name: 'Assess submission',
                agent: agent('editor'),
                participant: audience('editor'),
                requiresCompletionOf: ['_:declareAction', '_:triageAction'],
                description:
                  'Make an initial assessment of the submission to decide whether to send it to peer review.',
                potentialResult: [
                  {
                    '@id': '_:submissionRejectActionId',
                    '@type': 'RejectAction',
                    actionStatus: 'PotentialActionStatus',
                    agent: agent('editor')
                  },

                  /*****************************/
                  /*        REVIEW STAGE       */
                  /*****************************/
                  {
                    '@id': '_:reviewStageId',
                    '@type': 'StartWorkflowStageAction',
                    actionStatus: 'PotentialActionStatus',
                    name: 'Review stage',
                    participant: audience('all'),
                    result: [
                      {
                        '@id': '_:reviewerReviewActionId',
                        '@type': 'ReviewAction',
                        actionStatus: 'ActiveActionStatus',
                        name: 'Review',
                        agent: agent('reviewer'),
                        expectedDuration: 'P10D',
                        minInstances: 1,
                        maxInstances: 4,
                        description:
                          'Review the submission to help the editor determine whether it is suitable for publication in the Journal.',
                        instrument: [
                          {
                            '@type': 'Answer',
                            parentItem: {
                              '@type': 'Question',
                              text: 'Is the manuscript methodologically sound?',
                              suggestedAnswer: yesNo()
                            }
                          }
                        ],
                        potentialAction: [
                          {
                            '@type': 'AuthorizeAction',
                            actionStatus: 'PotentialActionStatus',
                            completeOn: 'OnObjectCompletedActionStatus',
                            recipient: audience('editor', 'producer')
                          },
                          {
                            '@type': 'AuthorizeAction',
                            actionStatus: 'PotentialActionStatus',
                            completeOn: 'OnWorkflowStageEnd',
                            recipient: audience('author')
                          }
                        ]
                      },

                      {
                        '@id': '_:reviewAssessActionId',
                        '@type': 'AssessAction',
                        name: 'Decision after review',
                        actionStatus: 'ActiveActionStatus',
                        requiresCompletionOf: '_:reviewerReviewActionId',
                        agent: agent('editor', 'Editor-in-Chief'),
                        participant: audience('editor', 'producer'),
                        expectedDuration: 'P3D',
                        description:
                          'Make a decision following associate editor assessment and peer review (if applicable).',
                        potentialResult: [
                          {
                            '@id': '_:reviewStageRejectActionId',
                            '@type': 'RejectAction',
                            actionStatus: 'PotentialActionStatus',
                            agent: agent('editor', 'Editor-in-Chief')
                          },
                          /*****************************/
                          /*      REVISION STAGE       */
                          /*****************************/
                          {
                            '@id': '_:revisionStageId',
                            '@type': 'StartWorkflowStageAction',
                            actionStatus: 'PotentialActionStatus',
                            name: 'Revision stage',
                            participant: audience('all'),
                            result: [
                              {
                                '@type': 'CreateReleaseAction',
                                actionStatus: 'ActiveActionStatus',
                                name: 'Upload revision',
                                description:
                                  'Upload all revised files and include any notes to the editor in the "release notes" field.',
                                expectedDuration: 'P45D',
                                agent: agent('author'),
                                releaseRequirement:
                                  'ProductionReleaseRequirement',
                                potentialAction: {
                                  '@type': 'AuthorizeAction',
                                  actionStatus: 'PotentialActionStatus',
                                  completeOn: 'OnObjectCompletedActionStatus',
                                  recipient: audience('editor')
                                },
                                result: {
                                  '@type': 'Graph',
                                  potentialAction: [
                                    {
                                      '@id': '_:reviseAssessActionId',
                                      '@type': 'AssessAction',
                                      name:
                                        'Decision after review and revision',
                                      actionStatus: 'ActiveActionStatus',
                                      agent: agent('editor'),
                                      participant: audience(
                                        'editor',
                                        'producer'
                                      ),
                                      expectedDuration: 'P3D',
                                      description:
                                        'Make a decision following peer review to determine whether to request further revisions, accept, or reject the submission.',

                                      potentialResult: [
                                        {
                                          '@id': '_:reviewStageId'
                                        },
                                        {
                                          '@id': '_:revisionStageId'
                                        },
                                        {
                                          '@id': '_:revisionRejectActionId',
                                          '@type': 'RejectAction',
                                          actionStatus: 'PotentialActionStatus',
                                          agent: agent('editor')
                                        },
                                        {
                                          /********************/
                                          /* PRODUCTION STAGE */
                                          /********************/
                                          '@id': '_:productionStageId',
                                          '@type': 'StartWorkflowStageAction',
                                          actionStatus: 'PotentialActionStatus',
                                          name: 'Production stage',
                                          participant: audience('all'),
                                          result: [
                                            {
                                              '@type': 'PublishAction',
                                              actionStatus:
                                                'ActiveActionStatus',
                                              agent: agent('producer'),
                                              participant: audience('editor'),
                                              potentialAction: {
                                                '@type': 'AuthorizeAction',
                                                actionStatus:
                                                  'PotentialActionStatus',
                                                completeOn:
                                                  'OnWorkflowStageEnd',
                                                recipient: audience('all')
                                              }
                                            }
                                          ]
                                        }
                                      ],
                                      potentialAction: [
                                        {
                                          '@type': 'AuthorizeAction',
                                          completeOn: 'OnWorkflowStageEnd',
                                          actionStatus: 'PotentialActionStatus',
                                          recipient: audience('author')
                                        },
                                        // Decision letters templates (one per potentialResult)
                                        // Acceptance letter
                                        {
                                          '@type': 'InformAction',
                                          agent: {
                                            roleName: 'editor'
                                          },
                                          // Audience of the AssesAction _at end of the stage_ so here we include the audience specified in the AuthorizeAction
                                          recipient: audience(
                                            'editor',
                                            'author'
                                          ),
                                          actionStatus: 'PotentialActionStatus',
                                          completeOn:
                                            'OnObjectCompletedActionStatus',
                                          ifMatch: '_:productionStageId', // must be an @id of one of the AssessAction potentialResult
                                          instrument: {
                                            '@type': 'EmailMessage',
                                            about: '_:reviseAssessActionId',
                                            description:
                                              'Decision on manuscript',
                                            text:
                                              'It is a pleasure to accept your manuscript for publication in the Journal. Thank you for your fine submission. On behalf of the editors, we look forward to your continued contributions to the Journal.'
                                          }
                                        },
                                        // Rejection letter
                                        {
                                          '@type': 'InformAction',
                                          agent: {
                                            roleName: 'editor'
                                          },
                                          // Audience of the AssesAction _at end of the stage_ (so here we include the audience specified in the AuthorizeAction
                                          recipient: audience(
                                            'editor',
                                            'author'
                                          ),
                                          actionStatus: 'PotentialActionStatus',
                                          completeOn:
                                            'OnObjectCompletedActionStatus',
                                          ifMatch: '_:revisionRejectActionId',
                                          instrument: {
                                            '@type': 'EmailMessage',
                                            about: '_:reviseAssessActionId',
                                            description:
                                              'Decision on manuscript',
                                            text:
                                              'Thank you for submitting your manuscript to the Journal. Unfortunately, we cannot proceed with your submission at this time. Although we recognize that you could likely address many of our concerns in a revised manuscript, the overall nature of the assessment is such that the submission would not be able to compete for our limited space. We are grateful that you gave the Journal the opportunity to consider your work.'
                                          }
                                        }
                                      ]
                                    }
                                  ]
                                }
                              }
                            ]
                          },
                          {
                            '@id': '_:productionStageId'
                          }
                        ],
                        potentialAction: [
                          {
                            '@type': 'AuthorizeAction',
                            completeOn: 'OnWorkflowStageEnd',
                            actionStatus: 'PotentialActionStatus',
                            recipient: audience('author')
                          },
                          // Decision letters templates (one per potentialResult)
                          // Acceptance letter
                          {
                            '@type': 'InformAction',
                            agent: agent('editor', 'Editor-in-Chief'),
                            // Audience of the AssesAction _at end of the stage_ so here we include the audience specified in the AuthorizeAction
                            recipient: audience('editor', 'author'),
                            actionStatus: 'PotentialActionStatus',
                            completeOn: 'OnObjectCompletedActionStatus',
                            ifMatch: '_:productionStageId', // must be an @id of one of the AssessAction potentialResult
                            instrument: {
                              '@type': 'EmailMessage',
                              about: '_:reviewAssessActionId',
                              messageAttachment: [
                                '_:editorReviewActionId',
                                '_:reviewerReviewActionId'
                              ],
                              description: 'Decision on manuscript',
                              text:
                                'It is a pleasure to accept your manuscript for publication in the Journal. Thank you for your fine submission. On behalf of the editors, we look forward to your continued contributions to the Journal.'
                            }
                          },
                          // Rejection letter
                          {
                            '@type': 'InformAction',
                            agent: agent('editor', 'Editor-in-Chief'),
                            // Audience of the AssesAction _at end of the stage_ so here we include the audience specified in the AuthorizeAction
                            recipient: audience('editor', 'author'),
                            actionStatus: 'PotentialActionStatus',
                            completeOn: 'OnObjectCompletedActionStatus',
                            ifMatch: '_:reviewStageRejectActionId',
                            messageAttachment: [
                              '_:editorReviewActionId',
                              '_:reviewerReviewActionId'
                            ],
                            instrument: {
                              '@type': 'EmailMessage',
                              about: '_:reviewAssessActionId',
                              description: 'Decision on manuscript',
                              text:
                                'Thank you for submitting your manuscript to the Journal. We have now received detailed  reviews of your submission. Unfortunately, they are not positive enough to support publication of the paper in the Journal. Although we recognize that you could likely address many of these specific criticisms in a revised manuscript, the overall nature of the reviews is such that the submission would not be able to compete for our limited space. We are grateful that you gave the Journal the opportunity to consider your work. We hope that you find the attached reviews helpful in preparing the manuscript for submission to another journal.'
                            }
                          }
                        ]
                      }
                    ]
                  }
                ],
                potentialAction: [
                  {
                    '@type': 'AuthorizeAction',
                    completeOn: 'OnWorkflowStageEnd',
                    actionStatus: 'PotentialActionStatus',
                    recipient: audience('author')
                  },
                  // Decision letters templates (one per potentialResult)
                  // Acceptance letter
                  {
                    '@type': 'InformAction',
                    agent: agent('editor'),
                    // Audience of the AssesAction _at end of the stage_ (so here we include the audience specified in the AuthorizeAction
                    recipient: audience('editor', 'author'),
                    actionStatus: 'PotentialActionStatus',
                    completeOn: 'OnObjectCompletedActionStatus',
                    ifMatch: '_:productionStageId', // must be an @id of one of the AssessAction potentialResult
                    instrument: {
                      '@type': 'EmailMessage',
                      about: '_:submissionAssessActionId',
                      description: 'Decision on manuscript',
                      text:
                        'It is a pleasure to accept your manuscript for publication in the Journal. Thank you for your fine submission. On behalf of the editors, we look forward to your continued contributions to the Journal.'
                    }
                  },

                  // Send to review letter
                  {
                    '@type': 'InformAction',
                    agent: agent('editor'),
                    // Audience of the AssesAction _at end of the stage_ so here we include the audience specified in the AuthorizeAction
                    recipient: audience('editor', 'author'),
                    actionStatus: 'PotentialActionStatus',
                    completeOn: 'OnObjectCompletedActionStatus',
                    ifMatch: '_:reviewStageId', // must be an @id of one of the AssessAction potentialResult
                    instrument: {
                      '@type': 'EmailMessage',
                      about: '_:submissionAssessActionId',
                      description: 'Decision on manuscript',
                      text:
                        'We are pleased to inform you that we have decided to proceed with your submission. As a next step, we have sent it for expert review. We will endeavor to be back to you as quickly as possible with next steps.'
                    }
                  },

                  // Rejection letter
                  {
                    '@type': 'InformAction',
                    agent: agent('editor'),
                    // Audience of the AssesAction _at end of the stage_ so here we include the audience specified in the AuthorizeAction
                    recipient: audience('editor', 'author'),
                    actionStatus: 'PotentialActionStatus',
                    completeOn: 'OnObjectCompletedActionStatus',
                    ifMatch: '_:submissionRejectActionId',
                    instrument: {
                      '@type': 'EmailMessage',
                      about: '_:submissionAssessActionId',
                      description: 'Decision on manuscript',
                      text:
                        'Thank you for submitting your manuscript to the Journal. We have now received detailed  reviews of your submission. Unfortunately, they are not positive enough to support publication of the paper in the Journal. Although we recognize that you could likely address many of these specific criticisms in a revised manuscript, the overall nature of the reviews is such that the submission would not be able to compete for our limited space. We are grateful that you gave the Journal the opportunity to consider your work. We hope that you find the attached reviews helpful in preparing the manuscript for submission to another journal.'
                    }
                  }
                ]
              }
            ]
          }
        }
      ]
    }
  }
};
