import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BemTags, TextLogo } from '@scipe/ui';
import Iconoclass from '@scipe/iconoclass';
import DocumentationLicense from '../license.js';
import Info from '../info';

export default class EditorUserGuide extends React.PureComponent {
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
        className={bem`editor-user-guide @__article @__default-sans-body-type`}
      >
        <Helmet>
          <title>Editor user guide • sci.pe</title>
        </Helmet>
        <header className={bem`@__header`}>
          <h1 className={bem`@__default-ui-type--display-1`}>
            Editor user guide
          </h1>
          <img src="/images/editor-logo.png" alt="issue guide logo" />
        </header>

        <section id="introduction" className={bem`@__section`}>
          <h2 className={bem`@__default-ui-type--headline`}>Introduction</h2>
          <p>
            <TextLogo /> provides editors with everything needed to design and
            run scholarly journals (typesetting, payment processing, hosting,
            peer review and flexible editorial workflows included).
          </p>
          <p>This document guides editors through the process of:</p>
          <ul className={bem`@__list`}>
            <li>
              <a href="#journal-setup">Setting up and managing a journal</a>,
            </li>
            <li>
              <a href="#tracking-submissions">Keeping track of submissions</a>{' '}
              with a publishing inbox, and
            </li>
            <li>
              <a href="#navigating-workflows">Navigating workflows</a>,{' '}
              <a href="#accessing-required-context">
                accessing required content
              </a>
              , and{' '}
              <a href="#working-with-annotations">working with annotations</a>{' '}
              in order to{' '}
              <a href="#processing-submissions">process incoming submissions</a>{' '}
              to the journal.
            </li>
          </ul>
        </section>

        <section id="journal-setup" className={bem`@__section`}>
          <h2 className={bem`@__default-ui-type--headline`}>
            Setting up and managing a journal
          </h2>
          <p>
            With <TextLogo />, your journal configuration settings are your
            journal CMS. Any changes made to the journal - from adding a custom
            banner to creating an editorial workflow - are automatically
            reflected on the journal homepage.
          </p>
          <p>
            Before setting up a new journal, an editor must first create a
            publishing organization. See the info box{' '}
            <a href="#organizations">below</a> for more on how to setup a
            journal publishing organization.
          </p>
          <Info className={bem`@__info-panel`}>
            <header id="organizations">
              Setting up a publishing organization
            </header>
            <p>
              A journal publishing organization is required to manage billing,
              payments, and author services. The minimum requirements for
              setting up a new publishing organization are:
            </p>
            <ul className={bem`@__list`}>
              <li>
                Selecting a billing plan on <TextLogo /> (see{' '}
                <Link to="/pricing">pricing</Link> for more information on
                available plans), and{' '}
              </li>
              <li>
                Creating a payments account so that the journal can process
                payment from authors (e.g., for journals collecting Article
                Processing Charges (APCs) from authors).
              </li>
            </ul>

            <figure className={bem`@__figure`}>
              <figcaption className={bem`@__figure-caption`}>
                <p>
                  Example payment account settings for an organization to enable
                  a journal to process payments such as author APCs.
                </p>
              </figcaption>
              <img
                src="/images/payments-create-account.png"
                alt="create a payments account to receive payments on sci.pe"
                className={bem`@__figure-image @--screen-shot`}
              />
            </figure>
          </Info>

          <section
            id="metadata-staff-and-style"
            className={bem`@__sub-section`}
          >
            <h3 className={bem`@__default-ui-type--subhead-1`}>
              Adding journal metadata, staff, and styles
            </h3>
            <p>Editors can add:</p>
            <ul className={bem`@__list`}>
              <li>
                Journal metadata including a journal name, description, subject
                areas covered, and social media links (<em>about</em>),
              </li>
              <li>
                Custom style elements such as a logo and a banner image (
                <em>style</em>), and
              </li>
              <li>
                Journal staff, including editors, producers,{' '}
                <strong>and reviewers</strong> (<em>staff</em>).
              </li>
            </ul>

