import React from 'react';
import Schema from '../schema';
import Customize from '../../../hoc/customize';

class Tables extends React.Component {
  render() {
    return (
      <section id={Tables.ds3Id} className="style-guide__group">
        <h3>Tables</h3>
        <p className="warning">
          Tabular data should be inserted as a dataset (e.g as an xlsx or csv
          file) and not as a table. See{' '}
          <a href="#ds3:DataAndMedia">Data and Media</a> section for
          instructions on inserting a dataset.
        </p>
        <section id="simple-table-layout">
          <h4>Simple table layout</h4>
          <figure>
            <figcaption>
              <p>A simple table layout is adapted for tables containing:</p>
              <ul>
                <li>An optional header row (first row of the table).</li>
                <li>An optional header column (first column of the table).</li>
                <li>An optional summary row (last row of the table).</li>
              </ul>
            </figcaption>
            <div className="example">
              <table>
                <caption>
                  <a href="http://journals.plos.org/plosone/article?id=10.1371/journal.pone.0115069">
                    Average number of errors
                  </a>{' '}
                  made using Microsoft Word or Latex.
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Type of Errors</th>
                    <th scope="col">Word</th>
                    <th scope="col">Latex</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Grammatical</th>
                    <td>6.9</td>
                    <td>9.2</td>
                  </tr>
                  <tr>
                    <th scope="row">Typos</th>
                    <td>9.7</td>
                    <td>17.1</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th scope="row">Total</th>
                    <td>16.6</td>
                    <td>26.3</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </figure>
          <p>To create a table following the simple table layout:</p>
          <ol className="style-guide__steps">
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <p>Insert a new table:</p>
                  <ol>
                    <li>Click where the table should be inserted.</li>
                    <li>
                      Go to the <span className="ms-label">Insert</span> tab of
                      the ribbon and click on{' '}
                      <span className="ms-button">Table</span>.
                    </li>
                    <li>
                      Select one of the possible options from the drop-down menu
                      to specify the{' '}
                      <span className="ms-label">Number of rows</span> and{' '}
                      <span className="ms-label">Number of columns</span> of the
                      table.
                    </li>
                  </ol>
                </figcaption>
                <img
                  src="/images/simple-table-1.png"
                  alt="insert a 3 column by 4 row table using built in insert table tool"
                />
              </figure>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <p>
                    Use the options available in the{' '}
                    <span className="ms-label">Table Design</span> tab of the
                    ribbon to specify (when needed):
                  </p>
                  <ul>
                    <li>
                      A <span className="ms-label">Header Row</span> (first
                      row).
                    </li>
                    <li>
                      A <span className="ms-label">First Column</span> of header
                      cells.
                    </li>
                    <li>
                      A summary row (last row, labeled{' '}
                      <span className="ms-label">Total Row</span> in Microsoft
                      Word).
                    </li>
                    <li>
                      A table design.{' '}
                      <span className="ms-value">Grid Table 5 Dark</span> is
                      recommended as it improves the visibility of the table
                      elements (header row, first column, total row) selected.
                    </li>
                  </ul>
                </figcaption>
                <img
                  src="/images/simple-table-2.png"
                  alt="select a table design and tick all the required table heading elements"
                />
              </figure>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <p>Fill in the table headers cells and data.</p>
                </figcaption>
                <img src="/images/simple-table-3.png" alt="fill in data" />
              </figure>
            </li>
          </ol>
        </section>

        <section id="table-caption">
          <h4>Table caption</h4>
          <p>
            Insert a caption for the table using the built-in{' '}
            <span className="ms-feature">Caption</span> feature of Microsoft
            Word:
          </p>
          <ol className="style-guide__steps">
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <ol>
                    <li>
                      Go to the <span className="ms-label">References</span> tab
                      of the ribbon and click on{' '}
                      <span className="ms-button">Insert Caption</span>.
                    </li>
                    <li>
                      <p>
                        In the <span className="ms-label">Caption</span>{' '}
                        dialogue window:
                      </p>
                      <ol>
                        <li>
                          Select the caption{' '}
                          <span className="ms-label">label</span>. When
                          possible, use the value{' '}
                          <span className="ms-value">Table</span>, however, if a
                          custom label is required (such as ‘Matrix’, ‘Summary’,
                          or ‘Data Table’), create a new custom label by
                          clicking on the{' '}
                          <span className="ms-button">New Label...</span>{' '}
                          button. The created custom label will be available to
                          reuse later.
                        </li>
                        <li>
                          <p>
                            Add the caption content (if any) in the{' '}
                            <span className="ms-label">Caption</span> field
                            after the pre-populated label and number (e.g.
                            ‘Table 1’). Note that the number is automatically
                            generated and corresponds to the order of appearance
                            of the table in the document.
                          </p>
                          <p className="warning">
                            The <span className="ms-label">Caption</span> field
                            may truncate the content of a long caption. In this
                            case, click on <span className="ms-button">OK</span>{' '}
                            to insert the caption (truncated) and add the
                            remaining text directly from the document (see{' '}
                            <a href="#long-table-caption">next step</a>).
                          </p>
                        </li>
                        <li>
                          Click on <span className="ms-button">OK</span>
                        </li>
                      </ol>
                    </li>
                  </ol>
                </figcaption>
                <img
                  src="/images/table-caption-1.png"
                  alt="Use built-in insert caption too add a table caption"
                />
              </figure>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>The Table now has a caption.</figcaption>
                <img src="/images/table-caption-2.png" alt="Insert table" />
              </figure>
            </li>
            <li className="style-guide__step" id="long-table-caption">
              <figure>
                <figcaption>
                  <p>
                    To add (or edit) caption content directly from the document:
                  </p>
                  <ol>
                    <li>
                      Place the cursor at the end of the inserted caption and
                      add the required additional caption text.
                    </li>
                    <li>
                      <p className="warning">
                        If the caption text (or part of it) is no longer in{' '}
                        <span className="ms-style">Caption</span> style (as it
                        is the case for ‘of Xanadu growth’ in the example
                        figure), select the entire caption, and apply the{' '}
                        <span className="ms-style">Caption</span> style (see{' '}
                        <a href="#ds3:SectionsAndHeadings">
                          Sections and Headings
                        </a>{' '}
                        for more information on how to apply styles). Caption
                        text can lose the{' '}
                        <span className="ms-style">Caption</span> style when
                        content is copied and pasted from other content, or new
                        lines are inserted.
                      </p>
                    </li>
                  </ol>
                </figcaption>
                <img
                  src="/images/table-caption-3.png"
                  alt="A table long caption is added above the table"
                />
              </figure>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <p>
                    Add metadata about the table (authors, contributors,
                    license, sources, etc.) at the end of the caption following
                    the instructions defined in the{' '}
                    <a href="#ds3:ResourceMetadata">resource metadata</a>{' '}
                    section.
                  </p>
                  <p className="example">
                    Author<code className="token">:</code>
                    <span className="person cross-reference">
                      Prof. James P Sullivan, MD
                    </span>{' '}
                    <code className="token">(</code>
                    <span className="cross-reference organization">NYU</span>
                    <code className="token">)</code>
                    <code className="token">.</code> Data from
                    <code className="token">:</code>{' '}
                    <span className="citation">
                      Perez et al. (2012, table 1)
                    </span>
                    <code className="token">.</code> Code from
                    <code className="token">:</code>{' '}
                    <span className="cross-reference">
                      <span className="resource">Supporting Code 1</span>
                    </span>
                    <code className="token">.</code>
                  </p>
                </figcaption>
                <img
                  src="/images/table-caption-4.png"
                  alt="add credit line to table caption"
                />
              </figure>
            </li>
          </ol>
        </section>

        <section id="table-footnotes">
          <h4>Table footnotes</h4>
          <p>
            Table footnotes provide additional information on the table
            contents. Use the built-in{' '}
            <span className="ms-feature">Footnote</span> feature to add
            footnotes to tables and use the built-in{' '}
            <span className="ms-feature">Cross-reference</span> feature to
            insert repeated references to existing footnotes.
          </p>
          <p>
            Add table footnotes using the built-in{' '}
            <span className="ms-feature">Footnote</span> feature of Microsoft
            Word:
          </p>
          <ol className="style-guide__steps">
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  Place the cursor after the text in the table where a footnote
                  should be inserted (here after the cell value located at the
                  second row and second column).
                </figcaption>
                <img
                  src="/images/insert-table-footnote-1.png"
                  alt="place cursor where footnote needs to be added"
                />
              </figure>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  Go to the <span className="ms-label">Insert</span> tab of the
                  ribbon and click on{' '}
                  <span className="ms-button">Insert Footnote</span>.
                </figcaption>
                <img
                  src="/images/insert-table-footnote-2.png"
                  alt="insert footnote"
                />
              </figure>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <p>
                    Type the footnote text after the automatically inserted
                    footnote number or symbol (here{' '}
                    <code>
                      <sup className="footnote">1</sup>
                    </code>
                    ).
                  </p>
                  <p className="example">
                    <code>
                      <sup className="footnote">1</sup>
                    </code>{' '}
                    p-value &lt 0.05, statistically significant.
                  </p>
                  <p className="warning">
                    Do not type any body text below the footnotes. Only footnote
                    text should appear below the footnote section.
                  </p>
                </figcaption>
                <img
                  src="/images/insert-table-footnote-3.png"
                  alt="type footnote text"
                />
              </figure>
            </li>
          </ol>
          <p>
            To reference an existing footnote, use the built-in{' '}
            <span className="ms-feature">Cross-reference</span> feature of
            Microsoft Word:
          </p>
          <ol className="style-guide__steps">
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <ol>
                    <li>
                      Place the cursor after the text in the table where a
                      reference to an existing footnote needs to be added (here
                      a reference to the footnote{' '}
                      <code>
                        <sup className="footnote">1</sup>
                      </code>{' '}
                      will be inserted after the content of the cell located in
                      the third column of the third row).
                    </li>
                    <li>
                      Go to the <span className="ms-label">Insert</span> tab of
                      the ribbon and click on{' '}
                      <span className="ms-button">Cross-reference</span>.
                    </li>
                    <li>
                      <p>
                        In the new{' '}
                        <span className="ms-label">Cross-reference</span>{' '}
                        dialogue window:
                      </p>
                      <ol>
                        <li>
                          Set the{' '}
                          <span className="ms-label">Reference type</span> to{' '}
                          <span className="ms-value">Footnote</span>
                        </li>
                        <li>
                          Set{' '}
                          <span className="ms-label">Insert reference to</span>{' '}
                          to{' '}
                          <span className="ms-value">
                            Footnote number (formatted)
                          </span>{' '}
                          so that footnote numbers are inserted as superscripts
                          (e.g.,{' '}
                          <code>
                            <sup className="footnote">1</sup>
                          </code>
                          ).
                        </li>
                        <li>
                          Under
                          <span className="ms-label">For which footnote</span>,
                          select the footnote to reference (
                          <code>
                            <sup className="footnote">1</sup>
                          </code>{' '}
                          here).
                        </li>
                        <li>
                          Make sure to leave the{' '}
                          <span className="ms-label">insert as hyperlink</span>{' '}
                          option checked.
                        </li>
                        <li>
                          Click on <span className="ms-button">Insert</span>.
                        </li>
                      </ol>
                    </li>
                  </ol>
                </figcaption>
                <img
                  src="/images/insert-table-footnote-4.png"
                  alt="Insert repeated footnotes as cross-reference"
                />
              </figure>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  A new reference to the footnote number, or symbol (here{' '}
                  <code>
                    <sup className="footnote">1</sup>
                  </code>
                  ) is now present in the table.
                </figcaption>
                <img
                  src="/images/insert-table-footnote-5.png"
                  alt="The cross-referenced footnote appears in the table"
                />
              </figure>
            </li>
          </ol>
          <p className="warning">
            Avoid using stylistic elements in the table content, and use table{' '}
            <span className="ms-feature">footnotes</span> instead to add
            specific semantic to table values. For instance, instead of
            indicating special table values by coloring them in green, add
            footnotes next to these values, and specify the values&apos; special
            meaning in the footnote text (see figure above).
          </p>
        </section>

        <section id="complex-table-layout">
          <h4>Complex table layout</h4>
          <section id="table-with-multiple-sections">
            <h5>Table with multiple sections</h5>
            <p>
              Tables with multiple sections are a common pattern in scholarly
              communication. These tables deviate from the{' '}
              <a href="#simple-table-layout">simple table layout</a> because
              they usually have:
            </p>
            <ul>
              <li>
                More complex table headers, often spanning across multiple
                contiguous rows and containing merged cells.
              </li>
              <li>Multiple sections within the table body.</li>
            </ul>
            <div className="example">
              <table>
                <caption>
                  Social determinants of Anchilles fever vaccination
                </caption>
                <colgroup />
                <colgroup span={2} />
                <colgroup span={2} />
                <thead>
                  <tr>
                    <th scope="col" rowSpan={2}>
                      Variables
                    </th>
                    <th scope="colgroup" colSpan={2}>
                      Age 65-79 years
                    </th>
                    <th scope="colgroup" colSpan={2}>
                      Age &ge; 80 years
                    </th>
                  </tr>
                  <tr>
                    <th scope="col">Vaccinated %</th>
                    <th scope="col">
                      <abbr title="standard deviation">SD</abbr>
                    </th>
                    <th scope="col">Vaccinated %</th>
                    <th scope="col">
                      <abbr title="standard deviation">SD</abbr>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr aria-level={1}>
                    <th scope="row">Traveler</th>
                    <td>49.3</td>
                    <td>3.2</td>
                    <td>60.2</td>
                    <td>2.1</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <th scope="rowgroup" colSpan={5} aria-level={1}>
                      Gender
                    </th>
                  </tr>
                  <tr aria-level={2}>
                    <th scope="row">Male</th>
                    <td>55.9</td>
                    <td>5.1</td>
                    <td>60</td>
                    <td>7.3</td>
                  </tr>
                  <tr aria-level={2}>
                    <th scope="row">Female</th>
                    <td>54.8</td>
                    <td>2.8</td>
                    <td>59.3</td>
                    <td>0.5</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <th scope="rowgroup" colSpan={5} aria-level={1}>
                      Income
                    </th>
                  </tr>
                  <tr aria-level={2}>
                    <th scope="row">Low</th>
                    <td>45.2</td>
                    <td>6.3</td>
                    <td>49.2</td>
                    <td>6.2</td>
                  </tr>
                  <tr aria-level={2}>
                    <th scope="row">Medium</th>
                    <td>46.3</td>
                    <td>2.3</td>
                    <td>50.1</td>
                    <td>0.3</td>
                  </tr>
                  <tr aria-level={2}>
                    <th scope="row">High</th>
                    <td>54.2</td>
                    <td>2.2</td>
                    <td>57.4</td>
                    <td>4.6</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th scope="row">Sample size</th>
                    <td colSpan={2}>875</td>
                    <td colSpan={2}>932</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <p>To create a table with multiple sections:</p>
            <ol className="style-guide__steps">
              <li className="style-guide__step">
                <figure>
                  <figcaption>
                    <p>Insert a new table:</p>
                    <ol>
                      <li>Click where the table should be inserted.</li>
                      <li>
                        Go to the <span className="ms-label">Insert</span> tab
                        of the ribbon and click on{' '}
                        <span className="ms-button">Table</span>.
                      </li>
                      <li>
                        Select one of the possible options from the drop-down
                        menu to specify the{' '}
                        <span className="ms-label">Number of rows</span> and{' '}
                        <span className="ms-label">Number of columns</span> of
                        the table.
                      </li>
                    </ol>
                  </figcaption>
                  <img
                    src="/images/multi-section-table-1.png"
                    alt="insert a table using built in insert table tool"
                  />
                </figure>
              </li>
              <li className="style-guide__step">
                <figure>
                  <figcaption>
                    <p>
                      Use the options available in the{' '}
                      <span className="ms-label">Table Design</span> tab of the
                      ribbon to specify (when needed):
                    </p>
                    <ul>
                      <li>
                        A <span className="ms-label">Header Row</span> (first
                        row).
                      </li>
                      <li>
                        A <span className="ms-label">First Column</span> of
                        header cells.
                      </li>
                      <li>
                        A summary row (last row, labeled{' '}
                        <span className="ms-label">Total Row</span> in Microsoft
                        Word).
                      </li>
                      <li>
                        A table design.{' '}
                        <span className="ms-value">Grid Table 5 Dark</span> is
                        recommended as it improves the visibility of the table
                        elements (header row, first column, total row) selected.
                      </li>
                    </ul>
                  </figcaption>
                  <img
                    src="/images/multi-section-table-2.png"
                    alt="select a table design and tick all the required table heading elements"
                  />
                </figure>
              </li>
              <li className="style-guide__step">
                <figure>
                  <figcaption>
                    <p>
                      To create{' '}
                      <strong>multiple contiguous table header rows</strong>:
                    </p>
                    <ol>
                      <li>
                        Select all the rows that need to become header rows.
                      </li>
                      <li>
                        Click on the{' '}
                        <span className="ms-button">Repeat header rows</span>{' '}
                        button from the <span className="ms-label">Layout</span>{' '}
                        tab of the ribbon.
                      </li>
                    </ol>
                    <p>
                      If a table design was selected, the header styles and
                      background shading will be applied to all the header row
                      cells.
                    </p>
                  </figcaption>
                  <img
                    src="/images/multi-section-table-3.png"
                    alt="repeat header rows"
                  />
                </figure>
              </li>
              <li className="style-guide__step" id="merge-table-cells">
                <figure>
                  <figcaption>
                    <p>
                      <strong>Merge cells</strong> that span multiple rows or
                      columns:
                    </p>
                    <ol>
                      <li>Highlight the cells to be merged.</li>
                      <li>
                        Click on the{' '}
                        <span className="ms-button">Merge cells</span> button in
                        the <span className="ms-label">Layout</span> tab of the
                        ribbon (or right click and select{' '}
                        <span className="ms-value">Merge cells</span>).
                      </li>
                    </ol>
                  </figcaption>
                  <img
                    src="/images/multi-section-table-4.png"
                    alt="merge cell"
                  />
                </figure>
              </li>
              <li className="style-guide__step">
                <figure>
                  <figcaption>
                    <p>
                      Add <strong>sections</strong> to the table by indenting
                      the headings of the first column:
                    </p>
                    <p>
                      For instance, here, the indentation in front of ‘Male’ and
                      ‘Female’ marks their belonging to the ‘Gender’ section.
                    </p>
                    <p />
                    <pre>
                      Gender{'\n'}
                      <code className="token">{'    '}</code>Male{'\n'}
                      <code className="token">{'    '}</code>Female{'\n'}
                      {'                        '}
                    </pre>
                    <p />
                    <ul>
                      <li>
                        <p>
                          To indent a heading, use the{' '}
                          <span className="ms-button">increase indent</span>{' '}
                          button (in the <span className="ms-label">Home</span>{' '}
                          tab of the ribbon).
                        </p>
                        <p>
                          If additional levels of subheadings are required, use
                          multiple indents (clicking several time on the{' '}
                          <span className="ms-button">increase indent</span>{' '}
                          button).
                        </p>
                      </li>
                      <li>
                        For sections with headers that span multiple columns
                        (like ‘Gender’ here), merge cells across multiple
                        columns (following the instructions of the{' '}
                        <a href="#merge-table-cells">previous step</a>).
                      </li>
                    </ul>
                  </figcaption>
                  <img
                    src="/images/multi-section-table-5.png"
                    alt="merge cell"
                  />
                </figure>
              </li>
            </ol>
          </section>
          <section id="multiple-summary-rows">
            <h5>Table with multiple summary rows</h5>
            <p>
              Some tables require more than one summary row at the end of the
              table (for instance to specify sample sizes, averages, standard
              deviations, minima, maxima, median values, etc.).
            </p>
            <p>To include multiple summary rows:</p>
            <ol className="style-guide__steps">
              <li className="style-guide__step">
                <figure>
                  <figcaption>
                    <p>Insert a new table:</p>
                    <ol>
                      <li>Click where the table should be inserted.</li>
                      <li>
                        Go to the <span className="ms-label">Insert</span> tab
                        of the ribbon and click on{' '}
                        <span className="ms-button">Table</span>.
                      </li>
                      <li>
                        Select one of the possible options from the drop-down
                        menu to specify the{' '}
                        <span className="ms-label">Number of rows</span> and{' '}
                        <span className="ms-label">Number of columns</span> of
                        the table.
                      </li>
                    </ol>
                  </figcaption>
                  <img
                    src="/images/multi-summary-table-1.png"
                    alt="insert a table using built in insert table tool"
                  />
                </figure>
              </li>
              <li className="style-guide__step">
                <figure>
                  <figcaption>
                    <ol>
                      <li>
                        <p>
                          Use the options available in the{' '}
                          <span className="ms-label">Table Design</span> tab of
                          the ribbon to specify (when needed):
                        </p>
                        <ul>
                          <li>
                            A <span className="ms-label">Header Row</span>{' '}
                            (first row).
                          </li>
                          <li>
                            A <span className="ms-label">First Column</span> of
                            header cells.
                          </li>
                          <li>
                            A summary row (last row, labeled{' '}
                            <span className="ms-label">Total Row</span> in
                            Microsoft Word).
                          </li>
                          <li>
                            A table design.{' '}
                            <span className="ms-value">Grid Table 5 Dark</span>{' '}
                            is recommended as it improves the visibility of the
                            table elements (header row, first column, total row)
                            selected.
                          </li>
                        </ul>
                      </li>
                      <li>Add table data.</li>
                    </ol>
                  </figcaption>
                  <img
                    src="/images/multi-summary-table-2.png"
                    alt="select a table design and tick all the required table heading elements"
                  />
                </figure>
              </li>
              <li className="style-guide__step">
                <figure>
                  <figcaption>
                    <p>
                      If <strong>more than one summary row</strong> is needed at
                      the end of the table (here the last two rows should be
                      part of the summary rows):
                    </p>
                    <ol>
                      <li>
                        Select the last row in the table body (before the first
                        summary row).
                      </li>
                      <li>
                        <p>
                          In the <span className="ms-label">Table Design</span>{' '}
                          tab of the ribbon:
                        </p>
                        <ul>
                          <li>
                            Select the double border line style (
                            <span
                              style={{
                                display: 'inline-block',
                                width: '2em',
                                height: '1em',
                                borderBottom: '3px double black'
                              }}
                            />
                            ).
                          </li>
                          <li>
                            Apply the double border line style to the bottom
                            border only (click on the{' '}
                            <span className="ms-button">Borders</span> control
                            and select{' '}
                            <span className="ms-button">Bottom border</span>{' '}
                            from the drop-down menu).
                          </li>
                        </ul>
                      </li>
                    </ol>
                    <p className="warning">
                      Summary rows can only be added as one contiguous block of
                      cells and the end of the table.
                    </p>
                  </figcaption>
                  <img
                    src="/images/multi-summary-table-3.png"
                    alt="add bottom border to the table body"
                  />
                </figure>
              </li>
              <li className="style-guide__step">
                <figure>
                  <figcaption>
                    <p>
                      A double line border (
                      <span
                        style={{
                          display: 'inline-block',
                          width: '2em',
                          height: '1em',
                          borderBottom: '3px double black'
                        }}
                      />
                      ) is now present in the table, separating the summary rows
                      from the rest of the table.
                    </p>
                    <p>
                      Optionally, a background shading and font color can be
                      applied to all cells in the summary rows to better
                      differentiate them from the rest of the table:
                    </p>
                    <ol>
                      <li>Select the cells in the summary row to be styled.</li>
                      <li>
                        On the <span className="ms-label">Home</span> tab of the
                        ribbon, set the font color and background shading to
                        match existing summary row cells (white, and grey here).
                      </li>
                    </ol>
                  </figcaption>
                  <img
                    src="/images/multi-summary-table-4.png"
                    alt="style summary cells"
                  />
                </figure>
              </li>
              <li className="style-guide__step">
                <figure>
                  <figcaption>The table is now complete,</figcaption>
                  <img
                    src="/images/multi-summary-table-5.png"
                    alt="complete table"
                  />
                </figure>
              </li>
            </ol>
          </section>
          <section id="table-with-complex-header-cells">
            <h5>Table with complex header cells</h5>
            <p>
              Tables with complex header cells refer to tables with header cells
              that are not located in the first column (or first contiguous
              rows) of the table.
            </p>
            <p className="warning">
              Microsoft Word does not currently support table header cells not
              located in the first column cells or in the first contiguous rows.
              Therefore, creating a custom ‘Table Header Cell’ style is required
              before being able to style table with complex header cells.
            </p>
            <div className="example">
              <table>
                <caption>
                  Age started teleporting regularly versus adrenal stress
                  cause-specific rate ratio (RR) among urban and rural
                  population
                </caption>
                <colgroup />
                <colgroup />
                <colgroup />
                <colgroup span={2} />
                <thead>
                  <tr>
                    <th rowSpan={2} scope="col">
                      Population
                    </th>
                    <th rowSpan={2} scope="col">
                      Age
                    </th>
                    <th rowSpan={2} scope="col">
                      O<sub>2</sub> &mu;L/L
                    </th>
                    <th colSpan={2} scope="colgroup">
                      Adrenal stress
                    </th>
                  </tr>
                  <tr>
                    <th scope="col">Cases</th>
                    <th scope="col">
                      <abbr title="adrenal stress cause-specific rate ratio">
                        RR
                      </abbr>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="rowgroup" rowSpan={3}>
                      Urban
                    </th>
                    <th scope="row">&lt; 20</th>
                    <td>16.5</td>
                    <td>127</td>
                    <td>3.78</td>
                  </tr>
                  <tr>
                    <th scope="row">20-24</th>
                    <td>15.2</td>
                    <td>127</td>
                    <td>3.17</td>
                  </tr>
                  <tr>
                    <th scope="row">&ge; 25</th>
                    <td>12.6</td>
                    <td>96</td>
                    <td>2.23</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <th scope="rowgroup" rowSpan={3}>
                      Rural
                    </th>
                    <th scope="row">&lt; 20</th>
                    <td>15.1</td>
                    <td>271</td>
                    <td>2.91</td>
                  </tr>
                  <tr>
                    <th scope="row">20-24</th>
                    <td>13.6</td>
                    <td>275</td>
                    <td>2.45</td>
                  </tr>
                  <tr>
                    <th scope="row">&ge; 25</th>
                    <td>11.8</td>
                    <td>177</td>
                    <td>1.63</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th colSpan={2} scope="row">
                      Mean
                    </th>
                    <td>14.13</td>
                    <td>178</td>
                    <td>2.69</td>
                  </tr>
                  <tr>
                    <th colSpan={2} scope="row">
                      <abbr title="standard deviation">SD</abbr>
                    </th>
                    <td>1.77</td>
                    <td>77.4</td>
                    <td>0.75</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <p>
              First, create a custom style named{' '}
              <span className="ms-style">Table Header Cell</span>:
            </p>
            <figure>
              <figcaption>
                <ol>
                  <li>
                    On the <span className="ms-label">Home</span> tab of the
                    ribbon, click on the{' '}
                    <span className="ms-button">Styes Pane</span> control to
                    reveal the <span className="ms-label">Styles</span> side
                    bar.
                  </li>
                  <li>
                    In the <span className="ms-label">Styles</span> side bar,
                    click on <span className="ms-button">New Style...</span>
                  </li>
                </ol>
                <p>
                  In the <span className="ms-label">New Style</span> dialogue
                  window:
                </p>
                <ol>
                  <li>
                    Name the style{' '}
                    <span className="ms-style">Table Header Cell</span>, and set
                    the <span className="ms-label">Style type</span> to{' '}
                    <span className="ms-value">Character</span> (inline).
                  </li>
                  <li>
                    Activate the bold <strong className="ms-button">B</strong>{' '}
                    button in the <span className="ms-label">Formatting</span>{' '}
                    section so that table header cell can be seen easily.
                  </li>
                  <li>
                    Click on <span className="ms-button">OK</span>.
                  </li>
                </ol>
              </figcaption>
              <img
                src="/images/complex-table-2.png"
                alt="create the Table Header Cell style"
              />
            </figure>
            <p>Apply the newly created style to table header cells:</p>
            <ol className="style-guide__steps">
              <li className="style-guide__step">
                <figure>
                  <figcaption>
                    <p>Insert a new table:</p>
                    <ol>
                      <li>Click where the table should be inserted.</li>
                      <li>
                        Go to the <span className="ms-label">Insert</span> tab
                        of the ribbon and click on{' '}
                        <span className="ms-button">Table</span>.
                      </li>
                      <li>
                        Select one of the possible options from the drop-down
                        menu to specify the{' '}
                        <span className="ms-label">Number of rows</span> and{' '}
                        <span className="ms-label">Number of columns</span> of
                        the table.
                      </li>
                    </ol>
                  </figcaption>
                  <img
                    src="/images/complex-table-3.png"
                    alt="insert a table using built in insert table tool"
                  />
                </figure>
              </li>
              <li className="style-guide__step">
                <figure>
                  <figcaption>
                    <p>
                      Use the options available in the{' '}
                      <span className="ms-label">Table Design</span> tab of the
                      ribbon to specify (when needed):
                    </p>
                    <ul>
                      <li>
                        A <span className="ms-label">Header Row</span> (first
                        row).
                      </li>
                      <li>
                        A <span className="ms-label">First Column</span> of
                        header cells.
                      </li>
                      <li>
                        A summary row (last row, labeled{' '}
                        <span className="ms-label">Total Row</span> in Microsoft
                        Word).
                      </li>
                      <li>
                        A table design.{' '}
                        <span className="ms-value">Grid Table 5 Dark</span> is
                        recommended as it improves the visibility of the table
                        elements (header row, first column, total row) selected.
                      </li>
                    </ul>
                  </figcaption>
                  <img
                    src="/images/complex-table-4.png"
                    alt="select a table design and tick all the required table heading elements"
                  />
                </figure>
              </li>
              <li className="style-guide__step">
                <figure>
                  <figcaption>
                    <ol>
                      <li>Add the content of the header cells to the table.</li>
                      <li>
                        <p>
                          Merge cells for headers cells that span multiple rows:
                        </p>
                        <ol>
                          <li>Highlight the cells to be merged.</li>
                          <li>
                            Click on the{' '}
                            <span className="ms-button">Merge cells</span>{' '}
                            button in the{' '}
                            <span className="ms-label">Layout</span> tab of the
                            ribbon (or right click and select{' '}
                            <span className="ms-value">Merge cells</span>).
                          </li>
                        </ol>
                      </li>
                    </ol>
                  </figcaption>
                  <img
                    src="/images/complex-table-5.png"
                    alt="add column header data"
                  />
                </figure>
              </li>
              <li className="style-guide__step">
                <figure>
                  <figcaption>
                    <p>Extend the header row to the second row:</p>
                    <ol>
                      <li>
                        Select all the rows that need to become part of the
                        extended header rows.
                      </li>
                      <li>
                        Click on the{' '}
                        <span className="ms-button">Repeat header rows</span>{' '}
                        button in the <span className="ms-label">Layout</span>{' '}
                        tab of the ribbon.
                      </li>
                    </ol>
                  </figcaption>
                  <img
                    src="/images/complex-table-6.png"
                    alt="apply table header style"
                  />
                </figure>
              </li>
              <li className="style-guide__step">
                <figure>
                  <figcaption>
                    <p>Style the remaining header cells:</p>
                    <p>
                      In the <span className="ms-label">Home</span> tab of the
                      ribbon:
                    </p>
                    <ol>
                      <li>
                        Select any unstyled column header cells and apply the{' '}
                        <span className="ms-style">Table Header Cell</span>{' '}
                        style.
                      </li>
                      <li>
                        To improve readability, apply a font color and
                        background shading to the new header cells to match
                        other header cells (here white and grey).
                      </li>
                    </ol>
                  </figcaption>
                  <img
                    src="/images/complex-table-7.png"
                    alt="apply table header style"
                  />
                </figure>
              </li>
              <li className="style-guide__step">
                <figure>
                  <figcaption>Add the data.</figcaption>
                  <img
                    src="/images/complex-table-8.png"
                    alt="apply table header style"
                  />
                </figure>
              </li>
              <li className="style-guide__step">
                <figure>
                  <figcaption>
                    <p>
                      If <strong>more than one summary row</strong>
                      is needed at the end of the table (here the last two rows
                      should be part of the summary rows):
                    </p>
                    <ol>
                      <li>
                        Select the last row in the table body (before the first
                        summary row).
                      </li>
                      <li>
                        <p>
                          In the <span className="ms-label">Table Design</span>{' '}
                          tab of the ribbon:
                        </p>
                        <ul>
                          <li>
                            Select the double border line style (
                            <span
                              style={{
                                display: 'inline-block',
                                width: '2em',
                                height: '1em',
                                borderBottom: '3px double black'
                              }}
                            />
                            ).
                          </li>
                          <li>
                            Apply the double border line style to the bottom
                            border only (click on the{' '}
                            <span className="ms-button">Borders</span>
                            control and select{' '}
                            <span className="ms-button">
                              Bottom border
                            </span>{' '}
                            from the drop-down menu).
                          </li>
                        </ul>
                      </li>
                    </ol>
                  </figcaption>
                  <img
                    src="/images/complex-table-9.png"
                    alt="apply table header style"
                  />
                </figure>
              </li>
              <li className="style-guide__step">
                <figure>
                  <figcaption>
                    <p>
                      A double line border (
                      <span
                        style={{
                          display: 'inline-block',
                          width: '2em',
                          height: '1em',
                          borderBottom: '3px double black'
                        }}
                      />
                      ) is now present in the table, separating the summary rows
                      from the rest of the table.
                    </p>
                    <p>
                      Optionally, a background shading and font color can be
                      applied to all cells in the summary rows to better
                      differentiate them from the rest of the table:
                    </p>
                    <ol>
                      <li>Select the cells in the summary row to be styled.</li>
                      <li>
                        In the <span className="ms-label">Home</span> tab of the
                        ribbon, set the font color and background shading to
                        match existing summary row cells (white, and grey here).
                      </li>
                    </ol>
                  </figcaption>
                  <img
                    src="/images/complex-table-10.png"
                    alt="apply table header style"
                  />
                </figure>
              </li>
              <li className="style-guide__step">
                <figure>
                  <figcaption>The table is now complete,</figcaption>
                  <img
                    src="/images/complex-table-11.png"
                    alt="complete table"
                  />
                </figure>
              </li>
            </ol>
          </section>
        </section>

        <Schema
          id="data-tables"
          data={{
            '@context': 'https://sci.pe',
            '@id': 'http://example.com/table',
            '@type': 'Table',
            alternateName: 'Table 1',
            caption: 'Statistical analysis of Xanadu growth',
            comment: [
              {
                '@type': 'Comment',
                text: 'p-value &lt 0.05, statistically significant',
                about: {
                  '@id': 'http://example.com/table#1',
                  name: '1'
                }
              }
            ],
            encoding: {
              '@id': 'http://example.com/encoding-table',
              '@type': 'TableObject',
              contentUrl: 'http://example.com/table',
              fileFormat: 'text/html'
            }
          }}
        />
      </section>
    );
  }
}

Tables.ds3Id = `ds3:${Tables.name}`;

export default Customize(Tables);
