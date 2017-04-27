/* @ngInject */
export default function boardConfig ($stateProvider) {
  $stateProvider
    .state('app.one', {
      url: '/',
      component: 'boardComponent'
    })
}
