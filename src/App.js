import React from "react";
import ReactCardFlip from "react-card-flip";
import "./App.css";
import images from "./images";
import Texti from './components/Texti';
import Confetti from 'react-dom-confetti';
let { heart, baloons } = images;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false,
      isVisible: false,
      confetti: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.showLyrics = this.showLyrics.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped, confetti: true }));
  }

  showLyrics() {
    const {isVisible} = this.state;
    this.setState({isVisible: !isVisible})
  }

  render() {
    const {isVisible, confetti} = this.state;

    const config = {
      angle: 90,
      spread: "120",
      startVelocity: 45,
      elementCount: 200,
      dragFriction: "0.09",
      duration: 4000,
      stagger: 0,
      width: "10px",
      height: "21px",
      colors: ["#ffcad4", "#f4f4f4", "#6a4c93"]
    };

    return (
      <div width='300px' class='container d-flex flex-column'>
        <ReactCardFlip
          isFlipped={this.state.isFlipped}
          flipDirection='vertical'>
          <div
            key='front'
            class='card mx-auto'
            style={{ width: "100%", height: 900, width: 350 }}>
            <div class='card-body d-flex flex-column justify-content-around'>
              <h5 class='card-title'>Elsku Sara,</h5>
              <p class='card-text'>
                Til hamingju með stúdentinn{" "}
                <img src={baloons} width='40' height='40' /> <br />
                <br />
                Ég er svo stolt af þér og vissi að þú myndir rúlla þessu upp!
                <br /><br />
                Þar sem ég get ekki verið á staðnum, <br /> bjó ég til smá vefræna gjöf
                til þín og bumbubúans! <br />
                <br />
                Elska þig <img src={heart} width='30' height='30' />
              </p>
              <div class='d-flex justify-content-center'>
                <button
                  className='btn'
                  style={{ width: '100%' }}
                  onClick={this.handleClick}
                >
                  Opna Gjöfina
                </button>
              </div>
            </div>
          </div>

          <div
            key='back'
            class='card mx-auto'
            style={{  height: 700, width: 350 }}
          >
            <div style={{width: '100%'}} class='card-body d-flex flex-column justify-content-around'>
            <h4 class='card-title text-center mb-3'>Hjartaslag</h4>
              <div style={{width: '100%'}} class='d-flex justify-content-center'>
                <iframe
                  style={{  border: 0, width: 360, height: 442 }}
                  src='https://bandcamp.com/EmbeddedPlayer/track=1661031581/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/'
                  seamless
                >
                  <a href='http://ladielex.bandcamp.com/track/gonna-give-it'>
                    Gonna&#39; Give it by LadieLex
                  </a>
                </iframe>
              </div>
              
              <div class='d-flex flex-column'>
              
              {isVisible ? <Texti /> : null}
              <button
                  class='btn mb-3'
                  style={{ width: "100%" }}
                  onClick={this.showLyrics}
                >
                  {!isVisible ? 'Sýna texta' : 'Fela texta'} 
                </button>
                <button
                  class='btn'
                  style={{ width: "100%" }}
                  onClick={this.handleClick}
                >
                  Tilbaka
                </button>
              </div>
              <Confetti active={ confetti } config={ config }/>
            </div>
          </div>
        </ReactCardFlip>
      </div>
    );
  }
}

export default App;
