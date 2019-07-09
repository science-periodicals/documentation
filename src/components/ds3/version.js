import React from 'react';
import { version } from '../../../package.json';

class Version extends React.Component {
  render() {
    return (
      <section id="version" className="style-guide__group">
        <h2>Version</h2>
        <p id="semver">{version}</p>
        <p>
          DOCX Standard Scientific Style Guide (<abbr title="DOCX Standard Scientific Style">
            DS3
          </abbr>) follows <a href="http://semver.org">Semantic Versioning</a>.
        </p>
      </section>
    );
  }
}

export default Version;
