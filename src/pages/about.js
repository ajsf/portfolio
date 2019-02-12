import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

class AboutPage extends React.Component {
  render() {
    const { title, description } = this.props.data.site.siteMetadata

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
              <p>
                I take pride in creating delightful user experiences, with a
                focus on well-designed and well-tested code. I am proficient in
                web development with React and cross-platform mobile development
                with React Native, but my passion is for developing native
                Android apps in Kotlin.
              </p>
            </header>
          </div>
        </div>
      </Layout>
    )
  }
}

export default AboutPage

export const pageQuery = graphql`
  query AboutPage {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
