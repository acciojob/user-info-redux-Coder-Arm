
import React, { useState } from "react";
import './../styles/App.css';
import { useDispatch, useSelector } from "react-redux";
import { dataNameFn,dataMailFn } from "../redux/reducer";
const App = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const myState = useSelector(state => state.data)
  console.log(myState);
const dispatch = useDispatch();
  function handleName(e){
    setName(e.target.value)
  dispatch(dataNameFn(e.target.value));
  }

  function handleEmail(e){
    setEmail(e.target.value)
  dispatch(dataMailFn(e.target.value));
  }
  return (
    <div>
       <div>Name : <input type="text" onChange={handleName}/></div>
       <div>Email : <input type="email" onChange={handleEmail}/></div>
       <div>Current values in store : </div>
       <div>Name : {myState.name}</div>
       <div>Email : {myState.email}</div>
    </div>
  )
}

export default App
