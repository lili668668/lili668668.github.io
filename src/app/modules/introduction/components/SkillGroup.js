import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { useTranslation } from 'react-i18next/hooks'
import Typography from '@material-ui/core/Typography'
import Skill from './Skill'

const useStyles = makeStyles(theme => ({
  padding: {
    padding: theme.spacing.unit
  }
}))

function SkillGroup (props) {
  const classes = useStyles()
  const [t] = useTranslation()
  const { title, skills } = props

  return (
    <section className={classes.padding}>
      <Typography variant="h5" className={classes.padding}>{t(title)}</Typography>
      {
        skills.map(({ title, description }, index) => (<Skill key={index} title={title} description={description} />))
      }
    </section>
  )
}

export default SkillGroup
