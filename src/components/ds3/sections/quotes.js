import React from 'react';
import Customize from '../../../hoc/customize';

class Quotes extends React.Component {
  render() {
    return (
      <section id={Quotes.ds3Id} className="style-guide__group">
        <h3>Quotes</h3>

        <section id="inline-quotes">
          <h5>Inline Quotes</h5>
          <figure>
            <figcaption>
              <p>
                Wrap <strong>inline quotes</strong> in quotation marks (<code className="token">
                  ""
                </code>) directly in the text flow.
              </p>
              <p className="example">
                <q>Everything is deeply intertwingled</q>
              </p>
            </figcaption>
            <img src="/images/quote.png" alt="inline quote example" />
          </figure>
        </section>

        <section id="block-quotes">
          <h5>Block Quotes</h5>
          <ol className="style-guide__steps">
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <ol>
                    <li>
                      Start <strong>block quotes</strong> on a new line, and add
                      the quote source (if any) on the next line starting with a
                      dash (en dash <code className="token">&ndash;</code>, em
                      dash <code className="token">&mdash;</code> or hyphen{' '}
                      <code className="token">-</code>).
                    </li>
                    <li>Select the entire quote (including the source)</li>
                    <li>
                      Apply the <span className="ms-style">Quote</span>
                      style (in the <span className="ms-label">Home</span> tab
                      of the ribbon) to the selection.
                    </li>
                  </ol>
                </figcaption>
                <img
                  src="/images/blockquote-1.png"
                  alt="apply the quote style to block quotations and sources"
                />
              </figure>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <p>The block quote is now properly styled.</p>
                  <div className="example">
                    <blockquote>
                      <p>
                        So, the point was to be able to have a medium that would
                        record all the connections and all the structures and
                        all the thoughts that paper could not. Since the
                        computer could hold any structure in any form, this was
                        the way to go.
                      </p>
                      <cite>Ted Nelson</cite>
                    </blockquote>
                  </div>
                </figcaption>
                <img src="/images/blockquote-2.png" alt="styled block quote" />
              </figure>
            </li>
          </ol>
        </section>
      </section>
    );
  }
}

Quotes.ds3Id = `ds3:${Quotes.name}`;

export default Customize(Quotes);
