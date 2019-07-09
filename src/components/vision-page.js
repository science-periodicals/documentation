import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';
import {
  Card,
  bemify,
  TextLogo,
  LayoutWrapRows,
  LayoutWrapItem
} from '@scipe/ui';
import Diagram from './diagram/diagram';

export default class VisionPage extends React.Component {
  static propTypes = {
    user: PropTypes.object
  };

  render() {
    const bem = bemify('vision-page');
    return (
      <div className={bem``}>
        <Helmet>
          <title>Vision • sci.pe</title>
        </Helmet>

        <header>
          <h1 className={bem`__headline`}>
            <TextLogo /> vision
          </h1>
        </header>
        <Card className={bem`__content`}>
          <div className={bem`__body`}>
            <div className={bem`__section`}>
              <LayoutWrapRows gutterWidth={32}>
                <LayoutWrapItem className={bem`__col-spacer`} />
                <LayoutWrapItem flexBasis="320px">
                  <h2 className={bem`__section-title`}>
                    Scholarly publishing is under increasing pressure to reduce
                    costs and increase quality
                  </h2>
                </LayoutWrapItem>
              </LayoutWrapRows>
              <LayoutWrapRows className={bem`__sub-section`} gutterWidth={32}>
                <LayoutWrapItem flexBasis="320px">
                  <div className={bem`__pull-quote`}>
                    <p className={bem`__pull-quote-text`}>
                      Entire editorial staff of Elsevier journal Lingua resigns
                      over high price, lack of open access
                      <a
                        target="_blank"
                        rel="noreferrer noopener"
                        href="https://arstechnica.com/science/2015/11/entire-editorial-staff-of-elsevier-journal-lingua-resigns-over-high-price-lack-of-open-access/"
                        className={bem`__pull-quote-ref`}
                      >
                        arstechnica.com
                      </a>
                    </p>
                  </div>
                  <div className={bem`__timeline`}>
                    <div className={bem`__timeline__item`}>
                      <div className={bem`__timeline__item__year`}>2015</div>
                      <div className={bem`__timeline__item__text`}>
                        <p>
                          Mass resignation of editorial board over high APCs
                          (Lingua)
                        </p>
                      </div>
                    </div>
                    <div className={bem`__timeline__item`}>
                      <div className={bem`__timeline__item__year`}>2017</div>
                      <div className={bem`__timeline__item__text`}>
                        <p>
                          Wellcome Trust and Gates Foundation Open Access
                          policies take effect
                        </p>
                      </div>
                    </div>
                    <div className={bem`__timeline__item`}>
                      <div className={bem`__timeline__item__year`}>2018</div>
                      <div className={bem`__timeline__item__text`}>
                        <p>
                          French, German, and Swedish institutions cancel
                          subscription deals
                        </p>
                      </div>
                    </div>
                    <div className={bem`__timeline__item`}>
                      <div className={bem`__timeline__item__year`}>2019</div>
                      <div className={bem`__timeline__item__text`}>
                        <p>
                          University of California cancels subscription deal
                          with Elsevier; Mass resignation of editorial board
                          over high APCs (
                          <a
                            target="_blank"
                            rel="noreferrer noopener"
                            href="https://www.insidehighered.com/news/2019/01/14/elsevier-journal-editors-resign-start-rival-open-access-journal"
                          >
                            Journal of Infometrics
                          </a>
                          )
                        </p>
                      </div>
                    </div>
                    <div className={bem`__timeline__item`}>
                      <div className={bem`__timeline__item__year`}>2020</div>
                      <div className={bem`__timeline__item__text`}>
                        <p>Plan S takes effect</p>
                      </div>
                    </div>
                  </div>
                </LayoutWrapItem>
                <LayoutWrapItem flexBasis="320px">
                  <h3 className={bem`__sub-section-title`}>
                    Pressure to Lower Cost
                  </h3>
                  <div className={bem`__lead-copy`}>
                    <p>
                      Over the past decade the needs of scholarly journals have
                      transformed rapidly as digital publishing and open acccess
                      have induced wide-ranging changes to the publishing
                      industry.
                    </p>
                  </div>
                  <div className={bem`__copy`}>
                    <p>
                      As new Open Access policies come into effect, traditional
                      publishers have not met the needs of journals or
                      subscribers to make publications freely available.
                      Conversely, the cost for subscribers and authors continues
                      to increase despite customer dissatisfaction.
                    </p>
                    <p>
                      Authors, journals and subscribers are in search of new
                      approaches to scholarly publishing that reduce operating
                      costs and meet the requirements of Open Access.
                    </p>
                  </div>
                  <div className={bem`__copy`}>
                    <h3 className={bem`__sub-section-title`}>
                      Demand for higher quality
                    </h3>
                    <p>
                      Data and code publication requirements are increasing in
                      correspondance to the need for better reproduceability.
                    </p>
                    <p>
                      More rigourous review workflows are needed to meet the
                      demands for increased transparency.
                    </p>
                    <p>
                      The flexibility to experiment with new workflows (triple
                      blind, collaborative review, etc.) is needed to allow for
                      alternative approaches to peer review.
                    </p>
                  </div>
                </LayoutWrapItem>
              </LayoutWrapRows>
            </div>
            <div className={bem`__section`}>
              {/* Sci.pe Cost Comparison */}
              <LayoutWrapRows gutterWidth={32}>
                <LayoutWrapItem className={bem`__col-spacer`} />
                <LayoutWrapItem flexBasis="320px">
                  <h2 className={bem`__section-title`}>
                    <TextLogo /> Cost Comparison
                  </h2>
                </LayoutWrapItem>
              </LayoutWrapRows>
              <LayoutWrapRows gutterWidth={32}>
                <LayoutWrapItem flexBasis="320px">
                  <div className={bem`__pull-quote`}>
                    <p className={bem`__pull-quote-text`}>
                      It{`'`}s still ludicrous how much it costs to publish
                      research
                      <a
                        target="_blank"
                        rel="noreferrer noopener"
                        href="https://www.nature.com/news/open-access-the-true-cost-of-science-publishing-1.12676"
                        className={bem`__pull-quote-ref`}
                      >
                        Michael Eisen via nature.com
                      </a>
                    </p>
                  </div>
                </LayoutWrapItem>
                <LayoutWrapItem flexBasis="320px">
                  <div className={bem`__lead-copy`}>
                    <p>
                      sci.pe provides a low cost, high quality alternative to
                      publishers without compromising on features. With an
                      all-inclusive publishing platform, sci.pe drives down
                      publishing costs through tight technology integration
                      designed to reduce the the complexities commonly found in
                      more traditional publishing approaches.
                    </p>
                  </div>
                  <div className={bem`__chart`}>
                    <h4 className={bem`__chart__title`}>
                      cost of a published submission
                    </h4>
                    <img
                      className={bem`__chart__img`}
                      src="../images/vision-costs-chart.svg"
                      alt="Chart showing cost comparison of sci.pe vs others"
                    />
                    <span className={bem`__chart__key`}>
                      Price Per Published Submission
                    </span>
                  </div>
                  <div className={bem`__chart-ref`}>
                    Data from{' '}
                    <a
                      className={bem`__chart-ref__link`}
                      target="_blank"
                      rel="noreferrer noopener"
                      href="https://www.nature.com/news/open-access-the-true-cost-of-science-publishing-1.12676"
                    >
                      Open access: The true cost of science publishing
                    </a>
                  </div>
                </LayoutWrapItem>
              </LayoutWrapRows>
            </div>
            <div className={bem`__section`}>
              {/* Sci.pe Cost Comparison */}
              <LayoutWrapRows gutterWidth={32}>
                <LayoutWrapItem flexBasis="320px">
                  <div className={bem`__pull-quote`}>
                    <p className={bem`__pull-quote-text`}>
                      The largest costs lie in the startup process of advising,
                      prototyping, [and] creating workflows...
                      <a
                        target="_blank"
                        rel="noreferrer noopener"
                        href="https://www.webarchive.org.uk/wayback/archive/20140614041628/http://www.jisc.ac.uk/publications/reports/2009/economicpublishingmodelsfinalreport.aspx#downloads"
                        className={bem`__pull-quote-ref`}
                      >
                        Economic Implications of Alternative Scholarly
                        Publishing Models (p71).
                      </a>
                    </p>
                  </div>
                </LayoutWrapItem>
              </LayoutWrapRows>
            </div>
            <div className={bem`__section`}>
              {/* Sci.pe Empowers Journals */}

              <LayoutWrapRows gutterWidth={32}>
                <LayoutWrapItem flexBasis="320px">
                  <div className={bem`__chart`}>
                    <img
                      src="../images/vision-1-2-3.svg"
                      className={bem`__chart__img __chart-img---empowers`}
                    />
                  </div>
                </LayoutWrapItem>
                <LayoutWrapItem flexBasis="320px">
                  <h2 className={bem`__section-title`}>
                    <TextLogo /> Empowers Journals
                  </h2>
                  <div className={bem`__lead-copy`}>
                    <p>
                      <TextLogo /> replaces costly human-intensive processes
                      with a self-service API and user interface
                    </p>
                  </div>
                  <div className={bem`__copy`}>
                    <p>
                      <TextLogo /> empowers users to set up and run journals by
                      themselves (including typesetting, payment processing,
                      hosting, peer review and flexible editorial workflows)
                      with no technical expertise or custom development
                      required.
                    </p>
                  </div>
                </LayoutWrapItem>
              </LayoutWrapRows>
            </div>
            <div className={bem`__section`}>
              {/* Sci.pe Removes the need for cosly integrations */}

              <LayoutWrapRows gutterWidth={32}>
                <LayoutWrapItem flexBasis="320px">
                  <div className={bem`__figure`}>
                    <img
                      src="../images/vision-sci.pe-core-chart.svg"
                      className={bem`__figure__img`}
                    />
                  </div>
                </LayoutWrapItem>
                <LayoutWrapItem flexBasis="320px">
                  <h2 className={bem`__section-title`}>
                    <TextLogo /> Removes the Need for Costly & Complex
                    Integrations
                  </h2>
                  <div className={bem`__lead-copy`}>
                    <p>
                      <TextLogo /> core emphasizes configuration over code and
                      was designed to handle the heterogeneity inherent in
                      scholarly publishing without compromising on future
                      innovation potential.
                    </p>
                  </div>
                  <div className={bem`__copy`}>
                    <p>
                      A suite of plug-and-play integrations are available to
                      users without any costly custom develpoment.
                    </p>
                  </div>
                  <div className={bem`__pull-quote`}>
                    <p className={bem`__pull-quote-text`}>
                      ...These are large complex systems that have built up over
                      time to manage very heterogeneous processes, particularly
                      at large publishers. They are mostly pretty awful. Hated
                      in equal measure by both authors and publisher stuff.
                      <a
                        target="_blank"
                        rel="noreferrer noopener"
                        href="http://cameronneylon.net/blog/polecon-of-oa-publishing-i-what-is-it-publishers-do-anyway/"
                        className={bem`__pull-quote-ref`}
                      >
                        Cameron Neylon
                      </a>
                    </p>
                  </div>
                </LayoutWrapItem>
              </LayoutWrapRows>
            </div>
            <div className={bem`__section`}>
              <LayoutWrapRows gutterWidth={32}>
                <LayoutWrapItem flexBasis="320px">
                  <div className={bem`__pull-quote`}>
                    <p className={bem`__pull-quote-text`}>
                      What do almost all scientists agree about? The manuscript
                      management systems employed by most publishers. Scientists
                      detest these systems. They find them to be cumbersome and
                      they express real frustration and sometimes outright anger
                      over them.
                      <a
                        target="_blank"
                        rel="noreferrer noopener"
                        href="https://scholarlykitchen.sspnet.org/2017/12/20/end-aperta-journal-submission-systems-remain-challenging/"
                        className={bem`__pull-quote-ref`}
                      >
                        The Scholarly Kitchen
                      </a>
                    </p>
                  </div>
                </LayoutWrapItem>
              </LayoutWrapRows>
            </div>
            <div className={bem`__section`}>
              <LayoutWrapRows gutterWidth={32}>
                <LayoutWrapItem flexBasis="320px">
                  <div className={bem`__figure __figure--diagram`}>
                    <Diagram isMobile={false} />
                  </div>
                </LayoutWrapItem>
                <LayoutWrapItem flexBasis="320px">
                  <h2 className={bem`__section-title`}>
                    <TextLogo /> reinvents the scholarly publishing platform
                  </h2>
                  <div className={bem`__copy`}>
                    <ul className={bem`__list`}>
                      <li>
                        Cheaper (lower costs to allow for reduced APCs and
                        profitable Open Access publishing)
                      </li>
                      <li>Simpler and more efficient (all inclusive)</li>
                      <li>
                        More flexible (configuration is done through a “lego
                        block” approach where building blocks can be infinitely
                        composed to design any settings as opposed to having to
                        request additional hard coded options)
                      </li>
                      <li>
                        Extensible (“app-store” approach for users / powerful
                        hypermedia API for service providers)
                      </li>
                      <li>
                        More rigorous (all data and processes - from articles to
                        editorial workflows - are formally defined and readable
                        by humans and machines and support strict anonymity
                        requirements)
                      </li>
                      <li>
                        Built on mainstream open web standards (zero lock-in &
                        future proof)
                      </li>
                    </ul>
                  </div>
                </LayoutWrapItem>
              </LayoutWrapRows>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}
