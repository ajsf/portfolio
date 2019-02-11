import React from 'react'

import ProjectTile from '../components/ProjectTile'

const Tiles = props => {
  const tiles = props.projects.map((project, index) => {
    const { path, title, description, image } = project
    return (
      <ProjectTile
        key={title}
        articleClass={`style${index + 1}`}
        link={path}
        title={title}
        description={description}
        image={image}
      />
    )
  })

  return <section className="tiles">{tiles}</section>
}

export default Tiles
