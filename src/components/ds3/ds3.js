import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
// import Introduction from './introduction';
import Examples from './examples';
import StyleGuide from './style-guide';
import FAQ from './faq';
import Badge from './badge';
// import Version from './version';
import DocumentationLicense from '../license.js';
import { Helmet } from 'react-helmet-async';

export default class Ds3 extends React.PureComponent {
  static propTypes = {
    styleGuide: PropTypes.object, // TODO rewire / update
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
    const { styleGuide } = this.props;

    return (
      <div className="ds3" ref={this.rootRef}>
        <Helmet>
          <title>Docx Standard Scientific Style • sci.pe</title>
        </Helmet>
        <Header />
        <main>
          {/*<Introduction />*/}
          <StyleGuide styleGuide={styleGuide} />
          <Examples />
          <FAQ />
          <Badge />
          {/*<Version />*/}
          <DocumentationLicense />
        </main>
      </div>
    );
  }
}
