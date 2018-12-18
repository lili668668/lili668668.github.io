import React, { lazy } from 'react'
import { Route } from 'react-router-dom'

const Introduction = lazy(() => import('./pages/Introduction'))

export default [
  (<Route key="introduction" path="/introduction/:description" exact component={() => <Introduction />} />)
]
