import React, {Component, PropTypes} from 'react'
import {header} from './index.css'

class Title extends Component {
  render () {
    const {text} = this.props
    return (
      <h1 className={header}>
        {text}
        {this.props.children}
      </h1>
    )
  }
}

Title.propTypes = {
  text: PropTypes.string.isRequired
}

export default Title
