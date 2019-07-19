import React from 'react';
import {
  bemify,
  Tabs,
  TabsItem,
  PaperButton,
  ButtonMenu,
  MenuItem
} from '@scipe/ui';
import Iconoclass from '@scipe/iconoclass';

export default class DemoTabs extends React.PureComponent {
  render() {
    const bem = bemify('demo-tabs');

    return (
      <Tabs className={bem``}>
        <TabsItem title="Editor">
          <ul className={bem`__items`}>
            <li className={bem`__item`}>
              <div className={bem`__item-icon`}>
                <Iconoclass iconName="sifter" iconSize={40} round={true} />
              </div>
              <h3 className={bem`__item-title`}>Configure</h3>

              <div className={bem`__item-content`}>
                <p className={bem`__text`}>
                  Organize your staff, setup editorial workflows, publication
                  type and journal styles.
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
                  incoming submissions
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
                {' '}
                <p className={bem`__text`}>
                  Review submissions, manage peer review and make your editorial
                  decision.
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
                  Publish and feature high quality content optimized for the web
                  and organize it into issues, special issues
                </p>

                <PaperButton raised={true} capsule={true}>
                  Launch demo
                </PaperButton>
              </div>
            </li>
          </ul>
        </TabsItem>
        <TabsItem title="Producer">
          <p>helo</p>
        </TabsItem>
        <TabsItem title="Reviewer">
          <p>helo</p>
        </TabsItem>
        <TabsItem title="Author">
          <p>helo</p>
        </TabsItem>
      </Tabs>
    );
  }
}
