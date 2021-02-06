import createRoute from './utils/createRoute'
import NotFoundPage from './components/NotFoundPage'

const routes = [
  createRoute<{}, {}>({ key: 'home', path: '/', page: NotFoundPage })
]

export default routes