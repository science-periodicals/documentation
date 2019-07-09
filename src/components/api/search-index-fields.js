import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { BemTags, SchemaLink as A } from '@scipe/ui';
import { arrayify } from '@scipe/jsonld';
import Iconoclass from '@scipe/iconoclass';

function prefix(prefix, list = []) {
  return arrayify(list).map(item => {
    const key = item.key.replace('@', '');
    const prefixedKey = prefix + key.charAt(0).toUpperCase() + key.slice(1);
    return Object.assign({}, item, {
      key: prefixedKey,
      path: arrayify(item.path).concat(prefix),
      unprefixedKey: item.key
    });
  });
}

function facet(list, props = []) {
  props = new Set(arrayify(props));
  return list.map(entry => {
    return Object.assign({}, entry, { facet: props.has(entry.key) });
  });
}

const BOOLEAN = 'Boolean';
const URI = 'URI';
const USER_ID = (
  <Fragment>
    user <code>@id</code>
  </Fragment>
);
const EMAIL = 'email';
const TEXT = 'text';
const DATE =
  'number (milliseconds elapsed between 1 January 1970 00:00:00 UTC and the given date)';
const NUMBER = 'number';

const metadata = [
  { key: '@id', value: URI, facet: false },
  { key: '@type', value: URI, facet: false },
  { key: 'url', value: URI, facet: false },
  { key: 'mainEntityOfPage', value: URI, facet: false },
  { key: 'sameAs', value: URI, facet: false },
  { key: 'identifier', value: URI, facet: false },
  { key: 'name', value: TEXT, facet: false },
  { key: 'description', value: TEXT, facet: false }
];

const audience = [
  { key: '@id', value: URI, facet: false },
  { key: '@type', value: URI, facet: false },
  { key: 'name', value: TEXT, facet: false },
  { key: 'audienceType', value: TEXT, facet: URI },
  { key: 'audienceScope', value: TEXT, facet: URI }
];

const address = [
  { key: 'addressCountry', value: TEXT, facet: false },
  { key: 'addressLocality', value: TEXT, facet: false },
  { key: 'addressRegion', value: TEXT, facet: false }
];

const personOrOrganization = [
  ...metadata,
  {
    key: 'givenName',
    value: TEXT,
    facet: false
  },
  { key: 'familyName', value: TEXT, facet: false },
  { key: 'additionalName', value: TEXT, facet: false }
];

const affiliation = prefix('affiliation', metadata);

const permissions = [
  {
    key: 'readPermission',
    value: USER_ID,
    facet: false
  },
  {
    key: 'writePermission',
    value: USER_ID,
    facet: false
  },
  {
    key: 'adminPermission',
    value: USER_ID,
    facet: false
  }
];

const creativeWork = [
  ...facet(metadata, ['@type']),

  {
    key: 'alternateName',
    value: TEXT,
    facet: false
  },

  {
    key: 'caption',
    value: TEXT,
    facet: false
  },

  {
    key: 'transcript',
    value: TEXT,
    facet: false
  },

  {
    key: 'keywords',
    value: TEXT,
    facet: false
  },

  {
    key: 'about',
    value: facet(metadata, ['@id'])
  },

  {
    key: 'detailedDescription',
    value: [
      ...metadata,
      {
        key: 'text',
        value: TEXT,
        facet: false
      }
    ]
  },

  {
    key: '<contributor>',
    get description() {
      return (
        <Fragment>
          Where <code>{this.key}</code> is one of{' '}
          <ul className="sa__inline-list">
            {[
              'creator',
              'author',
              'editor',
              'producer',
              'reviewer',
              'contributor'
            ].map(p => (
              <li key={p}>
                <A>{p}</A>
              </li>
            ))}
          </ul>
        </Fragment>
      );
    },
    value: [...facet(personOrOrganization, ['@id']), ...affiliation]
  },

  {
    key: 'license',
    value: facet(metadata, ['@id'])
  },

  {
    key: 'copyrightHolder',
    value: personOrOrganization
  },

  {
    key: 'copyrightYear',
    value: NUMBER,
    facet: false
  },

  {
    key: 'sponsor',
    get description() {
      return (
        <Fragment>
          <code>{this.key}</code> accounts for both <A>sponsor</A> and{' '}
          <A>funder</A>
        </Fragment>
      );
    },
    value: [...facet(metadata, ['@id']), ...address]
  }
];

