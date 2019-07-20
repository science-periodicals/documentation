import React from 'react';
import {
  bemify,
  Tabs,
  TabsItem,
  PaperButton,
  ButtonMenu,
  MenuItem,
  TextLogo
} from '@scipe/ui';
import Iconoclass from '@scipe/iconoclass';

export default class DemoTabs extends React.PureComponent {
  render() {
    const bem = bemify('demo-tabs');

    return (
      <Tabs className={bem``}>
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
                <PaperButton raised={true} capsule={true}>
                  Launch demo
                </PaperButton>
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

                <PaperButton raised={true} capsule={true}>
                  Launch demo
                </PaperButton>
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
                  Publish high quality content optimized for the web, organize
                  it into issues and special issues and request for new articles
                  all from your searchable journal homepages.
                </p>

                <PaperButton raised={true} capsule={true}>
                  Launch demo
                </PaperButton>
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
                <PaperButton raised={true} capsule={true}>
                  Launch demo
                </PaperButton>
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

                <PaperButton raised={true} capsule={true}>
                  Launch demo
                </PaperButton>
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

                <PaperButton raised={true} capsule={true}>
                  Launch demo
                </PaperButton>
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
                <PaperButton raised={true} capsule={true}>
                  Launch demo
                </PaperButton>
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

                <PaperButton raised={true} capsule={true}>
                  Launch demo
                </PaperButton>
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

                <PaperButton raised={true} capsule={true}>
                  Launch demo
                </PaperButton>
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
                <PaperButton raised={true} capsule={true}>
                  Launch demo
                </PaperButton>
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

                <PaperButton raised={true} capsule={true}>
                  Launch demo
                </PaperButton>
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

                <PaperButton raised={true} capsule={true}>
                  Launch demo
                </PaperButton>
              </div>
            </li>
          </ul>
        </TabsItem>
      </Tabs>
    );
  }
}
