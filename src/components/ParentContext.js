import React from 'react';
import { useState } from 'react';
import User from './User';
import { UserContext } from './Context01';

function ParentContext () {
    const [UserOne, setUserOne] = useState("moemen");
    const Values = {UserOne, setUserOne}
  return (
    <UserContext.Provider value = {Values}>
        <User/>
    </UserContext.Provider>
  )
}

export default ParentContext