import React, { Fragment } from 'react';
import { BemTags, SchemaLink as A } from '@scipe/ui';
import QueryStringParameters from './query-string-parameters';
import Info from '../info';
import JsonldExample from '../jsonld-example';
import SearchIndexFields from './search-index-fields';

// TODO issue route

export default class ApiRoutesSearch extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <Fragment>
        <p>
          The search API supports <strong>full text</strong> and{' '}
          <strong>faceted search</strong> combined with advanced{' '}
          <strong>queries</strong>.
        </p>

        <p>
          Search results are returned in{' '}
          <a href="https://www.w3.org/TR/json-ld/">JSON-LD</a> in an{' '}
          <A>ItemList</A> containing an <A>itemListFacet</A> exposing aggregate
          information about the list.
        </p>

        <JsonldExample
          data={{
            '@context': 'https://sci.pe',
            '@type': 'ItemList',
            numberOfItems: 1,
            itemListOrder: 'relevance',
            itemListElement: [
              {
                '@type': 'ListItem',
                item: {
                  '@id': 'graph:7c8f7c92-e363-4eb7-aca9-fd9087b1a003',
                  '@type': 'Graph',
                  name: 'matching graph'
                },
                nextItem:
                  'http://example.com?bookmark=g2wAAAABaANkACxkYmNvcmVAZGIyLn'
              }
            ],
            itemListFacet: [
              {
                '@type': 'Facet',
                name: 'editor',
                count: [
                  {
                    '@type': 'PropertyValue',
                    propertyId: 'user:peter',
                    name: 'Dr. Peter Jon Smith',
                    value: 3
                  }
                ]
              },
              {
                '@type': 'RangeFacet',
                name: 'dateCreated',
                count: [
                  {
                    '@type': 'PropertyValue',
                    propertyId: 'decade',
                    value: 1,
                    minValue: 1325376000000,
                    maxValue: 1640995200000
                  }
                ]
              }
            ]
          }}
        >
          Example of a response body resulting from a faceted search.
        </JsonldExample>

        <Info className={bem`@__info-panel`}>
          <header>Hydrating search result</header>

          <p>
            The search API provides the option to hydrate search results using
            the <code>hydrate</code> query string parameter.
          </p>

          <p>
            Using the <code>hydrate</code> option triggers a different response
            body allowing to accommodate the dereferenced (hydrated) nodes.
          </p>

          <JsonldExample
            data={{
              '@context': 'https://sci.pe',
              mainEntity: {
                '@type': 'ItemList',
                numberOfItems: 1,
                itemListOrder: 'relevance',
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    item: {
                      '@id': 'graph:7c8f7c92-e363-4eb7-aca9-fd9087b1a003',
                      '@type': 'Graph',
                      author: ['node:author1', 'node:author2']
                    }
                  }
                ]
              },
              '@graph': [
                {
                  '@id': 'node:author1',
                  name: 'peter'
                },
                {
                  '@id': 'node:author2',
                  name: 'elsa'
                }
              ]
            }}
          >
            Example of a response body when the <code>hydrate</code> query
            string parameter is used (e.g. <code>?hydrate=["author"]</code>).
          </JsonldExample>
        </Info>

        <section id="get-user" className={bem`@__sub-section`}>
          <h4 className={bem`@__default-ui-type--subhead-2`}>
            <code>GET /user</code>
          </h4>

          <p>Search for users</p>

          <SearchQueryStringParameters />

          <SearchIndexFields index="user" />
        </section>

        <section id="get-organization" className={bem`@__sub-section`}>
          <h4 className={bem`@__default-ui-type--subhead-2`}>
            <code>GET /organization</code>
          </h4>

          <p>Search for organizations</p>

          <SearchQueryStringParameters />

          <SearchIndexFields index="organization" />
        </section>

        <section id="get-service" className={bem`@__sub-section`}>
          <h4 className={bem`@__default-ui-type--subhead-2`}>
            <code>GET /service</code>
          </h4>

          <p>Search for services</p>

          <SearchQueryStringParameters />

          <SearchIndexFields index="service" />
        </section>

        <section id="get-type" className={bem`@__sub-section`}>
          <h4 className={bem`@__default-ui-type--subhead-2`}>
            <code>GET /type</code>
          </h4>

          <p>Search for publication types</p>

          <SearchQueryStringParameters />

          <SearchIndexFields index="type" />
        </section>

        <section id="get-workflow" className={bem`@__sub-section`}>
          <h4 className={bem`@__default-ui-type--subhead-2`}>
            <code>GET /workflow</code>
          </h4>

          <p>Search for workflow specifications</p>

          <SearchQueryStringParameters />

          <SearchIndexFields index="workflow" />
        </section>

        <section id="get-periodical" className={bem`@__sub-section`}>
          <h4 className={bem`@__default-ui-type--subhead-2`}>
            <code>GET /periodical</code>
          </h4>

          <p>Search for periodicals</p>

          <SearchQueryStringParameters />

          <SearchIndexFields index="periodical" />
        </section>

        <section id="get-graph" className={bem`@__sub-section`}>
          <h4 className={bem`@__default-ui-type--subhead-2`}>
            <code>GET /graph</code>
          </h4>

          <p>Search for graphs</p>

          <SearchQueryStringParameters />

          <SearchIndexFields index="graph" />
        </section>

        <section id="get-action" className={bem`@__sub-section`}>
          <h4 className={bem`@__default-ui-type--subhead-2`}>
            <code>GET /action</code>
          </h4>

          <p>Search for actions</p>

          <SearchQueryStringParameters />

          <SearchIndexFields index="action" />
        </section>

        <section id="get-event" className={bem`@__sub-section`}>
          <h4 className={bem`@__default-ui-type--subhead-2`}>
            <code>GET /event</code>
          </h4>

          <p>Search for events</p>

          <SearchQueryStringParameters />

          <SearchIndexFields index="event" />
        </section>
      </Fragment>
    );
  }
}

