import { $ } from "../../core/DOM"

export class Excel {
  // reciveing selector and object options which includes massive of components
  // in index.js

  constructor(selector, options) {
    this.$el = $(selector)
    this.components = options.components || []
  }
  // creating $root with function $ and static method(property) .create
  getRoot() {
    const $root = $.create('div', 'excel')
    // listing the array

    this.components = this.components.map( (Component) => {
      const $el = $.create('div', Component.className)

      // creating instances of classes Component
      const component = new Component($el)

      // //   DEBUG

      // if (component.name) {
      //   window['c' + component.name] = component
      // }

      // innerHTML rewrite for our framework
      $el.html(component.toHTML())

      // append also rewrite
      $root.append($el)
      return component
    } )

    // returns instances of class
    return $root
  }

  // output of $el and class template on display
  render() {
    this.$el.append(this.getRoot())
    // initing DomListener
    this.components.forEach((component) => component.init())
  }
  unrender() {
    this.components.forEach((component) => component.remove())
  }
}
