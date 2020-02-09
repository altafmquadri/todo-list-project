import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm'
import Todo from './Todo'
import uuid from 'uuid/v4'
import './TodoList.css'

class TodoList extends Component {
    state = {
        toDos: [],
        todo: ''
    }

    deleteTodo = id => {
        this.setState(
            {
                toDos: this.state.toDos.filter(t => t.id !== id)
            })
    }

    markComplete = (t) => {
        console.log(t)
        t.completed = !t.completed
        this.setState(
            {
                toDos: this.state.toDos.map(stT => {
                    if (stT.id === t.id) {
                        return t
                    } else {
                        return stT
                    }
                })
            })
        console.log(this.state.toDos)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (!this.state.todo) return
        let newTodo = {
            id: uuid(),
            completed: false,
            task: this.state.todo
        }
        this.setState({
            toDos: [...this.state.toDos, newTodo],
            todo: ''
        })
    }

    handleChange = e => {
        this.setState(
            {
                [e.target.name]: e.target.value
            })
    }

    render() {
        return (
            <div>
                <h1>Todo List!</h1>
                <div className="TodoList-container">
                    <div className="Todo-wrapper">
                        <Todo
                            toDos={this.state.toDos}
                            markComplete={this.markComplete}
                            deleteTodo={this.deleteTodo} />
                        <NewTodoForm
                            todo={this.state.todo}
                            handleSubmit={this.handleSubmit}
                            handleChange={this.handleChange} />
                    </div>
                </div>
            </div>
        )
    }
}

export default TodoList;