import React from 'react'
import './style.scss'

class Configure extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      milkcocoaAppId: '',
      milkcocoaApiKey: '',
      milkcocoaApiSecret: ''
    }
  }

  submitForm(e) {
    e.preventDefault()
    localStorage.setItem('user', JSON.stringify(this.state))
    // TOOD 画面遷移
  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <h2>User profile</h2>
        <dl className="form">
          <dt><label>Name</label></dt>
          <dd>
            <input type="text" value={this.state.username}
              className="input-contrast input-block"
              onChange={e => this.setState({username: e.target.value})} />
          </dd>
        </dl>
        <dl className="form">
          <dt><label>Email Address</label></dt>
          <dd>
            <input type="email" value={this.state.email}
              className="input-contrast input-block"
              onChange={e => this.setState({email: e.target.value})} />
          </dd>
        </dl>
        <br />

        <h2>Milkcocoa application</h2>
        <dl className="form">
          <dt><label>app_id</label></dt>
          <dd>
            <input type="text" value={this.state.milkcocoaAppId}
              className="input-contrast input-block"
              onChange={e => this.setState({milkcocoaAppId: e.target.value})}/>
          </dd>
        </dl>
        <dl className="form">
          <dt><label>api_key</label></dt>
          <dd>
            <input type="text" value={this.state.milkcocoaApiKey}
              className="input-contrast input-block"
              onChange={e => this.setState({milkcocoaApiKey: e.target.value})}/>
          </dd>
        </dl>
        <dl className="form">
          <dt><label>api_secret</label></dt>
          <dd>
            <input type="text" value={this.state.milkcocoaApiSecret}
              className="input-contrast input-block"
              onChange={e => this.setState({milkcocoaApiSecret: e.target.value})}/>
          </dd>
        </dl>

        <div className="form-actions">
          <hr />
          <button type="button" className="btn btn-primary">Create An Account</button>
        </div>
      </form>
    )
  }
}

export default Configure
