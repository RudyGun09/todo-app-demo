import React, { useState } from 'react'

import Todos from './components/Todos';  // Lalukan Import
=======

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish Progate React Course',
      completed: false,
    },
    {
      id: 2,
      title: 'Have lunch with Guru Domba',
      completed: false,
    },
    {
      id: 3,
      title: 'Study React with Ninja Ken',
      completed: false,
    },
  ])

  console.log(todos)

  return (

    
    <div style={styles.container}>
      <h1 style={styles.title}>My Todo List</h1>

{/*Berikan data komponen Todos */}
<Todos todos={todos} /> 
    <div>
      <h1>My Todo List</h1>
       {/* Gunakan method map di sini */}
       {todos.map((todo)=> {
        return<p key={todo.id}>{todo.title}</p>
       })}

    </div>
  )

const styles = {
  container: {
    textAlign: 'center',
    padding: '12px',
  },
  title: {
    fontSize: '36px',
  },
}



export default App