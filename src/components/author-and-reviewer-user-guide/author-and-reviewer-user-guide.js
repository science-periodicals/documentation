import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Iconoclass from '@scipe/iconoclass';
import { BemTags, TextLogo } from '@scipe/ui';
import Info from '../info';
import DocumentationLicense from '../license.js';

export default class AuthorAndReviewerUserGuide extends React.PureComponent {
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
        className={bem`author-and-reviewer-user-guide @__article @__default-sans-body-type`}
      >
        <Helmet>
          <title>Author and reviewer user guide • sci.pe</title>
        </Helmet>
        <header className={bem`@__header`}>
          <h1 className={bem`@__default-ui-type--display-1`}>
            Author and reviewer user guide
          </h1>

          <img
            src="/images/authors-logo.png"
            alt="author and reviewer guide logo"
          />
        </header>

        <section id="introduction" className={bem`@__section`}>
          <h2 className={bem`@__default-ui-type--headline`}>Introduction</h2>
          <p>
            <TextLogo /> provides authors and reviewers with everything needed
            to start, track and review submissions in one place. For example, an
            author completing a revision can view any reviews and decision
            letters while responding to editor revision requests directly on the
            submission, or a reviewer writing a review can view the author
            revision and responses to previous revision requests while adding
            reviews in context.
          </p>
          <p>
            This guide provides authors and reviewers with an overview of{' '}
            <TextLogo /> and how to{' '}
            <a href="#navigating-workflows">navigate workflows</a>,{' '}
            <a href="#accessing-required-context">
              access the required context
            </a>{' '}
            needed to work on a submission,{' '}
            <a href="#working-with-annotations">work with annotations</a>, and{' '}
            <a href="#processing-submissions">process submissions</a>.
          </p>{' '}
          <p>
            {' '}
            See the <a href="#faq">FAQ</a> below for answers to commonly asked
            questions.
          </p>
        </section>

        <section
          id="starting-and-tracking-submissions"
          className={bem`@__section`}
        >
          <h2 className={bem`@__default-ui-type--subhead-1`}>
            Starting and keeping track of submissions as an author
          </h2>
          <p>
            Authors can start and keep track of submissions from their{' '}
            <TextLogo /> dashboard.{' '}
          </p>
          <p>
            New submisssions can be started by clicking the blue plus button and
            filling out the short submission form (see{' '}
            <a href="#start-submission">“How do I start a new submission?”</a>{' '}
            in the FAQ for more information).
          </p>
          <figure className={bem`@__figure`}>
            <figcaption className={bem`@__figure-caption`}>
              {' '}
              Example of a new submission started from the author dashboard.
            </figcaption>

            <img
              className={bem`@__figure-image @--screen-shot`}
              src="/images/author-submission-form-dashboard.png"
              alt="Author starts a new submission from the dashboard"
            />
          </figure>
          <p>
            Once a submission has been started, it will appear on the author
            dashboard as a card, with a preview of all submission metadata and a
            timeline detailing all completed and in progress work on the
            submission. This enables authors to quickly check the status of a
            submission in progress.
          </p>
          <figure className={bem`@__figure`}>
            <figcaption className={bem`@__figure-caption`}>
              {' '}
              Example of a new submission card on the author dashboard.
            </figcaption>

            <img
              className={bem`@__figure-image @--screen-shot`}
              src="/images/author-submission-card-dashboard.png"
              alt="Card of author submission started from the dashboard"
            />
          </figure>
          <p>
            Notifications and comment alerts (right panel) provide authors with
            a real-time feed of work being done on their submissions. For
            authors with multiple submissions, facets (left panel) help to
            filter and find submissions.
          </p>
          <figure className={bem`@__figure`}>
            <figcaption className={bem`@__figure-caption`}>
              {' '}
              Example of an author dashboard with submissions, facets for
              search, and notifications of recent activity.
            </figcaption>

            <img
              className={bem`@__figure-image @--screen-shot`}
              src="/images/author-dashboard-submission.png"
              alt="Author dashboard with multiple submissions, facets, and notifications"
            />
          </figure>
        </section>

        <section id="starting-submissions" className={bem`@__section`}>
          <h2 className={bem`@__default-ui-type--subhead-1`}>
            Joining submissions as a reviewer
          </h2>
          <p>
            Reviewers can view invitations to review and join submissions from
            their <TextLogo /> dashboard. Invitations to review will appear in
            the right panel. Reviewers can click on the submission name to view
            a preview of the submission prior to accepting or rejecting an
            invitation to review.
          </p>
          <figure className={bem`@__figure`}>
            <figcaption className={bem`@__figure-caption`}>
              {' '}
              Example of a reviewer dashboard with an invitation to review in
              the right panel.
            </figcaption>

            <img
              className={bem`@__figure-image @--screen-shot`}
              src="/images/reviewer-dashboard-invitation.png"
              alt="Reviewer dashboard with invitation to review"
            />
          </figure>

          <figure className={bem`@__figure`}>
            <figcaption className={bem`@__figure-caption`}>
              {' '}
              Example of a reviewer preview of a submission prior to accepting
              the invitation. The reviewer can accept or reject the invitation
              to review directly from the preview.
            </figcaption>

            <img
              className={bem`@__figure-image @--screen-shot`}
              src="/images/reviewer-preview-invite.png"
              alt="Preview of submission to review with header button to accept the invitation"
            />
          </figure>
          <p>
            Reviewer invitations can be accepted from the dashboard or from the
            submission preview.{' '}
          </p>
          <p>
            Once a reviewer accepts an invitation to review, the submission to
            review will appear on the reviewer dashboard as a card, with a
            preview of all submission metadata and a timeline detailing all
            completed and in progress work on the submission. This enables
            reviewers to quickly check the deadline of their review.
          </p>
          <p>
            For reviewers working on multiple submissions, facets (left panel)
            help to filter and find submissions.
          </p>

          <figure className={bem`@__figure`}>
            <figcaption className={bem`@__figure-caption`}>
              {' '}
              Example of a reviewer dashboard with multiple submissions in
              progress.
            </figcaption>

            <img
              className={bem`@__figure-image @--screen-shot`}
              src="/images/reviewer-dashboard-submission.png"
              alt="Reviewer dashboard with submissions in progress"
            />
          </figure>
        </section>

        <section id="navigating-workflows" className={bem`@__section`}>
          <h2 className={bem`@__default-ui-type--headline`}>
            Navigating workflows
          </h2>
          <p>
            A workflow is made of stages and a workflow stage is composed of
            actions. Authors and reviewers can access all completed and in
            progress stages (e.g., submission, review, revision, and production
            stages) and actions (e.g., to upload, review, or assess a
            submission) of a workflow from the submission workspace (left
            panel).
          </p>
          <figure className={bem`@__figure`}>
            <figcaption className={bem`@__figure-caption`}>
              Example of a submission workspace with workflow stages and actions
              (left panel). The workflow is opened on a completed decision after
              review during a review stage.
            </figcaption>
            <img
              src="/images/author-reviewer-submission-workspace-workflow.png"
              alt="submission workspace with workflow stages and actions panel open on previously completed action"
              className={bem`@__figure-image @--screen-shot`}
            />
          </figure>

          <Info className={bem`@__info-panel`}>
            <header id="shell-editor">Smart editorial workflows</header>
            <p>
              Journal editorial workflows are defined by{' '}
              <Link to="/get-started/workflows">smart editorial workflows</Link>
              . Smart editorial workflows allow journals to express the dynamics
              of any peer review process (including cycles of submission,
              review, and revision, and the collaboration and commenting that is
              needed before a decision can be reached).
            </p>
            <p>
              Journal workflows defined by smart editorial workflows are
              human-readable (so authors and reviewers can understand what will
              be done before deciding to submit or agreeing to review) and
              formally defined (so that the rules they contain can be enforced
              by machines).
            </p>
          </Info>
        </section>

