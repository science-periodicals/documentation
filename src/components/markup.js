import React from 'react';

export default class Markup extends React.Component {
  constructor() {
    super();
    this.state = {
      displayedChunks: [],
      allChunksDisplayed: false,
      hidden: false
    };

    this.handleVisibilityChange = this.handleVisibilityChange.bind(this);

    this.immutableChunks = [
      <span className="tag">a</span>,
      '[',
      <span className="property">t</span>,
      <span className="property">y</span>,
      <span className="property">p</span>,
      <span className="property">e</span>,
      <span className="property">o</span>,
      <span className="property">f</span>,
      '=',
      <span className="value">{'"'}</span>,
      <span className="value">s</span>,
      <span className="value">c</span>,
      <span className="value">h</span>,
      <span className="value">e</span>,
      <span className="value">m</span>,
      <span className="value">a</span>,
      <span className="value">:</span>,
      <span className="value">D</span>,
      <span className="value">i</span>,
      <span className="value">s</span>,
      <span className="value">e</span>,
      <span className="value">a</span>,
      <span className="value">s</span>,
      <span className="value">e</span>,
      <span className="value">{'"'}</span>,
      ']',
      ' ',
      '{',
      ' ',
      <span className="property">c</span>,
      <span className="property">o</span>,
      <span className="property">l</span>,
      <span className="property">o</span>,
      <span className="property">r</span>,
      ':',
      ' ',
      <span className="color">r</span>,
      <span className="color">e</span>,
      <span className="color">d</span>,
      ';',
      ' ',
      '}'
    ];
    this.chunks = [
      <span className="tag">a</span>,
      '[',
      <span className="property">t</span>,
      <span className="property">y</span>,
      <span className="property">p</span>,
      <span className="property">e</span>,
      <span className="property">o</span>,
      <span className="property">f</span>,
      '=',
      <span className="value">{'"'}</span>,
      <span className="value">s</span>,
      <span className="value">c</span>,
      <span className="value">h</span>,
      <span className="value">e</span>,
      <span className="value">m</span>,
      <span className="value">a</span>,
      <span className="value">:</span>,
      <span className="value">D</span>,
      <span className="value">i</span>,
      <span className="value">s</span>,
      <span className="value">e</span>,
      <span className="value">a</span>,
      <span className="value">s</span>,
      <span className="value">e</span>,
      <span className="value">{'"'}</span>,
      ']',
      ' ',
      '{',
      ' ',
      <span className="property">c</span>,
      <span className="property">o</span>,
      <span className="property">l</span>,
      <span className="property">o</span>,
      <span className="property">r</span>,
      ':',
      ' ',
      <span className="color">r</span>,
      <span className="color">e</span>,
      <span className="color">d</span>,
      ';',
      ' ',
      '}'
    ];
    this.limeChunks = [
      ' ',
      <span className="color">l</span>,
      <span className="color">i</span>,
      <span className="color">m</span>,
      <span className="color">e</span>,
      ';',
      ' ',
      '}'
    ];
    this.blueChunks = [
      ' ',
      <span className="color">b</span>,
      <span className="color">l</span>,
      <span className="color">u</span>,
      <span className="color">e</span>,
      ';',
      ' ',
      '}'
    ];
  }

  componentDidMount() {
    // make sure chaos does not ensue when the tab switches or the browser is minimized
    // http://stackoverflow.com/a/9040229
    document.addEventListener(
      'visibilitychange',
      this.handleVisibilityChange,
      false
    );

    this.liveCode();
  }

  componentWillUnmount() {
    this.stopLiveCoding();
    document.removeEventListener(
      'visibilitychange',
      this.handleVisibilityChange
    );
  }

  handleVisibilityChange() {
    if (document.hidden) {
      this.setState({ hidden: true });
      this.stopLiveCoding();
      this.resetCodeChunks();
    } else {
      this.setState({ hidden: false });
      this.liveCode();
    }
  }

