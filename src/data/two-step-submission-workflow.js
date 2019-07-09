import { yesNo, agent, audience } from '../utils/workflow-utils';

export default {
  '@type': 'CreateGraphAction',
  result: {
    '@type': 'Graph',
    potentialAction: {
      /********************/
      /* INITIAL SUBMISSION STAGE */
      /********************/
      '@type': 'StartWorkflowStageAction',
      actionStatus: 'CompletedActionStatus',
      name: 'Initial submission stage',
      participant: audience('all'),
      result: [
        {
          '@type': 'CreateReleaseAction',
          actionStatus: 'ActiveActionStatus',
          agent: agent('author'),
          participant: audience('all'),
          releaseRequirement: 'SubmissionReleaseRequirement',
          expectedDuration: 'P10D',
          name: 'Upload files',
          description:
            'Upload all files for submission in any format including your manuscript and any supporting data, code, or media files necessary for the editor to make an initial decision before requesting a full submission. There are no constraints on format or length for initial submissions.',
          result: {
            '@type': 'Graph',
            potentialAction: [
              {
                '@id': '_:submissionStageAssessActionId',
                '@type': 'AssessAction',
                actionStatus: 'ActiveActionStatus',
                expectedDuration: 'P5D',
                name: 'Assess submission',
                agent: agent('editor', 'senior editor'),
                participant: audience('editor', 'producer'),
                description:
                  'Make an initial assessment of the submission to decide whether to request a full submission from the author.',
                potentialResult: [
                  {
                    '@id': '_:submissionReject',
                    '@type': 'RejectAction',
                    agent: agent('editor'),
                    participant: audience('all')
                  },

                  /********************/
                  /* FULL SUBMISSION STAGE */
                  /********************/
                  {
                    '@id': '_:fullSubmissionStage',
                    '@type': 'StartWorkflowStageAction',
                    actionStatus: 'PotentialActionStatus',
                    name: 'Full submission stage',
                    participant: audience('all'),
                    releaseRequirement: 'ProductionReleaseRequirement',
                    result: [
                      {
                        '@type': 'CreateReleaseAction',
                        actionStatus: 'ActiveActionStatus',
                        agent: agent('author'),
                        participant: audience('all'),
                        expectedDuration: 'P10D',
                        name: 'Upload files',
                        description:
                          'Upload a revised manuscript file or any new files  needed to complete a full submission including all supporting data, code, or media files. Be sure to follow journal guidelines for formatting your submission.',
                        potentialAction: {
                          '@type': 'AuthorizeAction',
                          actionStatus: 'PotentialActionStatus',
                          completeOn: 'OnObjectCompletedActionStatus',
                          recipient: audience('editor', 'producer', 'reviewer')
                        },
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
                              name: 'Answer questions',
                              description:
                                'Complete author submission questions to help the senior editor assess your full submission prior to peer review.',
                              question: [
                                {
                                  '@type': 'Question',
                                  text:
                                    'Have you submitted all supporting resources (data, code, media, etc) that would be required to reproduce the results presented?',
                                  suggestedAnswer: yesNo()
                                },
                                {
                                  '@type': 'Question',
                                  text:
                                    'Please provide names of suggested reviewers and a review editor.'
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
                              '@id': '_:fullSubmissionAssessActionId',
                              '@type': 'AssessAction',
                              actionStatus: 'ActiveActionStatus',
                              expectedDuration: 'P5D',
                              name: 'Assess submission',
                              agent: agent('editor', 'senior editor'),
                              participant: audience('editor', 'producer'),
                              requiresCompletionOf: ['_:declareAction'],
                              description:
                                'Make a decision to determine whether to send the full submission to peer review, accept it directly, or reject it.',
                              potentialResult: [
                                '_:reviewStage',
                                {
                                  '@id': '_:fullSubmissionReject',
                                  '@type': 'RejectAction',
                                  agent: agent('editor'),
                                  participant: audience('all')
                                },
                                '_:productionStage'
                              ],
                              potentialAction: [
                                {
                                  '@type': 'AuthorizeAction',
                                  completeOn: 'OnWorkflowStageEnd',
                                  actionStatus: 'PotentialActionStatus',
                                  recipient: audience('author')
                                }
                              ]
                            }
                          ]
                        }
                      }
                    ]
                  },
                  '_:productionStage'
                ],
                potentialAction: [
                  {
                    '@type': 'AuthorizeAction',
                    completeOn: 'OnWorkflowStageEnd',
                    actionStatus: 'PotentialActionStatus',
                    recipient: audience('author')
                  }
                ]
              },
              /*****************/
              /* REVIEW STAGE */
              /*****************/
              {
                '@id': '_:reviewStage',
                '@type': 'StartWorkflowStageAction',
                actionStatus: 'PotentialActionStatus',
                name: 'Review stage',
                participant: audience('all'),
                result: [
                  {
                    '@id': '_:reviewActionId',
                    '@type': 'ReviewAction',
                    actionStatus: 'ActiveActionStatus',
                    name: 'Review',
                    agent: agent('reviewer'),
                    expectedDuration: 'P30D',
                    completeOn: 'OnEndorsed',
                    minInstances: 1,
                    maxInstances: 5,
                    description:
                      'Review the submission to help the editor determine whether it is suitable for publication in the Journal. Please add reviews as annotations to any selection of text, resource, or metadata field.',
                    answer: [
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
                        '@id': '_:endorseActionid',
                        '@type': 'EndorseAction',
                        activateOn: 'OnObjectStagedActionStatus',
                        agent: agent('author')
                      },
                      {
                        '@type': 'AuthorizeAction',
                        actionStatus: 'PotentialActionStatus',
                        completeOn: 'OnObjectStagedActionStatus', //Note this has to match the audience of the EndorseAction so that the endorser has access
                        recipient: audience('author')
                      },
                      {
                        '@type': 'AuthorizeAction',
                        actionStatus: 'PotentialActionStatus',
                        completeOn: 'OnObjectCompletedActionStatus',
                        recipient: audience('producer', 'editor')
                      }
                    ]
                  },
                  {
                    '@id': '_:reviewAssessActionId',
                    '@type': 'AssessAction',
                    actionStatus: 'ActiveActionStatus',
                    completeOn: 'OnEndorsed',
                    expectedDuration: 'P5D',
                    name: 'Assess submission',
                    agent: agent('editor', 'Associate Editor'),
                    participant: audience('editor', 'producer'),
                    description:
                      'Make a decision following peer review to determine whether to request further a revision, or to accept, or reject the submission.',
                    potentialAction: [
                      {
                        '@id': '_:endorseActionid',
                        '@type': 'EndorseAction',
                        activateOn: 'OnObjectStagedActionStatus',
                        agent: agent('editor', 'Editor-in-Chief')
                      },
                      {
                        '@type': 'AuthorizeAction',
                        actionStatus: 'PotentialActionStatus',
                        completeOn: 'OnObjectStagedActionStatus', //Note this has to match the audience of the EndorseAction so that the endorser has access
                        recipient: audience('editor')
                      },
                      {
                        '@type': 'AuthorizeAction',
                        actionStatus: 'PotentialActionStatus',
                        completeOn: 'OnObjectCompletedActionStatus',
                        recipient: audience('author', 'reviewer')
                      }
                    ],
                    potentialResult: [
                      '_:revisionStage',
                      {
                        '@id': '_:reviewReject',
                        '@type': 'RejectAction',
                        agent: agent('editor'),
                        participant: audience('all')
                      },
                      '_:productionStage'
                    ]
                  }
                ]
              },
              /******************/
              /* REVISION STAGE */
              /******************/
              {
                '@id': '_:revisionStage',
                '@type': 'StartWorkflowStageAction',
                actionStatus: 'PotentialActionStatus',
                name: 'Revision stage',
                participant: audience('all'),
                result: [
                  {
                    '@type': 'CreateReleaseAction',
                    actionStatus: 'ActiveActionStatus',
                    requiresCompletionOf: '_:revisionDeclareAction',
                    agent: agent('author'),
                    participant: audience('all'),
                    expectedDuration: 'P30D',
                    releaseRequirement: 'ProductionReleaseRequirement',
                    name: 'Upload files',
                    description:
                      'Upload revised files addressing all editor and reviewer concerns.',
                    result: {
                      '@type': 'Graph',
                      potentialAction: [
                        {
                          '@id': '_:revisionDeclareAction',
                          '@type': 'DeclareAction',
                          actionStatus: 'ActiveActionStatus',
                          agent: agent('author'),
                          participant: audience('all'),
                          expectedDuration: 'P10D',
                          name: 'Answer questions',
                          description:
                            'Complete author revision questions to help the editor assess your revision.',
                          question: [
                            {
                              '@type': 'Question',
                              text:
                                'Have you addressed all concerns and questions outlined in the editor decision letter?',
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
                          '@id': '_:revisionAssessActionId',
                          '@type': 'AssessAction',
                          actionStatus: 'ActiveActionStatus',
                          expectedDuration: 'P5D',
                          name: 'Assess revision',
                          agent: agent('editor', 'senior editor'),
                          participant: audience('editor', 'producer'),
                          description:
                            'Make a decision following to determine whether to reject or accept the revised submission.',
                          potentialResult: [
                            {
                              '@id': '_:revisionReject',
                              '@type': 'RejectAction',
                              agent: agent('editor'),
                              participant: audience('all')
                            },
                            '_:productionStage'
                          ],
                          potentialAction: [
                            {
                              '@type': 'AuthorizeAction',
                              actionStatus: 'PotentialActionStatus',
                              completeOn: 'OnObjectCompletedActionStatus',
                              recipient: audience('author', 'reviewer')
                            }
                          ]
                        }
                      ]
                    }
                  }
                ]
              },

              /********************/
              /* PRODUCTION STAGE */
              /********************/
              {
                '@id': '_:productionStage',
                '@type': 'StartWorkflowStageAction',
                actionStatus: 'PotentialActionStatus',
                name: 'Production stage',
                participant: audience('all'),
                result: [
                  {
                    '@type': 'PublishAction',
                    actionStatus: 'ActiveActionStatus',
                    expectedDuration: 'P7D',
                    agent: agent('producer', 'production editor'),
                    participant: audience('editor', 'producer'),
                    name: 'Production release',
                    description:
                      'Upload final version of the manuscript and publish manuscript to the journal homepage.',
                    potentialAction: {
                      '@type': 'AuthorizeAction',
                      actionStatus: 'PotentialActionStatus',
                      completeOn: 'OnObjectCompletedActionStatus',
                      recipient: audience('all')
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
