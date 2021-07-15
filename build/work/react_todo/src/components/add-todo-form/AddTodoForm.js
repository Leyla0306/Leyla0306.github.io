import React, {useState} from 'react'

function AddTodoForm(props) {
  let [newTaskName, setNewTaskName] = useState('')

  // ######################

  const onAddTodo = (e) => {
    e.preventDefault()

    if (newTaskName.trim() == '') {
      return
    }

    props.addTodo(newTaskName)
    setNewTaskName('')
  }

  const onNewTaskNameChange = (e) => {
    setNewTaskName(e.target.value)
  }

  // ######################

  return (
    <form className="row g-3 mt-1" onSubmit={onAddTodo}>
      <div className="col">
        <input onChange={onNewTaskNameChange} value={newTaskName} type="text" className="form-control" placeholder="Введите название задачи" />
      </div>
      <div className="col-auto">
        <button className="btn btn-primary">Добавить</button>
      </div>
    </form>
  )
}

export { AddTodoForm }
