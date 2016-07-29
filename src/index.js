import React from 'react'
import {render} from 'react-dom'
import Title from './components/Title'
import Tab from './components/Tab'
import { hashHistory, Router, Route, IndexRoute, Link, withRouter } from 'react-router'

var t = ({children}) => (
  <Title text={'hello world'}>
    {children}
  </Title>
)

render((
  <Router history={hashHistory}>
    <Route path="/" component={t} >
      <IndexRoute component={() => (<Tab itemList={[{text: 1}, {text: 2}]} />)}/>
    </Route>
  </Router>
  ), document.getElementById('root')
)
