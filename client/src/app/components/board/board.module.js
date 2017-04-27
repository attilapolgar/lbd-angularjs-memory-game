import component from './board.component'
import service from './board.service'
import config from './board.config'
import constant from './board.constant'

let module = angular.module('app.components.board', [
  'ui.router'
])
  .component('boardComponent', component)
  .config(config)
  .constant('CONFIG', constant)
  .factory('boardService', service)

export default module.name
