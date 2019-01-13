import React from "react"
import PropTypes from "prop-types"
import moment from 'moment'

class Blockout extends React.Component {
  renderTime = _ => {
    const { blockoutWithDays: { range: {start, end} } } = this.props
    const formatedStart = moment(start).format('h:mm a')
    const formatedEnd = moment(end).format('h:mm a')
    if (formatedStart === '12:00 am' && formatedEnd === '11:59 pm') {
      return 'All day'
    } else {
      return `${formatedStart} - ${formatedEnd}`
    }
  }

  renderReason = _ => {
    const { blockoutWithDays: { reason }} = this.props
    return reason ? reason : 'no reason'
  }

  render () {
    return (
      <div className="blockout-container">
        Blockout Date<br />
        <div className='blockout-reason'>{this.renderReason()}</div>
        <div className='blockout-time'>{this.renderTime()}</div>
      </div>
    )
  }
}

Blockout.propTypes = {
  blockoutWithDays: PropTypes.object
}
export default Blockout
