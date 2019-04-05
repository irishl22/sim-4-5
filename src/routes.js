import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Wizard from './components/Wizard/Wizard'

export default (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/wizard" component={Wizard}/>
    <Route component={NotFound} />
  </Switch>
)

function NotFound() {
  return (
    <h1>404 page not found</h1>
  )
}