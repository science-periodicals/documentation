import React, { Fragment } from 'react';
import { BemTags, TextLogo, SchemaLink as A } from '@scipe/ui';
import QueryStringParameters from './query-string-parameters';
import JsonldExample from '../jsonld-example';
import Info from '../info';

// TODO Offer and Issue routes

export default class ApiRoutesCrud extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <Fragment>
        <section id="get-user-username" className={bem`@__sub-section`}>
          <h4 className={bem`@__default-ui-type--subhead-2`}>
            <code>GET /user/:username</code>
          </h4>

          <p>
            Get a user profile (<A>Person</A>) by their <code>username</code>.
          </p>
        </section>

        <section
          id="get-organization-organization-id"
          className={bem`@__sub-section`}
        >
          <h4 className={bem`@__default-ui-type--subhead-2`}>
            <code>GET /organization/:organizationId</code>
          </h4>

          <p>
            Get an <A>Organization</A> by its <code>@id</code>.
          </p>
        </section>

        <section
          id="delete-organization-organization-id"
          className={bem`@__sub-section`}
        >
          <h4 className={bem`@__default-ui-type--subhead-2`}>
            <code>DELETE /organization/:organizationId</code>
          </h4>

          <p>
            Delete an <A>Organization</A> by its <code>@id</code>.
          </p>
        </section>

        <section id="get-service-service-id" className={bem`@__sub-section`}>
          <h4 className={bem`@__default-ui-type--subhead-2`}>
            <code>GET /service/:serviceId</code>
          </h4>

          <p>
            Get a <A>Service</A> by its <code>@id</code>.
          </p>
        </section>

        <section
          id="get-periodical-periodical-id"
          className={bem`@__sub-section`}
        >
          <h4 className={bem`@__default-ui-type--subhead-2`}>
            <code>GET /periodical/:periodicalId</code>
          </h4>

          <p>
            Get a journal (<A>Periodical</A>) by its <code>@id</code>.
          </p>
        </section>

        <section
          id="delete-periodical-periodical-id"
          className={bem`@__sub-section`}
        >
          <h4 className={bem`@__default-ui-type--subhead-2`}>
            <code>DELETE /periodical/:periodicalId</code>
          </h4>

          <p>
            Delete a journal (<A>Periodical</A>) by its <code>@id</code>.
          </p>
        </section>

        <section id="get-workflow-workflow-id" className={bem`@__sub-section`}>
          <h4 className={bem`@__default-ui-type--subhead-2`}>
            <code>GET /workflow/:workflowId</code>
          </h4>

          <p>
            Get a <A>WorkflowSpecification</A> by its <code>@id</code>.
          </p>
        </section>

        <section id="get-type-type-id" className={bem`@__sub-section`}>
          <h4 className={bem`@__default-ui-type--subhead-2`}>
            <code>GET /type/:typeId</code>
          </h4>

          <p>
            Get a <A>PublicationType</A> by its <code>@id</code>.
          </p>
        </section>

        <section id="get-graph-graph-id" className={bem`@__sub-section`}>
          <h4 className={bem`@__default-ui-type--subhead-2`}>
            <code>GET /graph/:graphId</code>
          </h4>

          <p>
            Get a graph (<A>Graph</A>) or a snapshot (version) of a graph by its{' '}
            <code>@id</code>.
          </p>

          <QueryStringParameters>
            <dt>
              <code>version</code>
            </dt>
            <dd>
              The <A>version</A> query string paramter can be used to specify a
              version of the <A>Graph</A>
            </dd>
            <dt>
              <code>frame</code>
            </dt>
            <dd>
              <p>
                A JSON-LD frame (<em>specified as a JSON string</em>) to be used
                to return a framed version of the document. As a shortcut,
                passing the value <code>?frame=true</code> has the same effect
                as the following frame:
              </p>

              <JsonldExample
                treeView={false}
                data={{
                  '@context': 'https://sci.pe',
                  '@id': 'scipe:mainEntityId',
                  '@embed': '@always'
                }}
              >
                Default frame used by <TextLogo /> when the <code>frame</code>{' '}
                query string parameter is set to <code>true</code>
              </JsonldExample>
            </dd>

            <dt>
              <code>nodes</code>
            </dt>
            <dd>
              A boolean (defaulting to <code>true</code>) specifying if the
              nodes of the <A>Graph</A> should be returned.
            </dd>

            <dt>
              <code>potentialActions</code>
            </dt>
            <dd>
              A boolean (defaulting to <code>false</code>) specifying if the
              potential actions associated with the <A>Graph</A> should be
              returned. For convenience, this parameter can also be set to{' '}
              <code>all</code>
              so that all the actions associated with the <A>Graph</A>{' '}
              <em>irrespective of the version</em> of the <A>Graph</A> are
              returned.
            </dd>
          </QueryStringParameters>
        </section>

        <section id="delete-graph-graphid" className={bem`@__sub-section`}>
          <h4 className={bem`@__default-ui-type--subhead-2`}>
            <code>DELETE /graph/:graphId</code>
          </h4>

          <p>
            Delete a <A>Graph</A> by its <code>@id</code>
          </p>
        </section>

        <section id="get-node-node-id" className={bem`@__sub-section`}>
          <h4 className={bem`@__default-ui-type--subhead-2`}>
            <code>GET /node/:nodeId</code>
          </h4>

          <p>
            Get a node of a <A>Graph</A> by its <code>@id</code>.
          </p>
        </section>

        <section id="get-action-actionid" className={bem`@__sub-section`}>
          <h4 className={bem`@__default-ui-type--subhead-2`}>
            <code>GET /action/:actionId</code>
          </h4>
          <p>
            Get an action by its <code>@id</code>
          </p>
        </section>

        <section id="delete-action-action-id" className={bem`@__sub-section`}>
          <h4 className={bem`@__default-ui-type--subhead-2`}>
            <code>DELETE /action/:actionId</code>
          </h4>

          <p>
            Delete an action bt its <code>@id</code>. This is limited to certain
            actions.
          </p>
        </section>

        <section id="post-action" className={bem`@__sub-section`}>
          <h4 className={bem`@__default-ui-type--subhead-2`}>
            <code>POST /action</code>
          </h4>
          <p>Create a new action.</p>
        </section>

        <section id="post-action-action-id" className={bem`@__sub-section`}>
          <h4 className={bem`@__default-ui-type--subhead-2`}>
            <code>POST /action/:actionId</code>
          </h4>
          <p>
            Update the action specified by its <code>@id</code>. Note that, in
            general, actions will have side effects.
          </p>
        </section>

        <section id="get-event-event-id" className={bem`@__sub-section`}>
          <h4 className={bem`@__default-ui-type--subhead-2`}>
            <code>GET /event/:eventId</code>
          </h4>

          <p>
            Get an <A>Event</A> by its <code>@id</code>.
          </p>
        </section>

        <section id="get-encoding-encoding-id" className={bem`@__sub-section`}>
          <h4 className={bem`@__default-ui-type--subhead-2`}>
            <code>GET /encoding/:encodingId</code>
          </h4>
          <p>
            Get the raw <em>content</em> of the encoding (<A>MediaObject</A> or
            subclass thereof) specified by its <code>@id</code> .
          </p>
        </section>

        <section id="post-encoding" className={bem`@__sub-section`}>
          <h4 className={bem`@__default-ui-type--subhead-2`}>
            <code>POST /encoding</code>
          </h4>

          <p>
            Store the raw <em>content</em> of an encoding (<A>MediaObject</A> or
            subclass thereof) and return an <A>UploadAction</A>.
          </p>

          <p>
            An encoding can be related to a <A>CreativeWork</A> (<A>Graph</A>,{' '}
            <A>Periodical</A>, <A>PublicationIssue</A> etc.), a <A>Person</A>,
            an <A>Organization</A> or a <A>Service</A> (referred to as the{' '}
            <em>context</em> of the upload).
          </p>

          <QueryStringParameters>
            <dt>
              <code>context</code>
            </dt>
            <dd>
              <p>
                an <code>@id</code> specifying the context of the upload (see
                above).
              </p>
              <p className={bem`@__warning`}>
                When the encoding is related to a live (unversionned){' '}
                <A>Graph</A> the context must be specified as the{' '}
                <code>@id</code> of the action granting upload access to the{' '}
                <A>Graph</A> (<A>CreateReleaseAction</A>,{' '}
                <A>TypesettingAction</A>, etc.).
              </p>
            </dd>

            <dt>version</dt>
            <dd>
              A version number to specify the <code>context</code> as a released{' '}
              <A>Graph</A>.
            </dd>

            <dt>resource</dt>
            <dd>
              Either:
              <ul>
                <li>
                  A{' '}
                  <code>
                    <a href="https://www.w3.org/TR/curie/">CURIE</a>
                  </code>{' '}
                  of an <em>existing</em> <A>CreativeWork</A>
                  (starting with the <code>node:</code> prefix) encoded by the
                  uploaded encoding, when <code>context</code> is a <A>Graph</A>
                </li>
                <li>
                  A{' '}
                  <code>
                    <a href="https://www.w3.org/TR/curie/">CURIE</a>
                  </code>{' '}
                  of an <em>existing</em> style (starting with the{' '}
                  <code>style:</code> prefix) or the <code>context</code>.
                </li>
                <li>
                  One of the <A>logo</A>, <A>image</A>,<A>audio</A> or{' '}
                  <A>video</A> property of the <code>context</code>.
                </li>
              </ul>
            </dd>
            <dt>
              <code>name</code>
            </dt>
            <dd>
              the <A>name</A> (typically file name) of the encoding.
            </dd>

            <dt>
              <code>update</code>
            </dt>
            <dd>
              A Boolean value used to control wether or not the result of some
              automatidc document processing associated with the upload (see{' '}
              <a href="#post-encoding-document-processing">below</a>) should be
              automatically applied to update the <code>context</code>.
            </dd>
          </QueryStringParameters>

          <Info id="post-encoding-document-processing">
            <header>Document processing</header>
            <p>
              <TextLogo /> takes care of automatically processing the uploaded
              files so that they are available in web-friendly formats.
            </p>

            <p>
              In particular any document processing action such as{' '}
              <A>DocumentProcessingAction</A>, <A>AudioVideoProcessingAction</A>
              , <A>ImageProcessingAction</A> started following an upload will be
              listed as <A>instrument</A> of the returned <A>UploadAction</A>.
            </p>

            <p>
              When document processing actions takes place as part of an upload
              a <code>202</code> HTTP status code is returned by the API and the{' '}
              <A>UploadAction</A> has its status set to{' '}
              <A>ActiveActionStatus</A> untill completion of the document
              processing action.
            </p>
          </Info>

          <JsonldExample
            data={{
              '@id': 'action:uploadActionId',
              '@type': 'UploadAction',
              agent: 'role:roleId',
              startTime: new Date().toISOString(),
              actionStatus: 'ActiveActionStatus',
              instrument: 'action:documentProcessingActionId',
              completeOn: 'OnWorkerEnd',
              requiresCompletionOf: 'action:documentProcessingActionId',
              result: {
                '@id': 'node:encodinId',
                '@type': 'DocumentObject',
                name: 'file.html',
                contentUrl: 'http://example.com/encoding',
                fileFormat: 'text/html',
                encodesCreativeWork: 'node:resourceId',
                potentialAction: 'action:documentProcessingActionId'
              }
            }}
          >
            Example of an <A>UploadAction</A> returned after a file upload. Note
            that the <A>UploadAction</A> will only be marked as completed when
            the associated document processing action (<A>instrument</A>) is
            completed (<A>completeOn</A> / <A>OnWorkerEnd</A> trigger)
          </JsonldExample>

          <p className={bem`@__warning`}>
            A document transformation action (<A>DocumentProcessingAction</A>,{' '}
            <A>AudioVideoProcessingAction</A>, <A>ImageProcessingAction</A>)
            result in an <A>UpdateAction</A>. That <A>UpdateAction</A> is not
            automatically applied unless the <code>udpate</code> query string
            parameter associated with the <code>POST /encoding</code> call was
            set to <code>true</code>.
          </p>
        </section>
      </Fragment>
    );
  }
}