        <section id="accessing-required-context" className={bem`@__section`}>
          <h2 className={bem`@__default-ui-type--headline`}>
            Accessing required context
          </h2>
          <p>
            All the material needed to complete, revise, or review a submission
            is available to authors and reviewers in one place. <TextLogo />{' '}
            eliminates the need to keep track of disparate emails and files
            because all the information needed to complete work on a submission
            is available in context.{' '}
          </p>
          <p>
            To help authors and reviewers complete their work, the submission
            workspace contains both outbound and inbound resources:
          </p>
          <ul className={bem`@__list`}>
            <li>
              {' '}
              Outbound resources contain work that needs to be done (e.g., a
              review action that needs to be completed, or a file with revision
              requests that need to be addressed).{' '}
            </li>
            <li>
              Inbound resources provide the necessary context for completing
              work (e.g., a completed editor assessment or a review provides the
              context needed for the author to respond to a revision request).
            </li>
          </ul>
          <figure className={bem`@__figure`}>
            <figcaption className={bem`@__figure-caption`}>
              Example of a submission workspace with inbound and outbound
              resources (left panel). Here a reviewer must complete a review
              action. The editor assessment leading to the review is available
              as an inbound resource. It can be opened in a shell to help the
              reviewer to complete a review.
            </figcaption>
            <img
              src="/images/author-reviewer-submission-workspace-resources.png"
              alt="submission workspace with inbound and outbound resources"
              className={bem`@__figure-image @--screen-shot`}
            />
          </figure>
        </section>

        <section id="working-with-annotations" className={bem`@__section`}>
          <h2 className={bem`@__default-ui-type--headline`}>
            Working with annotations
          </h2>
          <p>
            General or contextual annotations can be added to any outbound
            resource when relevant. For example, contextual annotations can
            allow authors to more easily collaborate with coauthors and respond
            to revision requests, and reviewers to enrich reviews.
          </p>
          <figure className={bem`@__figure`}>
            <figcaption className={bem`@__figure-caption`}>
              Example of a submission workspace with contextual annotations
              (left panel). Here an author must submit a revision and address
              editor revision request annotations on the previous version of the
              submission (red bar indicates previous version).
            </figcaption>
            <img
              src="/images/author-reviewer-submission-workspace-annotations.png"
              alt="workflow with revision request, reviewer, and author response annotations"
              className={bem`@__figure-image @--screen-shot`}
            />
          </figure>
        </section>

        <section id="processing-submissions" className={bem`@__section`}>
          <h2 className={bem`@__default-ui-type--headline`}>
            Processing submissions
          </h2>
          <p>
            To determine what is being done on a submission and what needs to be
            done next, authors and reviewers can check the current state of an
            action. Actions can be in one of four states:
          </p>
          <ul className={bem`@__list`}>
            <li>
              {' '}
              <a href="#active-actions">Active</a> (actions that need to be
              completed),
            </li>
            <li>
              {' '}
              <a href="#staged-actions">Staged</a> (actions open to
              participation),
            </li>
            <li>
              <a href="#completed-actions">Completed</a> (actions done
              previously), or{' '}
            </li>
            <li>
              <a href="#waiting-actions">Waiting</a> (actions others need to
              complete first).
            </li>
          </ul>

          <section id="active-actions" className={bem`@__sub-section`}>
            <h3 className={bem`@__default-ui-type--subhead-1`}>
              Active actions
            </h3>
            <p>
              Active actions are actions requiring attention (e.g., to{' '}
              <a href="#write-reviews">write a review</a> or{' '}
              <a href="#revision-requests">respond to a revision request</a>).
              An action that is active will be marked with an exclamation point
              (
              <Iconoclass
                className={bem`__icon`}
                tagName="span"
                iconName="warning"
                round={false}
                size="2rem"
              />
              ). Active actions can be found in the list of outbound resources (
              <Iconoclass
                className={bem`__icon`}
                tagName="span"
                iconName="outbound"
                round={false}
                size="2rem"
              />
              )
            </p>
            <p>
              An error system allows authors and reviewers to step through each
              of the fields that must be completed before an active action can
              be submitted (or staged). Required fields will be marked with an{' '}
              <strong>action required</strong> error message (
              <Iconoclass
                className={bem`__icon`}
                tagName="span"
                iconName="warningTriangle"
                round={false}
                size="2rem"
              />
              ). When fields are completed, the error message will disappear.
            </p>
            <figure className={bem`@__figure`}>
              <figcaption className={bem`@__figure-caption`}>
                Example of a review action with four ‘action required’ error
                messages on fields that must be completed and facets (bottom
                left) to quickly navigate between required action annotations.
              </figcaption>
              <img
                src="/images/active-reviewer-action.png"
                alt="reviewer actions"
                className={bem`@__figure-image @--screen-shot`}
              />
            </figure>

            <Info className={bem`@__info-panel`}>
              <header id="shell-editor">
                Completing required fields with the shell editor
              </header>
              <p>
                Some fields of an active action require additional context to
                complete. These fields can be opened and edited in a shell
                editor. Editing a field in a shell allows to scroll and view any
                other resource while continuing to edit the field. This is
                useful, for example, if a reviewer needs to view the manuscript
                while writing a general review note.
              </p>
              <p>
                Fields that can be edited in a shell will have a shell icon (
                <Iconoclass
                  className={bem`__icon`}
                  tagName="span"
                  iconName="shell"
                  round={false}
                  size="2rem"
                />
                ). Clicking on the icon will open the shell for editing.
              </p>
              <figure className={bem`@__figure`}>
                <figcaption className={bem`@__figure-caption`}>
                  Example of the shell editor for editing a general reviewer
                  note while viewing the manuscript.
                </figcaption>
                <img
                  src="/images/general-reviewer-comments.png"
                  alt="general reviewer comments"
                  className={bem`@__figure-image @--screen-shot`}
                />
              </figure>
            </Info>

            <Info>
              <header>Linking to content</header>
              <p>
                When writing a review as a reviewer or responding to a revision
                request as an author, it may be helpful to reference a specific
                paragraph or resource of the manuscript. <TextLogo /> provides
                permanent links (‘permalinks’) for every section, paragraph, and
                resource of a manuscript to enable authors and reviewers to
                easily reference a precise location.
              </p>
              <p>
                Permalinks can be added to any text field with autocomplete.
                Typing the pound (<code>#</code>) symbol opens a list of
                referenceable locations with previews to chose from. A permalink
                is automatically added for the selected location.
              </p>
              <p>
                Links can also be added manually, but must be formatted using
                Markdown. Links added using autocomplete are automatically
                formatted.
              </p>
              <p>
                Note, in cases where there are two versions of the manuscript
                (e.g., during an author revision), links in the autocomplete
                menu point to the latest version of the content.
              </p>
              <figure className={bem`@__figure`}>
                <figcaption className={bem`@__figure-caption`}>
                  <p>
                    Example of a permalink added using the autocomplete menu in
                    an author response to an editor revision request.
                  </p>
                </figcaption>
                <img
                  src="/images/permalink-autocomplete-author.png"
                  alt="autocomplete menu to select an identifier in an author response to an editor revision request comment"
                  className={bem`@__figure-image @--screen-shot`}
                />
              </figure>
            </Info>

            <Info className={bem`@__info-panel`}>
              <header id="shell-reader">
                Viewing resources with the shell reader
              </header>
              <p>
                In some cases, previously{' '}
                <a href="#completed-actions">completed actions</a> are attached
                to the active action as inbound resources{' '}
                <Iconoclass
                  className={bem`__icon`}
                  tagName="span"
                  iconName="inbound"
                  round={false}
                  size="2rem"
                />
                ) to help provide additional context when completing the action.
                Inbound resources can be opened and read in a shell (
                <Iconoclass
                  className={bem`__icon`}
                  tagName="span"
                  iconName="shell"
                  round={false}
                  size="2rem"
                />
                ). This allows authors and reviewers to continue viewing the
                inbound resource while performing an action or adding a comment
                in-context.{' '}
              </p>
              <p>
                Clicking on the identifier (e.g., #1.3
                <Iconoclass
                  className={bem`__icon`}
                  tagName="span"
                  iconName="shell"
                  round={false}
                  size="1rem"
                />
                ) of the corresponding action in the inbound resource section on
                the left panel opens a shell.
              </p>

