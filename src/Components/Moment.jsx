import React from 'react'
import * as moment from 'moment';

export default function Moment() {
    var day = moment("1995-12-25");
  return (
    <div>
    <h1>{day.format("MM-DD-YYYY")}</h1>
    </div>
  )
}
