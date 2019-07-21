import React from 'react';
import PropTypes from 'prop-types';
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
                  Organize your staff, setup editorial workflows, blinding
                  requirements, publication types and journal styles.
                </p>
                <PaperButtonLink
                  raised={true}
                  capsule={true}
                  href={`/demo?user=engelbart-demo&next=${encodeURIComponent(
                    '/settings/journal/research-demo/journal'
                  )}`}
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
                  Meet your new publishing inbox where you can manage all your
                  journals incoming submissions.
                </p>

                <PaperButtonLink
                  raised={true}
                  capsule={true}
                  href={`/demo?user=engelbart-demo&next=${encodeURIComponent(
                    '/'
                  )}`}
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
                  production quality content with a powerful interface
                  supporting annotations.
                </p>
                <ButtonMenu raised={true} capsule={true}>
                  Launch demo
                  <MenuItem
                    href={`/demo?user=engelbart-demo&next=${encodeURIComponent(
                      '/research-demo/editor-assesses-reviewed-submission/submission?stage=1&action=3'
                    )}`}
                  >
                    Assess a submission based on reviewer reviews
                  </MenuItem>
                  <MenuItem
                    href={`/demo?user=engelbart-demo&next=${encodeURIComponent(
                      '/research-demo/editor-endorses-third-party-action/submission?action=1&stage=0'
                    )}`}
                  >
                    Endorse third parties actions
                  </MenuItem>
                  <MenuItem
                    href={`/demo?user=engelbart-demo&next=${encodeURIComponent(
                      '/research-demo/editor-assesses-revised-submission/submission?stage=2&action=1&version=0.0.0-0'
                    )}`}
                  >
                    Assess a submission based on reviewer reviews and author
                    responses
                  </MenuItem>
                  <MenuItem
                    href={`/demo?user=engelbart-demo&next=${encodeURIComponent(
                      '/research-demo/editor-publishes-submission/submission?stage=3&action=1'
                    )}`}
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
                  it into issues and special issues and request for new articles
                  all from your searchable journal homepages.
                </p>

                <PaperButtonLink raised={true} capsule={true}>
                  Launch demo
                </PaperButtonLink>
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
                  Setup typesetting services and production requirements.
                </p>
                <PaperButtonLink raised={true} capsule={true}>
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
                  Meet your new publishing inbox where you can keep track of all
                  submissions requiring your attention.
                </p>

                <PaperButtonLink raised={true} capsule={true}>
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
                <ButtonMenu raised={true} capsule={true}>
                  Launch demo
                  <MenuItem>
                    Assess a submission based on reviewer reviews
                  </MenuItem>
                  <MenuItem>Endorse third parties actions</MenuItem>
                  <MenuItem>
                    Assess a submission based on reviewer reviews and author
                    responses
                  </MenuItem>
                  <MenuItem>Publish a manuscript</MenuItem>
                </ButtonMenu>
              </div>
            </li>

            <li className={bem`__item`}>
              <div className={bem`__item-icon`}>
                <Iconoclass iconName="reader" iconSize={40} round={true} />
              </div>
              <h3 className={bem`__item-title`}>Preview</h3>
              <div className={bem`__item-content`}>
                <p className={bem`__text`}>
                  Get access to production preview at any stage of a workflow.
                </p>

                <PaperButtonLink raised={true} capsule={true}>
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
                  Setup your reviewer profile so editors can request your
                  service even for workflows where reviewers identity needs to
                  remain anonymous.
                </p>
                <PaperButtonLink raised={true} capsule={true}>
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
                  Meet your new publishing inbox where you can manage all the
                  submissions that require your attention.
                </p>

                <PaperButtonLink raised={true} capsule={true}>
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
                  versions and parts of the content from one place.
                </p>
                <ButtonMenu raised={true} capsule={true}>
                  Launch demo
                  <MenuItem>
                    Assess a submission based on reviewer reviews
                  </MenuItem>
                  <MenuItem>Endorse third parties actions</MenuItem>
                  <MenuItem>
                    Assess a submission based on reviewer reviews and author
                    responses
                  </MenuItem>
                  <MenuItem>Publish a manuscript</MenuItem>
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

                <PaperButtonLink raised={true} capsule={true}>
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
                  Submit your work without having to fill any forms, only file
                  uploads are required.
                </p>
                <PaperButtonLink raised={true} capsule={true}>
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
                  Get notified of the status of your manuscript in real time
                  with a full overview of each step of the editorial workflow.
                </p>

                <PaperButtonLink raised={true} capsule={true}>
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
                  Revise your manuscript based on editors and reviewers feedback
                  made available directly in context.
                </p>
                <ButtonMenu raised={true} capsule={true}>
                  Launch demo
                  <MenuItem>
                    Assess a submission based on reviewer reviews
                  </MenuItem>
                  <MenuItem>Endorse third parties actions</MenuItem>
                  <MenuItem>
                    Assess a submission based on reviewer reviews and author
                    responses
                  </MenuItem>
                  <MenuItem>Publish a manuscript</MenuItem>
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
                  Benefit from published articles optimized for the web and
                  easily accessible and discoverable by both humans and
                  machines.
                </p>

                <PaperButtonLink raised={true} capsule={true}>
                  Launch demo
                </PaperButtonLink>
              </div>
            </li>
          </ul>
        </TabsItem>
      </Tabs>
    );
  }
}

export default withRouter(DemoTabs);
