import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'

const SuccessPage = props => {
  const { title, description } = props.data.site.siteMetadata

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
          <header className="major">
            <h2>Thank You</h2>
          </header>
          <p>
            Thank you for contacting me! I will get back to you as soon as my
            schedule allows.
          </p>
          <p>
            Would you like to check out my <Link to="/projects">projects?</Link>
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default SuccessPage

export const pageQuery = graphql`
  query SuccessPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
