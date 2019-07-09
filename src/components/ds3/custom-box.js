import React from 'react';
import PropTypes from 'prop-types';

export default class CustomBox extends React.Component {
  render() {
    const { children } = this.props;
    return <aside className="custom-box">{children}</aside>;
  }
}

CustomBox.propTypes = {
  children: PropTypes.any
};
