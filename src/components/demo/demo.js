import React from 'react';
import { BemTags, Tabs, TabsItem, PaperButton, TextLogo } from '@scipe/ui';
import Iconoclass from '@scipe/iconoclass';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import DocumentationLicense from '../license.js';
import DemoTabs from './demo-tabs';
import VideoPlayer from '../video-player';

export default class Demo extends React.PureComponent {
  static propTypes = {
    $content: PropTypes.object,
    onUpdate: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.rootRef = React.createRef();
  }

  componentDidMount() {
    if (this.rootRef.current) {
      this.props.onUpdate(this.rootRef.current);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.rootRef.current && prevProps.$content !== this.props.$content) {
      this.props.onUpdate(this.rootRef.current);
    }
  }

  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <article
        ref={this.rootRef}
        className={bem`api @__article @__default-sans-body-type`}
      >
        <Helmet>
          <title>Quick start guide • sci.pe</title>
        </Helmet>

        <header className={bem`header @__header`}>
          <h1 className={bem`@__default-ui-type--display-1`}>
            Quick start guide
          </h1>

          <p>
            This series of demos will allow you to get familiar with{' '}
            <TextLogo />.
          </p>

          <DemoTabs />
        </header>

        <section id="introduction" className={bem`@__section`}>
          <h2 className={bem`@__default-ui-type--headline`}>Video</h2>
          {/* Note: right now video says science.ai all over, so need to redo */}
          <VideoPlayer />
        </section>

        <DocumentationLicense />
      </article>
    );
  }
}
