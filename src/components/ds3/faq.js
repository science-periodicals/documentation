import React from 'react';

class FAQ extends React.Component {
  render() {
    return (
      <section id="faq" className="style-guide__group">
        <h2>FAQ</h2>
        <section id="faq-q1">
          <h3>
            How many style guides were reviewed before writing ‘DOCX Standard
            Scientific Style’ (
            <abbr title="DOCX Standard Scientific Style">DS3</abbr>)
          </h3>
          <p>
            In order to be as complete as possible, a searchable database of
            style guides (
            <a href="https://github.com/scienceai/style-guide-db">
              Style Guide DB
            </a>
            ) was developed before writing{' '}
            <abbr title="DOCX Standard Scientific Style">DS3</abbr>.
          </p>
        </section>

        <section id="faq-q2">
          <h3>
            Why does a DOCX file need to be structured by humans? Can‘t machines
            just do it?
          </h3>
          <p>
            State of the art methods for automatically detecting elements of
            scientific manuscripts such as titles, authors, abstracts, and dates
            are currently between 60% and 92% accurate (
            <a href="http://dl.acm.org/citation.cfm?id=2467753">
              Lipinski et al 2013
            </a>
            ). Human assistance is therefore needed to have access to accurate,
            reliable structured data.
          </p>
        </section>

        <section id="faq-q3">
          <h3>
            Can structuring a DOCX file result in better discoverability of the
            content?
          </h3>
          <p>
            Yes. By first structuring the DOCX file, it can then be converted
            into valid HTML containing rich{' '}
            <a href="http://schema.org">schema.org</a> markup. Publishing
            information on the web with structured, semantic markup understood
            by search engines (schema.org) has proven to increase click-through
            rates and discoverability by up to 52% (
            <a href="http://mashable.com/2014/05/16/full-new-york-times-innovation-report">
              New York Times
            </a>
            ).
          </p>
        </section>
      </section>
    );
  }
}

export default FAQ;
