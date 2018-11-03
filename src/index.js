import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/App'
import { history } from './utils'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { Router } from 'react-router-dom'
import './styles'

const client = new ApolloClient({
  uri: 'https://jamstack-hackthon.herokuapp.com/v1alpha1/graphql'
})

const Root = () => (
  <ApolloProvider client={client}>
    <Router history={history}>
      <App />
    </Router>
  </ApolloProvider>
)

ReactDOM.render(<Root />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister()
