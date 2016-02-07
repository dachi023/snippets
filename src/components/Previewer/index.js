import React from 'react'
import {Divider} from 'material-ui'
import marked from 'marked'

class MarkdownPreview extends React.Component {
  constructor(props) {
    super(props)
    marked.setOptions({
      gfm: true,
      tables: true,
      breaks: true,
      sanitize: true
    })
  }

  getStyles() {
    return {
      divider: {
        marginTop: '8px',
        marginBottom: '8px'
      }
    }
  }

  renderMarkdown(value) {
    if (value == null || value.trim().length < 1) {
      return (
        <h3>Nothing to preview</h3>
      )
    }
    const markdown = marked(value)
    return (
      <div>
        <span dangerouslySetInnerHTML={{__html: markdown}}></span>
      </div>
    )
  }

  render() {
    const styles = this.getStyles()
    return (
      <div>
        <h1>{this.props.title}</h1>
        <Divider style={styles.divider} />
        {this.renderMarkdown(this.props.content)}
      </div>
    )
  }
}

export default MarkdownPreview
