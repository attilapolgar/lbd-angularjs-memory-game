/* @ngInject */
export default function appConfig ($locationProvider, $stateProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true)

  $stateProvider
    .state('app', {
      abstract: true,
      component: 'appComponent'
    })

  $urlRouterProvider.otherwise('/')
}
