import React from 'react';
import Schema from '../schema';
import Customize from '../../../hoc/customize';

class Acknowledgements extends React.Component {
  render() {
    return (
      <section id={Acknowledgements.ds3Id} className="style-guide__group">
        <h3>Acknowledgements</h3>

        <p>
          List all acknowledgements (e.g., thanking reviewers) in a separate
          ‘Acknowledgements’ section.
        </p>
        <ol className="style-guide__steps">
          <li className="style-guide__step">
            <figure>
              <figcaption>
                Create a new section named ‘Acknowledgements’ (
                <span className="ms-style">Heading 2</span>).
              </figcaption>
              <img
                src="/images/acknowledgements-1.png"
                alt="Apply heading 2 style to the new section heading 'Acknowledgements'"
              />
            </figure>
          </li>

          <li className="style-guide__step">
            <figure>
              <figcaption>
                <p>Enter the acknowledgements being sure to:</p>

                <ul>
                  <li>
                    <span className="ms-feature">Cross-reference</span> persons,
                    organizations and part of the work when applicable.
                  </li>
                  <li>
                    <span className="ms-feature">Hyperlink</span> any mentioned
                    entities when applicable.
                  </li>
                </ul>

                <p className="example">
                  <span className="cross-reference">
                    <span className="person">Douglas Carl Engelbart</span>
                  </span>{' '}
                  is thankful for the pioneering contribution of Vannevar Bush.
                </p>
              </figcaption>

              <img
                src="/images/acknowledgements-simple.png"
                alt="create a bulleted list that will receive the disclosure statments"
              />
            </figure>
          </li>
        </ol>

        <Schema
          id="data-acknowledgments"
          data={{
            '@context': 'https://sci.pe',
            '@type': 'AcknowledgeAction',
            actionStatus: 'CompletedActionStatus',
            name: 'is thankful for the pioneering contribution of',
            agent: {
              '@id': 'http://example.com/engelbart',
              '@type': 'Person',
              name: 'Douglas Carl Engelbard'
            },
            recipient: {
              '@type': 'Person',
              name: 'Vannevar Bush',
              givenName: 'Vannevar',
              familyName: 'Bush'
            },
            result: {
              '@type': 'Acknowledgements',
              text:
                'Douglas Carl Engelbard is thankful for the pioneering contribution of of Vannevar Bush'
            }
          }}
        />
      </section>
    );
  }
}

Acknowledgements.ds3Id = `ds3:${Acknowledgements.name}`;

export default Customize(Acknowledgements);
