import React from 'react';
import ColorItem from './color_item.js'

export default class ColorPicker extends React.Component {
  constructor() {
    super();
    this.state = {
      colors: [
        'rgb(75,230,212)',
        'rgb(250,90,103)',
        'rgb(225,31,115)',
        'rgb(236,66,0)',
        'rgb(227,28,34)',
        'rgb(247,103,0)',
        'rgb(244,122,0)',
        'rgb(253,190,75)',
        'rgb(252,238,19)',
        'rgb(136,188,49)',
        'rgb(46,115,255)',
        'rgb(37,166,157)',
        'rgb(40,140,108)',
        'rgb(17,39,235)',
        'rgb(148,61,254)',
        'rgb(99,0,212)',
      ],
      color: 'rgb(75,230,212)'
    }
  }
  componentDidMount() {
    ob.add('colorChange', color => {
      this.setState({color: color})
    })
  }
  render () {
    let {colors,color} = this.state
    return (
      <div className="color-picker">
        <div className="icon-wrap">
          <span className="icon">x</span>
        </div>
        <p>Choose theme color</p>
        <div className="color-wrap">
          {(colors.map((item, ind) =>
            {
              return (<ColorItem key={ind} color={item} active={item === color? 'active': ''}></ColorItem>)
            }
          ))}
        </div>
      </div>
    )
  }
}
