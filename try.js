class Todo {
	constructor() {
		this.todos = [];
	}
	add(todo) {
		this.todos.push(todo);
	}
	remove(indexOfTodo) {
		if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
			this.todos.splice(indexOfTodo, 1);
		}
	}
	update(index, updatedTodo) {
		if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
			this.todos[index] = updatedTodo;
		}
	}
	getAll() {
		return this.todos;
	}
	get(indexOfTodo) {
		if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
			return this.todos[indexOfTodo];
		}
		return null;
	}
	clear() {
		this.todos = [];
	}
}

describe('Todo', () => {
	let todoList;

	beforeEach(() => {
		todoList = new Todo();
	});

	test('add and getAll', () => {
		todoList.add('Task 1');
		todoList.add('Task 2');
		todoList.add('Task 3');

		expect(todoList.getAll()).toEqual(['Task 1', 'Task 2', 'Task 3']);
	});

	test('remove', () => {
		todoList.add('Task 1');
		todoList.add('Task 2');
		todoList.add('Task 3');

		todoList.remove(1);
		expect(todoList.getAll()).toEqual(['Task 1', 'Task 3']);

		todoList.remove(0);
		expect(todoList.getAll()).toEqual(['Task 3']);

		todoList.remove(2);
		expect(todoList.getAll()).toEqual(['Task 3']);
	});
});
