import React from "react"

const Navbar = () => {
  return (
    <header className="p-navigation is-dark">
      <div className="p-navigation__row">
        <div className="p-navigation__banner">
          <div className="p-navigation__logo">
            <a className="p-navigation__item" href="https://canonical.com/">
              <img
                className="p-navigation__image"
                src="https://assets.ubuntu.com/v1/3c7954dd-logo-canonical-white.svg"
                alt="Canonical"
                width="95"
              />
            </a>
          </div>
        </div>
        <nav className="p-navigation__nav">
          <div className="p-navigation__item">
            <h4 className="p-navigation__link">HomeTask</h4>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
