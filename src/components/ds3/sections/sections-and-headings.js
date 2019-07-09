import React from 'react';
import PropTypes from 'prop-types';
import Iconoclass from '@scipe/iconoclass';
import { Value, BemTags } from '@scipe/ui';
import { arrayify, getId } from '@scipe/jsonld';
import { getObject } from 'schema.org/utils';
import Schema from '../schema';
import CustomBox from '../custom-box';
import Customize from '../../../hoc/customize';

const bem = BemTags();

// for global ds3 styels
const ds3bem = BemTags('ds3');

class SectionsAndHeadings extends React.Component {
  renderCustom() {
    const { updateAction } = this.props;
    if (updateAction) {
      const object = getObject(updateAction);
      if (object) {
        const render = (sections, level = 2) => {
          return (
            <ul className={bem`section-list`}>
              {arrayify(sections).map(section => {
                const uri = arrayify(section.isBasedOn)[0];
                return (
                  <li className={bem`section-list-item`} key={getId(section)}>
                    <h4 className={bem`section-name`}>
                      {section.name} (
                      <em className={bem`section-name-formating-note`}>
                        Heading {level}
                      </em>
                      )
                      {uri &&
                      uri.startsWith('ds3:') &&
                      uri !== 'ds3:Abstract' &&
                      uri !== 'ds3:ImpactStatement' ? (
                        <a href={`#${uri}`}>
                          <Iconoclass
                            className={bem`ds3-icon`}
                            iconName="ds3"
                            size="20px"
                          />
                        </a>
                      ) : null}
                    </h4>
                    <Value>{section.description}</Value>

                    {section.hasPart
                      ? render(section.hasPart, level + 1)
                      : null}
                  </li>
                );
              })}
            </ul>
          );
        };

        return (
          <div className={bem`sections-and-headings`}>
            <p>Manuscripts should follow the following structure:</p>
            <CustomBox>
              <h4 className={ds3bem`section-title`}>Manuscript structure</h4>
              {render(object.hasPart)}
            </CustomBox>
          </div>
        );
      }
    }

    return this.renderDefault();
  }

