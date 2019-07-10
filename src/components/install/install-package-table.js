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
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="https://github.com/science-periodicals/app-suite">
                  <code>@scipe/app-suite</code>
                </a>
              </td>
              <td>App suite</td>
            </tr>

            <tr>
              <td>
                <a href="https://github.com/science-periodicals/api">
                  <code>@scipe/api</code>
                </a>
              </td>
              <td>API</td>
            </tr>

            <tr>
              <td>
                <a href="https://github.com/science-periodicals/workers">
                  <code>@scipe/workers</code>
                </a>
              </td>
              <td>Image, audio, video and document processing</td>
            </tr>

            <tr>
              <td>
                <a href="https://github.com/science-periodicals/blob-store">
                  <code>@scipe/blob-store</code>
                </a>
              </td>
              <td>Blob store</td>
            </tr>

            <tr>
              <td>
                <a href="https://github.com/science-periodicals/ontologist">
                  <code>@scipe/ontologist</code>
                </a>
              </td>
              <td>Ontology service</td>
            </tr>

            <tr>
              <td>
                <a href="https://github.com/science-periodicals/resources">
                  <code>@scipe/resources</code>
                </a>
              </td>
              <td>Static assets</td>
            </tr>

            <tr>
              <td>
                <a href="https://github.com/science-periodicals/librarian">
                  <code>@scipe/librarian</code>
                </a>
              </td>
              <td>Data management</td>
            </tr>

            <tr>
              <td>
                <a href="https://github.com/science-periodicals/ui">
                  <code>@scipe/ui</code>
                </a>
              </td>
              <td>Library of UI components</td>
            </tr>

            <tr>
              <td>
                <a href="https://github.com/science-periodicals/feed">
                  <code>@scipe/feed</code>
                </a>
              </td>
              <td>
                <TextLogo /> changes feed listener
              </td>
            </tr>

            <tr>
              <td>
                <a href="https://github.com/science-periodicals/ddoc">
                  <code>@scipe/ddoc</code>
                </a>
              </td>
              <td>
                CouchDB design document for the main <TextLogo /> database
              </td>
            </tr>

            <tr>
              <td>
                <a href="https://github.com/science-periodicals/ddoc-auth">
                  <code>@scipe/ddoc-auth</code>
                </a>
              </td>
              <td>CouchDB design document for the authentification database</td>
            </tr>

            <tr>
              <td>
                <a href="https://github.com/science-periodicals/create-error">
                  <code>@scipe/create-error</code>
                </a>
              </td>
              <td>Error creation</td>
            </tr>

            <tr>
              <td>
                <a href="https://github.com/science-periodicals/express-logger">
                  <code>@scipe/express-logger</code>
                </a>
              </td>
              <td>Structured server logs</td>
            </tr>

            <tr>
              <td>
                <a href="https://github.com/science-periodicals/documentation">
                  <code>@scipe/documentation</code>
                </a>
              </td>
              <td>
                <TextLogo /> documentation
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
