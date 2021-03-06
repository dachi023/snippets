import React from 'react'
import {AppBar, FlatButton, LeftNav, MenuItem, Divider} from 'material-ui'
import {getMuiTheme} from 'material-ui/lib/styles'
import Add from 'material-ui/lib/svg-icons/content/add'
import Drafts from 'material-ui/lib/svg-icons/content/drafts'
import Inbox from 'material-ui/lib/svg-icons/content/inbox'
import Settings from 'material-ui/lib/svg-icons/action/settings'
import User from '../../store/User'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      muiTheme: getMuiTheme()
    }
  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired
    }
  }

  static get childContextTypes() {
    return {
      muiTheme: React.PropTypes.object
    }
  }

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme
    };
  }

  getMenuItems() {
    const styles = this.getStyles()
    return (
      <div>
        <MenuItem
          primaryText="Snippets"
          leftIcon={<Inbox />}
          onTouchTap={e => this.handleMenuItemTouchTap(e, '/entries')}
        />
        <Divider style={styles.divider} />
        <MenuItem
          primaryText="New"
          leftIcon={<Add />}
          onTouchTap={e => this.handleMenuItemTouchTap(e, '/entry/new')}
        />
        <MenuItem
          primaryText="WIP"
          leftIcon={<Drafts />}
          onTouchTap={e => this.handleMenuItemTouchTap(e, '/entries/wip')}
        />
        <Divider style={styles.divider} />
        <MenuItem
          primaryText="Settings"
          leftIcon={<Settings />}
          onTouchTap={e => this.handleMenuItemTouchTap(e, '/settings')}
        />
      </div>
    )
  }

  getStyles() {
    return {
      appBar: {
        position: 'fixed',
        top: 0
      },
      leftNav: {
        marginTop: '8px',
        paddingTop: this.state.muiTheme.appBar.height,
        zIndex: this.state.muiTheme.zIndex.appBar - 1
      },
      divider: {
        marginTop: '8px',
        marginBottom: '8px'
      },
      main: {
        marginTop: '32px',
        paddingTop: this.state.muiTheme.appBar.height,
        paddingLeft: this.state.muiTheme.leftNav.width
      }
    }
  }

  handleMenuItemTouchTap(e, path) {
    e.preventDefault()
    this.context.router.push(path)
  }

  render() {
    const user = User.me()
    const styles = this.getStyles()
    return (
      <div>
        <AppBar
          title="Snippets"
          showMenuIconButton={false}
          iconElementRight={
            <FlatButton label={user.username} disabled={true} />
          }
          style={styles.appBar}
        />
        <LeftNav open={true} style={styles.leftNav}>
          {this.getMenuItems()}
        </LeftNav>
        <main style={styles.main}>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default App
