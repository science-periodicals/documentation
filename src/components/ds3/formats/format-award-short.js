import React from 'react';

export default class FormatAward extends React.Component {
  render() {
    return (
      <aside id={FormatAward.ds3Id} className="format">
        <h4>Award Format</h4>
        <p className="pattern">
          <code>
            identifier <span className="token">"</span>name{' '}
            <span className="token">(</span>short name<span className="token">
              )
            </span>
            <span className="token">"</span>
          </code>
        </p>
        <p>where:</p>
        <dl>
          <dt>
            <code>identifier</code>
          </dt>
          <dd>
            An identifier (typically a number) for the award / project / grant.
            It can be prefixed by a qualifier such as: 'grant agreement number',
            'award number', etc.
          </dd>
          <dt>
            <code>name</code>
          </dt>
          <dd>The name of the award / project / grant.</dd>
          <dt>
            <code>short name</code>
          </dt>
          <dd>
            A short name (such as an acronym) for the award / project / grant.
          </dd>
        </dl>
        <p>
          Be sure that either <code>identifier</code> or <code>name</code> (or
          both) are present when describing an award.
        </p>
        <p>
          Note that the award / project / grant name, including the short name
          (if any), must be quoted (<code className="token">"</code>
          <code className="token">"</code>)
        </p>
        <p>
          When a short name is present, it must be in parentheses{' '}
          <code className="token">()</code>.
        </p>
        <ul className="example">
          <li>
            <span className="award">
              award number 0553202 <code className="token">"</code>SGER: First
              Stages of Exploratory Development of HyperScope<code className="token">
                "
              </code>
            </span>
          </li>
          <li>
            <span className="award">
              award number 3R01TW005869-06S1 <code className="token">"</code>American
              Recovery and Reinvestment Act award{' '}
              <code className="token">(</code>ARRA<code className="token">
                )
              </code>
              <code className="token">"</code>
            </span>
          </li>
          <li>
            <span className="award">Grant number ANR-10-LABX-62-IBEID</span>
          </li>
        </ul>
      </aside>
    );
  }
}

FormatAward.ds3Id = `ds3:${FormatAward.name}`;
