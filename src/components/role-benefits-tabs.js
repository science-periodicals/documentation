import React from 'react';
import { Tabs, TabsItem, bemify, TextLogo } from '@scipe/ui';
import Iconoclass from '@scipe/iconoclass';

export default class RoleBenefitsTabs extends React.Component {
  render() {
    const bem = bemify('role-benefits-tabs');

    return (
      <Tabs className={bem``}>
        <TabsItem title="Editors">
          <ul className={bem`__items`}>
            <li className={bem`__item`}>
              <div className={bem`__item-icon`}>
                <Iconoclass iconName="smartAction" iconSize={40} round={true} />
              </div>
              <h3 className={bem`__item-title`}>Everything a journal needs</h3>

              <p className={bem`__text`}>
                Typesetting, payment processing, hosting, peer review and
                flexible editorial workflows, it’s all included
              </p>
            </li>

            <li className={bem`__item`}>
              <div className={bem`__item-icon`}>
                <Iconoclass iconName="accessOpen" iconSize={40} round={true} />
              </div>
              <h3 className={bem`__item-title`}>
                Built to reduce{' '}
                <abbr title="Article Processing Charges">APCs</abbr>
              </h3>
              <p className={bem`__text`}>
                <TextLogo /> is committed to providing universal access to
                scientific information by lowering the cost of publishing.
              </p>
            </li>

            <li className={bem`__item`}>
              <div className={bem`__item-icon`}>
                <Iconoclass iconName="turnedIn" iconSize={40} round={true} />
              </div>
              <h3 className={bem`__item-title`}>
                Designed to maximize the impact of science
              </h3>
              <p className={bem`__text`}>
                From coral conservation to space exploration, <TextLogo /> uses
                the best markup and{' '}
                <abbr title="Search Engine Optimization">SEO</abbr> so that
                journal content gets the impact it deserves.
              </p>
            </li>
          </ul>
        </TabsItem>

        <TabsItem title="Authors">
          <ul className={bem`__items`}>
            <li className={bem`__item`}>
              <div className={bem`__item-icon`}>
                <Iconoclass iconName="formatSize" iconSize={40} round={true} />
              </div>
              <h3 className={bem`__item-title`}>Form-less submissions</h3>

              <p className={bem`__text`}>
                Authors drop the content they have, <TextLogo /> formats it for
                you.
              </p>
            </li>

            <li className={bem`__item`}>
              <div className={bem`__item-icon`}>
                <Iconoclass
                  iconName="questionAnswer"
                  iconSize={40}
                  round={true}
                />
              </div>
              <h3 className={bem`__item-title`}>Better feedback</h3>
              <p className={bem`__text`}>
                Secure conversations let authors dissipate misunderstanding when
                it matters. Annotations make revision requests easier to
                address.
              </p>
            </li>

            <li className={bem`__item`}>
              <div className={bem`__item-icon`}>
                <Iconoclass iconName="link" iconSize={40} round={true} />
              </div>
              <h3 className={bem`__item-title`}>Maximized impact</h3>
              <p className={bem`__text`}>
                Articles are optimized for search engines, and come with DOIs
                and fine-grained human readable identifiers so that every
                paragraph, sentence or figure of your work can be cited
                precisely.
              </p>
            </li>
          </ul>
        </TabsItem>

        <TabsItem title="Reviewers">
          <ul className={bem`__items`}>
            <li className={bem`__item`}>
              <div className={bem`__item-icon`}>
                <Iconoclass iconName="topRated" iconSize={40} round={true} />
              </div>
              <h3 className={bem`__item-title`}>Credit and attribution</h3>
              <p className={bem`__text`}>
                Get credit and attribution for all your work. <TextLogo />{' '}
                publishes the full editorial workflows along with the published
                article while respecting anonymity settings.
              </p>
            </li>

            <li className={bem`__item`}>
              <div className={bem`__item-icon`}>
                <Iconoclass iconName="personAdd" iconSize={40} round={true} />
              </div>
              <h3 className={bem`__item-title`}>Review under your terms</h3>
              <p className={bem`__text`}>
                Easily apply to be a reviewers of journals you value and know
                the full editorial process including remuneration options before
                committing to a review.
              </p>
            </li>

            <li className={bem`__item`}>
              <div className={bem`__item-icon`}>
                <Iconoclass iconName="feedback" iconSize={40} round={true} />
              </div>
              <h3 className={bem`__item-title`}>Provide better feedback</h3>

              <p className={bem`__text`}>
                Combine in context and general comments for efficient reviews
                and get access to production and data-rich content at all times.
              </p>
            </li>
          </ul>
        </TabsItem>

        <TabsItem title="Readers">
          <ul className={bem`__items`}>
            <li className={bem`__item`}>
              <div className={bem`__item-icon`}>
                <Iconoclass iconName="checkDouble" iconSize={40} round={true} />
              </div>
              <h3 className={bem`__item-title`}>Peer reviewed content</h3>
              <p className={bem`__text`}>
                Articles published on <TextLogo /> strictly follow editorial
                workflows created by journals. Those workflow act as smart
                contracts and are available to readers’ scrutiny.
              </p>
            </li>

            <li className={bem`__item`}>
              <div className={bem`__item-icon`}>
                <Iconoclass iconName="share" iconSize={40} round={true} />
              </div>
              <h3 className={bem`__item-title`}>Ready to be cited</h3>

              <p className={bem`__text`}>
                Articles come with impact statements and granular human readable
                identifiers so that any part of a work (from words to figues)
                can be precisely cited.
              </p>
            </li>

            <li className={bem`__item`}>
              <div className={bem`__item-icon`}>
                <Iconoclass
                  iconName="rolePublicGroup"
                  iconSize={40}
                  round={true}
                />
              </div>
              <h3 className={bem`__item-title`}>Participatory readership</h3>
              <p className={bem`__text`}>
                <TextLogo /> offers readers the option to easily join journals
                and respond to calls for submissions to help move science
                forward.
              </p>
            </li>
          </ul>
        </TabsItem>
      </Tabs>
    );
  }
}
