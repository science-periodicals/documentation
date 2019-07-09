import React from 'react';
import { BemTags, TextLogo, SchemaLink as A } from '@scipe/ui';
import JsonldExample from '../jsonld-example';
import Info from '../info';

export default class ApiErrors extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section id="errors" className={bem`api @__section`}>
        <h2 className={bem`@__default-ui-type--headline`}>Errors</h2>
        <p>
          <TextLogo /> uses conventional HTTP response codes to indicate the
          success or failure of an API request. In general, codes in the 2xx
          range indicate success, codes in the 4xx range indicate an error that
          failed given the information provided (e.g. a required parameter was
          omitted, authentication is needed, etc.), and codes in the 5xx range
          indicate an error with <TextLogo /> servers.
        </p>
        <p>
          For long running operations (when a 202 HTTP status code is being
          returned), errors are provided through the{' '}
          <a href="http://schema.org/error">
            <code>error</code>
          </a>{' '}
          property of an action and indicated as an{' '}
          <a href="http://schema.org/actionStatus">
            <code>actionStatus</code>
          </a>
          property set to{' '}
          <a href="http://schema.org/FailedActionStatus">
            <code>FailedActionStatus</code>
          </a>
          .
        </p>

        <JsonldExample
          data={{
            '@context': 'https://sci.pe',
            '@type': 'Action',
            actionStatus: 'FailedActionStatus',
            error: {
              '@type': 'Error',
              description: 'something went wrong'
            }
          }}
        >
          Example of a failed action.
        </JsonldExample>

        <Info className={bem`@__info-panel`}>
          <header>Progress events</header>
          <p>
            Long running operations also emit progress events throught the{' '}
            <A>ProgressEvent</A> class.
          </p>

          <JsonldExample
            data={{
              '@context': 'https://sci.pe',
              '@type': 'ProgressEvent',
              about: 'action:actionId',
              superEvent: 'scipe:subEventId1',
              startDate: '2020-01-01T21:05:20.262Z',
              endDate: '2020-01-01T21:05:20.262Z',
              progress: {
                '@type': 'QuantitativeValue',
                minValue: 0,
                maxValue: 100,
                value: 10
              }
            }}
          >
            Example of a <A>ProgressEvent</A> issued by the API in case of a
            long running operation.
          </JsonldExample>
        </Info>
      </section>
    );
  }
}
