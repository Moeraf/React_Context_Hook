import React from 'react';
import { UserContext } from './Context01';
import { useContext } from 'react';

function Button () {
    const {setUserOne} = useContext(UserContext)
  return (
    <button onClick={()=>{setUserOne("marwa")}}>Change Name</button>
  )
}

export default Button