import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
  const [timerId, setTimerId] = useState<number>(0)
  const [date, setDate] = useState<Date>(new Date())
  const [show, setShow] = useState<boolean>(false)
  const [disabler, setDisabler] = useState(false)

  const stop = () => {
    clearInterval(timerId)
    setDisabler(false)
  }
  const start = () => {
    const id: number = window.setInterval(() => {
      console.log('log')
      setDate(new Date())
    }, 1000)
    setTimerId(id)
    setDisabler(true)
  }

  const onMouseEnter = () => {
    setShow(true)
  }
  const onMouseLeave = () => {
    setShow(false)
  }
  let timeToTwoInteger = (time: number) => time < 10 ? `0${time}` : time

  enum months {
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",

  }

  let hours = timeToTwoInteger(date.getHours())
  let minutes = timeToTwoInteger(date.getMinutes())
  let seconds = timeToTwoInteger(date.getSeconds())
  let day = date.getDay()
  let month = date.getMonth().toLocaleString()
  let year = date.getFullYear()

  const stringTime = `${hours}:${minutes}:${seconds}`  // fix with date
  const stringDate = `${day} ${months[+month]} ${year}` // fix with date

  return (
    <div>
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {stringTime}
      </div>

      {show && (
        <div>
          {stringDate}
        </div>
      )}

      <SuperButton disabled={disabler} onClick={start}>start</SuperButton>
      <SuperButton disabled={!disabler} onClick={stop}>stop</SuperButton>

    </div>
  )
}

export default Clock
