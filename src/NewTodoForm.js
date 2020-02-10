import React from 'react';
import './NewTodoForm.css'

const NewTodoForm = (props) => {
    return (
        <div className="NewTodoForm-container">
            <div className="NewTodoForm">
                <form onSubmit={props.handleSubmit}>
                    <h2>New Todo</h2>
                    <div className="NewTodoForm-task">
                        <input
                            type="text"
                            name="todo"
                            value={props.todo}
                            onChange={props.handleChange} />
                        <button>Add Todo</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewTodoForm


