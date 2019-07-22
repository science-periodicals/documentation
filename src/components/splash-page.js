import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Card,
  BemTags,
  CSS_TABLET,
  TextLogo,
  ButtonMenu,
  MenuItem
} from '@scipe/ui';
import Iconoclass from '@scipe/iconoclass';
import Diagram from './diagram/diagram';

export default class SplashPage extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    screenWidth: PropTypes.string.isRequired
  };

  render() {
    const { match, screenWidth } = this.props;

    const bem = BemTags('@sa');

    return (
      <div className={bem`splash-page`}>
        <Helmet>
          <title>Get started • sci.pe</title>
        </Helmet>

        <div className={bem`__splash`}>
          <Card className={bem`__splash-card`}>
            <h1 className={bem`__headline`}>Moving Science Forward</h1>
            <h2 className={bem`__sub-headline`}>
              <TextLogo /> brings editors, authors and reviewers together to
              produce the most rigorous science at the lowest possible cost.
            </h2>

            <div className={bem`__splash-cta`}>
              <ButtonMenu title="Get Started" raised={true} align="right">
                <span style={{ paddingLeft: '8px' }}>Get Started</span>
                <MenuItem to="/get-started/quick-start">View demo</MenuItem>
                <MenuItem href="/new/journal">
                  Start a journal hosted by <TextLogo />
                </MenuItem>
                <MenuItem to="/get-started/install">
                  Deploy <TextLogo /> on you own server
                </MenuItem>
              </ButtonMenu>
            </div>

            <div className={bem`__splash-diagram`}>
              <Diagram isMobile={screenWidth <= CSS_TABLET} />
            </div>
          </Card>
        </div>

        <ul className={bem`__doc-list @__clear-list-styles `}>
          <li>
            <Card className={bem`__card --editor-user-guide`}>
              <div className={bem`__card-header`}>
                <h2 className={bem`__title @__default-ui-type--headline`}>
                  <Link to={{ pathname: `${match.path}/quick-start` }}>
                    Quick start guide
                  </Link>
                </h2>
                <Iconoclass
                  className={bem`__card-icon`}
                  iconName="smartAction"
                  round={true}
                  size="4rem"
                />
              </div>
            </Card>
          </li>

          <li>
            <Card className={bem`__card --workflows`}>
              <div className={bem`__card-header`}>
                <h2 className={bem`__title @__default-ui-type--headline`}>
                  <Link to={{ pathname: `${match.path}/workflows` }}>
                    Smart editorial workflows guide
                  </Link>
                </h2>
                <Iconoclass
                  className={bem`__card-icon`}
                  iconName="signature"
                  round={true}
                  size="4rem"
                />
              </div>
            </Card>
          </li>

          <li>
            <Card className={bem`__card --author-and-reviewer-user-guide`}>
              <div className={bem`__card-header`}>
                <h2 className={bem`__title @__default-ui-type--headline`}>
                  <Link
                    to={{
                      pathname: `${match.path}/author-and-reviewer-user-guide`
                    }}
                  >
                    Author and reviewer user guide
                  </Link>
                </h2>
                <Iconoclass
                  className={bem`__card-icon`}
                  iconName="info"
                  round={true}
                  size="4rem"
                />
              </div>
            </Card>
          </li>

          <li>
            <Card className={bem`__card --editor-user-guide`}>
              <div className={bem`__card-header`}>
                <h2 className={bem`__title @__default-ui-type--headline`}>
                  <Link to={{ pathname: `${match.path}/editor-user-guide` }}>
                    Editor user guide
                  </Link>
                </h2>
                <Iconoclass
                  className={bem`__card-icon`}
                  iconName="roleEditor"
                  round={true}
                  size="4rem"
                />
              </div>
            </Card>
          </li>

          <li>
            <Card className={bem`__card --publication-types-and-style-guides`}>
              <div className={bem`__card-header`}>
                <h2 className={bem`__title @__default-ui-type--headline`}>
                  <Link
                    to={{
                      pathname: `${match.path}/publication-types-and-style-guides`
                    }}
                  >
                    Publication types and style guides
                  </Link>
                </h2>
                <Iconoclass
                  className={bem`__card-icon`}
                  iconName="formatSize"
                  round={true}
                  size="4rem"
                />
              </div>
            </Card>
          </li>

          <li>
            <Card className={bem`__card --archive`}>
              <div className={bem`__card-header`}>
                <h2 className={bem`__title @__default-ui-type--headline`}>
                  <Link to={{ pathname: `${match.path}/archive` }}>
                    Archiving format and markup
                  </Link>
                </h2>
                <Iconoclass
                  className={bem`__card-icon`}
                  iconName="fileLink"
                  round={true}
                  size="4rem"
                />
              </div>
            </Card>
          </li>
          <li>
            <Card className={bem`__card --api`}>
              <div className={bem`__card-header`}>
                <h2 className={bem`__title @__default-ui-type--headline`}>
                  <Link to={{ pathname: `${match.path}/api` }}>API</Link>
                </h2>
                <Iconoclass
                  className={bem`__card-icon`}
                  iconName="hypermedia"
                  round={true}
                  size="4rem"
                />
              </div>
            </Card>
          </li>

          {/* <li>
              <Card className={bem`__card --ontology`}>
              <div className={bem`__card-header`}>
              <h2 className={bem`__title @__default-ui-type--headline`}>
              <Link to={{ pathname: `${match.path}/ontology` }}>
              Ontology
              </Link>
              </h2>
              <Iconoclass
              className={bem`__card-icon`}
              iconName="label"
              round={true}
              size="4rem"
              />
              </div>
              </Card>
              </li> */}

          <li>
            <Card className={bem`__card --install`}>
              <div className={bem`__card-header`}>
                <h2 className={bem`__title @__default-ui-type--headline`}>
                  <Link to={{ pathname: `${match.path}/install` }}>
                    Installing sci.pe on premise
                  </Link>
                </h2>
                <Iconoclass
                  className={bem`__card-icon`}
                  iconName="gear"
                  round={true}
                  size="4rem"
                />
              </div>
            </Card>
          </li>
        </ul>
      </div>
    );
  }
}
