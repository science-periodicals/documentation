import React from 'react';
import { BemTags, SchemaLink as A } from '@scipe/ui';
import JsonldExample from '../jsonld-example';
import Info from '../info';

export default class ProgrammingLanguage extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@archive');

    return (
      <section id="programming-language" className={bem`name @__sub-section`}>
        <h5 className={bem`@__default-ui-type--subhead-3`}>
          Programming language
        </h5>

        <JsonldExample
          data={{
            '@id': 'http://example.com/article',
            '@type': 'SoftwareSourceCode',
            programmingLanguage: {
              '@type': 'ComputerLanguage',
              name: 'R'
            }
          }}
        >
          The <A>programmingLanguage</A> property is used to specify the
          programming language of a resource
        </JsonldExample>

        <Info className={bem`@__info-panel`}>
          <header>List of programming language</header>

          <p>
            The programming language name should be specified according to the{' '}
            <a href="https://en.wikipedia.org/wiki/List_of_programming_languages">
              list of programming languages wikipedia page
            </a>
            .
          </p>

          <p>
            For convenience, sci.pe maintains a JSON-LD version of that list{' '}
            <a href="https://github.com/scienceai/list-of-programming-languages">
              here
            </a>
            .
          </p>
        </Info>
      </section>
    );
  }
}
