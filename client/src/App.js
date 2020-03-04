import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'

const App = () => {
  return(
    <div>
      <h1>Contact List App</h1>
      <Link to="/contacts"><button>See All Contacts</button></Link>
      <Link to="/new-contact"><button>Add New Contact</button></Link>
    </div>
  )
}

export default App;