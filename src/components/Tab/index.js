import React, {Component, PropTypes} from 'react'
import TabItem from './components/TabItem'

class Tab extends Component {
  render () {
    const {itemList} = this.props
    return (
      <ul>
        {
          itemList.map((item, index) =>
            (<TabItem {...item} key={index} />)
          )
        }
      </ul>
    )
  }
}

Tab.propTypes = {
  itemList: PropTypes.array.isRequired
}

export default Tab
