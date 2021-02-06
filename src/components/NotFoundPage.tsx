import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage: React.FC = React.memo(() => {
  return (
    <div>
      Oops! There is nothing. Please go back to <Link to="/">home</Link>.
    </div>
  )
})

export default NotFoundPage