              <figure className={bem`@__figure`}>
                <figcaption className={bem`@__figure-caption`}>
                  <p>
                    Example of an author viewing the completed assessment (#1.3
                    <Iconoclass
                      className={bem`__icon`}
                      tagName="span"
                      iconName="shell"
                      round={false}
                      size="1rem"
                    />
                    ) in a shell while responding to a revision request comment
                    in context.
                  </p>
                </figcaption>
                <img
                  src="/images/author-inbound-shell.png"
                  alt="view inbound resource in a shell"
                  className={bem`@__figure-image @--screen-shot`}
                />
              </figure>
            </Info>

            <Info className={bem`@__info-panel`}>
              <header>Invoking services</header>
              <p>
                Some actions in an active state may have services available. If
                services are available (such as a semantic typesetting service
                during an author upload action), an annotation will appear on
                the author manuscript with a notification to view available
                services.
              </p>
              <figure className={bem`@__figure`}>
                <figcaption className={bem`@__figure-caption`}>
                  Example of an author service for semantic typesetting invoked
                  during submission.
                </figcaption>
                <img
                  className={bem`@__figure-image @--screen-shot`}
                  src="/images/author-services-available.png"
                  alt="author services available"
                />
              </figure>
            </Info>
          </section>

          <section id="staged-actions" className={bem`@__sub-section`}>
            <h3 className={bem`@__default-ui-type--subhead-1`}>
              Staged actions
            </h3>
            <p>
              When an action is staged, it is open to comments. Comments can be
              used for collaboration (e.g., authors can add comments while
              working together on a submission), or to provide feedback as an
              outside participant (e.g., an editor can comment on a staged
              author submission to flag missing resources or an author can
              comment on a review to{' '}
              <a href="#endorser-requests">
                request changes during an endorsement
              </a>
              ). Comments can be added as{' '}
              <a href="#staged-actions-general-comments">general comments</a> on
              the action, or directly{' '}
              <a href="#staged-actions-contextual-comments">in-context</a>.
            </p>

            <section
              id="staged-actions-general-comments"
              className={bem`@__sub-section`}
            >
              <h4 className={bem`@__default-ui-type--subhead-2`}>
                General comments
              </h4>
              <p>
                Comments not targeting a specific field, section, resource or
                selection of text can be added as general comments on the
                action.{' '}
              </p>
              <p>
                General comments can be added to any action as part of the{' '}
                <strong>staging discussion</strong>.
              </p>

              <figure className={bem`@__figure`}>
                <figcaption className={bem`@__figure-caption`}>
                  Example of general comments on a declare action to address
                  submission questions.
                </figcaption>
                <img
                  className={bem`@__figure-image @--screen-shot`}
                  src="/images/general-comments-shell.png"
                  alt="general comments in a shell on an action"
                />
              </figure>
            </section>

            <section
              id="staged-actions-contextual-comments"
              className={bem`@__sub-section`}
            >
              <h4 className={bem`@__default-ui-type--subhead-2`}>
                Contextual comments
              </h4>
              <p>
                Comments about a specific field of the action (e.g., an author
                response to a question, an editor decision, or a reviewer review
                rating) or any section, resource or selection of text in the
                manuscript can be added directly, in context.
              </p>
              <p>
                Content that can be commented will have a blue select bar on the
                left. Click on the select bar to add a contextual comment to the
                entire block or highlight a selection of text to add a
                contextual comment to the selection only.
              </p>
              <figure className={bem`@__figure`}>
                <figcaption className={bem`@__figure-caption`}>
                  Example of a declare action where authors have answered
                  submission questions and staged the action for commenting, and
                  the editor has added an in-context comment to help ensure that
                  author answers are complete.
                </figcaption>
                <img
                  className={bem`@__figure-image @--screen-shot`}
                  src="/images/staged-author-ask-action-no-endorse.png"
                  alt="staged author declare action with collaborative comments"
                />
              </figure>
            </section>

            <Info className={bem`@__info-panel`}>
              <header>Endorsed actions</header>
              <p>
                Some staged actions can be endorsed. For actions requiring an
                endorsement, after staging the action to open it for comments,
                there will no longer be a <em>submit</em> button. Actions
                requiring an endorsement can only be completed once the endorser
                has endorsed the action.{' '}
              </p>
              <p>
                The endorser of an action can add endorser comments (e.g., to
                request changes). Once the endorser is satisfied that their
                comments have been addressed, they can endorse (and complete)
                the action.
              </p>
              <figure className={bem`@__figure`}>
                <figcaption className={bem`@__figure-caption`}>
                  Example of the heading of an author declare action as in the
                  figure <a href="#staged-actions-contextual-comments">above</a>
                  , but when an endorsement is required. Note, the author no
                  longer has a button to <em>submit</em> the action after
                  staging, but rather has to wait for the endorser to endorse
                  and complete the action
                </figcaption>
                <img
                  className={bem`@__figure-image @--screen-shot`}
                  src="/images/endorse-header-author-view.png"
                  alt="author view of ask action header when endorsement is required"
                />
              </figure>
              <p>
                For information on how to request changes during an endorsement{' '}
                <em>as the endorser</em>, see the FAQ response{' '}
                <a href="#endorser-requests">below</a>.
              </p>
            </Info>
          </section>

          <section id="completed-actions" className={bem`@__sub-section`}>
            <h3 className={bem`@__default-ui-type--subhead-1`}>
              Completed actions
            </h3>
            <p>
              Completed actions are actions that have been completed previously
              and are closed to commenting. Completed actions are provided as{' '}
              <em>inbound resources</em> (
              <Iconoclass
                className={bem`__icon`}
                tagName="span"
                iconName="inbound"
                round={false}
                size="2rem"
              />
              ) during an active action to help authors and reviewers perform
              their work (see <a href="#shell-reader">above</a> for more on
              viewing completed actions during an active action). Authors and
              reviewers can also refer to completed actions from any previous
              stage to track the status of a submission.
            </p>
            <figure className={bem`@__figure`}>
              <figcaption className={bem`@__figure-caption`}>
                Example of a completed author upload action.
              </figcaption>
              <img
                className={bem`@__figure-image @--screen-shot`}
                src="/images/completed-action.png"
                alt="completed author submission"
              />
            </figure>
          </section>

          <section id="waiting-actions" className={bem`@__sub-section`}>
            <h3 className={bem`@__default-ui-type--subhead-1`}>
              Actions in a waiting state
            </h3>
            <p>
              Actions will be in a waiting state (
              <Iconoclass
                className={bem`__icon`}
                tagName="span"
                iconName="time"
                round={false}
                size="2rem"
              />
              ) when another user must complete work before the action can be
              opened for commenting (and/or endorsement). For example, in the
              figure below, an author must wait for a reviewer to complete a
              review action before they can see the reviews and endorse it.
            </p>
            <figure className={bem`@__figure`}>
              <figcaption className={bem`@__figure-caption`}>
                Example of an action in a waiting state. Here, an author is
                waiting on a reviewer to complete the review before the author
                can endorse it.
              </figcaption>
              <img
                className={bem`@__figure-image @--screen-shot`}
                src="/images/waiting-state.png"
                alt="author action in a waiting state"
              />
            </figure>
          </section>
        </section>

        <section id="faq" className={bem`@__section`}>
          <h2 className={bem`@__default-ui-type--headline`}>FAQ</h2>
          <p>Below are answers to the following frequently asked questions:</p>
          <ul className={bem`@__list`}>
            <li>
              <a href="#start-submission">How do I start a new submission?</a>
            </li>

