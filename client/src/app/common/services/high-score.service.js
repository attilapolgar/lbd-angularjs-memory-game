/* @ngInject */
export default function highScoreService ($log) {
  let highScores = {}

  const checkHighScore = (gameType, currentScore) => {
    let bestScore = getHighScore(gameType)
    if (!bestScore || bestScore > currentScore) {
      _.set(highScores, gameType, currentScore)
    }
    return highScores
  }
  const getHighScore = gameType => _.get(highScores, gameType)
  const getHighScores = () => highScores
  return {
    checkHighScore,
    getHighScore,
    getHighScores
  }
}
