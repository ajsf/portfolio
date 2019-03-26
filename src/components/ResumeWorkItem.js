import React from 'react'
import PropTypes from 'prop-types'

const ResumeWorkItem = props => {
  const { title, dates, items } = props

  const details = items.map(item => {
    return <p className="resume-item">• {item}</p>
  })

  return (
    <div>
      <h3>{title}</h3>
      <h4>{dates}</h4>
      {details}
      <br />
    </div>
  )
}

ResumeWorkItem.propTypes = {
  title: PropTypes.string,
  dates: PropTypes.string,
  items: PropTypes.array,
}

export default ResumeWorkItem
