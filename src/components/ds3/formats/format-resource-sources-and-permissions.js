import React from 'react';

export default class FormatResourceSourcesAndPermissions extends React.Component {
  render() {
    return (
      <aside
        id={FormatResourceSourcesAndPermissions.ds3Id}
        className="format credit-lines"
      >
        <h5>Resource sources and permissions format</h5>
        <p className="pattern">
          <code>
            type provenance<span className="token">:</span> source copyright
            <span className="token">,</span> permission
            <span className="token">.</span>
          </code>
        </p>
        <dl>
          <dt>
            <code>type</code>
          </dt>
          <dd>
            <p>
              The resource type. <code>type</code> can be omitted or take the
              following values:
            </p>
            {}
            <ul>
              <li>
                ‘
                <a
                  className="doclink"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://schema.org/Dataset"
                >
                  Data
                </a>
                ’
              </li>
              <li>
                ‘
                <a
                  className="doclink"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://schema.org/Table"
                >
                  Table
                </a>
                ’
              </li>
              <li>
                ‘
                <a
                  className="doclink"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://schema.org/SoftwareSourceCode"
                >
                  Code
                </a>
                ’
              </li>
              <li>
                ‘
                <a
                  className="doclink"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://ns.sci.pe/Image"
                >
                  Figure
                </a>
                ’
              </li>
              <li>
                ‘
                <a
                  className="doclink"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://schema.org/Photograph"
                >
                  Photograph
                </a>
                ’
              </li>
              <li>
                ‘
                <a
                  className="doclink"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://schema.org/Painting"
                >
                  Painting
                </a>
                ’
              </li>
              <li>
                ‘
                <a
                  className="doclink"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://schema.org/VisualArtwork"
                >
                  Artwork
                </a>
                ’
              </li>
              <li>
                ‘
                <a
                  className="doclink"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://schema.org/Audio"
                >
                  Audio
                </a>
                ’
              </li>
              <li>
                ‘
                <a
                  className="doclink"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://schema.org/Video"
                >
                  Video
                </a>
                ’
              </li>
            </ul>
          </dd>
          <dt>
            <code>provenance</code>
          </dt>
          <dd>
            <p>
              A qualifier of the origin of the resource taking the following
              values:
            </p>
            <ul>
              <li>
                ‘
                <a
                  className="doclink"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://schema.org/exampleOfWork"
                >
                  Reproduced from
                </a>
                ’
              </li>
              <li>
                ‘
                <a
                  className="doclink"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://schema.org/isBasedOn"
                >
                  From
                </a>
                ’
              </li>
              <li>
                ‘
                <a
                  className="doclink"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://schema.org/provider"
                >
                  Courtesy of
                </a>
                ’
              </li>
            </ul>
            <p>
              If a resource is <em>adapted</em> from another resource, use{' '}
              <code>From</code> to specify the <code>provenance</code>.
            </p>
          </dd>
          <dt>
            <code>source</code>
          </dt>
          <dd>
            <p>An authority (source) involved in the resource origin.</p>
            <p>
              If the resource is adapted from, reproduced from. or based on
              published material, <code>source</code> is a citation (including
              any section, figure, equation, etc., number) inserted according to
              the guidelines of the <a href="#ds3:Citations">citations</a>{' '}
              section.
            </p>
            <p className="example">
              <span className="citation">
                Wells and Tedford (1995, fig. 36)
              </span>
            </p>
            <p>
              If the resource is based on another resource part of the current
              document (such as supporting dataset or code), <code>source</code>{' '}
              is a cross-reference to the caption label of the required
              resources inserted using the built-in{' '}
              <span className="ms-feature">cross-reference</span> feature of
              Microsoft Word.
            </p>
            <p className="example">
              <span className="cross-reference">
                <span className="resource">Supporting Dataset 1</span>
              </span>
            </p>
            <p>
              If the resource has not been published and was provided without
              restriction on usage by a person or an organization not listed as
              part of the resource authors and contributors, the source is the
              person or the organization that provided the resource. In this
              case, <code>source</code> must be formatted according to the{' '}
              <a href="#ds3:FormatPerson">person</a>,{' '}
              <a href="#ds3:FormatAffiliatedPerson">affiliated person</a> or{' '}
              <a href="#ds3:FormatOrganization">organization</a> format defined
              further up in this guide.
            </p>
            <p className="example">
              <span className="person">
                Regal<code className="token">,</code> Brian{' '}
                <code className="token">“</code>Dr. Brian Regal
                <code className="token">”</code>{' '}
                <code className="token">(</code>Cryptozoology
                <code className="token"> &lt; </code>Kean University{' '}
                <code className="token"> - </code> Union
                <code className="token">,</code> NJ
                <code className="token">,</code> USA
                <code className="token">)</code>
              </span>
            </p>
          </dd>
          <dt>
            <code>copyright</code>
          </dt>
          <dd>
            <p>
              A copyright notice (formatted according to the{' '}
              <a href="#ds3:FormatCopyrightNotice">copyright notice format</a>)
              required if the source is under copyright protection.
            </p>
            <p className="example">
              &copy; 2016{' '}
              <span className="organization">Nature Publishing Group</span>
            </p>
          </dd>
          <dt>
            <code>permission</code>
          </dt>
          <dd>
            <p>
              The text ‘with permission’, added if the source requires
              permission <em>and</em> permission to use the source has been
              obtained. <code>permission</code> typically comes after a
              copyright notice:
            </p>
            <p className="example">
              &copy; 2016{' '}
              <span className="organization">Nature Publishing Group</span>
              <code className="token">,</code> with permission
            </p>
          </dd>
        </dl>
        <p>
          When multiple sources (with their permissions) are present, they must
          be separated by semicolons (<code className="token">;</code>).
        </p>
        <ul className="example">
          <li>
            Data from<code className="token">:</code>{' '}
            <span className="cross-reference">
              <span className="resource">Supporting Dataset 1</span>
            </span>{' '}
            <code className="token">;</code>{' '}
            <span className="citation">Smith (2015)</span>
            <code className="token">,</code> with permission
            <code className="token">.</code>
          </li>
          <li>
            Reproduced from<code className="token">:</code>{' '}
            <span className="citation">Bogich (2016, fig. 1)</span>{' '}
            <code className="token">&copy;</code> 2016{' '}
            <span className="organization">Nature Publishing Group</span>
            <code className="token">,</code> with permission
            <code className="token">.</code>
          </li>
          <li>
            Figure from<code className="token">:</code>
            <span className="citation">Regal (2012, fig. 2)</span>{' '}
            <code className="token">&copy;</code> 2012{' '}
            <span className="person">
              Regal<code className="token">,</code> Brian{' '}
              <code className="token">“</code>Dr. Brian Regal
              <code className="token">
                ”
              </code> <code className="token">,</code> with permission
            </span>{' '}
            <code className="token">;</code>{' '}
            <span className="citation">Bogich (2016, fig. 1)</span>{' '}
            <code className="token">&copy;</code> 2016{' '}
            <span className="organization">Nature Publishing Group</span>
            <code className="token">,</code> with permission{' '}
            <code className="token">.</code>
          </li>
        </ul>
        <ul className="example">
          <li>
            Code from<code className="token">:</code>{' '}
            <span className="cross-reference">
              <span className="resource">Supporting Code 1</span>
            </span>{' '}
            <code className="token">;</code>{' '}
            <span className="citation">Guerin and Lowe (2015)</span>
            <code className="token">.</code>
          </li>
          <li>
            Data from<code className="token">:</code>{' '}
            <span className="citation">Botta, Moat, and Preis (2015)</span>{' '}
            <code className="token">&copy;</code> 2015{' '}
            <span className="person">Botta, Federico “Federico Botta”</span>{' '}
            <code className="token">&amp;</code>{' '}
            <span className="person">
              Moat, Helen (Susannah) “Helen Susannah Moat”
            </span>{' '}
            <code className="token">&amp;</code>{' '}
            <span className="person">Preis, Tobias “Tobias Preis”</span>
            <code className="token">,</code> with permission
            <code className="token">.</code>
          </li>
          <li>
            Photograph courtesy of<span className="token">:</span>{' '}
            <span className="organization">Ford Motor Company</span>
            <span className="token">.</span>
          </li>
          <li>
            Data courtesy of<span className="token">:</span>{' '}
            <span className="person">
              Regal<code className="token">,</code> Brian{' '}
              <code className="token">“</code>Dr. Brian Regal
              <code className="token">”</code> <code className="token">(</code>
              Cryptozoology<code className="token"> &lt; </code>Kean University{' '}
              <code className="token"> - </code> Union
              <code className="token">,</code> NJ
              <code className="token">,</code> USA
              <code className="token">)</code>
            </span>
            .
          </li>
        </ul>
      </aside>
    );
  }
}

FormatResourceSourcesAndPermissions.ds3Id = `ds3:${
  FormatResourceSourcesAndPermissions.name
}`;
