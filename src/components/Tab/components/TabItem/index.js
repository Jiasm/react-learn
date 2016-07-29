import React, {Component, PropTypes} from 'react'
import {item} from './index.css'

class TabItem extends Component {
  render () {
    var {text} = this.props
    return (
      <li className={item}>
        {text}
      </li>
    )
  }
}

export default TabItem
