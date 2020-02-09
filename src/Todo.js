import React from 'react';
import './Todo.css'

const Todo = (props) => {
    const handleClick = (t, props) => {
        props.edit(t)
    }

    const renderEditForm = (t, props) => {
        return (
            <form onSubmit={props.submitEdit}>
                <input
                    type="text"
                    name='todo'
                    value={props.editTodo.task}
                    onChange={props.editChange}>
                </input>
                <button>save</button>
            </form>
        )
    }

    const renderTodos = (props) => {
        return props.toDos.map(
            t => <div className="Todo-task" key={t.id}>
                {/* does the todo have an attribute of editing equal to true? */}
                {t.editing ? renderEditForm(t, props)
                // has the todo been completed for strike-through styling
                    : t.completed ?
                    // if yes reder the line-throuh
                        <h2 id={t.id} onClick={() => handleClick(t, props)}
                            style={{ textDecorationLine: 'line-through' }}>
                            {t.task}</h2>
                            // else render without line-through
                        : <h2 id={t.id} onClick={() => handleClick(t, props)} >{t.task}</h2>}

                <div className="Todo-button">
                    <button
                        onClick={() => props.markComplete(t)}>
                        <span role="img" aria-label="check">✔</span></button>
                    <button
                        onClick={() => props.deleteTodo(t.id)}>
                        <span role='img' aria-label="x">❌</span></button>
                </div>
            </div>)
    }

    return (
        renderTodos(props)
    )
}

export default Todo