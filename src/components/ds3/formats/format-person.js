import React from 'react';
import { TextLogo } from '@scipe/ui';

export default class FormatPerson extends React.Component {
  render() {
    return (
      <aside id={FormatPerson.ds3Id} className="format">
        {}
        <h4>Person format</h4>
        <p className="pattern">
          <code>
            family name<span className="token">,</span> given name{' '}
            <span className="token">(</span>additional names
            <span className="token">)</span> <span className="token">“</span>
            display name<span className="token">“</span>
          </code>
        </p>
        <p>where:</p>
        <dl>
          <dt>
            <code>family name</code>
          </dt>
          <dd>
            The person family name, often referred to as a the{' '}
            <strong>last name</strong> in Western contexts.
          </dd>
          <dt>
            <code>given name</code>
          </dt>
          <dd>
            The person given name, often referred to as a the{' '}
            <strong>first name</strong> in Western contexts.
          </dd>
          <dt>
            <code>additional names</code>
          </dt>
          <dd>
            Additional names (if any), such as <strong>middle name(s)</strong>,
            for the person. Additional names (if any) must be in parentheses{' '}
            <code className="token">()</code> right after the given name.
            Separate multiple additional names with commas (
            <code className="token">,</code>).
          </dd>
          <dt>
            <code>display name</code>
          </dt>
          <dd>
            The name by which the person wants to be listed when referred,
            including <strong>honorific prefix</strong> (e.g., Dr., Mrs., Mr.)
            or <strong>honorific suffix</strong> (e.g., MD, PhD, MSCSW) (if
            any). Display name must be quoted (<code className="token">“”</code>
            ).
          </dd>
        </dl>
        <ul>
          <li>
            Separate family name and given name by a comma (
            <code className="token">,</code>).
          </li>
          <li>
            If only the initials are know for the given name and/or the
            additional name(s) use them as a substitute for the name value.
          </li>
          <li>
            Be sure that each author has at minimum a display name (with quotes{' '}
            <code className="token">“”</code> around it). If family name and
            given name cannot be differentiated, only provide the display name
            (quoted).
          </li>
        </ul>
        <p>
          When possible, hyperlink persons to a unique URL. Persons listed as
          authors or contributors must be hyperlinked to a <TextLogo /> user id,
          following the format: ‘https://sci.pe/user/username’ (e.g.,{' '}
          <a href="https://sci.pe/user/tiffany">https://sci.pe/user/tiffany</a>
          ). <a href="http://orcid.org">ORCID</a> id or other unique URL can be
          linked as well.
        </p>
        {}
        <ul className="example">
          <li>
            <span className="person">
              Sullivan<span className="token">,</span> James{' '}
              <span className="token">(</span>Peter, Robert
              <span className="token">)</span> <span className="token">“</span>
              Prof. James P Sullivan, MD<span className="token">“</span>
            </span>
          </li>
          <li>
            <span className="person">
              Lloyd George<span className="token">,</span> David{' '}
              <span className="token">“</span>David Lloyd George Junior OM KStJ
              PC<span className="token">“</span>
            </span>
          </li>
          <li>
            <span className="person">
              Mies van der Rohe<span className="token">,</span> Ludwig{' '}
              <span className="token">“</span>Ludwig Mies van der Rohe
              <span className="token">“</span>
            </span>
          </li>
        </ul>
      </aside>
    );
  }
}

FormatPerson.ds3Id = `ds3:${FormatPerson.name}`;
