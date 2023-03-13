// Write your code here.
import './index.css'

const NavBar = props => {
  const {currentScore, topScore, isGameInProgress} = props

  return (
    <nav className="nav-container">
      <div className="nav-bar">
        <div className="emoji-logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="nav-logo"
          />
          <h1 className="title">Emoji Game</h1>
        </div>
        {isGameInProgress ? (
          <div className="scores-container">
            <p className="score">Score: {currentScore}</p>
            <p className="topScore">Top Score: {topScore}</p>
          </div>
        ) : null}
      </div>
    </nav>
  )
}
export default NavBar
