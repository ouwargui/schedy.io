'use client'

import { useState, useEffect } from 'react'
import { AnimatedNumber } from './animated-number'


const TARGET_DATE = new Date('2025-01-15');

function calculateTimeLeft() {
  const difference = +TARGET_DATE - +new Date()
  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  }

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    }
  }

  return timeLeft
}

type Time = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<Time>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-2xl font-semibold">Countdown</h2>
      <div className="flex space-x-4">
        {timeLeft && Object.entries(timeLeft).map(([interval, value]) => (
          <div key={interval} className="flex flex-col items-center">
            <AnimatedNumber value={value} />
            <span className="text-sm mt-2">{interval}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

