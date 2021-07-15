import React from 'react'

function TodosFilters({ setDoneFilter, doneFilter }) {
  return (
    <div className="btn-group w-100 my-4">
      <button type="button"
            className={"btn " + (doneFilter === null ? 'btn-primary' : 'btn-outline-primary')}
            onClick={() => setDoneFilter(null)}>
        Все
      </button>
      <button type="button"
            className={"btn " + (doneFilter === true ? 'btn-primary' : 'btn-outline-primary')}
            onClick={() => setDoneFilter(true)}>
        Выполненные
      </button>
      <button type="button"
            className={"btn " + (doneFilter === false ? 'btn-primary' : 'btn-outline-primary')}
            onClick={() => setDoneFilter(false)}>
        Не выполненные
      </button>
    </div>
  )
}

export {TodosFilters}