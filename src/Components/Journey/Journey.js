import React, { Component } from 'react'
import './journey.scss'

export default class Journey extends Component {
    render() {
        const { id, city, img, companyname, position, info, period } = this.props.journey;

        return (
            <article className="journey">
                <div className="img-container">
                    <img src={img} alt="company" />
                </div>
                <div className="journey-info">
                    <h2>{companyname}</h2>
                    <h4>{position}, <i>{period}</i></h4>  
                    <p> {info} </p>
                </div>
            </article>
        )
    }
}


/*
*/
