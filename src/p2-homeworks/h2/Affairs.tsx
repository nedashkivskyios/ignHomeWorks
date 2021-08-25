import React from 'react'
import Affair from './Affair'
import {AffairDataType, AffairType, FilterType} from './HW2'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: AffairDataType
    setFilter: (setFilter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => { props.setFilter('all') } // need to fix
    const setHigh = () => {props.setFilter('high')}
    const setMiddle = () => {props.setFilter('middle')}
    const setLow = () => {props.setFilter('low')}

    return (
        <div>

            {mappedAffairs}
          <div className={s.affairs}>
            <SuperButton onClick={setAll}>All</SuperButton>
            <SuperButton onClick={setHigh}>High</SuperButton>
          <SuperButton onClick={setMiddle}>Middle</SuperButton>
            <SuperButton onClick={setLow}>Low</SuperButton>
        </div>
        </div>
)
}

export default Affairs
