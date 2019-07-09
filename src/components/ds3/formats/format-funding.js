import React from 'react';

export default class FormatFunding extends React.Component {
  render() {
    return (
      <aside id={FormatFunding.ds3Id} className="format">
        <h4>Funding Format</h4>
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
              The subjects (recipients) of a source of funding. Subject(s) can
              be:
            </p>
            <ul>
              <li>The work, in which case the subject must be 'The work'.</li>
              <li>
                Part of the work (such a dataset). Part of the work are
                represented by their caption label. If several parts are
                mentioned, they must be separated by semicolon (<code className="token">
                  ;
                </code>). Caption labels must be inserted using the built-in{' '}
                <span className="ms-feature">Cross-reference</span> feature of
                Microsoft Word.
              </li>
              <li>
                One or several contributors of the work represented by their
                display name and separated by semicolon (<code className="token">
                  ;
                </code>). Contributor display names must be inserted with the
                built-in <span className="ms-feature">Cross-reference</span>{' '}
                feature (<a href="#bookmark-author-display-name">
                  see author list section
                </a>). The words "<code>The authors</code>", "<code>
                  The contributors
                </code>", "<code>The authors and contributors</code>" (or their
                singular versions) can be used as valid subjects instead of the
                full list of the work's authors and contributors.
              </li>
              <li>
                One or several organizations (from the affiliation list)
                identified by a bookmarked part of the organization trail
                (typically the organization short name or acronym). Organization
                identifiers must be separated by semicolon (<code className="token">
                  ;
                </code>) and inserted with the built-in{' '}
                <span className="ms-feature">Cross-reference</span> feature of
                Microsoft Word (<a href="#affiliation-list">
                  see affiliation list section
                </a>).
              </li>
            </ul>
          </dd>
          <dt>
            <code>predicate</code>
          </dt>
          <dd>
            <p>
              A clause terminated by a colon (<code className="token">:</code>)
              specifying the relationship between the subject(s) and object(s)
              of the source of funding.
            </p>
            <ul className="example">
              <li>
                <span className="predicate">
                  was funded by<code className="token">:</code>
                </span>
              </li>
              <li>
                <span className="predicate">
                  was partially funded by<code className="token">:</code>
                </span>
              </li>
              <li>
                <span className="predicate">
                  received support from<code className="token">:</code>
                </span>
              </li>
            </ul>
          </dd>
          <dt>
            <code>object(s)</code>
          </dt>
          <dd>
            <p>
              A list of organizations (funding sources), formatted according to
              the <a href="#ds3:FormatOrganization">organization format</a>,
              separated by semicolons (<code className="token">;</code>)
              followed by either:
            </p>
            <ul>
              <li>
                A slash (<code className="token"> / </code>) followed by a list
                of awards (formatted according to the{' '}
                <a href="#format-award">award format</a> described below),
                separated by semicolons (<code className="token">;</code>), and
                terminated with a dot (<code className="token">.</code>).
              </li>
              <li>
                Or, a dot (<code className="token">.</code>), when no awards are
                present.
              </li>
            </ul>
            <p>
              When multiple organizations and multiple awards are present
              simultaneously, it implies that each award was provided by all the
              organizations.
            </p>
          </dd>
        </dl>
        <ul className="example">
          {}
          <li>
            <span className="subject">The work</span>{' '}
            <span className="predicate">
              was funded by<code className="token">:</code>
            </span>
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
            <code className="token">/ </code>
            <span className="award">
              award number 0553202 <code className="token">"</code>SGER: First
              Stages of Exploratory Development of HyperScope<code className="token">
                "
              </code>
            </span>
            <code className="token">.</code>
          </li>
          <li>
            <span className="subject">The work</span>{' '}
            <span className="predicate">
              was funded by<code className="token">:</code>
            </span>
            <span className="organization">
              Programme FP7-ICT-2013.8.1<code className="token"> &lt; </code>Information
              and Communication Technologies <code className="token">(</code>ICT<code className="token">
                )
              </code>
              <code className="token">&lt;</code> European Commission' Seventh
              Framework Programme <code className="token">(</code>FP7<code className="token">
                )
              </code>
            </span>
            <code className="token"> / </code>{' '}
            <span className="award">Grant agreement number 611383</span>
            <code className="token">.</code>
          </li>
          <li>
            <span className="subject">The work</span>{' '}
            <span className="predicate">
              was funded by<code className="token">:</code>
            </span>
            <span className="organization">
              Science and Technology Directorate<code className="token">
                {' '}
                &lt;{' '}
              </code>US Department of Homeland Security{' '}
              <code className="token">
                (
              </code>DHS<code className="token">)</code>
              <code className="token">;</code> Fogarty International Center<code className="token">
                {' '}
                &lt;{' '}
              </code>National Institute of Health{' '}
              <code className="token">
                (
              </code>NIH<code className="token">)</code>
            </span>
            <code className="token"> / </code>{' '}
            <span className="award">3R01TW005869-06S1</span>{' '}
            <code className="token">"</code>American Recovery and Reinvestment
            Act award <code className="token">(</code>ARRA<code className="token">
              )
            </code>
            <code className="token">"</code> <code className="token">.</code>
          </li>
          <li>
            <span className="subject">The work</span>{' '}
            <span className="predicate">
              was funded by<code className="token">:</code>
            </span>
            <span className="organization">
              National Research Program<code className="token"> &lt; </code>Ministry
              of Science and Technology of the People´s Republic of China
            </span>
            <code className="token"> / </code>{' '}
            <span className="award">
              2010CB530300 <code className="token">;</code> 2012CB955501<code className="token">
                ;
              </code>{' '}
              2012AA12A407
            </span>
            <code className="token">.</code>
          </li>
          {}
          <li>
            <span className="cross-reference">
              <span className="resource">Supporting Dataset 1</span>
            </span>{' '}
            <span className="predicate">
              was funded by<code className="token">:</code>
            </span>{' '}
            <span className="organization">
              Science and Technology Directorate<code className="token">
                {' '}
                &lt;{' '}
              </code>Department of Homeland Security{' '}
              <code className="token">
                (
              </code>DHS<code className="token">)</code>
            </span>
            <code className="token"> / </code>{' '}
            <span className="award">contract HSHQDC-12-C-00058</span>
            <code className="token">.</code>
          </li>
          {}
          <li>
            <span className="cross-reference">
              <span className="organization">
                Laboratoire d'Excellence "Integrative Biology of Emerging
                Infectious Diseases"
              </span>
            </span>{' '}
            <span className="predicate">
              received funding from<code className="token">:</code>
            </span>{' '}
            <span className="organization">
              Investissement d'Avenir program<code className="token">
                {' '}
                &lt;{' '}
              </code>Agence nationale de la recherche{' '}
              <code className="token">
                (
              </code>ANR<code className="token">)</code>
            </span>
            <code className="token"> / </code>{' '}
            <span className="award">grant number ANR-10-LABX-62-IBEID</span>
            <code className="token">.</code>
          </li>
          <li>
            <span className="cross-reference">
              <span className="organization">NYU</span>
            </span>{' '}
            <span className="predicate">
              received funding from<code className="token">:</code> Bill &amp;
              Melinda Gates Foundation
            </span>
            <code className="token"> / </code>{' '}
            <span className="award">
              OPP38631_01 <code className="token">"</code>Collaboration for AIDS
              Vaccine Discovery Grant <code className="token">(</code>CAVD<code className="token">
                )
              </code>
              <code className="token">"</code>
            </span>
            <code className="token">.</code>
          </li>
          {}
          <li>
            <span className="cross-reference">
              <span className="person">Prof. James P Sullivan, MD</span>
            </span>
            <code className="token">;</code>{' '}
            <span className="cross-reference">
              <span className="person">Douglas Carl Engelbart</span>
            </span>{' '}
            <span className="predicate">
              were supported by<code className="token">:</code>
            </span>{' '}
            <span className="organization">
              RAPIDD program<code className="token"> &lt; </code>Science and
              Technology Directorate<code className="token"> &lt; </code>Department
              of Homeland Security
            </span>
            <code className="token">;</code>{' '}
            <span className="organization">
              Fogarty International Center<code className="token"> &lt; </code>National
              Institute of Health <code className="token">(</code>NIH<code className="token">
                )
              </code>
            </span>
            <code className="token">.</code>
          </li>
          <li>
            <span className="person cross-reference">Paul T Conduit</span>
            <code className="token">;</code>{' '}
            <span className="person cross-reference">Timothy T Weil</span>{' '}
            <span className="predicate">
              were supported by<code className="token">:</code>
            </span>{' '}
            <span className="organization">University of Cambridge</span>{' '}
            <code className="token">/</code>{' '}
            <span className="award">
              RG78799 <code className="token">"</code>Isaac Newton Trust
              Research Grant<code className="token">"</code>
              <code className="token">,</code> awarded to{' '}
              <span className="person cross-reference">Timothy T Weil</span>
            </span>{' '}
            <code className="token">.</code>
          </li>
        </ul>
      </aside>
    );
  }
}
