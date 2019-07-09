import React from 'react';
import Schema from '../schema';
import Customize from '../../../hoc/customize';

class Disclosure extends React.Component {
  render() {
    return (
      <section id={Disclosure.ds3Id} className="style-guide__group">
        <h3>Disclosure</h3>

        <p>
          List all disclosure information (such as conflict of interest or
          competing interest) in a separate ‘Disclosure’ section.
        </p>

        <ol className="style-guide__steps">
          <li className="style-guide__step">
            <figure>
              <figcaption>
                Create a new section named ‘Disclosure’ (
                <span className="ms-style">Heading 2</span>).
              </figcaption>
              <img
                src="/images/disclosure-1.png"
                alt="Apply heading 2 style to the new section heading 'Disclosure'"
              />
            </figure>
          </li>

          <li className="style-guide__step">
            <figure>
              <figcaption>
                <p>Enter the disclosure information being sure to:</p>

                <ul>
                  <li>
                    <span className="ms-feature">Cross-reference</span> persons
                    organizations and part of the work when applicable.
                  </li>
                  <li>
                    <span className="ms-feature">Hyperlink</span> any mentioned
                    entities when applicable.
                  </li>
                </ul>

                <p className="example">
                  <span className="person cross-reference">
                    Prof. James P Sullivan, MD
                  </span>{' '}
                  received personal fees for consulting for Pfizer
                </p>
              </figcaption>
              <img
                src="/images/disclosure-simple.png"
                alt="add cross-references in the disclosure section"
              />
            </figure>
          </li>
        </ol>

        <Schema
          id="data-disclosure"
          data={{
            '@context': 'https://sci.pe',
            '@type': 'DisclosureAction',
            actionStatus: 'CompletedActionStatus',
            endTime: new Date().toISOString(),
            agent: {
              '@id': 'http://example.com/psullivan',
              '@type': 'Person',
              name: 'Prof. James P Sullivan, MD'
            },
            instrument: {
              '@type': 'MediaObject',
              contentUrl: 'http://example.com/signed_disclosure_1.pdf'
            },
            about: {
              '@type': 'PayAction',
              startTime: new Date(
                new Date().getFullYear() - 1,
                10,
                3
              ).toISOString(),
              endTime: new Date(new Date().getFullYear(), 11, 1).toISOString(),
              actionStatus: 'CompletedActionStatus',
              agent: {
                '@type': 'Corporation',
                name: 'Pfizer',
                location: {
                  '@type': 'Place',
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'New York',
                    addressRegion: 'NY',
                    addressCountry: 'USA'
                  }
                }
              },
              recipient: 'http://example.com/psullivan'
            },
            result: {
              '@type': 'Disclosure',
              text:
                'Prof. James P Sullivan, MD received personal fees for consulting for Pfizer'
            }
          }}
        />
      </section>
    );
  }
}

Disclosure.ds3Id = `ds3:${Disclosure.name}`;

export default Customize(Disclosure);
