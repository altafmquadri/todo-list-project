import React from 'react';
import './Todo.css'
import NewTodoForm from './NewTodoForm';


const Todo = (props) => {


    const handleClick = (t, props) => {
        props.edit(t)
        // let newInput
        // let tag = document.getElementById(t.id)
        // let button = document.createElement('button')
        // button.innerText = 'edit'
        // newInput = document.createElement('input')
        // newInput.innerHTML = t.task
        // tag.appendChild(newInput)
    }

    const renderEditForm = (t, props) => {
        return (
            <form onSubmit={props.submitEdit}>
                <input
                    type="text"
                    name='todo'
                    value={props.todo.task}
                    onChange={props.editChange}>
                </input>
                <button>save</button>
            </form>
        )
    }


    const renderTodos = (props) => {
        return props.toDos.map(
            t => <div
                className="Todo-task"
                key={t.id}>
                {props.editing && props.id ? renderEditForm(t, props) :
                    t.completed ? <h2 id={t.id} onClick={() => handleClick(t)} style={{ textDecorationLine: 'line-through' }}>{t.task}</h2>
                        :
                        <h2 id={t.id} onClick={() => !props.editing && handleClick(t, props)} >{t.task}</h2>}
                <div className="Todo-button">
                    <button onClick={() => props.markComplete(t)}>✔</button>
                    <button onClick={() => props.deleteTodo(t.id)}>❌</button>
                </div>
            </div>)
    }

    return (
        renderTodos(props)

    )
}

export default Todo