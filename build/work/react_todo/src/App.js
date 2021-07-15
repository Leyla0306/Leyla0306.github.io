import React, { useState } from 'react'
import { AddTodoForm } from './components/add-todo-form/AddTodoForm'
import { TodoList } from './components/todo-list/TodoList'
import {TodosFilters} from './components/filters/TodosFilters'

function App() {
  // State
  let [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || [])
  let [doneFilter, setDoneFilter] = useState(null)
  let [searchFilter, setSearchFilter] = useState('')

  const storeTasks = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
    setTasks(tasks)
  }

  // Actions
  const addTodo = (todoName) => {
    storeTasks([...tasks, {
      name: todoName,
      done: false,
      id: Math.random().toString()
    }])
  }

  const deleteTodo = (idx) => {
    storeTasks([...tasks.slice(0, idx), ...tasks.slice(idx + 1)])
  }

  const toggleDone = (idx) => {
    // 1. Получить обект таски
    // 2. Изменить его
    // 3. Записать новый измененный объект в новый массив
    let task = tasks[idx]
    let newTask = {...task, done: !task.done}

    storeTasks([...tasks.slice(0, idx), newTask, ...tasks.slice(idx + 1)])
  }

  const filterredTasks = tasks
    .filter((task) => {
      if (doneFilter === null) return true
      return task.done === doneFilter
    }).filter(function(task) {
      return task.name.toLowerCase().indexOf(searchFilter.toLowerCase()) >= 0
    })

  // Render
  return (
    <div className="App">
      <div className="container py-3">
        <h1 className="display-1 text-center mt-4 mb-5">Todo List</h1>
        {/* Filter */}
        <TodosFilters setDoneFilter={setDoneFilter} doneFilter={doneFilter} />
        {/* Search */}
        <input type="text"
               className="form-control mb-4"
               placeholder="Поиск..."
               onChange={(e) => setSearchFilter(e.target.value)}
        />
        {/* Todo List */}
        <TodoList tasks={filterredTasks} deleteTodo={deleteTodo} toggleDone={toggleDone} />
        {/* Add Todo Form */}
        <AddTodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}

export { App }