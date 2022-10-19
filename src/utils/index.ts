export const sleep = (ms: number | undefined) => new Promise(res => {
  const timer = setTimeout(()=>{
    clearTimeout(timer)
    res(true)
  }, ms)
})