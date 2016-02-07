import React from 'react'
import {Link} from 'react-router'
import Firebase from 'firebase'
import './style.scss'

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
    this.ref = null
  }

  componentDidMount() {
    let user = localStorage.getItem('user')
    if (!user) {
      return this.context.router.push('/signup')
    }
    user = JSON.parse(user)

    this.ref = new Firebase(user.firebaseUrl)
    new Firebase(user.firebaseUrl).child('snippets/entries').once('value', entries => {
      let list = []
      entries.forEach(entry => {
        list.push(entry)
      })
      this.setState({list: list})
    })
  }

  componentWillUnmount() {
    if (this.ref) {
      this.ref.off()
    }
  }

  render() {
    let entries = this.state.list.map(entry => {
      return (
        <div className="entry-list__item" key={entry.key()}>
          <Link to={'items/' + entry.key()}>
            <h2>{entry.val().title}</h2>
          </Link>
          <h4>{entry.val().username}</h4>
          <hr />
        </div>
      )
    })
    return (
      <div className="container">
        <div className="columns">
          <div className="two-thirds column">
            <div className="entry-list">{entries}</div>
          </div>
        </div>
      </div>
    )
  }
}

List.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default List
