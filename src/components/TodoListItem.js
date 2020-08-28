//Core
import React from 'react';

function TodoListItem({todo, index, onComplite,removeTodo}){
  let clases=[]
  if(todo.done){
    clases.push('done')
  }

  function handlerOnChangeСheckbox(){
    onComplite(todo.id)
  }

  function handlerOnClickRemove(){
    removeTodo(todo.id)
  }

  return(
    <li className={'li_class'}>
      <span className={clases.join(' ')}>
        <input
          type='checkbox'
          onChange={handlerOnChangeСheckbox}
          checked={todo.done}
        />
        {index +1 }
        {todo.title}
      </span>
      <button onClick={handlerOnClickRemove}>&times;</button>
    </li>
  );
}
export default TodoListItem
