import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const [length,setLength]=useState=(10)
const [number,setNumber]=useState=(false)
const [character,setCharacter]=useState=(false)
const [Password,setPassword]=useState=("")
let passworGenrat=useCallback(()=>{
  let newPasword=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  let num=12345678910
  let specialCharacter="!@#$%^&*-_+=[]{}~`"
  if (num) str+=num
  if (character) str+=specialCharacter
  },[])
function App() {
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
