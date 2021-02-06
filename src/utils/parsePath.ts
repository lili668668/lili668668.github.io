import { matchPath } from 'react-router'
import PathOption from '../types/PathOption'

function parsePath <Search extends Record<string, string>, Param extends Record<string, string>>
  (locationSearch: string, pathname: string, path?: string): PathOption<Search, Param> {
  const collection = new URLSearchParams(locationSearch)
  const search = Array.from(collection.keys())
    .map((key) => ({ [key]: collection.get(key) }))
    .reduce((object, entry) => Object.assign({}, object, entry), {}) as Search
  const match = matchPath(path || '', pathname)
  const param = (match?.params ?? {}) as Param
  return {
    search,
    param
  }
}

export default parsePath