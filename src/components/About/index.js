import React from 'react'
import './style.scss'

class About extends React.Component {
  render() {
    return (
      <div>
        <h2>Snippets</h2>
        <p>
          特定のメンバー内で週報を送り合うことです<br />
          <br />
          <span className="octicon octicon-check text-open"></span> 1週間を振り返ります<br />
          <span className="octicon octicon-check text-open"></span> 何を書くかは自由です<br />
          <span className="octicon octicon-check text-open"></span> 義務ではありません<br />
          <br />
          <a href="https://bellflower.dodgson.org/%E9%80%B1%E5%A0%B1%E4%BB%B2%E9%96%93-a799ad07f349" target="_blank">
            To Phantasien - 週報仲間
          </a>
        </p>
        <br />

        <h2>Milkcocoa</h2>
        <p>
          データストアのためのクラウドプラットフォームです<br />
          Snippetsでは週報の保存, 更新, 取得のために利用しています<br />
          <br />
          <a href="https://mlkcca.com/" target="_blank">Milkcocoa</a>
        </p>
      </div>
    )
  }
}

export default About
