import React from 'react'
import Me from './Me'
import Skills from './Skills'
import Experience from './Experience'
import SideProjects from './SideProjects'

export default [
  { name: 'me', slide: (<Me key="me" />) },
  { name: 'skills', slide: (<Skills key="skills" />) },
  { name: 'experience', slide: (<Experience key="experience" />) },
  { name: 'side-projects', slide: (<SideProjects key="side-projects" />) }
]
