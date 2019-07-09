import React, { Fragment } from 'react';
import { BemTags } from '@scipe/ui';
import Iconoclass from '@scipe/iconoclass';
import ActionSpec from '../action-spec';
import ObjectSpec from '../object-spec';
import ActionExample from '../action-example';
import A from '../a';

export default class ApiCreatePeriodicalAction extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section id="create-periodical-action" className={bem`@__sub-section`}>
        <h3 className={bem`@__default-ui-type--subhead-1 @__icon-title`}>
          CreatePeriodicalAction <Iconoclass iconName="star" round={true} />
        </h3>

        <p>
          Create periodical actions (<A>CreatePeriodicalAction</A>) are used to
          create journals (<A>Periodical</A>)
        </p>

        <ActionExample
          action={{
            '@type': 'CreatePeriodicalAction',
            actionStatus: 'CompletedActionStatus',
            agent: 'user:userId',
            object: 'org:organizationId',
            result: {
              '@id': 'journal:slug',
              '@type': 'Periodical'
            }
          }}
        />

        <ActionSpec
          type="CreatePeriodicalAction"
          spec={{
            agent: { '@type': 'Person', value: 'userId' },
            actionStatus: {
              '@type': 'ActionStatusType',
              value: 'CompletedActionStatus'
            },
            object: {
              '@type': 'Organization',
              value: 'organizationId'
            },
            result: {
              '@type': 'Periodical',
              value: (
                <ObjectSpec
                  spec={{
                    '@id': (
                      <Fragment>
                        A{' '}
                        <code>
                          <a href="https://www.w3.org/TR/curie/">CURIE</a>
                        </code>{' '}
                        made of the <code>journal:</code> prefix followed by a{' '}
                        <a href="https://en.wikipedia.org/wiki/Slug_(publishing)">
                          slug
                        </a>{' '}
                        of a human readable identifier for the <A>Periodical</A>
                      </Fragment>
                    ),
                    '@type': 'Periodical',
                    editor: (
                      <ObjectSpec
                        spec={{
                          '@type': 'ContributorRole',
                          roleName: 'editor',
                          editor: (
                            <Fragment>
                              Same <code>@id</code> as the <A>agent</A> of the{' '}
                              <A>CreatePeriodicalAction</A>
                            </Fragment>
                          )
                        }}
                        others={true}
                      />
                    ),
                    hasDigitalDocumentPermission: (
                      <Fragment>
                        A list of <A>DigitalDocumentPermission</A> for the
                        journal (see{' '}
                        <a href="#access-control-and-permissions">
                          permissions
                        </a>{' '}
                        section)
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
