import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { bemify } from '@scipe/ui';
import Iconoclass from '@scipe/iconoclass';
import DiagramUser from './diagram-user';
import DiagramReviewer from './diagram-reviewer';
import DiagramPublic from './diagram-public';
import DiagramEditor from './diagram-editor';
import DiagramCube from './diagram-cube';
import DiagramWorkflow from './diagram-workflow';

export default class Diagram extends React.Component {
  static propTypes = {
    isMobile: PropTypes.bool.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      activeSection: 'none',
      hoveredSection: null
    };

    //meta physical alternatives journal:  'Journals provide everything needed to participate in the grand design of improving Philosophical Arts and Sciences',
    this.sectionTexts = {
      noneMobile: 'Tap on a caption key to learn more',
      none: 'Hover on a caption key to learn more',
      journal:
        'Journals are powered by a digital-first publishing engine that helps reduce the cost of publishing',
      workflow:
        'Smart Editorial Workflows let journals formally specify their rules of peer review and business models',
      author: (
        <span>
          Authors easily submit content with form-less submissions and benefit
          from lower <abbr title="Article Processing Charges">APCs</abbr>
        </span>
      ),
      reviewer: 'Reviewers work on annotatable, production-ready content',
      editor:
        'Editors get access to everything they need to assess, produce and publish submissions',
      public:
        'Readers benefit from a transparent peer review process and content optimized for the web'
    };
  }

  handlePointerEnter(section) {
    if (this.state.hoveredSection !== section) {
      this.setState({ hoveredSection: section });
    }
  }

  handlePointerLeave(section) {
    if (this.state.hoveredSection == section) {
      this.setState({ hoveredSection: null });
    }
  }

  handlePointerDown(section) {
    // act as a toggle for clicks
    this.setState({
      activeSection: this.state.activeSection === section ? 'none' : section,
      hoveredSection: section
    });
  }

  render() {
    const { isMobile } = this.props;
    const { activeSection, hoveredSection } = this.state;

    const displayedSection = hoveredSection || activeSection;
    const text = this.sectionTexts[
      isMobile && `${displayedSection}Mobile` in this.sectionTexts
        ? `${displayedSection}Mobile`
        : displayedSection
    ];

    const bem = bemify('diagram');
    return (
      <figure className={bem``}>
        <div className={bem`__illustration`}>
          <div
            className={bem`__user`}
            onPointerEnter={() => this.handlePointerEnter('author')}
            onMouseOver={() => this.handlePointerEnter('author')}
            onPointerLeave={() => this.handlePointerLeave('author')}
            onMouseOut={() => this.handlePointerLeave('author')}
            onClick={() => this.handlePointerDown('author')}
          >
            <DiagramUser
              active={
                hoveredSection === 'author' ||
                (hoveredSection == null && activeSection === 'author')
              }
            />
          </div>

          <div
            className={bem`__reviewer`}
            onPointerEnter={() => this.handlePointerEnter('reviewer')}
            onMouseOver={() => this.handlePointerEnter('reviewer')}
            onPointerLeave={() => this.handlePointerLeave('reviewer')}
            onMouseOut={() => this.handlePointerLeave('reviewer')}
            onClick={() => this.handlePointerDown('reviewer')}
          >
            <DiagramReviewer
              active={
                hoveredSection === 'reviewer' ||
                (hoveredSection == null && activeSection === 'reviewer')
              }
            />
          </div>

          <div
            className={bem`__cube`}
            onPointerEnter={() => this.handlePointerEnter('journal')}
            onMouseOver={() => this.handlePointerEnter('journal')}
            onPointerLeave={() => this.handlePointerLeave('journal')}
            onMouseOut={() => this.handlePointerLeave('journal')}
            onClick={() => this.handlePointerDown('journal')}
          >
            <DiagramCube
              active={
                hoveredSection === 'journal' ||
                (hoveredSection == null && activeSection === 'journal')
              }
            />
          </div>

          <div
            className={bem`__public`}
            onPointerEnter={() => this.handlePointerEnter('public')}
            onMouseOver={() => this.handlePointerEnter('public')}
            onPointerLeave={() => this.handlePointerLeave('public')}
            onMouseOut={() => this.handlePointerLeave('public')}
            onClick={() => this.handlePointerDown('public')}
          >
            <DiagramPublic
              active={
                hoveredSection === 'public' ||
                (hoveredSection == null && activeSection === 'public')
              }
            />
          </div>

          <div
            className={bem`__editor`}
            onPointerEnter={() => this.handlePointerEnter('editor')}
            onMouseOver={() => this.handlePointerEnter('editor')}
            onPointerLeave={() => this.handlePointerLeave('editor')}
            onMouseOut={() => this.handlePointerLeave('editor')}
            onClick={() => this.handlePointerDown('editor')}
          >
            <DiagramEditor
              active={
                hoveredSection === 'editor' ||
                (hoveredSection == null && activeSection === 'editor')
              }
            />
          </div>

          <div
            className={bem`__workflow`}
            onPointerEnter={() => this.handlePointerEnter('workflow')}
            onMouseOver={() => this.handlePointerEnter('workflow')}
            onPointerLeave={() => this.handlePointerLeave('workflow')}
            onMouseOut={() => this.handlePointerLeave('workflow')}
            onClick={() => this.handlePointerDown('workflow')}
          >
            <DiagramWorkflow
              active={
                hoveredSection === 'workflow' ||
                (hoveredSection == null && activeSection === 'workflow')
              }
            />
          </div>
        </div>

        <figcaption className={bem`__figcaption`}>
          <div
            className={classNames(bem`__section-texts`, {
              [bem`__section-texts--light`]: hoveredSection == null
            })}
          >
            {text}
          </div>

          <div className={bem`__key`}>
            <div
              className={classNames(bem`__key-icon`, {
                [bem`__key-icon--active`]:
                  (activeSection === 'journal' && hoveredSection == null) ||
                  hoveredSection === 'journal'
              })}
              onPointerEnter={() => this.handlePointerEnter('journal')}
              onMouseOver={() => this.handlePointerEnter('journal')}
              onPointerLeave={() => this.handlePointerLeave('journal')}
              onMouseOut={() => this.handlePointerLeave('journal')}
              onClick={() => this.handlePointerDown('journal')}
            >
              <Iconoclass iconName="journal" />
              Journal
            </div>

            <div
              className={classNames(bem`__key-icon __key-icon--signature`, {
                [bem`__key-icon--active`]:
                  (activeSection === 'workflow' && hoveredSection == null) ||
                  hoveredSection === 'workflow'
              })}
              onPointerEnter={() => this.handlePointerEnter('workflow')}
              onMouseOver={() => this.handlePointerEnter('workflow')}
              onPointerLeave={() => this.handlePointerLeave('workflow')}
              onMouseOut={() => this.handlePointerLeave('workflow')}
              onClick={() => this.handlePointerDown('workflow')}
            >
              <Iconoclass iconName="signature" round={true} />
              Smart Workflows
            </div>

            <div
              className={classNames(bem`__key-icon`, {
                [bem`__key-icon--active`]:
                  (activeSection === 'author' && hoveredSection == null) ||
                  hoveredSection === 'author'
              })}
              onPointerEnter={() => this.handlePointerEnter('author')}
              onMouseOver={() => this.handlePointerEnter('author')}
              onPointerLeave={() => this.handlePointerLeave('author')}
              onMouseOut={() => this.handlePointerLeave('author')}
              onClick={() => this.handlePointerDown('author')}
            >
              <Iconoclass iconName="roleAuthor" />
              Authors
            </div>

            <div
              className={classNames(bem`__key-icon`, {
                [bem`__key-icon--active`]:
                  (activeSection === 'reviewer' && hoveredSection == null) ||
                  hoveredSection === 'reviewer'
              })}
              onPointerEnter={() => this.handlePointerEnter('reviewer')}
              onMouseOver={() => this.handlePointerEnter('reviewer')}
              onPointerLeave={() => this.handlePointerLeave('reviewer')}
              onMouseOut={() => this.handlePointerLeave('reviewer')}
              onClick={() => this.handlePointerDown('reviewer')}
            >
              <Iconoclass iconName="roleReviewer" />
              Reviewers
            </div>

            <div
              className={classNames(bem`__key-icon`, {
                [bem`__key-icon--active`]:
                  (activeSection === 'editor' && hoveredSection == null) ||
                  hoveredSection === 'editor'
              })}
              onPointerEnter={() => this.handlePointerEnter('editor')}
              onMouseOver={() => this.handlePointerEnter('editor')}
              onPointerLeave={() => this.handlePointerLeave('editor')}
              onMouseOut={() => this.handlePointerLeave('editor')}
              onClick={() => this.handlePointerDown('editor')}
            >
              <Iconoclass iconName="roleEditor" />
              Editors
            </div>

            <div
              className={classNames(bem`__key-icon __key-icon--public`, {
                [bem`__key-icon--active`]:
                  (activeSection === 'public' && hoveredSection == null) ||
                  hoveredSection === 'public'
              })}
              onPointerEnter={() => this.handlePointerEnter('public')}
              onMouseOver={() => this.handlePointerEnter('public')}
              onPointerLeave={() => this.handlePointerLeave('public')}
              onMouseOut={() => this.handlePointerLeave('public')}
              onClick={() => this.handlePointerDown('public')}
            >
              <img
                src="/images/patron-icon.svg"
                width="24px"
                height="24px"
                className={bem`__patrons-icon`}
              />
              Public
            </div>
          </div>
        </figcaption>
      </figure>
    );
  }
}
