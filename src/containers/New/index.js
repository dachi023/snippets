import React from 'react'
import {RaisedButton, Tabs, Tab, TextField} from 'material-ui'
import Save from 'material-ui/lib/svg-icons/content/save'
import Publish from 'material-ui/lib/svg-icons/editor/publish'
import Editor from '../../components/Editor'
import Previewer from '../../components/Previewer'

class New extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      content: ''
    }
  }

  //TODO componentDidMount
  // this.ref.child('snippets/entries').push({
  //   title:    'タイトル3',
  //   content:  '内容',
  //   username: 'ユーザ名',
  //   comments: [{comment: 'コメント', username: 'コメントユーザ名'}]
  // })

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired
    }
  }

  getStyles() {
    return {
      container: {
        marginLeft: 'auto',
        marginRight: 'auto',
      },
      content: {
        marginLeft: '64px',
        marginRight: '64px'
      },
      divider: {
        marginTop: '8px',
        marginBottom: '8px'
      },
      button: {
        margin: '8px'
      }
    }
  }

  render() {
    const styles = this.getStyles()
    return (
      <div style={styles.container}>
        <div style={styles.content}>
          <RaisedButton
            icon={<Save />}
            label="save wip (&#8984;S)"
            primary={true}
            style={styles.button}
          />
          <RaisedButton
            icon={<Publish />}
            label="publish (&#8984;P)"
            primary={true}
            style={styles.button}
          />
          <Tabs>
            <Tab label="Write">
              <TextField
                floatingLabelText="Title"
                fullWidth={true}
                hintText="Week 1-7 Jun 2016"
                onChange={e => this.setState({title: e.target.value})}
                required={true}
              />
              <Editor
                defaultValue={this.state.content}
                onChange={content => this.setState({content: content})}
              />
            </Tab>
            <Tab label="Preview">
              <Previewer title={this.state.title} content={this.state.content} />
            </Tab>
          </Tabs>
        </div>
      </div>
    )
  }
}

export default New
