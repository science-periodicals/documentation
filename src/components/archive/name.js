import React from 'react';
import { BemTags, SchemaLink as A } from '@scipe/ui';
import JsonldExample from '../jsonld-example';

const bem = new BemTags('@sa', '@archive');

export default class Name extends React.Component {
  render() {
    return (
      <section id="name-title" className={bem`name @__sub-section`}>
        <h5 className={bem`@__default-ui-type--subhead-3`}>Name / title</h5>

        <JsonldExample
          data={{
            '@id': 'http://example.com/article',
            '@type': 'ScholarlyArticle',
            name: 'title',
            alternativeHeadline: 'sub title'
          }}
        >
          The <A>name</A> and <A>alternativeHeadline</A> properties are used to
          express the article titles
        </JsonldExample>
      </section>
    );
  }
}
