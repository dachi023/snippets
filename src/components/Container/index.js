import React from 'react'
import Header from '../Header'
import Editor from '../Editor'
import './style.scss';

class Container extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: null,
      text: ''
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="columns">
            <div className="one-half column">
              <Editor
                text={this.state.text}
                onChangeSnippetsText={text => this.setState({text: text})}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Container
