import {Component} from 'react'

import './index.css'

import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import GameItem from '../GameItem'

import {
  Container,
  Heading,
  Paragraph,
  Image,
  UnorderList,
  Button,
  Button1,
  ChoiceListContainer,
  RulesButton,
  RulesImage,
  PopupContainer,
  CloseButton,
  ResultContainer,
  Result,
  Image1,
  AppContainer,
  Pcount,
} from './StyledComponents'

class Game extends Component {
  state = {
    count: 0,
    showResult: false,
    userElectedImage: '',
    userElectedId: '',
    randomImage: '',
    randomId: '',
  }

  componentDidMount() {
    this.getChoicesList()
  }

  startAgain = () => {
    this.setState({
      showResult: false,
      userElectedImage: '',
      userElectedId: '',
      randomImage: '',
      randomId: '',
      result: '',
    })
  }

  renderGetResult = () => {
    const {userElectedImage, randomImage, result} = this.state

    return (
      <ResultContainer>
        <div>
          <Heading>You</Heading>
          <Image1 src={userElectedImage} alt="your choice" />
        </div>
        <Result>
          <p>{result}</p>
          <Button1 onClick={this.startAgain} type="button">
            PLAY AGAIN
          </Button1>
        </Result>
        <div>
          <Heading>Opponent</Heading>
          <Image1 src={randomImage} alt="opponent choice" />
        </div>
      </ResultContainer>
    )
  }

  getResult = (id, imgUrl) => {
    const {choicesList} = this.props
    const getRandomChoice = choicesList[Math.floor(Math.random() * 3)]

    let result
    if (id === 'PAPER' && getRandomChoice.id === 'ROCK') {
      result = 'YOU WON'
    } else if (id === 'SCISSORS' && getRandomChoice.id === 'ROCK') {
      result = 'YOU LOSE'
    } else if (id === 'ROCK' && getRandomChoice.id === 'PAPER') {
      result = 'YOU LOSE'
    } else if (id === 'SCISSORS' && getRandomChoice.id === 'PAPER') {
      result = 'YOU WON'
    } else if (id === 'ROCK' && getRandomChoice.id === 'SCISSORS') {
      result = 'YOU WON'
    } else if (id === 'PAPER' && getRandomChoice.id === 'SCISSORS') {
      result = 'YOU LOSE'
    } else {
      result = 'IT IS DRAW'
    }

    switch (result) {
      case 'YOU WON':
        this.setState(prevState => ({
          count: prevState.count + 1,
          showResult: true,
          userElectedImage: imgUrl,
          userElectedId: id,
          randomImage: getRandomChoice.imageUrl,
          randomId: getRandomChoice.id,
          result,
        }))
        break
      case 'YOU LOSE':
        this.setState(prevState => ({
          count: prevState.count - 1,
          showResult: true,
          userElectedImage: imgUrl,
          userElectedId: id,
          randomImage: getRandomChoice.imageUrl,
          randomId: getRandomChoice.id,
          result,
        }))
        break
      case 'IT IS DRAW':
        this.setState({
          showResult: true,
          userElectedImage: imgUrl,
          userElectedId: id,
          randomImage: getRandomChoice.imageUrl,
          randomId: getRandomChoice.id,
          result,
        })
        break
      default:
        break
    }
  }

  getChoicesList = () => {
    const {choicesList} = this.props
    return (
      <ChoiceListContainer>
        <UnorderList>
          {choicesList.map(item => (
            <GameItem item={item} getResult={this.getResult} />
          ))}
        </UnorderList>
        <Popup
          modal
          trigger={<RulesButton>RULES</RulesButton>}
          className="popup-container"
        >
          {close => (
            <PopupContainer>
              <CloseButton type="button" onClick={() => close()}>
                <RiCloseLine />
              </CloseButton>
              <RulesImage
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </PopupContainer>
          )}
        </Popup>
      </ChoiceListContainer>
    )
  }

  render() {
    const {count, showResult} = this.state
    return (
      <AppContainer>
        <Container>
          <div>
            <Heading>
              ROCK
              <br />
              PAPER
              <br />
              SCISSORS
            </Heading>
          </div>
          <div>
            <Paragraph>
              <Pcount>Score</Pcount>
              <Pcount>{count}</Pcount>
            </Paragraph>
          </div>
        </Container>
        {showResult ? this.renderGetResult() : this.getChoicesList()}
      </AppContainer>
    )
  }
}
export default Game
