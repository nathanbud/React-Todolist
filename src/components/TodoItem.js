import React from 'react'

const TodoItem = (props) =>{

    const completedStyle = {
        fontStyle: "italic",
        color: "cdcdcd",
        textDecoration: "line-through"
    }

    return(
        <div className="todo-list">
        <input 
                type="checkbox" 
                checked = {props.todo.completed} 
                onChange = {() => props.handleChange(props.todo.id)}
            /> 
            <p style = {props.todo.completed ? completedStyle : null}>{props.todo.list}</p>
        </div>
    )
}  

export default TodoItem