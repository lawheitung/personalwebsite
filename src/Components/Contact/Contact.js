import '../../App'
import './contact.scss'
import React, { Component } from 'react'
import {IoMdPin} from 'react-icons/io'
import {FaEnvelope, FaFonticons} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {IoLogoGithub} from 'react-icons/io'

export default class Contact extends Component {
    render() {
        return (
            <footer className="text-center">
                <row>
                <div className="row2">
                    <div className="col1">
                        <h1>
                            let's connect
                        </h1>
                    </div>
                    <div className="col2">
                        <div className="col2row1">
                            tiffany law
                        </div>  
                        <div className="col2row2">
                            <IoMdPin/>Hong Kong
                    </div>
                </div>
                </div>
                <div className="social-container">
                    <a href="https://twitter.com/lawheitungg" className="twitter social">
                        <FaTwitter/>
                    </a>
                    <a href="https://github.com/lawheitung" className="github social">
                    <IoLogoGithub/>
                    </a>
                    <a href="https://www.linkedin.com/in/tiffanylaw429/" className="linkedin social">
                        <FaLinkedinIn/>
                    </a>
                    <a href="mailto:webmaster@example.com" className="email social" size="2x">
                        <FaEnvelope/>
                    </a>
                </div>      
                </row>
            </footer>
        )
    }
}
