import React from 'react'
import Slider from '@mui/material/Slider';

type SuperDoubleRangePropsType = {
  onChangeRange?: (value1: number, value2: number) => void
  value?: [number, number]
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
  {
    onChangeRange, value,
  },
) => {
  const [valueRange, setValueRange] = React.useState<number[] | undefined>(value);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValueRange(newValue as number[]);
    if (valueRange && onChangeRange) {
      onChangeRange(valueRange[0], valueRange[1])
    }
  };

  return (
    <Slider
      getAriaLabel={() => 'Just range'}
      value={valueRange}
      onChange={handleChange}
      valueLabelDisplay="auto"
      disableSwap
    />
  )
}

export default SuperDoubleRange
