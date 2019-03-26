import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import ResumeWorkItem from '../components/ResumeWorkItem'
import { graphql } from 'gatsby'

class ResumePage extends React.Component {
  render() {
    const { title, description } = this.props.data.site.siteMetadata

    const work0 = [
      'Developing "String Tuner" app, which is currently in beta testing on the Google Play Store.',
      'Continued development of Artzee and Recipe Assistant apps for personal portfolio.',
      'Built portfolio website.',
    ]

    const work1 = [
      'Wrote Python scripts and simple GUI apps to automate repetitive tasks.',
      'Oversaw and managed the transition of Electronic Data Interchange (EDI) transactions to HIPAA 5010 standard. Coordinated  with EDI and systems teams, and medical billers to ensure smooth transition with no downtime in payments.',
      'Oversaw and managed upgrade of the Medicaid claims processing system to support ICD-10 standard. Identified system changes necessary to ensure a smooth transition for providers and performed testing to verify changes were correctly implemented.',
      'Researched and troubleshoot issues with claims processing system.',
      'Trained EDI Coordinators',
    ]

    const work2 = [
      'Earned the company monetary incentives by scoring perfectly on monthly Service Level Agreement report cards.',
      'Supervised two teams responsible for data entry and medical claims processing.',
      'Monitored OCR claims processing.',
    ]

    const work3 = [
      'Processed medical claims according to State of Hawaii Med-Quest Division guidelines.',
      'Performed backup medical claims data entry duties.',
    ]

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
            <h2 className="resume-item">Techincal Skills</h2>
            <p className="resume-item">
              <strong>Languages: </strong> Kotlin, Java, JavaScript, Python
            </p>
            <p className="resume-item">
              <strong>Frameworks/Libraries: </strong> Android, RxJava, Android
              Architecture Components
              <br />
              Retrofit, Picasso, JUnit, Mockito, Espresso
              <br />
              React Native, ReactJS, Gatsby, Spring Boot
            </p>
            <p className="resume-item">
              <strong>Tools: </strong> Android Studio, Git, Firebase, Docker
            </p>
            <p className="resume-item">
              <strong>Other: </strong> Google Material Design, Reactive
              Programming, Unit Testing, Object Oriented Design, Design Patterns
            </p>
            <br />
            <h2 className="resume-item">Work Experience</h2>
            <ResumeWorkItem
              title={'INDIE ANDROID DEVELOPER'}
              dates={'November 2018 - Present'}
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
            <ResumeWorkItem
              title={'CLAIMS RESOLUTION ASSOCIATE / ACS INC.'}
              dates={'November 2006 – September 2007'}
              items={work3}
            />
            <h2 className="resume-item">Education</h2>
            <h3>SAN FRANCISCO STATE UNIVERSITY</h3>
            <p>Graduated Cum Laude with a BA in Radio and Television</p>
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
