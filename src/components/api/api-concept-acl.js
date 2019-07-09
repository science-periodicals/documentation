import React from 'react';
import { BemTags, TextLogo, SchemaLink as A } from '@scipe/ui';
import JsonldExample from '../jsonld-example';
import Info from '../info';
import Iconoclass from '@scipe/iconoclass';

export default class ApiConceptAcl extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section
        id="access-control-and-permissions"
        className={bem`api @__sub-section`}
      >
        <h3 className={bem`@__default-ui-type--subhead-1`}>
          Access control and permissions
        </h3>

        <p>Access control and permissions are defined using:</p>

        <ul className={bem`@__list-steps`}>
          <li className={bem`@__list-step @--upper-alpha`}>
            <p>
              The <A>hasDigitalDocumentPermission</A> property of a{' '}
              <A>Periodical</A> or a <A>Graph</A>
            </p>

            <JsonldExample
              data={{
                '@context': 'https://sci.pe',
                '@type': 'Periodical',
                hasDigitalDocumentPermission: {
                  '@type': 'DigitalDocumentPermission',
                  grantee: {
                    '@type': 'Audience',
                    audienceType: 'public'
                  },
                  permissionType: 'ReadPermission'
                }
              }}
            >
              Example specifying that a journal (<A>Periodical</A>) can be
              viewed publicly
            </JsonldExample>

            <div className={bem`@__table`}>
              <table>
                <caption>
                  Permissions supported by the <TextLogo /> API.
                </caption>
                <thead>
                  <tr>
                    <th>
                      <A>DigitalDocumentPermissionType</A>
                    </th>
                    <th>
                      <A>grantee</A>
                    </th>
                    <th>
                      <A>permissionScope</A>
                    </th>
                    <th>Description</th>
                    <th>Applies to</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      <A>ReadPermission</A>
                    </td>
                    <td>
                      <A>Person</A> and / or <A>Audience</A>
                    </td>
                    <td>-</td>
                    <td>Read access</td>
                    <td>
                      <ul className={bem`@__inline-list`}>
                        <li>
                          <A>Periodical</A>
                        </li>
                        <li>
                          <A>Graph</A>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <A>WritePermission</A>
                    </td>
                    <td>
                      <A>Person</A> and / or <A>Audience</A>
                    </td>
                    <td>-</td>
                    <td>
                      Write access (and ability to perform actions to modify the
                      object)
                    </td>
                    <td>
                      <ul className={bem`@__inline-list`}>
                        <li>
                          <A>Periodical</A>
                        </li>
                        <li>
                          <A>Graph</A>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <A>AdminPermission</A>
                    </td>
                    <td>
                      <A>Person</A> and / or <A>Audience</A>
                    </td>
                    <td>-</td>
                    <td>
                      Admin access (including ability to perform actions to
                      modify the object, delete the object and manage the
                      contributors of the object)
                    </td>
                    <td>
                      <ul className={bem`@__inline-list`}>
                        <li>
                          <A>Periodical</A>
                        </li>
                        <li>
                          <A>Graph</A>
                        </li>
                      </ul>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <A>CreateGraphPermission</A>
                    </td>
                    <td>
                      <A>Person</A> and / or <A>Audience</A>
                    </td>
                    <td>-</td>
                    <td>Permission to create graphs</td>
                    <td>
                      <ul className={bem`@__inline-list`}>
                        <li>
                          <A>Graph</A>
                        </li>
                      </ul>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <A>ViewIdentityPermission</A>
                    </td>
                    <td>
                      <A>Audience</A>
                    </td>
                    <td>
                      <ul className={bem`@__inline-list`}>
                        <li>
                          <code>user</code>
                        </li>
                        <li>
                          <code>author</code>
                        </li>
                        <li>
                          <code>editor</code>
                        </li>
                        <li>
                          <code>producer</code>
                        </li>
                        <li>
                          <code>reviewer</code>
                        </li>
                      </ul>
                    </td>
                    <td>
                      Allow to specify <em>who</em> (<A>grantee</A>) can view
                      identity of <em>whom</em> (<A>audienceScope</A>)
                    </td>
                    <td>
                      <ul className={bem`@__inline-list`}>
                        <li>
                          <A>Periodical</A>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Info className={bem`@__info-panel`}>
              <header className={bem`@__info-panel-header`}>
                Modeling peer review with <A>ViewIdentityPermission</A>
              </header>

              <p>
                The <A>ViewIdentityPermission</A> property expresses the common
                forms of peer review (and can be used to flexibly express less
                common ones).
              </p>
              <div className={bem`@__table`}>
                <table>
                  <caption>
                    <strong>Single blind peer review</strong> (audience in row
                    can view identity of audience in column)
                  </caption>
                  <thead>
                    <tr>
                      <th> </th>
                      <th>Author</th>
                      <th>Reviewer</th>
                      <th>Editor</th>
                      <th>Producer</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>Author</th>
                      <td>
                        <Iconoclass iconName="check" size="16px" />
                      </td>
                      <td>
                        <Iconoclass
                          iconName="none"
                          size="8px"
                          className="documentation__uncheck-icon"
                          round={true}
                        />
                      </td>
                      <td>
                        <Iconoclass iconName="check" size="16px" />
                      </td>
                      <td>
                        <Iconoclass iconName="check" size="16px" />
                      </td>
                    </tr>
                    <tr>
                      <th>Reviewer</th>
                      <td>
                        <Iconoclass iconName="check" size="16px" />
                      </td>
                      <td>
                        <Iconoclass
                          iconName="none"
                          size="8px"
                          className="documentation__uncheck-icon"
                          round={true}
                        />
                      </td>
                      <td>
                        <Iconoclass iconName="check" size="16px" />
                      </td>
                      <td>
                        <Iconoclass iconName="check" size="16px" />
                      </td>
                    </tr>
                    <tr>
                      <th>Editor</th>
                      <td>
                        <Iconoclass iconName="check" size="16px" />
                      </td>
                      <td>
                        <Iconoclass iconName="check" size="16px" />
                      </td>
                      <td>
                        <Iconoclass iconName="check" size="16px" />
                      </td>
                      <td>
                        <Iconoclass iconName="check" size="16px" />
                      </td>
                    </tr>
                    <tr>
                      <th>Producer</th>
                      <td>
                        <Iconoclass iconName="check" size="16px" />
                      </td>
                      <td>
                        <Iconoclass iconName="check" size="16px" />
                      </td>
                      <td>
                        <Iconoclass iconName="check" size="16px" />
                      </td>
                      <td>
                        <Iconoclass iconName="check" size="16px" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className={bem`@__table`}>
                <table>
                  <caption>
                    <strong>Double blind peer review</strong> (audience in row
                    can view identity of audience in column)
                  </caption>
                  <thead>
                    <tr>
                      <th> </th>
                      <th>Author</th>
                      <th>Reviewer</th>
                      <th>Editor</th>
                      <th>Producer</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>Author</th>
                      <td>
                        <Iconoclass iconName="check" size="16px" />
                      </td>
                      <td>
                        <Iconoclass
                          iconName="none"
                          size="8px"
                          className="documentation__uncheck-icon"
                          round={true}
                        />
                      </td>
                      <td>
                        <Iconoclass iconName="check" size="16px" />
                      </td>
                      <td>
                        <Iconoclass iconName="check" size="16px" />
                      </td>
                    </tr>
                    <tr>
                      <th>Reviewer</th>
                      <td>
                        <Iconoclass
                          iconName="none"
                          size="8px"
                          className="documentation__uncheck-icon"
                          round={true}
                        />
                      </td>
                      <td>
                        <Iconoclass
                          iconName="none"
                          size="8px"
                          className="documentation__uncheck-icon"
                          round={true}
                        />
                      </td>
                      <td>
                        <Iconoclass iconName="check" size="16px" />
                      </td>
                      <td>
                        <Iconoclass iconName="check" size="16px" />
                      </td>
                    </tr>
                    <tr>
                      <th>Editor</th>
                      <td>
                        <Iconoclass iconName="check" size="16px" />
                      </td>
                      <td>
                        <Iconoclass iconName="check" size="16px" />
                      </td>
                      <td>
                        <Iconoclass iconName="check" size="16px" />
                      </td>
                      <td>
                        <Iconoclass iconName="check" size="16px" />
                      </td>
                    </tr>
                    <tr>
                      <th>Producer</th>
                      <td>
                        <Iconoclass iconName="check" size="16px" />
                      </td>
                      <td>
                        <Iconoclass iconName="check" size="16px" />
                      </td>
                      <td>
                        <Iconoclass iconName="check" size="16px" />
                      </td>
                      <td>
                        <Iconoclass iconName="check" size="16px" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className={bem`@__table`}>
                <table>
                  <caption>
                    <strong>Triple blind peer review</strong> (audience in row
                    can view identity of audience in column)
                  </caption>
                  <thead>
                    <tr>
                      <th> </th>
                      <th>Author</th>
                      <th>Reviewer</th>
                      <th>Editor</th>
                      <th>Producer</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>Author</th>
                      <td>
                        <Iconoclass iconName="check" size="16px" />
                      </td>
                      <td>
                        <Iconoclass
                          iconName="none"
                          size="8px"
                          className="documentation__uncheck-icon"
                          round={true}
                        />
                      </td>
                      <td>
                        <Iconoclass
                          iconName="none"
                          size="8px"
                          className="documentation__uncheck-icon"
                          round={true}
                        />
                      </td>
                      <td>
                        <Iconoclass iconName="check" size="16px" />
                      </td>
                    </tr>
                    <tr>
                      <th>Reviewer</th>
                      <td>
                        <Iconoclass
                          iconName="none"
                          size="8px"
                          className="documentation__uncheck-icon"
                          round={true}
                        />
                      </td>
                      <td>
                        <Iconoclass
                          iconName="none"
                          size="8px"
                          className="documentation__uncheck-icon"
                          round={true}
                        />
                      </td>
                      <td>
                        <Iconoclass
                          iconName="none"
                          size="8px"
                          className="documentation__uncheck-icon"
                          round={true}
                        />
                      </td>
                      <td>
                        <Iconoclass iconName="check" size="16px" />
                      </td>
                    </tr>
                    <tr>
                      <th>Editor</th>
                      <td>
                        <Iconoclass
                          iconName="none"
                          size="8px"
                          className="documentation__uncheck-icon"
                          round={true}
                        />
                      </td>
                      <td>
                        <Iconoclass
                          iconName="none"
                          size="8px"
                          className="documentation__uncheck-icon"
                          round={true}
                        />
                      </td>
                      <td>
                        <Iconoclass iconName="check" size="16px" />
                      </td>
                      <td>
                        <Iconoclass iconName="check" size="16px" />
                      </td>
                    </tr>
                    <tr>
                      <th>Producer</th>
                      <td>
                        <Iconoclass
                          iconName="none"
                          size="8px"
                          className="documentation__uncheck-icon"
                          round={true}
                        />
                      </td>
                      <td>
                        <Iconoclass
                          iconName="none"
                          size="8px"
                          className="documentation__uncheck-icon"
                          round={true}
                        />
                      </td>
                      <td>
                        <Iconoclass iconName="check" size="16px" />
                      </td>
                      <td>
                        <Iconoclass iconName="check" size="16px" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className={bem`@__table`}>
                <table>
                  <caption>
                    <strong>Open peer review</strong> (audience in row can view
                    identity of audience in column)
                  </caption>
                  <thead>
                    <tr>
                      <th> </th>
                      <th>Author</th>
                      <th>Reviewer</th>
                      <th>Editor</th>
                      <th>Producer</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>Author</th>
                      <td>
                        <Iconoclass iconName="check" size="16px" />
                      </td>
                      <td>
                        <Iconoclass iconName="check" size="16px" />
                      </td>
                      <td>
                        <Iconoclass iconName="check" size="16px" />
                      </td>
                      <td>
                        <Iconoclass iconName="check" size="16px" />
                      </td>
                    </tr>
                    <tr>
                      <th>Reviewer</th>
                      <td>
                        <Iconoclass iconName="check" size="16px" />
                      </td>
                      <td>
                        <Iconoclass iconName="check" size="16px" />
                      </td>
                      <td>
                        <Iconoclass iconName="check" size="16px" />
                      </td>
                      <td>
                        <Iconoclass iconName="check" size="16px" />
                      </td>
                    </tr>
                    <tr>
                      <th>Editor</th>
                      <td>
                        <Iconoclass iconName="check" size="16px" />
                      </td>
                      <td>
                        <Iconoclass iconName="check" size="16px" />
                      </td>
                      <td>
                        <Iconoclass iconName="check" size="16px" />
                      </td>
                      <td>
                        <Iconoclass iconName="check" size="16px" />
                      </td>
                    </tr>
                    <tr>
                      <th>Producer</th>
                      <td>
                        <Iconoclass iconName="check" size="16px" />
                      </td>
                      <td>
                        <Iconoclass iconName="check" size="16px" />
                      </td>
                      <td>
                        <Iconoclass iconName="check" size="16px" />
                      </td>
                      <td>
                        <Iconoclass iconName="check" size="16px" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Info>
          </li>

          <li className={bem`@__list-step @--upper-alpha`}>
            <p>
              The <code>administrator</code> <A>roleName</A> property of{' '}
              <A>Organization</A> members
            </p>

            <JsonldExample
              data={{
                '@type': 'Organization',
                member: {
                  '@type': 'Role',
                  roleName: 'administrator',
                  startDate: new Date().toISOString(),
                  member: 'user:peter'
                }
              }}
            >
              An <A>Organization</A> administrator
            </JsonldExample>
          </li>

          <li className={bem`@__list-step @--upper-alpha`}>
            <p>
              The <A>agent</A>, <A>participant</A>, and <A>recipient</A>{' '}
              properties of actions.
            </p>
            <p>In particular:</p>

            <ul className={bem`@__condition-list`}>
              <li>
                <p className={bem`@__condition-list-condition`}>
                  <Iconoclass
                    tagName="span"
                    iconName="info"
                    className={bem`@__condition-list-icon`}
                    size="18px"
                  />
                  An action can be performed if:
                </p>
                <ul>
                  <li>
                    <Iconoclass
                      iconName="arrowNext"
                      className={bem`@__condition-list-arrow`}
                      size="18px"
                    />
                    <p>
                      The user performing the action corresponds to the action{' '}
                      <A>agent</A> or, when the action agent identity is not
                      defined, the user has a role (specified in the action’s{' '}
                      <A>object</A> or scope) matching the <code>@id</code>,{' '}
                      <A>roleName</A> and <A>name</A> (if any) of the action’s{' '}
                      <A>agent</A>.
                    </p>

                    <JsonldExample
                      data={{
                        '@type': 'AssessAction',
                        agent: {
                          '@type': 'ContributorRole',
                          roleName: 'editor',
                          name: 'editor-in-chief'
                        }
                      }}
                    >
                      Example of an action that can only be performed by an
                      “editor-in-chief”.
                    </JsonldExample>
                  </li>

                  <li>
                    <Iconoclass
                      iconName="arrowNext"
                      className={bem`@__condition-list-arrow`}
                      size="18px"
                    />
                    The role matching the action <A>agent</A> is granted with a{' '}
                    <A>WritePermission</A> or <A>AdminPermission</A> for the{' '}
                    <A>object</A> or scope of the action.
                  </li>
                </ul>
              </li>

              <li>
                <p className={bem`@__condition-list-condition`}>
                  <Iconoclass
                    tagName="span"
                    iconName="info"
                    className={bem`@__condition-list-icon`}
                    size="18px"
                  />
                  An action can be viewed if:
                </p>
                <ul>
                  <li>
                    <Iconoclass
                      iconName="arrowNext"
                      className={bem`@__condition-list-arrow`}
                      size="18px"
                    />
                    The user requesting the action corresponds to the action
                    agent or, the action <A>participant</A> or <A>recipient</A>{' '}
                    properties (possibly including audiences) match a user role
                    (defined in the action’s <A>object</A> or scope).
                  </li>
                  <li>
                    <Iconoclass
                      iconName="arrowNext"
                      className={bem`@__condition-list-arrow`}
                      size="18px"
                    />
                    The role (or audience) matching the action <A>agent</A> is
                    granted with a <A>ReadPermission</A>, <A>WritePermission</A>{' '}
                    or <A>AdminPermission</A>.
                  </li>
                </ul>

                <p>
                  Note that the <A>participant</A> and <A>recipient</A>{' '}
                  properties of the action can list time sensitive roles or
                  audiences allowing to change the audience of the action
                  dynamically over time.
                </p>

                <JsonldExample
                  id="time-sensitive-audience-role-example-acl"
                  data={{
                    '@id': 'action:actionId',
                    '@type': 'Action',
                    participant: [
                      {
                        '@type': 'Audience',
                        audienceType: 'editor'
                      },
                      {
                        '@type': 'AudienceRole',
                        startDate: '2017-02-01T23:00:00.247Z',
                        participant: {
                          '@type': 'Audience',
                          audienceType: 'reviewer'
                        }
                      }
                    ]
                  }}
                >
                  Example of an action with time sensitive audience. Here the
                  action is visible to the editors and to the reviewer but only
                  starting from the date 2017-02-01.
                </JsonldExample>
              </li>
            </ul>
          </li>

          <li className={bem`@__list-step @--upper-alpha`}>
            <p>
              The <A>expectsAcceptanceOf</A> property of actions to express the
              required acceptance of an <A>Offer</A> (typically monetary)
            </p>

            <JsonldExample
              data={{
                '@context': 'https://sci.pe',
                '@id': 'scipe:scholarlyArticleId',
                '@type': 'ScholarlyArticle',
                potentialAction: {
                  '@type': 'ConsumeAction',
                  expectsAcceptanceOf: {
                    '@type': 'Offer',
                    potentialAction: {
                      '@type': 'BuyAction',
                      price: '25USD'
                    }
                  }
                }
              }}
            >
              Example of a paywall for a <A>ScholarlyArticle</A>.
            </JsonldExample>
          </li>

          <li className={bem`@__list-step @--upper-alpha`}>
            <p>
              The <A>requiresCompletionOf</A> property of actions to indicate
              other actions that must be completed before the completion of the
              current action.
            </p>

            <JsonldExample
              data={{
                '@type': 'AssessAction',
                actionStatus: 'PotentialActionStatus',
                requiresCompletionOf: {
                  '@type': 'ReviewAction',
                  actionStatus: 'ActiveActionStatus'
                }
              }}
            >
              The <A>requiresCompletionOf</A> property indicates that the{' '}
              <A>AssessAction</A> cannot be completed until the{' '}
              <A>ReviewAction</A> is itself completed.
            </JsonldExample>
          </li>
        </ul>
      </section>
    );
  }
}
