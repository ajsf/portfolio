import React from 'react'

import tunerPic from '../assets/images/tuner_image.png'
import artzeePic from '../assets/images/artzee_image.png'
import raPic from '../assets/images/ra_image.png'
import pic04 from '../assets/images/pic04.jpg'
import ProjectTile from '../components/ProjectTile'

const project1 = {
  articleClass: 'style1',
  link: '/generic',
  title: 'String Tuner',
  description: 'An Android app for tuning stringed instruments.',
  image: tunerPic,
}

const project2 = {
  articleClass: 'style2',
  link: '/generic',
  title: 'Artzee',
  description:
    'Android app to browse the Artsy public API and set phone wallpaper.',
  image: artzeePic,
}

const project3 = {
  articleClass: 'style3',
  link: '/generic',
  title: 'Recipe Assistant',
  description:
    'An Android app for browsing recipes, with recipe dictation using Text-To-Speech, and voice control.',
  image: raPic,
}

const project4 = {
  articleClass: 'style4',
  link: '/generic',
  title: 'React Native Tuner',
  description: 'A guitar tuner for Android built with React Native.',
  image: pic04,
}

const projects = [project1, project2, project3, project4]

const Tiles = () => (
  <section className="tiles">
    {projects.map(({ articleClass, link, title, description, image }) => (
      <ProjectTile
        key={title}
        articleClass={articleClass}
        link={link}
        title={title}
        description={description}
        image={image}
      />
    ))}
  </section>
)

export default Tiles
