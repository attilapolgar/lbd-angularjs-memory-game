export default function Game (_board, _size) {
  let table = _board
  let size = _size
  let numberOfTries = 0
  let cardsFound = 0
  let ended = false
  let currentlyVisible = []
  let resetInNextRound = false

  const flip = (card) => {
    numberOfTries++

    if (currentlyVisible.length === 0 || resetInNextRound) {
      if (resetInNextRound) {
        _.each(currentlyVisible, card => {
          if (!card.found) card.hidden = true
        })
        currentlyVisible = []
        resetInNextRound = false
      }
      currentlyVisible.push(card)
    } else {
      if (currentlyVisible.length === 1) {
        currentlyVisible.push(card)
        let visible = _.get(currentlyVisible, '0')

        if (visible.symbol === card.symbol) {
          resetInNextRound = true
          cardsFound += 2
          _.each(currentlyVisible, card => { card.found = true })

          if (cardsFound === size) {
            ended = true
          }
        } else {
          resetInNextRound = true
        }
      }
    }

    return ended
  }

  const getNumberOfTries = () => numberOfTries
  const isEnded = () => ended

  return {
    flip,
    size,
    getNumberOfTries,
    table,
    isEnded
  }
}