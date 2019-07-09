import React from 'react';
import { BemTags } from '@scipe/ui';
import ApiRoutesCrud from './api-routes-crud';
import ApiRoutesFeed from './api-routes-feed';
import ApiRoutesSearch from './api-routes-search';

export default class ApiRoutes extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section id="routes" className={bem`@__section`}>
        <h2 className={bem`@__default-ui-type--headline`}>Routes</h2>

        <section id="crud-routes" className={bem`@__sub-section`}>
          <h3 className={bem`@__default-ui-type--subhead-1`}>CRUD routes</h3>

          <ApiRoutesCrud />
        </section>

        <section id="changes-feed" className={bem`@__sub-section`}>
          <h3 className={bem`@__default-ui-type--subhead-1`}>Changes feed</h3>
          <ApiRoutesFeed />
        </section>

        <section id="search-routes" className={bem`@__sub-section`}>
          <h3 className={bem`@__default-ui-type--subhead-1`}>Search routes</h3>
          <ApiRoutesSearch />
        </section>
      </section>
    );
  }
}
