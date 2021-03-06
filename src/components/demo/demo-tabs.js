import React from 'react';
import PropTypes from 'prop-types';
import querystring from 'querystring';
import omit from 'lodash/omit';
import { withRouter } from 'react-router-dom';
import {
  bemify,
  Tabs,
  TabsItem,
  PaperButtonLink,
  ButtonMenu,
  MenuItem,
  TextLogo
} from '@scipe/ui';
import Iconoclass from '@scipe/iconoclass';

class DemoTabs extends React.Component {
  static propTypes = {
    // react-router
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  handleNav = (tab, id) => {
    const { history, location } = this.props;
    history.push({
      pathname: location.pathname,
      search: location.search,
      hash: `#${id.toLowerCase()}`
    });
  };

  render() {
    const { location } = this.props;
    const bem = bemify('demo-tabs');
    const activeId = location.hash.substring(1).toLowerCase();
    const tab =
      activeId === 'authors'
        ? 3
        : activeId === 'producers'
        ? 1
        : activeId === 'reviewers'
        ? 2
        : 0;

    return (
      <Tabs className={bem``} activeTab={tab} onChange={this.handleNav}>
        <TabsItem title="Editors">
          <h3 className="demo-tabs__role-title">
            Try <TextLogo /> as an Editor
          </h3>
          <ul className={bem`__items`}>
            <li className={bem`__item`}>
              <div className={bem`__item-icon`}>
                <Iconoclass iconName="sifter" iconSize={40} round={true} />
              </div>
              <h3 className={bem`__item-title`}>Configure</h3>

              <div className={bem`__item-content`}>
                <p className={bem`__text`}>
                  Organize your staff and set up editorial workflows, blinding
                  requirements, publication types, journal styles and more.
                </p>

                <PaperButtonLink
                  className="demo-tabs__launch-button"
                  raised={true}
                  capsule={true}
                  href={urlify(
                    { username: 'engelbart-demo' },
                    '/settings/journal/demo/journal'
                  )}
                  target="_blank"
                  rel="noopener"
                >
                  Launch demo
                </PaperButtonLink>
              </div>
            </li>

            <li className={bem`__item`}>
              <div className={bem`__item-icon`}>
                <Iconoclass iconName="publisher" iconSize={40} round={true} />
              </div>
              <h3 className={bem`__item-title`}>Track</h3>
              <div className={bem`__item-content`}>
                <p className={bem`__text`}>
                  Meet your new publishing inbox, where you can manage incoming
                  submissions for all your journals.
                </p>

                <PaperButtonLink
                  className="demo-tabs__launch-button"
                  raised={true}
                  capsule={true}
                  href={urlify({ username: 'engelbart-demo' }, '/')}
                  target="_blank"
                  rel="noopener"
                >
                  Launch demo
                </PaperButtonLink>
              </div>
            </li>

            <li className={bem`__item`}>
              <div className={bem`__item-icon`}>
                <Iconoclass iconName="dispatcher" iconSize={40} round={true} />
              </div>
              <h3 className={bem`__item-title`}>Assess</h3>
              <div className={bem`__item-content`}>
                <p className={bem`__text`}>
                  Invite reviewers, and make your editorial decisions on
                  production quality content with a powerful user interface
                  supporting annotations.
                </p>
                <ButtonMenu
                  raised={true}
                  capsule={true}
                  className="demo-tabs__launch-button"
                >
                  Launch demo
                  <MenuItem
                    href={urlify(
                      { username: 'engelbart-demo' },
                      '/demo/editor-assesses-reviewed-submission/submission',
                      {
                        stage: 1,
                        action: 3
                      }
                    )}
                    target="_blank"
                    rel="noopener"
                  >
                    Assess a submission based on reviewer reviews
                  </MenuItem>
                  <MenuItem
                    href={urlify(
                      { username: 'engelbart-demo' },
                      '/demo/editor-endorses-apc-discount/submission',
                      {
                        stage: 3,
                        action: 0
                      }
                    )}
                    target="_blank"
                    rel="noopener"
                  >
                    Endorse author APC discount request
                  </MenuItem>
                  <MenuItem
                    href={urlify(
                      { username: 'engelbart-demo' },
                      '/demo/editor-assesses-revised-submission/submission',
                      {
                        stage: 2,
                        action: 1,
                        version: '0.0.0-0'
                      }
                    )}
                    target="_blank"
                    rel="noopener"
                  >
                    Assess a submission based on reviewer reviews and author
                    responses
                  </MenuItem>
                  <MenuItem
                    href={urlify(
                      { username: 'engelbart-demo' },
                      '/demo/editor-publishes-submission/submission',
                      {
                        stage: 3,
                        action: 1
                      }
                    )}
                    target="_blank"
                    rel="noopener"
                  >
                    Publish a manuscript
                  </MenuItem>
                </ButtonMenu>
              </div>
            </li>

            <li className={bem`__item`}>
              <div className={bem`__item-icon`}>
                <Iconoclass iconName="reader" iconSize={40} round={true} />
              </div>
              <h3 className={bem`__item-title`}>Publish</h3>
              <div className={bem`__item-content`}>
                <p className={bem`__text`}>
                  Publish high quality content optimized for the web, organize
                  it into issues and special issues, and display requests for
                  new articles all from your searchable journal homepages.
                </p>

                <ButtonMenu
                  raised={true}
                  capsule={true}
                  className="demo-tabs__launch-button"
                >
                  Launch demo
                  <MenuItem
                    href={urlify(
                      {
                        hostname: 'demo.sci.pe',
                        username: 'engelbart-demo'
                      },
                      '/'
                    )}
                    target="_blank"
                    rel="noopener"
                  >
                    Journal homepage
                  </MenuItem>
                  <MenuItem
                    href={urlify(
                      {
                        hostname: 'demo.sci.pe',
                        username: 'engelbart-demo'
                      },
                      '/payne2016a-demo'
                    )}
                    target="_blank"
                    rel="noopener"
                  >
                    Published article
                  </MenuItem>
                </ButtonMenu>
              </div>
            </li>
          </ul>
        </TabsItem>

        <TabsItem title="Producers">
          <h3 className="demo-tabs__role-title">
            Try <TextLogo /> as a Producer
          </h3>
          <ul className={bem`__items`}>
            <li className={bem`__item`}>
              <div className={bem`__item-icon`}>
                <Iconoclass iconName="sifter" iconSize={40} round={true} />
              </div>
              <h3 className={bem`__item-title`}>Configure</h3>

              <div className={bem`__item-content`}>
                <p className={bem`__text`}>
                  Set up typesetting services and production requirements.
                </p>
                <PaperButtonLink
                  className="demo-tabs__launch-button"
                  raised={true}
                  capsule={true}
                  href={urlify(
                    { username: 'taylor-demo' },
                    '/settings/organization/demo-org/services'
                  )}
                  target="_blank"
                  rel="noopener"
                >
                  Launch demo
                </PaperButtonLink>
              </div>
            </li>

            <li className={bem`__item`}>
              <div className={bem`__item-icon`}>
                <Iconoclass iconName="publisher" iconSize={40} round={true} />
              </div>
              <h3 className={bem`__item-title`}>Track</h3>
              <div className={bem`__item-content`}>
                <p className={bem`__text`}>
                  Meet your new publishing inbox, where you can keep track of
                  all submissions requiring your attention.
                </p>

                <PaperButtonLink
                  className="demo-tabs__launch-button"
                  raised={true}
                  capsule={true}
                  href={urlify({ username: 'taylor-demo' }, '/')}
                  target="_blank"
                  rel="noopener"
                >
                  Launch demo
                </PaperButtonLink>
              </div>
            </li>

            <li className={bem`__item`}>
              <div className={bem`__item-icon`}>
                <Iconoclass iconName="dispatcher" iconSize={40} round={true} />
              </div>
              <h3 className={bem`__item-title`}>Produce</h3>
              <div className={bem`__item-content`}>
                <p className={bem`__text`}>
                  Produce submissions and manage communication with authors.
                </p>

                <PaperButtonLink
                  className="demo-tabs__launch-button"
                  raised={true}
                  capsule={true}
                  href={urlify(
                    { username: 'taylor-demo' },
                    '/demo/typesetter-assesses-document-to-typeset/submission',
                    {
                      stage: 0,
                      action: 4
                    }
                  )}
                  target="_blank"
                  rel="noopener"
                >
                  Launch demo
                </PaperButtonLink>
              </div>
            </li>

            <li className={bem`__item`}>
              <div className={bem`__item-icon`}>
                <Iconoclass iconName="reader" iconSize={40} round={true} />
              </div>
              <h3 className={bem`__item-title`}>Preview</h3>
              <div className={bem`__item-content`}>
                <p className={bem`__text`}>
                  Get access to production previews at any stage of a workflow.
                </p>

                <PaperButtonLink
                  className="demo-tabs__launch-button"
                  raised={true}
                  capsule={true}
                  href={urlify(
                    { username: 'taylor-demo' },
                    '/demo/typesetter-typesets-document/submission',
                    {
                      stage: 0,
                      action: 4
                    }
                  )}
                  target="_blank"
                  rel="noopener"
                >
                  Launch demo
                </PaperButtonLink>
              </div>
            </li>
          </ul>
        </TabsItem>

        <TabsItem title="Reviewers">
          <h3 className="demo-tabs__role-title">
            Try <TextLogo /> as a Reviewer
          </h3>
          <ul className={bem`__items`}>
            <li className={bem`__item`}>
              <div className={bem`__item-icon`}>
                <Iconoclass iconName="sifter" iconSize={40} round={true} />
              </div>
              <h3 className={bem`__item-title`}>Configure</h3>

              <div className={bem`__item-content`}>
                <p className={bem`__text`}>
                  Set up your reviewer profile so editors can request your
                  services even for workflows where reviewer identity needs to
                  remain anonymous.
                </p>
                <PaperButtonLink
                  className="demo-tabs__launch-button"
                  raised={true}
                  capsule={true}
                  href={urlify(
                    { username: 'licklider-demo' },
                    '/settings/profile/bio'
                  )}
                  target="_blank"
                  rel="noopener"
                >
                  Launch demo
                </PaperButtonLink>
              </div>
            </li>

            <li className={bem`__item`}>
              <div className={bem`__item-icon`}>
                <Iconoclass iconName="publisher" iconSize={40} round={true} />
              </div>
              <h3 className={bem`__item-title`}>Track</h3>
              <div className={bem`__item-content`}>
                <p className={bem`__text`}>
                  Meet your new publishing inbox, where you can manage all the
                  submissions that require your attention.
                </p>

                <PaperButtonLink
                  className="demo-tabs__launch-button"
                  raised={true}
                  capsule={true}
                  href={urlify({ username: 'licklider-demo' }, '/')}
                  target="_blank"
                  rel="noopener"
                >
                  Launch demo
                </PaperButtonLink>
              </div>
            </li>

            <li className={bem`__item`}>
              <div className={bem`__item-icon`}>
                <Iconoclass iconName="dispatcher" iconSize={40} round={true} />
              </div>
              <h3 className={bem`__item-title`}>Review</h3>
              <div className={bem`__item-content`}>
                <p className={bem`__text`}>
                  Review and annotate submissions, with direct access to all
                  versions and parts of the content.
                </p>
                <ButtonMenu
                  raised={true}
                  capsule={true}
                  className="demo-tabs__launch-button"
                >
                  Launch demo
                  <MenuItem
                    href={urlify(
                      { username: 'licklider-demo' },
                      '/demo/reviewer-accepts-invitation/submission',
                      {
                        stage: 1,
                        action: 0
                      }
                    )}
                    target="_blank"
                    rel="noopener"
                  >
                    Reviewer accepts invitation to review
                  </MenuItem>
                  <MenuItem
                    href={urlify(
                      { username: 'licklider-demo' },
                      '/demo/reviewer-reviews-submission/submission',
                      {
                        stage: 1,
                        action: 0
                      }
                    )}
                    target="_blank"
                    rel="noopener"
                  >
                    Reviewer reviews submission
                  </MenuItem>
                  <MenuItem
                    href={urlify(
                      { username: 'licklider-demo' },
                      '/demo/reviewer-reviews-revised-submission/submission',
                      {
                        stage: 3,
                        action: 0
                      }
                    )}
                    target="_blank"
                    rel="noopener"
                  >
                    Reviewer reviews revised submission
                  </MenuItem>
                </ButtonMenu>
              </div>
            </li>

            <li className={bem`__item`}>
              <div className={bem`__item-icon`}>
                <Iconoclass iconName="reader" iconSize={40} round={true} />
              </div>
              <h3 className={bem`__item-title`}>Get credits</h3>
              <div className={bem`__item-content`}>
                <p className={bem`__text`}>
                  Reviewer work is made available publicly while respecting any
                  anonymity constraints set by the journal.
                </p>

                <PaperButtonLink
                  className="demo-tabs__launch-button"
                  raised={true}
                  capsule={true}
                  href={urlify(
                    { username: 'licklider-demo' },
                    '/about/licklider-demo'
                  )}
                  target="_blank"
                  rel="noopener"
                >
                  Launch demo
                </PaperButtonLink>
              </div>
            </li>
          </ul>
        </TabsItem>

        <TabsItem title="Authors">
          <h3 className="demo-tabs__role-title">
            Try <TextLogo /> as an Author
          </h3>
          <ul className={bem`__items`}>
            <li className={bem`__item`}>
              <div className={bem`__item-icon`}>
                <Iconoclass iconName="sifter" iconSize={40} round={true} />
              </div>
              <h3 className={bem`__item-title`}>Submit</h3>

              <div className={bem`__item-content`}>
                <p className={bem`__text`}>
                  Submit your work without having to fill any forms (only file
                  uploads are required) and fill author declarations
                  collaboratively.
                </p>

                <ButtonMenu
                  raised={true}
                  capsule={true}
                  className="demo-tabs__launch-button"
                >
                  Launch demo
                  <MenuItem
                    href={urlify(
                      { username: 'hamilton-demo' },
                      '/demo/author-prepares-submission/submission',
                      {
                        stage: 0,
                        action: 0
                      }
                    )}
                    target="_blank"
                    rel="noopener"
                  >
                    Submit manuscript
                  </MenuItem>
                  <MenuItem
                    href={urlify(
                      { username: 'hamilton-demo' },
                      '/demo/author-makes-declarations/submission',
                      {
                        stage: 0,
                        action: 1
                      }
                    )}
                    target="_blank"
                    rel="noopener"
                  >
                    Fill author declarations collaboratively
                  </MenuItem>
                </ButtonMenu>
              </div>
            </li>

            <li className={bem`__item`}>
              <div className={bem`__item-icon`}>
                <Iconoclass iconName="publisher" iconSize={40} round={true} />
              </div>
              <h3 className={bem`__item-title`}>Track</h3>
              <div className={bem`__item-content`}>
                <p className={bem`__text`}>
                  Get notified of the status of your manuscript in real time
                  with a full overview of each step of the editorial workflow.
                </p>

                <PaperButtonLink
                  raised={true}
                  capsule={true}
                  href={urlify({ username: 'hamilton-demo' }, '/')}
                  target="_blank"
                  rel="noopener"
                  className="demo-tabs__launch-button"
                >
                  Launch demo
                </PaperButtonLink>
              </div>
            </li>

            <li className={bem`__item`}>
              <div className={bem`__item-icon`}>
                <Iconoclass iconName="dispatcher" iconSize={40} round={true} />
              </div>
              <h3 className={bem`__item-title`}>Revise</h3>
              <div className={bem`__item-content`}>
                <p className={bem`__text`}>
                  Revise your manuscript based on editor and reviewer feedback
                  made available directly in context.
                </p>

                <PaperButtonLink
                  className="demo-tabs__launch-button"
                  raised={true}
                  capsule={true}
                  href={urlify(
                    { username: 'hamilton-demo' },
                    '/demo/author-prepares-revision/submission',
                    {
                      stage: 2,
                      action: 0,
                      version: '0.0.0-0'
                    }
                  )}
                  target="_blank"
                  rel="noopener"
                >
                  Launch demo
                </PaperButtonLink>
              </div>
            </li>

            <li className={bem`__item`}>
              <div className={bem`__item-icon`}>
                <Iconoclass iconName="reader" iconSize={40} round={true} />
              </div>
              <h3 className={bem`__item-title`}>Publish</h3>
              <div className={bem`__item-content`}>
                <p className={bem`__text`}>
                  Negotiate <abbr title="Article processing charges">APC</abbr>,
                  confirm contributions, and benefit from web-optimized
                  published articles, easily accessible and discoverable by both
                  humans and machines.
                </p>

                <ButtonMenu
                  raised={true}
                  capsule={true}
                  className="demo-tabs__launch-button"
                >
                  Launch demo
                  <MenuItem
                    href={urlify(
                      { username: 'hamilton-demo' },
                      '/demo/author-requests-apc-discount/submission',
                      {
                        stage: 3,
                        action: 0
                      }
                    )}
                    target="_blank"
                    rel="noopener"
                  >
                    Request APC discount
                  </MenuItem>
                  <MenuItem
                    href={urlify(
                      { username: 'hamilton-demo' },
                      '/demo/author-confirms-contribution-and-identity/submission',
                      {
                        stage: 3,
                        action: 1
                      }
                    )}
                    target="_blank"
                    rel="noopener"
                  >
                    Confirm contribution and identity
                  </MenuItem>
                  <MenuItem
                    href={urlify(
                      { username: 'hamilton-demo', hostname: 'demo.sci.pe' },
                      '/payne2016a-demo'
                    )}
                    target="_blank"
                    rel="noopener"
                  >
                    View published article
                  </MenuItem>
                </ButtonMenu>
              </div>
            </li>
          </ul>
        </TabsItem>
      </Tabs>
    );
  }
}

export default withRouter(DemoTabs);

function urlify({ hostname, username }, pathname, qs = {}) {
  let url;

  const isDevOrNightly =
    process.env.NODE_ENV !== 'production' ||
    (typeof window !== 'undefined' &&
      window.location &&
      window.location.hostname === 'nightly.sci.pe');

  if (hostname) {
    if (isDevOrNightly) {
      url = `${pathname}?${querystring.stringify(
        Object.assign({}, qs, { hostname })
      )}`;
    } else {
      const qs = querystring.stringify(omit(qs, ['hostname']));

      url = `https://${hostname}${pathname}${qs ? `?${qs}` : ''}`;
    }
  } else {
    const s = querystring.stringify(qs);
    url = `${pathname}${s ? `?${s}` : ''}`;
  }

  const root =
    isDevOrNightly &&
    typeof window !== 'undefined' &&
    window.location &&
    window.location.host &&
    window.location.host.startsWith('127.0.0.1:3335')
      ? 'http://127.0.0.1:3000'
      : '';

  return `${root}/demo?${querystring.stringify({
    user: username,
    next: url
  })}`;
}
