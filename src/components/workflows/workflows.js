import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BemTags, TextLogo } from '@scipe/ui';
import Iconoclass from '@scipe/iconoclass';
import WorkflowExample from './workflow-example';
import BlindingExample from './blinding-example';
import simpleWorkflow from '../../data/simple-workflow';
import twoStepWorkflow from '../../data/two-step-submission-workflow';
import triageAndCycleWorkflow from '../../data/triage-and-cycle-workflow';
import DocumentationLicense from '../license.js';
import Info from '../info';

export default class Workflows extends React.PureComponent {
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
        className={bem`workflows @__article @__default-sans-body-type`}
      >
        <Helmet>
          <title>Smart editorial workflows guide • sci.pe</title>
        </Helmet>

        <header className={bem`@__header`}>
          <h1 className={bem`@__default-ui-type--display-1`}>
            Smart editorial workflows guide
          </h1>
          <img src="/images/review.png" alt="smart editorial workflows logo" />
        </header>

        <section id="introduction" className={bem`@__section`}>
          <h2 className={bem`@__default-ui-type--headline`}>Introduction</h2>

          <p>
            <TextLogo /> lets editors create arbitrary editorial workflows.
            Editorial workflows created on <TextLogo /> are formally specified
            ahead of time, enabling authors and readers to benefit from a
            greater level of transparency. For example, authors know every step
            a submission will go through (before submitting a manuscript), and
            readers know everything that was done on a published submission
            (before reading it) &mdash; from anonymity settings (e.g., single vs
            double blind peer review) to monetary transactions (such as the sale
            of services or payments made to journals or reviewers via{' '}
            <abbr title="Article Processing Charges">APCs</abbr>).
          </p>
          <p>
            Smart editorial workflows are both human-readable so that they can
            be made available to others‘ scrutiny, and formally defined, so that
            the rules they contain can be enforced by machines. In a smart
            editorial workflow, Journals must define:
          </p>
          <ul className={bem`@__list`}>
            <li>
              Anonymity rules (i.e., who can view the identity of whom) both
              during peer review and after publication (
              <a href="#anonymity-settings">anonymity settings</a>), and
            </li>
            <li>
              The steps from submission to publication, including any monetary
              transactions such as the sale of author services or author payment
              of APCs (
              <a href="#creating-editorial-workflows">editorial workflow</a>).
            </li>
          </ul>

          <Info className={bem`@__info-panel`}>
            <header>Evolving editorial workflows</header>
            <p>
              When creating a smart editorial workflow, journals are no longer
              limited a finite set of pre-built options (such as open, single,
              or double blind peer review). <TextLogo /> provides the building
              blocks needed to not only recreate what exists but to also
              implement innovative and transparent peer review models and
              editorial workflows.
            </p>
            <p>
              Recent developments in publishing are starting to leverage the
              intrinsic possibilities of a digital medium. Journals are
              experimenting with new forms of peer review (e.g.,{' '}
              <a href="https://www.sciencematters.io/help/publishing-process">
                triple blind peer review
              </a>{' '}
              with ScienceMatters or{' '}
              <a href="https://f1000research.com/about">open peer review</a>{' '}
              with F1000), and new editorial workflows (e.g.,{' '}
              <a href="https://submit.elifesciences.org/html/elife_author_instructions.html#process">
                rapid initial submission prior to full submission
              </a>{' '}
              with eLife). Editors of new journals need the flexibility to not
              only implement existing publishing methods but to also experiment
              with new ones.
            </p>
          </Info>
        </section>

        <section className={bem`@__section`} id="anonymity-settings">
          <h2 className={bem`@__default-ui-type--headline`}>
            Anonymity settings
          </h2>
          <p>
            Peer review anonymity settings determine whether users in a given
            role (authors, editors, reviewers, or producers) can view the
            identity of other users in the same or different roles.
          </p>
          <p>
            Journals are typically limited to a few commonly used peer review
            models: open peer review (all identities are visible), single blind
            peer review (authors cannot view the identity of reviewers), or
            double blind peer review (authors cannot view the identity of
            reviewers and reviewers cannot view the identity of authors).{' '}
            <TextLogo /> provides the building blocks to recreate any of the
            common peer review models or to innovate and build new ones (e.g.,
            triple blind peer review where authors, reviewers,{' '}
            <em>and editors</em> cannot see each others’ identities).
          </p>
          <p>
            A peer review model is defined by who can view the identity of whom
            in a peer review anonymity matrix. Note, permissions are read from
            rows to column (so taking the first row, check whether authors can
            view the identity of authors, whether authors can view the identity
            of editors, and so forth).
          </p>

