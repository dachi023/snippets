import React from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import './style.scss';

class Editor extends React.Component {
  render() {
    return (
      <div className="write-snnipets">
        <TextareaAutosize
          className="write-snnipets__textarea input-contrast input-block"
          minRows={20}
          defaultValue={this.props.text}
          onChange={e => this.props.onChangeSnippetsText(e.target.value)}
        />
      </div>
    )
  }
}

export default Editor
