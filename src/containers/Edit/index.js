import React from 'react'
import Editor from '../../components/Editor'
import Previewer from '../../components/Previewer'
import './style.scss'

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
      <div className="container">
        <div className="columns">
          <div className="one-half column">
            <Editor
              text={this.state.text}
              onChangeSnippetsText={text => this.setState({text: text})}
            />
          </div>
          <div className="one-half column">
            <Previewer text={this.state.text} />
          </div>
        </div>
      </div>
    )
  }
}

export default Container
