import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'

const TIME_VALUE = 300

const Timer = () => {
  const [startTimer, setStartTimer] = useState(true)
  const [time, setTime] = useState(TIME_VALUE)

  useEffect(() => {
    console.log(startTimer)
    if (startTimer) {
      const timer = setInterval(() => {
        setTime((time) => {
          if (time === 0) {
            clearInterval(timer)
            setStartTimer(false)
            return 0
          } else return time - 1
        })
      }, 1000)
    }
  }, [startTimer])

  const handleClick = () => {
    setStartTimer(true)
    setTime(TIME_VALUE)
  }

  return (
    <div className="flex items-center justify-between w-full">
      <div className="text-light-text text-sm">
        <p>
          {`${Math.floor(time / 60)}`.padStart(2, '0')}:
          {`${time % 60}`.padStart(2, '0')}
        </p>
      </div>
      <Button
        variant={'link'}
        type="submit"
        onClick={handleClick}
        className={`text-sm text-underline ${time > 0 ? 'opacity-50' : 'opacity-100'}`}
        disabled={time > 0}
      >
        Resend OTP
      </Button>
    </div>
  )
}

export default Timer