  renderDefault() {
    return (
      <div>
        <p>
          When possible, use the following heading names (section titles) and
          corresponding Heading Styles for common sections of scholarly article:
        </p>

        <div className="clearfix">
          <dl id="section-headings" className="element-mapping">
            <dt>Manuscript Title</dt>
            <dd>
              <span className="ms-style">Heading 1</span>
            </dd>
            <dt>Manuscript Short Title or Subtitle</dt>
            <dd>
              <span className="ms-style">Subtitle</span>
            </dd>
            <dt>Authors</dt>
            <dd>
              <span className="ms-style">Heading 2</span>
            </dd>
            <dt>Contributors</dt>
            <dd>
              <span className="ms-style">Heading 2</span>
            </dd>
            <dt>Affiliations</dt>
            <dd>
              <span className="ms-style">Heading 2</span>
            </dd>
            <dt>Short Abstract</dt>
            <dd>
              <span className="ms-style">Heading 2</span>
            </dd>
            <dt>Impact Statement</dt>
            <dd>
              <span className="ms-style">Heading 2</span>
            </dd>
            <dt>Abstract</dt>
            <dd>
              <span className="ms-style">Heading 2</span>
            </dd>
            <dt>Structured Abstract</dt>
            <dd>
              <span className="ms-style">Heading 2</span>
            </dd>
            <dt className="indent">Background</dt>
            <dd>
              <span className="ms-style">Heading 3</span>
            </dd>
            <dt className="indent">Methods</dt>
            <dd>
              <span className="ms-style">Heading 3</span>
            </dd>
            <dt className="indent">Results</dt>
            <dd>
              <span className="ms-style">Heading 3</span>
            </dd>
            <dt className="indent">Conclusion</dt>
            <dd>
              <span className="ms-style">Heading 3</span>
            </dd>
            <dt>Keywords</dt>
            <dd>
              <span className="ms-style">Heading 2</span>
            </dd>
          </dl>
          <dl className="element-mapping">
            <dt>Introduction</dt>
            <dd>
              <span className="ms-style">Heading 2</span>
            </dd>
            <dt className="indent">subsection</dt>
            <dd>
              <span className="ms-style">Heading 3</span>
            </dd>
            <dt>Materials and Methods</dt>
            <dd>
              <span className="ms-style">Heading 2</span>
            </dd>
            <dt className="indent">subsection</dt>
            <dd>
              <span className="ms-style">Heading 3</span>
            </dd>
            <dt>Results</dt>
            <dd>
              <span className="ms-style">Heading 2</span>
            </dd>
            <dt className="indent">subsection</dt>
            <dd>
              <span className="ms-style">Heading 3</span>
            </dd>
            <dt>Conclusion</dt>
            <dd>
              <span className="ms-style">Heading 2</span>
            </dd>
            <dt className="indent">subsection</dt>
            <dd>
              <span className="ms-style">Heading 3</span>
            </dd>
            <dt>Discussion</dt>
            <dd>
              <span className="ms-style">Heading 2</span>
            </dd>
            <dt>Funding</dt>
            <dd>
              <span className="ms-style">Heading 2</span>
            </dd>
            <dt>Acknowledgments</dt>
            <dd>
              <span className="ms-style">Heading 2</span>
            </dd>
            <dt>Disclosure</dt>
            <dd>
              <span className="ms-style">Heading 2</span>
            </dd>
            <dt>Supporting Information</dt>
            <dd>
              <span className="ms-style">Heading 2</span>
            </dd>
            <dt>Bibliography</dt>
            <dd>
              <span className="ms-style">Heading 2</span>
            </dd>
          </dl>
        </div>

        <ul className="warning">
          <li>
            If <strong>multiple abstracts</strong> are present (such as 'Short
            Abstract', 'Structured Abstract', 'Graphical Abstract',
            'Editor&apos;s Summary', 'Executive Summary', 'Highlights',
            'Synopsis', 'Key Points', 'Teaser', ...) enter them each in their
            own section labeled with a{' '}
            <span className="ms-style">Heading 2</span> style.
          </li>
          <li>
            Avoid adding a dedicated <strong>'Author Contributions'</strong>{' '}
            section and instead express author contributions as footnotes next
            to the author list following the instructions for{' '}
            <a href="#author-contributions">author contributions</a> and for{' '}
            <a href="#ds3:ResourceMetadata">resource metadata</a>.
          </li>
          <li>
            Avoid adding a dedicated <strong>'Author Notes'</strong> (or
            similar) section and instead provide a dedicated{' '}
            <strong>'Disclosure'</strong> section,{' '}
            <a href="#ds3:Disclosure">
              following the instruction of this guide
            </a>
            .
          </li>
          <li>
            Avoid listing funding information in the{' '}
            <strong>'Acknowledgements'</strong> section. Instead provide a
            dedicated <strong>'Funding'</strong> section{' '}
            <a href="#ds3:Funding">following the instruction of this guide</a>.
          </li>
        </ul>
      </div>
    );
  }

