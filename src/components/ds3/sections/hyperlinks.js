import React from 'react';
import Customize from '../../../hoc/customize';

class Hyperlinks extends React.Component {
  render() {
    return (
      <section id={Hyperlinks.ds3Id} className="style-guide__group">
        <h3>Hyperlinks</h3>
        <p>
          Links to external websites, resources (datasets, code libraries, audio
          files, video files, etc.) accessible on the web, email addresses, or
          local parts of the document (headings and bookmarks) can be created
          using the built-in <span className="ms-feature">Hyperlink</span>{' '}
          feature of Microsoft Word.
        </p>
        <section id="hyperlinks-to-external-resources-or-websites">
          <h5>Hyperlinks to external resources or websites</h5>
          <p>To insert a hyperlink to an external resource or website:</p>
          <ol className="style-guide__steps">
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <ol>
                    <li>Highlight the text to be linked.</li>
                    <li>
                      Go to the <span className="ms-label">Insert</span> tab of
                      the ribbon and click on{' '}
                      <span className="ms-button">Hyperlink</span>.
                    </li>
                    <li>
                      <p>
                        In the <span className="ms-label">Web Page</span> tab,
                        enter the URL in the{' '}
                        <span className="ms-label">Address</span> field.
                      </p>
                      <p className="example">
                        Project <a href="http://xanadu.com">Xanadu</a> was the
                        first hypertext project.
                      </p>
                    </li>
                  </ol>
                </figcaption>
                <img
                  src="/images/hyperlink-1.png"
                  alt="The URL target is selected and linked using the built-in insert hyperlink tool"
                />
              </figure>
            </li>
            <li className="style-guide__step" id="screentip">
              <figure>
                <figcaption>
                  <p>To add a screentip to the hyperlink:</p>
                  <ol>
                    <li>
                      Click on the{' '}
                      <span className="ms-button">ScreenTip...</span> button.
                    </li>
                    <li>
                      Set the <span className="ms-label">ScreenTip text</span>.
                    </li>
                    <li>
                      Click on <span className="ms-button">OK</span>.
                    </li>
                  </ol>
                  <p className="example">
                    <span className="ms-screentip">
                      Xanadu (accessed January 1 2016)
                    </span>
                  </p>
                </figcaption>
                <img src="/images/hyperlink-2.png" alt="adding a screentip" />
              </figure>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <p>
                    The selected text is now hyperlinked and with a screentip.
                  </p>
                  <p className="example">
                    Project{' '}
                    <a
                      href="http://xanadu.com"
                      title="Xanadu (accessed January 1 2016)"
                    >
                      Xanadu
                    </a>{' '}
                    was the first hypertext project.
                  </p>
                </figcaption>
                <img src="/images/hyperlink-3.png" alt="adding a screentip" />
              </figure>
            </li>
          </ol>
        </section>
        <section id="hyperlink-to-email-addresses">
          <h5>Hyperlink to email addresses</h5>
          <p>To insert a hyperlink to an email address:</p>
          <figure>
            <figcaption>
              <ol>
                <li>Highlight the text to be linked.</li>
                <li>
                  Go to the <span className="ms-label">Insert</span> tab of the
                  ribbon and click on{' '}
                  <span className="ms-button">Hyperlink</span>.
                </li>
                <li>
                  In the <span className="ms-label">Email Address</span> tab,
                  enter the email address in the{' '}
                  <span className="ms-option">Email Address</span> field.
                </li>
                <li>
                  Click on <span className="ms-button">OK</span>.
                </li>
              </ol>
              <p className="example">
                Data request can be sent to{' '}
                <a href="mailto:datarequest@example.com">this address</a>.
              </p>
            </figcaption>
            <img
              src="/images/hyperlink-email-1.png"
              alt="hyperlink email address"
            />
          </figure>
        </section>
        <section id="hyperlink-to-part-of-a-document">
          <h5>Hyperlink to part of the document</h5>
          <p>
            To insert a hyperlink to a part of the current document (such as a
            section heading or a <a href="#ds3:Bookmarks">bookmark</a>):
          </p>
          <figure>
            <figcaption>
              <ol>
                <li>Highlight the text to be linked.</li>
                <li>
                  Go to the <span className="ms-label">Insert</span> tab of the
                  ribbon and click on{' '}
                  <span className="ms-button">Hyperlink</span>.
                </li>
                <li>
                  In the <span className="ms-label">This Document</span> tab,
                  select the part of the document (or bookmark) that the link
                  should point to.
                </li>
                <li>
                  Click on <span className="ms-button">OK</span>.
                </li>
              </ol>
            </figcaption>
            <img
              src="/images/hyperlink-bookmark.png"
              alt="hyperlink bookmark"
            />
          </figure>
        </section>
      </section>
    );
  }
}

Hyperlinks.ds3Id = `ds3:${Hyperlinks.name}`;

export default Customize(Hyperlinks);
