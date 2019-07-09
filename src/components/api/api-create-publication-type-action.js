import React, { Fragment } from 'react';
import { BemTags, TextLogo, SchemaLink as A } from '@scipe/ui';
import Iconoclass from '@scipe/iconoclass';
import JsonldExample from '../jsonld-example';
import ActionSpec from '../action-spec';
import ObjectSpec from '../object-spec';
import ActionExample from '../action-example';
import Info from '../info';

export default class ApiCreatePublicationTypeAction extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section
        id="create-publication-type-action"
        className={bem`@__sub-section`}
      >
        <h3 className={bem`@__default-ui-type--subhead-1 @__icon-title`}>
          CreatePublicationTypeAction{' '}
          <Iconoclass iconName="star" round={true} />
        </h3>

        <p>
          Create publication type actions (<A>CreatePublicationTypeAction</A>)
          are used to create publication types (<A>PublicationType</A>).
        </p>

        <p>
          Publication types are used as <A>additionalType</A> for graphs (see{' '}
          <a href="#create-graph-action">CreateGraphAction</a>) and define
          (through the <A>objectSpecification</A> property) the validation logic
          of graphs using schema.org <code>-input</code> construct and the{' '}
          <A>PropertyValueSpecification</A> class.
        </p>

        <ActionExample
          action={{
            '@id': '_:publicationTypeId',
            '@type': 'PublicationType',
            actionStatus: 'CompletedActionStatus',
            agent: 'user:userId',
            object: 'journal:journalId',
            result: {
              '@type': 'PublicationType',
              name: 'research article',
              objectSpecification: [
                {
                  '@type': 'ScholarlyArticle',
                  'description-input': {
                    '@type': 'PropertyValueSpecification',
                    valueRequired: true,
                    valueMaxlength: 100
                  },
                  encoding: {
                    '@type': 'DocumentObject',
                    'name-input': {
                      '@type': 'PropertyValueSpecification',
                      valueRequired: true
                    }
                  },
                  hasPart: [
                    {
                      '@type': 'WebPageElement',
                      // PublicationElementType are defined inline.
                      additionalType: {
                        '@type': 'PublicationElementType',
                        name: 'Results',
                        description:
                          'The report of the specific findings of the investigation.',
                        sameAs: 'WPResults'
                      },
                      'text-input': {
                        '@type': 'PropertyValueSpecification',
                        valueRequiredOn: 'OnPublicationAccepted',
                        valueMaxlength: 100
                      }
                    }
                  ]
                }
              ]
            }
          }}
        />

        <ActionSpec
          type="CreatePublicationTypeAction"
          scope={'Periodical'}
          spec={{
            agent: [
              {
                '@type': 'Person',
                value: 'userId'
              },
              {
                '@type': 'ContributorRole',
                value: 'scopeRoleId'
              }
            ],
            actionStatus: {
              '@type': 'ActionStatusType',
              value: 'CompletedActionStatus'
            },
            object: {
              '@type': 'Periodical',
              value: 'periodicalId'
            },
            result: {
              '@type': 'PublicationType',
              value: (
                <ObjectSpec
                  others={true}
                  spec={{
                    '@type': 'PublicationType',
                    objectSpecification: (
                      <Fragment>
                        see the <a href="#specifying-graphs">info box below</a>
                      </Fragment>
                    )
                  }}
                />
              )
            }
          }}
        />

        <Info id="specifying-graphs">
          <header>
            Defining the <A>objectSpecification</A> property
          </header>

          <p>
            The <A>objectSpecification</A> property of publication types is used
            to define the validation logic of graphs and automatically generate
            author guidelines.
          </p>

          <p>
            The <A>objectSpecification</A> property lists the different
            subclasses of <A>CreativeWork</A> that the <A>Graph</A> supports and
            provides relevant validation logic and type definitions for each of
            them.
          </p>

          <JsonldExample
            root={false}
            data={{
              '@type': 'PublicationType',
              objectSpecification: [
                {
                  '@type': 'ScholarlyArticle',
                  hasPart: [
                    {
                      '@type': 'Dataset'
                    },
                    {
                      '@type': 'Image'
                    }
                  ]
                }
              ]
            }}
          >
            Here the <A>objectSpecification</A> property specifies that the{' '}
            <A>Graph</A> can contain a <A>ScholarlyArticle</A> that itsef can
            contain datasets (<A>Dataset</A>) and figures (<A>Image</A>).
          </JsonldExample>

          <section>
            <header>Properties specification</header>
            <p>
              Constraint on input properties can be set using schema.org{' '}
              <code>-input</code> construct (see{' '}
              <a href="http://schema.org/docs/actions.html">
                schema.org input constraints documentation
              </a>
              ) and the <A>PropertyValueSpecification</A> class
            </p>

            <JsonldExample
              root={false}
              data={{
                '@type': 'ScholarlyArticle',
                'description-input': {
                  '@type': 'PropertyValueSpecification',
                  valueRequired: true,
                  valueMaxlength: 100
                }
              }}
            >
              Here the <code>description-input</code> property specifies that
              the <A>ScholarlyArticle</A> must have a <A>description</A>{' '}
              property of a maximum of 100 characters
            </JsonldExample>
          </section>

          <section>
            <header>Type definition</header>

            <p>
              Custom types can be created by specifying a{' '}
              <A>PublicationElementType</A> to the <A>additionalType</A>{' '}
              property.
            </p>

            <JsonldExample
              root={false}
              data={{
                '@type': 'ScholarlyArticle',
                hasPart: [
                  {
                    '@type': 'WebPageElement',
                    additionalType: {
                      '@type': 'PublicationElementType',
                      name: 'Results',
                      description:
                        'The report of the specific findings of the investigation.',
                      sameAs: 'WPResults'
                    }
                  }
                ]
              }}
            >
              Here a type is defined to specify the “Results” section of the{' '}
              <A>ScholarlyArticle</A>
            </JsonldExample>

            <p className={bem`@__warning`}>
              When possible, the <A>sameAs</A> property should be used to map
              custom types to the canonical types defined in the{' '}
              <a href="http://ns.sci.pe/">
                <TextLogo /> ontology
              </a>
            </p>
          </section>
        </Info>
      </section>
    );
  }
}