            <Info className={bem`@__info-panel`}>
              <header id="organizations">
                Inviting and reviewing applications for journal staff
              </header>
              <p>
                Journals can invite or accept applications from editors,
                producers, and reviewers to their journal staff. Journal staff
                are displayed on the journal homepage and can be invited to work
                on any submission to the journal.
              </p>
              <p>
                {' '}
                Editors and producers must be added to the journal before they
                can be assigned to work on a submission. Reviewers can be
                invited and assigned to work on submissions either as journal
                reviewers if they have been added to the journal or guest
                reviewers otherwise.
              </p>
              <p>Staff can be added to a journal in two ways:</p>
              <ul className={bem`@__list`}>
                <li>By invitation, or</li>
                <li>By application</li>
              </ul>
              <p>
                Staff can be <strong>invited</strong> to a Journal by{' '}
                <TextLogo /> username (if registered) or email. Staff role
                (editor, producer, or reviewer) must be specified. Optionally,
                for editors and producers, a title (e.g., ‘Associate Editor’)
                can be specified and admin permissions granted (to collaborate
                on journal settings). For editors, areas of responsibility and
                whether they can handle incoming submissions can also be
                specified.{' '}
              </p>
              <p>
                Registered <TextLogo /> users can <strong>apply</strong> to
                journals as reviewers, editors, or producers using their{' '}
                <TextLogo /> user profile as the application. Journals can
                review applicants’ profiles (
                <Iconoclass
                  className={bem`__icon`}
                  tagName="span"
                  iconName="exitToApp"
                  round={false}
                  size="2rem"
                />
                ) to decide whether to approve or reject the application.{' '}
              </p>

              <figure className={bem`@__figure`}>
                <figcaption className={bem`@__figure-caption`}>
                  <p>
                    Example journal staff settings with active staff, pending
                    invitations, and pending applications.
                  </p>
                </figcaption>
                <img
                  src="/images/journal-settings-staff.png"
                  alt="Example of sci.pe staff settings with active editors, producers, and reviewers and outstanding invitations and applications for new staff"
                  className={bem`@__figure-image @--screen-shot`}
                />
              </figure>
            </Info>
          </section>

          <section id="workflows-and-types" className={bem`@__sub-section`}>
            <h3 className={bem`@__default-ui-type--subhead-1`}>
              Creating publication types and adding editorial workflows
            </h3>
            <p>
              Editors can specify the publication types accepted by the journal.
              For example, a journal can accept research article, review article
              and observation types for new submissions.{' '}
            </p>
            <p>
              Publication types are defined by their required sections. When
              setting up publication types, editors can add required sections
              for the type (e.g., abstract, impact statement, methods, results,
              etc.). Publication type requirements are then used as the author
              submission guidelines on the journal homepage, so authors always
              have the latest requirements.{' '}
            </p>
            <figure className={bem`@__figure`}>
              <figcaption className={bem`@__figure-caption`}>
                <p>Example of activated publication types for a journal.</p>
              </figcaption>
              <img
                src="/images/journal-settings-publication-types.png"
                alt="Activated journal publication types, including one for research articles with required abstract and impact statement sections"
                className={bem`@__figure-image @--screen-shot`}
              />
            </figure>

            <p>
              For each publication type, editors can offer multiple peer review
              workflows (see{' '}
              <Link to="/get-started/workflows">smart editorial workflows</Link>{' '}
              for more on editorial workflows). Adding workflow(s) specific to a
              publication type allows, for example, to offer:
            </p>
            <ul className={bem`@__list`}>
              <li>
                Author choice of peer review anonymity setting for research
                article types (e.g., editors can offer a workflow with single
                blinding vs one with double blinding to allow authors to
                choose),
              </li>
              <li>
                Workflows with only editor review (not external peer review) for
                editorial or opinion article types,
              </li>
              <li>
                Workflows with author services for research and review article
                types enabling authors to benefit from formless submission and
                in-context peer review (see the info box{' '}
                <a href="#providing-author-services">below</a> for more on
                providing authors services as part of a workflow).{' '}
              </li>
            </ul>
            <p>
              <strong>Editorial workflows</strong> describe the process a
              submission will go through, including anonymity settings and peer
              review, as well as the{' '}
              <a href="#providing-author-services">author services available</a>
              , and any monetary transactions (see{' '}
              <Link to="/get-started/workflows">smart editorial workflows</Link>{' '}
              for more).{' '}
            </p>
            <p>
              An editorial workflow acts as a smart contract. Once a submission
              to the journal is started, the workflow for that submission is
              locked as a guarantee to readers as to how that submission was
              process (even if the journal later modifies the workflow the
              submission was based on).
            </p>
            <figure className={bem`@__figure`}>
              <figcaption className={bem`@__figure-caption`}>
                <p>Example of activated editorial workflows for a journal.</p>
              </figcaption>
              <img
                src="/images/journal-settings-workflows.png"
                alt="Activated journal workflows, including one for research and review articles with single blind peer review and four stages"
                className={bem`@__figure-image @--screen-shot`}
              />
            </figure>