            <li>
              <a href="#benefits">Why should I write an impact statement?</a>
            </li>
            <li>
              <a href="#how-to-write-impact-statement">
                How do I write an impact statement?
              </a>
            </li>
            <li>
              <a href="#write-reviews">How do I write a review?</a>
            </li>
            <li>
              <a href="#paid-reviews">Can I get paid as a reviewer?</a>
            </li>
            <li>
              <a href="#revision-requests">
                How do I respond to revision requests?
              </a>
            </li>
            <li>
              <a href="#endorser-requests">
                How do I request a change during an endorsement?
              </a>
            </li>
            <li>
              <a href="#request-discount">
                How do I request a discount on a fee?
              </a>
            </li>
          </ul>

          <section id="start-submission" className={bem`@__sub-section`}>
            <h3 className={bem`@__default-ui-type--subhead-1`}>
              How do I start a new submission?
            </h3>
            <p>
              Submissions can be started from a journal homepage or from your{' '}
              <TextLogo /> dashboard{' '}
              <Iconoclass
                className={bem`__icon`}
                tagName="span"
                iconName="add"
                round={true}
                size="2rem"
              />
              . If a submission was started from the journal homepage, the
              journal will be automatically selected in the submission form,
              otherwise, a journal must be selected.
            </p>
            <p>
              Journals may offer different publication types for new submissions
              (e.g., an observation, research article, or review article type).
              Select the type that most closely matches your submission.{' '}
            </p>
            <p>
              Some publication types may let you decide between different
              editorial workflows (e.g., single blind peer review workflow vs.
              double blind peer review workflow). Select your preferred
              editorial workflow. For more information on editorial workflows,
              see the{' '}
              <Link to="/get-started/workflows">
                smart editorial workflows guide
              </Link>{' '}
            </p>
            <p>
              Finally, journals may let you select the editor to submit to. If
              the journal provides more than one contact point, select the
              editor best suited to your submission topic.{' '}
            </p>
            <figure className={bem`@__figure`}>
              <figcaption className={bem`@__figure-caption`}>
                Example of a new submission form with multiple submission types
                and eligible workflows for each type. Here the author selects an
                observation type with a single blind peer review workflow.
              </figcaption>{' '}
              <img
                className={bem`@__figure-image @--screen-shot`}
                src="/images/start-submission.png"
                alt="author submission form with multiple types, workflows, and editors to pick from"
              />
            </figure>
          </section>

          <section className={bem`@__sub-section`} id="benefits">
            <h3 className={bem`@__default-ui-type--subhead-1`}>
              Why should I write an impact statement?
            </h3>
            <p>
              An impact statement (also known as a plain language summary,
              significance statement, highlight, digest, or lay abstract; see{' '}
              <a href="https://elifesciences.org/articles/25411">
                Shailes 2017
              </a>
              ) is a summary of a journal article written in language that can
              be understood by the general public, decision makers and managers,
              and other scientists. An impact statement explains what an article
              is about and its broad significance,{' '}
              <i>without using jargon or technical language</i>.
            </p>
            <p>
              Writing an impact statement will help to increase the{' '}
              <a href="#benefits-more-impact">impact</a> and{' '}
              <a href="#benefits-more-discoverable">discoverability</a> of your
              work.
            </p>
            <section className={bem`@__sub-section`} id="benefits-more-impact">
              <h4 className={bem`@__default-ui-type--subhead-2`}>
                More impact
              </h4>
              <p>
                Traditionally, journalists were responsible for communicating
                scientific results to the public. With growing scientific
                output, fewer than 3 out of every 1,000 scientific journal
                articles published today get the attention of traditional media
                (tv, radio, and print), and even less for articles outside
                health and medicine (
                <a href="http://journals.sagepub.com/doi/abs/10.1177/0963662508096776">
                  Suleski and Ibaraki 2009
                </a>
                ). Impact statements can create reliable, direct pathways
                between scientists, journalists, and the public for <i>every</i>{' '}
                article published.
              </p>
            </section>

            <section
              className={bem`@__sub-section`}
              id="benefits-more-discoverable"
            >
              <h4 className={bem`@__default-ui-type--subhead-2`}>
                More discoverable
              </h4>

              <p>
                Within the general public, 87% of online users rely on the
                internet for research activities like fact-checking or looking
                up scientific terms (
                <a href="http://www.pewinternet.org/2006/11/20/the-internet-as-a-resource-for-news-and-information-about-science/">
                  Horrigan 2006
                </a>
                ). Impact statements are excellent for improving access to
                scientific information for informed, public debate. However,
                these summaries are often buried online (appearing several pages
                down on a mobile device) and fail to appear in search result
                summaries and social network embedded views.
              </p>

              <p>
                Content published on <TextLogo /> follows the best markup
                practices already employed across the Internet from e-commerce
                sites to cooking recipes. Impact statements published in
                articles on <TextLogo /> are discoverable in mainstream search
                results and visible on social networks. Increased visibility
                leads to increased impact (
                <a href="http://journals.plos.org/plosone/article?id=10.1371/journal.pone.0064841">
                  Thelwall 2013
                </a>
                ;{' '}
                <a href="http://journals.sagepub.com/doi/abs/10.1177/1077699014550092">
                  Liang et al. 2014
                </a>
                ).
              </p>

              <Info className={bem`@__info-panel`}>
                <header>Impact statements for public health</header>
                <p>
                  <em>The Journal of Global Health Leadership</em> is a newly
                  launched journal. The journal decided to require impact
                  statements for all research and review articles submitted to
                  the journal from the very beginning.{' '}
                  <q>
                    Impact statements enable all readers - whether they are
                    patients, physicians, students, teachers or anyone else with
                    an interest in the research - to understand the public
                    health implications of the articles we publish
                  </q>
                  , says Tony Smith, managing editor at{' '}
                  <em>The Journal of Global Health Leadership</em>. The Journal
                  works closely with authors to write and edit impact statements
                  for accepted articles.
                </p>
              </Info>
            </section>
          </section>

          <section
            id="how-to-write-impact-statement"
            className={bem`@__sub-section`}
          >
            <h3 className={bem`@__default-ui-type--subhead-1`}>
              How do I write an impact statement?
            </h3>
            <p>
              Suggestions for{' '}
              <a href="#writing-suggestions">writing impact statements</a> and
              some <a href="#impact-statement-examples">examples</a> of impact
              statements from the literature are provided below.
            </p>
            <p>
              Note, requirements for impact statements vary by journal. Be sure
              to check the journal homepage and defer to journal-specific
              requirements when writing impact statements.
            </p>

            <section className={bem`@__sub-section`} id="writing-suggestions">
              <h4 className={bem`@__default-ui-type--subhead-2`}>
                Writing impact statements
              </h4>

              <p>
                An impact statement should both explain what the work is about
                and why it is important, as succinctly and clearly as possible.
                Impact statements should be written in language understandable
                to most readers (e.g., readers without a university education if
                possible, or readers with an undergraduate education outside the
                field of speciality). At the same time, impact statements should
                include enough information as to enable other scientists to
                decide whether or not to read the article.
              </p>

              <p>
                As impact statements are intended for a wide audience of
                readers, when possible avoid:
              </p>

              <ul className={bem`@__list`}>
                <li>Numbers and measurements,</li>
                <li>Acronyms,</li>
                <li>Jargon or technical terms specific to the field,</li>
                <li>References, and</li>
                <li>
                  Long sentences with more than one key point per sentence.
                </li>
              </ul>

              <Info className={bem`@__info-panel`}>
                <header>Additional writing resources</header>
                <p>
                  For more detailed guidance on writing impact statements, see:{' '}
                  <q>
                    A guide for writing impact statements of research papers
                  </q>{' '}
                  by Chris Buddle (
                  <a href="https://arthropodecology.com/2013/08/01/a-guide-for-writing-suggestions-of-research-papers/">
                    2013
                  </a>
                  ) or <q>How to write a lay summary</q> by Monica Duke (
                  <a href="http://www.dcc.ac.uk/resources/how-guides/write-lay-summary">
                    2012
                  </a>
                  ).
                </p>
              </Info>
            </section>

            <section
              className={bem`@__sub-section`}
              id="impact-statement-examples"
            >
              <h4 className={bem`@__default-ui-type--subhead-2`}>Examples</h4>