class SearchQueryStringParameters extends React.Component {
  render() {
    return (
      <QueryStringParameters>
        <dt>
          <code>query</code>
        </dt>
        <dd>
          A Lucene query.
          <p className="warning">
            Queries must be expressed using the{' '}
            <a href="http://lucene.apache.org/core/4_3_0/queryparser/org/apache/lucene/queryparser/classic/package-summary.html#Overview">
              Lucene Query Parser Syntax
            </a>
            .
          </p>
        </dd>
        <dt>
          <code>includeDocs</code>
        </dt>
        <dd>
          A boolean (defaulting to <code>false</code>) specifying if the full
          contents of the documents should be included in the response.
        </dd>
        <dt>
          <code>counts</code>
        </dt>
        <dd>
          A JSON array of field names for which counts should be produced
          (faceted search).
        </dd>
        <dt>
          <code>ranges</code>
        </dt>
        <dd>
          A JSON object specifing ranges for faceted, numeric search fields.
          e.g.
          <pre>
            <code>
              {`{"price":{"cheap":"[0 TO 100]","expensive":"{100 TO Infinity}"}}`}
            </code>
          </pre>
          Inclusive range queries are denoted by brackets (<code>[, ]</code>),
          Exclusive range queries are denoted by curly brackets (
          <code>
            {'{'}, {'}'}
          </code>
          ).
        </dd>
        <dt>
          <code>limit</code>
        </dt>
        <dd>
          Limit the number of the returned documents to the specified number.
          The limit value can be any positive integer number up to and including
          200.
        </dd>
        <dt>
          <code>sort</code>
        </dt>
        <dd>
          A JSON string of the form <code>fieldname&lt;type&gt;</code>
          or <code>-fieldname&lt;type&gt;</code> for descending order, where
          fieldname is the name of a string or number field, and type is either
          number or string or a JSON array of such strings. The type part is
          optional and defaults to number.
        </dd>
        <dt>
          <code>defaultFacetQuery</code>
        </dt>
        <dd>
          A Lucene query to be used to gather values for facets. When this
          parameter is used, a count of value 0 will be returned for facet
          values matching the <code>defaultFacetQuery</code> but not the active{' '}
          <code>query</code>.
        </dd>
        <dt>
          <code>hydrate</code>
        </dt>
        <dd>
          <p>
            A JSON list of properties whose values should be dereferenced and
            included in the response body.
          </p>
        </dd>
      </QueryStringParameters>
    );
  }
}
