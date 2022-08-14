export class Emitter {
  constructor() {
    this.listeners = {}
  }

  // dispatch, fire, trigger
  // notify listeners if they are exist
  // 'focus', 'formula:done', 'make-it-work'
  // table.emit('table:select', {a:1})
  emit(event, ...args) {
    if (!Array.isArray(this.listeners[event])) {
      return false
    }
    this.listeners[event].forEach((listener) =>{
      listener(...args)
    })
    return true
  }

  // on, listen
  // subscribe on notify
  // formula.subscribe('table:select', () => {})
  subscribe(event, fn) {
    this.listeners[event] = this.listeners[event] || []
    this.listeners[event].push(fn)
    console.log(this.listeners[event])
    return () => {
      this.listeners[event] = this.listeners[event]
          .filter((listener) => listener !== fn)
    }
  }
}
// const emitter = new Emitter()
// const unsub = emitter.subscribe('vladilen', (data) => console.log(data))
// emitter.emit('vladilen', 42)


// setTimeout(() => {
//   emitter.emit('vladilen', 'After 2 seconds')
// }, 2000)


// setTimeout(() => {
//   unsub()
// }, 3000)


// setTimeout(() => {
//   emitter.emit('vladilen', 'After 4 seconds')
// }, 4000)
