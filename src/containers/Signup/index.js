import React from 'react'
import Configure from '../../components/Configure'
import About from '../../components/About'
import './style.scss'

class Signup extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="columns">
          <div className="one column">
            <p className="lead">
              <a href="https://mlkcca.com" target="_blank">
                Milkcocoaのアカウントを作成してください
              </a>
              <br />
              1グループにつき1つのアプリ情報が必要となります
            </p>
          </div>
        </div>
        <div className="columns">
          <div className="one-half column"><Configure /></div>
          <div className="one-half column"><About /></div>
        </div>
      </div>
    )
  }
}

Signup.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default Signup
