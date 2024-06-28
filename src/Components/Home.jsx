import React, { useEffect } from 'react'
import Header from './Header'
import { useNavigate } from 'react-router';

export default function Home() {
  let navigate=useNavigate()
  const isAuthenticated=localStorage.getItem('token')!==null;
  useEffect(()=>
  {
    if(!isAuthenticated){
      navigate('/login')
    }
  })
    return (
    <div>
      <Header></Header>
    </div>
  )
}