              <p>
                This section contains examples of impact statements. Each
                example provides both a summary written for a scientific
                audience and one written for a general audience. Compared to the
                summary written for a scientific audience, the summary written
                for a general audience conveys the same facts but in plain
                language so it can be understood by a wide audience without
                domain expertise. The examples include both single-sentence,
                conclusion style summaries (e.g., from a systematic review or
                case study) as well as paragraph-long, abstract style summaries
                (e.g., from a research article).
              </p>

              <section
                className={bem`@__sub-section`}
                id="examples-journal-articles"
              >
                <h5 className={bem`@__default-ui-type--subhead-3`}>
                  Journal articles
                </h5>

                <p>
                  Below, are two examples of paragraph-length, impact statements
                  that follow the structure of a traditional abstract -
                  introduction, methods, results, and conclusion - but are
                  written for general audiences (Examples 1 and 2). Note the
                  lack of numbers and jargon in the impact statement as compared
                  to the abstract for scientists in both cases.
                </p>

                <Info className={bem`@__info-panel`}>
                  <header>
                    Example 1. Insecurity, polio vaccination rates, and polio
                    incidence in northwest Pakistan (from{' '}
                    <a href="https://doi.org/10.1073/pnas.1711923115">
                      Verma et al. 2018
                    </a>
                    )
                  </header>

                  <b>Abstract (scientific audience) </b>
                  <p>
                    <q>
                      Pakistan is one of three countries in which endemic
                      transmission of poliovirus has never been stopped.
                      Insecurity is often cited but poorly studied as a barrier
                      to eradicating polio. We analyzed routinely collected
                      health data from 32 districts of northwest Pakistan and
                      constructed an index of insecurity based on journalistic
                      reports of the monthly number of deaths and injuries
                      resulting from conflict-related security incidents. The
                      primary outcomes were the monthly incidence of paralytic
                      polio cases within each district between 2007 and 2014 and
                      the polio vaccination percentage from 666 district-level
                      vaccination campaigns between 2007 and 2009, targeting
                      &sim;5.7 million children. Multilevel Poisson regression
                      controlling for time and district fixed effects was used
                      to model the association between insecurity, vaccinator
                      access, vaccination rates, and polio incidence. The number
                      of children inaccessible to vaccinators was 19.7% greater
                      (95% CI: 19.2-20.2%), and vaccination rates were 5.3%
                      lower (95% CI: 5.2-5.3%) in <q>high-insecurity</q>{' '}
                      campaigns compared with <q>secure</q> campaigns. The
                      unadjusted mean vaccination rate was 96.3% (SD = 8.6) in
                      secure campaigns and 88.3% (SD = 19.2) in high-insecurity
                      campaigns. Polio incidence was 73.0% greater (95% CI:
                      30-131%) during high-insecurity months (unadjusted mean =
                      0.13 cases per million people, SD = 0.71) compared with
                      secure months (unadjusted mean = 1.23 cases per million
                      people, SD = 4.28). Thus, insecurity was associated with
                      reduced vaccinator access, reduced polio vaccination, and
                      increased polio incidence in northwest Pakistan. These
                      findings demonstrate that insecurity is an important
                      obstacle to global polio eradication.
                    </q>
                  </p>

                  <b>Significance statement (general audience)</b>
                  <p>
                    <q>
                      The international spread of poliovirus has been declared a
                      Public Health Emergency of International Concern by the
                      World Health Organization, and Pakistan is one of only
                      three countries that have never stopped poliovirus
                      circulation. We analyzed polio incidence and polio
                      vaccination data from 32 districts of northwest Pakistan
                      and constructed a measure of insecurity based on
                      journalistic reports of deaths and injuries resulting from
                      conflict-related security incidents. Insecurity was
                      associated with reduced vaccinator access, reduced polio
                      vaccination, and increased polio incidence. These findings
                      provide strong scientific evidence that insecurity is an
                      important obstacle to global polio eradication.
                    </q>
                  </p>
                </Info>

                <Info className={bem`@__info-panel`}>
                  <header>
                    Example 2. Exceptional and rapid accumulation of
                    anthropogenic debris on one of the world&amp;s most remote
                    and pristine islands (from{' '}
                    <a href="https://doi.org/10.1073/pnas.1619818114">
                      Lavers and Bond 2017
                    </a>
                    )
                  </header>
                  <b>Abstract (scientific audience) </b>
                  <p>
                    <q>
                      In just over half a century plastic products have
                      revolutionized human society and have infiltrated
                      terrestrial and marine environments in every corner of the
                      globe. The hazard plastic debris poses to biodiversity is
                      well established, but mitigation and planning are often
                      hampered by a lack of quantitative data on accumulation
                      patterns. Here we document the amount of debris and rate
                      of accumulation on Henderson Island, a remote, uninhabited
                      island in the South Pacific. The density of debris was the
                      highest reported anywhere in the world, up to 671.6
                      items/m
                      <sup>2</sup> (mean &plusmn; SD: 239.4 &plusmn; 347.3
                      items/m2) on the surface of the beaches. Approximately 68%
                      of debris (up to 4,496.9 pieces/m<sup>2</sup>) on the
                      beach was buried &lt;10 cm in the sediment. An estimated
                      37.7 million debris items weighing a total of 17.6 tons
                      are currently present on Henderson, with up to 26.8 new
                      items/m accumulating daily. Rarely visited by humans,
                      Henderson Island and other remote islands may be sinks for
                      some of the world&amp;s increasing volume of waste.
                    </q>
                  </p>
                  <b>Significance statement (general audience)</b>
                  <p>
                    <q>
                      The isolation of remote islands has, until recently,
                      afforded protection from most human activities. However,
                      society&amp;s increasing desire for plastic products has
                      resulted in plastic becoming ubiquitous in the marine
                      environment, where it persists for decades. We provide a
                      comprehensive analysis of the quantity and source of
                      beach-washed plastic debris on one of the world&amp;s
                      remotest islands. The density of debris was the highest
                      recorded anywhere in the world, suggesting that remote
                      islands close to oceanic plastic accumulation zones act as
                      important sinks for some of the waste accumulated in these
                      areas. As global plastic production continues to increase
                      exponentially, it will further impact the exceptional
                      natural beauty and biodiversity for which remote islands
                      have been recognized.
                    </q>
                  </p>
                </Info>
                <p>
                  The example below, from an article in the{' '}
                  <em>Astrophysical Journal</em>, similarly omits complex
                  language, numbers and symbols, and shortens the abstract to
                  just a single sentence (Example 3). The impact statement was
                  published in an associated <q>digest</q> of articles.{' '}
                </p>
                <Info className={bem`@__info-panel`}>
                  <header>
                    Example 3. A Universal Correlation between Star Formation
                    Activity and Molecular Gas Properties Across Environments
                    (from{' '}
                    <a href="https://doi.org/10.3847/1538-4357/aa8a6c">
                      Shuhei Koyama et al. 2017
                    </a>
                    )
                  </header>
                  <b>Abstract (scientific audience) </b>
                  <p>
                    <q>
                      We present the molecular gas mass fraction (<em>f</em>
                      <sub>
                        H<sub>2</sub>
                      </sub>
                      ) and star formation efficiency (SFE) of local galaxies on
                      the basis of our new CO(<em>J=1-0</em>) observations with
                      the Nobeyama 45 m radio telescope, combined with the
                      COLDGASS galaxy catalog, as a function of galaxy
                      environment defined as the local number density of
                      galaxies measured with SDSS DR7 spectroscopic data. Our
                      sample covers a wide range in the stellar mass and star
                      formation rate (SFR), and also covers a wide environmental
                      range over two orders of magnitude. This allows us to
                      conduct the first systematic study of environmental
                      dependence of molecular gas properties in galaxies from
                      the lowest- to the highest-density environments in the
                      local universe. We confirm that both (<em>f</em>
                      <sub>
                        H<sub>2</sub>
                      </sub>
                      ) and SFE have strong positive correlations with the SFR
                      offset from the star-forming main sequence (&Delta;MS)
                      and, most importantly, we find that these correlations are
                      universal across all environments. Our result demonstrates
                      that star formation activity within individual galaxies is
                      primarily controlled by their molecular gas content,
                      regardless of their global environment. Therefore, we
                      claim that one always needs to be careful about the
                      &Delta;MS distribution of the sample when investigating
                      the environmental effects on the H<sub>2</sub> gas content
                      in galaxies.
                    </q>
                  </p>
                  <b>Digest (general audience)</b>
                  <p>
                    <q>
                      A study of local galaxies suggests that star formation
                      activity within individual galaxies is primarily
                      controlled by the galaxies molecular gas content,
                      regardless of their global environment.
                    </q>
                  </p>
                </Info>

