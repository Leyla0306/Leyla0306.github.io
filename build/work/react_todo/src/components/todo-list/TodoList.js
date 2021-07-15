import React from 'react'

function TodoList(props) {
  return (
    <ul className="list-group">
      {props.tasks.map((task, idx) => (
        <li className="list-group-item d-flex" key={task.id}>
          
          <span className={"w-100 " + (task.done ? 'text-decoration-line-through' : '')}>
            {task.name}
          </span>

          {task.done ? (
            <button className="btn btn-danger btn-sm py-0 ms-auto text-nowrap"
                    onClick={() => props.toggleDone(idx)}>
              Не выполнено
            </button>
          ) : (
            <button className="btn btn-primary btn-sm py-0 ms-auto text-nowrap"
                    onClick={() => props.toggleDone(idx)}>
              Выполнено
            </button>
          )}
          
          <button className="btn btn-sm py-0 ms-auto" onClick={() => props.deleteTodo(idx)}>
            Удалить
          </button>
        </li>
      ))}
    </ul>
  )
}

export { TodoList }