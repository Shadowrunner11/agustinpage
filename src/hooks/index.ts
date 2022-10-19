import { useEffect, useState } from "react"

export const useLooper = ({limit, time}:{limit: number, time: number})=>{
  const [index, setIndex] = useState(0)

  useEffect(()=>{
    const timeOut = setTimeout(()=>{
      setIndex(prev => prev === limit ? 0: prev + 1)
    },time)
    return () => clearTimeout(timeOut)
  },[index])

  return [index]
}

export const useTimer = ({time}: {time: number}) =>{
  const [isEnded, setIsEnded] = useState(false)
  console.log("🚀 ~ file: index.ts ~ line 18 ~ useTimer ~ isEnded", isEnded)
  
  setTimeout(()=>{
    setIsEnded(true)
  }, time)

  return isEnded
}