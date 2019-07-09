import React from 'react';
import { BemTags } from '@scipe/ui';
import Iconoclass from '@scipe/iconoclass';
import ActionSpec from '../action-spec';
import ObjectSpec from '../object-spec';
import ActionExample from '../action-example';
import JsonldExample from '../jsonld-example';
import Info from '../info';
import A from '../a';

export default class ApiCreateServiceAction extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section id="create-sercice-action" className={bem`@__sub-section`}>
        <h3 className={bem`@__default-ui-type--subhead-1 @__icon-title`}>
          CreateServiceAction <Iconoclass iconName="star" round={true} />
        </h3>

        <p>
          Create service actions (<A>CreateServiceAction</A>) are used to create
          services (<A>Service</A>).
        </p>

        <ActionExample
          action={{
            '@type': 'CreateServiceAction',
            actionStatus: 'CompletedActionStatus',
            agent: 'user:userId',
            object: 'org:organizationId',
            result: {
              '@type': 'Service',
              name: 'Smart typesetting',
              description: 'Convert Microsoft word documents into HTML',
              serviceType: 'typesetting',
              availableChannel: {
                '@type': 'ServiceChannel',
                processingTime: 'P1D'
              },
              serviceOutput: {
                '@type': 'TypesettingAction',
                name: 'Typeset document'
              },
              offers: {
                '@type': 'Offer',
                priceSpecification: {
                  '@type': 'UnitPriceSpecification',
                  price: 50,
                  priceCurrency: 'USD',
                  unitText: 'submission'
                }
              }
            }
          }}
        />

        <ActionSpec
          type="CreateServiceAction"
          spec={{
            actionStatus: {
              '@type': 'ActionStatusType',
              value: 'CompletedActionStatus'
            },
            agent: { '@type': 'Person', value: 'userId' },
            object: { '@type': 'Organization', value: 'organizationId' },
            result: {
              '@type': 'Service',
              value: (
                <ObjectSpec
                  others={true}
                  spec={{
                    '@type': 'Service',
                    serviceType: 'required',
                    availableChannel: (
                      <ObjectSpec
                        others={true}
                        spec={{
                          '@type': 'ServiceChannel',
                          processingTime: <A>Duration</A>
                        }}
                      />
                    ),
                    serviceOutput: <A>Action</A>,
                    offers: (
                      <ObjectSpec
                        others={true}
                        spec={{
                          '@type': 'Offer',
                          priceSpecification: (
                            <ObjectSpec
                              others={true}
                              spec={{
                                '@type': 'UnitPriceSpecification',
                                price: <A>Number</A>,
                                priceCurrency: 'USD',
                                unitText: 'required'
                              }}
                            />
                          )
                        }}
                      />
                    )
                  }}
                />
              )
            }
          }}
        />

        <Info className={bem`@__info-panel`}>
          <header>Service quality control</header>

          <p>
            Service providers can give customers the ability to “endorse” the
            service output before it is marked as completed. This is achieved
            by:
          </p>

          <ol>
            <li>
              Adding a potential <A>EndorseAction</A> to the action listed as{' '}
              <A>serviceOutput</A> of the <A>Service</A> that will be activated
              when the action is staged by the service provider (<A>
                activateOn
              </A>{' '}
              / <A>OnObjectStagedActionStatus</A>{' '}
              <a href="#triggers">trigger</a>).
            </li>
            <li>
              Referencing that action in the <A>requiresCompletionOf</A>{' '}
              property of the service output action.
            </li>
            <li>
              Specifying that the action can only be completed once it is
              endorsed (<A>completeOn</A> / <A>OnEndorsed</A>{' '}
              <a href="#triggers">trigger</a>).
            </li>
          </ol>

          <p>The workflow is then the following:</p>

          <ol>
            <li>
              The service provider sets the action status to{' '}
              <A>StagedActionStatus</A>. This activates the <A>EndorseAction</A>{' '}
              through its <A>activateOn</A> / <A>OnObjectStagedActionStatus</A>{' '}
              <a href="#triggers">trigger</a>
            </li>
            <li>
              The customer (<A>agent</A> of the <A>EndorseAction</A>) reviews
              the result of the action and provides feedback or requests changes
              through annotations (<A>CommentAction</A>)
            </li>
            <li>The service provider addresses those changes</li>
            <li>
              The customer endorses the action and the endorsement marks the
              action as completed through the <A>completeOn</A> /{' '}
              <A>OnEndorsed</A> <a href="#triggers">trigger</a>.{' '}
            </li>
          </ol>

          <JsonldExample
            data={{
              '@id': 'service:typesettingTypesettingAction',
              '@type': 'TypesettingAction',
              actionStatus: 'ActiveActionStatus',
              name: 'Typeset document',
              completeOn: 'OnEndorsed',
              requiresCompletionOf: '_:endorse',
              potentialAction: {
                '@id': '_:endorse',
                actionStatus: 'PotentialActionStatus',
                '@type': 'EndorseAction',
                activateOn: 'OnObjectStagedActionStatus',
                agent: {
                  '@type': 'ContributorRole',
                  roleName: 'customer'
                }
              }
            }}
          >
            Customer driven quality control. Here the typesetting action (<A>
              serviceOutput
            </A>{' '}
            of a <A>Service</A> cannot be completed until the{' '}
            <code>customer</code> (<A>agent</A> of the <A>EndorseAction</A>{' '}
            endorses it).
          </JsonldExample>
        </Info>
      </section>
    );
  }
}
