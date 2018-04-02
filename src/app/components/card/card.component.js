import controller from './card.controller'
import template from './card.html'
import './card.less'

export default {
  bindings: {
    data: '<',
    toggle: '&'
  },
  controller,
  template
}
