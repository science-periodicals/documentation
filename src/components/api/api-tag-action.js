import React, { Fragment } from 'react';
import { BemTags, SchemaLink as A } from '@scipe/ui';
import Iconoclass from '@scipe/iconoclass';
import ActionSpec from '../action-spec';
import ObjectSpec from '../object-spec';
import ActionExample from '../action-example';

export default class ApiTagAction extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section id="tag-action" className={bem`@__sub-section`}>
        <h3 className={bem`@__default-ui-type--subhead-1 @__icon-title`}>
          TagAction <Iconoclass iconName="label" round={true} />
        </h3>

        <p>
          Tag actions (<A>TagAction</A>) are used to tag graphs (<A>Graph</A>)
          and make the tag (<A>Tag</A>) available to a specific audience (<A>
            participant
          </A>{' '}
          of the <A>TagAction</A>).
        </p>

        <ActionExample
          action={{
            '@type': 'TagAction',
            agent: 'role:roleId',
            participant: {
              '@type': 'Audience',
              audienceType: 'editor'
            },
            actionStatus: 'CompletedActionStatus',
            object: 'graph:graphId',
            result: {
              '@type': 'Tag',
              name: 'priority'
            }
          }}
        />

        <ActionSpec
          scope={['Graph']}
          type="TagAction"
          spec={{
            actionStatus: {
              '@type': 'ActionStatusType',
              value: 'CompletedActionStatus'
            },
            agent: {
              '@type': 'ContributorRole',
              value: 'scopeRoleId'
            },
            participant: {
              '@type': 'Audience',
              value: (
                <ObjectSpec
                  spec={{
                    '@type': 'Audience',
                    audienceType: (
                      <Fragment>
                        One of <code>editor</code>, <code>reviewer</code>,{' '}
                        <code>producer</code>, <code>author</code>
                      </Fragment>
                    )
                  }}
                  others={false}
                />
              )
            },
            object: {
              '@type': 'Graph',
              value: 'graphId'
            },
            result: {
              '@type': 'Tag',
              value: (
                <ObjectSpec
                  spec={{
                    '@type': 'Tag',
                    name: 'required'
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