          <section id="peer-review-anonymity" className={bem`@__sub-section`}>
            <h3 className={bem`@__default-ui-type--subhead-1`}>
              Peer review anonymity
            </h3>
            <BlindingExample>
              Example of the peer review anonymity matrix used for setting the
              peer review model of a workflow. Select a preset (e.g., open peer
              review, single blind peer review, double blind peer review, or
              triple blind peer review) and modify it, or select ‘custom’ to
              configure a custom peer review model.
            </BlindingExample>
          </section>

          <section
            id="post-publication-anonymity"
            className={bem`@__sub-section`}
          >
            <h3 className={bem`@__default-ui-type--subhead-1`}>
              Post-publication anonymity
            </h3>
            <p>
              Journals can decide to make the identities of users in a given
              role visible to the public in order to provide readers with
              greater transparency.
            </p>
            <p>
              The identities of authors, reviewers, editors, or producers can
              either be kept anonymous or made visible to the public{' '}
              <em>after</em> publication.
            </p>

            <p>
              A <strong>post-publication anonymity settings matrix</strong>{' '}
              defines which identities (e.g., authors, reviewers, editors, or
              producers) public readers can view following publication.
            </p>
            <figure className={bem`@__figure`}>
              <figcaption className={bem`@__figure-caption`}>
                Example of post-publication anonymity settings for a workflow.
                Here, all roles are visible to public readers.
              </figcaption>
              <img
                src="/images/workflows-post-publication-anonymity-matrix.png"
                alt="editor decides to make all roles visible to public readers after publication"
                className={bem`@__figure-image @--screen-shot`}
              />
            </figure>
          </section>

          <Info className={bem`@__info-panel`}>
            <header>The science of peer review anonymity</header>
            <p>
              To learn more about peer review and the arguments for and against
              different peer review models see for example: “Peer Review in
              Scientific Publications: Benefits, Critiques, &amp; A Survival
              Guide”{' '}
              <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4975196/">
                (Kelly, Sadeghieh and Adeli 2014)
              </a>{' '}
              or “A multi-disciplinary perspective on emergent and future
              innovations in peer review”{' '}
              <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5686505.2/">
                (Tennant et al. 2017)
              </a>
              .
            </p>
          </Info>
        </section>

        <section id="creating-editorial-workflows" className={bem`@__section`}>
          <h2 className={bem`@__default-ui-type--headline`}>
            Editorial workflows
          </h2>
          <p>
            An editorial workflow is the set of steps a submission may go
            through before it can be published. While workflows tend to share a
            set of standard elements (e.g., submission, review, revision, and
            production), new workflows are emerging in an effort to shorten time
            to publication, reduce author workload, and improve final
            publication quality.
          </p>
          <p>
            Rather than limiting journals to a set of standard workflows,{' '}
            <TextLogo /> allows to recreate and configure standard workflows or
            invent new ones. With composable building blocks, any workflow
            becomes possible, even ones that have not been invented yet.
          </p>
          <p>The steps below describe how workflows are built from actions.</p>

