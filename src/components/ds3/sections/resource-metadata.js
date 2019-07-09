import React from 'react';
import Schema from '../schema';
import FormatResourceSourcesAndPermissions from '../formats/format-resource-sources-and-permissions';
import Customize from '../../../hoc/customize';

class ResourceMetadata extends React.Component {
  render() {
    return (
      <section id={ResourceMetadata.ds3Id} className="style-guide__group">
        <h3>Resource Metadata</h3>
        <p>
          Add resource (figure, table, dataset, etc.) metadata (
          <strong>authors</strong>, <strong>contributors</strong>,{' '}
          <strong>license</strong>, <strong>copyright</strong>,{' '}
          <strong>sources</strong>,{' '}
          <strong>adaptation and reproduction permissions</strong>,{' '}
          <strong>programming language</strong>, and <strong>keywords</strong>)
          at the end of the resource captions.
        </p>
        <section id="resource-authors-and-contributors">
          <h4>Resource authors and contributors</h4>
          <p>
            Any manuscript authors and contributors can be added as authors and
            contributors of the resource
          </p>
          <ol className="style-guide__steps">
            <li
              className="style-guide__step"
              id="resource-authors-and-contributors-list-authors"
            >
              <figure>
                <figcaption>
                  <p>
                    Add the <strong>authors</strong> of the resource at the end
                    of the caption. Note, resource authors must be added as a{' '}
                    <a href="#cross-reference-authors-contributors-and-affiliations">
                      cross-reference
                    </a>{' '}
                    to an{' '}
                    <a href="#authors-contributors-list">
                      author or contributor of the manuscript
                    </a>
                    .{' '}
                  </p>
                  <ol>
                    <li>
                      Start the authors statement with “Authors
                      <code className="token">:</code>”
                    </li>
                    <li>
                      <p>Add each author (person or organization):</p>
                      <ul>
                        <li>
                          <p>
                            <span className="ms-feature">cross-reference</span>{' '}
                            the corresponding author display name (from the list
                            of manuscript authors and contributors):
                          </p>
                          <ol>
                            <li>
                              Go to the <span className="ms-label">Insert</span>{' '}
                              tab of the ribbon and click on{' '}
                              <span className="ms-button">Cross-reference</span>
                              .
                            </li>
                            <li>
                              Set{' '}
                              <span className="ms-label">Reference type</span>{' '}
                              to <span className="ms-value">Bookmark</span> and{' '}
                              <span className="ms-label">
                                Insert reference to
                              </span>{' '}
                              to <span className="ms-value">bookmark text</span>
                              . Make sure to leave the{' '}
                              <span className="ms-label">
                                Insert as hyperlink
                              </span>{' '}
                              option checked.
                            </li>
                            <li>
                              Under{' '}
                              <span className="ms-label">
                                For which bookmark
                              </span>
                              , select the name of the bookmark corresponding to
                              the author and click on{' '}
                              <span className="ms-button">Insert</span> to
                              insert it in the document.
                            </li>
                          </ol>
                        </li>
                      </ul>
                    </li>
                    <li>
                      Separate multiple authors with semicolons (
                      <code className="token">;</code>).
                    </li>
                  </ol>
                  <p className="example">
                    <code>Authors</code>
                    <code className="token">:</code>{' '}
                    <span className="person cross-reference">
                      Prof. James P Sullivan, MD
                    </span>
                    <code className="token">.</code>
                  </p>
                </figcaption>
                <img
                  src="/images/resource-auth-1.png"
                  alt="add 'Authors:' followed by cross-references to authors' display names to the figure citation"
                />
              </figure>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <p>
                    Specify the authors <strong>affiliations</strong> as
                    indicated by the{' '}
                    <a href="#ds3:FormatAffiliatedPerson">
                      affiliated person format
                    </a>
                    . Note, affiliations must be added as a{' '}
                    <a href="#cross-reference-authors-contributors-and-affiliations">
                      cross-reference
                    </a>{' '}
                    to an affiliation in the{' '}
                    <a href="#affiliation-list">affiliation list</a>.{' '}
                  </p>
                  <ol>
                    <li>
                      List affiliations in parentheses{' '}
                      <code className="token">()</code>
                      after the author information and use semicolons (
                      <code className="token">;</code>) to separate multiple
                      affiliations.
                    </li>
                    <li>
                      <ul>
                        <li>
                          <p>
                            <span className="ms-feature">cross-reference</span>{' '}
                            the affiliation (be sure to understand the{' '}
                            <a href="#semantic-affiliation-bookmark">
                              semantic of affiliation bookmarks
                            </a>
                            ):
                          </p>
                          <ol>
                            <li>
                              Go to the <span className="ms-label">Insert</span>{' '}
                              tab of the ribbon and click on{' '}
                              <span className="ms-button">Cross-reference</span>
                              .
                            </li>
                            <li>
                              Set{' '}
                              <span className="ms-label">Reference type</span>{' '}
                              to <span className="ms-value">Bookmark</span> and{' '}
                              <span className="ms-label">
                                Insert reference to
                              </span>{' '}
                              to <span className="ms-value">Bookmark text</span>
                              . Make sure to leave the{' '}
                              <span className="ms-label">
                                Insert as hyperlink
                              </span>{' '}
                              option checked.
                            </li>
                            <li>
                              Under{' '}
                              <span className="ms-label">
                                For which bookmark
                              </span>
                              , select the name of the bookmark corresponding to
                              the affiliation and click on{' '}
                              <span className="ms-button">Insert</span> to
                              insert it in the document.
                            </li>
                          </ol>
                        </li>
                      </ul>
                    </li>
                    <li>
                      Terminate the author statement with a dot (
                      <code className="token">.</code>).
                    </li>
                  </ol>
                  <p className="example">
                    <code>
                      Authors<span className="token">:</span>
                    </code>{' '}
                    <span className="cross-reference">
                      <span className="person">Prof. James P Sullivan, MD</span>
                    </span>
                    <code className="token">(</code>
                    <span className="cross-reference organization">NYU</span>
                    <code className="token">)</code>
                    <code className="token">.</code>
                  </p>
                </figcaption>
                <img
                  src="/images/resource-auth-2.png"
                  alt="add affiliations using cross-reference tool"
                />
              </figure>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <p>
                    Add <strong>contact information</strong> (email, social
                    media profile, telephone, fax, and address) in a{' '}
                    <span className="ms-feature">footnote</span>, following the{' '}
                    <a href="#ds3:FormatContact">contact format</a> (as detailed
                    in the{' '}
                    <a href="#contact-information">contact information</a>{' '}
                    section).
                  </p>
                  <p>
                    When possible, <a href="#ds3:Hyperlinks">hyperlink</a> the
                    contact information (email address, social media profiles,
                    etc.).
                  </p>
                  <p className="example">
                    <code>
                      <sup className="footnote">1</sup>
                    </code>{' '}
                    <span>
                      Email<code className="token">:</code>
                      <a href="mailto:team@standardanalytics.io">
                        james@nyu.edu
                      </a>
                      <code className="token">.</code> GitHub
                      <code className="token">:</code>{' '}
                      <a href="https://github.com/scienceai">jsullivan</a>
                      <code className="token">.</code>
                    </span>
                  </p>
                </figcaption>
                <img
                  src="/images/resource-auth-7.png"
                  alt="add footnote with corresponding contact information"
                />
              </figure>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <p>
                    Specify <strong>author contributions</strong> in{' '}
                    <span className="ms-feature">footnotes</span> (as detailed
                    in the{' '}
                    <a href="#author-contributions">
                      author contributions section
                    </a>
                    ).
                  </p>
                  <ul className="example">
                    <li>
                      <code>
                        <sup className="footnote">2</sup>
                      </code>{' '}
                      Collected the data
                    </li>
                    <li>
                      <code>
                        <sup className="footnote">3</sup>
                      </code>{' '}
                      Prepared the figure
                    </li>
                    <li>
                      <code>
                        <sup className="footnote">4</sup>
                      </code>{' '}
                      Digitalized the dataset
                    </li>
                    <li>
                      <code>
                        <sup className="footnote">5</sup>
                      </code>{' '}
                      Designed the experiment
                    </li>
                    <li>
                      <code>
                        <sup className="footnote">6</sup>
                      </code>{' '}
                      Performed the experiment
                    </li>
                  </ul>
                </figcaption>
                <img
                  src="/images/resource-auth-8.png"
                  alt="add footnote with author contributions"
                />
              </figure>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <p>
                    List secondary contributors (if any) after the authors in
                    the same way as defined for{' '}
                    <a href="#resource-authors-and-contributors-list-authors">
                      authors
                    </a>
                    , but starting with ‘Contributors
                    <code className="token">:</code>’.
                  </p>
                  <p className="example">
                    <code>
                      Contributors<span className="token">:</span>
                    </code>{' '}
                    <span className="cross-reference">
                      <span className="person">Douglas Carl Engelbart</span>
                    </span>
                    <code className="token">.</code>
                  </p>
                </figcaption>
                <img
                  src="/images/resource-auth-9.png"
                  alt="add contributing author info"
                />
              </figure>
            </li>
          </ol>
        </section>

        <section id="resource-license">
          <h4>Resource license</h4>
          <figure>
            <figcaption>
              <ol>
                <li>
                  <p>
                    Start the resource license statement with “License
                    <code className="token">:</code>” followed by the license
                    name or identifier.
                  </p>
                  <p>
                    When possible pick the license identifier from the{' '}
                    <a href="https://spdx.org/licenses">
                      SPDX list of license IDs
                    </a>
                    . If no valid identifier can be found, use the license name.
                  </p>
                  <p>
                    In case of multiple licenses, separate them with semicolons
                    (<code className="token">;</code>).
                  </p>
                </li>
                <li>Hyperlink the license identifier (or name).</li>
                <li>
                  Terminate the license statement with a dot (
                  <code className="token">.</code>).
                </li>
              </ol>
              <p className="example">
                <code>
                  License<span className="token">:</span>
                </code>{' '}
                <a href="https://creativecommons.org/publicdomain/zero/1.0">
                  CC0-BY-4.0
                </a>
                <code className="token">.</code>
              </p>
            </figcaption>
            <img
              src="/images/resource-license.png"
              alt="Add 'License:' followed by the resource license, 'CC0-BY-4.0' here and License: CC0-BY-4.0"
            />
          </figure>
        </section>
        <section id="resource-copyright">
          <h4>Resource copyright</h4>
          <figure>
            <figcaption>
              <ol>
                <li>
                  Add the resource copyright at the end of the caption starting
                  with “Copyright<code className="token">:</code>” followed by a
                  copyright notice formatted according to the the{' '}
                  <a href="#ds3:FormatCopyrightNotice">
                    copyright notice format
                  </a>{' '}
                  (the symbol &copy; followed by the copyright year, followed by
                  the copyright holder).
                </li>
                <li>
                  <ul>
                    <li>
                      <p>
                        If the copyright holder (person or organization) has
                        been bookmarked (see{' '}
                        <a href="#bookmark-author-display-name">
                          authors and contributor list
                        </a>{' '}
                        or <a href="#bookmark-affiliation">affiliation list </a>{' '}
                        sections),{' '}
                        <span className="ms-feature">cross-reference</span> it:
                      </p>
                      <ol>
                        <li>
                          Go to the <span className="ms-label">Insert</span> tab
                          of the ribbon and click on{' '}
                          <span className="ms-button">Cross-reference</span>.
                        </li>
                        <li>
                          Set <span className="ms-label">Reference type</span>{' '}
                          to <span className="ms-value">bookmark</span> and{' '}
                          <span className="ms-label">Insert reference to</span>{' '}
                          to <span className="ms-value">bookmark text</span>.
                          Make sure to leave the{' '}
                          <span className="ms-label">Insert as hyperlink</span>{' '}
                          option checked.
                        </li>
                        <li>
                          Under{' '}
                          <span className="ms-label">For which bookmark</span>,
                          select the name of the bookmark corresponding to the
                          copyright holder and click on{' '}
                          <span className="ms-button">Insert</span> to insert it
                          in the document.
                        </li>
                      </ol>
                    </li>
                    <li>
                      If no bookmarks are available, enter the copyright holder
                      information using the{' '}
                      <a href="#ds3:FormatPerson">person</a> or{' '}
                      <a href="#ds3:FormatOrganization">organization</a> format.
                      When possible, <a href="#ds3:Hyperlinks">hyperlink</a> the
                      copyright holder to a relevant URL (ORCID profile,
                      organization webpage, etc.).
                    </li>
                  </ul>
                </li>
                <li>
                  Terminate the resource copyright statement with a dot (
                  <code className="token">.</code>).
                </li>
              </ol>
              <p className="example">
                <code>
                  Copyright<span className="token">:</span>
                </code>{' '}
                &copy; 2015{' '}
                <span className="cross-reference">
                  <span className="organization">SRI</span>
                </span>
                .
              </p>
            </figcaption>
            <img src="/images/resource-lic-3.png" alt="Copyright 2015 SRI" />
          </figure>
        </section>
        <section id="resource-sources-and-permissions">
          <h4>Resource sources and permissions</h4>
          <figure>
            <figcaption>
              <p>
                List the <strong>sources</strong> (such as dataset, code) and{' '}
                <strong>permissions</strong> of the resource at the end of the
                caption following the{' '}
                <a href="#ds3:FormatResourceSourcesAndPermissions">
                  resource sources and permissions format
                </a>{' '}
                defined below.
              </p>
              <p className="example">
                Reproduced from<code className="token">:</code>{' '}
                <span className="citation">Regal (2010, figure 6)</span>{' '}
                <code className="token">&copy;</code>
                2010 <span className="organization">New York University</span>
                <code className="token">,</code> with permission
                <code className="token">.</code>
                Code from<code className="token">:</code>{' '}
                <span className="cross-reference">
                  <span className="resource">Supporting Code 1</span>
                </span>{' '}
                <code className="token">;</code>{' '}
                <span className="citation">Guerin and Lowe (2015)</span>
                <code className="token">.</code> Data from
                <code className="token">:</code>{' '}
                <span className="citation">Botta, Moat, and Preis (2015)</span>
                <code className="token">;</code>{' '}
                <span className="cross-reference resource">
                  Supporting Dataset 1
                </span>
                <code className="token">.</code> Figure courtesy of
                <code className="token">:</code>{' '}
                <span className="person">Regal, Brian “Dr. Brian Regal”</span>
                <code className="token">.</code>
              </p>
              <p>
                Insert citations according to the guidelines of the{' '}
                <a href="#ds3:Citations">citations section</a> being sure to
                include references to the relevant section, figure, equation,
                etc. in the citation (<em>pinpoint</em> citation).
              </p>
            </figcaption>
            <img
              src="/images/resource-credits.png"
              alt="add resource sources and credits"
            />
          </figure>
          <section id="format-resource-sources-and-permissions">
            <h5>Resource sources and permissions format</h5>
            <p>
              The format for resource sources and permissions is defined using
              the formatting specifications below.
            </p>
            <FormatResourceSourcesAndPermissions />
          </section>
        </section>

        <section id="resource-keywords">
          <h4>Resource keywords</h4>

          <figure>
            <figcaption>
              <ol>
                <li>
                  <p>
                    Start the statement with “Keywords
                    <code className="token">:</code>” followed by keywords
                  </p>
                  <p>
                    Separate multiple keywords with semicolons (
                    <code className="token">;</code>).
                  </p>
                  {/* TODO add widget for selecting keywords and copying a link to use for those keywords so we can easily identify them*/}
                  <p>
                    When possible, hyperlink keywords to a unique URL. Prefer a
                    URL from a term of a controlled ontology when available.
                  </p>
                </li>
                <li>
                  Terminate the keywords statement with a dot (
                  <code className="token">.</code>).
                </li>
              </ol>

              <p className="example">
                <code>
                  Keywords<span className="token">:</span>
                </code>{' '}
                <a href="http://dbpedia.org/resource/Category:Solar_cells">
                  Solar Cells
                </a>
                <code className="token">;</code>
                <a href="https://patents.google.com/patent/US3411952A/en">
                  Photovoltaic cell and solar cell panel
                </a>
                <code className="token">;</code>
                Renewable energy
                <code className="token">.</code>
              </p>
            </figcaption>
            <img
              src="/images/resource-keywords.png"
              alt="Add resource keyword metadata"
            />
          </figure>
        </section>

        <section id="programming-language">
          <h4>Resource programming language</h4>

          <figure>
            <figcaption>
              <ol>
                <li>
                  <p>
                    Start the statement with “Programming language
                    <code className="token">:</code>” followed by the
                    programming language name.
                  </p>
                  <p>
                    When possible pick the name from the{' '}
                    <a href="https://en.wikipedia.org/wiki/List_of_programming_languages">
                      Wikipedia list of programming languages
                    </a>{' '}
                    page.
                  </p>
                  <p>
                    In case of multiple languages, separate them with semicolons
                    (<code className="token">;</code>).
                  </p>
                </li>
                <li>
                  Terminate the statement with a dot (
                  <code className="token">.</code>).
                </li>
              </ol>

              <p className="example">
                <code>
                  Programming language<span className="token">:</span>
                </code>{' '}
                JavaScript
                <code className="token">.</code>
              </p>
            </figcaption>
            <img
              src="/images/programming-language.png"
              alt="Add programming language metadata"
            />
          </figure>
        </section>

        <Schema
          id="data-resource-metadata"
          data={{
            '@context': 'https://sci.pe',
            '@id': 'http://example.com/article',
            '@type': 'ScholarlyArticle',
            hasPart: [
              {
                '@id': 'http://example.com/figure',
                '@type': 'Image',
                alternateName: 'Figure 1',
                caption: 'Xanadu growth projection',
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
                    honorificSuffix: 'MD',
                    sameAs: 'https://github.com/jsullivan'
                  },
                  roleContactPoint: {
                    '@type': 'ContactPoint',
                    email: 'james@nyu.edu'
                  },
                  roleAction: {
                    '@type': 'Action',
                    actionStatus: 'CompletedActionStatus',
                    description: 'Collected the data'
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
                    actionStatus: 'CompletedActionStatus',
                    description: 'Prepared the figure'
                  }
                },
                provider: {
                  '@type': 'Person',
                  name: 'Brian Regal',
                  givenName: 'Brian',
                  familyName: 'Regal'
                },
                keywords: ['renewable energy'],
                about: [
                  {
                    '@id': 'subjects:solar-cells',
                    name: 'Solar cells'
                  },
                  {
                    url: 'https://patents.google.com/patent/US3411952A/en',
                    name: 'Photovoltaic cell and solar cell panel'
                  }
                ],
                isBasedOn: [
                  'http://example.com/supporting-code',
                  'http://www.ncbi.nlm.nih.gov/nucleotide/U49845',
                  {
                    '@id': 'http://dx.doi.org/10.5061/dryad.1rk60',
                    name:
                      'Datasets for Quantifying Crowd Size for Mobile Phone and Twitter Data',
                    author: [
                      {
                        '@type': 'Person',
                        name: 'Federico Botta',
                        familyName: 'Botta',
                        givenName: 'Federico'
                      },
                      {
                        '@type': 'Person',
                        name: 'Helen Susannah Moat',
                        familyName: 'Moat',
                        givenName: 'Helen',
                        additionalName: 'Susannah'
                      },
                      {
                        '@type': 'Person',
                        name: 'Tobias Preis',
                        familyName: 'Preis',
                        givenName: 'Tobias'
                      }
                    ],
                    datePublished: {
                      '@type': 'xsd:gYear',
                      '@value': 2015
                    }
                  },
                  {
                    '@id': 'http://dx.doi.org/10.1016/j.softx.2015.10.002',
                    name:
                      'Mapping phylogenetic endemism in R using georeferenced branch extents',
                    author: [
                      {
                        '@type': 'Person',
                        name: 'Greg R. Guerin',
                        familyName: 'Guerin',
                        givenName: 'Greg'
                      },
                      {
                        '@type': 'Person',
                        name: 'Andrew J. Lowe',
                        familyName: 'Lowe',
                        givenName: 'Andrew'
                      }
                    ],
                    datePublished: {
                      '@type': 'xsd:gYearMonth',
                      '@value': '2015-12'
                    }
                  }
                ],
                exampleOfWork: {
                  '@id': 'http://example.com/regal#figure6',
                  '@type': 'Image',
                  name: 'Xanadu growth',
                  alternateName: 'figure6',
                  author: {
                    '@type': 'Person',
                    name: 'Dr. Brian Regal',
                    givenName: 'Brian',
                    familyName: 'Regal'
                  },
                  datePublished: {
                    '@type': 'xsd:gYear',
                    '@value': 2010
                  },
                  copyrightYear: '2010',
                  copyrightHolder: {
                    '@id': 'http://www.nyu.edu/',
                    '@type': 'CollegeOrUniversity',
                    name: 'New York University',
                    alternateName: 'NYU'
                  },
                  potentialAction: {
                    '@type': 'AuthorizeAction',
                    actionStatus: 'CompletedActionStatus',
                    agent: {
                      '@id': 'http://www.nyu.edu/',
                      '@type': 'CollegeOrUniversity',
                      name: 'New York University',
                      alternateName: 'NYU'
                    },
                    result: {
                      '@type': 'MediaObject',
                      contentUrl: 'http://example.com/permission.pdf'
                    }
                  }
                },
                license: {
                  '@id':
                    'https://creativecommons.org/licenses/by/4.0/legalcode',
                  name: 'CC-BY-4.0'
                },
                copyrightYear: '2015',
                copyrightHolder: {
                  '@id': 'https://www.sri.com',
                  '@type': 'Corporation',
                  name: 'SRI International',
                  alternateName: 'SRI'
                },
                encoding: [
                  {
                    '@id': 'http://example.com/source-image',
                    '@type': 'ImageObject',
                    contentUrl: 'http://example.com/image.tiff',
                    fileFormat: 'image/tiff',
                    width: '1600px',
                    height: '1600px'
                  },
                  {
                    '@id': 'http://example.com/converted-image',
                    '@type': 'ImageObject',
                    contentUrl: 'http://example.com/image.png',
                    fileFormat: 'image/png',
                    width: '1600px',
                    height: '1600px',
                    isBasedOn: 'http://example.com/source-image',
                    thumbnail: {
                      '@id': 'http://example.com/small-thumbnail',
                      '@type': 'ImageObject',
                      contentUrl: 'http://example.com/image-400x400.png',
                      fileFormat: 'image/png',
                      width: '400px',
                      height: '400px',
                      isBasedOn: 'http://example.com/converted-image'
                    }
                  }
                ]
              },

              {
                '@id': 'http://example.com/supporting-code',
                '@type': 'SoftwareSourceCode',
                alternateName: 'Supporting Code 1',
                programmingLanguage: {
                  name: 'javascript'
                },
                codeRepository: 'http://example.com/code-repository'
              },

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
                    '@type': 'Comment',
                    description: 'Deposited the data'
                  }
                }
              }
            ]
          }}
        />
      </section>
    );
  }
}

ResourceMetadata.ds3Id = `ds3:${ResourceMetadata.name}`;

export default Customize(ResourceMetadata);
