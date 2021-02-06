import React, { useMemo } from 'react'
import { useLocation } from 'react-router'
import parsePath from '../utils/parsePath'

interface PropTypes<Search, Param> {
  page: React.FC<{ search: Search, param: Param }>
}

const InjectSearchAndParamRoute = function <Search, Param>(props: PropTypes<Search, Param>) {
  const Component = props.page
  const location = useLocation()
  const { search, param } = useMemo(() => parsePath<Search, Param>(location.search, location.pathname), [location.search, location.pathname])
  return (<Component search={search} param={param} />)
}

export default InjectSearchAndParamRoute