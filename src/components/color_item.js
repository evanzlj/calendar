import React from 'react';
import {colorChange} from "../actions";

export default class ColorItem extends React.Component {
  constructor() {
    super();
  }

  static clickHandle = (color) => {
    ob.notify(colorChange, color)
  }

  render() {
    let me = ColorItem
    let {active, color} = this.props
    return (
      <div
        style={{backgroundColor: color}}
        onClick={me.clickHandle.bind(me, color)}
        className={'color-item ' + active}>
        &nbsp;
      </div>
    )
  }
}
