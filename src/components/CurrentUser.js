import React from 'react';
import { useContext } from 'react';
import { UserContext } from './Context01';

function CurrentUser () {
    const {UserOne} = useContext(UserContext)
  return (
    <div>{UserOne}</div>
  )
}

export default CurrentUser