'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import { FiClock } from 'react-icons/fi'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
  isBeforeEvent: boolean
}

const Countdown = () => {
  const pathname = usePathname()
  const router = useRouter()

  const calculateTimeLeft = useCallback(() => {
    const eventStart = new Date('2024-11-14T18:00:00')
    const eventEnd = new Date('2024-11-17T23:59:59')

    const now = new Date()
    const isBeforeEvent = now < eventStart
    const isAfterEvent = now > eventEnd

    if (isAfterEvent) return null

    const difference = isBeforeEvent
      ? eventStart.getTime() - now.getTime()
      : eventEnd.getTime() - now.getTime()

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isBeforeEvent,
    }
  }, [])

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calculateTimeLeft)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [calculateTimeLeft])

  if (!timeLeft) return null

  const push = () => {
    router.push('/consultoria-online')
  }

  return (
    <div className="w-full fixed bottom-4 z-50 p-4 bg-brandBlack text-brandWhite rounded-lg shadow-lg animate-pulse border-2 border-brandRed-500 sm:right-4 sm:w-96">
      <div className="flex items-center justify-center">
        <FiClock className="mr-2 text-brandRed-500 text-xl" />
        {timeLeft.isBeforeEvent ? (
          <h2 className="text-xl font-extrabold uppercase text-brandRed-500">
            Evento começa em:
          </h2>
        ) : (
          <h2 className="text-xl font-extrabold uppercase text-brandRed-500">
            Evento termina em:
          </h2>
        )}
      </div>

      <div className="flex justify-center space-x-2 mt-2 text-lg font-bold">
        <div className="flex flex-col items-center">
          <span className="text-3xl">{timeLeft.days}</span>
          <span className="text-xs uppercase text-gray-300">Dias</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl">{timeLeft.hours}</span>
          <span className="text-xs uppercase text-gray-300">Horas</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl">{timeLeft.minutes}</span>
          <span className="text-xs uppercase text-gray-300">Minutos</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl">{timeLeft.seconds}</span>
          <span className="text-xs uppercase text-gray-300">Segundos</span>
        </div>
      </div>

      <p className="mt-4 text-sm text-center">
        Aproveite 15% de desconto nos planos trimestrais, semestrais e anuais da
        consultoria online!
      </p>

      {!timeLeft.isBeforeEvent &&
        (pathname === '/consultoria-online' ? (
          <a
            href="#cta"
            className="block btn-shadow w-full mt-2 p-2 bg-brandRed-500 text-brandWhite font-bold rounded transition-all duration-30 text-center"
          >
            Garanta Agora
          </a>
        ) : (
          <button
            className="btn-shadow w-full mt-2 p-2 bg-brandRed-500 text-brandWhite font-bold rounded transition-all duration-300"
            type="button"
            onClick={push}
          >
            Garanta Agora
          </button>
        ))}
    </div>
  )
}

export default Countdown
