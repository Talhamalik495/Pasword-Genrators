import React, { useState, useCallback } from 'react';
import './App.css';

function App() {
  let [length,setLength]= useState(10)
  let [number,setNumber]= useState(false)
  let [character,setCharacter]= useState(false)
  let [Password,setPassword]= useState("")
  let passworGenrat=useCallback(()=>{
    let newPasword=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let num=12345678910
    let specialCharacter="!@#$%^&*-_+=[]{}~`"
    if (number) str+=num
    if (character) str+=specialCharacter
    if (character) str+=specialCharacter
    for (let i = 0; i < str.length; i++) {
      const char= Math.floor(Math.random()*str.length)
  
      
    }
    },[])
  return (
    <>
  <h1 className='text-white text-center font-bold font-mono text-4xl'>Password Genrators</h1>

  <div className='w-6/12 h-80 bg-orange-800 flex justify-center align-middle flex-col'>
<input className='w-96' type="text" />
<button className='w-40 bg-blue-400 text-white'>Copy</button>
  </div>
    </>
  )
}

export default App
