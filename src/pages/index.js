import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

import Tiles from '../components/Tiles'

import { markdownQueryToProjects } from '../utils/MarkdownHelpers'

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { title, description } = data.site.siteMetadata
    const { header, subheader } = data.file.childMarkdownRemark.frontmatter
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
              <h1>{header}</h1>
              <p>
                {subheader}
                <br />
                <br />A few of my projects are highlighted below. You can see
                the code for this site{' '}
                <a href="https://github.com/ajsf/portfolio">here</a>.
              </p>
              <br/>
            </header>
            <Tiles projects={projects} />
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query PageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    ...AllProjects
    ...IndexPage
  }
`
