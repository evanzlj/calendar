import React from 'react';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      color: 'rgb(75,230,212)'
    }
  }
  componentDidMount() {
    ob.addSub('colorChange', color => {
      this.setState({color})
    })
  }
  render() {
    let {color} = this.state
    return (<div className="container" style={{backgroundColor: color}}>
      calendar
      </div>)
  }
}
