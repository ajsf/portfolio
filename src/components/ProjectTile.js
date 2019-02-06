import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const ProjectTile = ({ articleClass, link, title, description, image }) => {
  return (
    <article className={articleClass}>
      <span className="image">
        <img src={image} alt="" />
      </span>
      <Link to={link}>
        <div className="tile">
          <h2>{title}</h2>
          <div className="content">
            <p>{description}</p>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default ProjectTile

ProjectTile.propTypes = {
  articleClass: PropTypes.string,
  link: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
}
