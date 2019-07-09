import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { BemTags } from '@scipe/ui';
import Iconoclass from '@scipe/iconoclass';
import ActionSpec from '../action-spec';
import ObjectSpec from '../object-spec';
import ActionExample from '../action-example';
import A from '../a';

export default class ApiCreateGraphAction extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section id="create-graph-action" className={bem`@__sub-section`}>
        <h3 className={bem`@__default-ui-type--subhead-1 @__icon-title`}>
          CreateGraphAction <Iconoclass iconName="star" round={true} />
        </h3>

        <p>
          Create graph actions (<A>CreateGraphAction</A>) are used to create
          graphs (<A>Graph</A>) according to a <A>WorkflowSpecification</A> (<A>
            object
          </A>{' '}
          of the <A>CreateGraphAction</A>).
        </p>

        <ActionExample
          action={{
            '@type': 'CreateGraphAction',
            actionStatus: 'CompletedActionStatus',
            agent: 'user:userId',
            participant: 'role:editorId',
            object: 'workflow:workflowId',
            result: {
              '@type': 'Graph',
              additionalType: 'type:research-article',
              author: {
                roleName: 'author',
                author: 'user:userId'
              },
              editor: 'role:editorId'
            }
          }}
        />

        <ActionSpec
          type="CreateGraphAction"
          scope={['Periodical']}
          spec={{
            agent: { '@type': 'Person', value: 'userId' },
            participant: { '@type': 'ContributorRole', value: 'scopeRoleId' },
            actionStatus: {
              '@type': 'ActionStatusType',
              value: 'CompletedActionStatus'
            },
            object: {
              '@type': 'WorklowSpecification',
              value: 'workflowId'
            },
            result: {
              '@type': 'Graph',
              value: (
                <ObjectSpec
                  spec={{
                    '@id': (
                      <Fragment>
                        A{' '}
                        <code>
                          <a href="https://www.w3.org/TR/curie/">CURIE</a>
                        </code>{' '}
                        made of the <code>graph:</code> prefix followed by a{' '}
                        <a href="https://en.wikipedia.org/wiki/Slug_(publishing)">
                          slug
                        </a>{' '}
                        of a human readable identifier for the <A>Graph</A>
                      </Fragment>
                    ),
                    '@type': 'Graph',
                    additionalType: (
                      <Fragment>
                        The <code>@id</code> of a <A>PublicationType</A>{' '}
                        associated with the journal to which the workflow (<A>
                          object
                        </A>{' '}
                        of the <A>CreateGraphAction</A>) belongs.
                      </Fragment>
                    ),
                    author: <GraphContributorSpec roleName="author" />,
                    editor: <GraphContributorSpec roleName="editor" />,
                    reviewer: <GraphContributorSpec roleName="reviewer" />,
                    producer: <GraphContributorSpec roleName="producer" />
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

class GraphContributorSpec extends React.Component {
  static propTypes = {
    roleName: PropTypes.string
  };

  render() {
    const { roleName } = this.props;

    return (
      <Fragment>
        (Optional) Either:{' '}
        <ul>
          <li>
            The <code>@id</code> of an <code>{roleName}</code> role listed as{' '}
            <A>agent</A> or <A>participant</A> of the <A>CreateGraphAction</A>.
          </li>
          <li>
            Or a <A>ContributorRole</A> where the <A>{roleName}</A> property
            matches one of the <code>@id</code> listed in the{' '}
            <A>CreateGraphAction</A> <A>agent</A> or <A>participant</A>{' '}
            properties.
          </li>
        </ul>
      </Fragment>
    );
  }
}