          <section id="actions" className={bem`@__sub-section`}>
            <h3 className={bem`@__default-ui-type--subhead-1`}>
              {' '}
              Defining building blocks (actions)
            </h3>
            <p>
              Actions are the minimum building blocks for any editorial
              workflow. Actions can be configured and composed into a custom
              editorial workflow. The minimum set of actions that can be used to
              build any workflow are described in the{' '}
              <a href="#action-table">table</a> below.
            </p>
            {/* TODO add abstracting and indexing actions when implemented */}
            <table id="action-table" className={bem`@__table`}>
              <caption className={bem`@__table-caption`}>
                <p>
                  The table details the minimum set of actions that can be used
                  in an editorial workflow. For each action, the action name,
                  the role of the user who can complete the action (‘agent’),
                  and additional details of the action are provided.
                </p>
              </caption>
              <thead className={bem`@__table-header`}>
                <tr className={bem`@__table-row`}>
                  <th scope="col" className={bem`@__table-cell --header`}>
                    Name
                  </th>
                  <th scope="col" className={bem`@__table-cell --header`}>
                    Agent
                  </th>
                  <th scope="col" className={bem`@__table-cell --header`}>
                    Details
                  </th>
                </tr>
              </thead>
              <tbody className={bem`@__table-body`}>
                <tr className={bem`@__table-row`}>
                  <td className={bem`@__table-cell`}>Declare</td>
                  <td className={bem`@__table-cell`}>Author</td>
                  <td className={bem`@__table-cell`}>
                    Includes required questions and the associated answer type
                    (e.g., yes / no vs free text response) to collect
                    information from the author (e.g.,{' '}
                    <em>
                      Has the submission been previously published in whole or
                      in part, accepted for publication, or under review for
                      publication elsewhere?
                    </em>
                    ).
                  </td>
                </tr>
                <tr className={bem`@__table-row`}>
                  <td className={bem`@__table-cell`}>Release (Upload)</td>
                  <td className={bem`@__table-cell`}>Author</td>
                  <td className={bem`@__table-cell`}>
                    Includes requirements for authors uploading a new or revised
                    manuscript file.
                    <p>Additionally, the action can include:</p>
                    <ul className={bem`@__list`}>
                      <li>
                        Requirement for production quality content (i.e., only a
                        submission following a standard{' '}
                        <Link to="/get-started/publication-types-and-style-guides/">
                          style guide{' '}
                        </Link>{' '}
                        can be submitted versus a PDF file), and
                      </li>
                      <li>
                        Author service offerings such as a typesetting service
                        to help authors get production quality content and
                        benefit from formless submission.
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr className={bem`@__table-row`}>
                  <td className={bem`@__table-cell`}>Pay</td>
                  <td className={bem`@__table-cell`}>Author</td>
                  <td className={bem`@__table-cell`}>
                    Defines author payments and the amount to be paid (e.g., for
                    APCs or submission fees). To allow variable or waiveable
                    APCs, an endorser must be specified (see the info box{' '}
                    <a href="#variable-apcs">below</a>).
                  </td>
                </tr>
                <tr className={bem`@__table-row`}>
                  <td className={bem`@__table-cell`}>Review</td>
                  <td className={bem`@__table-cell`}>
                    Reviewer, Editor, Producer
                  </td>
                  <td className={bem`@__table-cell`}>
                    Includes requirement for the user completing the review to
                    rate a submission (e.g., on a 5-point scale) and write a
                    review (including to write general and in-context comments,
                    as required).
                    <p>Additionally, the action can include: </p>
                    <ul className={bem`@__list`}>
                      <li>
                        A minimum and maximum number of reviews required
                        (reviewers can be invited and assigned to review a
                        submission up to the maximum number required; additional
                        reviewers can be queued and invited only after other
                        reviewers have declined or been unassigned by the
                        editor).
                      </li>
                      <li>
                        Reviewer questions (e.g.,{' '}
                        <em>Are the methods sound?</em>) to collect structured
                        reviews and help guide the review process, if desired.
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr className={bem`@__table-row`}>
                  <td className={bem`@__table-cell`}>Paid Review</td>
                  <td className={bem`@__table-cell`}>
                    Reviewer, Editor, Producer
                  </td>
                  <td className={bem`@__table-cell`}>
                    Paid review actions include the same configurations as
                    review actions, but also allow to specify remuneration for
                    completed review actions.
                  </td>
                </tr>
                <tr className={bem`@__table-row`}>
                  <td className={bem`@__table-cell`}>Assess</td>
                  <td className={bem`@__table-cell`}>Editor</td>
                  <td className={bem`@__table-cell`}>
                    Includes the possible next steps (‘assessment choices’) that
                    can be taken after all actions of a stage have been
                    completed (e.g., the editor can decide to send a submission
                    to review, request a revision, reject it, or accept and send
                    it to production).
                  </td>
                </tr>
                <tr className={bem`@__table-row`}>
                  <td className={bem`@__table-cell`}>Publish</td>
                  <td className={bem`@__table-cell`}>Editor</td>
                  <td className={bem`@__table-cell`}>
                    Sets a publication date and URL for an accepted submission
                    and allows to publish it to the journal homepage during the
                    final stage of a workflow.
                    <p>Additionally, the action can include:</p>
                    <ul className={bem`@__list`}>
                      <li>
                        Add-on services such as a DOI registration service that
                        will register DOIs for the manuscript and all components
                        (e.g., figures, videos, and audio files) upon completion
                        of the publish action.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          <section id="configuration" className={bem`@__sub-section`}>
            <h3 className={bem`@__default-ui-type--subhead-1`}>
              {' '}
              Configuring actions
            </h3>
            <p>During a workflow, actions can be in different states.</p>
            <ul className={bem`@__list`}>
              <li>
                When actions are <strong>active</strong>, they can be performed
                by an agent and visible to an audience,
              </li>
              <li>
                When actions are ready to be completed they can be{' '}
                <strong>staged</strong> and open to comments by participants and
                endorsed by an endorser,
              </li>
              <li>
                Then, actions can be <strong>completed</strong> and made visible
                to another audience either immediately or after a group of
                actions (or stage) has been completed.
              </li>
            </ul>
            <p>
              Actions be can be configured (
              <Iconoclass
                className={bem`__icon`}
                tagName="span"
                iconName="gear"
                round={false}
                size="2rem"
              />
              ) across different states, by setting the{' '}
              <a href="#agent"> agent</a>,{' '}
              <a href="#participant">participants and endorser</a>, and{' '}
              <a href="#audience">audience</a> of an action.
            </p>
            <figure className={bem`@__figure`}>
              <figcaption className={bem`@__figure-caption`}>
                <p>
                  Example of the configuration options available for an assess
                  action in a workflow.
                </p>
              </figcaption>
              <img
                className={bem`@__figure-image @--screen-shot`}
                src="/images/workflows-assess-configuration.png"
                alt="settings for an action to define agent, audience, and endorser on an assess action"
              />
            </figure>

