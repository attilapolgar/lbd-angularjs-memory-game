import controller from './app.controller'
import template from './app.html'
import './app.less'

export default {
  bindings: {
    data: '<'
  },
  controller,
  template
}
