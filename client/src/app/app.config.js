/* @ngInject */
export default function appConfig ($locationProvider, $stateProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true)

  $stateProvider
    .state('app', {
      abstract: true,
      component: 'appComponent',
      resolve: {
        /* @ngInject */
        data: ($log, appService) => {
          let data = {}
          data = appService.init()
          return data
        }
      }
    })

  $urlRouterProvider.otherwise('/')
}
