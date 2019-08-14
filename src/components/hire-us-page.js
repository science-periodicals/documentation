import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, PaperButtonLink } from '@scipe/ui';

export default class HireUsPage extends React.Component {
  render() {
    return (
      <Card>
        <Helmet>
          <title>Work with us • sci.pe</title>
        </Helmet>

        <header>
          <h1>Work with us</h1>
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

        <section>
          <h2>Process</h2>

          <p>
            We believe firmly that scholarly publishing products should be{' '}
            <a href="https://vimeo.com/36579366">designed on principles</a>.
          </p>
          <p>
            Our process starts by working with you to understand <em>your</em>{' '}
            principles.
          </p>
          <p>
            We then follow a user-centered design process to deliver well
            documented and tested results.
          </p>
        </section>

        <section>
          <h2>About us</h2>

          <p>
            We are thoughtful, thorough, and deliver solid, meaningful results.
          </p>

          <ul>
            <li>
              Erik Wysocan
              <PaperButtonLink href="https://new-cairo-sky.github.io/resume/">
                resume
              </PaperButtonLink>
            </li>

            <li>
              Sébastien Ballesteros
              <PaperButtonLink href="https://sballesteros.github.io/resume/">
                resume
              </PaperButtonLink>
            </li>
          </ul>
        </section>

        <section>
          <h2>Contact us</h2>
          <p>We look forward to discussing your needs.</p>

          <PaperButtonLink raised={true}>Get in touch</PaperButtonLink>
        </section>
      </Card>
    );
  }
}
