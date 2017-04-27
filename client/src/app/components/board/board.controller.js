/* @ngInject */
export default function boardController ($log, boardService, highScoreService, CONFIG) {
  let ctrl = this
  let highScores = highScoreService.getHighScores()
  ctrl.deckSizes = CONFIG.deckSizes

  ctrl.$onInit = init

  function init (size = CONFIG.defaultDeck) {
    ctrl.game = {
      numberOfTries: 0,
      cardsFound: 0,
      ended: false,
      size: size,
      currentlyVisible: [],
      resetInNextRound: false
    }

    ctrl.tableData = boardService.newGame(ctrl.game.size)
  }

  const toggleCard = card => {
    ctrl.game.numberOfTries++

    if (ctrl.game.currentlyVisible.length === 0 || ctrl.game.resetInNextRound) {
      if (ctrl.game.resetInNextRound) {
        _.each(ctrl.game.currentlyVisible, card => {
          if (!card.found) card.hidden = true
        })
        ctrl.game.currentlyVisible = []
        ctrl.game.resetInNextRound = false
      }
      ctrl.game.currentlyVisible.push(card)
    } else {
      if (ctrl.game.currentlyVisible.length === 1) {
        ctrl.game.currentlyVisible.push(card)
        let visible = _.get(ctrl.game.currentlyVisible, '0')

        if (visible.symbol === card.symbol) {
          ctrl.game.resetInNextRound = true
          ctrl.game.cardsFound += 2
          _.each(ctrl.game.currentlyVisible, card => { card.found = true })

          if (ctrl.game.cardsFound === ctrl.game.size) {
            ctrl.game.ended = true
            highScores = highScoreService.checkHighScore(ctrl.game.size, ctrl.game.numberOfTries)
          }
        } else {
          ctrl.game.resetInNextRound = true
        }
      }
    }
  }

  const newGame = (size) => {
    ctrl.game.size = size
    init(size)
  }

  const getHighScore = () => _.get(highScores, ctrl.game.size, '-')

  ctrl.controlFunctions = {
    toggleCard,
    newGame,
    getHighScore
  }
}
