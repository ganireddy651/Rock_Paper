const GameResult = props => {
  const {ourChoice, opponent, opponentId, ourId} = props
  console.log(ourChoice, opponent)
  console.log(opponentId, ourId)

  const youWon = () => (
    <div>
      <h1>hi</h1>
    </div>
  )

  const youLoss = () => (
    <div>
      <h1>Hello</h1>
    </div>
  )

  const drawGame = () => <h1>draw</h1>

  if (ourId === 'PAPER' && opponentId === 'ROCK') {
    return youWon()
  }
  if (ourId === 'SCISSORS' && opponentId === 'PAPER') {
    return youWon()
  }
  if (ourId === 'ROCK' && opponentId === 'SCISSORS') {
    return youWon()
  }
  if (ourId === 'SCISSORS' && opponentId === 'ROCK') {
    return youLoss()
  }
  if (ourId === 'ROCK' && opponentId === 'PAPER') {
    return youLoss()
  }
  if (ourId === 'PAPER' && opponentId === 'SCISSORS') {
    return youLoss()
  }
  return drawGame()
}

export default GameResult
