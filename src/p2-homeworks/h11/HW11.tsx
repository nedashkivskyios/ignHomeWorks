import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
  const [value1, setValue1] = useState(10)
  const [value2, setValue2] = useState(100)

  const changeRange = (value: number) => {
    setValue1(value)
  }
  const changeDoubleRange = (value1: number, value2: number) => {
    setValue1(value1)
    setValue2(value2)
  }

  return (
    <div style={{width: "300px"}}>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-start"}}>
        <div style={{marginRight: "15px"}}>{value1}</div>
        <SuperRange
          value={value1}
          onChangeRange={changeRange}
        />
      </div>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
        <div style={{marginRight: "15px"}}>{value1}</div>
        <SuperDoubleRange
          value={[value1, value2]}
          onChangeRange={changeDoubleRange}
        />
        <div style={{marginLeft: "15px"}}>{value2}</div>
      </div>
    </div>
  )
}

export default HW11
