import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import {OptionType} from "../../HW7";

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
  options?: Array<OptionType>
  onChangeOption?: (option: OptionType) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
  {
    options,
    onChange, onChangeOption,
    ...restProps
  }
) => {
  const mappedOptions: any[] = options ?
    options.map((el, index) =>
      <option value={el} key={el + '-' +index}>{el}</option>
    ) : []; // map options with key

  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChangeOption) {
      onChangeOption(e.currentTarget.value as OptionType)
    }

  }

  return (
    <select onChange={onChangeCallback} {...restProps}>
      {mappedOptions}
    </select>
  )
}

export default SuperSelect
