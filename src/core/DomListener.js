import { capitalize } from "./utils"

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('No $root provided for DomListener')
    }
    this.$root = $root
    this.realizedListeners = []
    // massive of listeners
    this.listeners = listeners
  }

  // adding Listeners
  initDOMListeners() {
    this.listeners.forEach( (listener) => {
      const method = getMethodName(listener)
      const thisMethod = this[method].bind(this)
      const realizedListener = thisMethod
      this.realizedListeners.push({listener, realizedListener})
      if (!this[method]) {
        const name = this.name || ''
        throw new Error(`Method ${method} isn implemented in ${name} Component`)
      }

      // addEventListener in framework
      this.$root.on(listener, thisMethod)
    })
  }
  // removing Listeners
  removeDOMListeners() {
    console.log('removing DOMlistener')
    this.realizedListeners.forEach( ( {listener, realizedListener} ) => {
      this.$root.off(listener, realizedListener )
    })
  }
}

function getMethodName(eventName) {
  return 'on'+ capitalize(eventName)
}

