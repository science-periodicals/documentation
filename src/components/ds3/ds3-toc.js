import React from 'react';
import PropTypes from 'prop-types';

export default class Ds3Toc extends React.Component {
  getNav($root, level = 3) {
    if (!$root) return null;
    const $headings = $root.querySelectorAll(`section > h${level}`);
    if (!$headings) return null;

    return (
      <ul>
        {Array.prototype.map.call($headings, $heading => {
          return (
            <li
              key={
                $heading.id || $heading.parentElement.id || $heading.textContent
              }
            >
              <a
                href={`#${$heading.parentElement.id}`}
                dangerouslySetInnerHTML={{ __html: $heading.innerHTML }}
              />
              {this.getNav($heading.parentElement, level + 1)}
            </li>
          );
        })}
      </ul>
    );
  }

  render() {
    const { $content } = this.props;
    return <nav className="ds3 ds3-toc">{this.getNav($content)}</nav>;
  }
}

Ds3Toc.propTypes = {
  $content: PropTypes.any
};
