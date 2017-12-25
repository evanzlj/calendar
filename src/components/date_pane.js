import React from "react";
import DateMain from './date_main'

export default class DatePane extends React.Component {
  constructor () {
    super()
  }
  render() {

    return (
      <div>
        <div className="header">
          <span className="icon-circle">&nbsp;</span>
          <span className="icon-mutiple">&nbsp;</span>
        </div>
        <DateMain />
      </div>
    )
  }
}