import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Landing from './landing/Landing'
import Products from './products/Products'
import Customers from './customers/Customers'
import Orders from './orders/Orders'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/products" component={Products} />
    <Route path="/customers" component={Customers} />
    <Route path="/orders" component={Orders} />
  </Switch>
)

export default Routes
