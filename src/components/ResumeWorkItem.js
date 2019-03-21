import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import logo from '../assets/images/logo.png'

const ResumeWorkItem = props => {
  const { title, dates, items } = props

  const details = items.map(item => {
    return <p>• {item}</p>
  })

  return (
    <div>
      <h3>SYSTEMS ANALYST / CONDUENT (FORMERLY XEROX)</h3>
      <h4>August 2010 - October 2018</h4>
      {details}
    </div>
  )
}

ResumeWorkItem.propTypes = {
  title: PropTypes.string,
  dates: PropTypes.string,
  items: PropTypes.array,
}

export default ResumeWorkItem