                <p>
                  The example below is taken from a cohort study published in{' '}
                  <em>PLOS Medicine</em>, and uses a combined approach of high
                  and low complexity information in the <q>author summary</q> by
                  listing the abstract conclusions as a set of bullet points
                  (Example 4). Note the last sentence in the summary uses the
                  plainest language.{' '}
                </p>
                <Info className={bem`@__info-panel`}>
                  <header>
                    Example 4. Association between intake of less-healthy foods
                    defined by the United Kingdom&apos;s nutrient profile model
                    and cardiovascular disease: A population-based cohort study
                    (from{' '}
                    <a href="https://doi.org/10.1371/journal.pmed.1002484">
                      Mytton et al. 2018
                    </a>
                    )
                  </header>
                  <b>Abstract Conclusions (scientific audience) </b>
                  <p>
                    <q>
                      After adjustment for potential confounding factors, no
                      significant association between consumption of
                      less-healthy food (as classified by the FSA-Ofcom model)
                      and CVD was observed in this study. This suggests, in the
                      UK setting, that the FSA-Ofcom model is not consistently
                      discriminating among foods with respect to their
                      association with CVD. More studies are needed to
                      understand better the relationship between consumption of
                      less-healthy food, defined by the FSA-Ofcom model, and
                      indices of health.
                    </q>
                  </p>
                  <b>Significance statement (general audience)</b>
                  <p>
                    <q>What do these findings mean?</q>
                  </p>
                  <ul className={bem`@__list`}>
                    <li>
                      <q>
                        Whilst no single study is definitive and our findings
                        are in contrast to similar work in a French cohort,
                        these findings suggest that the FSA-Ofcom model is not
                        consistently discriminating among foods with respect to
                        their associations with cardiovascular disease in the UK
                        context.
                      </q>
                    </li>
                    <li>
                      <q>
                        Public health officials and scientists may want to
                        review whether and how the FSA-Ofcom scoring system
                        could be improved for use in the UK and elsewhere.
                      </q>
                    </li>
                    <li>
                      <q>
                        There is a robust evidence base concerning the health
                        risks associated with the consumption of many foods that
                        are often labelled ‘unhealthy’ (e.g., red meat,
                        sugar-sweetened beverages, and takeaway food), and it
                        would be inappropriate to use this study to undermine
                        present dietary advice for the public.
                      </q>
                    </li>
                  </ul>
                </Info>
              </section>

              <section className={bem`@__sub-section`} id="examples-case-study">
                <h5 className={bem`@__default-ui-type--subhead-3`}>
                  {' '}
                  Case study
                </h5>
                <p>
                  {' '}
                  Below is an example of a short impact statement that derives
                  from the discussion section of a case study about dermatitis
                  in the <em>Journal of Emergency Medicine</em>.
                </p>
                <Info className={bem`@__info-panel`}>
                  <header>
                    Example 5. Delayed Dermatitis Following Injury Caused by
                    Coral (from{' '}
                    <a href="https://doi.org/10.1016/j.jemermed.2017.06.042">
                      MenkinSmith et al. 2017
                    </a>
                    )
                  </header>

                  <b>Case Report (scientific audience) </b>
                  <p>
                    <q>
                      A 30-year-old previously healthy woman presented to the
                      emergency department with complaint of a pruritic rash on
                      the dorsal surface of her right foot and anterior aspect
                      of her right knee. Twelve days before presentation she cut
                      her foot and right knee while surfing on a reef in Tobago,
                      Republic of Trinidad and Tobago. She did not recall
                      erythema, pruritus, or burning pain initially after the
                      injury, and there was no rash (Figure 1 A). The wounds
                      were asymptomatic until 1 day before presentation when she
                      noted an itchy rash at the site of her injuries. On
                      examination, the patient was afebrile and
                      nontoxic-appearing with normal vital signs. A dermatologic
                      examination revealed red scaly plaques on the dorsal
                      surface of her right foot and her right knee with a
                      distribution corresponding to the cuts and abrasions
                      sustained against the coral (Figures 1 B, 2, and 3). The
                      patient was empirically started on 1% hydrocortisone
                      cream. At dermatology follow-up she was diagnosed with
                      delayed hypersensitivity reaction and she began taking
                      clobetasol 0.05% ointment twice daily. The patient had
                      near resolution of symptoms 2 weeks later and complete
                      resolution within 1 month (Figure 1 C).
                    </q>
                  </p>
                  <b>Impact statement (general audience)</b>
                  <p>
                    <q>
                      Dermatitis caused by marine coral is different from other
                      forms of contact dermatitis because of the significant
                      delay in the development of signs and symptoms after
                      exposure. While patients often visit an emergency
                      department soon after contact with marine coral, emergency
                      physicians may not be familiar with the presentation and
                      treatment of coral dermatitis, as there are limited
                      publications on the subject within the field of Emergency
                      Medicine.
                    </q>
                  </p>
                </Info>
              </section>

              <section
                className={bem`@__sub-section`}
                id="examples-systematic-review"
              >
                <h5 className={bem`@__default-ui-type--subhead-3`}>
                  Systematic review
                </h5>
                <p>
                  Below is an example of a single-sentence, impact statement to
                  describe the main conclusion of a systematic review, taken
                  from a <em>Cochrane Review</em> on acupuncture for induction
                  of labor.
                </p>
                <Info className={bem`@__info-panel`}>
                  <header>
                    Example 6. Acupuncture for induction of labour (from{' '}
                    <a href="10.1002/14651858.CD002962.pub2">
                      Smith, Crowther, and Grant 2013
                    </a>
                    )
                  </header>

                  <b>Author&apos;s conclusion (scientific audience) </b>
                  <p>
                    <q>
                      There is a need for well-designed randomised controlled
                      trials to evaluate the role of acupuncture to induce
                      labour and for trials to assess clinically meaningful
                      outcomes.
                    </q>
                  </p>
                  <b>Impact statement conclusion (general audience)</b>
                  <p>
                    <q>
                      There is insufficient evidence describing the efficacy of
                      acupuncture to induce labor.
                    </q>
                  </p>
                </Info>
              </section>
            </section>
          </section>

          <section id="write-reviews" className={bem`@__sub-section`}>
            <h3 className={bem`@__default-ui-type--subhead-1`}>
              How do I write a review?
            </h3>
            <p>
              At a minimum, reviewers must complete all required fields of the{' '}
              <a href="#active-actions">active</a> review action (marked with an{' '}
              <em>Action required</em> error message) prior to submitting (or
              staging) their review. In some cases, reviewers may be required to
              answer structured review questions, otherwise reviewers can add
              their reviews to the rating reason field or as{' '}
              <a href="#general-comments">general</a> or{' '}
              <a href="#in-context-comments">contextual</a> review notes.{' '}
            </p>

            <p>
              Rather than writing a review as one long, block of text
              referencing page and line numbers, reviewers have the option to
              write their reviews as a structured list of general and in-context
              notes and add <a href="#reviewer-permalinks">links</a> to precise
              locations in the manuscript.
            </p>

