import React from 'react';

export default class FormatDisclosure extends React.Component {
  render() {
    return (
      <aside id={FormatDisclosure.ds3Id} className="format">
        <h4>Disclosure statement Format</h4>
        <p className="pattern">
          <code>
            subject(s) predicate<span className="token">:</span> object(s)<span className="token">
              .
            </span>
          </code>
        </p>
        <p>where:</p>
        <dl>
          <dt>
            <code>subject(s)</code>
          </dt>
          <dd>
            <p>
              Bookmarked authors and contributors, represented by their 'display
              name' (e.g., Prof. James P Sullivan) or organizations (from the
              affiliation list) identified by a bookmarked part of the
              organization trail (typically the organization short name or
              acronym). Contributor display name and organization identifiers
              must be inserted with the built-in{' '}
              <span className="ms-feature">Cross-reference</span> feature of
              Microsoft Word. When multiple subjects are present, they must be
              separated by a semicolon (<code className="token">;</code>).
            </p>
            <p>
              The words <code>'The authors'</code>,{' '}
              <code>'The contributors'</code>,{' '}
              <code>'The authors and contributors'</code> (or their singular
              versions) can be used as valid subjects instead of the full list
              of the work&apos;s authors and contributors.
            </p>
          </dd>
          <dt>
            <code>predicate</code>
          </dt>
          <dd>
            <p>
              A clause terminated by a colon (<code className="token">:</code>)
              indicating the category (type) of disclosure and the relationship
              between the disclosure subject(s) and object(s).
            </p>
            <ul className="example">
              <li>
                <span className="predicate">
                  disclosed personal fees from<code className="token">:</code>
                </span>
              </li>
              <li>
                <span className="predicate">
                  disclosed research support from<code className="token">
                    :
                  </code>
                </span>
              </li>
              <li>
                <span className="predicate">
                  was employed by<code className="token">:</code>
                </span>
              </li>
              <li>
                <span className="predicate">
                  own patent<code className="token">:</code>
                </span>
              </li>
              <li>
                <span className="predicate">
                  is editor of<code className="token">:</code>
                </span>
              </li>
              <li>
                <span className="predicate">
                  received travel support from<code className="token">:</code>
                </span>
              </li>
              <li>
                <span className="predicate">
                  received lecture fees from<code className="token">:</code>
                </span>
              </li>
            </ul>
          </dd>
          <dt>
            <code>object(s)</code>
          </dt>
          <dd>
            <p>
              A list of organizations, persons, affiliated persons, journals,
              patents, etc., separated by semicolons (<code className="token">
                ;
              </code>) and terminated by a dot (<code className="token">.</code>).
              Organizations, persons, and affiliated persons must be formatted
              following the{' '}
              <a href="#ds3:FormatOrganization">organization format</a>,{' '}
              <a href="#ds3:FormatPerson">person format</a>, and{' '}
              <a href="#ds3:FormatAffiliatedPerson">affiliated person format</a>{' '}
              defined further up in this guide. When possible, object should be
              hyperlinked to relevant URLs.
            </p>
            <p>
              Affiliations of a person can be specified, as list of semicolon ()<code className="token">
                ;
              </code>) separated organizations (following the{' '}
              <a href="#ds3:FormatOrganization">organization format</a>) itself
              wrapped into parentheses <code className="token">()</code>.
            </p>
          </dd>
        </dl>
        <ul className="example">
          <li>
            <span className="cross-reference">
              <span className="person">Prof. James P Sullivan, MD</span>
            </span>{' '}
            <span className="predicate">
              received personal fees for consulting for<code className="token">
                :
              </code>
            </span>{' '}
            <span className="organization">
              Pfizer Inc<code className="token"> - </code>New York<code className="token">
                ,
              </code>{' '}
              NY<code className="token">,</code> USA
            </span>
            <code className="token">.</code>
          </li>
          <li>
            <span className="cross-reference">
              <span className="person">Prof. James P Sullivan, MD</span>
            </span>;{' '}
            <span className="cross-reference">
              <span className="person">
                David Lloyd George Junior OM KStJ PC
              </span>
            </span>{' '}
            <span className="predicate">
              received travel support from<code className="token">:</code>
            </span>{' '}
            <span className="organization">
              Department of Ecology and Evolutionary Biology (EEB)<code className="token">
                {' '}
                &lt;{' '}
              </code>Princeton University <code className="token">
                {' '}
                -{' '}
              </code>Princeton<code className="token">
                ,
              </code> NJ<code className="token">,</code> USA
            </span>
            <code className="token">;</code>{' '}
            <span className="organization">
              Microsoft <code className="token"> - </code>Redmond<code className="token">
                ,
              </code>{' '}
              WA<code className="token">,</code> USA
            </span>
            <code className="token">.</code>
          </li>
        </ul>
      </aside>
    );
  }
}
