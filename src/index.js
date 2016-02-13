import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

import App from './containers/App'
import Signup from './containers/Signup'
import Entries from './containers/Entries'
import EntriesWip from './containers/EntriesWip'
import EntryNew from './containers/EntryNew'
import Entry from './containers/Entry'
import EntryEdit from './containers/EntryEdit'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Signup} />
      <Route path="signup" component={Signup} />
      <Route path="settings" component="" />
      <Route path="entries" component={Entries} />
      <Route path="entries/wip" component={EntriesWip} />
      <Route path="entry/new" component={EntryNew} />
      <Route path="entry/:id" component={Entry}/>
      <Route path="entry/:id/edit" component={EntryEdit} />
    </Route>
  </Router>
), document.getElementById('root'))
