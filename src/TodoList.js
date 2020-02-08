import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm'
import Todo from './Todo'

class TodoList extends Component {
    state = {}
    render() {
        return (
            <div>
                <NewTodoForm />
                <Todo />
            </div>
        )
    }
}

export default TodoList;