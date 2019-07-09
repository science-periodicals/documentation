import React from 'react';
import { BemTags, SchemaLink as A } from '@scipe/ui';
import JsonldExample from '../jsonld-example';

export default class Funding extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@archive');

    return (
      <section id="funding" className={bem`funding @__sub-section`}>
        <h5 className={bem`@__default-ui-type--subhead-3`}>Funding</h5>

        <p>
          The <A>sponsor</A> and <A>funder</A> properties are used to specify
          sources of funding for works (<A>CreativeWork</A>), persons (<A>
            Person
          </A>) and organizations (<A>Organization</A>).
        </p>

        <p>
          As for <a href="#authors-contributors">authors and contributors</a>,
          sources of funding are typically described using schema.org roles (<A>
            SponsorRole
          </A>{' '}
          and <A>FunderRole</A>). Readers not familiar with the semantic of
          schema.org Role can consult the{' '}
          <a href="http://blog.schema.org/2014/06/introducing-role.html">
            introductory blog post
          </a>.
        </p>

        <section id="funding-work" className={bem`funding @__sub-section`}>
          <h6 className={bem`@__default-ui-type--subhead-3`}>
            Funding attributed to a work or part of a work
          </h6>
          <JsonldExample
            data={{
              '@id': 'http://example.com/article',
              '@type': 'ScholarlyArticle',
              sponsor: {
                '@type': 'SponsorRole',
                sponsor: {
                  '@type': 'Organization',
                  name: 'Collaborative systems',
                  parentOrganization: {
                    '@id': 'http://www.nsf.gov/div/index.jsp?div=IIS',
                    '@type': 'Organization',
                    name: 'Division of Information & Intelligent Systems',
                    alternateName: 'IIS',
                    parentOrganization: {
                      '@id': 'http://www.nsf.gov',
                      '@type': 'GovernmentOrganization',
                      name: 'National Science Foundation',
                      alternateName: 'NSF'
                    }
                  }
                },
                roleOffer: {
                  '@id':
                    'http://www.nsf.gov/awardsearch/showAward?AWD_ID=0553202',
                  '@type': 'FundingSource',
                  name:
                    'SGER: First Stages of Exploratory Development of HyperScope',
                  serialNumber: 'award number 0553202'
                },
                startDate: '2005-11-01',
                endDate: '2006-12-31'
              }
            }}
          >
            The <A>SponsorRole</A> class is used to specify the <A>sponsor</A> /{' '}
            <A>funder</A> of a work. Note that the <A>startDate</A> and{' '}
            <A>endDate</A> are used to specify the duration of the funding and
            that the <A>roleOffer</A> allows to specify the <A>FundingSource</A>.
          </JsonldExample>
        </section>

        <section id="funding-person" className={bem`funding @__sub-section`}>
          <h6 className={bem`@__default-ui-type--subhead-3`}>
            Funding attributed to persons
          </h6>

          <JsonldExample
            data={{
              '@id': 'http://example.com/psullivan',
              '@type': 'Person',
              name: 'Prof. James P Sullivan, MD',
              givenName: 'James',
              familyName: 'Sullivan',
              additionalName: ['Peter', 'Robert'],
              honorificPrefix: 'Prof',
              honorificSuffix: 'MD',
              sponsor: {
                '@type': 'SponsorRole',
                sponsor: {
                  '@id': 'http://www.fic.nih.gov',
                  '@type': 'GovernmentOrganization',
                  name: 'Fogarty International Center',
                  parentOrganization: {
                    '@id': 'http://www.nih.gov',
                    '@type': 'GovernmentOrganization',
                    name: 'National Institutes of Health',
                    alternateName: 'NIH'
                  }
                },
                startDate: '2015-01-01'
              }
            }}
          >
            The <A>SponsorRole</A> class is also used to described funding
            attributed to persons (<A>Person</A>)
          </JsonldExample>
        </section>

        <section
          id="funding-organization"
          className={bem`funding @__sub-section`}
        >
          <h6 className={bem`@__default-ui-type--subhead-3`}>
            Funding attributed to organizations
          </h6>

          <JsonldExample
            data={{
              '@id': 'http://www.biology.as.nyu.edu',
              '@type': 'CollegeOrUniversity',
              name: 'Department of Biology',
              parentOrganization: {
                '@id': 'http://www.nyu.edu',
                '@type': 'CollegeOrUniversity',
                name: 'New York University',
                alternateName: 'NYU'
              },
              sponsor: {
                '@type': 'SponsorRole',
                sponsor: {
                  '@id': 'http://www.gatesfoundation.org',
                  '@type': 'NGO',
                  name: 'Bill & Melinda Gates Foundation'
                },
                roleOffer: {
                  '@type': 'FundingSource',
                  name: 'Collaboration for AIDS Vaccine Discovery Grant',
                  alternateName: 'CAVD',
                  serialNumber: 'OPP38631_01'
                },
                startDate: '2009-11-19'
              }
            }}
          >
            The <A>SponsorRole</A> class is also used to described funding
            attributed to organizations (<A>Organization</A>)
          </JsonldExample>
        </section>
      </section>
    );
  }
}
