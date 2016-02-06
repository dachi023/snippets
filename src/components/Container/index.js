import React from 'react'
import Header from '../Header'
import './style.scss';

class Container extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <h1>Hello</h1>
      </div>
    )
  }
}

export default Container
