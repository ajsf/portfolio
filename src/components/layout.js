import React from 'react'

import '../assets/scss/main.scss'
import Header from './Header'
import Menu from './Menu'
import Footer from './Footer'

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuVisible: false,
      loading: 'is-loading',
    }
    this.childRef = React.createRef()
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' })
    }, 100)
    document.addEventListener('keydown', this.handleEscape, false)
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
    document.removeEventListener('keydown', this.handleEscape, false)
  }

  handleToggleMenu = () => {
    this.setState({
      isMenuVisible: !this.state.isMenuVisible,
    })
  }

  handleBodyClick = e => {
    if (!this.childRef.current.contains(e.target) && this.state.isMenuVisible) {
      e.preventDefault()
      this.handleToggleMenu()
    }
  }

  handleEscape = e => {
    if (e.keyCode === 27 && this.state.isMenuVisible) {
      e.preventDefault()
      this.handleToggleMenu()
    }
  }

  render() {
    const { children } = this.props

    return (
      <div
        className={`body ${this.state.loading} ${
          this.state.isMenuVisible ? 'is-menu-visible' : ''
        }`}
        onClick={this.handleBodyClick}
      >
        <div id="wrapper">
          <Header onToggleMenu={this.handleToggleMenu} />
          {children}
          <Footer />
        </div>
        <Menu domRef={this.childRef} onToggleMenu={this.handleToggleMenu} />
      </div>
    )
  }
}

export default Layout
