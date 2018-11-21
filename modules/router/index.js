import React from 'react'
import { render } from 'react-dom'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import { About, Contact, Events, Home, Products, Whoops404 } from './pages'

window.React = React

const root_render = () => render(
  <HashRouter>
    <div className="main">
      <Switch>
        <Route exact
               path="/"
               component={Home} />
        <Route path="/about"
               component={About} />
        <Redirect from="/history"
                  to="/about/history" />
        <Redirect from="/services"
                  to="/about/services" />
        <Redirect from="/location"
                  to="/about/location" />
        <Route path="/events"
               component={Events} />
        <Route path="/products"
               component={Products} />
        <Route path="/contact"
               component={Contact} />
        <Route component={Whoops404} />
      </Switch>
    </div>
  </HashRouter>,
  document.getElementById('root'),
)

export default root_render
