import { matchPath } from 'react-router'

function parsePath <Search, Param>(locationSearch: string, pathname: string, path?: string): { search: Search, param: Param } {
  const collection = new URLSearchParams(locationSearch)
  const search: any = Array.from(collection.keys())
    .map((key) => ({ [key]: collection.get(key) }))
    .reduce((object, entry) => Object.assign({}, object, entry), {})
  const match = matchPath(path || '', pathname)
  const param: any = match?.params ?? {}
  return {
    search,
    param
  }
}

export default parsePath