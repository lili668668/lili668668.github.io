import React, { lazy } from 'react'
import { Route } from 'react-router-dom'

const Home = lazy(() => import('./Home'))

export default [
  (<Route path="/" exact component={Home} />)
]
