import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    color: theme.palette.text.primary,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderTop: `1px solid ${theme.palette.text.primary}`,
    height: 36
  },
  icon: {
    width: 24,
    height: 24
  },
  input: {
    width: '100%',
    backgroundColor: theme.palette.background.default,
    fontSize: theme.typography.fontSize,
    border: 'none',
    color: theme.palette.text.primary,
    caretColor: theme.palette.text.primary,
    '&:focus': {
      outline: 'none'
    }
  }
}))

const InputArea: React.FC = React.memo(() => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <ArrowForwardIosIcon className={classes.icon} />
      <input
        className={classes.input}
        autoFocus
      ></input>
    </div>
  )
})

export default InputArea