import React, {useState} from 'react'
import {ActionTypes, checkAgeAC, homeWorkReducer, sortDownAC, sortUpAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

export type UserType = {
  _id: number
  name: string
  age: number
}

const initialPeople: Array<UserType> = [
  {_id: 0, name: 'Кот', age: 3},
  {_id: 1, name: 'Александр', age: 66},
  {_id: 2, name: 'Коля', age: 16},
  {_id: 3, name: 'Виктор', age: 44},
  {_id: 4, name: 'Дмитрий', age: 40},
  {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
  const [people, setPeople] = useState<Array<UserType>>(initialPeople)

  const finalPeople = people.map((p: UserType) => (
    <div style={{marginBottom: '5px'}} key={p._id}>
      {p.name}, {p.age} years old
    </div>
  ))

  const sortUp = () => setPeople(homeWorkReducer(initialPeople, sortUpAC()))
  const sortDown = () => setPeople(homeWorkReducer(initialPeople, sortDownAC()))
  const checkAge = () => setPeople(homeWorkReducer(initialPeople, checkAgeAC(18)))



  return (
    <div>
      {finalPeople}
      <div><SuperButton onClick={sortUp}>sort up-&gt;down</SuperButton></div>
      <div><SuperButton onClick={sortDown}>sort down-&gt;up</SuperButton></div>
      <div><SuperButton onClick={checkAge}>check 18</SuperButton></div>

    </div>
  )
}

export default HW8
