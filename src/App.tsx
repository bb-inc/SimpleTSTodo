import React from 'react';

import { Header } from './components/Header/Header';
import { TodoPanel } from './components/TodoPanel/TodoPanel';
import { TodoList } from './components/TodoList/TodoList';

import styles from './App.module.css';

export const App = () => {
	const [todos, setTodos] = React.useState<Array<Todo>>([]);
	const [todoIdForEdit, setTodoIdForEdit] = React.useState<Todo['id'] | null>(null);

	const selectTodoIdForEdit = (id: Todo['id']) => {
		setTodoIdForEdit(id); 	
	}

	const addTodo = ({name, description}: Omit<Todo, 'checked' | 'id'>) => {
		setTodos([...todos, { id: todos.length+1, description, name, checked: false }]);
	}

	const checkTodo = (id: Todo['id']) => {
		setTodos(
			todos.map((todo) => {
				if (todo.id === id) {
					return {...todo, checked : !todo.checked};
				}

				return todo;
			})
		)
	}

	const deleteTodo = (id: Todo['id']) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	}

	const changeTodo = ({name, description}: Omit<Todo, 'checked' | 'id'>) => {
		setTodos(
			todos.map((todo) => {
				if (todo.id === todoIdForEdit) {
					return {...todo, name, description};
				}

				return todo;
			})
		)
		setTodoIdForEdit(null);
	}

  	return (
    	<div className={styles.app_container}>
      		<div className={styles.container}>
        		<Header todoCount={todos.length}/>
        		<TodoPanel mode='add' addTodo={addTodo}/>
				<TodoList 
					todos={todos}
					checkTodo={checkTodo} 
					deleteTodo={deleteTodo} 
					selectTodoIdForEdit={selectTodoIdForEdit}
					todoIdForEdit={todoIdForEdit}
					changeTodo={changeTodo}
				/>
      		</div>
    	</div>
  	);
};

