import { useState } from 'react';
import './App.css';
import axios from 'axios';  

function App() {
  const [form,setForm]=useState({})
  // const [data,setData]=useState()

  
  const handleForm = (e) => {
  
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }
  
const handleSubmit = async(e) => {
  e.preventDefault()
  const response=await axios.post('http://localhost:8080/demo',form)
 console.log(response.data)
}

  return (
    <div className="App">
      <p>{JSON.stringify(form)}</p>
      <form onSubmit={handleSubmit} >
      <label htmlFor="email">Email:
      <input type="text" id='email' name='email' onChange={handleForm}/> 
      </label>
      <label htmlFor="password">password:
      <input type="text" id='password' name='password' onChange={handleForm}/> 
      <input type="submit" value="submit form" />
      </label>
      </form>
    </div>
  );
}

export default App;
