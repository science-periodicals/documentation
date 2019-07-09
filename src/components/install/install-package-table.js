import React from 'react';
import { BemTags, TextLogo } from '@scipe/ui';

export default class InstallPackageTable extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');
    return (
      <div className={bem`@__table`}>
        <table>
          <caption>
            Required <TextLogo /> NPM packages and link to their GitHub
            repositories
          </caption>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="https://github.com/scienceai/resources">
                  <code>@scipe/resources</code>
                </a>
              </td>
              <td>Static assets</td>
              <td>
                <a href="https://circleci.com/gh/scienceai/resources">
                  <img src="https://circleci.com/gh/scienceai/resources.svg?style=svg&circle-token=c6e5c79feb0aa075214a3ac13cc00f05ecc2cb23" />
                </a>
              </td>
            </tr>

            <tr>
              <td>
                <a href="https://github.com/scienceai/api">
                  <code>@scipe/api</code>
                </a>
              </td>
              <td>API</td>
              <td>
                <a href="https://circleci.com/gh/scienceai/api">
                  <img src="https://circleci.com/gh/scienceai/api.svg?style=svg&circle-token=12d0c25f67601a04fd146258968705bd1d4e743e" />
                </a>
              </td>
            </tr>

            <tr>
              <td>
                <a href="https://github.com/scienceai/workers">
                  <code>@scipe/workers</code>
                </a>
              </td>
              <td>Image, audio, video and document processing</td>
              <td>
                <a href="https://circleci.com/gh/scienceai/workers">
                  <img src="https://circleci.com/gh/scienceai/workers/tree/master.svg?style=svg&circle-token=3f7eb0abc5a7f40b57a53a44bf621346e99df2d5" />
                </a>
              </td>
            </tr>

            <tr>
              <td>
                <a href="https://github.com/scienceai/librarian">
                  <code>@scipe/librarian</code>
                </a>
              </td>
              <td>Data management</td>
              <td>
                <a href="https://circleci.com/gh/scienceai/librarian">
                  <img src="https://circleci.com/gh/scienceai/librarian.svg?style=svg&circle-token=4cd59101b8388382dc0de9bc5a2b569f448a9078" />
                </a>
              </td>
            </tr>

            <tr>
              <td>
                <a href="https://github.com/scienceai/ui">
                  <code>@scipe/ui</code>
                </a>
              </td>
              <td>Library of UI components</td>
              <td>
                <a href="https://circleci.com/gh/scienceai/ui">
                  <img src="https://circleci.com/gh/scienceai/ui.svg?style=svg&circle-token=028ef36f4ada136e660472aa9def20c1da667a46" />
                </a>
              </td>
            </tr>

            <tr>
              <td>
                <a href="https://github.com/scienceai/blob-store">
                  <code>@scipe/blob-store</code>
                </a>
              </td>
              <td>Blob store</td>
              <td>
                <a href="https://circleci.com/gh/scienceai/blob-store">
                  <img src="https://circleci.com/gh/scienceai/blob-store/tree/master.svg?style=svg&circle-token=1144cfe7f9fb45f7d2cc75905f6cd8f4c9360369" />
                </a>
              </td>
            </tr>

            <tr>
              <td>
                <a href="https://github.com/scienceai/feed">
                  <code>@scipe/feed</code>
                </a>
              </td>
              <td>
                <TextLogo /> changes feed listener
              </td>
              <td>
                <a href="https://circleci.com/gh/scienceai/feed">
                  <img src="https://circleci.com/gh/scienceai/feed.svg?style=svg&circle-token=4d32155a2d262cdbf698c9ef752fda33314afcf6" />
                </a>
              </td>
            </tr>

            <tr>
              <td>
                <a href="https://github.com/scienceai/ddoc">
                  <code>@scipe/ddoc</code>
                </a>
              </td>
              <td>
                CouchDB design document for the main <TextLogo /> database
              </td>
              <td>
                <a href="https://circleci.com/gh/scienceai/ddoc">
                  <img src="https://circleci.com/gh/scienceai/ddoc/tree/master.svg?style=svg&circle-token=3aafcf2229202e86a919ce3b7cf46a7fa39267c2" />
                </a>
              </td>
            </tr>

            <tr>
              <td>
                <a href="https://github.com/scienceai/ddoc-auth">
                  <code>@scipe/ddoc-auth</code>
                </a>
              </td>
              <td>CouchDB design document for the authentification database</td>
              <td>
                <a href="https://circleci.com/gh/scienceai/ddoc-auth">
                  <img src="https://circleci.com/gh/scienceai/ddoc-auth/tree/master.svg?style=svg&circle-token=6f33fbd9a823cfaa6378b1760476ac5f1637f12e" />
                </a>
              </td>
            </tr>

            <tr>
              <td>
                <a href="https://github.com/scienceai/ontologist">
                  <code>@scipe/ontologist</code>
                </a>
              </td>
              <td>Ontology service</td>
              <td>
                <a href="https://circleci.com/gh/scienceai/ontologist">
                  <img src="https://circleci.com/gh/scienceai/ontologist.svg?style=svg&circle-token=034b832caf7295c277dc4ff12f7527c61bd087b9" />
                </a>
              </td>
            </tr>

            <tr>
              <td>
                <a href="https://github.com/scienceai/app-suite">
                  <code>@scipe/app-suite</code>
                </a>
              </td>
              <td>App suite</td>
              <td>
                <a href="https://circleci.com/gh/scienceai/app-suite">
                  <img src="https://circleci.com/gh/scienceai/app-suite.svg?style=svg&circle-token=7fe7825f11ffb8b4084fb60b4269ffdb5bd23145" />
                </a>
              </td>
            </tr>

            <tr>
              <td>
                <a href="https://github.com/scienceai/create-error">
                  <code>@scipe/create-error</code>
                </a>
              </td>
              <td>Error creation</td>
              <td>
                <a href="https://circleci.com/gh/scienceai/create-error">
                  <img src="https://circleci.com/gh/scienceai/create-error.svg?style=svg&circle-token=9215b51dc17de650a6183a5bc3fe686b801f996c" />
                </a>
              </td>
            </tr>

            <tr>
              <td>
                <a href="https://github.com/scienceai/bunyan-express-logger">
                  <code>@scipe/bunyan-express-logger</code>
                </a>
              </td>
              <td>Structured server logs</td>
              <td>
                <a href="https://circleci.com/gh/scienceai/bunyan-express-logger">
                  <img src="https://circleci.com/gh/scienceai/bunyan-express-logger.svg?style=svg&circle-token=c3864866904fd887e2fe22dd7569bba013625d74" />
                </a>
              </td>
            </tr>

            <tr>
              <td>
                <a href="https://github.com/scienceai/documentation">
                  <code>@scipe/documentation</code>
                </a>
              </td>
              <td>
                <TextLogo /> documentation
              </td>
              <td>
                <a href="https://circleci.com/gh/scienceai/documentation">
                  <img src="https://circleci.com/gh/scienceai/documentation.svg?style=svg&circle-token=eb8e5a72184c2c951e1128b32df5d6455d8ae226" />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
