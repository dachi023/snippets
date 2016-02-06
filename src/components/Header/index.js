import React from 'react'
import './style.scss';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <h1>Snippets</h1>
        </div>
      </header>
    )
  }
}

export default Header
