import React from 'react';
import Schema from '../schema';
import Customize from '../../../hoc/customize';

class SupportingInformation extends React.Component {
  render() {
    return (
      <section id={SupportingInformation.ds3Id} className="style-guide__group">
        <h3>Supporting Information</h3>

        {/*
        <p className="warning">
          The supporting information section must only contain{' '}
          <a href="#additional-tables-figures-equations-text-boxes-and-code-blocks">
            resources (such as tables, figures, equations, text boxes, and code
            blocks)
          </a>, <a href="#si-references-to-local-files">links to local files</a>,
          or <a href="#external-resources">links to external resources</a>,{' '}
          <b>not text</b>. Add supporting text to a separate local file
          (formatted as <Link to="/get-started/pdf">PDF</Link>,{' '} <Link to="/get-started/ds3">DS3</Link> or{' '}
          <Link to="/get-started/ms3">MS3</Link>) and
          link it in the supporting information (see{' '}
          <a href="#si-references-to-local-files">links to local files</a>).
        </p>
        */}
        <ol className="style-guide__steps">
          <li className="style-guide__step">
            <figure>
              <figcaption>
                Create a new section (
                <span className="ms-style">Heading 2</span> style) named:
                ‘Supporting Information’ typically right above the
                ‘Bibliography’ (or ‘Works Cited’) section.
              </figcaption>
              <img
                src="/images/supporting-information-1.png"
                alt="Heading style 2 is applied to the Supporting Information section heading"
              />
            </figure>
          </li>
          <li className="style-guide__step">
            <figure>
              <figcaption>
                <ol>
                  <li>
                    <p>
                      The supporting information section is like any other
                      section of the document, except that any{' '}
                      <a href="#ds3:Tables">tables</a>,{' '}
                      <a href="#ds3:Figures">figures</a>,{' '}
                      <a href="#ds3:Code">short code snippets</a> or{' '}
                      <a href="#ds3:DataAndMedia">code files</a>,{' '}
                      <a href="#ds3:Equations">equations</a>,{' '}
                      <a href="#ds3:TextBoxes">text boxes</a>,{' '}
                      <a href="#ds3:DataAndMedia">audio, video, and datasets</a>{' '}
                      added must be labeled using the following{' '}
                      <span className="ms-feature">custom captions labels</span>
                      .
                    </p>
                    <table>
                      <thead>
                        <tr>
                          <th>Type</th>
                          <th>Label</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Table</td>
                          <td>Supporting Table</td>
                        </tr>
                        <tr>
                          <td>Figure</td>
                          <td>Supporting Figure</td>
                        </tr>
                        <tr>
                          <td>Code</td>
                          <td>Supporting Code</td>
                        </tr>
                        <tr>
                          <td>Equation</td>
                          <td>Supporting Equation</td>
                        </tr>
                        <tr>
                          <td>Text Box</td>
                          <td>Supporting Text Box</td>
                        </tr>
                        <tr>
                          <td>Audio</td>
                          <td>Supporting Audio</td>
                        </tr>
                        <tr>
                          <td>Video</td>
                          <td>Supporting Video</td>
                        </tr>
                        <tr>
                          <td>Dataset</td>
                          <td>Supporting Dataset</td>
                        </tr>
                      </tbody>
                    </table>
                  </li>
                </ol>
                <p className="example">
                  <span className="caption-label">Supporting Dataset 1</span>.
                  Saccharomyces cerevisiae TCP1-beta gene.
                </p>
              </figcaption>
              <img src="/images/si-external-2a.png" />
            </figure>
          </li>
          <li className="style-guide__step">
            <figure>
              <figcaption>
                <p>
                  Add metadata (
                  <a href="#resource-authors-and-contributors">
                    authors and contributors
                  </a>
                  ,{' '}
                  <a href="#resource-sources-and-permissions">
                    sources and permissions
                  </a>
                  , <a href="#resource-license">license</a>) at the end of the
                  caption, following the instructions of the{' '}
                  <a href="#ds3:ResourceMetadata">resource metadata section</a>.
                </p>
                <p className="example">
                  <span className="caption-label">Supporting Dataset 1</span>.
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
              <img src="/images/si-external-2b.png" />
            </figure>
          </li>
          <li className="style-guide__step">
            <figure>
              <figcaption>
                <p>
                  <a href="#ds3:CrossReferences">Cross-reference</a> or{' '}
                  <a href="#hyperlink-to-part-of-a-document">hyperlink</a> the
                  supporting information resources (figure, table, dataset,
                  etc.) or headings so that the supporting information is deeply
                  linked with the main text.
                </p>
              </figcaption>
              <img src="/images/sup-cross-ref.png" />
            </figure>
          </li>
        </ol>
        <Schema
          id="data-supporting-information-external-resources"
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
                alternateName: 'Supporting Dataset 1',
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
        {/*
          <li className="style-guide__step">
            <figure>
              <figcaption>
                <ol>
                  <li>
                    Insert supporting{' '}
                    <a href="#additional-tables-figures-equations-text-boxes-and-code-blocks">
                      tables, figures, equations, text boxes, code blocks
                    </a>,{' '}
                    <a href="#si-references-to-local-files">
                      links to local files
                    </a>,{' '}
                    <a href="#external-resources">
                      links to resources created as part of this work but hosted
                      in external registries or databases
                    </a>{' '}
                    as specified in the following sections.
                  </li>
                  <li>
                    <a href="#ds3:CrossReferences">Cross-reference</a> or{' '}
                    <a href="#hyperlink-to-part-of-a-document">hyperlink</a> the
                    supporting information resources (figure, table, dataset,
                    etc.) or headings so that the supporting information is
                    deeply linked with the main text.
                  </li>
                </ol>
              </figcaption>
              <img src="/images/sup-cross-ref.png" />
            </figure>
          </li>
        </ol>

        <section id="additional-tables-figures-equations-text-boxes-and-code-blocks">
          <h4>
            Additional tables, figures, equations, text boxes, and code blocks
          </h4>
          <figure>
            <figcaption>
              <p>
                Add supporting <strong>tables</strong>, <strong>figures</strong>,{' '}
                <strong>equations</strong>, <strong>text boxes</strong>, and{' '}
                <strong>code blocks</strong> directly to the 'Supporting
                Information' text or section, following the same instructions as
                for inserting <a href="#ds3:Figures">figures</a>,{' '}
                <a href="#ds3:Equations">equations</a>, <a href="#ds3:Tables">tables</a>{' '}
                or <a href="#ds3:Code">short code snippets</a>. When possible, use
                the following{' '}
                <span className="ms-feature">custom captions labels</span>:
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
                    <td>Table</td>
                    <td>Supporting Table</td>
                  </tr>
                  <tr>
                    <td>Figure</td>
                    <td>Supporting Figure</td>
                  </tr>
                  <tr>
                    <td>Code</td>
                    <td>Supporting Code</td>
                  </tr>
                  <tr>
                    <td>Equation</td>
                    <td>Supporting Equation</td>
                  </tr>
                  <tr>
                    <td>Text Box</td>
                    <td>Supporting Text Box</td>
                  </tr>
                </tbody>
              </table>
              <p>
                Add metadata for the resource (<a href="#resource-authors-and-contributors">
                  authors and contributors
                </a>,{' '}
                <a href="#resource-sources-and-permissions">
                  sources and permissions
                </a>, <a href="#resource-license">license</a>) at the end of the
                caption, following the instructions of the{' '}
                <a href="#ds3:ResourceMetadata">resource metadata section</a>.
              </p>
              <p className="example">
                <span className="caption-label">Supporting Table 1</span>.
                Analysis of social linking. Authors<code className="token">
                  :
                </code>{' '}
                <span className="cross-reference person">
                  Douglas Carl Engelbart
                </span>
                <code className="token">.</code> License<code className="token">
                  :
                </code>{' '}
                <a href="https://creativecommons.org/publicdomain/zero/1.0/legalcode">
                  CC0-1.0
                </a>
                <code className="token">.</code> Code from<code className="token">
                  :
                </code>{' '}
                <span className="cross-reference resource">
                  Supporting Code 1
                </span>
                <code className="token">.</code> Data from<code className="token">
                  :
                </code>{' '}
                <span className="cross-reference resource">
                  Supporting Dataset 1
                </span>
                <code className="token">.</code>
              </p>
            </figcaption>
            <img src="/images/si-additional.png" alt="A supporting table" />
          </figure>

          <Schema
            id="data-supporting-information-embedded"
            data={{
              '@context': 'https://sci.pe',
              '@id': 'http://example.com/article',
              '@type': 'ScholarlyArticle',
              hasPart: [
                {
                  '@id': 'http://example.com/supporting-table',
                  '@type': 'Table',
                  license: {
                    '@id':
                      'https://creativecommons.org/publicdomain/zero/1.0/legalcode',
                    name: 'CC0-1.0'
                  },
                  alternateName: 'Supporting Table 1',
                  caption: 'Analysis of social links',
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
                      description: 'Created the experiment'
                    }
                  },
                  encoding: {
                    '@type': 'TableObject',
                    contentUrl: 'http://example.com/supporting-table1',
                    fileFormat: 'text/html'
                  },
                  isBasedOn: 'http://example.com/supporting-code'
                },
                {
                  '@id': 'http://example.com/supporting-code',
                  '@type': 'SoftwareSourceCode',
                  alternateName: 'Supporting Code 1',
                  programmingLanguage: {
                    name: 'javascript'
                  },
                  codeRepository: 'http://example.com/code-repository'
                }
              ]
            }}
          />
        </section>

        <section id="si-references-to-local-files">
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
                  src="/images/si-local-files-1.png"
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
                        window) starting with the word 'Supporting' followed by
                        the type of the supporting information (e.g., Supporting
                        Dataset, Supporting Video, etc.). In particular enforce
                        the following{' '}
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
                            <td>Figure</td>
                            <td>Supporting Figure</td>
                          </tr>
                          <tr>
                            <td>Audio</td>
                            <td>Supporting Audio</td>
                          </tr>
                          <tr>
                            <td>Video</td>
                            <td>Supporting Video</td>
                          </tr>
                          <tr>
                            <td>Code</td>
                            <td>Supporting Code</td>
                          </tr>
                          <tr>
                            <td>Dataset</td>
                            <td>Supporting Dataset</td>
                          </tr>
                          <tr>
                            <td>Text</td>
                            <td>Supporting Text</td>
                          </tr>
                        </tbody>
                      </table>
                    </li>
                    <li>
                      Add metadata (<a href="#resource-authors-and-contributors">
                        authors and contributors
                      </a>,{' '}
                      <a href="#resource-sources-and-permissions">
                        sources and permissions
                      </a>, <a href="#resource-license">license</a>) at the end
                      of the caption, following the instructions of the{' '}
                      <a href="#ds3:ResourceMetadata">resource metadata section</a>.
                    </li>
                  </ol>
                  <p className="example">
                    <span className="caption-label">Supporting Video 1</span>.
                    Computer Demonstration. Authors<code className="token">
                      :
                    </code>{' '}
                    <span className="cross-reference person">
                      Douglas Carl Engelbart
                    </span>
                    <code className="token">.</code> License<code className="token">
                      :
                    </code>{' '}
                    <a href="https://creativecommons.org/licenses/by/4.0/legalcode">
                      CC0-BY-4.0
                    </a>
                    <code className="token">.</code>
                  </p>
                </figcaption>
                <img
                  src="/images/si-local-files-2.png"
                  alt="add caption to local files"
                />
              </figure>
            </li>
          </ol>

          <Schema
            id="data-supporting-information-local-files"
            data={{
              '@context': 'https://sci.pe',
              '@id': 'http://example.com/article',
              '@type': 'ScholarlyArticle',
              hasPart: [
                {
                  '@id': 'http://example.com/supporting-video',
                  '@type': 'Video',
                  license: {
                    '@id':
                      'https://creativecommons.org/publicdomain/zero/1.0/legalcode',
                    name: 'CC0-1.0'
                  },
                  alternateName: 'Supporting Video 1',
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
                        '@id': 'http://example.com/supporting-video'
                      }
                    }
                  },
                  encoding: [
                    {
                      '@id': 'http://example.com/encoding-video-mov',
                      '@type': 'VideoObject',
                      name: 'video.mov',
                      contentUrl: 'http://example.com/supporting-video1.mov',
                      fileFormat: 'video/quicktime'
                    },
                    {
                      '@id': 'http://example.com/encoding-video-mpeg',
                      '@type': 'VideoObject',
                      name: 'video.mpeg',
                      contentUrl: 'http://example.com/supporting-video1.mpeg',
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
        <section id="external-resources">
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
                  src="/images/si-external-1.png"
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
                        window) starting with the word 'Supporting' followed by
                        the type of the supporting information (e.g., Supporting
                        Dataset, Supporting Video, etc.). In particular enforce
                        the following{' '}
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
                            <td>Figure</td>
                            <td>Supporting Figure</td>
                          </tr>
                          <tr>
                            <td>Audio</td>
                            <td>Supporting Audio</td>
                          </tr>
                          <tr>
                            <td>Video</td>
                            <td>Supporting Video</td>
                          </tr>
                          <tr>
                            <td>Code</td>
                            <td>Supporting Code</td>
                          </tr>
                          <tr>
                            <td>Dataset</td>
                            <td>Supporting Dataset</td>
                          </tr>
                          <tr>
                            <td>Text</td>
                            <td>Supporting Text</td>
                          </tr>
                        </tbody>
                      </table>
                    </li>
                    <li>
                      Add metadata (<a href="#resource-authors-and-contributors">
                        authors and contributors
                      </a>,{' '}
                      <a href="#resource-sources-and-permissions">
                        sources and permissions
                      </a>, <a href="#resource-license">license</a>) at the end
                      of the caption, following the instructions of the{' '}
                      <a href="#ds3:ResourceMetadata">resource metadata section</a>.
                    </li>
                  </ol>
                  <p className="example">
                    <span className="caption-label">Supporting Dataset 1</span>.
                    Saccharomyces cerevisiae TCP1-beta gene. Author<code className="token">
                      :
                    </code>{' '}
                    <span className="cross-reference person">
                      Prof. James Sullivan, MD
                    </span>
                    <code className="token">.</code> Contributor<code className="token">
                      :
                    </code>{' '}
                    <span className="cross-reference person">
                      Douglas Carl Engelbart
                    </span>
                    <code className="token">.</code> License<code className="token">
                      :
                    </code>{' '}
                    <a href="https://creativecommons.org/publicdomain/zero/1.0/legalcode">
                      CC0-1.0
                    </a>
                    <code className="token">.</code>
                  </p>
                </figcaption>
                <img
                  src="/images/si-external-2.png"
                  alt="Add caption to the URL"
                />
              </figure>
            </li>
          </ol>

          <Schema
            id="data-supporting-information-external-resources"
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
                  alternateName: 'Supporting Dataset 1',
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
        */}
      </section>
    );
  }
}

SupportingInformation.ds3Id = `ds3:${SupportingInformation.name}`;

export default Customize(SupportingInformation);
