import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Public from './public/Public'

class App extends Component {
  render() {
    return <Route path="/" component={Public} />
  }
}

export default App
