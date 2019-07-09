import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { BemTags, SchemaLink as A } from '@scipe/ui';

export default class ApiWorkflowActions extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <div className={bem`@__table`}>
        <table id="workflow-actions">
          <caption>
            Action involved in the workflow specification (and their potential
            actions)
          </caption>
          <thead>
            <tr>
              <th>Action</th>
              <th>Additional properties for workflow specification</th>
              <th>Expected value</th>
              <th>Additional constraints</th>
            </tr>
          </thead>
          <tbody>
            {/* CreateGraphAction */}
            <tr>
              <th rowSpan={2}>
                <A>CreateGraphAction</A>
              </th>
              <td>
                <A>agent</A>
              </td>
              <td>
                <A>ContributorRole</A> specification
              </td>
              <td>-</td>
            </tr>

            <tr>
              <td>
                <A>result</A>
              </td>
              <td>
                <A>Graph</A>
              </td>
              <td>
                <p>
                  If specified, the <A>potentialAction</A> property must point
                  to a single <A>StartWorkflowStageAction</A>.
                </p>

                <p className={bem`@__warning`}>
                  Note that the <A>Graph</A> can be specified in{' '}
                  <a href="https://json-ld.org/spec/latest/json-ld/#flattened-document-form">
                    flattened document form
                  </a>{' '}
                  and that it will be stored in that form once the{' '}
                  <A>CreateWorkflowSpecificationAction</A> is completed.
                </p>
              </td>
            </tr>

            {/* StartWorkflowStageAction */}
            <tr>
              <th rowSpan={1}>
                <A>StartWorkflowStageAction</A>
              </th>
              <td>
                <A>result</A>
              </td>
              <td>
                Any of <A>AskAction</A>, <A>ReviewAction</A>,{' '}
                <A>CreateReleaseAction</A>, <A>AssessAction</A>,{' '}
                <A>PublishAction</A>
              </td>
              <td>-</td>
            </tr>

            <Tr type="AskAction">
              <tr>
                <td>
                  <A>question</A>
                </td>
                <td>
                  <A>Question</A>
                </td>
                <td>-</td>
              </tr>

              <tr>
                <td>
                  <A>potentialAction</A>
                </td>
                <td>
                  Any of <A>EndorseAction</A>, <A>AuthorizeAction</A>
                </td>
                <td>-</td>
              </tr>
            </Tr>

            <Tr type="CreateReleaseAction">
              <tr>
                <td>
                  <A>result</A>
                </td>
                <td>
                  <A>Graph</A>
                </td>
                <td>
                  If specified, the <A>potentialAction</A> property must contain
                  any of <A>AskAction</A>, <A>ReviewAction</A>,{' '}
                  <A>AssessAction</A>, <A>PublishAction</A>
                </td>
              </tr>

              <tr>
                <td>
                  <A>potentialAction</A>
                </td>
                <td>
                  Any of <A>EndorseAction</A>, <A>AuthorizeAction</A>
                </td>
                <td>-</td>
              </tr>

              <tr>
                <td>
                  <A>potentialService</A>
                </td>
                <td>
                  <A>Service</A>
                </td>
                <td>-</td>
              </tr>

              <tr>
                <td>
                  <A>expectsAcceptanceOf</A>
                </td>
                <td>
                  <A>Offer</A>
                </td>
                <td>-</td>
              </tr>
            </Tr>

            <Tr type="ReviewAction">
              <tr>
                <td>
                  <A>instrument</A>
                </td>
                <td>
                  <A>Answer</A>
                </td>
                <td>-</td>
              </tr>
            </Tr>

            <Tr type="AssessAction">
              <tr>
                <td>
                  <A>potentialResult</A>
                </td>
                <td>
                  Any of <A>StartWorkflowStageAction</A>, <A>RejectAction</A>
                </td>
                <td>-</td>
              </tr>

              <tr>
                <td>
                  <A>potentialAction</A>
                </td>
                <td>
                  Any of <A>EndorseAction</A>, <A>AuthorizeAction</A>,{' '}
                  <A>InformAction</A> (decision letter)
                </td>
                <td>-</td>
              </tr>
            </Tr>

            <Tr type="PublishAction">
              <tr>
                <td>
                  <A>potentialAction</A>
                </td>
                <td>
                  Any of <A>EndorseAction</A>, <A>AuthorizeAction</A>,{' '}
                  <A>InformAction</A> (acceptance letter)
                </td>
                <td>-</td>
              </tr>
            </Tr>
          </tbody>

          <tfoot>
            {/* EndorseAction */}
            <tr>
              <th rowSpan={3}>
                <A>EndorseAction</A>
              </th>
              <td>
                <A>agent</A>
              </td>
              <td>
                <A>ContributorRole</A> specification
              </td>
              <td>-</td>
            </tr>

            <tr>
              <td>
                <A>participant</A>
              </td>
              <td>
                <A>Audience</A>
              </td>
              <td>-</td>
            </tr>

            <tr>
              <td>
                <A>activateOn</A>
              </td>
              <td>
                <A>OnObjectStagedActionStatus</A>
              </td>
              <td>-</td>
            </tr>

            {/* AuthorizeAction */}
            <tr>
              <th rowSpan={3}>
                <A>AuthorizeAction</A>
              </th>
              <td>
                <A>agent</A>
              </td>
              <td>
                <A>ContributorRole</A> specification
              </td>
              <td>-</td>
            </tr>

            <tr>
              <td>
                <A>participant</A>
              </td>
              <td>
                <A>Audience</A>
              </td>
              <td>-</td>
            </tr>

            <tr>
              <td>
                <A>completeOn</A>
              </td>
              <td>
                One of <A>OnObjectCompletedActionStatus</A>,{' '}
                <A>OnWorkflowStageEnd</A>
              </td>
              <td>-</td>
            </tr>

            {/* InformAction */}
            <tr>
              <th rowSpan={5}>
                <A>InformAction</A>
              </th>
              <td>
                <A>agent</A>
              </td>
              <td>
                <A>ContributorRole</A> specification
              </td>
              <td>-</td>
            </tr>

            <tr>
              <td>
                <A>participant</A>
              </td>
              <td>
                <A>Audience</A>
              </td>
              <td>-</td>
            </tr>

            <tr>
              <td>
                <A>completeOn</A>
              </td>
              <td>
                One of <A>OnObjectCompletedActionStatus</A>,{' '}
                <A>OnWorkflowStageEnd</A>
              </td>
              <td>-</td>
            </tr>

            <tr>
              <td>
                <A>ifMatch</A>
              </td>
              <td>
                <A>Action</A>
              </td>
              <td>
                One of the action <code>@id</code> listed as{' '}
                <A>potentialResult</A> of the object of the <A>InformAction</A>.
              </td>
            </tr>

            <tr>
              <td>
                <A>instrument</A>
              </td>
              <td>
                <A>EmailMessage</A>
              </td>
              <td>
                <ul className={bem`@__list`}>
                  <li>
                    If specified, the <A>about</A> property is restricted to the
                    value of the object of the <A>InformAction</A>
                  </li>
                  <li>
                    If specified, the <A>messageAttachment</A> property is
                    restricted to <A>ReviewAction</A> part of the same workflow
                    stage as the object of the <A>InformAction</A>{' '}
                  </li>
                </ul>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

class Tr extends React.Component {
  static propTypes = {
    type: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element)
    ])
  };

  render() {
    const { type, children } = this.props;

    return (
      <Fragment>
        <tr>
          <th rowSpan={4 + React.Children.count(children)}>
            <A>{type}</A>
          </th>
          <td>
            <A>agent</A>
          </td>
          <td>
            <A>ContributorRole</A> specification
          </td>
        </tr>
        <tr>
          <td>
            <A>participant</A>
          </td>
          <td>
            <A>Audience</A>
          </td>
        </tr>
        <tr>
          <td>
            <A>expectedDuration</A>
          </td>
          <td>
            <A>Duration</A>
          </td>
        </tr>
        <tr>
          <td>
            <A>requiresCompletionOf</A>
          </td>
          <td>
            Any of <A>AskAction</A>, <A>ReviewAction</A>,{' '}
            <A>CreateReleaseAction</A>
          </td>
        </tr>
        {children}
      </Fragment>
    );
  }
}
