import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PathOption from '../../types/PathOption'
import InputArea from './components/InputArea'
import MessageSection from './components/MessageSection'

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    height: '100%',
    width: '100%'
  },
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%'
  }
}))

const HomePage: React.FC<PathOption<{}, {}>> = React.memo(() => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <MessageSection />
        <InputArea />
      </div>
    </div>
  )
})

export default HomePage