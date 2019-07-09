import React from 'react';
import { Link } from 'react-router-dom';
import { BemTags, TextLogo, SchemaLink as A } from '@scipe/ui';
import Info from '../info';
import JsonldExample from '../jsonld-example';

export default class Dates extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@archive');
    return (
      <section id="dates" className={bem`abstract @__sub-section`}>
        <h5 className={bem`@__default-ui-type--subhead-3`}>Dates</h5>

        <JsonldExample
          data={{
            '@id': 'http://example.com/article',
            '@type': 'ScholarlyArticle',
            dateCreated: new Date().toISOString(),
            datePublished: new Date().toISOString()
          }}
        >
          The <A>dateCreated</A> and <A>datePublished</A> properties are used to
          express the dates when the article was created (submitted to{' '}
          <TextLogo />) and published.
        </JsonldExample>

        <p>
          In case of rejected articles, the <A>dateRejected</A> property
          indicates the date when the article was rejected.
        </p>

        <Info className={bem`@__info-panel`}>
          <header>Publication Event and scheduling</header>
          <p>
            Additional information about the publication event can be provided
            using a<A>PublicationEvent</A>. The date of publication of a
            resource can be scheduled using the <TextLogo /> API (
            <A>ScheduleAction</A>). Interested readers should consult the{' '}
            <TextLogo /> <Link to="get-started/api">API documentation</Link>.
          </p>
        </Info>

        <Info className={bem`@__info-panel`}>
          <header>Partial information for dates</header>
          <p>
            When only partial information is known about a date, a typed value
            using{' '}
            <a href="https://www.w3.org/TR/xmlschema11-2/#built-in-primitive-datatypes">
              xsd primitive datatypes
            </a>{' '}
            must be used (<code>xsd:gYearMonth</code>, <code>xsd:gYear</code>,{' '}
            <code>xsd:gMonthDay</code>, <code>xsd:gDay</code>,{' '}
            <code>xsd:gMonth</code>).
          </p>
          <JsonldExample
            data={{
              '@type': 'ScholarlyArticle',
              datePublished: {
                '@type': 'xsd:gYearMonth',
                '@value': '2022-01'
              }
            }}
          >
            A partial date
          </JsonldExample>
        </Info>
      </section>
    );
  }
}
