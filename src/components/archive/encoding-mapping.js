import React from 'react';
import { BemTags, SchemaLink as A } from '@scipe/ui';

const bem = new BemTags('@sa', '@documentation');

export default class EncodingMapping extends React.Component {
  render() {
    return (
      <div className={bem`encoding-mapping @__table`}>
        <table className={bem`@__term-table`}>
          <caption className={bem`@__term-table-caption`}>
            Encoding associated with common resources
          </caption>
          <thead className={bem`@__term-table-header`}>
            <tr className={bem`@__term-table-row`}>
              <th className={bem`@__term-table-header-cell`}>Creative Work</th>
              <th className={bem`@__term-table-header-cell`}>Property</th>
              <th className={bem`@__term-table-header-cell`}>Encoding</th>
            </tr>
          </thead>
          <tbody>
            <tr className={bem`@__term-table-row`}>
              <td className={bem`@__term-table-cell`}>
                <A>ScholarlyArticle</A>
              </td>
              <td className={bem`@__term-table-cell`}>
                <A>encoding</A>
              </td>
              <td className={bem`@__term-table-cell`}>
                <A>DocumentObject</A>
              </td>
            </tr>
            <tr className={bem`@__term-table-row`}>
              <td className={bem`@__term-table-cell`}>
                <A>Image</A>
              </td>
              <td className={bem`@__term-table-cell`}>
                <A>encoding</A>
              </td>
              <td className={bem`@__term-table-cell`}>
                <A>ImageObject</A>
              </td>
            </tr>
            <tr className={bem`@__term-table-row`}>
              <td className={bem`@__term-table-cell`}>
                <A>Audio</A>
              </td>
              <td className={bem`@__term-table-cell`}>
                <A>encoding</A>
              </td>
              <td className={bem`@__term-table-cell`}>
                <A>AudioObject</A>
              </td>
            </tr>
            <tr className={bem`@__term-table-row`}>
              <td className={bem`@__term-table-cell`}>
                <A>Video</A>
              </td>
              <td className={bem`@__term-table-cell`}>
                <A>encoding</A>
              </td>
              <td className={bem`@__term-table-cell`}>
                <A>VideoObject</A>
              </td>
            </tr>
            <tr className={bem`@__term-table-row`}>
              <td className={bem`@__term-table-cell`}>
                <A>Dataset</A>
              </td>
              <td className={bem`@__term-table-cell`}>
                <A>distribution</A>
              </td>
              <td className={bem`@__term-table-cell`}>
                <A>DataDownload</A>
              </td>
            </tr>
            <tr className={bem`@__term-table-row`}>
              <td className={bem`@__term-table-cell`}>
                <A>Table</A>
              </td>
              <td className={bem`@__term-table-cell`}>
                <A>encoding</A>
              </td>
              <td className={bem`@__term-table-cell`}>
                <A>TableObject</A>
              </td>
            </tr>
            <tr className={bem`@__term-table-row`}>
              <td className={bem`@__term-table-cell`}>
                <A>SoftwareSourceCode</A>
              </td>
              <td className={bem`@__term-table-cell`}>
                <A>encoding</A>
              </td>
              <td className={bem`@__term-table-cell`}>
                <A>SoftwareSourceCodeObject</A>
              </td>
            </tr>

            <tr className={bem`@__term-table-row`}>
              <td className={bem`@__term-table-cell`}>
                <A>Formula</A>
              </td>
              <td className={bem`@__term-table-cell`}>
                <A>encoding</A>
              </td>
              <td className={bem`@__term-table-cell`}>
                <A>FormulaObject</A>
              </td>
            </tr>

            <tr className={bem`@__term-table-row`}>
              <td className={bem`@__term-table-cell`}>
                <A>TextBox</A>
              </td>
              <td className={bem`@__term-table-cell`}>
                <A>encoding</A>
              </td>
              <td className={bem`@__term-table-cell`}>
                <A>TextBoxObject</A>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
