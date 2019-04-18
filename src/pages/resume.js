import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import ResumeWorkItem from '../components/ResumeWorkItem'
import { graphql } from 'gatsby'
import ResumeItem from '../components/ResumeItem'

class ResumePage extends React.Component {
  render() {
    const { title, description } = this.props.data.site.siteMetadata

    const work0 = {
      'Developed Instrutune, an Android app for tuning instruments.': [
        'TarsosDSP is used for frequency detection, the result of which is converted into an RxJava Flowable, allowing the use of RxJava operators to filter out noise and silence, and to map sounds to a note on a musical instrument.',
        'Uses the MVVM architecture pattern. In the ViewModel, the Flowable result is converted to LiveData to take advantage of the automatic UI lifecycle handling that LiveData offers.',
        'Room is used for data persistence.',
        'Has animations and a responsive UI for a pleasing user experience.',
        'With more than 250 units tests, it is well set-up for maintainability and is currently available in beta testing in Google Play.',
      ],
      'Developed Recipe Assistant, an Android app for reading recipes. ': [
        'Uses Android TextToSpeech to read recipes aloud, and PocketSphinx to respond to voice commands.',
        'Written in Java, I converted the app to Kotlin in 2018. It was then refactored to utilize the Paging library and Room for an offline first experience with infinite scrolling. Retrofit is used for networking.',
      ],
      'Developed Artzee and continued development of Android Flashcards.': [],
      'Built portfolio website, AJSF.TECH, using Gatsby and React.': [],
    }

    const work1 = {
      'Wrote Python scripts and simple GUI apps to automate repetitive tasks': [],
      'Managed the transition of Electronic Data Interchange transactions from HIPAA 4010 to HIPAA 5010 standards. Coordinated with multiple teams and clients to ensure a smooth transition.': [],
      'Managed upgrade of the Medicaid claims processing system to support ICD-10 standards. Identified system changes necessary to ensure a smooth transition and performed testing to verify changes were correctly implemented.': [],
      'Researched and troubleshot issues with claims processing system.': [],
    }

    const work2 = {
      'Earned the company monetary incentives by scoring perfectly on monthly Service Level Agreement report cards.': [],
      'Supervised two teams responsible for data entry and medical claims processing.': [],
      'Monitored OCR claims processing.': [],
    }

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
            <h1>Aaron Friedman</h1>
            <h2 className="resume-item">Technical Skills</h2>
            <ResumeItem
              title="Languages"
              items={['Kotlin, Java, JavaScript, Python']}
            />

            <ResumeItem
              title="Frameworks/  Libraries"
              items={[
                'Android, RxJava, Android Jetpack,',
                'Retrofit, Picasso, JUnit, Mockito, Espresso,',
                'React Native, ReactJS, Gatsby, Spring Boot',
              ]}
            />
            <ResumeItem
              title="Tools"
              items={[' Android Studio, Git, Firebase, Docker']}
            />
            <ResumeItem
              title="Other"
              items={[
                'Google Material Design, Reactive Programming, Dependency Injection,',
                'Unit Testing, Object Oriented Design, Design Patterns',
              ]}
            />
            <br />
            <h2 className="resume-item">Work Experience</h2>
            <ResumeWorkItem
              title={'INDIE ANDROID DEVELOPER'}
              dates={'May 2017 - Present'}
              items={work0}
            />
            <ResumeWorkItem
              title={'SYSTEMS ANALYST / CONDUENT (FORMERLY XEROX)'}
              dates={'August 2010 - October 2018'}
              items={work1}
            />
            <ResumeWorkItem
              title={'CLAIMS SUPERVISOR / XEROX (FORMERLY ACS INC.)'}
              dates={'September 2007 – August 2010'}
              items={work2}
            />
            <h2 className="resume-item">Education</h2>
            <h3>SAN FRANCISCO STATE UNIVERSITY</h3>
            <p>Graduated Cum Laude with a BA in Radio and Television</p>
            <h2 className="resume-item">Certifications</h2>
            <h4>Triplebyte</h4>
            <p>
              April 2019 - {' '}
              <a href="https://triplebyte.com/certificate/SartCl8">
                 Triplebyte certified Android Engineer
              </a>
            </p>
            <h2 className="resume-item">Other Information</h2>
            <h4>Audio Engineer</h4>
            <p>Fort Union Studio, Yucky Apple Studio</p>
            <h4>Bassist</h4>
            <p className="resume-item">
              for <a href="https://www.quadraphonix.com/">Quadraphonix</a>, a
              Hawaii-based, freeform world beat band.
            </p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default ResumePage

export const pageQuery = graphql`
  query ResumePage {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
