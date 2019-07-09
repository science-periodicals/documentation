import React from 'react';
import { BemTags } from '@scipe/ui';

export default class ApiAuthentication extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section id="authentication" className={bem`api @__section`}>
        <h2 className={bem`@__default-ui-type--headline`}>Authentication</h2>
        <p>
          Authentication to the API is performed via{' '}
          <a href="http://en.wikipedia.org/wiki/Basic_access_authentication">
            HTTP Basic Auth
          </a>{' '}
          over HTTPS using your username and password (or API key and API
          secret).
        </p>

        <p className={bem`@__warning`}>
          All API requests must be made over HTTPS. Calls made over plain HTTP
          will fail. API requests without authentication will also fail.
        </p>
      </section>
    );
  }
}