            <section id="agent" className={bem`@__sub-section`}>
              <h4 className={bem`@__default-ui-type--subhead-2`}>
                {' '}
                Agents of active actions
              </h4>
              <p>
                The agent of an action can <strong>perform</strong> the action
                and <strong>stage</strong> it for commenting when it is ready to
                be completed. Editors can restrict who can perform the action to
                users in a given role (e.g., all editors) or to users with a
                specific title (e.g., only an editor-in-chief).
              </p>
              <Info id="require-endorsement" className={bem`@__info-panel`}>
                <header>
                  Restricting the agent of an action to only a user (and not a
                  group)
                </header>
                <p>
                  In some cases, only a user (and not an entire group of users)
                  can perform an action. For example, typically for a review
                  action, only an individual reviewer (not all reviewers) can
                  perform a review.
                </p>
                <p>
                  When an agent is restricted to only a user, no active audience
                  of an action will be specified (no roles will be selected).
                  During a workflow, an individual user can be assigned to the
                  action and only the assigned user will have access to the
                  action while it is active.
                </p>
                <figure className={bem`@__figure`}>
                  <figcaption className={bem`@__figure-caption`}>
                    <p>
                      Example of the active audience configuration required to
                      restrict an agent to only a user (there are no selected
                      roles).
                    </p>
                  </figcaption>
                  <img
                    className={bem`@__figure-image @--screen-shot`}
                    src="/images/workflows-blank-active-audience.png"
                    alt="settings for the active audience needed to restrict an agent to only a user"
                  />
                </figure>
              </Info>
            </section>

