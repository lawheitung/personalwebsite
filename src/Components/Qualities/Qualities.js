import React, { Component } from 'react'
import './qualities.scss'

export default class Qualities extends Component {
    render() {
        const { id, quote, link} = this.props.qualities;

        return (
            <session className="quality-info">
                <div className="quality-links">
                    <a className='quality-link' href = {link} target="_blank">{quote}</a>
                </div>
            </session>
        )
    }
}