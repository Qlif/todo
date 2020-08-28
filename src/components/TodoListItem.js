//Core
import React from 'react';

function TodoListItem({todo, index, onCopmplite,removeTodo}){
  let clases=[]
  if(todo.done){
    clases.push('done')
  }
  return(
    <li className={'li_class'}>
      <span className={clases.join(' ')}>
        <input
          type='checkbox'
          onChange={()=>onCopmplite(todo.id)}
          checked={todo.done}
        />
        {index +1 }
        {todo.title}
      </span>
      <button onClick={()=>removeTodo(todo.id)}>&times;</button>
    </li>
  );
}
export default TodoListItem
