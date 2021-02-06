import React from 'react'
import { Link } from 'react-router-dom'
import PathOption from '../types/PathOption'

const NotFoundPage: React.FC<PathOption<any, any>> = React.memo(() => {
  return (
    <div>
      Oops! There is nothing. Please go back to <Link to="/">home</Link>.
    </div>
  )
})

export default NotFoundPage