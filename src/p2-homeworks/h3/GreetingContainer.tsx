import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
  users: Array<UserType>
  addUserCallback: (name: string) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
  const [name, setName] = useState<string>('')
  const [error, setError] = useState<string>('Error! Input require text')

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
    let enteredText = e.currentTarget.value

    if (enteredText) {
      setName(enteredText)
      setError('')
    } else {
      setName('')
      setError('Error! Input require text')
    }
  }
  const addUser = () => {
    if (!!name.length) {
      addUserCallback(name)
      alert(`Hello ${name} !`)
      setName('')
      setError('')
    } else {
      alert(`Error! Input is EMPTY!`)
      setName('')
      setError('')
    }

  }

  const totalUsers = users.length // need to fix

  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      error={error}
      totalUsers={totalUsers}
    />
  )
}

export default GreetingContainer
