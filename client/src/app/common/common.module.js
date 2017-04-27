import highScoreService from './services/high-score.service'
import layoutModule from './layout/layout.module'

const module = angular.module('app.commmon', [
  layoutModule
])

module
  .factory('highScoreService', highScoreService)

export default module.name
