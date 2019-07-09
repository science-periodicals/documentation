import React, { Fragment } from 'react';
import { BemTags, SchemaLink as A } from '@scipe/ui';
import QueryStringParameters from './query-string-parameters';
import JsonldExample from '../jsonld-example';
import Info from '../info';

export default class ApiRoutesFeed extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <Fragment>
        <p>
          The changes feed (<A>DataFeed</A>) allows API consumers to browse
          previous changes or be notified in real time when data are created,
          updated, or deleted.
        </p>

        <Info className={bem`@__info-panel`}>
          <header>Streaming changes with Server-Sent Events</header>

          <p>
            In addition to offering a normal request / response pattern, the
            feed can operate in <strong>continous mode</strong>. In continous
            mode, the connection to the feed stays open until explicitly closed.
            All changes are returned to the client as soon as possible after
            they occur.
          </p>

          <p>
            The continuous mode follows the W3C{' '}
            <a href="https://www.w3.org/TR/eventsource/">Server-Sent Events</a>{' '}
            specification (including support for the <code>Last-Event-ID</code>{' '}
            header).
          </p>
        </Info>

        <section id="get-feed" className={bem`@__sub-section`}>
          <h4 className={bem`@__default-ui-type--subhead-2`}>
            <code>GET /feed</code>
          </h4>

          <p>
            Get changes as a <A>DataFeed</A> containing <A>DataFeedItem</A>
          </p>

          <QueryStringParameters>
            <dt>
              <code>filter</code>
            </dt>
            <dd>
              Possible values are:
              <ul>
                <li>
                  <code>public</code> (default). Restrict the changes to the
                  subset of documents available publicly.
                </li>
                <li>
                  <code>user</code> Restrict the changes to the subset of
                  documents that the user has access to (requires
                  authentication).
                </li>
                <li>
                  <code>admin</code> Access to all changes (requires admin
                  access).
                </li>
              </ul>
            </dd>

            <dt>
              <code>scope</code>
            </dt>
            <dd>
              A <A>Graph</A>, <A>Periodical</A> or <A>Organization</A>{' '}
              <code>@id</code>
              (or JSON list thereof) further narrowing down the emitted changes.
            </dd>

            <dt>
              <code>outscope</code>
            </dt>
            <dd>
              A <code>@type</code> (or JSON list thereof) indicating which{' '}
              <code>@type</code> should escape the scoping specified with the{' '}
              <code>scope</code> parameter. When <code>scope</code> is used and
              changes event required for new Graph or Periodical creation it is
              recommended to list <A>CreatePeriodicalAction</A> and{' '}
              <A>CreateGraphAction</A> in the <code>outscope</code> query string
              parameter.
            </dd>

            <dt>
              <code>nodes</code>
            </dt>
            <dd>
              A boolean (defaulting to <code>true</code>) specifying if the{' '}
              <strong>nodes</strong> of a Graph should be ignored. When set to{' '}
              <code>false</code> no events are emitted when the nodes change and
              Graph (and snapshots of graph) are returned without their nodes
              (so withouth the <code>@graph</code> property).
            </dd>
            <dt>
              <code>descending</code>
            </dt>
            <dd>
              A boolean (defaulting to <code>false</code>) specifying to return
              the changes in sequential order.
            </dd>
            <dt>
              <code>limit</code>
            </dt>
            <dd>
              A number indicating the maximum number of changes to return
              (limited to 200 outside of the continuous mode, ignored in
              continuous mode).
            </dd>
            <dt>
              <code>accept</code>
            </dt>
            <dd>
              A convenience parameter to use instead of the{' '}
              <code>Accept: text/event-stream</code> HTTP header to specify that
              the feed should operate in <strong>continuous mode</strong> using
              an event stream. If specified, <code>accept</code> must take the
              URI encoded value of <code>text/event-stream</code>.
            </dd>
            <dt>
              <code>last-event-id</code>
            </dt>
            <dd>
              A convenience parameter to use instead of the{' '}
              <code>Last-Event-ID</code> HTTP header. When specified, the API
              will only return changes that occurred <em>after</em> the
              specified sequence identifier (<code>last-event-id</code>).
            </dd>
          </QueryStringParameters>
        </section>

        <JsonldExample
          root={false}
          data={{
            '@context': 'https://sci.pe',
            '@type': 'DataFeed',
            dataFeedElement: [
              {
                '@id': 'seq:3',
                '@type': 'DataFeedItem',
                dateCreated: '2016-10-07T21:57:43.766Z',
                item: {
                  '@id': 'action:actionId',
                  '@type': 'Action',
                  actionStatus: 'PotentialActionStatus'
                }
              }
            ]
          }}
        >
          Example of a <A>DataFeed</A>.
        </JsonldExample>

        <div className={bem`@__warning`}>
          <p>
            In continuous mode only <A>DataFeedItem</A> are emitted after a
            mapping to comply to the{' '}
            <a href="https://www.w3.org/TR/eventsource/">Server-Sent Events</a>{' '}
            specification:
          </p>

          <pre
            style={{ backgroundColor: '#333', color: '#909db5', fontSize: 12 }}
          >
            <code>
              {`id: seq:3
event: Action
data: {"@id":"action:actionId","@type":"Action","actionStatus":"PotentialActionStatus"}`}
            </code>
          </pre>

          <p>where:</p>

          <dl>
            <dt>
              <code>id</code>
            </dt>
            <dd>
              is the <code>@id</code> of the{' '}
              <a href="http://schema.org/DataFeedItem">
                <code>DataFeedItem</code>
              </a>
              . This is the value that can be specified in the{' '}
              <code>Last-Event-ID</code> HTTP header.
            </dd>
            <dt>
              <code>event</code>
            </dt>
            <dd>
              A string grouping{' '}
              <a href="http://schema.org/DataFeedItem">
                <code>DataFeedItem</code>
              </a>{' '}
              per categories. Possible values are:
              <ul>
                <li>
                  <code>UserProfile</code> (User profiles for persons)
                </li>
                <li>
                  <code>Graph</code> (Graph metadata and nodes)
                </li>
                <li>
                  <code>Periodical</code> (Periodicals)
                </li>
                <li>
                  <code>Action</code> (Actions)
                </li>
              </ul>
            </dd>
            <dt>
              <code>data</code>
            </dt>
            <dd>
              A JSON string representing the value of the{' '}
              <a href="http://schema.org/DataFeedItem">
                <code>DataFeedItem</code>
              </a>{' '}
              <a href="http://schema.org/item">
                <code>item</code>
              </a>
              .
            </dd>
          </dl>
        </div>
      </Fragment>
    );
  }
}
