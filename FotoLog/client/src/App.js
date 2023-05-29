import './App.css';
import React, {useState} from 'react';
import {Login} from './components/login';
import {Register} from './components/register';
import {NavBar} from './components/navbar';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className='App'>
      <NavBar/>
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
      }
    </div>
  );
}

export default App;