            <section id="participant" className={bem`@__sub-section`}>
              <h4 className={bem`@__default-ui-type--subhead-2`}>
                {' '}
                Participants of staged actions
              </h4>
              <p>
                Participants of an action can <strong>view</strong> and{' '}
                <strong>comment</strong> on an action once it is staged by an
                agent. The participants of a staged action are set by role
                (i.e., authors, reviewers, editors, or producers). Note, the
                agent of an action is automatically included as a participant.
              </p>
              <figure className={bem`@__figure`}>
                <figcaption className={bem`@__figure-caption`}>
                  <p>
                    Example of the action participants configuration. In the
                    example, authors are also the agent, so they are
                    automatically included as participants and cannot be removed
                    (greyed checkbox).
                  </p>
                </figcaption>
                <img
                  className={bem`@__figure-image @--screen-shot`}
                  src="/images/workflows-participants.png"
                  alt="settings for the active audience needed to restrict an agent to only a user"
                />
              </figure>
              <p>
                Commenting enables collaboration between users in the same role
                (e.g., editors can collaborate to write revision requests for
                the authors, or authors can collaborate to improve responses to
                submission questions). Commenting also enables feedback between
                users in different roles (e.g., editors can flag missing
                resources before an author finalizes their submission, or
                reviewers can comment on an editor decision before it is sent to
                the author).
              </p>
              <p>
                {' '}
                In some cases, control over completing the action can be given
                to a subset of the participants called endorsers. If an endorser
                is assigned, an action can only be completed when an endorser is
                satisfied that their comments have been addressed by the agent
                and <strong>endorse</strong> the action. When no endorser is
                assigned, the agent can complete the action anytime after it has
                been staged.
              </p>

              <Info id="require-endorsement" className={bem`@__info-panel`}>
                <header>The role of endorsers</header>
                <p>
                  Endorsers are participants who can <strong>comment</strong>{' '}
                  and <strong>complete</strong> an action. Having an endorser
                  provides a stronger guarantee that participant comments will
                  be addressed, as the endorser determines when to close
                  commenting. Some examples of opportunities for endorsements
                  include:
                </p>
                <ul className={bem`@__list`}>
                  <li>
                    An editor (or producer) endorsement of an author{' '}
                    <em>release (upload) action</em> or <em>delare action</em>{' '}
                    enables incomplete submissions to be corrected immediately
                    (e.g., the editorial office can request that the author add
                    a missing figure to their submission){' '}
                  </li>
                  <li>
                    An editor (or producer) endorsement of an editor{' '}
                    <em>assess action</em> provides a check on the final
                    decision before it is shared with an author (e.g., an
                    Editor-in-Chief can check the decision made by an Associate
                    Editor)
                  </li>{' '}
                  <li>
                    An author endorsement of an editor, producer, or reviewer{' '}
                    <em>review action</em> can help speed up the publishing
                    process (by engaging authors and reviewers in a conversation
                    when they are most active) and encourage constructive
                    reviews (e.g., an author can comment on reviews and debate
                    contested points prior to the editor making a decision)
                  </li>
                  <li>
                    An editor endorsement of a reviewer <em>review action</em>{' '}
                    enables editors to flag areas of the manuscript requiring
                    attention and request reviewers to modify reviews prior to
                    sending them to an author (e.g., to ensure reviews are
                    constructive)
                  </li>
                  <li>
                    An editor (or producer) endorsement of an editor{' '}
                    <em>publish action</em> can catch any errors in publication
                    date or URL prior to publishing the final article to the
                    journal homepage
                  </li>
                </ul>
              </Info>
            </section>

            <section id="audience" className={bem`@__sub-section`}>
              <h4 className={bem`@__default-ui-type--subhead-2`}>
                {' '}
                Audience of active, staged, and completed actions
              </h4>
              <p>
                The audience of an action can <strong>view</strong> an action in
                active, staged, and/or completed states. Editors can specify an
                audience to ensure that actions will be made visible to the
                right users, at the right time. Editors can set the action
                audience to define who can view the action when it is active,
                staged, and/or completed. Note, when an action is staged, there
                is no view-only audience, only agents and participants who can
                view and comment on the action.
              </p>

              <figure className={bem`@__figure`}>
                <figcaption className={bem`@__figure-caption`}>
                  <p>
                    Example of the audience for a review action when it is
                    active, staged, and completed. Note, as there is no active
                    audience, only a reviewer assigned to the action by an
                    editor can view and edit the review when it is active.
                  </p>
                </figcaption>
                <img
                  className={bem`@__figure-image @--screen-shot`}
                  src="/images/workflows-review-action-audience.png"
                  alt="audience of a review action"
                />
              </figure>
            </section>

