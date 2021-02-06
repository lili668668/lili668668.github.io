import NotFoundPage from "../components/NotFoundPage"
import AppRoute from "../types/AppRoute"

const createRoute = <Search, Param>(options?: Partial<AppRoute<Search, Param>>): AppRoute<Search, Param> => {
  return {
    key: '',
    path: '',
    page: NotFoundPage,
    ...options
  }
}

export default createRoute