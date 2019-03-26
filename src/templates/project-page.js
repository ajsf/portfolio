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
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                }}
              >
                <h1 style={{ margin: 0 }}>{title}</h1>
                <a
                  style={{
                    marginTop: 20,
                    marginLeft: 'auto',
                    alignSelf: 'center',
                  }}
                  href={link}
                >
                  See the code on Github.
                </a>
              </div>
              <br />
            </header>
            <div dangerouslySetInnerHTML={{ __html: project.html }} />
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
