import React from 'react';
import Iconoclass from '@scipe/iconoclass';
import Customize from '../../../hoc/customize';

class FileExtension extends React.Component {
  render() {
    return (
      <section
        id={FileExtension.ds3Id}
        className="file-extension style-guide__group"
      >
        <h3>File extension</h3>

        <p>
          Document written following this style guide complies to 'DOCX Standard
          Scientific Style' (<abbr title="DOCX Standard Scientific Style">
            DS3
          </abbr>) and should have <code>.ds3.docx</code> as file extension.
        </p>

        <div className="file-extension__example example">
          <Iconoclass iconName="fileText" />
          <code>manuscript.ds3.docx</code>
        </div>
      </section>
    );
  }
}

FileExtension.ds3Id = `ds3:${FileExtension.name}`;

export default Customize(FileExtension);
