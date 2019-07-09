import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import ScrollHighlight from './scroll-highlight';

const LayersGraphic = () => (
  <ScrollHighlight elementType="div" zoneTop={0} zoneBottom={0.2}>
    <div className="layers-graphic">
      <div className="layers-graphic__layer layers-graphic__layer--apps">
        <img
          className="layers-graphic__layer__image"
          src="/images/iso_ipad.svg"
          alt="App Suite layer"
          width="50%"
          height="50%"
        />
        <img
          className="layers-graphic__layer__icon"
          src="/images/layers-icons_apps-circle.svg"
          alt="scientific knowledge graph icon"
        />
        <div className="layers-graphic__layer__text">
          <ScrollLink
            to="products__target"
            spy={false}
            smooth={true}
            duration={750}
            offset={-50}
            className="layers-graphic__link"
          >
            <span className="layers-graphic__layer__title">App Suite</span>
          </ScrollLink>
          <span className="layers-graphic__layer__sub-title">
            The new, all inclusive, publishing experience.
          </span>
        </div>
      </div>
      <div className="layers-graphic__layer layers-graphic__layer--services">
        <img
          className="layers-graphic__layer__image"
          src="/images/iso_green.svg"
          alt="Services Layer"
          width="50%"
          height="50%"
        />
        <img
          className="layers-graphic__layer__icon"
          src="/images/layers-icons_services-circle.svg"
          alt="services icon"
        />
        <div className="layers-graphic__layer__text">
          <ScrollLink
            to="services__target"
            spy={false}
            smooth={true}
            duration={750}
            offset={-50}
            className="layers-graphic__link"
          >
            <span className="layers-graphic__layer__title">
              API, data and hosting
            </span>
          </ScrollLink>
          <span className="layers-graphic__layer__sub-title">
            Unrivaled control and customization.
          </span>
        </div>
      </div>
      <div className="layers-graphic__layer layers-graphic__layer--foundations">
        <img
          className="layers-graphic__layer__image"
          src="/images/iso_blue.svg"
          alt="Standard Layer"
          width="50%"
          height="50%"
        />
        <img
          className="layers-graphic__layer__icon"
          src="/images/layers-icons_open-circle.svg"
          alt="open standards icon"
        />
        <div className="layers-graphic__layer__text">
          <ScrollLink
            to="open-standards__target"
            spy={false}
            smooth={true}
            duration={750}
            offset={-50}
            className="layers-graphic__link"
          >
            <span className="layers-graphic__layer__title">
              Standard compliant infrastructure
            </span>
          </ScrollLink>
          <span className="layers-graphic__layer__sub-title">
            Interoperable, accessible, low-cost, web optimized.
          </span>
        </div>
      </div>
      <div className="layers-graphic__layer layers-graphic__layer--shadow">
        <img
          className="layers-graphic__layer__image"
          src="/images/iso_shadow.svg"
          alt="Shadow"
          width="50%"
          height="50%"
        />
      </div>
    </div>
  </ScrollHighlight>
);
export default LayersGraphic;
