import React from 'react'
import Configure from '../../components/Configure'
import User from '../../store/User'

class Signup extends React.Component {
  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired
    }
  }

  componentDidMount() {
    if (User.me().token) {
      return this.context.router.push('/entries')
    }
  }

  getStyles() {
    return {
      container: {
        textAlign: 'center'
      }
    }
  }

  render() {
    const styles = this.getStyles()
    return (
      <div style={styles.container}>
        <h1>Sign up for Snippets</h1>
        <p>Please create app in <a href="https://www.firebase.com" target="_blank">Firebase</a></p>
        <Configure handleSubmit={() => this.context.router.push('/entries')} />
      </div>
    )
  }
}

export default Signup
