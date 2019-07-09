import React from 'react';

export default class FormatOrganization extends React.Component {
  render() {
    return (
      <aside id={FormatOrganization.ds3Id} className="format">
        <h4>Organization Format</h4>
        <p className="pattern">
          <code>
            organization trail<span className="token"> - </span>locality<span className="token">
              ,
            </span>{' '}
            region<span className="token">,</span> country
          </code>
        </p>
        <p>where:</p>
        <dl>
          <dt>
            <code>organization trail</code>
          </dt>
          <dd>
            <p>
              A list of organization unit names starting from the most specific
              unit of interest (such as a laboratory, a department, or a
              program) and going up to the parent organization, separating each
              unit name with a left angle bracket character (<code className="token">
                &lt;{' '}
              </code>) with a white space on each side. When a unit has a
              commonly used short name (such as an acronym), it can be included
              in parentheses <code className="token">()</code>
              right after the unit name.
            </p>
            <p className="eg">
              <span className="organization">
                Laboratory 302<code className="token"> &lt; </code>
                Department of Web Sciences<code className="token">
                  {' '}
                  &lt;{' '}
                </code>New York University <code className="token">
                  (
                </code>NYU<code className="token">)</code>
              </span>
            </p>
          </dd>
          <dt>
            <code>locality</code>
          </dt>
          <dd>
            The <code>locality</code> (typically a city) where the organization
            is located (<span className="eg">Paris</span>). If the{' '}
            <code>locality</code> is omitted (or unknown), the{' '}
            <code>region</code> (if any) must be omitted too (only the{' '}
            <code>country</code> is then specified).
          </dd>
          <dt>
            <code>region</code>
          </dt>
          <dd>
            The region (if any, typically a state) where the organization is
            located (<span className="eg">CA</span>).
          </dd>
          <dt>
            <code>country</code>
          </dt>
          <dd>
            The country where the organization is located (<span className="eg">
              Brazil
            </span>).
          </dd>
        </dl>
        <p>
          Use a hyphen with white spaces on both sides (<code className="token">
            {' '}
            -{' '}
          </code>) to separate the organization trail from the location
          information (locality, region, country).
        </p>
        <p>
          If the organization trail is non ambiguous (or if it contains a
          hyperlink), the location may be omitted.
        </p>
        <p>
          When possible, hyperlink each part of the organization trail to their
          webpage or canonical URL.
        </p>
        <ul className="example">
          <li>
            <span className="organization">
              Augmentation Research Center<code className="token"> &lt; </code>SRI
              International <code className="token">(</code>SRI<code className="token">
                )
              </code>
              <code className="token"> - </code>Menlo Park<code className="token">
                ,
              </code>{' '}
              CA<code className="token">,</code> USA
            </span>
          </li>
          <li>
            <span className="organization">
              Department of Biology<code className="token"> &lt; </code>New York
              University <code className="token">(</code>NYU<code className="token">
                )
              </code>
              <code className="token"> - </code>New York<code className="token">
                ,
              </code>{' '}
              NY<code className="token">,</code> USA
            </span>
          </li>
          <li>
            <span className="organization">
              UMR ENS-CNRS-UPMC 8640<code className="token"> &lt; </code>Department
              of Chemistry<code className="token"> &lt; </code>École Normale
              Supérieure <code className="token">(</code>ENS<code className="token">
                )
              </code>
              <code className="token"> - </code>Paris<code className="token">
                ,
              </code>{' '}
              France
            </span>
          </li>
          <li>
            <span className="organization">ATLAS Collaboration</span>
          </li>
          <li>
            <span className="organization">
              Pfizer Inc<code className="token"> - </code>New York<code className="token">
                ,
              </code>{' '}
              NY<code className="token">,</code> USA
            </span>
          </li>
          <li>
            <span className="organization">
              Collaborative systems<code className="token"> &lt; </code>Division
              of Information &amp; Intelligent Systems{' '}
              <code className="token">(</code>IIS<code className="token">
                )
              </code>
              <code className="token"> &lt; </code>National Science Foundation{' '}
              <code className="token">(</code>NSF<code className="token">
                )
              </code>
            </span>
          </li>
          <li>
            <span className="organization">
              National Research Program<code className="token"> &lt; </code>Ministry
              of Science and Technology of the People´s Republic of China
            </span>
          </li>
          <li>
            <span className="organization">
              College of Earth, Ocean, and Atmospheric Sciences<code className="token">
                {' '}
                &lt;{' '}
              </code>Oregon State University <code className="token">
                (
              </code>OSU<code className="token">)</code>
              <code className="token">
                {' '}
                -{' '}
              </code>Corvallis<code className="token">
                ,
              </code> OR<code className="token">,</code> USA
            </span>
          </li>
        </ul>
      </aside>
    );
  }
}

FormatOrganization.ds3Id = `ds3:${FormatOrganization.name}`;
