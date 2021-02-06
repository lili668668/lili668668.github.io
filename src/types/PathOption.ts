interface PathOption<Search extends Record<string, string>, Param extends Record<string, string>> {
  search: Search,
  param: Param 
}

export default PathOption