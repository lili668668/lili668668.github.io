interface AppRoute<Search, Param> {
  key: string
  path: string
  page: React.FC<{ search: Search, param: Param }>
}

export default AppRoute