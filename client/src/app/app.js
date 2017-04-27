import angular from 'angular'
import uiRouter from 'angular-ui-router'
import '../assets/style.less'

import components from './components/components.module'
import common from './common/common.module'
import appComponent from './app.component'
import appService from './app.service'
import appConfig from './app.config'
import appRun from './app.run'

angular.module('app', [
  components,
  common,
  uiRouter
]).component('appComponent', appComponent)
  .factory('appService', appService)
  .config(appConfig)
  .run(appRun)
