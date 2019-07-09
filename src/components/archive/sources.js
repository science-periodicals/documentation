import React from 'react';
import { BemTags, SchemaLink as A } from '@scipe/ui';
import JsonldExample from '../jsonld-example';

const bem = new BemTags('@sa', '@archive');

// TODO encoding chain encoding is derived from another encoding (thumnails etc).

export default class Sources extends React.Component {
  render() {
    return (
      <section id="sources-permissions" className={bem`sources @__sub-section`}>
        <h5 className={bem`@__default-ui-type--subhead-3`}>
          Sources and permissions (credit line)
        </h5>

        <section
          id="sources-permissions-is-based-on"
          className={bem`@__sub-section`}
        >
          <h6 className={bem`@__default-ui-type--subhead-3`}>
            Resource is based on / requires a source (<A>isBasedOn</A>)
          </h6>

          <JsonldExample
            data={{
              '@type': 'Image',
              isBasedOn: {
                '@id': 'http://example.com/code',
                '@type': 'SoftwareSourceCode',
                alternateName: 'Code',
                programmingLanguage: {
                  name: 'JavaScript'
                },
                codeRepository: 'http://example.com/code-repository'
              }
            }}
          >
            The <A>isBasedOn</A> property is used to indicate resource
            requirements and dependency relationships. Here the figure (<A>
              Image
            </A>) is based on some JavaScript code (<A>SoftwareSourceCode</A>)
          </JsonldExample>
        </section>

        <section
          id="sources-permissions-provider"
          className={bem`@__sub-section`}
        >
          <h6 className={bem`@__default-ui-type--subhead-3`}>
            Resource is provided courtesy of a <A>Person</A> or{' '}
            <A>Organization</A> (<A>provider</A>)
          </h6>

          <JsonldExample
            data={{
              '@type': 'Image',
              alternateName: 'Figure 1',
              caption: 'Xanadu growth projection',
              provider: {
                '@type': 'Person',
                name: 'Brian Regal',
                givenName: 'Brian',
                familyName: 'Regal'
              }
            }}
          >
            The <A>provider</A> property is used to indicate the <A>Person</A>{' '}
            or <A>Organization</A> that provided the resource
          </JsonldExample>
        </section>

        <section
          id="sources-permissions-example-of-work"
          className={bem`@__sub-section`}
        >
          <h6 className={bem`@__default-ui-type--subhead-3`}>
            Resource is a reproduction of a source (<A>exampleOfWork</A>)
          </h6>

          <JsonldExample
            data={{
              '@type': 'Image',
              exampleOfWork: {
                '@id': 'http://example.com/regal#figure6',
                '@type': 'Image',
                name: 'Xanadu growth',
                alternateName: 'figure6',
                author: {
                  '@type': 'Person',
                  name: 'Dr. Brian Regal',
                  givenName: 'Brian',
                  familyName: 'Regal'
                },
                datePublished: {
                  '@type': 'xsd:gYear',
                  '@value': 2010
                }
              }
            }}
          >
            The <A>exampleOfWork</A> property is used to indicate that a
            resource is a reproduction of another work.
          </JsonldExample>
        </section>

        <section
          id="sources-permissions-authorize-action"
          className={bem`@__sub-section`}
        >
          <h6 className={bem`@__default-ui-type--subhead-3`}>
            Permission to use a source (<A>AuthorizeAction</A>)
          </h6>

          <p>
            The permission to use a source is specified with an authorize action
            (<A>AuthorizeAction</A>) listed as a potential action (<A>
              potentialAction
            </A>) of the source.
          </p>

          <JsonldExample
            data={{
              '@type': 'Image',
              potentialAction: {
                '@type': 'AuthorizeAction',
                description: 'Authorization to use the figure',
                actionStatus: 'CompletedActionStatus',
                startDate: new Date().toISOString(),
                agent: {
                  '@id': 'http://www.nyu.edu/',
                  '@type': 'CollegeOrUniversity',
                  name: 'New York University',
                  alternateName: 'NYU'
                },
                result: {
                  '@type': 'MediaObject',
                  contentUrl: 'http://example.com/permission.pdf'
                }
              }
            }}
          >
            An <A>AuthorizeAction</A> is used to indicate that permission was
            granted (by the <A>agent</A>) to use the resource (<A>object</A> of
            the <A>AuthorizeAction</A>.
          </JsonldExample>
        </section>
      </section>
    );
  }
}
