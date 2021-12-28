import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import {OptionType} from "../../HW7";

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
  options?: Array<string>
  onChangeOption?: (option: string) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
  {
    type, name,
    options, value,
    onChange, onChangeOption,
    ...restProps
  },
) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChangeOption) {
      onChangeOption(e.currentTarget.value as OptionType)
    }
  }

  const mappedOptions: any[] = options ? options.map((o, i) => (// map options with key
    <label key={name + '-' + i}>
      <input
        name={name}
        type={'radio'}
        value={o}
        onChange={onChangeCallback}
        checked={o === value}
      />
      {o}
    </label>
  )) : []

  return (
    <>
      {mappedOptions}
    </>
  )
}

export default SuperRadio
