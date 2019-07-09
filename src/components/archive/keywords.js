import React from 'react';
import { BemTags, SchemaLink as A } from '@scipe/ui';
import JsonldExample from '../jsonld-example';

export default class Keywords extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@archive');
    return (
      <section id="keywords" className={bem`keywords @__sub-section`}>
        <h5 className={bem`@__default-ui-type--subhead-3`}>Keywords</h5>

        <JsonldExample
          data={{
            '@id': 'http://example.com/article',
            '@type': 'ScholarlyArticle',
            keywords: ['some', 'free', 'text', 'keywords']
          }}
        >
          The <A>keywords</A> property is used to express a list of keywords.
        </JsonldExample>
      </section>
    );
  }
}
