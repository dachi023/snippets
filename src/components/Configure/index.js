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

  handleSubmit(e) {
    e.preventDefault()
    localStorage.setItem('user', JSON.stringify(this.state))
    this.context.router.push('/new')
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <h2>User profile</h2>
        <dl className="form">
          <dt><label>Name</label></dt>
          <dd>
            <input name="username" type="text" value={this.state.username}
              className="input-contrast"
              onChange={e => this.setState({username: e.target.value})} />
          </dd>
        </dl>
        <dl className="form">
          <dt><label>Email Address</label></dt>
          <dd>
            <input name="email" type="email" value={this.state.email}
              className="input-contrast"
              onChange={e => this.setState({email: e.target.value})} />
          </dd>
        </dl>
        <br />

        <h2>Milkcocoa application</h2>
        <dl className="form">
          <dt><label>app_id</label></dt>
          <dd>
            <input name="app-id" type="text" value={this.state.milkcocoaAppId}
              className="input-contrast"
              onChange={e => this.setState({milkcocoaAppId: e.target.value})}/>
          </dd>
        </dl>
        <dl className="form">
          <dt><label>api_key</label></dt>
          <dd>
            <input name="api-key" type="text" value={this.state.milkcocoaApiKey}
              className="input-contrast"
              onChange={e => this.setState({milkcocoaApiKey: e.target.value})}/>
          </dd>
        </dl>
        <dl className="form">
          <dt><label>api_secret</label></dt>
          <dd>
            <input name="api-secret" type="text" value={this.state.milkcocoaApiSecret}
              className="input-contrast"
              onChange={e => this.setState({milkcocoaApiSecret: e.target.value})}/>
          </dd>
        </dl>

        <div className="form-actions">
          <hr />
          <button type="submit" className="btn btn-primary">Create An Account</button>
        </div>
      </form>
    )
  }
}

Configure.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default Configure
