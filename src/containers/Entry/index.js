import React from 'react'
import Firebase from 'firebase'
import Previewer from '../../components/Previewer'
import User from '../../store/User'

class Entry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      entry: {}
    }
  }

  componentDidMount() {
    const me = User.me()
    if (!me.token) {
      return this.context.router.push('/signup')
    }
    const path = `snippets/entries/${this.props.params.id}`
    new Firebase(me.firebaseUrl).child(path).once('value', res => {
      const entry = res.val()
      if (!entry) {
        return this.context.router.push('/signup')
      }
      this.setState({entry})
    })
  }

  getStyles() {
    return {
      container: {
        marginLeft: 'auto',
        marginRight: 'auto'
      },
      content: {
        marginLeft: '64px',
        marginRight: '64px'
      }
    }
  }

  render() {
    const styles = this.getStyles()
    return (
      <div style={styles.container}>
        <div style={styles.content}>
          <Previewer
            title={this.state.entry.title}
            content={this.state.entry.content}
          />
        </div>
      </div>
    )
  }
}

export default Entry
