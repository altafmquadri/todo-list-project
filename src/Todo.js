import React from 'react';
import './Todo.css'


const Todo = (props) => {
    const renderTodos = (props) => {
        return props.toDos.map(
            t => <div
                className="Todo-task"
                key={t.id}>
                {t.completed ? <h2 style={{ textDecorationLine: 'line-through' }}>{t.task}</h2>
                    :
                    <h2>{t.task}</h2>}
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