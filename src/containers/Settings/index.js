import React from 'react'
import Snackbar from 'material-ui/lib/snackbar'
import Configure from '../../components/Configure'
import User from '../../store/User'

class Settings extends React.Component {
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
    if (!User.me().token) {
      return this.context.router.push('/signup')
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
      <div>
        <div style={styles.container}>
          <Configure handleSubmit={() => this.setState({openUpdated: true})} />
        </div>
        <Snackbar
          open={this.state.openUpdated}
          message="Settings updated successfully"
          autoHideDuration={5000}
          onRequestClose={() => this.setState({openUpdated: false})}
        />
      </div>
    )
  }
}

export default Settings
