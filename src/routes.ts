import createRoute from './utils/createRoute'
import HomePage from './pages/home/HomePage'

const routes = [
  createRoute<{}, {}>({ key: 'home', path: '/', page: HomePage })
]

export default routes