            <section id="general-comments" className={bem`@__sub-section`}>
              <h4 className={bem`@__default-ui-type--subhead-2`}>
                General review notes
              </h4>
              <p>
                General notes are standalone, non-contextual review notes. They
                may apply to more than one part of the submission or to the
                submission as a whole (e.g., to suggest missing information,
                request clarification on a high-level concept, or raise concerns
                over methods).
              </p>
              <p>
                General notes can be added using the blue plus button (
                <Iconoclass
                  className={bem`__icon`}
                  tagName="span"
                  iconName="add"
                  round={true}
                  size="2rem"
                />
                ) and reordered by dragging and dropping the note using the menu
                bar (
                <Iconoclass
                  className={bem`__icon`}
                  tagName="span"
                  iconName="menu"
                  round={false}
                  size="2rem"
                />
                ). Reviewers can open general notes in a shell (
                <Iconoclass
                  className={bem`__icon`}
                  tagName="span"
                  iconName="shell"
                  round={false}
                  size="2rem"
                />
                ) to continue editing a general note while viewing any resource
                (see{' '}
                <a href="#shell-editor">
                  completing required fields with the shell editor
                </a>{' '}
                above for more).
              </p>
              <figure className={bem`@__figure`}>
                <figcaption className={bem`@__figure-caption`}>
                  Example of a general review note being edited in a shell
                  during a review action.
                </figcaption>
                <img
                  src="/images/general-reviewer-comments.png"
                  alt="in-context reviewer comments during review action"
                  className={bem`@__figure-image @--screen-shot`}
                />
              </figure>
            </section>

