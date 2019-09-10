import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import Member from './Components/Member';

function App() {
  const [user, setUser] = useState([
    {
      name: 'Aaron',
      position: 'Front End Developer',
      hobby: 'Video Games',
      passion: 'Technology'
    },
    {
      name: 'Tom',
      position: 'Back End Developer',
      hobby: 'Snowboarding',
      passion: 'Quantum Physics'
    },
    {
      name: 'Sarah',
      position: 'Dev Ops Lead',
      hobby: 'Sculpting',
      passion: 'Local Politics'
    }
  ]);

 

  return (
    <div className="App">
      {console.log(user)}
      <Form user={user} setUser={setUser} />
      <Member user={user} />
    </div>
  );
}

export default App;
