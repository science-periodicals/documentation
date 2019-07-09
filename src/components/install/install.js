import React from 'react';
import { BemTags, TextLogo } from '@scipe/ui';
import PropTypes from 'prop-types';
import CodeExample from '../code-example';
import InstallPackageTable from './install-package-table';
import { Helmet } from 'react-helmet-async';

// TODO add text from https://www.qt.io/download

export default class Install extends React.Component {
  static propTypes = {
    $content: PropTypes.object,
    onUpdate: PropTypes.func.isRequired,
    snippets: PropTypes.object // NOTE all the code snippet are edited in ../../snippets
  };

  static defaultProps = {
    snippets: {}
  };

  constructor(props) {
    super(props);
    this.rootRef = React.createRef();
  }

  componentDidMount() {
    if (this.rootRef.current) {
      this.props.onUpdate(this.rootRef.current);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.rootRef.current && prevProps.$content !== this.props.$content) {
      this.props.onUpdate(this.rootRef.current);
    }
  }

  render() {
    const bem = new BemTags('@sa', '@documentation');
    const { snippets } = this.props;

    return (
      <article
        ref={this.rootRef}
        className={bem`install @__article @__default-sans-body-type`}
      >
        <Helmet>
          <title>Installation guide • sci.pe</title>
        </Helmet>
        <header className={bem`header @__header`}>
          <h1 className={bem`@__default-ui-type--display-1`}>
            Installing sci.pe
          </h1>

          <img src="/images/api-logo.png" alt="sci.pe api logo (hypercube)" />
        </header>

        <section id="overview" className={bem`@__section`}>
          <h2 className={bem`@__default-ui-type--headline`}>Overview</h2>

          <p>
            <TextLogo /> is made of a web application (including the{' '}
            <TextLogo /> API) and a set of workers handling any CPU intensive
            jobs (such as image, audio, video and document processing).
          </p>

          <p>
            <TextLogo /> source code is written in JavaScript and relies on{' '}
            <a href="https://www.npmjs.com/">npm</a> for dependency management.
          </p>

          <p className={bem`@__warning`}>
            <TextLogo /> server side code must be run with the latest LTS
            version of <a href="https://nodejs.org/">Node.js</a>
          </p>

          <p>
            To install <TextLogo />, the following packages are necessary:
          </p>

          <InstallPackageTable />

          <p>
            The web application is built through a series of{' '}
            <a href="https://expressjs.com/express">express</a> middlewares and
            a websocket server provided by{' '}
            <a href="https://socket.io/">socket.io</a>. The app server
            communicates with the workers through{' '}
            <a href="http://zeromq.org/">zeromq</a> sockets. This design allows
            to dynamically adapt the number of workers to ensure efficient
            processing of CPU intensive tasks and to broadcast in real time any
            progress event to the clients.
          </p>

          <p>
            Data are stored in 3 complemetary databases:{' '}
            <a href="http://couchdb.apache.org/">CouchDB</a>,{' '}
            <a href="https://redis.io/">Redis</a> and{' '}
            <a href="https://pouchdb.com/">PouchDB</a>.
          </p>

          <p>
            <TextLogo /> can be configured to store blobs in{' '}
            <a href="https://aws.amazon.com/s3/">S3</a> or the filesystem.
            Additional blob storage backend can added by contributing to the{' '}
            <a href="https://github.com/scienceai/blob-store">
              <code>@scipe/blob-store</code>
            </a>{' '}
            repository.
          </p>
        </section>

        <section id="install-couchdb" className={bem`@__section`}>
          <h2 className={bem`@__default-ui-type--headline`}>
            Setting up CouchDB
          </h2>

          <p>
            <TextLogo /> requires{' '}
            <a href="http://couchdb.apache.org/">CouchDB 2.x</a> with full text
            search enabled through{' '}
            <a href="https://github.com/cloudant-labs/clouseau">clouseau</a> and{' '}
            <a href="https://github.com/cloudant-labs/dreyfus">dreyfus</a>.
          </p>

          <p>
            Several companies offer cloud options and support CouchDB see for
            instance <a href="https://www.ibm.com/cloud/cloudant">Cloudant</a>{' '}
            or{' '}
            <a href="https://neighbourhood.ie/couchdb-support/">
              neighbourhoodie software
            </a>
            .
          </p>

          <p>
            <a href="https://www.ibm.com/cloud/cloudant">Cloudant</a> also
            provides a{' '}
            <a href="https://hub.docker.com/r/ibmcom/cloudant-developer/">
              docker image
            </a>{' '}
            that can be used for local development.
          </p>

          <ol>
            <li>
              <p>Create the databases:</p>
              <CodeExample
                language="bash"
                code={
                  'curl -XPUT ${COUCH_PROTOCOL:=http:}//${COUCH_ADMIN_USERNAME:=admin}:${COUCH_ADMIN_PASSWORD:=pass}@${COUCH_HOST:=127.0.0.1}:${COUCH_PORT:=5984}/${COUCH_AUTH_DB:=_users}'
                }
              />
              <CodeExample
                language="bash"
                code={
                  'curl -XPUT ${COUCH_PROTOCOL:=http:}//${COUCH_ADMIN_USERNAME:=admin}:${COUCH_ADMIN_PASSWORD:=pass}@${COUCH_HOST:=127.0.0.1}:${COUCH_PORT:=5984}/${DB_NAME:=scipe}'
                }
              />
            </li>
            <li>
              <p>Push the design documents:</p>
              <ol>
                <li>
                  <p>
                    Install the <code>couchapp</code> CLI
                  </p>
                  <CodeExample
                    language="bash"
                    code={'npm install -g couchapp'}
                  />
                </li>
                <li>
                  <p>
                    Clone the design document repositories (
                    <a href="https://github.com/scienceai/ddoc-auth">
                      scipe/ddoc-auth
                    </a>
                    , <a href="https://github.com/scienceai/ddoc">scipe/ddoc</a>
                    )
                  </p>
                  <CodeExample
                    language="bash"
                    code={
                      'git clone git@github.com:science-periodicals/ddoc-auth.git'
                    }
                  />
                  <CodeExample
                    language="bash"
                    code={
                      'git clone git@github.com:science-periodicals/ddoc.git'
                    }
                  />
                </li>
                <li>
                  <p>Push the design documents to CouchDB:</p>
                  <CodeExample
                    language="bash"
                    code={
                      '(cd ddoc-auth && couchapp push ddoc.js ${COUCH_PROTOCOL:=http:}//${COUCH_ADMIN_USERNAME:=admin}:${COUCH_ADMIN_PASSWORD:=pass}@${COUCH_HOST:=127.0.0.1}:${COUCH_PORT:=5984}/${DB_NAME:=scipe})'
                    }
                  />
                  <CodeExample
                    language="bash"
                    code={
                      '(cd ddoc && couchapp push ddoc.js ${COUCH_PROTOCOL:=http:}//${COUCH_ADMIN_USERNAME:=admin}:${COUCH_ADMIN_PASSWORD:=pass}@${COUCH_HOST:=127.0.0.1}:${COUCH_PORT:=5984}/${DB_NAME:=scipe})'
                    }
                  />
                </li>
              </ol>
            </li>

            <li>
              <p>Secure and seed the databases:</p>

              <ol>
                <li>
                  <p>
                    Install the{' '}
                    <a href="https://github.com/scienceai/librarian">
                      <code>librarian</code> CLI
                    </a>
                    :
                  </p>
                  <CodeExample
                    language="bash"
                    code={'npm install -g @scipe/librarian'}
                  />
                </li>
                <li>
                  <p>
                    run the <code>librarian secure</code> command being sure to
                    set the following environment variable so that they match
                    your CouchDB install:
                  </p>
                  <CodeExample
                    language="bash"
                    code={
                      'COUCH_PROTOCOL=${COUCH_PROTOCOL:=http:} COUCH_ADMIN_USERNAME=${COUCH_ADMIN_USERNAME:=admin} COUCH_ADMIN_PASSWORD=${COUCH_ADMIN_PASSWORD:=pass} COUCH_HOST=${COUCH_HOST:=127.0.0.1} COUCH_PORT=${COUCH_PORT:=5984} DB_NAME=${DB_NAME:=scipe} librarian secure'
                    }
                  />
                </li>
                <li>
                  <p>
                    run the <code>librarian seed</code> command being sure to
                    set the following environment varialbe so that they match
                    your CouchDB install:
                  </p>
                  <CodeExample
                    language="bash"
                    code={
                      'COUCH_PROTOCOL=${COUCH_PROTOCOL:=http:} COUCH_ADMIN_USERNAME=${COUCH_ADMIN_USERNAME:=admin} COUCH_ADMIN_PASSWORD=${COUCH_ADMIN_PASSWORD:=pass} COUCH_HOST=${COUCH_HOST:=127.0.0.1} COUCH_PORT=${COUCH_PORT:=5984} DB_NAME=${DB_NAME:=scipe} librarian seed'
                    }
                  />
                </li>
              </ol>
            </li>
          </ol>
        </section>

        <section id="install-redis" className={bem`@__section`}>
          <h2 className={bem`@__default-ui-type--headline`}>
            Setting up Redis
          </h2>

          <p>
            <TextLogo /> requires <a href="https://redis.io/">Redis 4.x</a>.
          </p>

          <p>
            Several companies offer cloud options and support for Redis. See for
            instance{' '}
            <a href="https://www.ibm.com/cloud/compose/redis">
              Compose for Redis
            </a>{' '}
            or <a href="https://redislabs.com/">redislabs</a>.
          </p>

          <p>
            Dockers images for Redis are available in the{' '}
            <a href="https://store.docker.com/images/redis">docker store</a>.
          </p>

          <p>Seed redis:</p>

          <ol>
            <li>
              <p>
                Install the{' '}
                <a href="https://github.com/scienceai/ontologist">
                  <code>ontologist</code> CLI
                </a>
                :
              </p>

              <CodeExample
                language="bash"
                code={'npm install -g @scipe/ontologist'}
              />
            </li>
            <li>
              <p>
                Run the <code>ontologist seed</code> command being sure to set
                the following environment varialbe so that they match your Redis
                install:
              </p>

              <CodeExample
                language="bash"
                code={
                  'REDIS_HOST=${REDIS_HOST:=127.0.0.1} REDIS_PORT=${REDIS_PORT:=6379} REDIS_PASSWORD=${REDIS_PASSWORD:=pass} ontologist seed'
                }
              />
            </li>
          </ol>
        </section>

        <section id="install-app" className={bem`@__section`}>
          <h2 className={bem`@__default-ui-type--headline`}>
            Setting up the app
          </h2>

          <section
            id="install-app-dependencies"
            className={bem`@__sub-section`}
          >
            <h3 className={bem`@__default-ui-type--subhead-1`}>
              Installing the dependencies
            </h3>

            <CodeExample
              language="shell"
              code={
                'npm install @scipe/resources @scipe/librarian @scipe/documentation @scipe/api @scipe/app-suite @scipe/create-error @scipe/bunyan-express-logger'
              }
            />
          </section>

          <section id="install-app-config" className={bem`@__sub-section`}>
            <h3 className={bem`@__default-ui-type--subhead-1`}>
              Creating a config file
            </h3>

            <CodeExample language="javascript" code={snippets.config}>
              <code>config.js</code>
            </CodeExample>
          </section>

          <section
            id="install-app-request-listener"
            className={bem`@__sub-section`}
          >
            <h3 className={bem`@__default-ui-type--subhead-1`}>
              Creating the app (<code>requestListener</code>)
            </h3>

            <CodeExample language="javascript" code={snippets.app}>
              <code>app.js</code>
            </CodeExample>
          </section>

          <section id="install-app-servers" className={bem`@__sub-section`}>
            <h3 className={bem`@__default-ui-type--subhead-1`}>
              Creating a server
            </h3>

            <p className={bem`@__warning`}>
              An HTTPS server must be used in production applications
            </p>

            <CodeExample language="javascript" code={snippets['http-server']}>
              <code>http-server.js</code>
            </CodeExample>
          </section>

          <section id="install-app-start" className={bem`@__sub-section`}>
            <h3 className={bem`@__default-ui-type--subhead-1`}>
              Starting the server(s)
            </h3>

            <p>
              run <code>listen</code> on the created server(s).
            </p>

            <CodeExample
              language="javascript"
              code={snippets['server-example']}
            >
              Example of a script running the http server.
            </CodeExample>

            <p className={bem`@__warning`}>
              When an HTTPS server was created be sure to also start the
              accompanying HTTP server.
            </p>
          </section>
        </section>

        <section id="install-workers" className={bem`@__section`}>
          <h2 className={bem`@__default-ui-type--headline`}>
            Setting up the workers
          </h2>

          <section
            id="install-workers-dependencies"
            className={bem`@__sub-section`}
          >
            <h3 className={bem`@__default-ui-type--subhead-1`}>
              Installing the dependencies
            </h3>

            <CodeExample language="shell" code={'npm install @scipe/workers'} />

            <p className={bem`@__warning`}>
              Workers may rely on the availability of certain programs (such as{' '}
              <a href="http://www.graphicsmagick.org/">graphicsmagick</a> and{' '}
              <a href="https://ffmpeg.org/">ffmpeg</a>). Consult the workers
              repo{' '}
              <a href="https://github.com/scienceai/workers#installation">
                README
              </a>{' '}
              for specific information regarding each worker binary
              requirements.
            </p>
          </section>

          <section
            id="install-workers-coordination"
            className={bem`@__sub-section`}
          >
            <h3 className={bem`@__default-ui-type--subhead-1`}>
              Workers coordination (broker)
            </h3>

            <p>
              <TextLogo /> rely on a <a href="http://zeromq.org/">zeromq</a>{' '}
              broker to orchestrate the communication between the web
              application and the workers.
            </p>

            <p>
              The <code>Broker</code> is an EventEmitter and emmits{' '}
              <code>change</code> events that can be used to add or remove
              workers on demand (auto-scaling).
            </p>

            <CodeExample language="javascript" code={snippets['broker']}>
              <code>broker.js</code>
            </CodeExample>
          </section>

          <section
            id="install-workers-image-processing"
            className={bem`@__sub-section`}
          >
            <h3 className={bem`@__default-ui-type--subhead-1`}>
              Image processing
            </h3>

            <CodeExample language="javascript" code={snippets['image-worker']}>
              <code>image-worker.js</code>
            </CodeExample>
          </section>

          <section
            id="install-workers-audio-video-processing"
            className={bem`@__sub-section`}
          >
            <h3 className={bem`@__default-ui-type--subhead-1`}>
              Audio Video processing
            </h3>

            <CodeExample
              language="javascript"
              code={snippets['audio-video-worker']}
            >
              <code>audio-video-worker.js</code>
            </CodeExample>
          </section>

          <section
            id="install-workers-document-processing"
            className={bem`@__sub-section`}
          >
            <h3 className={bem`@__default-ui-type--subhead-1`}>
              Document processing
            </h3>

            <CodeExample
              language="javascript"
              code={snippets['document-worker']}
            >
              <code>document-worker.js</code>
            </CodeExample>
          </section>

          <section id="install-workers-run" className={bem`@__sub-section`}>
            <h3 className={bem`@__default-ui-type--subhead-1`}>
              Running the workers
            </h3>

            <p className={bem`@__warning`}>
              Each worker must be started in their own process (as workers will
              fork that process through their life cycle).
            </p>

            <CodeExample
              language="javascript"
              code={snippets['workers-example']}
            >
              Example of a script running the broker and all the workers each in
              their own process.
            </CodeExample>
          </section>
        </section>
      </article>
    );
  }
}
