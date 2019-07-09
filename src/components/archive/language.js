import React from 'react';
import { BemTags, SchemaLink as A } from '@scipe/ui';
import JsonldExample from '../jsonld-example';
import HtmlExample from './html-example';
import Info from '../info';

export default class Language extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@archive');

    return (
      <section id="language" className={bem`abstract @__sub-section`}>
        <h5 className={bem`@__default-ui-type--subhead-3`}>Language</h5>

        <JsonldExample
          data={{
            '@type': 'ScholarlyArticle',
            inLanguage: 'en-US'
          }}
        >
          The <A>inLanguage</A> property is used to specify the language.
        </JsonldExample>

        <Info className={bem`@__info-panel`}>
          <header>Setting the language with an HTML / RDFa encoding</header>

          <HtmlExample
            data={`<!DOCTYPE html>
<html lang="en-US">
</html>`}
          >
            Using the <code>lang</code> attribute of the <code>html</code> root
            element to setup the language of an HTML / RDFa encoding.
          </HtmlExample>
        </Info>
      </section>
    );
  }
}
