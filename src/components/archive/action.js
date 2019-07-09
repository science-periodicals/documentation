import React from 'react';
import { Link } from 'react-router-dom';
import { BemTags, TextLogo, SchemaLink as A } from '@scipe/ui';

const bem = new BemTags('@sa', '@documentation');

export default class Action extends React.Component {
  render() {
    return (
      <section
        id="action"
        className={bem`archive @__sub-section`}
        title="actions"
      >
        <h4 className={bem`@__default-ui-type--subhead-2`}>Actions</h4>

        <p>
          Any entity part of a <A>Graph</A> can be made actionable with the
          addition of hypermedia controls provided through schema.org actions (
          <A>Action</A>). Readers not familiar with schema.org actions should
          refer to the{' '}
          <a href="http://schema.org/docs/actions.html">
            actions overview document
          </a>{' '}
          for a quick introduction.
        </p>

        <p>
          Action can be added to a published Graph to add abilities to comment,
          tag or expose commercial offers related to the content. For a list of
          actions, see{' '}
          <Link to="/get-started/api">
            <TextLogo /> API documentation
          </Link>
          .
        </p>

        <p>
          Completed actions (action with an <A>actionStatus</A> of{' '}
          <A>CompletedActionStatus</A>) can also be added to a published graph
          to provide an audit trail of the steps taken to lead to the current{' '}
          <A>Graph</A> (see <A>CreateGraphAction</A> and related editorial
          workflow management action in the <TextLogo />{' '}
          <Link to="/get-started/api">API documentation</Link>).
        </p>
      </section>
    );
  }
}
