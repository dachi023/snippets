import React from 'react'
import marked from 'marked'
import './style.scss';

marked.setOptions({gfm: true, tables: true, breaks: true, sanitize: true})

class Editor extends React.Component {
  renderSnippets() {
    if (this.props.text == null || this.props.text.length < 1) {
      return (
        <div className="blankslate clean-background">
          <span className="mega-octicon octicon-markdown"></span>
          <h3>Nothing to preview</h3>
        </div>
      )
    }
    let markdown = marked(this.props.text)
    return (
      <div className="preview-snnipets__markdown-body">
        <span dangerouslySetInnerHTML={{__html: markdown}}></span>
      </div>
    )
  }

  render() {
    return (
      <div className="preview-snnipets">
        {this.renderSnippets()}
      </div>
    )
  }
}

export default Editor
