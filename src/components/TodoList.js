//Core
import React from 'react';
//Components
import TodoListItem from './TodoListItem';

function TodoList (props){
  return(
    <ul className={"ul_class"}>{
      props.todos.map((todo, index)=> {
        return <TodoListItem
          todo={todo}
          key={todo.id}
          index={index}
          onCopmplite={props.onCopmplite}
          removeTodo={props.removeTodo}
        />
      })
    }
    </ul>
  );
}
export default TodoList;
