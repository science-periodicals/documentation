import React from 'react';
import PropTypes from 'prop-types';
import { BemTags, ViewIdentityPermissionEditor } from '@scipe/ui';

export default class BlindingExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      viewIdentityPermission: [
        {
          '@type': 'DigitalDocumentPermission',
          permissionType: 'ViewIdentityPermission',
          grantee: [
            {
              '@type': 'Audience',
              audienceType: 'editor'
            },
            {
              '@type': 'Audience',
              audienceType: 'producer'
            }
          ],
          permissionScope: [
            {
              '@type': 'Audience',
              audienceType: 'editor'
            },
            {
              '@type': 'Audience',
              audienceType: 'author'
            },
            {
              '@type': 'Audience',
              audienceType: 'reviewer'
            },
            {
              '@type': 'Audience',
              audienceType: 'producer'
            }
          ]
        },
        {
          '@type': 'DigitalDocumentPermission',
          permissionType: 'ViewIdentityPermission',
          grantee: [
            {
              '@type': 'Audience',
              audienceType: 'author'
            },
            {
              '@type': 'Audience',
              audienceType: 'reviewer'
            }
          ],
          permissionScope: [
            {
              '@type': 'Audience',
              audienceType: 'editor'
            },
            {
              '@type': 'Audience',
              audienceType: 'author'
            },
            {
              '@type': 'Audience',
              audienceType: 'producer'
            }
          ]
        }
      ]
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(viewIdentityPermission) {
    this.setState({ viewIdentityPermission });
  }

  render() {
    const bem = new BemTags('@sa', '@documentation');
    const { children } = this.props;
    const { viewIdentityPermission } = this.state;

    return (
      <figure className={bem`blinding-example`}>
        <ViewIdentityPermissionEditor
          viewIdentityPermission={viewIdentityPermission}
          defaultExpanded={true}
          onChange={this.handleChange}
        />

        {children && (
          <figcaption className={bem`__caption @__default-ui-type--caption`}>
            {children}
          </figcaption>
        )}
      </figure>
    );
  }
}

BlindingExample.propTypes = {
  children: PropTypes.any
};
