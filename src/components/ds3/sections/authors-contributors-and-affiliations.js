import React from 'react';
import Schema from '../schema';
import FormatPerson from '../formats/format-person';
import FormatOrganization from '../formats/format-organization';
import FormatAffiliatedPerson from '../formats/format-affiliated-person';
import FormatContact from '../formats/format-contact';
import Customize from '../../../hoc/customize';

class AuthorsContributorsAndAffiliations extends React.Component {
  render() {
    return (
      <section
        id={AuthorsContributorsAndAffiliations.ds3Id}
        className="style-guide__group"
      >
        <h3>Authors, contributors, and affiliations</h3>
        <p>
          Create structured lists of authors, contributors, and affiliations and{' '}
          <span className="ms-feature">bookmark</span> them so that{' '}
          <span className="ms-feature">cross-references</span> can be used to
          link authors and contributors to their affiliations and mention of
          authors, contributors and affiliations elsewhere in the manuscript
          (funding section, disclosure, etc.).
        </p>
        <section id="authors-contributors-list">
          <h4>Authors and contributors list</h4>
          <ol className="style-guide__steps">
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  Below the manuscript title, create a new section with a{' '}
                  <span className="ms-style">Heading 2</span> style named:
                  ‘Authors’.
                </figcaption>
                <img
                  src="/images/prov-auth-1.png"
                  alt="Heading style 2 is applied to the authors section heading"
                />
              </figure>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <p>
                    List the primary author(s) below the section heading using:
                  </p>
                  <ul>
                    <li>
                      A <span className="ms-feature">numbered list</span> if
                      authors must be listed by strict order of contribution
                      importance.
                    </li>
                    <li>
                      A <span className="ms-feature">bulleted list</span>{' '}
                      otherwise.
                    </li>
                  </ul>
                  <p>
                    Authors can be <strong>persons</strong> or{' '}
                    <strong>organizations</strong> and must be formatted
                    following the <a href="#ds3:FormatPerson">person format</a>{' '}
                    or the{' '}
                    <a href="#ds3:FormatOrganization">organization format</a>{' '}
                    defined below.
                  </p>
                  <p className="example">
                    <span className="person">
                      Sullivan<span className="token">,</span> James{' '}
                      <span className="token">(</span>Peter, Robert
                      <span className="token">)</span>{' '}
                      <span className="token">“</span>Prof. James P Sullivan, MD
                      <span className="token">“</span>
                    </span>
                  </p>
                  <p>
                    Additional information regarding author contributions can be
                    provided as author contribution footnotes (
                    <a href="#author-contributions">see section below</a>) or
                    with a specific section for secondary contributors (
                    <a href="#secondary-contributor">see step further down</a>).
                  </p>
                </figcaption>
                <img
                  src="/images/prov-auth-2.png"
                  alt="Add author information following the format guidelines"
                />
              </figure>
              <section id="person-and-organization-format">
                <h5>Person and Organization Formats</h5>
                <p>
                  {' '}
                  Person and organization formats are defined using the
                  formatting specifications below.
                </p>
                <FormatPerson />
                <FormatOrganization />
              </section>
            </li>
            <li className="style-guide__step" id="bookmark-author-display-name">
              <figure>
                <figcaption>
                  <p>
                    <span className="ms-feature">Bookmark</span> the ‘display
                    name’ of each person and the acronym (or name) of each
                    organization so that
                    <span className="ms-feature">cross-reference</span> to
                    persons and organizations can be made easily.
                  </p>
                  <ol>
                    <li>
                      Highlight the author ‘display name’ or the organization
                      name (or acronym).
                    </li>
                    <li>
                      Go to the <span className="ms-label">Insert</span> tab of
                      the ribbon and click on{' '}
                      <span className="ms-button">Bookmark</span>.
                    </li>
                    <li>
                      Fill in the{' '}
                      <span className="ms-label">bookmark Name</span> (prefer
                      short mnemonic name as the bookmark name will be used to
                      identify the bookmark when inserting a{' '}
                      <span className="ms-feature">cross-reference</span>).
                    </li>
                    <li>
                      Click on <span className="ms-button">Add</span>.
                    </li>
                  </ol>
                </figcaption>
                <img
                  src="/images/prov-auth-3.png"
                  alt="insert a bookmark on the display name of the first author"
                />
              </figure>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <p>
                    <span className="ms-feature">Hyperlink</span> authors,
                    contributors and organizations to unique URLs (see url
                    recommendations <a href="#urls">below</a>).
                  </p>
                  <p>
                    To hyperlink an author, contributor, or organization to a
                    URL:
                  </p>
                  <ul>
                    <li>Highlight the text to be linked.</li>
                    <li>
                      Go to <span className="ms-label">Insert</span> tab of the
                      ribbon and click on{' '}
                      <span className="ms-button">Hyperlink</span>.
                    </li>
                    <li>
                      In the <span className="ms-label">Web Page or File</span>{' '}
                      section of the dialogue window, type the URL in the{' '}
                      <span className="ms-label">Address</span> field.
                    </li>
                    <li>
                      Click on <span className="ms-button">OK</span>.
                    </li>
                  </ul>
                </figcaption>
                <img
                  src="/images/prov-auth-4.png"
                  alt="Use the built in insert hyperlink tool to link author name to a sci.pe user ID"
                />
              </figure>
              <p id="urls" className="warning">
                Author and contributor names must be linked to a sci.pe user id,
                following the format: ‘https://sci.pe/user/username’ (e.g.,{' '}
                <a href="https://sci.pe/user/tiffany">
                  https://sci.pe/user/tiffany
                </a>
                ). sci.pe ids can be obtained by registering with sci.pe.
                Additional unique URLs, such as an{' '}
                <a href="http://orcid.org">ORCID</a> can be linked as well
                (e.g., to the author or contributor display name).
              </p>
            </li>
            <li id="secondary-contributor" className="style-guide__step">
              <figure>
                <figcaption>
                  <p>
                    If <strong>secondary contributors</strong> need to be
                    distinguished:
                  </p>
                  <ol>
                    <li>
                      Below the ‘Author’ section, create a new section with a{' '}
                      <span className="ms-style">Heading 2</span> style named:
                      ‘Contributors’.
                    </li>
                    <li>
                      List the contributors(s) below the section heading using
                      either a bulleted or an ordered list depending if the
                      contributors are listed by strict order of contribution
                      importance. Format contributors using the{' '}
                      <a href="#ds3:FormatPerson">person format</a> defined
                      above for persons, and the{' '}
                      <a href="#ds3:FormatOrganization">organization format</a>{' '}
                      for organizations. Bookmark and hyperlink persons and
                      organization as indicated in the previous steps for
                      authors.
                    </li>
                  </ol>
                  <ul className="example">
                    <li>
                      <span className="person">
                        Engelbart<code className="token">,</code> Douglas{' '}
                        <code className="token">(</code>Carl
                        <code className="token">)</code>{' '}
                        <code className="token">“</code>Douglas Carl Engelbart
                        <code className="token">“</code>
                      </span>
                    </li>
                    <li>
                      <span className="organization">
                        Microscopy Facility{' '}
                        <span className="token"> &lt; </span>Department of
                        Anatomy and Neurology{' '}
                        <span className="token"> &lt; </span> School of Medicine{' '}
                        <span className="token"> &lt; </span> Virginia
                        Commonwealth University (VCU)
                        <code className="token"> - </code>Richmond
                        <code className="token">,</code> VA
                        <code className="token">,</code> USA{' '}
                      </span>
                    </li>
                  </ul>
                </figcaption>
                <img
                  src="/images/prov-cont-1.png"
                  alt="Add contributing author information following the format guidelines"
                />
              </figure>
            </li>
          </ol>

          <Schema
            id="data-author-list"
            data={{
              '@context': 'https://sci.pe',
              '@id': 'http://example.com/psullivan',
              author: {
                '@type': 'Person',
                name: 'Prof. James P Sullivan, MD',
                givenName: 'James',
                familyName: 'Sullivan',
                additionalName: ['Peter', 'Robert'],
                honorificPrefix: 'Prof',
                honorificSuffix: 'MD'
              },
              contributor: {
                '@id': 'http://www.anatomy.vcu.edu/microscopy/',
                '@type': 'Organization',
                name: 'Microscopy Facility',
                parentOrganization: {
                  '@id': 'http://www.anatomy.vcu.edu',
                  '@type': 'Organization',
                  name: 'Department of Anatomy and Neurology',
                  parentOrganization: {
                    '@id': 'http://www.vcu.edu',
                    '@type': 'CollegeOrUniversity',
                    name: 'Virginia Commonwealth University',
                    alternateName: 'VCU',
                    location: {
                      '@type': 'Place',
                      address: {
                        '@type': 'PostalAddress',
                        addressLocality: 'Richmond',
                        addressRegion: 'VA',
                        addressCountry: 'USA'
                      }
                    }
                  }
                }
              }
            }}
          />
        </section>
        <section id="affiliation-list">
          <h4>Affiliation list</h4>
          <ol className="style-guide__steps">
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  Below the ‘Contributors’ section, create a new section with{' '}
                  <span className="ms-style">Heading 2</span> style named:
                  ‘Affiliations’.
                </figcaption>
                <img
                  src="/images/prov-affil-1.png"
                  alt="Heading style 2 is applied to the contributors section heading"
                />
              </figure>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <p>
                    List the affiliations associated with authors and
                    contributors under the new section with a{' '}
                    <span className="ms-feature">bulleted list</span>. Be sure
                    to only include each affiliation once in the list (e.g., if
                    two authors are at the same institution, only create one
                    entry for the institution under the ‘Affiliations’ list).
                  </p>
                  <p>
                    Format affiliations with the{' '}
                    <a href="#ds3:FormatOrganization">organization format</a>{' '}
                    described earlier.
                  </p>
                  <p className="example">
                    <span className="organization">
                      Department of Biology<code className="token"> &lt; </code>
                      New York University <code className="token">(</code>NYU
                      <code className="token">)</code>
                      <code className="token"> - </code>New York
                      <code className="token">,</code> NY
                      <code className="token">,</code> USA
                    </span>
                  </p>
                </figcaption>
                <img
                  src="/images/prov-affil-2.png"
                  alt="Add affiliation information following the format guidelines"
                />
              </figure>
            </li>
            <li className="style-guide__step" id="bookmark-affiliation">
              <figure>
                <figcaption>
                  <p>
                    Create a <span className="ms-feature">bookmark</span> for
                    each affiliation. These bookmarks will be needed to
                    associate authors with affiliations and to refer to the
                    organization elsewhere in the document (for instance in the
                    disclosure statements).
                  </p>
                  <ol>
                    <li>
                      Highlight the short name of the affiliation (or any part
                      of the organization trail).
                    </li>
                    <li>
                      Go to the <span className="ms-label">Insert</span> tab of
                      the ribbon and click on{' '}
                      <span className="ms-button">Bookmark</span>.
                    </li>
                    <li>
                      Fill in the{' '}
                      <span className="ms-label">Bookmark Name</span> (prefer
                      short mnemonic name as the bookmark name will be used to
                      identify the bookmark when inserting a{' '}
                      <span className="ms-feature">cross-reference</span>).
                    </li>
                    <li>
                      Click on <span className="ms-button">Add</span>.
                    </li>
                  </ol>
                </figcaption>
                <img
                  src="/images/prov-book.png"
                  alt="bookmark the superscripted number using the insert bookmark tool"
                />
              </figure>

              <aside className="format" id="semantic-affiliation-bookmark">
                <h5>Semantic of affiliation bookmarks</h5>
                <p>
                  In ‘DOCX Standard Scientific Style’ (
                  <abbr title="DOCX Standard Scientific Style">DS3</abbr>), when
                  a specific part of an organization trail is used as a
                  bookmark, it acts (semantically) as a reference to the whole
                  affiliation.
                </p>
                <p>
                  For instance, a reference to the{' '}
                  <span className="bookmark">NYU</span> bookmark in the
                  following organization trail:
                </p>
                <p>
                  <span className="organization">
                    Department of Biology<code className="token"> &lt; </code>
                    New York University <code className="token">(</code>
                    <span className="bookmark">NYU</span>
                    <code className="token">)</code>
                  </span>
                </p>
                <p>
                  acts as a reference to the Department of Biology of NYU (and
                  not as a reference to NYU as a whole).
                </p>
              </aside>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <p>Hyperlink affiliations to their URLs:</p>
                  <ol>
                    <li>
                      Highlight the organization unit name to be hyperlinked.
                    </li>
                    <li>
                      Go to the <span className="ms-label">Insert</span> tab of
                      the ribbon and click on{' '}
                      <span className="ms-button">Hyperlink</span>.
                    </li>
                    <li>
                      Type the URL in the{' '}
                      <span className="ms-label">Address</span> field.
                    </li>
                    <li>
                      Click on <span className="ms-button">OK</span>.
                    </li>
                  </ol>
                </figcaption>
                <img
                  src="/images/prov-link.png"
                  alt="Use the built in insert hyperlink tool to link organization URL"
                />
              </figure>
              <section id="format-affiliated-person">
                <h5>Affiliated person format</h5>
                <p>
                  The format for an affiliated person is defined using the
                  formatting specifications below.
                </p>
                <FormatAffiliatedPerson />
              </section>
            </li>
          </ol>

          <Schema
            id="data-affiliation-list"
            data={{
              '@context': 'https://sci.pe',
              '@id': 'http://www.biology.as.nyu.edu',
              '@type': 'CollegeOrUniversity',
              name: 'Department of Biology',
              parentOrganization: {
                '@id': 'http://www.nyu.edu',
                '@type': 'CollegeOrUniversity',
                name: 'New York University',
                alternateName: 'NYU',
                location: {
                  '@type': 'Place',
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'New York',
                    addressRegion: 'NY',
                    addressCountry: 'USA'
                  }
                }
              }
            }}
          />
        </section>
        <section id="cross-reference-authors-contributors-and-affiliations">
          <h4>Cross-reference authors, contributors, and affiliations</h4>
          <ol className="style-guide__steps">
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <p>
                    <span className="ms-feature">Cross-reference</span>{' '}
                    individual affiliations for each author (or contributor):
                  </p>
                  <ol>
                    <li>
                      Place the cursor at the end of the first author bullet
                      point.
                    </li>
                    <li>
                      Go to the <span className="ms-label">Insert</span> tab of
                      the ribbon and click on{' '}
                      <span className="ms-button">Cross-reference</span>.
                    </li>
                    <li>
                      <p>In the Cross-reference dialogue window:</p>
                      <ul>
                        <li>
                          Set the{' '}
                          <span className="ms-label">Reference type</span> to{' '}
                          <span className="ms-value">bookmark</span>.
                        </li>
                        <li>
                          Set{' '}
                          <span className="ms-label">Insert reference to</span>{' '}
                          to <span className="ms-value">Bookmark text</span>.
                        </li>
                        <li>
                          Under{' '}
                          <span className="ms-label">For which bookmark</span>,
                          select the bookmark to insert from the list of
                          bookmark names.
                        </li>
                        <li>
                          Make sure to leave the{' '}
                          <span className="ms-label">Insert as hyperlink</span>{' '}
                          option checked.
                        </li>
                        <li>
                          Click on <span className="ms-button">Insert</span>.
                        </li>
                      </ul>
                    </li>
                  </ol>
                </figcaption>
                <img
                  src="/images/prov-cr-1.png"
                  alt="use the built-in insert cross reference tool to insert the bookmark text associated with an affiliation after an author"
                />
              </figure>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  The bookmark text is now inserted in the author list, next to
                  the author linking the author to its affiliation.
                </figcaption>
                <img
                  src="/images/prov-cr-2.png"
                  alt="The superscripted number corresponding to an affiliation appears after the author's information"
                />
              </figure>
            </li>
          </ol>
          <Schema
            id="data-authors-affiliations"
            data={{
              '@context': 'https://sci.pe',
              '@id': 'http://example.com/article',
              '@type': 'ScholarlyArticle',
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
                roleAffiliation: {
                  '@id': 'http://www.biology.as.nyu.edu',
                  '@type': 'CollegeOrUniversity',
                  name: 'Department of Biology',
                  parentOrganization: {
                    '@id': 'http://www.nyu.edu',
                    '@type': 'CollegeOrUniversity',
                    name: 'New York University',
                    alternateName: 'NYU',
                    location: {
                      '@type': 'Place',
                      address: {
                        '@type': 'PostalAddress',
                        addressLocality: 'New York',
                        addressRegion: 'NY',
                        addressCountry: 'USA'
                      }
                    }
                  }
                }
              }
            }}
          />
        </section>

        <section id="contact-information">
          <h4>Contact information</h4>
          <p>
            Provide contact information (email, social media, telephone, fax,
            and address) for the <strong>corresponding author(s)</strong> in a{' '}
            <a className="ms-feature">footnote</a> following the{' '}
            <a href="#ds3:FormatContact">contact format</a> (defined at the end
            of the section).
          </p>
          <ol className="style-guide__steps">
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <p>Create the footnote:</p>
                  <ol>
                    <li>
                      Place the cursor after author and affiliation information
                      of the corresponding author
                    </li>
                    <li>
                      Go to the <span className="ms-label">Insert</span> tab of
                      the ribbon and click on{' '}
                      <span className="ms-button">Insert Footnote</span>.
                    </li>
                    <li>A footnote will appear at the bottom of the page.</li>
                  </ol>
                </figcaption>
                <img src="/images/prov-corr-2.png" alt="insert footnote" />
              </figure>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <p>
                    Add the corresponding author email address to the footnote:
                  </p>
                  <ol>
                    <li>
                      Start by writing Email<code className="token">:</code>
                    </li>
                    <li>
                      <p>
                        Insert the corresponding author email address with the
                        built-in <span className="ms-feature">Hyperlink</span>{' '}
                        feature of Microsoft Word:
                      </p>
                      <ol>
                        <li>
                          Go to the <span className="ms-label">Insert</span> tab
                          of the ribbon and click on{' '}
                          <span className="ms-button">Hyperlink</span>.
                        </li>
                        <li>
                          <p>
                            In the{' '}
                            <span className="ms-label">Insert Hyperlink</span>{' '}
                            dialogue window:
                          </p>
                          <ol>
                            <li>
                              Select the{' '}
                              <span className="ms-value">Email Address</span>{' '}
                              tab.
                            </li>
                            <li>
                              Type the email address in the{' '}
                              <span className="ms-label">Email Address</span>{' '}
                              field and edit the{' '}
                              <span className="ms-label">Text to Display</span>{' '}
                              field.
                            </li>
                            <li>
                              Click on <span className="ms-button">OK</span>.
                            </li>
                          </ol>
                        </li>
                      </ol>
                    </li>
                    <li>
                      Terminate the statement with a period (
                      <code className="token">.</code>).
                    </li>
                  </ol>
                  <p>
                    The hyperlinked email address is now inserted in the
                    document.
                  </p>
                  <p className="eg">
                    <a href="mailto:james@example.com">james@example.com</a>
                    <code className="token">.</code>
                  </p>
                </figcaption>
                <img
                  src="/images/prov-corr-4.png"
                  alt="add email address and hyperlink it for corresponding author"
                />
              </figure>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <p>
                    Add relevant social media profiles and online persona (e.g.,
                    Twitter, Facebook, GitHub, etc):
                  </p>
                  <ol>
                    <li>
                      Enter the name of the social media (e.g., ‘Twitter’)
                      followed by a colon (<code className="token">:</code>)
                      followed by the social media handle (
                      <span className="eg">
                        Twitter<code className="token">:</code>
                        @jsullivan
                      </span>
                      ).
                    </li>
                    <li>Highlight the text to be hyperlinked.</li>
                    <li>
                      Got to <span className="ms-label">Insert</span> tab of the
                      ribbon and click on
                      <span className="ms-button">Hyperlink</span>.
                    </li>
                    <li>
                      Enter the URL in the{' '}
                      <span className="ms-label">Address</span> field.
                    </li>
                    <li>
                      Click on <span className="ms-button">OK</span>.
                    </li>
                    <li>
                      Terminate the statement with a period (
                      <code className="token">.</code>).
                    </li>
                  </ol>
                  <p>The social media information are now complete.</p>
                  <p className="eg">
                    <span>
                      Twitter<code className="token">:</code>{' '}
                      <a href="#">@jsullivan</a>
                      <code className="token">.</code>
                    </span>
                  </p>
                </figcaption>
                <img src="/images/prov-corr-5.png" alt="add social media" />
              </figure>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <p>Add a telephone number (if any) and hyperlink it:</p>
                  <ol>
                    <li>
                      Start with Tel<code className="token">:</code>
                      followed by the telephone number (
                      <span className="eg">
                        Tel<code className="token">:</code> +1-212-998-8200
                      </span>
                      ).
                    </li>
                    <li>
                      <p>Hyperlink the telephone number:</p>
                      <ol>
                        <li>
                          Go to the <span className="ms-label">Insert</span> tab
                          of the ribbon and click on{' '}
                          <span className="ms-button">Hyperlink</span>.
                        </li>
                        <li>
                          In the <span className="ms-label">Address</span> box,
                          add the prefix ‘tel:’ followed by the phone number.
                        </li>
                        <li>
                          Click on <span className="ms-button">OK</span>.
                        </li>
                      </ol>
                    </li>
                    <li>
                      Terminate the statement with a period (
                      <code className="token">.</code>).
                    </li>
                  </ol>
                  <p>The phone number is now correctly inserted.</p>
                  <p className="eg">
                    <span>
                      Tel<code className="token">:</code>{' '}
                      <a href="tel:+1-212-998-8200">+1-212-998-8200</a>
                      <code className="token">.</code>
                    </span>
                  </p>
                </figcaption>
                <img src="/images/prov-corr-6.png" alt="add phone" />
              </figure>
              <p>
                Note: A fax number (if any) can be added in the same manner as a
                telephone.
                <span className="eg">
                  Fax<code className="token">:</code>{' '}
                  <a href="fax:+1-212-995-4015">+1-212-995-4015</a>
                  <code className="token">.</code>
                </span>
                Fax numbers can be hyperlinked by adding a ‘fax:’ prefix in the
                ‘Address’ box.
              </p>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <p>
                    Add a postal address (if relevant) starting with Address
                    <span className="token">:</span> followed by a postal
                    address and a period (<code className="token">.</code>).
                  </p>
                  <p className="eg">
                    <span>
                      Address<code className="token">:</code> Department of
                      Biology, New York University, 70 Washington Square South,
                      New York, NY 10012, USA<code className="token">.</code>
                    </span>
                  </p>
                </figcaption>
                <img src="/images/prov-corr-7.png" alt="add address" />
              </figure>
            </li>
          </ol>
          <section id="contact-format">
            <h5>Contact format</h5>
            <p>
              The format for contact information is defined using the formatting
              specifications below.
            </p>
            <FormatContact />
          </section>
          <Schema
            id="data-contact-information"
            data={{
              '@context': 'https://sci.pe',
              '@id': 'http://example.com/article',
              '@type': 'ScholarlyArticle',
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
                  sameAs: 'https://twitter.com/jsullivan'
                },
                roleContactPoint: {
                  '@type': 'ContactPoint',
                  email: 'james@example.com',
                  telephone: '+1-212-998-8200',
                  faxNumber: '+1-212-995-4015',
                  address:
                    'Department of Biology, New York University, 70 Washington Square South, New York, NY 10012, USA'
                }
              }
            }}
          />
        </section>

        <section id="author-contributions">
          <h4>Author contributions</h4>
          <p>
            Add information on the nature of author contributions (e.g.,
            “authors contributed equally”, “senior author”, “conceived and
            designed the experiments”, “wrote the{' '}
            <span className="cross-reference">Introduction</span>” etc.) in{' '}
            <span className="ms-feature">footnotes</span>, next to the relevant
            authors and contributors.
          </p>
          <ol className="style-guide__steps">
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  Place the cursor next to the author or contributor where the
                  contribution footnote should be inserted.
                </figcaption>
                <img
                  src="/images/prov-auth-footnotes-1.png"
                  alt="place cursor at the end of author's name information"
                />
              </figure>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  Go to the <span className="ms-label">Insert</span> tab of the
                  ribbon and click on{' '}
                  <span className="ms-button">Insert Footnote</span>.
                </figcaption>
                <img
                  src="/images/prov-auth-footnotes-2.png"
                  alt="insert footnote using built-in tool"
                />
              </figure>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <p>
                    Type the footnote text after the automatically inserted
                    footnote number (or symbol).
                  </p>
                  <p className="warning">
                    Do not type any body text below the footnote section.
                  </p>
                </figcaption>
                <img
                  src="/images/prov-auth-footnotes-3.png"
                  alt="Type the footnote text after the automatically inserted number"
                />
              </figure>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <p>
                    If author contributions are to specific parts of the
                    manuscript such as bookmarked text, captions, or section
                    headings, use the built-in{' '}
                    <span className="ms-feature">Cross-reference</span> feature
                    of Microsoft Word to reference the relevant document part.
                  </p>
                  <ol>
                    <li>
                      Go to the <span className="ms-label">Insert</span> tab of
                      the ribbon and click on{' '}
                      <span className="ms-button">Cross-reference</span>.
                    </li>
                    <li>
                      <p>
                        In the <span className="ms-label">Cross-reference</span>{' '}
                        dialogue window:
                      </p>
                      <ol>
                        <li>
                          Set <span className="ms-label">Reference type</span>{' '}
                          to <span className="ms-value">Heading</span>.
                        </li>
                        <li>
                          Under{' '}
                          <span className="ms-label">Insert reference to</span>,
                          select the text to be inserted .
                        </li>
                        <li>
                          Under{' '}
                          <span className="ms-label">For which heading</span>,
                          select the heading to insert from the list of heading
                          names.
                        </li>
                        <li>
                          Make sure to leave the{' '}
                          <span className="ms-label">Insert as hyperlink</span>{' '}
                          option checked.
                        </li>
                        <li>
                          Click on <span className="ms-button">Insert</span>.
                        </li>
                      </ol>
                    </li>
                  </ol>
                  <p>
                    The selected text will be automatically inserted in the
                    footnote text.
                  </p>
                  <p className="example">
                    <code>
                      <sup className="footnote">2</sup>
                    </code>{' '}
                    Wrote the{' '}
                    <span className="cross-reference">Introduction</span>.
                  </p>
                </figcaption>
                <img
                  src="/images/prov-auth-footnotes-4.png"
                  alt="insert cross reference to a section"
                />
              </figure>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <p>
                    To apply an existing footnote to more than one author, or
                    contributor,{' '}
                    <span className="ms-feature">cross-reference</span> the
                    existing footnote to the relevant authors or contributors:
                  </p>
                  <ol>
                    <li>
                      Place the cursor at the end of the author’s name and
                      affiliation information where the reference to an existing
                      footnote needs to be added (here Prof. James P Sullivan
                      will be marked as senior author [footnote number{' '}
                      <code>
                        <sup className="footnote">3</sup>
                      </code>
                      ] along with David Lloyd George [already marked as senior
                      author]).
                    </li>
                    <li>
                      Go to the <span className="ms-label">Insert</span> tab of
                      the ribbon and click on{' '}
                      <span className="ms-button">Cross-reference</span>.
                    </li>
                    <li>
                      <p>
                        In the <span className="ms-label">Cross-reference</span>{' '}
                        dialogue window:
                      </p>
                      <ol>
                        <li>
                          Set <span className="ms-label">Reference type</span>{' '}
                          to <span className="ms-value">Footnote</span>.
                        </li>
                        <li>
                          Under{' '}
                          <span className="ms-label">Insert reference to</span>,
                          select{' '}
                          <span className="ms-value">
                            Footnote number (formatted)
                          </span>
                          .
                        </li>
                        <li>
                          Under{' '}
                          <span className="ms-label">For which footnote</span>,
                          select the footnote to insert from the list of
                          existing footnotes.
                        </li>
                        <li>
                          Make sure to leave the{' '}
                          <span className="ms-label">Insert as hyperlink</span>{' '}
                          option checked.
                        </li>
                        <li>
                          Click on <span className="ms-button">Insert</span> (
                          the footnote number{' '}
                          <code>
                            <sup className="footnote">3</sup>
                          </code>{' '}
                          [‘Senior authors’] will now also be applied to Prof.
                          James P Sullivan).
                        </li>
                      </ol>
                    </li>
                  </ol>
                </figcaption>
                <img
                  src="/images/prov-auth-footnotes-7.png"
                  alt="insert footnote as cross-reference"
                />
              </figure>
            </li>
          </ol>
        </section>

        <Schema
          id="data-author-contributions"
          data={{
            '@context': 'https://sci.pe',
            '@id': 'http://example.com/article',
            '@type': 'ScholarlyArticle',
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
              roleAction: [
                {
                  '@type': 'WriteAction',
                  description: 'Wrote the introduction',
                  actionStatus: 'CompletedActionStatus',
                  result: {
                    '@id': 'http://example.com/article#Introduction',
                    '@type': 'Introduction'
                  }
                },
                {
                  '@type': 'CreateAction',
                  actionStatus: 'CompletedActionStatus',
                  description: 'Senior author on this work'
                }
              ]
            },
            contributor: {
              '@type': 'ContributorRole',
              contributor: {
                '@id': 'http://www.anatomy.vcu.edu/microscopy/',
                '@type': 'Organization',
                name: 'Microscopy Facility',
                parentOrganization: {
                  '@id': 'http://www.anatomy.vcu.edu',
                  '@type': 'Organization',
                  name: 'Department of Anatomy and Neurology',
                  parentOrganization: {
                    '@id': 'http://www.vcu.edu',
                    '@type': 'CollegeOrUniversity',
                    name: 'Virginia Commonwealth University',
                    alternateName: 'VCU',
                    location: {
                      '@type': 'Place',
                      address: {
                        '@type': 'PostalAddress',
                        addressLocality: 'Richmond',
                        addressRegion: 'VA',
                        addressCountry: 'USA'
                      }
                    }
                  }
                }
              },
              roleAction: {
                '@type': 'AllocateAction',
                actionStatus: 'CompletedActionStatus',
                object: {
                  '@type': 'Duration',
                  name: '5 hours'
                },
                purpose: [
                  {
                    name: 'laser-scanning confocal microscopy'
                  },
                  {
                    name: 'structured illumination microscopy'
                  }
                ]
              }
            }
          }}
        />
      </section>
    );
  }
}

AuthorsContributorsAndAffiliations.ds3Id = `ds3:${
  AuthorsContributorsAndAffiliations.name
}`;

export default Customize(AuthorsContributorsAndAffiliations);
