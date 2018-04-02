/* @ngInject */
export default function boardController (
  $log,
  boardService,
  highScoreService,
  CONFIG
) {
  let ctrl = this
  let highScores = highScoreService.getHighScores()

  ctrl.$onInit = init
  ctrl.deckSizes = CONFIG.deckSizes

  function init (size = CONFIG.defaultDeck) {
    ctrl.game = boardService.newGame(size)
  }

  const toggleCard = card => {
    let ended = ctrl.game.flip(card)

    if (ended) {
      highScores = highScoreService.checkHighScore(
        ctrl.game.size,
        ctrl.game.getNumberOfTries()
      )
    }
  }

  const newGame = size => {
    init(size)
  }

  const getHighScore = () => _.get(highScores, ctrl.game.size, '-')

  ctrl.controlFunctions = {
    toggleCard,
    newGame,
    getHighScore
  }
}
