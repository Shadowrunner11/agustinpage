import { makeStyles, Typography } from "@material-ui/core"
import clsx from "clsx"
import { useLooper } from "../../hooks"


const LoopedText = ({data}: {data: any[]})=>{
  const classes =  useStyles()

  const [index] = useLooper({limit:2*data.length-1, time: 2000})

  return(
      <Typography className={clsx({[classes.animatedText]:!(index%2)})}>
        {data[Math.floor(index/2)]}
      </Typography>   
  )
}

const useStyles = makeStyles(({transitions})=>({
  animatedText:{
    animation: `$animation1 1s ${transitions.easing.easeInOut}`,
    position: 'relative',
    opacity: 1
  },
  '@keyframes animation1':{
    '0%':{
      transform: 'translateX(20px)',
      opacity: 0,
    }
  }
}), {name: 'AnimtedText'})

export default LoopedText