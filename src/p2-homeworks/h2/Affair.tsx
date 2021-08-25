import React from 'react'
import {AffairType} from "./HW2";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from './Affairs.module.css'


type AffairPropsType = {
  // key не нужно типизировать
  affair: AffairType
  deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {

  const deleteCallback = () => {
    props.deleteAffairCallback(props.affair._id)
  }

  return (
    <div className={s.affair}>
      {props.affair.name}
      <SuperButton onClick={deleteCallback}>x</SuperButton>
    </div>
  )
}

export default Affair
