import React from 'react';
import Schema from '../schema';
import Customize from '../../../hoc/customize';

class License extends React.Component {
  render() {
    return (
      <section id={License.ds3Id} className="style-guide__group">
        <h3>License</h3>
        <ol className="style-guide__steps">
          <li className="style-guide__step">
            <figure>
              <figcaption>
                Create a new section with a heading (
                <span className="ms-style">Heading 2</span> style) named:
                ‘License’.
              </figcaption>
              <img
                src="/images/license-1.png"
                alt="Heading style 2 is applied to the license section heading"
              />
            </figure>
          </li>
          <li className="style-guide__step">
            <figure>
              <figcaption>
                <p>Specify the license:</p>
                <ul>
                  <li>
                    When possible, use a license identifier taken from the{' '}
                    <a href="https://spdx.org/licenses">SPDX license list</a>{' '}
                    (e.g., <code>CC-BY-4.0</code>
                    ).
                  </li>
                  <li>
                    If a license identifier cannot be found, use the license
                    name.
                  </li>
                  <li>
                    In case of multiple licenses, separate them with semicolons
                    (<code className="token">;</code>
                    ).
                  </li>
                </ul>
              </figcaption>
              <img src="/images/license-2.png" alt="Add license information" />
            </figure>
          </li>
          <li className="style-guide__step">
            <figure>
              <figcaption>
                <p>
                  Hyperlink the license identifier (or name) to the URL of the
                  license (if any).
                </p>
                <p className="example">
                  <code>
                    <a href="https://creativecommons.org/licenses/by/4.0/legalcode">
                      CC-BY-4.0
                    </a>
                  </code>
                </p>
              </figcaption>
              <img
                src="/images/license-3.png"
                alt="hyperlink it to the license URL"
              />
            </figure>
          </li>
        </ol>
        <Schema
          id="data-license"
          data={{
            '@context': 'https://sci.pe',
            '@id': 'http://example.com/article',
            '@type': 'ScholarlyArticle',
            license: {
              '@id': 'https://creativecommons.org/licenses/by/4.0/legalcode',
              name: 'CC-BY-4.0'
            }
          }}
        />
      </section>
    );
  }
}

License.ds3Id = `ds3:${License.name}`;

export default Customize(License);
