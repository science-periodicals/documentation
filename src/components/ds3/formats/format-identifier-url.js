import React from 'react';

export default class FormatIdentifierUrl extends React.Component {
  render() {
    return (
      <aside id={FormatIdentifierUrl.ds3Id} className="format">
        <h5>Creating URLs from common identifiers</h5>
        <dl>
          <dt>
            <abbr title="Digital object identifier">DOI</abbr>
          </dt>
          <dd>
            <p>
              Prefix a <strong>DOI</strong> with <code>http://doi.org/</code> to
              create a URL.
            </p>
            <p className="example">
              <a
                href="http://doi.org/10.1145/99332.99351"
                title={`Janis, Christine M., Karalyn Buttrill, and Borja Figueirido. 2014. "Locomotion in extinct giant kangaroos: were sthenurines hop-less monsters?." PLoS ONE 9(10): e109888, figure 1.`}
              >
                http://doi.org/<span className="identifier">
                  10.1371/journal.pone.0109888
                </span>
              </a>
            </p>
          </dd>
          <dt>
            <abbr title="International Standard Book Number">ISBN</abbr>
          </dt>
          <dd>
            <p>
              Prefix an <strong>ISBN</strong> with
              <code>http://books.google.com/books?vid=ISBN</code> to create a
              URL.
            </p>
            <p className="example">
              <a
                href="http://books.google.com/books?vid=ISBN0615799817"
                title="Cantelmi, Jennifer. 2013. Arnold's Green Adventure."
              >
                http://books.google.com/books?vid=ISBN<span className="identifier">
                  3319169254
                </span>
              </a>
            </p>
          </dd>
          <dt>
            <abbr title="Library of Congress Control Number">LCCN</abbr>
          </dt>
          <dd>
            <p>
              Prefix a <strong>LCCN</strong> with{' '}
              <code>https://books.google.com/books?vid=LCCN</code> to create a
              URL.
            </p>
            <p className="example">
              <a
                href="https://books.google.com/books?vid=LCCN45036413"
                title="United States. Office of scientific research and development. Science, the endless frontier. A report to the President by Vannevar Bush, director of the Office of scientific research and development. July 1945. Washington, U.S. Govt. print. off., 1945."
              >
                https://books.google.com/books?vid=LCCN<span className="identifier">
                  45036413
                </span>
              </a>
            </p>
          </dd>
          <dt>
            <abbr title="PubMed ID">PMID</abbr>
          </dt>
          <dd>
            <p>
              Prefix a <strong>PMID</strong> with{' '}
              <code>http://www.ncbi.nlm.nih.gov/pubmed/</code> to create a URL.
            </p>
            <p className="example">
              <a
                title={`Svili\u010Di\u0107, Nik\u0161a. "Cyber anthropology or Anthropology in cyberspace." Collegium antropologicum 36, no. 1 (2012): 271-280."
                href="htetp://www.ncbi.nlm.nih.gov/pubmed/22816231`}
              >
                http://www.ncbi.nlm.nih.gov/pubmed/<span className="identifier">
                  22816231
                </span>
              </a>
            </p>
          </dd>
          <dt>Database Entry</dt>
          <dd>
            <p>
              Use the URL of the database (e.g., Genbank, UniProt,
              ProteomeXchange, MoMA Collection, etc...) pointing to the specific
              entry to be cited.
            </p>
            <p className="example">
              <a
                title="GenBank (Ideonella dechloratans cytochrome C class 1 precursor and molybdopterin-guanine dinucleotide biosynthesis genes, complete cds [accession number EU768872]; Accessed January 1, 2016), http://www.ncbi.nlm.nih.gov/genbank."
                href="http://www.ncbi.nlm.nih.gov/nuccore/EU768872"
              >
                http://www.ncbi.nlm.nih.gov/nuccore/<span className="identifier">
                  EU768872
                </span>
              </a>
            </p>
          </dd>
        </dl>
      </aside>
    );
  }
}

FormatIdentifierUrl.ds3Id = `ds3:${FormatIdentifierUrl.name}`;
