import React, { lazy } from 'react'
import { Route } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home'))

export default [
  (<Route key="home" path="/" exact component={() => <Home />} />)
]