const citation = {
  key: 'citation',
  value: [
    {
      key: '@id',
      value: URI,
      facet: false
    },
    {
      key: 'sameAs',
      value: URI,
      facet: false
    },
    {
      key: 'url',
      value: URI,
      facet: false
    },
    {
      key: 'identifier',
      value: URI,
      facet: false
    },
    {
      key: '@type',
      value: URI,
      facet: false
    },
    {
      key: 'doi',
      value: URI,
      facet: false
    },
    {
      key: 'issn',
      value: URI,
      facet: false
    },
    {
      key: 'isbn',
      value: URI,
      facet: false
    },
    {
      key: 'isPartOfId',
      value: URI,
      facet: false
    },
    {
      key: 'isBasedOn',
      value: URI,
      facet: false
    }
  ]
};

const action = [
  ...facet(metadata, ['@type']),

  {
    key: 'actionStatus',
    value: <A>ActionStatusType</A>,
    facet: true
  },

  {
    key: 'startTime',
    value: DATE,
    facet: true
  },

  {
    key: 'scheduledTime',
    value: DATE,
    facet: true
  },

  {
    key: 'endTime',
    value: DATE,
    facet: true
  },

  {
    key: 'instanceOf',
    value: URI,
    facet: false
  },

  {
    key: 'instrumentOf',
    value: URI,
    facet: false
  },

  {
    key: 'resultOf',
    value: URI,
    facet: false
  },

  {
    key: 'objectId',
    value: URI,
    facet: false
  },

  {
    key: 'scopeId',
    value: URI,
    facet: false
  },

  {
    key: 'resultId',
    value: URI,
    facet: false
  },

  {
    key: 'resultReviewId',
    value: URI,
    facet: false
  },

  {
    key: 'resultCommentId',
    value: URI,
    facet: false
  },

  {
    key: 'instrumentId',
    value: URI,
    facet: false
  },

  {
    key: '<agent>',
    get description() {
      return (
        <Fragment>
          Where <code>{this.key}</code> is one of{' '}
          <ul className="sa__inline-list">
            {['agent', 'participant', 'recipient'].map(p => (
              <li key={p}>
                <A>{p}</A>
              </li>
            ))}
          </ul>
        </Fragment>
      );
    },
    value: [
      {
        key: 'roleId',
        value: URI,
        facet: false
      },
      {
        key: 'roleName',
        value: TEXT,
        facet: false
      },
      {
        key: 'roleRoleName',
        value: TEXT,
        facet: false
      },
      {
        key: '@id',
        value: URI,
        facet: false
      },
      {
        key: 'email',
        value: EMAIL,
        facet: false
      }
    ]
  },

  // We index the result / question by @type instead of by properties
  {
    key: 'question',
    description: (
      <Fragment>
        Any <A>Question</A> present in the <A>Action</A>
      </Fragment>
    ),
    value: [
      {
        key: '@id',
        value: URI,
        facet: false
      },
      {
        key: '@type',
        value: URI,
        facet: false
      },
      {
        key: 'text',
        value: TEXT,
        facet: false
      }
    ]
  },

  {
    key: 'answer',
    description: (
      <Fragment>
        Any <A>Answer</A> present in the <A>Action</A>
      </Fragment>
    ),
    value: [
      {
        key: '@id',
        value: URI,
        facet: false
      },
      {
        key: '@type',
        value: URI,
        facet: false
      },
      {
        key: 'text',
        value: TEXT,
        facet: false
      },
      {
        key: 'parentItem',
        value: URI,
        facet: false
      }
    ]
  },

  {
    key: 'review',
    description: (
      <Fragment>
        Any <A>Review</A> present in the <A>Action</A>
      </Fragment>
    ),
    value: [
      {
        key: '@id',
        value: URI,
        facet: false
      },
      {
        key: '@type',
        value: URI,
        facet: false
      },
      {
        key: 'text',
        value: TEXT,
        facet: false
      },
      {
        key: 'body',
        value: TEXT,
        facet: false
      },
      {
        key: 'ratingValue',
        value: NUMBER,
        facet: true
      }
    ]
  },

  {
    key: 'comment',
    description: (
      <Fragment>
        Any <A>Comment</A> present in the <A>Action</A>
      </Fragment>
    ),
    value: [
      {
        key: '@id',
        value: URI,
        facet: false
      },
      {
        key: '@type',
        value: URI,
        facet: false
      },
      {
        key: 'text',
        value: TEXT,
        facet: false
      },
      {
        key: 'parentItem',
        value: URI,
        facet: false
      }
    ]
  }
];

