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

class EntryEdit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      content: '',
      wip: true
    }
  }

  componentDidMount() {
    const me = User.me()
    if (!me.isLogged) {
      return this.context.router.push('/signup')
    }
    const path = `snippets/entries/${this.props.params.id}`
    new Firebase(me.firebaseUrl).child(path).once('value', res => {
      const entry = res.val()
      const token = me.token
      if (!entry || token !== entry.token) {
        return this.context.router.push('/signup')
      }
      this.setState({title: entry.title, content: entry.content, wip: entry.wip})
    })
  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired
    }
  }

  handleSave(wip) {
    const path = `snippets/entries/${this.props.params.id}`
    new Firebase(User.me().firebaseUrl).child(path).update({
      title: this.state.title,
      content: this.state.content,
      wip: wip
    })
    this.context.router.push(wip ? '/entries/wip' : '/entries')
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
          <Tabs>
            <Tab label="Write">
              <TextField
                value={this.state.title}
                floatingLabelText="Title"
                fullWidth={true}
                hintText="Week 1-7 Jun 2016"
                onChange={e => this.setState({title: e.target.value})}
                required={true}
              />
              <MarkdownEditor
                value={this.state.content}
                rows={15}
                onChange={content => this.setState({content})}
              />
            </Tab>
            <Tab label="Preview">
              <Previewer title={this.state.title} content={this.state.content} />
            </Tab>
          </Tabs>
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
        >
          <ModeEdit />
        </FloatingActionButton>
        <FloatingActionButton
          mini={true}
          secondary={true}
          style={styles.button.preview}
        >
          <Visibility />
        </FloatingActionButton>
      </div>
    )
  }
}

export default EntryEdit
