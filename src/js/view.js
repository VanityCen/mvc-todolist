import Todo from './model'
import emitter from './emitter'

export default function View (el) {
  this.todo = new Todo()
  this.el = el
  this.compile()
}

View.prototype.compile = function () {
  emitter.on('test', (str) => {
    console.log(str)
  })
  this.todo.test()
}
