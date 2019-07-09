import React from 'react';

export default class FormatContact extends React.Component {
  render() {
    return (
      <aside id={FormatContact.ds3Id} className="format">
        <h4>Contact format</h4>
        <p className="pattern">
          <code>
            method<span className="token">:</span> value{' '}
            <span className="token">(</span>qualifier<span className="token">
              )
            </span>
            <span className="token">.</span>
          </code>
        </p>
        <p>where:</p>
        <dl>
          <dt>
            <code>method</code>
          </dt>
          <dd>
            A contact method. Possible values include:
            <ul>
              <li>'Email'</li>
              <li>Social media account (e.g., 'Twitter', 'Facebook', etc)</li>
              <li>Online profile (e.g. 'GitHub', 'NPM', etc)</li>
              <li>'Tel' (telephone)</li>
              <li>'Fax'</li>
            </ul>
          </dd>
          <dt>
            <code>value</code>
          </dt>
          <dd>
            A value for the contact method (e.g., email address, postal address,
            telephone number, etc.). When possible, the value should be
            hyperlinked. If the value contains a period (<span className="token">
              .
            </span>) as is typically the case for email addresses, then it must
            be hyperlinked.
          </dd>
          <dt>
            <code>qualifier</code>
          </dt>
          <dd>
            <p>
              An <em>optional</em> (can be omitted) qualifier precising the type
              of the contact point.
            </p>
            <ul className="example">
              <li>'Home'</li>
              <li>'Office'</li>
            </ul>
          </dd>
        </dl>
        <p>
          When multiple <code>value</code> (and their associated{' '}
          <code>qualifier</code> [if any]), are available, they must separated
          by semicolons (<code className="token">;</code>).
        </p>
        <p className="example">
          Email<code className="token">:</code>{' '}
          <a href="#">jsullivan@example.com</a> <code className="token">(</code>office<code className="token">
            )
          </code>
          <code className="token">;</code> <a href="#">james@example.com</a>{' '}
          <code className="token">(</code>home<code className="token">)</code>
          <code className="token">
            .
          </code> Twitter<code className="token">:</code>{' '}
          <a href="#">@jsullivan</a>
          <code className="token">.</code>
        </p>
      </aside>
    );
  }
}

FormatContact.ds3Id = `ds3:${FormatContact.name}`;
