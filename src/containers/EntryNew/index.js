import React from 'react'
import {FloatingActionButton, Tabs, Tab, TextField} from 'material-ui'
import Visibility from 'material-ui/lib/svg-icons/action/visibility'
import Save from 'material-ui/lib/svg-icons/content/save'
import ModeEdit from 'material-ui/lib/svg-icons/editor/mode-edit'
import Publish from 'material-ui/lib/svg-icons/editor/publish'
import Firebase from 'firebase'
import MarkdownEditor from '../../components/MarkdownEditor'
import Previewer from '../../components/Previewer'
import User from '../../store/User'

class EntryNew extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      content: '',
      showPreview: false
    }
  }

  componentDidMount() {
    if (!User.me().isLogged) {
      return this.context.router.push('/signup')
    }
  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired
    }
  }

  handleSave(wip) {
    let me = User.me()
    new Firebase(me.firebaseUrl).child('snippets/entries').push({
      title: this.state.title,
      content: this.state.content,
      token: me.token,
      username: me.username,
      wip: wip,
      comments: []
    })
    this.context.router.push(wip ? '/entries/wip' : '/entries')
  }

  hendleToggleMode(showPreview) {
    this.setState({showPreview: showPreview})
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
        publish: {
          position: 'fixed',
          bottom: '25px',
          right: '25px'
        },
        saveWip: {
          position: 'fixed',
          bottom: '95px',
          right: '32px'
        },
        edit: {
          position: 'fixed',
          bottom: '150px',
          right: '32px'
        },
        preview: {
          position: 'fixed',
          bottom: '205px',
          right: '32px'
        }
      }
    }
  }

  render() {
    const styles = this.getStyles()
    return (
      <div style={styles.container}>
        <div style={styles.content}>
          {
            this.state.showPreview
              ? <Previewer title={this.state.title} content={this.state.content} />
              : <div>
                  <TextField
                    floatingLabelText="Title"
                    fullWidth={true}
                    hintText="Week 1-7 Jun 2016"
                    onChange={e => this.setState({title: e.target.value})}
                    required={true}
                  />
                  <MarkdownEditor
                    rows={15}
                    onChange={content => this.setState({content})}
                  />
                </div>
          }
        </div>

        <FloatingActionButton
          style={styles.button.publish}
          onMouseDown={() => this.handleSave(false)}
        >
          <Publish />
        </FloatingActionButton>
        <FloatingActionButton
          mini={true}
          secondary={true}
          style={styles.button.saveWip}
          onMouseDown={() => this.handleSave(true)}
        >
          <Save />
        </FloatingActionButton>
        <FloatingActionButton
          mini={true}
          secondary={true}
          style={styles.button.edit}
          onMouseDown={() => this.hendleToggleMode(false)}
        >
          <ModeEdit />
        </FloatingActionButton>
        <FloatingActionButton
          mini={true}
          secondary={true}
          style={styles.button.preview}
          onMouseDown={() => this.hendleToggleMode(true)}
        >
          <Visibility />
        </FloatingActionButton>
      </div>
    )
  }
}

export default EntryNew
