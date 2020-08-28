//Core
import React, {useState} from 'react';

function TodoAdd({addTodo}) {
  let [title, setTodo] = useState('')

  function handlerSubmit(ev) {
    ev.preventDefault();

    if (title.trim()) {
      addTodo(title);
      setTodo('');
    }
  }

  function handlerOnChangeTitle(ev){
    setTodo(title = ev.target.value)
  }

  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={handlerOnChangeTitle}/>
        </label>
        <button type="submit">Add</button>

      </form>
    </div>
  )
}

export default TodoAdd;
