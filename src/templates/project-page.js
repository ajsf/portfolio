import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

import Helmet from 'react-helmet'
// import Img from 'gatsby-image'

const ProjectPageTemplate = props => {
  const project = props.data.markdownRemark
  const { title, githubLink } = project.frontmatter

  const link = `https://github.com/ajsf/${githubLink}`

  return (
    <div>
      <Layout>
        <Helmet>
          <title>{props.data.site.siteMetadata.title}</title>
          <meta name="description" content={title} />
        </Helmet>
        <div id="main">
          <div className="inner">
            <header>
              <h1>
                {title}
                <a href={link} className="icon style2 large fa-github">
                  <span className="label">GitHub</span>
                </a>
              </h1>
            </header>
            <div dangerouslySetInnerHTML={{ __html: project.html }} />
            <p>
              See the code <a href={link}>here.</a>
            </p>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default ProjectPageTemplate

export const pageQuery = graphql`
  query ProjectPageQuery($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      ...ProjectTemplate
    }
  }
`
