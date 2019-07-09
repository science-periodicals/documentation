import React from 'react';
import { BemTags, TextLogo } from '@scipe/ui';
import Info from '../info';

export default class ApiConceptActions extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section id="actions" className={bem`api @__sub-section`}>
        <h3 className={bem`@__default-ui-type--subhead-1`}>Actions</h3>

        <p className={bem`@__warning`}>
          Schema.org <a href="http://schema.org/Action">Actions</a> are the only
          way to invoke services and create, update, and delete data on
          <TextLogo />.
        </p>

        <Info className={bem`@__info-panel`}>
          <header>Hypermedia</header>
          <p>
            JSON-LD provides a mechanism allowing generic clients to know when a
            value is a URL (and therefore when they have an opportunity to go
            out to the network and discover more about the resource pointed at
            by the URL). As an example, all the code examples of this
            documentation leverage this principle and provide hyperlinks (that
            can be dereferenced) when the values are URLs. However JSON-LD
            doesn’t provide a mechanism to mutate the underlying data.
          </p>

          <p>
            Schema.org <a href="http://schema.org/Action">actions</a> provide a
            shared vocabulary to expose to clients how an API can be exercised.
            Schema.org actions extend the hypermedia nature of JSON-LD by adding
            support for HTTP unsafe methods (PUT, POST, DELETE, PATCH). It
            allows the creation of generic API clients instead of requiring
            specialized clients for every single API.
          </p>
        </Info>

        <p>
          Readers not familiar with schema.org actions can refer to schema.org’s{' '}
          <a href="http://blog.schema.org/2014/04/announcing-schemaorg-actions.html">
            introductory blog post
          </a>{' '}
          for a quick overview.
        </p>

        <p>
          The <a href="#action-reference">action reference</a> at the end of
          this document details all the actions used by the <TextLogo /> API.
        </p>

        <Info className={bem`@__info-panel`}>
          <header>Flux application architecture</header>
          <p>
            The <TextLogo /> API can be seen as an implementation of the{' '}
            <a href="https://facebook.github.io/flux/">
              Flux application architecture
            </a>{' '}
            in which{' '}
            <strong>
              emitting actions is the only way to change the state of the system
            </strong>
            . The API runs over the network instead of solely inside the
            browser, but the fundamentals are the same.
          </p>
        </Info>
      </section>
    );
  }
}
