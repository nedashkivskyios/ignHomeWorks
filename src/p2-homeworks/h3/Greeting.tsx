import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
  name: string
  setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
  addUser: () => void
  error: string
  totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
  {name, setNameCallback, addUser, error, totalUsers}
) => {


  return (
    <div className={s.someClass}>
      <SuperInputText
        value={name}
        onChange={setNameCallback}
        error={error}
      />

      <SuperButton onClick={addUser}>add</SuperButton>
      <span>{totalUsers}</span>
    </div>
  )
}

export default Greeting
