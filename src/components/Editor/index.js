import React from 'react'
import {TextField} from 'material-ui'

class MarkdownEditor extends React.Component {
  render() {
    return (
      <div>
        <TextField
          defaultValue={this.props.defaultValue}
          floatingLabelText="Content"
          fullWidth={true}
          multiLine={true}
          onChange={e => this.props.onChange(e.target.value)}
          required={true}
          rows={10}
        />
      </div>
    )
  }
}

export default MarkdownEditor
