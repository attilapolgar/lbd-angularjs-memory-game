/* @ngInject */
export default function appService ($q, $rootScope, $log) {
  async function init () {


    let data = await asyncDataGetter()

    return data
  }

  async function asyncDataGetter () {
    return {foo: 42}
  }

  return {
    init
  }
}