// TODO contact point
const contactPoint = [
  {
    key: '@id',
    value: URI,
    facet: false
  },
  {
    key: '@type',
    value: URI,
    facet: false
  },
  {
    key: 'contactType',
    value: TEXT,
    facet: false
  },
  {
    key: 'email',
    value: EMAIL,
    facet: false
  }
];

const user = [
  ...metadata,
  ...affiliation,
  {
    key: 'dateJoined',
    value: DATE
  },
  {
    key: 'contactPoint',
    value: contactPoint
  }
];

const graph = [
  ...metadata,

  {
    key: 'additionalType', // publicationType
    value: URI,
    facet: true
  },

  {
    key: 'version',
    value: `${URI} (null if no version exists)`,
    facet: false
  },

  {
    key: 'scopeId',
    value: `${URI} ((the @id without the ?version query string parameter))`,
    facet: false
  },

  // used to make up the human readable @id
  {
    key: 'keywords',
    value: TEXT,
    facet: false
  },

  {
    key: 'journalId',
    value: URI,
    facet: true
  },

  {
    key: 'issueId',
    value: URI,
    facet: true
  },

  {
    key: 'workflowId',
    value: URI,
    facet: true
  },

  {
    key: 'isPartOfId',
    value: URI,
    facet: true
  },

  {
    key: 'status',
    value: (
      <Fragment>
        One of <code>rejected</code>, <code>published</code>,{' '}
        <code>active</code>, <code>cancelled</code>
      </Fragment>
    ),
    facet: true
  },

  {
    key: 'availability',
    value: (
      <Fragment>
        One of <code>public</code>, <code>private</code>
      </Fragment>
    ),
    facet: true
  },

  {
    key: 'dateCreated',
    value: DATE,
    facet: true
  },

  {
    key: 'dateModified',
    value: DATE,
    facet: true
  },

  // for project overdue
  {
    key: 'dateScheduled',
    value: DATE,
    facet: true
  },

  {
    key: 'datePublished',
    value: DATE,
    facet: true
  },

  {
    key: 'dateRejected',
    value: DATE,
    facet: true
  },

  ...permissions,

  {
    key: '<contributor>',
    get description() {
      return (
        <Fragment>
          Where <code>{this.key}</code> is one of{' '}
          <ul className="sa__inline-list">
            {[
              'creator',
              'author',
              'editor',
              'producer',
              'reviewer',
              'contributor'
            ].map(p => (
              <li key={p}>
                <A>{p}</A>
              </li>
            ))}
          </ul>
        </Fragment>
      );
    },
    value: [{ key: '@id', value: URI, facet: true }]
  },

  {
    key: 'tag',
    value: [
      {
        key: '@id',
        value: URI,
        facet: true
      },
      {
        key: 'name',
        value: TEXT,
        facet: false
      }
    ]
  },

  {
    key: 'entity',
    description: (
      <Fragment>
        The graph <A>mainEntity</A> and its parts (<A>isPartOf</A>)
      </Fragment>
    ),
    value: creativeWork.concat(citation)
  },

  {
    key: '<status>ActionType',
    description: (
      <Fragment>
        <div>
          Where <code>{'<status>'}</code> is one of{' '}
          <ul className="sa__inline-list">
            {['completed', 'uncompleted'].map(status => (
              <li key={status}>
                <code>{status}</code>
              </li>
            ))}
          </ul>
        </div>
        <p>
          Note: all the potential actions of the graph (<em>
            irrespective of the graph version
          </em>) are indexed.
        </p>
      </Fragment>
    ),
    value: [
      {
        key: '@type',
        value: (
          <Fragment>
            URI (A type of <A>Action</A> e.g., <code>ReviewAction</code>)
          </Fragment>
        ),
        facet: true
      }
    ]
  }
];

