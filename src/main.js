import View from './js/view.js'
import Todo from './js/model.js'
import Controller from './js/controller.js'

import './css/style.css'

const todoModel = new Todo()
const todoController = new Controller(todoModel)

new View(document.querySelector('.TodoList'), todoModel, todoController)