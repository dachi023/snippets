import React from 'react'
import Snackbar from 'material-ui/lib/snackbar'
import Configure from '../../components/Configure'
import User from '../../store/User'

class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      openUpdated: false
    }
  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired
    }
  }

  componentDidMount() {
    if (User.me().isLogged) {
      return this.context.router.push('/entries')
    }
  }

  handleSubmit() {
    this.setState({openUpdated: true})
    this.context.router.push('/entries')
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
      <div>
        <div style={styles.container}>
          <h1>Sign up for Snippets</h1>
          <p>Please create app in <a href="https://www.firebase.com" target="_blank">Firebase</a></p>
          <Configure handleSubmit={this.handleSubmit} />
        </div>
        <Snackbar
          open={this.state.openUpdated}
          message="Settings registered successfully"
          autoHideDuration={5000}
          onRequestClose={() => this.setState({openUpdated: false})}
        />
      </div>
    )
  }
}

export default Signup
