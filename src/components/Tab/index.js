import React, {Component, PropTypes} from 'react'
import TabItem from './components/TabItem'

class Tab extends Component {
  render () {
    const {itemList} = this.props
    return (
      <div>
        {
          itemList.map((item, index) =>
            (<TabItem {...item} key={index} />)
          )
        }
      </div>
    )
  }
}

Tab.propTypes = {
  itemList: PropTypes.array.isRequired
}

export default Tab
