import React from 'react';
import { BemTags } from '@scipe/ui';
import Figures from './figures';
import Tables from './tables';
import Code from './code';
import Math from './math';
import TextBox from './text-box';
import Audio from './audio';
import Video from './video';
import Dataset from './dataset';
import FlavoredLinks from './flavored-links';

const bem = new BemTags('@sa', '@documentation');

export default class ArticleBody extends React.Component {
  render() {
    return (
      <section id="example-rdfa-body" className={bem`@__sub-section`}>
        <h3 className={bem`@__default-ui-type--subhead-1`}>Body</h3>

        <Figures />
        <Audio />
        <Video />
        <Tables />
        <Code />
        <TextBox />
        <Dataset />
        <Math />

        <FlavoredLinks />
      </section>
    );
  }
}
