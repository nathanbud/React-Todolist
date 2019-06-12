import React from 'react'

const TodoItem = (props) =>{
    return(
        <div className="todo-list">
       <p> <input type="checkbox" checked = {props.todo.completed} onChange = {() => props.handleChange(props.todo.id)}/> {props.todo.list}</p>
        </div>
    )
}  

export default TodoItem