import React from 'react'
import {render} from 'react-dom'
import Title from './components/title'
import Tab from './components/Tab'
import { hashHistory, Router, Route, IndexRoute, Link, withRouter } from 'react-router'

var t = ({children}) => (
  <Title text={123}>
    {children}
  </Title>
)

render((
  <Router history={hashHistory}>
    <Route path="/" component={t} >
      <IndexRoute component={() => (<Tab itemList={[1, 2]} />)}/>
    </Route>
  </Router>
  ), document.getElementById('root')
)
