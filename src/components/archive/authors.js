import React from 'react';
import { BemTags, SchemaLink as A } from '@scipe/ui';
import JsonldExample from '../jsonld-example';

export default class Authors extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section
        id="authors-contributors"
        className={bem`authors @__sub-section`}
      >
        <h5 className={bem`@__default-ui-type--subhead-3`}>
          Authors and contributors
        </h5>

        <p>
          Author and contributor information are typicaly provided using
          schema.org roles. Readers not familiar with the semantic of schema.org
          Role can consult the{' '}
          <a href="http://blog.schema.org/2014/06/introducing-role.html">
            introductory blog post
          </a>.
        </p>

        <p>
          In particular, a <A>ContributorRole</A> type (following the semantic
          of schema.org <A>Role</A>) is used so that affiliations or contact
          information (email address, etc.) relevant to this specific resource
          (and this specific resource only) can be specified. This is important
          as authors and contributors may have many affiliations and contact
          points at the time they are publishing a scholarly article but may
          want to specify only a subset of those.
        </p>

        <JsonldExample
          data={{
            '@type': 'ScholarlyArticle',
            author: {
              '@type': 'ContributorRole',
              author: '_:author',
              startDate: '2017-10-13T23:08:41.465Z',
              endDate: '2017-11-13T21:18:41.465Z',
              roleAffiliation: '_:author-affiliation',
              roleContactPoint: '_:author-contact-point',
              roleAction: '_:author-action'
            }
          }}
        >
          Overall structure of a <A>ContributorRole</A>
        </JsonldExample>

        <p>
          The following sub sections detail how person and organization,
          affiliation, contact information and contributions are specified.
        </p>

        <section
          id="authors-contributors-person-organization"
          className={bem`@__sub-section`}
        >
          <h6 className={bem`@__default-ui-type--subhead-3`}>
            Persons and Organizations
          </h6>

          <p>
            The value of the <A>author</A> or <A>contributor</A> property of the{' '}
            <A>ContributorRole</A> can be a <A>Person</A>
          </p>
          <JsonldExample
            data={{
              '@type': 'ScholarlyArticle',
              author: {
                '@type': 'ContributorRole',
                author: {
                  '@id': 'http://example.com/psullivan',
                  '@type': 'Person',
                  name: 'Prof. James P Sullivan, MD',
                  givenName: 'James',
                  familyName: 'Sullivan',
                  additionalName: ['Peter', 'Robert'],
                  honorificPrefix: 'Prof',
                  honorificSuffix: 'MD'
                }
              }
            }}
          >
            Example of <A>Person</A>
          </JsonldExample>

          <p>
            or an <A>Organization</A>.
          </p>

          <JsonldExample
            data={{
              '@type': 'ScholarlyArticle',
              author: {
                '@type': 'ContributorRole',
                author: {
                  '@id': 'http://www.anatomy.vcu.edu/microscopy/',
                  '@type': 'Organization',
                  name: 'Microscopy Facility',
                  parentOrganization: {
                    '@id': 'http://www.anatomy.vcu.edu',
                    '@type': 'Organization',
                    name: 'Department of Anatomy and Neurology',
                    parentOrganization: {
                      '@id': 'http://www.vcu.edu',
                      '@type': 'CollegeOrUniversity',
                      name: 'Virginia Commonwealth University',
                      alternateName: 'VCU',
                      location: {
                        '@type': 'Place',
                        address: {
                          '@type': 'PostalAddress',
                          addressLocality: 'Richmond',
                          addressRegion: 'VA',
                          addressCountry: 'USA'
                        }
                      }
                    }
                  }
                }
              }
            }}
          >
            Example of an <A>Organization</A>. Note how the{' '}
            <A>parentOrganization</A> property is used to detail the
            "organization trail".
          </JsonldExample>
        </section>

        <section
          id="authors-contributors-affiliations"
          className={bem`@__sub-section`}
        >
          <h6 className={bem`@__default-ui-type--subhead-3`}>Affiliations</h6>

          <p>
            Affiliations are specified with the <A>roleAffiliation</A> property
            of the <A>ContributorRole</A> and are typically <A>Organization</A>{' '}
            (or subclass thereof).
          </p>

          <JsonldExample
            data={{
              '@type': 'ScholarlyArticle',
              author: {
                '@type': 'ContributorRole',
                author: '_:author',
                roleAffiliation: {
                  '@id': 'http://www.biology.as.nyu.edu',
                  '@type': 'CollegeOrUniversity',
                  name: 'Department of Biology',
                  parentOrganization: {
                    '@id': 'http://www.nyu.edu',
                    '@type': 'CollegeOrUniversity',
                    name: 'New York University',
                    alternateName: 'NYU',
                    location: {
                      '@type': 'Place',
                      address: {
                        '@type': 'PostalAddress',
                        addressLocality: 'New York',
                        addressRegion: 'NY',
                        addressCountry: 'USA'
                      }
                    }
                  }
                }
              }
            }}
          >
            Example of an affiliation using a subclass of <A>Organization</A> (<A
            >
              CollegeOrUniversity
            </A>)
          </JsonldExample>
        </section>

        <section
          id="authors-contributors-contacts"
          className={bem`@__sub-section`}
        >
          <h6 className={bem`@__default-ui-type--subhead-3`}>
            Contact information
          </h6>

          <p>
            Contact information are specified through the{' '}
            <A>roleContactPoint</A> property of the <A>ContributorRole</A>.
          </p>

          <JsonldExample
            data={{
              '@type': 'ScholarlyArticle',
              author: {
                '@type': 'ContributorRole',
                roleContactPoint: {
                  '@type': 'ContactPoint',
                  email: 'mailto:james@example.com',
                  telephone: 'tel:+1-212-998-8200',
                  faxNumber: 'tel:+1-212-995-4015',
                  address:
                    'Department of Biology, New York University, 70 Washington Square South, New York, NY 10012, USA'
                }
              }
            }}
          >
            Example of a <A>ContactPoint</A> used to provide contact information
            about a <A>ContributorRole</A>
          </JsonldExample>
        </section>

        <section
          id="authors-contributors-contributions"
          className={bem`@__sub-section`}
        >
          <h6 className={bem`@__default-ui-type--subhead-3`}>Contributions</h6>

          <p>
            Author and contributor contributions can be specified with
            schema.org actions (<A>Action</A>) through the <A>roleAction</A>{' '}
            property of the <A>ContributorRole</A>
          </p>

          <JsonldExample
            data={{
              '@type': 'ScholarlyArticle',
              author: {
                '@type': 'ContributorRole',
                roleAction: [
                  {
                    '@type': 'WriteAction',
                    description: 'Wrote the introduction',
                    actionStatus: 'CompletedActionStatus',
                    result: {
                      '@id': 'http://example.com/article#Introduction',
                      '@type': 'Introduction'
                    }
                  },
                  {
                    '@type': 'CreateAction',
                    actionStatus: 'CompletedActionStatus',
                    description: 'Senior author on this work'
                  }
                ]
              }
            }}
          >
            Example of author contributions
          </JsonldExample>

          <JsonldExample
            data={{
              '@type': 'ScholarlyArticle',
              contributor: {
                '@type': 'ContributorRole',
                roleAction: {
                  '@type': 'AllocateAction',
                  actionStatus: 'CompletedActionStatus',
                  object: {
                    '@type': 'Duration',
                    name: '5 hours'
                  },
                  description:
                    'Allocated laser-scanning confocal microscopy for 5 hours'
                }
              }
            }}
          >
            Example of a typical contribution when a contributor is an
            organization.
          </JsonldExample>
        </section>
      </section>
    );
  }
}
