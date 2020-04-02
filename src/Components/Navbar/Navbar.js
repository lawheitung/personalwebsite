import React, { Component } from 'react'
import './navbar.scss'
import {NavLink} from 'react-router-dom'
import logo from '../../logo.svg'
import {FaAlignRight} from 'react-icons/fa'
// import Rxjs from 'rxjs';

export default class Navbar extends Component {
    state = {
      isOpen: false
    };
    handleToggle = () => {
      this.setState({ isOpen: !this.state.isOpen });
    };

    // constructor (props){
    //   super(props);

    //   this.state={
    //     isMin: false,
    //   }

    // }

    // componentDidMount(){
    //   Rxjs.Observable.fromEvent(window, 'scroll')
    //   .subscribe(e => {
    //     if(window.scrollY>60){
    //       this.setState ({ isMin: true});
    //     } else {
    //       this.setState({ isMin: false });
    //     }
    //   });
    // }



    render() {
      return (
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
              <li>
                <NavLink exact to="/resume" className="nav-link" activeClassName="active-nav-link">Resume</NavLink>
              </li>
            </ul>
          </div>
        </nav>
        </div>
      );
    }
  }

// export default class Navbar extends Component {
//     render() {
//         state = {
//             isOpen:false
//         }
//         handleToggle = () => {
//             this.setState({toggle:!this.state.toggle})
//         }
//         return (
//             <nav className="navbar">
//                 <div className="nav-center">
//                     <Link to ="/">
//                         <img src={logo} alt="Beach Resort"></img>
//                     </Link>
//                 </div>
//             </nav>
//         )
//     }
// }


// export default function Navbar() {
//     return (
//        <nav className="navbar">
//         <ul className="nav-links">
//             <li>
//                 <a href="/" className="nav-link active">
//                     Home
//                 </a>
//             </li>
//             <li>
//                 <a href="/Projects" className="nav-link">
//                     Projects
//                 </a>
//             </li>
//             <li>
//                 <a href="/Resume" className="nav-link">
//                     Resume
//                 </a>
//             </li>
//         </ul>
//        </nav>
//     )
// }

//       <img src= {logo} alt="TiffanyLaw" />
