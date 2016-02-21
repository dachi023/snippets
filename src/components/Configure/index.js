import React from 'react'
import {Card, CardText, RaisedButton, TextField} from 'material-ui'
import Firebase from 'firebase'
import Crypto from 'crypto-js'
import User from '../../store/User'

class Configure extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: null,
      email: null,
      firebaseUrl: null
    }
  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired
    }
  }

  getStyles() {
    return {
      container: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '50%'
      }
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    const callback = (e, state) => {
      if (typeof this.props.handleSubmit === 'function') {
        this.props.handleSubmit(e, state)
      }
    }

    let user = User.me()
    if (user.token) {
      user.data = this.state
      user.save()
      callback(e, this.state)
      return
    }

    const ref = new Firebase(this.state.firebaseUrl)
    ref.child('snippets/passPhrase').once('value', res => {
      user.data = {
        username: this.state.username,
        email: this.state.email,
        firebaseUrl: this.state.firebaseUrl,
        token: Crypto.AES.encrypt(this.state.email, res.val()).toString()
      }
      user.save()
      callback(e, this.state)
    })
  }

  render() {
    const user = User.me()
    const styles = this.getStyles()
    return (
      <div style={styles.container}>
        <Card>
          <CardText>
            <form onSubmit={e => this.handleSubmit(e)}>
              <TextField
                defaultValue={user.username}
                floatingLabelText="Username"
                fullWidth={true}
                hintText="John Doe"
                onChange={e => this.setState({username: e.target.value})}
                required={true}
              /><br />
              <TextField
                defaultValue={user.email}
                floatingLabelText="Email"
                fullWidth={true}
                hintText="john.doe@example.com"
                onChange={e => this.setState({email: e.target.value})}
                required={true}
                type="email"
              /><br />
              <TextField
                defaultValue={user.firebaseUrl}
                floatingLabelText="Firebase Url"
                fullWidth={true}
                hintText="https://xxx.firebaseio.com"
                onChange={e => this.setState({firebaseUrl: e.target.value})}
                required={true}
              /><br /><br />
              <RaisedButton
                fullWidth={true}
                label="save settings"
                secondary={true}
                type="submit"
              />
            </form>
          </CardText>
        </Card>
      </div>
    )
  }
}

export default Configure
