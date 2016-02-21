import React from 'react'
import {Avatar, Divider} from 'material-ui'
import {List, ListItem} from 'material-ui/lib/lists'
import ActionAssignment from 'material-ui/lib/svg-icons/action/assignment'
import Firebase from 'firebase'
import User from '../../store/User'

class Entries extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      entries: []
    }
  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired
    }
  }

  componentDidMount() {
    const me = User.me()
    if (!me.token) {
      return this.context.router.push('/signup')
    }
    let ref = new Firebase(me.firebaseUrl)
    ref.child('snippets/entries').once('value', res => {
      let entries = []
      res.forEach(entry => {
        if (!entry.val().wip) {
          entries.push(entry)
        }
      })
      this.setState({entries})
    })
  }

  getStyles() {
    return {
      container: {
        marginLeft: 'auto',
        marginRight: 'auto',
      },
      list: {
        marginLeft: '64px',
        marginRight: '64px'
      }
    }
  }

  render() {
    const styles = this.getStyles()
    const entries = this.state.entries.map(entry => {
      return (
        <div key={entry.key()}>
          <ListItem
            leftAvatar={<Avatar icon={<ActionAssignment />} />}
            primaryText={entry.val().title}
            secondaryText={entry.val().username}
            onTouchTap={() => this.context.router.push(`/entry/${entry.key()}`)}
          />
          <Divider />
        </div>
      )
    })
    return (
      <div style={styles.container}>
        <List subheader="Snippets" style={styles.list}>
          {entries}
        </List>
      </div>
    )
  }
}

export default Entries
