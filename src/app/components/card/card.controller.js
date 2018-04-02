/* @ngInject */
export default function cardController ($log) {
  let ctrl = this
  ctrl.$onInit = onInit

  function onInit () {}

  const flip = () => {
    if (ctrl.data.hidden) {
      ctrl.data.hidden = false
      ctrl.toggle({ card: ctrl.data })
    }
  }

  ctrl.controlFunctions = {
    flip
  }
}
