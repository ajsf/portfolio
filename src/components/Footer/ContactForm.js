import React from 'react'
import { navigate } from 'gatsby'

import isEmail from 'validator/lib/isEmail'
import trim from 'validator/lib/trim'

const MIN_MESSAGE_LENGTH = 20

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

function isStringLengthValid(string, minLength) {
  return trim(string).length >= minLength
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
    if (this.isEmailValid() && this.isNameValid() && this.isMessageValid())
      return true
    return false
  }

  isNameValid = () => isStringLengthValid(this.state.name, 2)
  isMessageValid = () =>
    isStringLengthValid(this.state.message, MIN_MESSAGE_LENGTH)
  isEmailValid = () => isEmail(trim(this.state.email))

  render() {
    const submitButton = this.formIsValid() ? (
      <input type="submit" value="Send" className="primary" />
    ) : (
      <input disabled type="submit" value="Send" className="primary" />
    )

    const nameWarning =
      this.state.name !== '' && !this.isNameValid() ? (
        <p className="warning">Name length must be at least 2</p>
      ) : null

    const emailWarning =
      this.state.email !== '' && !this.isEmailValid() ? (
        <p className="warning">Please enter a valid email address</p>
      ) : null

    const messageWarning =
      this.state.message !== '' && !this.isMessageValid() ? (
        <p className="warning">
          Message length must be at least {MIN_MESSAGE_LENGTH}
        </p>
      ) : null

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
              {nameWarning}
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
              {emailWarning}
            </div>
            <div className="field">
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                onChange={this.handleChange}
                required
              />
              {messageWarning}
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
