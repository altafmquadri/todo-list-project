import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm'
import Todo from './Todo'
import uuid from 'uuid/v4'
import './TodoList.css'
import Speech from './Speech'

class TodoList extends Component {
    state = {
        toDos: [],
        todo: '',
        editTodo: '',
        recording: false
    }

    recordTodo = (v) => {
        this.setState({ todo: v })
    }

    record = () => {
        this.setState({ recording: !this.state.recording })
    }

    submitEdit = (e) => {
        e.preventDefault()
        this.setState(
            {
                editTodo: { ...this.state.editTodo, editing: false }
            }, () => this.setState(
                {
                    toDos: this.state.toDos.map(stT => {
                        if (this.state.editTodo.id === stT.id) {
                            return this.state.editTodo
                        } else {
                            return stT
                        }
                    }),
                    editTodo: ''
                }))
    }

    editChange = e => {
        this.setState(
            {
                editTodo: { ...this.state.editTodo, task: e.target.value }
            });
    }

    edit = (t) => {
        this.setState(
            {
                editTodo: this.state.toDos.find(stT => t.id === stT.id),
            }, () => this.setState(
                {
                    editTodo: { ...this.state.editTodo, editing: true }
                }, () => this.setState({
                    toDos: this.state.toDos.map(stT => {
                        if (stT.id === t.id) {
                            return this.state.editTodo
                        } else {
                            return stT
                        }
                    })
                })))
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
            task: this.state.todo,
            editing: false
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
                            editTodo={this.state.editTodo}
                            editChange={this.editChange}
                            markComplete={this.markComplete}
                            submitEdit={this.submitEdit}
                            deleteTodo={this.deleteTodo} />
                        <NewTodoForm
                            todo={this.state.todo}
                            handleSubmit={this.handleSubmit}
                            handleChange={this.handleChange} />
                        <Speech
                            recording={this.state.recording}
                            record={this.record}
                            recordTodo={this.recordTodo} />
                    </div>
                </div>
            </div>
        )
    }
}

export default TodoList;