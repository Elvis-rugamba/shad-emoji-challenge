import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatDateTime = (date: Date | string) => {
  const newDate = new Date(date)
  const year = newDate.getFullYear()
  const month = padZero(newDate.getMonth() + 1)
  const day = padZero(newDate.getDate())
  const hours = padZero(newDate.getHours())
  const minutes = padZero(newDate.getMinutes())

  return `${year}-${month}-${day} ${hours}:${minutes}`
}

const padZero = (number: number) => {
  return (number < 10 ? "0" : "") + number
}
