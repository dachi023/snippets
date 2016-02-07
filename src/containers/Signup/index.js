import React from 'react'
import Configure from '../../components/Configure'
import About from '../../components/About'

class Signup extends React.Component {
  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired
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
        <Configure />
      </div>
    )
  }
}

export default Signup
