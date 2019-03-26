import React from 'react'
import PropTypes from 'prop-types'

const ResumeItem = props => {
  const { title, items } = props

  const details = items.map(item => {
    return <p className="resume-item">{item}</p>
  })

  return (
    <div className="item-container">
      <div className="item-header ">
        <strong>{title}: </strong>
      </div>
      <div className="item-content">{details}</div>
    </div>
  )
}

ResumeItem.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
}

export default ResumeItem
