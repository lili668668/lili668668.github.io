import PathOption from "./PathOption";

interface AppRoute<Search extends Record<string, string>, Param extends Record<string, string>> {
  key: string
  path: string
  page: React.FC<PathOption<Search, Param>>
}

export default AppRoute