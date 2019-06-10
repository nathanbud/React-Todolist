import React from 'react';
import './App.css';
import TodoItem from './components/TodoItem'

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <h3>Todo List</h3>
       
      </header>
      <div>
        <TodoItem/>
      </div>
    </div>
  );
}

export default App;