            <section id="action-services" className={bem`@__sub-section`}>
              <h4 className={bem`@__default-ui-type--subhead-2`}>
                {' '}
                Add-on and potential services
              </h4>
              <p>
                Some actions can also be enriched with services. There are two
                types of services:{' '}
              </p>
              <ul className={bem`@__list`}>
                <li>
                  Add-on services that are triggered automatically upon action
                  completion (e.g., a DOI registration service added to a
                  publish action will automatically register a manuscript and
                  its components for DOIs upon completion of the publish
                  action), and
                </li>
                <li>
                  Potential services that are optional and must be selected
                  during an action before they are completed (e.g., a
                  typesetting service added to a create release action will only
                  be triggered if it is selected by the author during
                  submission){' '}
                </li>
              </ul>
              <p>
                The type of service determines whether it is an add-on service
                or potential service.{' '}
              </p>
              <p>
                Add-on services are offered by <TextLogo /> and can be added to
                any workflow, whereas potential services are offered by the
                journal publishing organization and must be configured before
                they can be added to a workflow. See the{' '}
                <Link to="/get-started/editor-user-guide">
                  editor user guide
                </Link>{' '}
                for more information on how author services are set up.
              </p>
              <figure className={bem`@__figure`}>
                <figcaption className={bem`@__figure-caption`}>
                  <p>
                    Example of a create release (upload) action with a journal
                    typesetting service added.
                  </p>
                </figcaption>
                <img
                  src="/images/workflows-release-configuration.png"
                  alt="add typesetting service to a create release action of a workflow"
                  className={bem`@__figure-image @--screen-shot`}
                />
              </figure>
            </section>

            <section id="public-access" className={bem`@__sub-section`}>
              <h4 className={bem`@__default-ui-type--subhead-2`}>
                {' '}
                Action visibility post-publication
              </h4>
              <p>
                Actions in a workflow can be made visible to the public
                following publication to provide readers with greater
                transparency (e.g., as was the aim of{' '}
                <a href="https://elifesciences.org/inside-elife/e3e90410/increasing-transparency-in-elife-s-review-process">
                  eLife
                </a>{' '}
                in making editor decision letters and author responses visible
                to the public after publication).
              </p>
              <p>
                The full contents of any action that has the{' '}
                <strong>Make public at publication</strong> setting selected
                will be visible to public readers after publication (including
                the submitted file in case of a release action).
              </p>
              <p>
                Note, the final release of the accepted submission will{' '}
                <em>always</em> be made public.
              </p>
              <figure className={bem`@__figure`}>
                <figcaption className={bem`@__figure-caption`}>
                  Example of public access settings for workflow actions. Here,
                  the editor assess action will be made public after
                  publication, but not the review.
                </figcaption>
                <img
                  src="/images/workflows-review-stage-actions-public-access.png"
                  alt="editor decides to make assess action public after publication during the review stage"
                  className={bem`@__figure-image @--screen-shot`}
                />
              </figure>
            </section>
          </section>

          <section id="stages" className={bem`@__sub-section`}>
            <h3 className={bem`@__default-ui-type--subhead-1`}>
              {' '}
              Composing actions into stages
            </h3>
            <p>
              For richer workflows, actions can be composed into multiple,
              connected stages. Any actions can be included in a stage, but
              stages must include either an assess action or (publish action
              during the final production stage) as the final action of a stage.
            </p>
            <p>Examples of stages include: </p>
            <ul className={bem`@__list`}>
              <li>
                submission stage (with release (upload), declare, and assess
                actions),
              </li>
              <li>review stage (with review and assess action),</li>
              <li>
                revision stage (with release (upload) and assess actions), or{' '}
              </li>
              <li>production stage (with pay APC and publish actions)</li>
            </ul>
            <p>
              The stages listed as assessment choices in an editor assess action
              define how a submission can move between stages.
            </p>
            <p>
              At the end of any stage, editors can elect to reject a submission
              or move it to a production stage (accept). Reject removes the
              submission from the workflow and marks it as rejected. Move to
              production accepts the submission and moves it to the final stage
              (containing a publish action).
            </p>
            <figure className={bem`@__figure`}>
              <figcaption className={bem`@__figure-caption`}>
                Example of assessment choices after an editor assess action.
              </figcaption>
              <img
                src="/images/workflows-assess-choices.png"
                alt="stages available as assessment choices after a decision after revision"
                className={bem`@__figure-image @--screen-shot`}
              />
            </figure>

