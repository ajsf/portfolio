import React from 'react'
import PropTypes from 'prop-types'

const ResumeWorkItem = props => {
  const { title, dates, items } = props

  const details = Object.keys(items).map(item => {
    return (
      <div key={item}>
        <p className="resume-item">• {item}</p>
        {items[item].map(subItem => {
          return (
            <p className="resume-subitem" key={subItem}>
              • {subItem}
            </p>
          )
        })}
      </div>
    )
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
  items: PropTypes.object,
}

export default ResumeWorkItem
