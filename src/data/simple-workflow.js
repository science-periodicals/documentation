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
          description:
            'Upload all files for submission including your manuscript and any supporting data, code, or media files.',
          expectedDuration: 'P10D',
          releaseRequirement: 'ProductionReleaseRequirement',
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
                name: 'Answer submission questions',
                description:
                  'Complete author submission questions to help the editorial office complete a quick assessment of your submission prior to peer review.',
                expectedDuration: 'P10D',
                agent: agent('author'),
                participant: audience('author'),
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
                      'Is the paper in review with another journal or has it been published elsewhere?',
                    suggestedAnswer: yesNo()
                  }
                ],
                potentialAction: [
                  {
                    '@type': 'AuthorizeAction',
                    actionStatus: 'PotentialActionStatus',
                    completeOn: 'OnObjectCompletedActionStatus',
                    recipient: audience('editor')
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
                requiresCompletionOf: ['_:declareAction'],
                description:
                  'Make an initial assessment of the submission to decide whether to send it to peer review.',
                potentialResult: [
                  {
                    '@id': '_:submissionStageRejectActionId',
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
                        '@id': '_:reviewActionId',
                        '@type': 'ReviewAction',
                        actionStatus: 'ActiveActionStatus',
                        name: 'Review',
                        agent: agent('reviewer'),
                        expectedDuration: 'P10D',
                        minInstances: 1,
                        maxInstances: 3,
                        answer: [
                          {
                            '@type': 'Answer',
                            parentItem: {
                              '@type': 'Question',
                              text:
                                'Summarize the article. (Be sure to: Identify hypothesis or objective of manuscript, determine if the hypothesis was tested or objective was achieved, and assess the relevance, validity, novelty and limitations.)'
                            }
                          },
                          {
                            '@type': 'Answer',
                            parentItem: {
                              '@type': 'Question',
                              text: 'Does the study add anything new?',
                              suggestedAnswer: yesNo()
                            }
                          },
                          {
                            '@type': 'Answer',
                            parentItem: {
                              '@type': 'Question',
                              text:
                                'What type of research question does the study pose?'
                            }
                          },
                          {
                            '@type': 'Answer',
                            parentItem: {
                              '@type': 'Question',
                              text:
                                'Was the study design appropriate for the research question?',
                              suggestedAnswer: yesNo()
                            }
                          },
                          {
                            '@type': 'Answer',
                            parentItem: {
                              '@type': 'Question',
                              text:
                                'Were the statistical analyses performed correctly?',
                              suggestedAnswer: yesNo()
                            }
                          }
                        ],
                        description:
                          'Review the submission to help the editor determine whether it is suitable for publication in the Journal.',
                        completeOn: 'OnEndorsed',
                        potentialAction: [
                          {
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
                            recipient: audience('editor')
                          }
                        ]
                      },

                      {
                        '@id': '_:reviewAssessActionId',
                        '@type': 'AssessAction',
                        name: 'Decision after review',
                        actionStatus: 'ActiveActionStatus',
                        requiresCompletionOf: ['_:reviewActionId'],
                        agent: agent('editor'),
                        participant: audience('editor'),
                        expectedDuration: 'P3D',
                        description:
                          'Make a decision following associate editor assessment and peer review (if applicable).',
                        potentialResult: [
                          {
                            '@id': '_:reviewRejectActionId',
                            '@type': 'RejectAction',
                            actionStatus: 'PotentialActionStatus',
                            agent: agent('editor')
                          },
                          {
                            /******************/
                            /* REVISION STAGE */
                            /******************/
                            '@id': '_:revisionStageId',
                            '@type': 'StartWorkflowStageAction',
                            actionStatus: 'PotentialActionStatus',
                            name: 'Revision stage',
                            participant: audience('all'),
                            result: [
                              {
                                '@type': 'CreateReleaseAction',
                                actionStatus: 'ActiveActionStatus',
                                name: 'Upload revised files',
                                description:
                                  'Upload all revised files for submission including your manuscript and any supporting data, code, or media files.',
                                expectedDuration: 'P10D',
                                releaseRequirement:
                                  'ProductionReleaseRequirement',
                                agent: agent('author'),
                                participant: audience('author'),
                                potentialAction: [
                                  {
                                    '@type': 'AuthorizeAction',
                                    actionStatus: 'PotentialActionStatus',
                                    completeOn: 'OnObjectCompletedActionStatus',
                                    recipient: audience('editor', 'reviewer')
                                  }
                                ],
                                result: {
                                  '@type': 'Graph',
                                  potentialAction: [
                                    {
                                      '@id': '_:revisionAssessActionId',
                                      '@type': 'AssessAction',
                                      actionStatus: 'ActiveActionStatus',
                                      expectedDuration: 'P5D',
                                      name: 'Assess revision',
                                      agent: agent('editor'),
                                      participant: audience('editor'),
                                      description:
                                        'Make an assessment of the revised submission.',
                                      potentialResult: [
                                        {
                                          '@id':
                                            '_:revisionStageRejectActionId',
                                          '@type': 'RejectAction',
                                          actionStatus: 'PotentialActionStatus',
                                          agent: agent('editor')
                                        },
                                        {
                                          '@id': '_:revisionStageId'
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
                                              agent: agent('editor'),
                                              potentialAction: {
                                                '@type': 'AuthorizeAction',
                                                actionStatus:
                                                  'PotentialActionStatus',
                                                completeOn:
                                                  'OnObjectCompletedActionStatus',
                                                recipient: audience('all')
                                              }
                                            }
                                          ]
                                        }
                                      ],
                                      potentialAction: [
                                        {
                                          '@type': 'AuthorizeAction',
                                          completeOn:
                                            'OnObjectCompletedActionStatus',
                                          actionStatus: 'PotentialActionStatus',
                                          recipient: audience(
                                            'author',
                                            'reviewer'
                                          )
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
                            recipient: audience('author', 'reviewer')
                          }
                        ]
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
