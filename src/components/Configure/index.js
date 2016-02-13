import React from 'react'
import {Card, CardText, RaisedButton, TextField} from 'material-ui'
import Firebase from 'firebase'
import Crypto from 'crypto-js'
import User from '../../store/User'

class Configure extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      firebaseUrl: '',
      token: null
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
    let ref = new Firebase(this.state.firebaseUrl)
    ref.child('snippets/passPhrase').once('value', res => {
      const token = Crypto.AES.encrypt(this.state.email, res.val()).toString()
      this.setState({token})
      new User(this.state).save()
      ref.off()
      if (typeof this.props.handleSubmit == 'function') {
        this.props.handleSubmit(e, this.state)
      }
    })
  }

  render() {
    const styles = this.getStyles()
    return (
      <div style={styles.container}>
        <Card>
          <CardText>
            <form onSubmit={e => this.handleSubmit(e)}>
              <TextField
                floatingLabelText="Username"
                fullWidth={true}
                hintText="John Doe"
                onChange={e => this.setState({username: e.target.value})}
                required={true}
              /><br />
              <TextField
                floatingLabelText="Email"
                fullWidth={true}
                hintText="john.doe@example.com"
                onChange={e => this.setState({email: e.target.value})}
                required={true}
                type="email"
              /><br />
              <TextField
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
