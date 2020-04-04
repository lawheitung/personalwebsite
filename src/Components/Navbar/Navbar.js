import React, { Component } from 'react'
import './navbar.scss'
import {NavLink} from 'react-router-dom'
import logo from '../../logo.svg'
import {FaAlignRight} from 'react-icons/fa'
import styled from 'styled-components'

export default class Navbar extends Component {
    state = {
      isOpen: false
    };
    handleToggle = () => {
      this.setState({ isOpen: !this.state.isOpen });
    };

    render() {
      return (
      <NavWrapper>
        <div className="navbar">
        <nav className="navbar">
          <div className="nav-center">
            <div className="nav-header">
              <button
                type="button"
                className="nav-btn"
                onClick={this.handleToggle}
              >
                <FaAlignRight className="nav-icon" />
              </button>
            </div>
            <ul
              className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
            >
              <li>
                <NavLink exact to="/" className="nav-link" activeClassName="active-nav-link">Home</NavLink>
              </li>
              <li>
                <NavLink exact to="/projects" className="nav-link" activeClassName="active-nav-link">Projects</NavLink>
              </li>
            </ul>
          </div>
        </nav>
        </div>
      </NavWrapper>
        
      );
    }
  }

  const NavWrapper = styled.nav`
  position:sticky;
  position:-webkit-sticky;
  top:0;
  z-index:999;
  `