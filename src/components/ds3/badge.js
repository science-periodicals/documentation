import React from 'react';

class Badge extends React.Component {
  render() {
    return (
      <section id="badge" className="style-guide__group">
        <h2>Badge</h2>
        <p>
          A badge with a link to this guide can be included to promote DOCX
          Standard Scientific Style (<abbr title="DOCX Standard Scientific Style">
            DS3
          </abbr>).
        </p>
        <div className="badge">
          <p>
            Download:{' '}
            <a
              href="/images/logo_docx-standard_72x300.svg"
              download="logo_docx-standard_72x300.svg"
            >
              svg
            </a>,{' '}
            <a
              href="/images/logo_docx-standard_72x300.png"
              download="logo_docx-standard_72x300.png"
            >
              png(72x300)
            </a>, or{' '}
            <a
              href="/images/logo_docx-standard_144x600.png"
              download="logo_docx-standard_144x600.png"
            >
              png(144x600)
            </a>.
          </p>
          <img
            id="ds3-badge"
            src="/images/logo_docx-standard_72x300.svg"
            alt="DOCX Standard Scientific Style badge"
          />
        </div>
      </section>
    );
  }
}

export default Badge;