            <Info id="require-endorsement" className={bem`@__info-panel`}>
              <header>Workflows with cycles and multiple revision types</header>
              <p>
                In some cases, stages may need to be repeated (e.g., for several
                rounds of review or revision). Rather than re-creating the same
                stage multiple times, stages can be reused simply by adding the
                stage as an assessment choice of itself (e.g., to allow for
                multiple revisions in a row, the revision stage can be made an
                assessment choice of itself).
              </p>
              <p>
                For cycling between multiple stages, the stages can be listed as
                assessment choices of each other (e.g., to allow for cycles
                between a review and a revision stage, the review stage is an
                assessment choice of the revision stage and vice versa).
              </p>
              <p>
                For workflows requiring different types of revision (e.g., major
                revision, minor revision, or corrections), only one revision
                stage is needed. The revision type is specified on the fly, not
                as part of the workflow stages.{' '}
              </p>
              <figure className={bem`@__figure`}>
                <figcaption className={bem`@__figure-caption`}>
                  Example of a revision type during an active assess action.
                </figcaption>
                <img
                  src="/images/workflows-revision-type.png"
                  alt="editor selects major revision type from a dropdown menu of revision types during an active assess action"
                  className={bem`@__figure-image @--screen-shot`}
                />
              </figure>
            </Info>
          </section>
        </section>

        <section id="examples" className={bem`@__section`}>
          <h2 className={bem`@__default-ui-type--headline`}>Examples</h2>
          <p>
            This section includes examples of editorial workflows and
            configurations.
          </p>

          {/* TODO add example with EPMC workflow (using indexing action with endorse to do semantic tag QA) see: https://gitlab.coko.foundation/xpub/xpub-epmc#workflow */}

          <section id="simple-example" className={bem`@__sub-section`}>
            <h3 className={bem`@__default-ui-type--subhead-1`}>
              Submission, review, revision, and production workflow
            </h3>
            <p>
              The example below shows an editorial workflow with four stages:
              submission, review, revision, and production. The workflow allows
              for multiple revision cycles (e.g., so that an editor can request
              major and/or minor revisions as needed). Authors are only required
              to answer questions during the submission stage (not during the
              revision stage).{' '}
            </p>
            <WorkflowExample createGraphAction={simpleWorkflow}>
              Features of interest include: The option to request multiple
              revision cycles following review, and author questions at
              submission but not revision.
            </WorkflowExample>
          </section>

          <section id="additional-example-1" className={bem`@__sub-section`}>
            <h3 className={bem`@__default-ui-type--subhead-1`}>
              Two-step submission, consultative review, and editor endorsement
            </h3>
            <p>
              Features of interest include: Two-step submission (initial and
              full submission), a consultative review process between authors
              and reviewers, and Editor-in-Chief endorsement of Associate Editor
              decision after review.
            </p>
            <p>
              {' '}
              A journal with this workflow could follow double blinding for peer
              review (see the anonymity matrix{' '}
              <a href="#peer-review-anonymity">above</a> and select ‘double
              blind’ to view the anonymity matrix for double blind peer review.)
            </p>

            <WorkflowExample createGraphAction={twoStepWorkflow}>
              Features of interest include: A two-step submission process
              (initial submission stage with few author requirements and full
              submission stage with more author requirements), consultative
              review (author endorsement of the reviews during the review
              stage), and Editor-in-Chief validation of Associate Editor
              decision after review. A two-step submission process can be
              beneficial for journals wishing to lower the barrier to entry for
              new submissions or for journals with high rejection rates who do
              not want to make additional requests until after an initial rapid
              assessment. A consultative review process can be beneficial for
              journals wishing to speed up the review and revision process and
              engage authors and reviewers at the time they are most invested.
              Finally, an editor validation step provides a check on the
              decision before it is sent to authors.
            </WorkflowExample>
          </section>

