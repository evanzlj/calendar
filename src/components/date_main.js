import React from 'react';

export default class DateMain extends React.Component {
  constructor () {
    super()
    this.state = {
      days: 31,
      dates: ['S','M','T','W','T','F','S']
    }
  }
  render () {
    let {days, dates} = this.state
    return (
      <div className="date-main">
        <div className="date-header">
          <span className="lt">&lt;</span>MAY 2015<span className="gt">&gt;</span>
        </div>
        <div className="date-body">
          <div className="date-title">
            {dates.map((item,ind) => (<span key={ind}>{item}</span>))}
          </div>
          <ul className="date-days">
            <li className="none-day">&nbsp;</li>
            {Array(31).fill(1).map((item, ind) => {
              return (
                <li key={ind}>{ind + 1}</li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}