  render() {
    return (
      <section id={SectionsAndHeadings.ds3Id} className="style-guide__group">
        <h3>Sections and Headings</h3>
        <p>
          An article is composed of front matter sections (e.g., title,{' '}
          <a href="#ds3:AuthorsContributorsAndAffiliations">
            authors, contributors, and affiliations
          </a>
          , abstracts, and <a href="#ds3:Keywords">keywords</a>, etc.), body
          sections (e.g., introduction, methods, results, conclusions,
          discussion, etc.), and back matter sections (e.g.,{' '}
          <a href="#ds3:Funding">funding</a>,{' '}
          <a href="#ds3:Acknowledgements">acknowledgements</a>,{' '}
          <a href="#ds3:Disclosure">disclosures</a>,{' '}
          <a href="#ds3:SupportingInformation">supporting information</a>, and{' '}
          <a href="#ds3:Citations">references</a>).{' '}
        </p>
        <ol className="style-guide__steps">
          <li className="style-guide__step">
            <figure>
              <figcaption>
                <p>
                  Sections are created by giving them a heading with a specific
                  heading level. To create a heading:
                </p>
                <ol>
                  <li>
                    Enter the heading name (title of the section), e.g.,
                    'Introduction'.
                  </li>
                  <li>Select the title text.</li>
                  <li>
                    <p>
                      From the <span className="ms-label">Home</span> tab of the
                      ribbon, click on the{' '}
                      <span className="ms-feature">Style</span> corresponding to
                      the appropriate section heading level (
                      <span className="ms-style">Heading 2</span> here).
                    </p>
                    <p>
                      Heading styles start with{' '}
                      <span className="ms-style">Heading 1</span> for the
                      manuscript title and increase with each level of nesting.
                      For example, sections within the document, such as
                      'Introduction' are{' '}
                      <span className="ms-style">Heading 2</span> and sections
                      within sections (subsections) are{' '}
                      <span className="ms-style">Heading 3</span>, etc. See{' '}
                      <a href="#section-headings"> below</a> for suggested
                      heading names (section titles) and corresponding Heading
                      Styles.
                    </p>
                  </li>
                </ol>
              </figcaption>
              <img
                src="/images/styles.png"
                alt="Apply built-in Heading 2 style to section heading"
              />
            </figure>

            {this.renderCustom()}
          </li>
          <li className="style-guide__step">
            <figure>
              <figcaption>
                <p>
                  If there is no section heading at the start of the body (such
                  as 'Introduction'), a{' '}
                  <span className="ms-feature">Break</span> (Page or Section
                  Break) <i>must</i> be inserted after any front matter sections
                  and before the start of the article body. Otherwise, breaks
                  may be inserted between front matter, body, and back matter,
                  but are not required.
                </p>
                <p>To insert a break:</p>
                <ol>
                  <li>
                    Place the cursor where the break should be inserted (e.g.,
                    right before the start of the body).
                  </li>
                  <li>
                    From the <span className="ms-label">Layout</span> tab of the
                    ribbon, click on <span className="ms-button">Breaks</span>.
                  </li>
                  <li>
                    Select <span className="ms-value">Page</span> (Page Break),{' '}
                    <span className="ms-value">Next Page</span> (Section Break),
                    or
                    <span className="ms-value">Continuous</span> (Section
                    Break), as preferred.
                  </li>
                </ol>
              </figcaption>
              <img
                src="/images/section-breaks.png"
                alt="add page or continuous break before body without headings"
              />
            </figure>
          </li>
        </ol>
        <figure>
          <figcaption>
            <p>
              Note, a <span className="ms-feature">Document Map</span> can be
              displayed to help to quickly navigate among the different sections
              (represented by their headings) of the document.
            </p>
            <p>
              To display a <span className="ms-feature">Document Map</span>:
            </p>
            <ol>
              <li>
                Go the the <span className="ms-label">View</span> tab of the
                ribbon.
              </li>
              <li>
                Check the <span className="ms-button">Navigation Pane</span>{' '}
                option.
              </li>
              <li>
                In the side bar that just appeared, click on the{' '}
                <span className="ms-label">Document Map</span> tab.
              </li>
            </ol>
          </figcaption>
          <img src="/images/navigation-view.png" alt="navigation view" />
        </figure>

        <Schema
          id="data-sections-and-headings"
          data={{
            '@context': 'https://sci.pe',
            '@id': 'http://example.com/article',
            '@type': 'ScholarlyArticle',
            name: 'article title',
            description: 'short abstract',
            inLanguage: 'en-US',
            articleBody:
              "<article prefix='schema: http://schema.org/ sa: http://ns.sci.pe/'><h2 typeof='sa:Introduction'></h2></article>"
          }}
        />
      </section>
    );
  }
}

SectionsAndHeadings.propTypes = {
  updateAction: PropTypes.object,
  styleGuide: PropTypes.object.isRequired
};

SectionsAndHeadings.ds3Id = `ds3:${SectionsAndHeadings.name}`;
export default Customize(SectionsAndHeadings);
