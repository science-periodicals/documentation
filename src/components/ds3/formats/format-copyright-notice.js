import React from 'react';

export default class FormatCopyrightNotice extends React.Component {
  render() {
    return (
      <aside id={FormatCopyrightNotice.ds3Id} className="format">
        <h4>Copyright notice format</h4>
        <p className="pattern">
          <code>symbol year holder</code>
        </p>
        <p>where:</p>
        <dl>
          <dt>
            <code>symbol</code>
          </dt>
          <dd>
            The symbol &copy; (preferred because it also suits the requirements
            of the Universal Copyright Convention), the word ‘Copyright’; or the
            abbreviation ‘Copr.’
          </dd>
          <dt>
            <code>year</code>
          </dt>
          <dd>The copyright year.</dd>
          <dt>
            <code>holder</code>
          </dt>
          <dd>
            The copyright holders information specified using the{' '}
            <a href="#ds3:FormatPerson">person</a>,{' '}
            <a href="#ds3:FormatOrganization">organization</a> or{' '}
            <a href="#ds3:FormatAffiliatedPerson">affiliated person</a> format.
          </dd>
        </dl>
        <p>
          When multiple copyright holders are present, separate them with{' '}
          <code className="token">&</code> or <code className="token">and</code>
          .
        </p>
        <ul className="example">
          <li>
            <code className="token">&copy;</code> <span>2015</span>{' '}
            <span className="organization">
              SRI International <code className="token">(</code>SRI
              <code className="token">)</code>
              <code className="token"> - </code>Menlo Park
              <code className="token">,</code> CA
              <code className="token">,</code> USA
            </span>
            .
          </li>
          <li>
            <code className="token">&copy;</code> <span>2016</span>{' '}
            <span className="person">
              Sullivan<code className="token">,</code> James{' '}
              <code className="token">(</code>Peter, Robert
              <code className="token">)</code> <code className="token">“</code>
              Prof. James P Sullivan, MD<code className="token">”</code>
            </span>{' '}
            <code className="token">&amp; </code>
            <span className="person">
              Rosalind<code className="token">,</code> Franklin{' '}
              <code className="token">“</code>Dr. Rosalind Franklin
              <code className="token">”</code>
            </span>
          </li>
        </ul>
      </aside>
    );
  }
}

FormatCopyrightNotice.ds3Id = `ds3:${FormatCopyrightNotice.name}`;
