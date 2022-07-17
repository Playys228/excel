import {DomListener} from '@core/DomListener';

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    // other options only for ExcelComponent
    // options.listener {listeners[]}
    super($root, options.listeners)
    this.name = options.name || ''
  }
  // return template of component
  toHTML() {
    return ''
  }

  init() {
    this.initDOMListeners()
  }

  remove() {
    this.removeDOMListeners()
  }
}
