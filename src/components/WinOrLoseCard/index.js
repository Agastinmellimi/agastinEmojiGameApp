// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {isWon, score, onResetGame} = props
  const onPlayAgain = () => {
    onResetGame()
  }
  return (
    <div className="score-container">
      {isWon ? (
        <div className="card-container">
          <div className="status-container">
            <h1 className="status">You Won</h1>
            <p className="score-heading">Best Score</p>
            <p className="scores">{score}/12</p>
            <button
              className="play-again-btn"
              type="button"
              onClick={onPlayAgain}
            >
              Play Again
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
            alt="win or lose"
            className="status-image"
          />
        </div>
      ) : (
        <div className="score-container">
          <div className="card-container">
            <div className="status-container">
              <h1 className="status">You Lose</h1>
              <p className="score-heading">Score</p>
              <p className="scores">{score}/12</p>
              <button
                className="play-again-btn"
                type="button"
                onClick={onPlayAgain}
              >
                Play Again
              </button>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
              alt="win or lose"
              className="status-image"
            />
          </div>
        </div>
      )}
    </div>
  )
}
export default WinOrLoseCard
