import React from 'react';

export default class FormatAffiliatedPerson extends React.Component {
  render() {
    return (
      <aside id={FormatAffiliatedPerson.ds3Id} className="format">
        <h4>Affiliated person format</h4>
        <p className="pattern">
          <code>
            person <span className="token">(</span>organization
            <span className="token">)</span>
          </code>
        </p>
        <p>where:</p>
        <dl>
          <dt>
            <code>person</code>
          </dt>
          <dd>
            A person specified using the{' '}
            <a href="#ds3:FormatPerson">person format</a>.
          </dd>
          <dt>
            <code>organization</code>
          </dt>
          <dd>
            The person affiliation specified using the{' '}
            <a href="#ds3:FormatOrganization">organization format</a>. If a
            person has many affiliations, affiliations must be separated by
            semicolons (<code className="token">;</code>).
          </dd>
        </dl>
        <p className="example">
          <span className="person">
            Sullivan<code className="token">,</code> James{' '}
            <code className="token">(</code>Peter, Robert
            <code className="token">)</code> <code className="token">“</code>
            Prof. James P Sullivan, MD<code className="token">”</code>
          </span>{' '}
          <code className="token">(</code>
          <span className="organization">
            Department of Biology<code className="token"> &lt; </code>New York
            University <code className="token">(</code>NYU
            <code className="token">)</code>
            <code className="token"> - </code>New York
            <code className="token">,</code> NY<code className="token">,</code>{' '}
            USA
          </span>
          <code className="token"> ; </code>
          <span className="organization">
            Microsoft <code className="token"> - </code>Redmond
            <code className="token">,</code> WA<code className="token">,</code>{' '}
            USA
          </span>
          <code className="token">)</code>
        </p>
      </aside>
    );
  }
}

FormatAffiliatedPerson.ds3Id = `ds3:${FormatAffiliatedPerson.name}`;
