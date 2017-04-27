import oneService from './services/one.service'
import layoutModule from './layout/layout.module'

const module = angular.module('app.commmon', [
  layoutModule
])

module
  .factory('oneService', oneService)

export default module.name
