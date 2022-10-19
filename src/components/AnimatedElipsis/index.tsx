import { Box, makeStyles, Typography } from "@material-ui/core"
import {FiberManualRecord as DotIcon} from "@material-ui/icons"
import clsx from "clsx"
import { useTimer } from "../../hooks"


const AnimatedElipsis = ()=>{
  const classes = useStyles()
  const isEnded = useTimer({time: 4000})
  return(
    <>
      { !isEnded &&
        <Box className={classes.container}>
          <DotIcon className={classes.dot}/>
          <DotIcon className={clsx(classes.dot, classes.dotMiddle)}/>
          <DotIcon className={clsx(classes.dot, classes.dotEnd)}/>
        </Box>
      }
      {
        isEnded && 
        <Typography className={classes.text}>Hola como puedo ayudarte</Typography>
      }
    </>
    
  )
}

const useStyles = makeStyles(({spacing, transitions, palette})=>({
  container:{
    display: 'flex',
    gap: spacing(1),
    borderRadius: spacing(0.5),
    background:  palette.grey[400],
    height: 40,
    padding: spacing(1),
    alignItems: 'center'
  },
  dot:{
    opacity: 1,
    color: palette.grey[800],
    animation: `$dotStart 1.5s infinite ${transitions.easing.easeInOut}`
  },
  dotMiddle:{
    animationDelay: '250ms'
  },
  dotEnd:{
    animationDelay: '500ms'
  },
  '@keyframes dotStart':{
    '50%':{
      // transform: 'translateY(-10px)',
      opacity: 0
    }
  },
  text:{
    animation: `$appear 1s ${transitions.easing.easeInOut}`,
    opacity: 1
  },
  '@keyframes appear' :{
    '0%':{
      opacity: 0
    }
  }
}),{name: 'Elipsis'})

export default AnimatedElipsis