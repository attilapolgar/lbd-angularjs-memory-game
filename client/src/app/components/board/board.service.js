import Game from './Game'

/* @ngInject */
export default function boardService ($log) {
  function generateStack (size) {
    let stack1 = gen(size)
    let stack2 = gen(size)

    return _.shuffle(_.union(stack1, stack2))
  }

  function gen (size) {
    return _.times(size, (i) => ({
      hidden: true,
      symbol: i,
      found: false
    }))
  }

  const newGame = (size) => new Game(generateStack(size / 2), size)
  return {
    newGame
  }
}