const periodical = [
  ...metadata,
  { key: 'publisherId', value: URI, facet: true },
  { key: 'potentialWorkflow', value: URI },
  ...permissions,
  {
    key: 'availability',
    value: (
      <Fragment>
        One of <code>public</code>, <code>private</code>
      </Fragment>
    ),
    facet: true
  },
  {
    key: 'createGraphPermission',
    value: BOOLEAN,
    facet: false
  },
  {
    key: '<contributor>',
    get description() {
      return (
        <Fragment>
          Where <code>{this.key}</code> is one of{' '}
          <ul className="sa__inline-list">
            {[
              'creator',
              'author',
              'editor',
              'producer',
              'reviewer',
              'contributor'
            ].map(p => (
              <li key={p}>
                <A>{p}</A>
              </li>
            ))}
          </ul>
        </Fragment>
      );
    },
    value: [{ key: '@id', value: URI, facet: true }]
  }
];

const organization = [
  ...metadata,
  {
    key: 'foundingDate',
    value: DATE,
    facet: true
  },
  {
    key: 'adminPermission',
    value: USER_ID,
    facet: false
  }
];

const workflow = [
  ...metadata,
  {
    key: 'workflowSpecificationStatus',
    value: <A>WorkflowSpecificationStatusType</A>,
    facet: true
  },
  { key: 'isPotentialWorkflowOf', value: URI, facet: false }
];

const type = [
  ...metadata,
  {
    key: 'publicationTypeStatus',
    value: <A>PublicationTypeStatusType</A>,
    facet: true
  },
  { key: 'isPublicationTypeOf', value: URI, facet: false }
];

const service = [
  ...metadata,
  {
    key: 'serviceStatus',
    value: <A>ServiceStatusType</A>,
    facet: true
  },
  { key: 'serviceType', value: TEXT, facet: true },
  { key: 'provider', value: metadata },
  { key: 'audience', value: audience }
];

const event = [
  ...metadata,
  { key: 'startDate', value: DATE, facet: true },
  { key: 'endDate', value: DATE, facet: true },
  { key: 'workFeatured', value: creativeWork }
];

export default class SearchIndexFields extends React.Component {
  static propTypes = {
    index: PropTypes.oneOf([
      'action',
      'graph',
      'organization',
      'periodical',
      'event',
      'type',
      'user',
      'workflow',
      'service'
    ])
  };

  renderEntry(
    bem,
    { path, key, unprefixedKey, description, value, facet } = {}
  ) {
    return (
      <Fragment key={key}>
        {!!Array.isArray(value) && (
          <tr>
            <td colSpan={3}>
              <strong>
                {path ? `${arrayify(path).join(' - ')} - ` : ''}{' '}
                {unprefixedKey || key}
              </strong>
              {description ? <div>{description}</div> : null}
            </td>
          </tr>
        )}

        {Array.isArray(value) ? (
          prefix(key, value).map(entry => this.renderEntry(bem, entry))
        ) : (
          <tr>
            <td>
              <code>{key}</code>
            </td>
            <td>{value}</td>
            <td
              className={bem`@__checkbox ${
                facet ? '@--checked' : '@--unchecked'
              }`}
            >
              {facet ? (
                <Iconoclass iconName="check" />
              ) : (
                <Iconoclass iconName="none" round={true} size="8px" />
              )}
            </td>
          </tr>
        )}
      </Fragment>
    );
  }

  render() {
    const bem = new BemTags('@sa', '@documentation');
    const { index } = this.props;

    let source;
    switch (index) {
      case 'user':
        source = user;
        break;
      case 'graph':
        source = graph;
        break;
      case 'periodical':
        source = periodical;
        break;
      case 'organization':
        source = organization;
        break;
      case 'action':
        source = action;
        break;
      case 'type':
        source = type;
        break;
      case 'workflow':
        source = workflow;
        break;
      case 'event':
        source = event;
        break;
      case 'service':
        source = service;
        break;
      default:
        source = metadata;
        break;
    }

    return (
      <div className={bem`@__table`}>
        <table>
          <caption>
            Fields available for{' '}
            <a href="http://lucene.apache.org/core/4_3_0/queryparser/org/apache/lucene/queryparser/classic/package-summary.html#Overview">
              Lucene Query Parser Syntax
            </a>.
          </caption>
          <thead>
            <tr>
              <th>Field</th>
              <th>Type</th>
              <th>Facet</th>
            </tr>
          </thead>
          <tbody>{source.map(entry => this.renderEntry(bem, entry))}</tbody>
        </table>
      </div>
    );
  }
}
