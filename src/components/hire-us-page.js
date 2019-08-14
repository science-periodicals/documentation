import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, PaperButtonLink } from '@scipe/ui';
import Iconoclass from '@scipe/iconoclass';

export default class HireUsPage extends React.Component {
  render() {
    return (
      <div className="hire-us-page">
        <Helmet>
          <title>Work with us • sci.pe</title>
          <meta
            name="description"
            content="Our mission is to help a wide range of journals, services and organizations to move scholarly publishing forward"
          />
          <meta
            name="keywords"
            content="scipe,open access,open science,scholarly publishing,platform,science,journals,publishing platform,consulting,custom development,hire"
          />
        </Helmet>
        <h1 className="hire-us-page__title">Work with us</h1>
        <header className="hire-us-page__header">
          <p>
            Our mission is to help a wide range of journals, services and
            organizations to move scholarly publishing forward.
          </p>

          <p>
            We are adept at integrating with new teams, company cultures and
            business contexts. We can complement any part of your team or take
            over entire aspects of the creative and/or development process.
          </p>
        </header>
        <Card className="hire-us-page__card">
          <div className="hire-us-page__contents">
            <section className="hire-us-page__section hire-us-page__section--centered">
              <div className="hire-us-page__sub-section-header">
                <Iconoclass iconName="hypermedia" round={true} size="32px" />
                <h2 className="hire-us-page__sub-title">Process</h2>
              </div>
              <p>
                We believe firmly that scholarly publishing products should be{' '}
                <a href="https://vimeo.com/36579366">designed on principles</a>.
              </p>
              <p>
                Our process starts by working with you to understand{' '}
                <em>your</em> principles.
              </p>
              <p>
                We then follow a user-centered design process to deliver well
                documented and tested results.
              </p>
            </section>

            <section className="hire-us-page__section hire-us-page__section--centered">
              <div className="hire-us-page__sub-section-header">
                <Iconoclass iconName="supervisor" round={true} size="32px" />
                <h2 className="hire-us-page__sub-title">About Us</h2>
              </div>
              <p>
                We are the team who built the{' '}
                <a href="https://sci.pe">sci.pe</a> scholarly publishing
                platform.
                <br />
                We are thoughtful, thorough, and deliver solid, meaningful
                results.
              </p>
              <p></p>

              <ul className="hire-us-page__people-list">
                <li className="hire-us-page__people-list__item">
                  Sébastien Ballesteros
                  <br />
                  <span className="hire-us-page__people-list__item__spec">
                    Full stack dev, architecture, markup best practices
                  </span>
                  <br />
                  <PaperButtonLink
                    href="https://sballesteros.github.io/resume/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    resume
                  </PaperButtonLink>
                </li>

                <li className="hire-us-page__people-list__item">
                  Erik Wysocan
                  <br />
                  <span className="hire-us-page__people-list__item__spec">
                    UI/UX, front-end dev and creative direction
                  </span>
                  <br />
                  <PaperButtonLink
                    href="https://new-cairo-sky.github.io/resume/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    resume
                  </PaperButtonLink>
                </li>

                <li className="hire-us-page__people-list__item">
                  Tiffany Bogich
                  <br />
                  <span className="hire-us-page__people-list__item__spec">
                    Client Relations
                  </span>
                  <br />
                </li>
              </ul>
            </section>

            <section className="hire-us-page__section hire-us-page__section--centered">
              <div className="hire-us-page__sub-section-header">
                <Iconoclass iconName="email" round={true} size="32px" />
                <h2 className="hire-us-page__sub-title">Contact Us</h2>
              </div>
              <p>We look forward to discussing your needs.</p>

              <PaperButtonLink raised={true} href="mailto:contact@sci.pe">
                Get in touch
              </PaperButtonLink>
            </section>
          </div>
        </Card>
      </div>
    );
  }
}
