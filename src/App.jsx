import React, { useState, useCallback, useEffect } from 'react';

function App() {
  // console.clear()
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
    for (let i = 1; i <= length; i++) {
      console.log(str);
      const char1=Math.random()*str.length
      console.log(char1);
      const char= Math.floor(Math.random()*str.length+1)
      console.log(char);
      newPasword+=str.charAt(char) 
    }
    setPassword(newPasword)
    },[length,number,character,setPassword])
    useEffect(()=>{
      passworGenrat()
    },[length,number,character,setPassword])
  return (
    <>

  <br />
  <br />
  
  <div className='text-white max-w-xl mx-auto bg-gray-700 flex px-8 py-10 flex-col rounded-lg shadow-md gap-2' >
  <h1 className='text-white text-center font-bold font-mono text-4xl'>Password Genrators</h1>
  <br />
  <div className='flex justify-center align-middle gap-2'>
<input className='w-full outline-none text-black  bg-white rounded-lg h-10' type="text "placeholder='password' readOnly value={Password}/>
<button className='w-40 h-10 rounded-md  bg-blue-400 text-white'>Copy</button>
</div>
<div className='flex gap-4'>
<label htmlFor="character">character</label>
<input defaultChecked={character}  type="checkbox" id='character'  value={character}  onChange={(e)=>setCharacter((prev)=> !prev)}/>
</div>
<div className='flex gap-x-7'>
<label htmlFor="number">number</label>
<input type="checkbox" defaultChecked={number} id='number' value={number} onChange={(e)=>setNumber((prev)=> !prev)} />
</div>
<div className='flex gap-2'>
  <label>length:{length}</label>
  <input type="range" value={length} min={6} max={100} onChange={(e)=> setLength(e.target.value)}/>
</div>
  </div>
    </>
  )
}

export default App
