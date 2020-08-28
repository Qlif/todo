//Core
import React, {useState} from 'react';
//Components
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';

function Todo() {

  const [todos, setTodos] = useState([
    {id: 1, done: false, title: "Learn base js"},
    {id: 2, done: false, title: "Create React App"},
    {id: 3, done: false, title: "Create Todo List"}
  ]);

  function onCopmplite(id) {
    setTodos(todos.map(items => {
      if (items.id === id) {
        items.done = !items.done
      }
      return items;
    }))
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(todo) {
    setTodos(
      todos.concat([
        {
          id: Date.now(),
          done: false,
          title: todo
        }
      ])
    )
  }

  return (
    <div>
      <h2>Todo List</h2>
      <TodoAdd addTodo={addTodo}/>
      <TodoList todos={todos} onCopmplite={onCopmplite} removeTodo={removeTodo}/>
    </div>);
}

export default Todo;
