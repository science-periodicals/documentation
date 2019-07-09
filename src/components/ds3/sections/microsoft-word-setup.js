import React from 'react';

class MicrosoftWordSetup extends React.Component {
  render() {
    return (
      <section id={MicrosoftWordSetup.ds3Id} className="style-guide__group">
        <h3>Microsoft Word setup</h3>
        <p>
          When preparing a document, it can be helpful to display automatically
          inserted elements such as captions, citations, and cross-references
          with a shaded background. This can be achieved by setting the{' '}
          <span className="ms-label">Field shading</span> option to{' '}
          <span className="ms-value">Always</span> (on a Mac, go to the global{' '}
          <span className="ms-label">Word</span> menu, select{' '}
          <span className="ms-value">Preferences</span> and click on{' '}
          <span className="ms-button">View</span>. On Windows, go to the{' '}
          <span className="ms-label">File</span> tab of the ribbon, select{' '}
          <span className="ms-value">Options</span> and click on{' '}
          <span className="ms-button">Advanced</span>).
        </p>
        <p className="warning">
          Omit elements such as line and page numbers, running heads and running
          titles, article statistics (e.g., number of tables, figures, and
          words) and table of contents.
        </p>
        <p className="warning">
          Be sure to check that the document is saved as DOCX and not in{' '}
          <code>compatibility mode</code> (the Microsoft Word title bar will
          include '[Compatibility Mode]' if so). If the document is in
          compatibility mode,{' '}
          <a href="https://support.office.com/en-nz/article/Use-Word-2013-to-open-documents-created-in-earlier-versions-of-Word-609bbdba-96f2-407b-baaf-d8e53d60d34f#bm2">
            convert the document
          </a>{' '}
          or start in a new DOCX file before proceeding.
        </p>
        <p className="warning">
          Microsoft Word does not automatically update links and field codes
          (e.g., captions, cross-references, or citations) in the document. For
          instance, figure caption numbers do not automatically update when
          figures are moved. Field codes can be updated one at a time by
          right-clicking (or control-clicking) on the field and selecting the{' '}
          <span className="ms-value">Update Field</span> option.
        </p>
      </section>
    );
  }
}

MicrosoftWordSetup.ds3Id = `ds3:${MicrosoftWordSetup.name}`;

export default MicrosoftWordSetup;
