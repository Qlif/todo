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
          onComplite={props.onComplite}
          removeTodo={props.removeTodo}
        />
      })
    }
    </ul>
  );
}
export default TodoList;
