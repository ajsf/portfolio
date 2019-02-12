import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

import Tiles from '../components/Tiles'

import { markdownQueryToProjects } from '../utils/MarkdownHelpers'

class ProjectsPage extends React.Component {
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
            <Tiles projects={projects} />
          </div>
        </div>
      </Layout>
    )
  }
}

export default ProjectsPage

export const pageQuery = graphql`
  query ProjectsPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    ...AllProjects
  }
`
