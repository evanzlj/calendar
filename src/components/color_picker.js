import React from 'react';
import ColorItem from 'color_item.js'

export default class Color extends React.Component {
  constructor() {
    super();
    this.state = {
      colors: []
    }
  }
  render () {
    let {colors} = this.state
    return (
      <div>
        (colors.map(item => {
          return (<ColorItem color={item} />)
        }))
      </div>
    )
  }
}