            <p>
              Once activated, editorial workflows and publication types can be
              accessed on the journal homepage for author and reader scrutiny.
            </p>

            <Info className={bem`@__info-panel`}>
              <header id="providing-author-services">
                Providing author services
              </header>
              <p>
                Editors can offer author services as part of an editorial
                workflow, e.g. editors can offer a semantic typesetting service
                so that authors can submit any file (e.g., PDF, DOCX) and
                benefit from formless submission, in-context peer review, and
                production quality previews.
              </p>
              <p>
                When creating a new service, editors can either offer a
                typesetting service provided by <TextLogo /> or offer their own
                typesetting service (e.g., to reduce costs, see the FAQ{' '}
                <a href="#provide-services">below</a> for more information).{' '}
              </p>
              <p>
                New author services can be created from the publishing
                organization settings (see <a href="#organizations">above</a>{' '}
                for setting up a journal publishing organization). Editors can
                set the service price, including to make a service free (price
                $0). If the service is offered repeatedly during a single
                workflow (such as a typesetting service for submissions and
                revisions), the editor can elect to make the service free for
                subsequent revisions (if it is not already free).
              </p>
              <figure className={bem`@__figure`}>
                <figcaption className={bem`@__figure-caption`}>
                  <p>
                    Example of a typesetting service set up by a journal
                    publishing organization.
                  </p>
                </figcaption>
                <img
                  src="/images/services-create-new-in-house.png"
                  alt="create a new service in house"
                  className={bem`@__figure-image @--screen-shot`}
                />
              </figure>
              <p>
                A service can either be provided by the journal publishing
                organization or <TextLogo />.
              </p>
              <p>
                If offering a service provided by <TextLogo />, Journal
                organizations can then set the price of the service (e.g., to
                cover some or all of the costs or make a profit on top of the
                brokered service).
              </p>
              <figure className={bem`@__figure`}>
                <figcaption className={bem`@__figure-caption`}>
                  <p>
                    Example of a typesetting service offered by a journal
                    publishing organization and provided by <TextLogo />.
                  </p>
                </figcaption>
                <img
                  src="/images/brokered-service.png"
                  alt="create a new brokered service in context"
                  className={bem`@__figure-image @--screen-shot`}
                />
              </figure>
            </Info>
          </section>

          <section id="access-settings" className={bem`@__sub-section`}>
            <h3 className={bem`@__default-ui-type--subhead-1`}>
              Setting public access and opening the journal to submissions
            </h3>
            <p>
              Journals created on <TextLogo /> are private and closed to
              submissions by default. This enables editors to set up the journal
              in private and only enable public access and open the journal to
              submissions when they are ready.
            </p>
            <p>
              Note, when a journal is public but not open to submissions, a
              custom message can be added for authors attempting to submit to
              the Journal.
            </p>
            <figure className={bem`@__figure`}>
              <figcaption className={bem`@__figure-caption`}>
                <p>Example of journal access settings.</p>
              </figcaption>
              <img
                src="/images/journal-settings-public-access.png"
                alt="Example of journal access settings for a journal that is publicly accessible but not yet open to submissions"
                className={bem`@__figure-image @--screen-shot`}
              />
            </figure>
            <p>
              Once public access is enabled and the journal is open to
              submissions, the journal can start accepting submissions
              immediately, <em>as long as</em> the journal has:{' '}
            </p>
            <ul className={bem`@__list`}>
              <li>
                Journal staff (including at least one administrator and handling
                editor),
              </li>
              <li>At least one activated editorial workflow,</li>
              <li>At least one activated publication type,</li>
            </ul>
          </section>

          <section id="rfas" className={bem`@__sub-section`}>
            <h3 className={bem`@__default-ui-type--subhead-1`}>
              Making Requests for Articles (RFAs)
            </h3>
            <p>
              To solicit new submissions on topics of interest, Journals can
              publish Requests for Articles (RFAs) to the journal. New requests
              will be published on the journal homepage with a unique link, so
              that they can be shared.{' '}
            </p>
            <figure className={bem`@__figure`}>
              <figcaption className={bem`@__figure-caption`}>
                <p>Example of journal RFAs.</p>
              </figcaption>
              <img
                src="/images/journal-settings-rfas.png"
                alt="Example of journal requests for articles"
                className={bem`@__figure-image @--screen-shot`}
              />
            </figure>
          </section>

