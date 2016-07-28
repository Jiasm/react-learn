import React, {Component, PropTypes} from 'react'

class Title extends Component {
  render () {
    const {text} = this.props
    return (
      <h1>
        {text}
        {this.props.children}
      </h1>
    )
  }
}

Title.propTypes = {
  text: PropTypes.number.isRequired
}

export default Title
