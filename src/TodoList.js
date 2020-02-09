import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm'
import Todo from './Todo'
import uuid from 'uuid/v4'
import './TodoList.css'

class TodoList extends Component {
    state = {
        toDos: [],
        todo: '',
        editing: false
    }

    submitEdit = (e) => {
        e.preventDefault()
        this.setState(
            {
                toDos: this.state.toDos.map(stT => {
                    if (this.state.todo.id === stT.id) {
                        return this.state.todo
                    } else {
                        return stT
                    }
                }),
                todo: '',
                editing: false
            })
    }

    editChange = e => {
        this.setState(
            {
                todo: { ...this.state.todo, task: e.target.value }
            });
    }

    edit = (t) => {
        this.setState(
            {
                editing: !this.state.editing,
                todo: this.state.toDos.find(stT => t.id === stT.id),

            }, () => this.setState({ id: this.state.todo.id }))
    }

    deleteTodo = id => {
        this.setState(
            {
                toDos: this.state.toDos.filter(t => t.id !== id)
            })
    }

    markComplete = (t) => {
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
                            edit={this.edit}
                            id={this.state.id}
                            todo={this.state.todo}
                            editing={this.state.editing}
                            editChange={this.editChange}
                            markComplete={this.markComplete}
                            submitEdit={this.submitEdit}
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