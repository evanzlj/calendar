import React from 'react';
import ColorPicker from './color_picker'
import {colorChange} from '../actions'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      color: 'rgb(75,230,212)'
    }
    ob.add(colorChange, color => {
      this.setState({color: color})
    })
  }
  render() {
    let {color} = this.state
    return (
      <div className="container" style={{backgroundColor: color}}>
        {/*<ColorPicker />*/}
        
      </div>)
  }
}