  liveCode() {
    let changeColor = (color, chunks) => {
      this.timeoutId3 = setTimeout(() => {
        if (this.state.hidden) return this.stopLiveCoding();
        this.intervalId3 = setInterval(() => {
          if (this.state.hidden) return this.stopLiveCoding();
          if (
            this.state.displayedChunks.slice(-2)[0] === ':' &&
            this.state.displayedChunks.slice(-1)[0] === ' '
          ) {
            clearInterval(this.intervalId3);
            let counter = 0;
            this.intervalId4 = setInterval(() => {
              if (this.state.hidden) return this.stopLiveCoding();
              if (counter === chunks.length) {
                clearInterval(this.intervalId4);
                this.setState({
                  allChunksDisplayed: true,
                  displayColor: color
                });
              } else {
                this.setState({
                  displayedChunks: this.state.displayedChunks.concat(
                    chunks[counter]
                  )
                });
              }
              counter++;
            }, 75);
          } else {
            this.setState({
              displayedChunks: this.state.displayedChunks.slice(
                0,
                this.state.displayedChunks.length - 1
              )
            });
          }
        }, 40);
      }, 5000);
    };

    let writeCode = () => {
      this.intervalId1 = setInterval(() => {
        if (this.state.hidden) return this.stopLiveCoding();
        this.setState(
          {
            displayedChunks: this.state.displayedChunks.concat(
              this.chunks.shift()
            )
          },
          () => {
            if (!this.chunks.length) {
              clearInterval(this.intervalId1);
              this.setState({
                allChunksDisplayed: true,
                displayColor: 'red'
              });
              changeColor('lime', this.limeChunks);
              this.timeoutId1 = setTimeout(() => {
                if (this.state.hidden) return this.stopLiveCoding();
                changeColor('blue', this.blueChunks);
              }, 5000);
            }
          }
        );
      }, 75);
      this.timeoutId2 = setTimeout(() => {
        if (this.state.hidden) return this.stopLiveCoding();
        this.setState({ allChunksDisplayed: false });
        this.intervalId2 = setInterval(() => {
          if (this.state.hidden) return this.stopLiveCoding();
          this.setState(
            {
              displayedChunks: this.state.displayedChunks.slice(
                0,
                this.state.displayedChunks.length - 1
              )
            },
            () => {
              if (!this.state.displayedChunks.length) {
                clearInterval(this.intervalId2);
                this.chunks = [];
                this.immutableChunks.forEach(chunk => {
                  this.chunks.push(chunk);
                });
              }
            }
          );
        }, 40);
      }, 22000);
    };

    writeCode();
    this.intervalId5 = setInterval(() => {
      if (this.state.hidden) return this.stopLiveCoding();
      writeCode();
    }, 30000);
  }

  stopLiveCoding() {
    clearInterval(this.intervalId1);
    clearInterval(this.intervalId2);
    clearInterval(this.intervalId3);
    clearInterval(this.intervalId4);
    clearInterval(this.intervalId5);
    clearTimeout(this.timeoutId1);
    clearTimeout(this.timeoutId2);
    clearTimeout(this.timeoutId3);
  }

  resetCodeChunks() {
    this.chunks = [];
    this.immutableChunks.forEach(chunk => {
      this.chunks.push(chunk);
    });
    this.setState({
      displayedChunks: [],
      allChunksDisplayed: false,
      displayColor: null
    });
  }

  render() {
    let style = {
      color: this.state.allChunksDisplayed ? this.state.displayColor : 'black'
    };

    // DO _NOT_ TRY TO WRAP.
    return (
      <div className="markup">
        <div className="render">
          <p prefix="schema: http://schema.org/">
            <a
              target="_blank"
              property="schema:about"
              typeof="schema:Disease"
              href="http://id.nlm.nih.gov/mesh/D007251"
              style={style}
            >
              Influenza
            </a>{' '}
            is an acute viral infection in humans.
          </p>
        </div>
        <div className="code">
          <pre>
            <code>
              {' '}
              <span className="loc">1</span>
              {'  '}
              &lt;
              <span className="tag">html</span>{' '}
              <span className="property">lang</span>=
              <span className="value">"en-US"</span>
              &gt;
              {'\n'} <span className="loc">2</span>
              {'  '}
              &lt;
              <span className="tag">head</span>
              &gt;
              {'\n '}
              <span className="loc">3</span>
              {'  '}
              &lt;
              <span className="tag">style</span>
              &gt;
              {'\n '}
              <span className="loc">4</span>
              {'    '}
              <span>
                {this.state.displayedChunks.map((ch, idx) => (
                  <span key={`${ch}-${idx}`}>{ch}</span>
                ))}
              </span>
              {'\n '}
              <span className="loc">5</span>
              {'  '}
              &lt;/
              <span className="tag">style</span>
              &gt;
              {'\n'} <span className="loc">6</span>
              {'  '}
              &lt;/
              <span className="tag">head</span>
              &gt;
              {'\n'} <span className="loc">7</span>
              {'  '}
              &lt;
              <span className="tag">body</span>{' '}
              <span className="property">prefix</span>
              {'='}
              <span className="value">"schema: http://schema.org/"</span>
              &gt;
              {'\n'} <span className="loc">8</span>
              {'    '}
              &lt;
              <span className="tag">a</span>{' '}
              <span className="property">property</span>=
              <span className="value">"schema:about"</span>
              {'\n'} <span className="loc">9</span>
              {'       '}
              <span className="property">typeof</span>
              {'='}
              <span className="value">"schema:Disease"</span>
              {'\n'} <span className="loc">10</span>
              {'      '}
              <span className="property">href</span>
              {'='}
              <span className="value">
                "http://id.nlm.nih.gov/mesh/D007251"
              </span>
              &gt;
              {'\n'} <span className="loc">11</span>
              {'      '}Influenza{'\n'} <span className="loc">12</span>
              {'   '}
              &lt;/
              <span className="tag">a</span>
              &gt; is an acute viral infection in humans.
              {'\n'} <span className="loc">13</span> &lt;/
              <span className="tag">body</span>
              &gt;
              {'\n'} <span className="loc">14</span> &lt;/
              <span className="tag">html</span>
              &gt;
              {'\n'}
              {'\n'}
            </code>
          </pre>
        </div>
      </div>
    );
  }
}
