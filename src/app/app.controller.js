/* @ngInject */
export default function appController ($log) {
  let ctrl = this

  ctrl.$onInit = onInit

  function onInit () {
    $log.debug('appController:: onInit')
  }
}
