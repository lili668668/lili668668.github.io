import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    color: theme.palette.text.primary
  }
}))

const MessageSection: React.FC = React.memo(() => {
  const classes = useStyles()
  return (
    <div>
      
    </div>
  )
})

export default MessageSection