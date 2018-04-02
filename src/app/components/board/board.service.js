import Identicon from 'identicon.js'
import randomString from 'randomstring'
import Game from './Game'

/* @ngInject */
export default function boardService ($log) {
  let hashes = []

  function generateStack (pairs) {
    hashes = _.times(pairs, () =>
      randomString.generate({
        charset: 'hex',
        length: 32
      })
    )
    let stack1 = gen(pairs)
    let stack2 = gen(pairs)

    return _.shuffle(_.union(stack1, stack2))
  }

  function gen (size) {
    return _.times(size, i => {
      let hash = hashes[i]
      return {
        hidden: true,
        symbol: hash,
        image: generateHashImage(hash),
        found: false
      }
    })
  }

  function generateHashImage (id) {
    return `data:image/png;base64,${new Identicon('' + id, {
      background: [0, 0, 0, 0],
      size: 400,
      margin: 0
    }).toString()}`
  }

  const newGame = size => new Game(generateStack(size / 2), size)
  return {
    newGame
  }
}
