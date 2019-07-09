import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="title">
        <h1>DOCX Standard Scientific Style</h1>
        <img
          src="/images/ds3-rainbow.png"
          alt="DOCX Standard Scientific Style badge showing cascadability (1 styleguide capturing enough metadata to express the originality of any journal)"
        />
      </header>
    );
  }
}

export default Header;
