import React, {useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'

export type OptionType = 'x' | 'y' | 'z'
const arr: Array<string> = ['x', 'y', 'z']

function HW7() {
  const [value, onChangeOption] = useState<string>(arr[1])

  return (
    <div>
      <div>
        <SuperSelect
          options={arr}
          value={value}
          onChangeOption={onChangeOption}
        />
      </div>
      <div>
        <SuperRadio
          name={'radio'}
          options={arr}
          value={value}
          onChangeOption={onChangeOption}
        />
      </div>
    </div>
  )
}

export default HW7
