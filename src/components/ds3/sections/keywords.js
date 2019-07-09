import React from 'react';
import Schema from '../schema';
import Customize from '../../../hoc/customize';

class Keywords extends React.Component {
  render() {
    return (
      <section id={Keywords.ds3Id} className="style-guide__group">
        <h3>Keywords</h3>
        <ol className="style-guide__steps">
          <li className="style-guide__step">
            <figure>
              <figcaption>
                Create a new section with a heading (
                <span className="ms-style">Heading 2</span> style) named:
                ‘Keywords’.
              </figcaption>
              <img
                src="/images/keywords-1.png"
                alt="Heading style 2 is applied to the Keywords section heading"
              />
            </figure>
          </li>
          <li className="style-guide__step">
            <figure>
              <figcaption>
                <p>
                  List keywords in a{' '}
                  <span className="ms-feature">bulleted list</span> or{' '}
                  <span className="ms-feature">ordered list</span>, depending on
                  whether the order of keywords matters.
                </p>
                <p className="warning">
                  Be sure to only include one keyword per bullet point.
                </p>
                <p>
                  When possible, hyperlink keywords to a unique URL. Prefer a
                  URL from a term of a controlled ontology when available.
                </p>
              </figcaption>
              <img
                src="/images/keywords-3.png"
                alt="A bulleted list of keywords is added after the section heading"
              />
            </figure>
          </li>
        </ol>
        <Schema
          id="data-keywords"
          data={{
            '@context': 'https://sci.pe',
            '@id': 'http://example.com/article',
            '@type': 'ScholarlyArticle',
            keywords: ['hypertext', 'hypermedia'],
            about: [
              {
                '@id':
                  'subjects:information-systems-and-information-technology',
                name: 'Information systems and information theory'
              }
            ]
          }}
        />
      </section>
    );
  }
}

Keywords.ds3Id = `ds3:${Keywords.name}`;

export default Customize(Keywords);
