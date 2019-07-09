import React from 'react';

export default class FormatAcknowledgements extends React.Component {
  render() {
    return (
      <aside id={FormatAcknowledgements.ds3Id} className="format">
        <h4>Acknowledgement Statement Format</h4>
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
              Microsoft Word.
            </p>
            <p>
              When multiple subjects are present, they must be separated by a
              semicolon (<code className="token">;</code>).
            </p>
            <p>
              The words '<code>The authors</code>', '<code>
                The contributors
              </code>', '<code>The authors and contributors</code>' (or their
              singular versions) can be used as valid subjects instead of the
              full list of the work's authors and contributors.
            </p>
          </dd>
          <dt>
            <code>predicate</code>
          </dt>
          <dd>
            <p>
              A clause terminated by a colon (<code className="token">:</code>)
              specifying the relationship between the subject(s) (if any) and
              object(s).
            </p>
            <ul className="example">
              <li>
                <span className="predicate">
                  acknowledge<code className="token">:</code>
                </span>
              </li>
              <li>
                <span className="predicate">
                  acknowledge the editorial review work of<code className="token">
                    :
                  </code>
                </span>
              </li>
              <li>
                <span className="predicate">
                  acknowledge the proofreading work of<code className="token">
                    :
                  </code>
                </span>
              </li>
              <li>
                <span className="predicate">
                  is thankful for the pioneering contribution of<code className="token">
                    :
                  </code>
                </span>
              </li>
            </ul>
          </dd>
          <dt>
            <code>object(s)</code>
          </dt>
          <dd>
            <p>
              A list of organizations, persons or affiliated persons separated
              by semicolon (<code className="token">;</code>), terminated by a
              dot (<code className="token">.</code>) and formatted following the{' '}
              <a href="#ds3:FormatOrganization">organization format</a>, the{' '}
              <a href="#ds3:FormatPerson">person format</a>, and the{' '}
              <a href="#ds3:FormatAffiliatedPerson">affiliated person format</a>{' '}
              defined further up in this guide. When possible, objects should be
              hyperlinked to relevant URLs.
            </p>
          </dd>
        </dl>
        <p>
          In cases where the acknowledgement section is a simple list of persons
          and/or organizations, the subject(s) and predicate must be omitted.
        </p>
        <ul className="example">
          <li>
            <span className="magick subject">The authors</span>{' '}
            <span className="predicate">
              acknowledge<code className="token">:</code>
            </span>{' '}
            <span className="person">
              Berners-Lee<code className="token">,</code> Timothy{' '}
              <code className="token">(</code>John<code className="token">
                )
              </code>{' '}
              <code className="token">"</code>Sir Timothy John Berners-Lee OM
              KBE FRS FREng FRSA FBCS<code className="token">"</code>
            </span>{' '}
            <code className="token">(</code>
            <span className="organization">
              World Wide Web Consortium <code className="token">(</code>W3C<code className="token">
                )
              </code>
            </span>
            <code className="token">)</code>
            <code className="token">.</code>
          </li>
          <li>
            <span className="cross-reference">
              <span className="person">Prof. James P Sullivan, MD</span>
            </span>{' '}
            <span className="predicate">
              is thankful for the pioneering contribution of<code className="token">
                :
              </code>
            </span>{' '}
            <span className="person">
              Bush<code className="token">,</code> Vannevar{' '}
              <code className="token">"</code>Vannevar Bush<code className="token">
                "
              </code>
            </span>
            <code className="token">.</code>
          </li>
        </ul>
      </aside>
    );
  }
}

FormatAcknowledgements.ds3Id = `ds3:${FormatAcknowledgements.name}`;
