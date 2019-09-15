import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import UserPage from './pages/UserPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import UserDetailPage from './pages/UserDetailPage'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/users" component={UserPage} exact />
      <Route path="/users/:userId" component={UserDetailPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
)


export default App
