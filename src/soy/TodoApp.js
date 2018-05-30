'use strict';

import templates from './TodoApp.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';

import './TodoForm';
import './TodoItem';

import '../todo-app.scss';

class TodoApp extends Component {

	handleTodoClick(event) {
		this.toggleTodo(event.index);
	}

	toggleTodo(clickedIndex) {
		this.todos = this.todos.map((todo, index) => {
			if (clickedIndex === index) {
				todo = Object.assign({}, todo, {
					done: !todo.done
				});
			}
			return todo;
		});
	}

	addTodo(title) {
		// Creates a new array with all of the elements
		// from the previous array, with the newly added item
		this.todos = [...this.todos, {
			done: false,
			title
		}];
	}

	handleTodoAdd(event) {
		this.addTodo(event.title);
	}
}

Soy.register(TodoApp, templates);

TodoApp.STATE = {
	todos: {
		// Default value
		value: [
			{
				done: false,
				title: 'Todo 1'
			},
			{
				done: false,
				title: 'Todo 2'
			}
		]
	}
};

export {TodoApp};
export default TodoApp;