          <section id="additional-example-2" className={bem`@__sub-section`}>
            <h3 className={bem`@__default-ui-type--subhead-1`}>
              Submission triage and multiple review and revision cycles
            </h3>
            <p>
              The example below shows a complete editorial workflow with two
              unique features: A formal editorial submission triage (‘review’)
              step and multiple review and revision cycles.
            </p>
            <p>
              A journal with this workflow could follow open peer review (see
              the anonymity matrix <a href="#peer-review-anonymity">above</a>{' '}
              and select ‘open’ to view the anonymity matrix for open peer
              review.)
            </p>

            <WorkflowExample createGraphAction={triageAndCycleWorkflow}>
              Features of interest include: An editorial triage step at
              submission (editor review action during submission to conduct a
              rapid review prior to sending for peer review), and the ability to
              conduct multiple cycles of review and revision (the review stage
              is an assessment choice at the end of the revision stage and the
              revision stage is an assessment choice at the end of the review
              stage so submissions can cycle between the two stages as many
              times as required).
            </WorkflowExample>
          </section>

          <section>
            <section className={bem`@__sub-section`} id="business-model">
              <h3 className={bem`@__default-ui-type--subhead-1`}>
                Payments and remunerations in a workflow
              </h3>
              <p>
                <TextLogo /> supports journals with open access business models
                and enables journals to collect payments from authors as well as
                to offer remunerations to reviewers.{' '}
              </p>
              <p>
                Article processing charges (APCs) are currently the primary
                method of funding open access, peer-reviewed journals (See:{' '}
                <a href="https://www.nature.com/news/open-access-the-true-cost-of-science-publishing-1.12676">
                  Van Noorden 2013
                </a>{' '}
                and{' '}
                <a href="https://onlinelibrary.wiley.com/doi/abs/10.1087/20120207">
                  Bjork and Solomon 2016
                </a>{' '}
                for a discussion of open access business models). Journals can
                use APCs to support journal operations and in some cases to pay
                reviewers for their services.
              </p>
              <p>
                Journals collecting APCs will include a{' '}
                <strong>Pay Action</strong> in their editorial workflow (see the
                table <a href="#action-table">above</a>). Payment can be
                collected at any stage of a workflow (e.g., at submission or
                production).
              </p>
              <p>
                Journals offering remuneration for reviewers will include Paid
                Review Actions (rather than a Review Action) during the review
                stage of a workflow (see the table{' '}
                <a href="#action-table">above</a>).{' '}
              </p>
              <figure className={bem`@__figure`}>
                <figcaption className={bem`@__figure-caption`}>
                  <p>
                    Example of a Pay Action to collect an APC from authors after
                    acceptance.
                  </p>
                </figcaption>
                <img
                  src="/images/workflows-payments-set-APC.png"
                  alt="editors set the APC price"
                  className={bem`@__figure-image @--screen-shot`}
                />
              </figure>

              <Info className={bem`@__info-panel`}>
                <header id="variable-apcs">
                  Allowing variable (or waiveable) APCs
                </header>
                <p>
                  Editors can enable authors to request a reduced or waived fee
                  on a case-by-case basis (e.g., an author requiring financial
                  assistance can request a reduced fee). Any author requests for
                  discounts will need to be endorsed by the editor (or producer)
                  before payment can be completed.
                </p>
                <p>
                  If the Pay Action of an editorial workflow has an endorser
                  specified (e.g., an editor), then authors can request partial
                  or total discounts on the amount to be paid.
                </p>
                <figure className={bem`@__figure`}>
                  <figcaption className={bem`@__figure-caption`}>
                    <p>
                      Example of a Pay Action where the author can request a
                      reduced fee and add comments to justify the requested
                      price. The amount due will be updated if a requested price
                      is approved by the editor.
                    </p>
                  </figcaption>
                  <img
                    className={bem`@__figure-image @--screen-shot`}
                    src="/images/workflows-author-request-discount.png"
                    alt="author and editor engage to debate requested price on APC"
                  />
                </figure>
              </Info>
            </section>
          </section>
        </section>

        <DocumentationLicense />
      </article>
    );
  }
}
