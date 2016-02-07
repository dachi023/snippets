import React from 'react'
import Firebase from 'firebase'
import {Avatar, Divider} from 'material-ui'
import {List, ListItem} from 'material-ui/lib/lists'
import ActionAssignment from 'material-ui/lib/svg-icons/action/assignment'

class Entries extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      entries: []
    }
    this.ref = null
  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired
    }
  }

  componentDidMount() {
    let user = localStorage.getItem('user')
    if (!user) {
      return this.context.router.push('/signup')
    }
    user = JSON.parse(user)

    this.ref = new Firebase(user.firebaseUrl)
    new Firebase(user.firebaseUrl)
      .child('snippets/entries')
      .once('value', res => {
        let entries = []
        res.forEach(entry => {
          entries.push(entry)
        })
        this.setState({entries: entries})
      })
  }

  componentWillUnmount() {
    if (this.ref) {
      this.ref.off()
    }
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
      },
      divider: {
        marginTop: '8px',
        marginBottom: '8px'
      }
    }
  }

  render() {
    const styles = this.getStyles()
    const entries = this.state.entries.map(entry => {
      return (
        <div>
          <ListItem
            key={entry.key()}
            leftAvatar={<Avatar icon={<ActionAssignment />} />}
            primaryText={entry.val().title}
            secondaryText={entry.val().username}
          />
          <Divider style={styles.divider} />
        </div>
      )
    })
    return (
      <div style={styles.container}>
        <List style={styles.list}>{entries}</List>
      </div>
    )
  }
}

export default Entries
