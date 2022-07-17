
// utility pseudo jquery
// utility class
class Dom {
// constructor with selector

  constructor(selector) {
    // #app
    this.$el = typeof selector === 'string'
      ? document.querySelector(selector)
      : selector
  }
  // html method which makes return el.innerHtml = html

  html(html) {
    if (typeof html === 'string') {
      this.$el.innerHTML = html
      return this
    }
    return this.$el.outerHTML.trim()
  }
  // clear method

  clear() {
    this.html('')
  }

  // append because $root is the instance of DOM class
  append(node) {
    if (node instanceof Dom) {
      node = node.$el
    }
    Element.prototype.append
    ? this.$el.append(node)
    : this.$el.appendChild(node)
    return this
  }

  delete(node) {
    if (node instanceof Dom) {
      node = node.$el
    }
    Element.prototype.remove
    ? this.$el.remove(node)
    : this.$el.removeChild(node)
    return this
  }

  // addEventListener in framework and removeEventListener
  on(eventType, callback) {
    this.$el.addEventListener(eventType, callback)
  }

  off(eventType, callback) {
    this.$el.removeEventListener(eventType, callback)
  }

  closest(selector) {
    return $(this.$el.closest(selector))
  }

  getCoords() {
    return this.$el.getBoundingClientRect()
  }

  get data() {
    return this.$el.dataset
  }

  findAll(selector) {
    return this.$el.querySelectorAll(selector)
  }

  css(styles = {}) {
    return Object
        .keys(styles)
        .forEach((key) => {
          this.$el.style[key] = styles[key]
        })
  }
}


// event.target
export function $(selector) {
  return new Dom(selector)
}

// static method of $ function
$.create = (tagname, classes = '') => {
  const el = document.createElement(tagname)
  if (classes) {
    el.classList.add(classes)
  }
  return $(el)
}
