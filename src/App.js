import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem'
import todosData from './todosData'

class App extends Component {
  constructor(){
    super()

    this.state = {
      todos: todosData
    }
  // this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (id)=>{
    this.setState(prevState =>{
      const taskStatus = prevState.todos.map(item => {
        if (item.id === id){
          item.completed = !item.completed
        }
        return item
      });
      return{
        todos: taskStatus
      }
    }  
    )


  }

  render(){
    const todos = this.state.todos.map((item)=> {
      return <TodoItem key = {item.id} todo = {item} handleChange = {this.handleChange}/>
     });
     return (
       <div className="App">
         <header className="App-header">
   
         <h3>Todo List</h3>
          
         </header>
         <div>
           {todos}
         </div>
       </div>
     );
  }


}

export default App;