          <section id="organizing-issues" className={bem`@__sub-section`}>
            <h3 className={bem`@__default-ui-type--subhead-1`}>
              Organizing articles and issues
            </h3>
            <p>
              At any time, editors can organize published submissions into
              issues. When organizing submissions, editors and producers can
              choose from: Publication (Sequential) issues, or Special issues.
            </p>
            <p>
              <strong>Publication (or Sequential) issues</strong> are
              collections of submissions that are automatically assembled
              according to publication date. As publication issues are
              non-overlapping in time, submissions belong to one and only one
              publication issue.
            </p>
            <p>
              To create a publication issue, a cut off publication date for the
              issue must be set. Any articles published since the cut off date
              of the previous publication issue (or since the start date of the
              Journal if the first issue), will then be automatically assembled
              into an issue.
            </p>
            <p>Editors can customize publication issues, including to add:</p>
            <ul className={bem`@__list`}>
              <li>Custom issue banners,</li>
              <li>
                Descriptions (e.g., to highlight key articles, people, and
                topics included in the issue), and
              </li>
              <li>Featured articles for the publication issue homepage.</li>
            </ul>
            <figure className={bem`@__figure`}>
              <figcaption className={bem`@__figure-caption`}>
                <p>
                  Example of the journal settings for adding and customizing
                  publication issues.
                </p>
              </figcaption>
              <img
                src="/images/editor-create-publication-issue.png"
                alt="publication issue settings"
                className={bem`@__figure-image @--screen-shot`}
              />
            </figure>
            <p>
              <strong>Special issues</strong> are a custom collection of
              submissions, manually assembled. Editors must add published
              articles (or articles scheduled for publication) to the special
              issue in order for the articles to be included.
            </p>
            <p>
              Note, all articles in a special issue will also be part of a
              publication issue according to their date published.
            </p>
            <p>
              As with publication issues, editors can customize special issues
              with custom banners, descriptions, and featured articles.
            </p>
            <figure className={bem`@__figure`}>
              <figcaption className={bem`@__figure-caption`}>
                <p>
                  Example of the journal settings for adding and customizing
                  special issues.
                </p>
              </figcaption>
              <img
                src="/images/editor-create-special-issue.png"
                alt="special issue settings"
                className={bem`@__figure-image @--screen-shot`}
              />
            </figure>

            <p>
              Editors can highlight any article or issue by featuring it on the
              journal homepage as a ‘featured article’ or ‘featured issue’.
            </p>
            <p>
              Featured issues and articles remain fixed to the top of the
              journal homepage (on mobile devices and smaller screens) and
              notification panel (on desktop and larger screens).
            </p>
            <figure className={bem`@__figure`}>
              <figcaption className={bem`@__figure-caption`}>
                <p>
                  Example of a journal homepage on a mobile device with featured
                  issues and articles.
                </p>
              </figcaption>
              <img
                src="/images/top-of-journal-homepage-mobile.png"
                alt="special issue settings"
                className={bem`@__figure-image @--screen-shot`}
              />
            </figure>
            <p>
              To feature an article or issue, select the star icon next to the
              article (or issue) name in the articles (or issues) tab of the
              journal settings.
            </p>
            <figure className={bem`@__figure`}>
              <figcaption className={bem`@__figure-caption`}>
                <p>Example of featuring an article.</p>
              </figcaption>
              <img
                src="/images/editor-feature-article.png"
                alt="special issue settings"
                className={bem`@__figure-image @--screen-shot`}
              />
            </figure>
            <p>
              As with issues, editors can customize articles on the journal and
              issue homepages with article banner images (e.g., a related image,
              a figure from the article, or a graphical abstract).{' '}
            </p>
            <p>
              To add custom article banners, click on the article name in the
              articles tab of the journal settings and upload banner images.
            </p>
            <figure className={bem`@__figure`}>
              <figcaption className={bem`@__figure-caption`}>
                <p>
                  Example of the journal settings for adding custom article
                  banners.
                </p>
              </figcaption>
              <img
                src="/images/editor-add-article-banner.png"
                alt="special issue settings"
                className={bem`@__figure-image @--screen-shot`}
              />
            </figure>
          </section>
        </section>