            <section id="in-context-comments" className={bem`@__sub-section`}>
              <h4 className={bem`@__default-ui-type--subhead-2`}>
                Contextual review notes
              </h4>
              <p>
                Contextual notes are typically brief and made on a specific
                selection of text or single resource of the submission (e.g., to
                highlight a typo in the text, request a paragraph be clarified
                or rewritten, or suggest a new axis label for a figure).
              </p>
              <p>
                Content that can be annotated will have a blue select bar on the
                left. Click on the select bar to add contextual review notes to
                the entire block or highlight a selection of text to add a
                contextual review note to the selection only.
              </p>{' '}
              <p>
                Be sure to select <strong>Review annotation</strong> as the
                comment type when adding a reviewer note.
              </p>
              <figure className={bem`@__figure`}>
                <figcaption className={bem`@__figure-caption`}>
                  Example of a contextual review note made during a review
                  action.
                </figcaption>
                <img
                  src="/images/in-context-reviewer-comments.png"
                  alt="in-context reviewer comments during review action"
                  className={bem`@__figure-image @--screen-shot`}
                />
              </figure>
            </section>
            <section id="reviewer-permalinks" className={bem`@__sub-section`}>
              <h4 className={bem`@__default-ui-type--subhead-2`}>Permalinks</h4>
              <p>
                When writing a review, it may be helpful to reference a specific
                paragraph or resource of the manuscript. <TextLogo /> provides
                permanent links (‘permalinks’) to every section, paragraph, and
                resource of a manuscript.
              </p>
              <p>
                Permalinks can be added to any text field using autocomplete.
                Type the pound (<code>#</code>) symbol to open a list of
                referenceable locations with previews to chose from. A permalink
                is automatically added for the selected location.
              </p>
              <p>
                Links can also be added manually, but must be formatted using
                Markdown. Links added using autocomplete are automatically
                formatted.
              </p>
              <p>
                Note, in cases where there are two versions of the manuscript
                (e.g., during an author revision), links in the autocomplete
                menu point to the latest version of the content.
              </p>
              <figure className={bem`@__figure`}>
                <figcaption className={bem`@__figure-caption`}>
                  <p>
                    Example of a permalink added using the autocomplete menu in
                    an author response to an editor revision request.
                  </p>
                </figcaption>
                <img
                  src="/images/permalink-autocomplete-reviewer.png"
                  alt="autocomplete menu to select an identifier in a reviewer review"
                  className={bem`@__figure-image @--screen-shot`}
                />
              </figure>
            </section>
          </section>

          <section id="paid-reviews" className={bem`@__sub-section`}>
            <h3 className={bem`@__default-ui-type--subhead-1`}>
              Can I get paid as a reviewer?
            </h3>
            <p>
              Journals on <TextLogo /> may choose to offer remuneration for
              reviewers. Reviewers can apply to review for journals offering
              remuneration.
            </p>
            <p>
              {' '}
              To determine whether a journal offers paid reviews, reviewers can
              inspect the journal smart editorial workflows on the journal
              homepage for paid review actions during any stage of a workflow.
            </p>
            <p>
              In order to receive payment for a completed paid review, reviewers
              must first setup a payments account. A payment account can be
              setup from your user profile on <TextLogo />
            </p>
          </section>

          <section id="revision-requests" className={bem`@__sub-section`}>
            <h3 className={bem`@__default-ui-type--subhead-1`}>
              How do I respond to a revision request?
            </h3>
            <p>
              At a minimum, authors must complete all required fields of a
              revision request (marked with an <em>action required</em> error
              message) prior to submitting (or staging) their revision,
              including to:{' '}
            </p>
            <ul className={bem`@__list`}>
              <li>
                Upload revised files (by dragging and dropping a revised file on
                top of the previous one),
              </li>
              <li>
                Add release notes to describe the revision and any changes made,
                and
              </li>
              <li>Respond to any editor revision requests.</li>
            </ul>

            <p>
              Editor revision requests can be a synthesis of previously
              completed review actions. In these cases, editors may list any
              review actions an editor request is based on after each comment.
              Authors can open the relevant review action in the shell to view
              it while continuing to respond to editor revision requests (see{' '}
              <a href="#shell-reader">
                viewing resources with the shell reader
              </a>{' '}
              for more).
            </p>
            <p>
              Authors may have to respond to two types of editor revision
              request comments:{' '}
              <a href="#general-responses">general comments</a> and{' '}
              <a href="#in-context-responses">contextual comments</a>. When
              writing responses, rather than referencing page and line numbers,
              authors can <a href="#author-permalinks">link</a> to precise
              locations in the manuscript
            </p>

            <section id="general-responses" className={bem`@__sub-section`}>
              <h4 className={bem`@__default-ui-type--subhead-2`}>
                Responses to general comments
              </h4>
              <p>
                General revision request comments are standalone, non-contextual
                comments. General comments typically require additional context
                (such as the manuscript file or the review action the comment
                was based on) to write a response, as they may apply to more
                than one part of a submission.
              </p>
              <p>
                {' '}
                Authors can respond to general comments using a shell editor, so
                they can view the manuscript files (
                <Iconoclass
                  className={bem`__icon`}
                  tagName="span"
                  iconName="attachment"
                  round={false}
                  size="2rem"
                />
                ) and other resources (
                <Iconoclass
                  className={bem`__icon`}
                  tagName="span"
                  iconName="email"
                  round={false}
                  size="2rem"
                />
                ) while writing a response.
              </p>

              <figure className={bem`@__figure`}>
                <figcaption className={bem`@__figure-caption`}>
                  <p>
                    Example of an author writing a response to a general
                    revision request comment using the{' '}
                    <a href="#shell-editor">shell editor</a>.
                  </p>
                </figcaption>
                <img
                  src="/images/general-response.png"
                  alt="edit outbound author response to a revision request in a shell"
                  className={bem`@__figure-image @--screen-shot`}
                />
              </figure>
            </section>
            <section id="in-context-responses" className={bem`@__sub-section`}>
              <h4 className={bem`@__default-ui-type--subhead-2`}>
                Responses to contextual comments
              </h4>
              <p>
                Contextual editor request comments are typically brief comments
                made on a specific selection of text or single resource of the
                previous version of the manuscript file. Authors must respond to
                these comments in their original context (on the previous
                version of the manuscript, not the revised version).
              </p>
              <p>
                To navigate to contextual revision request comments, authors can
                click on the link in the comment preview or navigate to the
                previous version of the manuscript file (select the desired
                version number from the file attachment menu) and scroll to the
                comment. When viewing a previous version of the manuscript, a
                red warning bar and notice will appear on the file.
              </p>
              <figure className={bem`@__figure`}>
                <figcaption className={bem`@__figure-caption`}>
                  <p>
                    Example of an author writing a response to a contextual
                    revision request comment on a previous version of the
                    manuscript.
                  </p>
                </figcaption>
                <img
                  src="/images/in-context-response.png"
                  alt="author responds to an in-context revision request comment"
                  className={bem`@__figure-image @--screen-shot`}
                />
              </figure>
            </section>

            <section id="author-permalinks" className={bem`@__sub-section`}>
              <h4 className={bem`@__default-ui-type--subhead-2`}>Permalinks</h4>
              <p>
                When writing a response to an editor revision request, it may be
                helpful to reference a specific paragraph or resource of the
                manuscript. <TextLogo /> provides permanent links (‘permalinks’)
                to every section, paragraph, and resource of a manuscript.
              </p>
              <p>
                Permalinks can be added to any text field using autocomplete.
                Type the pound (<code>#</code>) symbol to open a list of
                referenceable locations with previews to chose from. A permalink
                is automatically added for the selected location.
              </p>
              <p>
                Links can also be added manually, but must be formatted using
                Markdown. Links added using autocomplete are automatically
                formatted.
              </p>
              <p>
                Note, in cases where there are two versions of the manuscript
                (e.g., during a revision), links in the autocomplete menu point
                to the latest version of the content.
              </p>
              <figure className={bem`@__figure`}>
                <figcaption className={bem`@__figure-caption`}>
                  <p>
                    Example of a permalink added using the autocomplete menu in
                    an author response to an editor revision request.
                  </p>
                </figcaption>
                <img
                  src="/images/permalink-autocomplete-author.png"
                  alt="autocomplete menu to select an identifier in an author response to an editor revision request"
                  className={bem`@__figure-image @--screen-shot`}
                />
              </figure>
            </section>
          </section>

          <section id="endorser-requests" className={bem`@__sub-section`}>
            <h3 className={bem`@__default-ui-type--subhead-1`}>
              How do I request a change during an endorsement?
            </h3>
            <p>
              As the endorser of a staged action, your job is to review work
              that was done on an action, add comments to request any changes,
              and endorse the action once you are satisfied that your requests
              have been addressed. Note, the action cannot be completed until it
              is endorsed.
            </p>
            <p>
              Endorsers can request changes by adding{' '}
              <a href="#general-endorser-comments">general</a> or{' '}
              <a href="#contextual-endorser-comments">contextual</a> endorser
              comments during an endorsement. Endorsers can add{' '}
              <a href="#endorser-permalinks">links</a> to precise locations in
              the manuscript when writing any general or contextual endorser
              comments.
            </p>

            <section
              id="general-endorser-comments"
              className={bem`@__sub-section`}
            >
              <h4 className={bem`@__default-ui-type--subhead-2`}>
                General endorser comments
              </h4>
              <p>
                General endorser comments are non-contextual endorser requests
                pertaining to the action as a whole. General endorser comments
                can be added directly to the action as part of the{' '}
                <strong>staging discussion</strong>.
              </p>
              <p>
                General endorser comments are indicated by an endorse icon (
                <Iconoclass
                  className={bem`__icon`}
                  tagName="span"
                  iconName="thumbUp"
                  round={false}
                  size="2rem"
                />
                ) on the user badge of the endorser writing the comment.
              </p>
              <figure className={bem`@__figure`}>
                <figcaption className={bem`@__figure-caption`}>
                  Example of a general endorser comment during a review action
                  to request change to the overall review.
                </figcaption>
                <img
                  src="/images/general-endorser-comment.png"
                  alt="author adds endorser comment to a reviewer comment to request changes"
                  className={bem`@__figure-image @--screen-shot`}
                />
              </figure>
            </section>

            <section
              id="contextual-endorser-comments"
              className={bem`@__sub-section`}
            >
              <h4 className={bem`@__default-ui-type--subhead-2`}>
                Contextual endorser comments
              </h4>
              <p>Contextual endorser comments can be added to:</p>{' '}
              <ul className={bem`@__list`}>
                <li>
                  Fields of the action (e.g., to request additional information
                  be added to a reviewer response to a review question),
                </li>
                <li>
                  Sections of the manuscript (e.g., to suggest a missing
                  resource be added to an author submission file), or
                </li>
                <li>
                  Existing comments (e.g., to request that a reviewer clarify a
                  reviewer note).
                </li>
              </ul>
              <p>
                Contextual endorser comments can be added directly to any field,
                section, resource, selection of text, or existing annotation
                (see <a href="#staged-actions-contextual-comments">above</a> for
                more information on adding contextual comments during a staged
                action).
              </p>
              <p>
                Contextual endorser comments have a blue endorser comment
                heading bar. Contextual comments made in response to existing
                annotations are indicated by an endorse icon (
                <Iconoclass
                  className={bem`__icon`}
                  tagName="span"
                  iconName="thumbUp"
                  round={false}
                  size="2rem"
                />
                ) on the user badge of the endorser writing the comment.
              </p>
              <figure className={bem`@__figure`}>
                <figcaption className={bem`@__figure-caption`}>
                  Example of a contextual endorser comments including a new
                  endorser comment (blue heading bar) and an endorser comment on
                  an existing annotation (endorse icon on the endorser user
                  badge).
                </figcaption>
                <img
                  src="/images/contextual-endorser-comment.png"
                  alt="author adds endorser comment to a reviewer comment to request changes"
                  className={bem`@__figure-image @--screen-shot`}
                />
              </figure>
            </section>

            <section id="endorser-permalinks" className={bem`@__sub-section`}>
              <h4 className={bem`@__default-ui-type--subhead-2`}>Permalinks</h4>
              <p>
                When writing an endorser comment, it may be helpful to reference
                a specific paragraph or resource of the manuscript. <TextLogo />{' '}
                provides permanent links (‘permalinks’) to every section,
                paragraph, and resource of a manuscript.
              </p>
              <p>
                Permalinks can be added to any text field using autocomplete.
                Type the pound (<code>#</code>) symbol to open a list of
                referenceable locations with previews to chose from. A permalink
                is automatically added for the selected location.
              </p>
              <p>
                Links can also be added manually, but must be formatted using
                Markdown. Links added using autocomplete are automatically
                formatted.
              </p>
              <p>
                Note, in cases where there are two versions of the manuscript
                (e.g., during a revision), links in the autocomplete menu point
                to the latest version of the content.
              </p>
              <figure className={bem`@__figure`}>
                <figcaption className={bem`@__figure-caption`}>
                  <p>
                    Example of a permalink added using the autocomplete menu in
                    an endorser comment.
                  </p>
                </figcaption>
                <img
                  src="/images/permalink-autocomplete-endorser.png"
                  alt="autocomplete menu to select an identifier in an endorser comment"
                  className={bem`@__figure-image @--screen-shot`}
                />
              </figure>
            </section>
          </section>

          <section id="request-discount" className={bem`@__sub-section`}>
            <h3 className={bem`@__default-ui-type--subhead-1`}>
              How do I request a discount on a fee?
            </h3>
            <p>
              Depending on the journal workflow, authors may have the option to
              request a discounted price on a fee (e.g., a submission fee or
              APC).
            </p>
            <p>
              When a <em>Requested price</em> field is available during a Pay
              Action, authors can enter a requested amount to request a
              discount. Editors will then be notified of the request and may
              engage with authors to request additional information or to
              propose another price, prior to approving a requested amount.
            </p>
            <p>
              Once the editor approves a price, the amount due will be updated
              and authors can then complete the payment action (payment
              information will be requested at that time, if there is a fee).
            </p>
            <figure className={bem`@__figure`}>
              <figcaption className={bem`@__figure-caption`}>
                Example of comments on the pay action to discuss an author
                request for a waived fee.
              </figcaption>
              <img
                className={bem`@__figure-image @--screen-shot`}
                src="/images/workflows-author-request-discount.png"
                alt="author and editor engage to debate requested price on APC"
              />
            </figure>
          </section>
        </section>

        <DocumentationLicense />
      </article>
    );
  }
}
