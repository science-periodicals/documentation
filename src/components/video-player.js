import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { WebVTTParser } from 'webvtt-parser';
import parallel from 'async/parallel';

const DEFAULT_VIDEO = {
  name: 'App Suite',
  description: 'The New Publishing Experience',
  video: 'https://youtu.be/ezbjPxqtg8w',
  chapters: 'app-suite-chapters.vtt',
  captions: 'app-suite-captions.vtt'
};

export default class VideoPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // player internals
      playerSize: null, // will be computed in componenDidMount. Note that we only render the player if playerSize is not null as we can't change the size of the player once it has instantiated
      name: DEFAULT_VIDEO.name,
      description: DEFAULT_VIDEO.description,
      video: null,
      loadState: 'loading',
      chapters: null,
      captions: null,
      currentChapter: 0,
      fresh: true,
      playing: false,
      duration: 0,
      progress: -1,
      error: null
    };

    this.handleProgress = this.handleProgress.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.handleError = this.handleError.bind(this);
    this.handleSeek = this.handleSeek.bind(this);
    this.handleDuration = this.handleDuration.bind(this);
    this.handleActivation = this.handleActivation.bind(this);
    this.mounted = false;
    this.caps = {};
  }

  componentDidMount() {
    this.mounted = true;
    this.loadVideo();
    // const data = meta['app-suite'] || meta.default;
    // document.title = data.title;

    let playerSize = { width: 854, height: 480 };
    // We hardcode padding because trying to use the computed style runs afoul of CSS not having
    // loaded in some cases, yet we need to compute this early as the size cannot be changed once
    // the react-player component has instantiated.
    const padding = 32 * 2;
    const w = window.innerWidth - padding;
    if (w < 854 && w !== playerSize.width) {
      playerSize = {
        width: w,
        height: w * (480 / 854)
      };
    }
    this.setState({ playerSize });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  loadVideo(props) {
    props = props || this.props;
    // const token = props.location.query.token;
    const data = DEFAULT_VIDEO;

    this.setState({
      loadState: 'loading',
      name: data.name,
      description: data.description,
      video: data.video,
      chapters: null,
      captions: null,
      sandbox: data.sandbox,
      currentChapter: 0,
      fresh: true,
      playing: false,
      duration: 0,
      progress: -1,
      error: null
    });
    parallel(
      {
        chapters: textLoader(`/webvtt/${data.chapters}`),
        captions: textLoader(`/webvtt/${data.captions}`)
      },
      (err, obj) => {
        if (err) return this.handleError(err);
        let chapters = parseVTT(obj.chapters);
        // chapters[0].from = 1;
        chapters[chapters.length - 1].to = Number.MAX_VALUE;
        this.setState({
          loadState: 'ok',
          captions: parseVTT(obj.captions),
          chapters
        });
        this.prepareCaptions(0);
      }
    );
  }

  handleDuration(duration) {
    // sometimes it seems the component unmounts but the duration callback keeps getting called
    if (!this.mounted) return;
    this.setState({ duration });
  }

  handleActivation() {
    this.setState({ playing: true, fresh: false });
  }

  handleProgress({ playedSeconds }) {
    this.prepareCaptions(playedSeconds || 0);
  }

  handleStop() {
    this.setState({ playing: false });
  }

  handleError(error) {
    this.setState({ loadState: 'error', error });
  }

  handleSeek(ev) {
    let time = ev.target.getAttribute('data-cue-from');
    if (typeof time === 'undefined') return;
    this.seek(parseFloat(time));
  }

  seek(time) {
    let duration = this.state.duration;
    if (!duration && Array.isArray(this.state.captions)) {
      duration = this.state.captions[this.state.captions.length - 1].to;
    }
    if (!duration) return;
    this.player.seekTo(time / duration);
    if (!this.state.playing) this.setState({ playing: true });
    if (this.state.fresh) this.setState({ fresh: false });
  }

  prepareCaptions(progress) {
    if (progress !== this.state.progress) {
      let chapters, captions, currentChapter;
      if (this.state.chapters) {
        chapters = this.state.chapters.map((chap, idx) => {
          if (progress >= chap.from && progress < chap.to) {
            chap.highlight = true;
            currentChapter = idx;
          } else chap.highlight = false;
          return chap;
        });
        let scrollArea = document.querySelector('.captioning__captions'),
          captionsBox;
        if (scrollArea) captionsBox = scrollArea.getBoundingClientRect();
        else return;
        captions = this.state.captions.map(cap => {
          if (progress >= cap.from && progress < cap.to) {
            let capEl = this.caps[cap.from];
            if (capEl && !cap.highlight && captionsBox) {
              let box = capEl.getBoundingClientRect(),
                container = document.querySelector('.captioning__captions');
              if (box.bottom > captionsBox.bottom) {
                container.scrollTop += box.bottom - captionsBox.bottom;
                box = capEl.getBoundingClientRect();
              }
              if (box.top < captionsBox.top) {
                container.scrollTop += box.top - captionsBox.top;
              }
            }
            cap.highlight = true;
          } else {
            cap.highlight = false;
          }
          return cap;
        });
      }
      this.setState({ progress, chapters, captions, currentChapter });
    }
  }

  render() {
    const {
      loadState,
      playing,
      fresh,
      video,
      description,
      chapters,
      captions,
      error,
      playerSize
    } = this.state;

    let content, captioning;

    if (loadState === 'error') {
      content = <div className="video-player__error">{error}</div>;
    } else {
      if (loadState === 'loading') {
        captioning = <p>Loading captions…</p>;
      } else {
        captioning = (
          <div className="captioning">
            <div className="captioning__chapters">
              <ol>
                {chapters.map(chap => (
                  <li
                    key={chap.key}
                    className={chap.highlight ? 'active-chapter' : 'chapter'}
                  >
                    <a onClick={this.handleSeek} data-cue-from={chap.from}>
                      <span
                        className="chapters__arrow"
                        data-cue-from={chap.from}
                      >
                        ▶
                      </span>
                      <span
                        className="chapter__title"
                        data-cue-from={chap.from}
                      >
                        {chap.text}
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
            </div>
            <div className="captioning__captions">
              <p>
                {captions.map(cue => (
                  <a
                    key={cue.key}
                    tabIndex={-1}
                    ref={n => (this.caps[cue.from] = n)}
                    className={cue.highlight ? 'active-cue' : 'cue'}
                    onClick={this.handleSeek}
                    data-cue-from={cue.from}
                  >
                    <span className="captions__arrow" data-cue-from={cue.from}>
                      ▶
                    </span>
                    <span className="captions__text" data-cue-from={cue.from}>
                      {`${cue.text} `}
                    </span>
                  </a>
                ))}
              </p>
            </div>
          </div>
        );
      }

      content = (
        <div className="theatre">
          {!!playerSize && (
            <div className="theater__player" style={playerSize}>
              <ReactPlayer
                ref={el => {
                  this.player = el;
                }}
                url={video}
                playing={playing}
                onDuration={this.handleDuration}
                progressInterval={200}
                onProgress={this.handleProgress}
                onPause={this.handleStop}
                onEnded={this.handleStop}
                onError={this.handleError}
                width={playerSize.width}
                height={playerSize.height}
                config={{
                  youtube: {
                    preload: true,
                    playerVars: {
                      controls: 2,
                      rel: 0,
                      showinfo: 0
                    }
                  }
                }}
              />
            </div>
          )}
          {fresh && (
            <div className="theatre__overlay">
              <div className="theatre__overlay__content">
                <h2>{description}</h2>

                <div className="center-block">
                  <a className="basic-button" onClick={this.handleActivation}>
                    Play Video
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    }

    return (
      <div className="video-player">
        <div
          className="video-player__content"
          ref={n => (this.productPageContent = n)}
        >
          {content}
          {captioning}
        </div>
      </div>
    );
  }
}

function parseVTT(text) {
  let parser = new WebVTTParser();
  let tree = parser.parse(text, 'metadata');

  // report those just to us
  tree.errors.forEach(err =>
    console.error(`[CAPTION] ${err.message} (${err.line}:${err.col})`)
  );
  return tree.cues.map((cue, idx) => ({
    from: cue.startTime,
    to: cue.endTime,
    text: cue.text,
    key: `${cue.startTime}-${cue.endTime}-${idx}`
  }));
}

function textLoader(url) {
  return cb => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== 4) return;
      if (xhr.status >= 400) return cb(new Error(xhr.statusText));
      if (xhr.status === 200) return cb(null, xhr.responseText);
      cb(new Error(`Unhandled status: ${xhr.status}`));
    };
    xhr.send();
  };
}