        <section id="tracking-submissions" className={bem`@__section`}>
          <h2 className={bem`@__default-ui-type--subhead-1`}>
            Keeping track of submissions
          </h2>
          <p>
            {' '}
            <TextLogo /> comes with a publishing inbox built-in. It contains a
            data-rich preview of all submissions and a way to tag and search
            them to help editors keep track of all their submissions.
          </p>
          <p>
            Submissions appear as cards, with a preview of all submission
            metadata and a timeline detailing all completed and in progress work
            on the submission. This enables editors to quickly check the status
            of a submission in progress.
          </p>
          <p>
            Editors can quickly find and filter submissions using full text
            search (top) and facets (left panel). For example, editors can use
            facets to find all submissions with outstanding review actions due
            in 7 days or more.
          </p>
          <p>
            Notifications and comment alerts (right panel) provide editors with
            a real-time feed of work being done on submissions.
          </p>

          <figure className={bem`@__figure`}>
            <figcaption className={bem`@__figure-caption`}>
              {' '}
              Example of an editor dashboard with submissions (center), facets
              for search (left panel), and notifications of recent activity and
              unread comments (right panel).
            </figcaption>

            <img
              className={bem`@__figure-image @--screen-shot`}
              src="/images/dashboard.png"
              alt="User dashboard"
            />
          </figure>
        </section>

        <section id="navigating-workflows" className={bem`@__section`}>
          <h2 className={bem`@__default-ui-type--headline`}>
            Navigating workflows
          </h2>
          <p>
            A workflow is made of stages and a workflow stage is composed of
            actions. Editors can access all the stages (e.g., submission,
            review, revision, and production stages) and actions (e.g., to
            upload, review, or assess a submission) of a workflow from the
            submission workspace (left panel).
          </p>
          <figure className={bem`@__figure`}>
            <figcaption className={bem`@__figure-caption`}>
              Example of a submission workspace with workflow stages and actions
              (left panel). The workflow is opened on a completed review action
              from review stage.
            </figcaption>
            <img
              src="/images/editor-submission-workspace-workflow.png"
              alt="submission workspace with workflow stages and action"
              className={bem`@__figure-image @--screen-shot`}
            />
          </figure>
        </section>

        <section id="accessing-required-context" className={bem`@__section`}>
          <h2 className={bem`@__default-ui-type--headline`}>
            Accessing required context
          </h2>
          <p>
            All the material needed to triage, assess, and publish a submission
            is available to editors in one place. <TextLogo /> eliminates the
            need to keep track of disparate emails and files because all the
            information needed to complete work on a submission is available in
            context.{' '}
          </p>
          <p>
            To help editors complete their work, the submission workspace
            contains both outbound and inbound resources:
          </p>
          <ul className={bem`@__list`}>
            <li>
              {' '}
              Outbound resources contain work that needs to be done (e.g., an
              assessment that needs to be completed, or a revised author
              submission that needs to be reviewed).{' '}
            </li>
            <li>
              Inbound resources provide the necessary context for completing
              work (e.g., a completed review or an author release note helps an
              editor to make a decision about a submission).
            </li>
          </ul>
          <figure className={bem`@__figure`}>
            <figcaption className={bem`@__figure-caption`}>
              Example of a submission workspace with inbound and outbound
              resources (left panel). Here an editor must complete an assessment
              following an author revision. Author responses to editor revision
              requests are available as inbound resources. They can be opened in
              a shell to provide the editor with the context needed to complete
              a review.
            </figcaption>
            <img
              src="/images/editor-submission-workspace-resources.png"
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
            Contextual annotations can be added to any outbound resource when
            relevant. For example, contextual annotations can allow editors to
            more easily collaborate with other staff and add revision requests
            to enrich their assessments.
          </p>
          <figure className={bem`@__figure`}>
            <figcaption className={bem`@__figure-caption`}>
              Example of a submission workspace with contextual annotations
              (left panel). Here an editor must submit an assessment of an
              author revision. The editor can view reviewer contextual
              annotations and add new revision requests as contextual
              annotations.
            </figcaption>
            <img
              src="/images/editor-submission-workspace-annotations.png"
              alt="workflow inbound and outbound resources"
              className={bem`@__figure-image @--screen-shot`}
            />
          </figure>
        </section>

