import React from 'react'
import { navigate } from 'gatsby'

import isEmail from 'validator/lib/isEmail'
import trim from 'validator/lib/trim'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

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

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
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
          onSubmit={this.handleSubmit}
          action="/thanks"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <input name="bot-field" onChange={this.handleChange} />
          </p>
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
