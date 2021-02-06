import React from 'react'

class ErrorBoundary extends React.Component<{ page: React.ReactElement }, { hasError: boolean }> {
  constructor(props: { page: React.ReactElement }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: any, info: any) {
    console.error(error)
    console.log(info)
  }

  render() {
    if (this.state.hasError) return this.props.page

    return this.props.children
  }
}

export default ErrorBoundary
