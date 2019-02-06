import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import Tiles from '../components/Tiles'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Aaron Friedman - Android Developer"
          meta={[
            { name: 'description', content: 'Android Kotlin Developer' },
            { name: 'keywords', content: 'android, kotlin, mobile' },
          ]}
        />
        <div id="main">
          <div className="inner">
            <header>
              <h1>Hi, I'm Aaron Friedman. I'm an Android developer.</h1>
              <p>
                I take pride in creating delightful user experiences, with a
                focus on well-designed and well-tested clean code. I am
                proficient in web development with React and cross-platform
                mobile development with React Native, but my passion is for
                developing native Android apps in Kotlin.
                <br />
                <br />A few of my projects are highlighted below:
              </p>
            </header>
            <Tiles />
          </div>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
