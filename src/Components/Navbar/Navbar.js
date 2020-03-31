import './navbar.scss'
//import {FaAlignRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'

import React, { Component } from 'react'

// export default class Navbar extends Component {
//     render() {
//         state={
//             isOpen:false
//         }
//         handleToggle = () =>{
//             this.setState({isOpen:!this.state.isOpen})
//         }
//         return (
//             <div className="nav-center">
//                 <div className="nav-header">
//                     <Link to ="/">

//                     </Link>
//                 </div>
                
//             </div>
//         )
//     }
// }


export default function Navbar() {
    return (
       <nav className="navbar">
        <ul className="nav-links">
            <li>
                <a href="/" className="nav-link active">
                    Home
                </a>
            </li>
            <li>
                <a href="/Projects" className="nav-link">
                    Projects
                </a>
            </li>
            <li>
                <a href="/Resume" className="nav-link">
                    Resume
                </a>
            </li>
        </ul>
       </nav>
    )
}

//       <img src= {logo} alt="TiffanyLaw" />
