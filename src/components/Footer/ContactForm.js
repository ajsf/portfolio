import React from 'react'

import isEmail from 'validator/lib/isEmail'
import trim from 'validator/lib/trim'

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  formIsValid = () => {
    const name = trim(this.state.name)
    const email = trim(this.state.email)
    const message = trim(this.state.message)

    if (isEmail(email) && name.length >= 2 && message.length > 10) return true
    return false
  }

  render() {
    const submitButton = this.formIsValid() ? (
      <input type="submit" value="Send" className="primary" />
    ) : (
      <input disabled type="submit" value="Send" className="primary" />
    )

    return (
      <section>
        <h2>Get in touch</h2>
        <form
          name="contact"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          method="post"
          action="/success"
        >
          <input type="hidden" name="bot-field" />
          <div className="fields">
            <div className="field half">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="field half">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="field">
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
          <ul className="actions">
            <li>{submitButton}</li>
          </ul>
        </form>
      </section>
    )
  }
}

export default ContactForm
