import React, { Fragment } from 'react';
import { BemTags } from '@scipe/ui';
import Iconoclass from '@scipe/iconoclass';
import ActionSpec from '../action-spec';
import ObjectSpec from '../object-spec';
import ActionExample from '../action-example';
import A from '../a';

export default class ApiUpdateAction extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section id="update-action" className={bem`@__sub-section`}>
        <h3 className={bem`@__default-ui-type--subhead-1 @__icon-title`}>
          UpdateAction <Iconoclass iconName="fileReload" round={true} />
        </h3>

        <p>
          Update actions (<A>UpdateAction</A>) are used to update objects (or
          parts of objects) specified as the <A>targetCollection</A> of the{' '}
          <A>UpdateAction</A>.
        </p>

        <ActionExample
          action={{
            '@type': 'UpdateAction',
            agent: 'role:roleId',
            mergeStrategy: 'OverwriteMergeStrategy',
            ifMatch: '1-6080aefe797f5068d36518c954e813a7',
            targetCollection: {
              '@type': 'NodeSelector',
              node: 'node:nodeId',
              targetCollection: 'graph:graphId'
            },
            object: {
              name: 'On the effect of X on Y'
            }
          }}
        />

        <ActionSpec
          scope={['Graph', 'Periodical', 'Organization']}
          type="UpdateAction"
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
            ifMatch: {
              '@type': 'Text',
              value: (
                <Fragment>
                  <p>A revision value.</p>
                  <p className={bem`@__warning`}>
                    The update will only be applied if the revision value
                    specified matches the latest one available on the server
                    (see <a href="multi-version-concurrency-control">MVCC</a>)
                  </p>
                </Fragment>
              )
            },
            mergeStrategy: {
              '@type': 'MergeStrategyType',
              value: ['OverwriteMergeStrategy', 'ReconcileMergeStrategy']
            },
            object: [
              {
                '@type': 'Thing',
                value: (
                  <Fragment>
                    <p>
                      An <em>update payload</em>.
                    </p>
                    <p>
                      Each top level property of the update payload is used to
                      update the target object (specified as{' '}
                      <A>targetCollection</A>) with the following special cases:
                    </p>
                    <ul>
                      <li>
                        Setting values of the update payload to{' '}
                        <code>null</code> results in the deletion of the
                        matching property in the target object
                      </li>
                      <li>
                        When updating a <A>Graph</A>, the update payload is
                        first flattened and each node of the flattened update
                        payload is used to overwrite the matching nodes of the
                        target graph. It is therefore important to specify the
                        blank node <code>@id</code> when updating nodes of a{' '}
                        <A>Graph</A>.
                      </li>
                    </ul>
                    <p className={bem`@__warning`}>
                      Any encoding (<A>MediaObject</A>) specified as part of an
                      update payload must have been uploaded ahead of the{' '}
                      <A>UpdateAction</A> through the{' '}
                      <a href="#post-encoding">
                        <code>POST /encoding</code>
                      </a>{' '}
                      route.
                    </p>
                  </Fragment>
                )
              },
              {
                '@type': 'UploadAction',
                value: (
                  <Fragment>
                    The <code>@id</code> of a <strong>completed</strong>{' '}
                    <A>UploadAction</A> as returned by the{' '}
                    <a href="#post-encoding">POST / encoding</a> route
                  </Fragment>
                )
              }
            ],
            targetCollection: [
              {
                '@type': 'TargetRole',
                value: (
                  <Fragment>
                    <ObjectSpec
                      spec={{
                        '@type': 'TargetRole',
                        hasSelector: (
                          <Fragment>
                            A <A>Selector</A> (or subclass thereof)
                          </Fragment>
                        ),
                        targetCollection: <TargetCollectionId />
                      }}
                    />
                    <p className={bem`@__warning`}>
                      A <A>TargetRole</A> cannot be specified when the{' '}
                      <A>object</A> of the <A>UpdateAction</A> is an{' '}
                      <A>UploadAction</A>
                    </p>
                  </Fragment>
                )
              },
              {
                '@type': 'Thing',
                value: <TargetCollectionId />
              }
            ]
          }}
        />
      </section>
    );
  }
}

function TargetCollectionId() {
  return (
    <Fragment>
      The <code>@id</code> of the object to update (<A>Graph</A>,{' '}
      <A>Periodical</A>, <A>Organization</A>, <A>Service</A>, <A>Person</A>,{' '}
      <A>PublicationType</A>, <A>CssVariable</A>, etc.)
    </Fragment>
  );
}
