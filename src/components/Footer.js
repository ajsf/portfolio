import React from 'react'

const Footer = props => (
  <footer id="footer">
    <div className="inner">
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
              <input type="text" name="name" id="name" placeholder="Name" />
            </div>
            <div className="field half">
              <input type="email" name="email" id="email" placeholder="Email" />
            </div>
            <div className="field">
              <textarea name="message" id="message" placeholder="Message" />
            </div>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send" className="primary" />
            </li>
          </ul>
        </form>
      </section>
      <section>
        <h2>Links</h2>
        <ul className="icons">
          <li>
            <a href="https://github.com/ajsf" className="icon style2 fa-github">
              <span className="label">GitHub</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/aaron-js-friedman/"
              className="icon style2 fa-linkedin"
            >
              <span className="label">GitHub</span>
            </a>
          </li>
          <li>
            <a
              href="mailto:aaron.js.friedman@gmail.com"
              className="icon style2 fa-envelope-o"
            >
              <span className="label">Email</span>
            </a>
          </li>
        </ul>
      </section>
    </div>
  </footer>
)

export default Footer
