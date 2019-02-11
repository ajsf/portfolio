import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

import Tiles from '../components/Tiles'

import { markdownQueryToProjects } from '../utils/ProjectHelper'

class HomeIndex extends React.Component {
  render() {
    const { title, description } = this.props.data.site.siteMetadata
    const projects = markdownQueryToProjects(this.props.data)

    return (
      <Layout>
        <Helmet
          title={title}
          meta={[
            {
              name: 'description',
              content: { description },
            },
            { name: 'keywords', content: 'android, kotlin, mobile' },
          ]}
        />
        <div id="main">
          <div className="inner">
            <header>
              <h1>Hi, I'm Aaron Friedman. I'm an Android developer.</h1>
              <p>
                I take pride in creating delightful user experiences, with a
                focus on well-designed and well-tested code. I am proficient in
                web development with React and cross-platform mobile development
                with React Native, but my passion is for developing native
                Android apps in Kotlin.
                <br />
                <br />A few of my projects are highlighted below. You can see
                the code for this site{' '}
                <a href="https://github.com/ajsf/portfolio">here</a>.
              </p>
            </header>
            <Tiles projects={projects} />
          </div>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex

export const pageQuery = graphql`
  query PageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark {
      ...Project
    }
  }
`
