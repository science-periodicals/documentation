import React, { Fragment } from 'react';
import { BemTags, SchemaLink as A } from '@scipe/ui';
import Iconoclass from '@scipe/iconoclass';
import ActionSpec from '../action-spec';
import ObjectSpec from '../object-spec';
import ActionExample from '../action-example';

export default class ApiCreateOrganizationAction extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section id="create-organization-action" className={bem`@__sub-section`}>
        <h3 className={bem`@__default-ui-type--subhead-1 @__icon-title`}>
          CreateOrganizationAction <Iconoclass iconName="star" round={true} />
        </h3>

        <p>
          Create organization actions (<A>CreateOrganizationAction</A>) are used
          to create organizations (<A>Organization</A>).
        </p>

        <ActionExample
          action={{
            '@type': 'CreateOrganizationAction',
            agent: 'user:userId',
            actionStatus: 'CompletedActionStatus',
            result: {
              '@id': `org:slug`,
              '@type': 'Organization'
            }
          }}
        />

        <ActionSpec
          type="CreateOrganizationAction"
          spec={{
            agent: {
              '@type': 'Person',
              value: 'userId'
            },
            actionStatus: {
              '@type': 'ActionStatusType',
              value: 'CompletedActionStatus'
            },
            result: {
              '@type': 'Organization',
              value: (
                <ObjectSpec
                  spec={{
                    '@id': (
                      <Fragment>
                        A{' '}
                        <code>
                          <a href="https://www.w3.org/TR/curie/">CURIE</a>
                        </code>{' '}
                        made of the <code>org:</code> prefix followed by a{' '}
                        <a href="https://en.wikipedia.org/wiki/Slug_(publishing)">
                          slug
                        </a>{' '}
                        of a human readable identifier for the{' '}
                        <A>Organization</A>
                      </Fragment>
                    ),
                    '@type': 'Organization'
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
