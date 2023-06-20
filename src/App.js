import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import {Button, RulesBtn} from './Styled Components'
import GameResult from './component/GameResult/GameResult'

import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    isButtonClick: false,
    count: 0,
    ourChoice: '',
    opponent: '',
    ourId: '',
    opponentId: '',
  }

  rockButtonClick = () => {
    const opponentsId = Math.floor(Math.random() * choicesList.length)
    console.log(opponentsId)

    this.setState({
      ourChoice:
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
      opponent: choicesList[opponentsId].imageUrl,
      opponentId: choicesList[opponentsId].id,
      ourId: 'ROCK',
    })
    this.setState(preState => ({
      isButtonClick: !preState.isButtonClick,
    }))
  }

  render() {
    const {
      count,
      isButtonClick,
      ourChoice,
      opponent,
      ourId,
      opponentId,
    } = this.state
    return (
      <>
        {isButtonClick ? (
          <div className="app-container">
            <nav className="header-container">
              <div className="container">
                <h1 className="game-text">ROCK</h1>
                <h1 className="game-text">PAPER</h1>
                <h1 className="game-text">SCISSORS</h1>
              </div>
              <div className="score-container">
                <p className="score">Score</p>
                <p className="number">{count}</p>
              </div>
            </nav>
            <GameResult
              ourChoice={ourChoice}
              opponent={opponent}
              ourId={ourId}
              opponentId={opponentId}
            />
          </div>
        ) : (
          <div className="app-container">
            <nav className="header-container">
              <div className="container">
                <h1 className="game-text">ROCK</h1>
                <h1 className="game-text">PAPER</h1>
                <h1 className="game-text">SCISSORS</h1>
              </div>
              <div className="score-container">
                <p className="score">Score</p>
                <p className="number">{count}</p>
              </div>
            </nav>
            <div className="buttons-container">
              <Button data-testid="rockButton">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png"
                  className="image"
                  alt="ROCK"
                  onClick={this.rockButtonClick}
                />
              </Button>
              <Button data-testid="scissorsButton">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png"
                  className="image"
                  alt="SCISSORS"
                />
              </Button>
              <Button data-testid="paperButton">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png"
                  className="image"
                  alt="PAPER"
                />
              </Button>
            </div>
            <div className="popup-container">
              <Popup modal trigger={<RulesBtn>Rules</RulesBtn>}>
                {close => (
                  <div className="popup-background">
                    <button
                      type="button"
                      className="trigger-button"
                      onClick={() => close()}
                    >
                      <RiCloseLine />
                    </button>
                    <div>
                      <img
                        className="popup-image"
                        src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                        alt="rules"
                      />
                    </div>
                  </div>
                )}
              </Popup>
            </div>
          </div>
        )}
      </>
    )
  }
}

export default App