        <section id="processing-submissions" className={bem`@__section`}>
          <h2 className={bem`@__default-ui-type--subhead-1`}>
            Processing submissions{' '}
          </h2>
          <p>
            To determine what is being done on a submission and what needs to be
            done next, editors can check the current state of an action. Actions
            can be in one of four states:
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
              <a href="#write-reviews">
                assess a submission and make revision requests
              </a>{' '}
              or <a href="#revision-requests">endorse a completed review</a>).
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
              An error system allows editors to step through each of the fields
              that must be completed before an active action can be submitted
              (or staged). Required fields will be marked with an{' '}
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
                Example of an assess action with ‘action required’ error
                messages on fields that must be completed and facets (bottom
                left) to quickly navigate between required action annotations.
              </figcaption>
              <img
                src="/images/editor-assess-action.png"
                alt="Assess action with action required error messages alerting the editor that there is work to be done"
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
                useful, for example, to view the manuscript while writing a
                general revision request.
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
                  Example of the shell editor for editing a general revision
                  request of an editor assess action while viewing the
                  manuscript.
                </figcaption>
                <img
                  src="/images/general-revision-request-comments.png"
                  alt="The shell is open to view a general revision request comment in progress while viewing the manuscript (to help write the request)"
                  className={bem`@__figure-image @--screen-shot`}
                />
              </figure>
            </Info>

            <Info>
              <header>Linking to content</header>
              <p>
                When writing a revision request, it may be helpful to reference
                a specific paragraph or resource of the manuscript. <TextLogo />{' '}
                provides permanent links (‘permalinks’) for every section,
                paragraph, and resource of a manuscript to enable editors to
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
                (e.g., after an author revision), links in the autocomplete menu
                point to the latest version of the content.
              </p>
              <figure className={bem`@__figure`}>
                <figcaption className={bem`@__figure-caption`}>
                  <p>
                    Example of a permalink added using the autocomplete menu in
                    an editor revision request.
                  </p>
                </figcaption>
                <img
                  src="/images/permalink-autocomplete-editor.png"
                  alt="autocomplete menu to select an identifier in an editor revision request comment"
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
                ). This allows editors to continue viewing the inbound resource
                while performing an action or adding a comment in context.{' '}
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
                    Example of an editor viewing an author release note in a
                    shell while writing a revision request comment in context.
                  </p>
                </figcaption>
                <img
                  src="/images/editor-inbound-shell.png"
                  alt="view author release notes in a shell while writing a revision request comment in context"
                  className={bem`@__figure-image @--screen-shot`}
                />
              </figure>
            </Info>
          </section>

          <section id="staged-actions" className={bem`@__sub-section`}>
            <h3 className={bem`@__default-ui-type--subhead-1`}>
              Staged actions
            </h3>
            <p>
              When an action is staged, it is open to commenting. Comments can
              be used for collaboration (e.g., editors can add comments while
              working together on revision requests for an assessment), or to
              provide feedback as an outside participant (e.g., an editor can
              comment on a staged author submission to flag missing resources or
              on a review to{' '}
              <a href="#endorser-requests">
                request changes during an endorsement
              </a>
              ). Comments can be added to the action as{' '}
              <a href="#staged-actions-general-comments">general comments</a> or
              directly{' '}
              <a href="#staged-actions-contextual-comments">in context</a>.
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
                  Example of general comments on an publish action.
                </figcaption>
                <img
                  className={bem`@__figure-image @--screen-shot`}
                  src="/images/editor-general-comments.png"
                  alt="general comments on an action"
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
                Comments about a specific field of the action (e.g., an editor
                decision) or any section, resource or selection of text in the
                manuscript can be added directly in context.
              </p>
              <p>
                Content that can be commented will have a blue select bar on the
                left. Click on the select bar to add a contextual comment to the
                entire block or highlight a selection of text to add a
                contextual comment to the selection only.
              </p>
              <figure className={bem`@__figure`}>
                <figcaption className={bem`@__figure-caption`}>
                  Example of an assess action where an editor has selected a
                  decision and staged the action for commenting by other editors
                  before sending to the author, and another editor has added an
                  in-context comment to discuss the decision result.
                </figcaption>
                <img
                  className={bem`@__figure-image @--screen-shot`}
                  src="/images/staged-assess-action.png"
                  alt="staged assess with collaborative editor comments in order to reach a consensus"
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
              ) during an active action to help editors perform their work (see{' '}
              <a href="#shell-reader">above</a> for more on viewing inbound
              resources during an active action). Editors can also refer to
              completed actions from any previous stage to track the status of a
              submission.
            </p>
            <figure className={bem`@__figure`}>
              <figcaption className={bem`@__figure-caption`}>
                Example of a completed editor review action to triage a
                submission.
              </figcaption>
              <img
                className={bem`@__figure-image @--screen-shot`}
                src="/images/completed-triage-action.png"
                alt="completed editor assessment"
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
              opened for commenting (and/or endorsement). For example, an editor
              may need to wait for a reviewer to complete a review action before
              they can see the reviews and endorse it.
            </p>
            <figure className={bem`@__figure`}>
              <figcaption className={bem`@__figure-caption`}>
                Example of an action in a waiting state. Here, an
                Editor-in-Chief is waiting on the Editorial Office to complete
                the assessment before they can endorse it.
              </figcaption>
              <img
                className={bem`@__figure-image @--screen-shot`}
                src="/images/editor-waiting-state.png"
                alt="editor endorsement of review action in a waiting state"
              />
            </figure>
          </section>
        </section>

        <section id="faq" className={bem`@__section`}>
          <h2 className={bem`@__default-ui-type--headline`}>FAQ</h2>
          <p>Below are answers to the following frequently asked questions:</p>
          <ul className={bem`@__list`}>
            <li>
              <a href="#write-revision-requests">
                How do I write revision requests during an assessment?
              </a>
            </li>
            <li>
              <a href="#endorser-requests">
                How do I request a change during an endorsement?
              </a>
            </li>

            <li>
              <a href="#provide-services">
                How can I create my own typesetting service to reduce my cost?
              </a>
            </li>

            <li>
              <a href="#typesetting">
                How can I request a revision as part of a typesetting action?
              </a>
            </li>

            {/* TODO Add FAQ for how to add QA on an indexing action to validate semantic tags */}
          </ul>

          <section id="write-revision-requests" className={bem`@__sub-section`}>
            <h3 className={bem`@__default-ui-type--subhead-1`}>
              How do I write a revision request as part of an assessment?
            </h3>
            <p>
              At a minimum, editors must complete all required fields of the{' '}
              <a href="#active-actions">active</a> assess action (marked with an{' '}
              <em>action required</em> error message) prior to submitting (or
              staging) their assessment. When requesting a revision from
              authors, editors can select the type of revision (e.g., major vs
              minor). Editors can add their revision requests to the decision
              reason field or as <a href="#general-comments">general</a> and{' '}
              <a href="#in-context-comments">contextual</a> revision requests
              (see below).
            </p>

            <p>
              Rather than writing revision requests as one long block of text
              referencing page and line numbers, editors have the option to
              write their revision requests as a structured list of general and
              in-context revision requests.
            </p>

            <section id="general-comments" className={bem`@__sub-section`}>
              <h4 className={bem`@__default-ui-type--subhead-2`}>
                General revision requests
              </h4>
              <p>
                General revision requests are standalone, non-contextual
                revision request comments. They may apply to more than one part
                of the submission or to the submission as a whole (e.g., to
                suggest missing information, request clarification on a
                high-level concept, or raise concerns over methods).
              </p>
              <p>
                General revision requests can be added using the blue plus
                button and reordered by dragging and dropping the note using the
                menu bar (
                <Iconoclass
                  className={bem`__icon`}
                  tagName="span"
                  iconName="menu"
                  round={false}
                  size="2rem"
                />
                ). Editors can open general revision requests in a shell (
                <Iconoclass
                  className={bem`__icon`}
                  tagName="span"
                  iconName="shell"
                  round={false}
                  size="2rem"
                />
                ) to continue editing a general revision request while viewing
                any resource (see{' '}
                <a href="#shell-editor">
                  completing required fields with the shell editor
                </a>{' '}
                above for more).
              </p>
              <figure className={bem`@__figure`}>
                <figcaption className={bem`@__figure-caption`}>
                  Example of a general revision request being edited in a shell
                  during an assess action.
                </figcaption>
                <img
                  src="/images/general-revision-request-comments.png"
                  alt="general revision requests during assess action"
                  className={bem`@__figure-image @--screen-shot`}
                />
              </figure>
            </section>

            <section id="in-context-comments" className={bem`@__sub-section`}>
              <h4 className={bem`@__default-ui-type--subhead-2`}>
                Contextual revision requests
              </h4>
              <p>
                Contextual revision requests are typically brief and made on a
                specific selection of text or single resource of the submission
                (e.g., to highlight a typo in the text, request a paragraph be
                clarified or rewritten, or suggest a new axis label for a
                figure).
              </p>
              <p>
                Content that can be annotated will have a blue select bar on the
                left. Click on the select bar to add a contextual revision
                request comment to the entire block or highlight a selection of
                text to add a contextual revision request comment to the
                selection only.
              </p>{' '}
              <p>
                Be sure to select <strong>revision request</strong> as the
                comment type when adding a revision request.
              </p>
              <figure className={bem`@__figure`}>
                <figcaption className={bem`@__figure-caption`}>
                  Example of an in-context revision request comment made during
                  an assessment.
                </figcaption>
                <img
                  src="/images/in-context-revision-request.png"
                  alt="in-context editor revision requests made during an assess action"
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
              comments during an endorsement.
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
                  Example of a general endorser comment during a pay action to
                  request justification for the requested price.
                </figcaption>
                <img
                  src="/images/editor-general-endorser-comment.png"
                  alt="editor adds endorser comment to a reviewer comment to request changes"
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
              <p>
                Contextual endorser comments can be added directly to any field,
                section, resource, selection of text, or existing annotation
                (see <a href="#staged-actions-contextual-comments">above</a> for
                more information on adding contextual comments during a staged
                action).
              </p>
              <p>For example, contextual endorser comments can be added to:</p>{' '}
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
                New contextual endorser comments have a blue endorser comment
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
                  Example of a contextual endorser comment.
                </figcaption>
                <img
                  src="/images/contextual-editor-endorser-comment.png"
                  alt="author adds endorser comment to a reviewer comment to request changes"
                  className={bem`@__figure-image @--screen-shot`}
                />
              </figure>
            </section>
          </section>

          <section className={bem`@__sub-section`} id="provide-services">
            <h3 className={bem`@__default-ui-type--subhead-1`}>
              How can I create my own typesetting service to reduce my cost?
            </h3>
            <p>
              All submissions must be converted to a structured format,
              following a <TextLogo />{' '}
              <Link to="/get-started/publication-types-and-style-guides">
                style guide
              </Link>{' '}
              prior to publication. Journals can offer authors a typesetting
              service to convert submissions at any stage in the workflow (e.g.,
              at submission or production). To save costs, rather than utilizing
              the paid <TextLogo /> typesetting service, journals can provide
              their own typesetting service. See the{' '}
              <a href="#providing-author-services">providing services</a> info
              box above for more on setting up a typesetting service.
            </p>
            <p>
              When an author selects a typesetting service, a typesetting action
              is automatically created for the submission and editors can assign
              the action to journal production staff. (Note, if the service
              offered is provided by <TextLogo />, the action will be
              automatically assigned and completed by <TextLogo />
              ).
            </p>
            <p>
              Production staff completing a typesetting service action can
              download the document to typeset and upload the final typeset file
              when ready. Prior to completing the service, production staff can
              preview the typeset file and upload revised files, as required.{' '}
            </p>
            <figure className={bem`@__figure`}>
              <figcaption className={bem`@__figure-caption`}>
                <p>
                  Example of a producer uploading a typeset file to complete a
                  typesetting action
                </p>
              </figcaption>
              <img
                src="/images/services-typesetter-upload.png"
                alt="complete typesetting action"
                className={bem`@__figure-image @--screen-shot`}
              />
            </figure>
            <p>
              When the service has been completed, the author will be notified
              so that they can view and submit the typeset manuscript.
            </p>
          </section>

          <section id="typesetting" className={bem`@__sub-section`}>
            <h3 className={bem`@__default-ui-type--subhead-1`}>
              How can I request a revision as part of a typesetting action?
            </h3>
            <p>
              A producer completing a typesetting action may need to request a
              revised file from the author (e.g., if data or metadata are
              missing).{' '}
            </p>
            <p>
              To request a revision, the typesetter can specify a reason for the
              request (e.g., Figure 2 is missing) and submit the request.
            </p>
          </section>
          <figure className={bem`@__figure`}>
            <figcaption className={bem`@__figure-caption`}>
              <p>
                Example of a typesetter requesting a revised file from the
                author.
              </p>
            </figcaption>
            <img
              src="/images/typesetter-revision-request.png"
              alt="Typesetter requests a revised file from the author due to a missing figure."
              className={bem`@__figure-image @--screen-shot`}
            />
          </figure>
          <p>
            When a revision request is submitted, the author will see an error
            message and an active dropzone to upload a revision as part of the
            create release (upload) action in which the service was purchased.
          </p>
          <figure className={bem`@__figure`}>
            <figcaption className={bem`@__figure-caption`}>
              <p>
                Example of the author‘s view when a typesetter has requested a
                revision (e.g., that includes a missing figure).
              </p>
            </figcaption>
            <img
              src="/images/typesetter-revision-request-author.png"
              alt="Typesetter requests a revised file from the author due to a missing figure."
              className={bem`@__figure-image @--screen-shot`}
            />
          </figure>
        </section>

        <DocumentationLicense />
      </article>
    );
  }
}
