import React from 'react';
import { BemTags, TextLogo } from '@scipe/ui';
import { Helmet } from 'react-helmet-async';
import DocumentationLicense from '../license.js';
import DemoTabs from './demo-tabs';
// import VideoPlayer from '../video-player';

export default class Demo extends React.PureComponent {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <article className={bem`api @__article @__default-sans-body-type`}>
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

        {/* Note: right now video says science.ai all over, so need to redo
            <section id="video" className={bem`@__section`}>
            <h2 className={bem`@__default-ui-type--headline`}>Video</h2>
         <VideoPlayer />
            </section>*/}

        {/*
        <DocumentationLicense />*/}
      </article>
    );
  }
}
