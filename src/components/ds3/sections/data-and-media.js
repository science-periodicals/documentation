import React from 'react';
import Schema from '../schema';
import Customize from '../../../hoc/customize';

class DataAndMedia extends React.Component {
  render() {
    return (
      <section id={DataAndMedia.ds3Id} className="style-guide__group">
        <h3>Data and Media</h3>
        <figure>
          <figcaption>
            <p>
              Insert links to data and media created as part of the work but
              hosted in local files or external registries or databases as
              specified in the following sections
            </p>
            <p>
              <a href="#ds3:CrossReferences">Cross-reference</a> the resources
              (dataset, video, audio, etc.) so that they are deeply linked with
              the main text.
            </p>
          </figcaption>
          <img
            src="/images/data-and-media-crossref.png"
            alt="crossreference resources so they are deeply linked"
          />
        </figure>
        <section id="data-media-references-to-local-files">
          <h4>Local files</h4>
          <p>
            Specify the local files (such as dataset, code, audio, video) that
            are relevant to the manuscript.
          </p>
          <ol className="style-guide__steps">
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <p>Create a hyperlink to the local file:</p>
                  <ol>
                    <li>
                      In the <span className="ms-label">Insert</span>
                      tab of the ribbon, click on{' '}
                      <span className="ms-button">Hyperlink</span>
                    </li>
                    <li>
                      In the new{' '}
                      <span className="ms-label">Insert Hyperlink</span>{' '}
                      dialogue window, click on{' '}
                      <span className="ms-button">Select...</span> in the{' '}
                      <span className="ms-label">Web Page or File</span> tab.
                    </li>
                    <li>
                      Choose the desired file and click on{' '}
                      <span className="ms-button">OK</span>
                    </li>
                  </ol>
                  <p>A path to the file is inserted in the document.</p>
                  <p className="warning">
                    Moving the file will break the link as the file is simply
                    linked to the document and not embedded in it. Links must be
                    regenerated (or edited) each time the file path changes.
                  </p>
                </figcaption>
                <img
                  src="/images/data-and-media-1.png"
                  alt="add URL of local files and hyperlink"
                />
              </figure>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <p>
                    Add a caption to the file URL to describe the file content
                    and provide metadata about the resource.
                  </p>
                  <ol>
                    <li>Select the file URL.</li>
                    <li>
                      <p>
                        Create the caption (in the{' '}
                        <span className="ms-label">References</span> tab of the
                        ribbon, click on{' '}
                        <span className="ms-button">Insert Caption</span>). When
                        possible use a custom label (click on{' '}
                        <span className="ms-button">New Label...</span> in the{' '}
                        <span className="ms-label">Caption</span> dialogue
                        window). In particular enforce the following{' '}
                        <span className="ms-feature">
                          custom captions labels
                        </span>{' '}
                        when possible;
                      </p>

                      <table>
                        <thead>
                          <tr>
                            <th>Resource type</th>
                            <th>Label</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Figure file</td>
                            <td>Figure</td>
                          </tr>
                          <tr>
                            <td>Audio file</td>
                            <td>Audio</td>
                          </tr>
                          <tr>
                            <td>Video file</td>
                            <td>Video</td>
                          </tr>
                          <tr>
                            <td>Code file</td>
                            <td>Code</td>
                          </tr>
                          <tr>
                            <td>Data file</td>
                            <td>Dataset</td>
                          </tr>
                          <tr>
                            <td>Other media file</td>
                            <td>Media</td>
                          </tr>
                        </tbody>
                      </table>
                    </li>
                    <li>
                      Add metadata (
                      <a href="#resource-authors-and-contributors">
                        authors and contributors
                      </a>
                      ,{' '}
                      <a href="#resource-sources-and-permissions">
                        sources and permissions
                      </a>
                      , <a href="#resource-license">license</a>) at the end of
                      the caption, following the instructions of the{' '}
                      <a href="#ds3:ResourceMetadata">
                        resource metadata section
                      </a>
                      .
                    </li>
                  </ol>
                  <p className="example">
                    <span className="caption-label">Video 1</span>. Computer
                    Demonstration. Authors<code className="token">:</code>{' '}
                    <span className="cross-reference person">
                      Douglas Carl Engelbart
                    </span>
                    <code className="token">.</code> License
                    <code className="token">:</code>{' '}
                    <a href="https://creativecommons.org/licenses/by/4.0/legalcode">
                      CC0-BY-4.0
                    </a>
                    <code className="token">.</code>
                  </p>
                </figcaption>
                <img
                  src="/images/data-and-media-2.png"
                  alt="add caption to local files"
                />
              </figure>
            </li>
          </ol>

          <Schema
            id="data-media-local-files"
            data={{
              '@context': 'https://sci.pe',
              '@id': 'http://example.com/article',
              '@type': 'ScholarlyArticle',
              hasPart: [
                {
                  '@id': 'http://example.com/video',
                  '@type': 'Video',
                  license: {
                    '@id':
                      'https://creativecommons.org/publicdomain/zero/1.0/legalcode',
                    name: 'CC0-1.0'
                  },
                  alternateName: 'Video 1',
                  caption: 'Computer Demonstration',
                  author: {
                    '@type': 'ContributorRole',
                    author: {
                      '@id': 'http://example.com/engelbart',
                      '@type': 'Person',
                      name: 'Douglas Carl Engelbart',
                      givenName: 'Douglas',
                      familyName: 'Engelbart',
                      additionalName: 'Carl'
                    },
                    roleContactPoint: {
                      '@type': 'ContactPoint',
                      email: 'contact@example.com'
                    },
                    roleAction: {
                      '@type': 'CreateAction',
                      actionStatus: 'CompletedActionStatus',
                      description: 'Created the video',
                      result: {
                        '@id': 'http://example.com/video'
                      }
                    }
                  },
                  encoding: [
                    {
                      '@id': 'http://example.com/encoding-video-mov',
                      '@type': 'VideoObject',
                      name: 'video.mov',
                      contentUrl: 'http://example.com/video1.mov',
                      fileFormat: 'video/quicktime'
                    },
                    {
                      '@id': 'http://example.com/encoding-video-mpeg',
                      '@type': 'VideoObject',
                      name: 'video.mpeg',
                      contentUrl: 'http://example.com/video1.mpeg',
                      fileFormat: 'video/mpeg',
                      isBasedOn: 'http://example.com/encoding-video-mov',
                      thumbnail: {
                        '@id': 'http://example.com/video-small-thumbnail',
                        '@type': 'ImageObject',
                        contentUrl: 'http://example.com/image-400x400.png',
                        fileFormat: 'image/png',
                        width: '400px',
                        height: '400px',
                        isBasedOn: 'http://example.com/encoding-video-mpeg'
                      }
                    }
                  ]
                }
              ]
            }}
          />
        </section>
        <section id="data-media-external-resources">
          <h4>External resources</h4>
          <p>
            Provide URLs for any resources created as part of this work and
            hosted in external registries or databases (e.g.,{' '}
            <a href="https://github.com">Github</a>,{' '}
            <a href="http://datadryad.org/">Dryad</a>,{' '}
            <a href="http://www.ncbi.nlm.nih.gov/genbank/">GenBank</a>).
          </p>
          <ol className="style-guide__steps">
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <p>
                    Create a hyperlink to the URL of the external resources:
                  </p>
                  <ol>
                    <li>
                      In the <span className="ms-label">Insert</span> tab of the
                      ribbon, click on{' '}
                      <span className="ms-button">Hyperlink</span>
                    </li>
                    <li>
                      In the new{' '}
                      <span className="ms-label">Insert Hyperlink</span>{' '}
                      dialogue window, specify the URL in the{' '}
                      <span className="ms-label">Address</span>
                      field.
                    </li>
                    <li>
                      Click on <span className="ms-button">OK</span>.
                    </li>
                  </ol>
                </figcaption>
                <img
                  src="/images/data-and-media-3.png"
                  alt="Add URL (hyperlinked)"
                />
              </figure>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <p>
                    Add a caption to the URL to describe the URL content and
                    provide metadata about the resource.
                  </p>
                  <ol>
                    <li>Select the URL.</li>
                    <li>
                      <p>
                        Create the caption (in the{' '}
                        <span className="ms-label">References</span> tab of the
                        ribbon, click on{' '}
                        <span className="ms-button">Insert Caption</span>). When
                        possible use a custom label (click on{' '}
                        <span className="ms-button">New Label...</span> in the{' '}
                        <span className="ms-label">Caption</span> dialogue
                        window). In particular enforce the following{' '}
                        <span className="ms-feature">
                          custom captions labels
                        </span>{' '}
                        when possible;
                      </p>

                      <table>
                        <thead>
                          <tr>
                            <th>Resource type</th>
                            <th>Label</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Figure file</td>
                            <td>Figure</td>
                          </tr>
                          <tr>
                            <td>Audio file</td>
                            <td>Audio</td>
                          </tr>
                          <tr>
                            <td>Video file</td>
                            <td>Video</td>
                          </tr>
                          <tr>
                            <td>Code file</td>
                            <td>Code</td>
                          </tr>
                          <tr>
                            <td>Data file</td>
                            <td>Dataset</td>
                          </tr>
                          <tr>
                            <td>Other media file</td>
                            <td>Media</td>
                          </tr>
                        </tbody>
                      </table>
                    </li>
                    <li>
                      Add metadata (
                      <a href="#resource-authors-and-contributors">
                        authors and contributors
                      </a>
                      ,{' '}
                      <a href="#resource-sources-and-permissions">
                        sources and permissions
                      </a>
                      , <a href="#resource-license">license</a>) at the end of
                      the caption, following the instructions of the{' '}
                      <a href="#ds3:ResourceMetadata">
                        resource metadata section
                      </a>
                      .
                    </li>
                  </ol>
                  <p className="example">
                    <span className="caption-label">Dataset 1</span>.
                    Saccharomyces cerevisiae TCP1-beta gene. Author
                    <code className="token">:</code>{' '}
                    <span className="cross-reference person">
                      Prof. James Sullivan, MD
                    </span>
                    <code className="token">.</code> Contributor
                    <code className="token">:</code>{' '}
                    <span className="cross-reference person">
                      Douglas Carl Engelbart
                    </span>
                    <code className="token">.</code> License
                    <code className="token">:</code>{' '}
                    <a href="https://creativecommons.org/publicdomain/zero/1.0/legalcode">
                      CC0-1.0
                    </a>
                    <code className="token">.</code>
                  </p>
                </figcaption>
                <img
                  src="/images/data-and-media-4.png"
                  alt="Add caption to the URL"
                />
              </figure>
            </li>
          </ol>

          <Schema
            id="data-media-external-resources"
            data={{
              '@context': 'https://sci.pe',
              '@id': 'http://example.com/article',
              '@type': 'ScholarlyArticle',
              hasPart: [
                {
                  '@id': 'http://www.ncbi.nlm.nih.gov/nucleotide/U49845',
                  '@type': 'Dataset',
                  license: {
                    '@id':
                      'https://creativecommons.org/publicdomain/zero/1.0/legalcode',
                    name: 'CC0-1.0'
                  },
                  distribution: {
                    '@id': 'http://example.com/encoding-dataset-fasta',
                    '@type': 'DataDownload',
                    contentUrl:
                      'http://www.ncbi.nlm.nih.gov/nuccore/1293613?report=fasta'
                  },
                  isPartOf: {
                    '@id': 'http://www.ncbi.nlm.nih.gov/genbank',
                    name: 'GenBank',
                    '@type': 'DataCatalog'
                  },
                  alternateName: 'Dataset 1',
                  caption: 'Saccharomyces cerevisiae TCP1-beta gene',
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
                    },
                    roleAction: {
                      '@type': 'Action',
                      actionStatus: 'CompletedActionStatus',
                      description: 'Designed the experiment'
                    }
                  },
                  contributor: {
                    '@type': 'ContributorRole',
                    contributor: {
                      '@id': 'http://example.com/engelbart',
                      '@type': 'Person',
                      name: 'Douglas Carl Engelbart',
                      givenName: 'Douglas',
                      familyName: 'Engelbart',
                      additionalName: 'Carl'
                    },
                    roleAction: {
                      '@type': 'Action',
                      description: 'Deposited the data'
                    }
                  }
                }
              ]
            }}
          />
        </section>
      </section>
    );
  }
}

DataAndMedia.ds3Id = `ds3:${DataAndMedia.name}`;

export default Customize(DataAndMedia);
