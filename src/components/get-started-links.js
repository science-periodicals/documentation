import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Iconoclass from '@scipe/iconoclass';
import { getId } from '@scipe/jsonld';
import {
  Logo,
  TextLogo,
  Card,
  bemify,
  Divider,
  ButtonMenu,
  MenuItem
} from '@scipe/ui';

export default class GetStartedLinks extends React.Component {
  static propTypes = {
    user: PropTypes.object,
    isDismissible: PropTypes.bool,
    onDismiss: PropTypes.func.isRequired
  };

  render() {
    const { isDismissible, onDismiss, user } = this.props;
    const isLoggedIn = !!getId(user);

    const bem = bemify('get-started-links');

    return (
      <div className={bem``}>
        <Card>
          <header className={bem`__header`}>
            <Logo className={bem`__header-logo`} logo="science-periodicals" />

            {isDismissible ? (
              <Iconoclass
                iconName="delete"
                size="16px"
                behavior="button"
                onClick={onDismiss}
              />
            ) : (
              <Link to={{ pathname: '/get-started' }}>
                <Iconoclass iconName="home" size="16px" />
              </Link>
            )}
          </header>
          <div className={bem`__content`}>
            <ul className={bem`__nav-list`}>
              <li className={bem`__nav-list-item`}>
                <a href="/explore">
                  <Iconoclass iconName="logoSciAlt" size="16px" />
                  Explore content
                </a>
              </li>
              <li className={bem`__nav-list-item`}>
                <Link to="/get-started/pricing">
                  <Iconoclass iconName="money" size="16px" />
                  View pricing
                </Link>
              </li>
              <li className={bem`__nav-list-item`}>
                {isLoggedIn ? (
                  <a href="/">
                    <Iconoclass iconName="exitToApp" size="16px" />
                    View Dashboard
                  </a>
                ) : (
                  <a href="/register">
                    <Iconoclass iconName="exitToApp" size="16px" />
                    Join
                  </a>
                )}
              </li>
              <Divider marginTop="8px" marginBottom="8px" />
              <li className={bem`__nav-list-item`}>
                <Link to="/get-started/vision">
                  <Iconoclass iconName="hypermedia" size="16px" />
                  Vision
                </Link>
              </li>
              <li className={bem`__nav-list-item`}>
                <Link to="/get-started/features">
                  <Iconoclass iconName="star" size="16px" />
                  Browse features
                </Link>
              </li>

              <li className={bem`__nav-list-item`}>
                <a href="https://research.sci.pe/">
                  <Iconoclass iconName="journal" size="16px" />
                  Blog
                </a>
              </li>
            </ul>

            <div className={bem`__submit`}>
              <ButtonMenu
                title="Get Started"
                raised={!isDismissible}
                align="right"
              >
                <span style={{ paddingLeft: '8px' }}>Get Started</span>
                {/*<MenuItem to="/get-started/quick-start">View demo</MenuItem>*/}
                <MenuItem href="/new/journal">
                  Start a journal hosted by <TextLogo />
                </MenuItem>
                <MenuItem to="/get-started/install">
                  Deploy <TextLogo /> on you own server
                </MenuItem>
              </ButtonMenu>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}
