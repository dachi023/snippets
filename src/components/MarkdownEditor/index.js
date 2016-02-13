import React from 'react'
import {TextField} from 'material-ui'

class MarkdownEditor extends React.Component {
  render() {
    return (
      <div>
        <TextField
          value={this.props.value}
          floatingLabelText="Content"
          fullWidth={true}
          multiLine={true}
          onChange={e => this.props.onChange(e.target.value)}
          required={true}
          rows={this.props.rows}
        />
      </div>
    )
  }
}

export default MarkdownEditor
