import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

import App from './containers/App'
import Signup from './containers/Signup'
import Entries from './containers/Entries'
import New from './containers/New'
import Edit from './containers/Edit'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Signup} />
      <Route path="signup" component={Signup} />
      <Route path="settings" component="" />
      <Route path="new" component={New} />
      <Route path="entries" component={Entries} />
      <Route path="entry/:id" component=""/>
      <Route path="entry/:id/edit" component={Edit} />
    </Route>
  </Router>
), document.getElementById('root'))
