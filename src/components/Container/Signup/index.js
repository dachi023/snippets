import React from 'react'
import Header from '../../Header'
import Configure from '../../Configure'
import About from '../../About'
import './style.scss'

class Signup extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="columns">
            <div className="one column">
              <p className="lead">
                <a href="https://mlkcca.com" target="_blank">Milkcocoa</a>のアカウントを作成してください<br />
                1グループにつき1つのアプリ情報が必要となります
              </p>
            </div>
          </div>
          <div className="columns">
            <div className="one-half column">
              <Configure />
            </div>
            <div className="one-half column">
              <About />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Signup
