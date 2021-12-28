import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
  errorButton?: boolean
  disabled?: boolean
}

const SuperButton: React.FC<SuperButtonPropsType> = (
  {
    disabled, errorButton, className,
    ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
  },
) => {
  const finalClassName = `${errorButton ? s.errorButton : s.default} ${className}`

  return (
    <button
      disabled={disabled}
      className={finalClassName}
      {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
    />
  )
}

export default SuperButton
