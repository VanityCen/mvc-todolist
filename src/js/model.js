import emitter from './emitter'

export default function Todo (ctrl) {
  this.ctrl = ctrl,
  this.todos = []
}

Todo.prototype.test = () => {
  emitter.emit('test', 'Hello')
}