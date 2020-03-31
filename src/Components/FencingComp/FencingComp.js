import React, { Component } from 'react'
import './fencingcomp.scss'

export default class FencingComp extends Component {
    render() {
        const { id, title, description, img } = this.props.fencingcomp;

        return (
                <div className="container">
                    <div className="hovereffect">
                        <img className="img-responsive" src={img}alt=""/>
                            <div className="overlay">
                                <h2>{title}</h2>
                                <p>{description}</p>
                            </div>

                    </div>
                
                {/* <div className="container">
                    <article className="fencingcomp">
                        <div className="fencingcomp-info">
                            <p>{description}</p>
                            <p> {title} </p>
                            <div className="img-container">
                                <img src={img} alt="fencing" />
                            </div>
                        </div>
                    </article>
                </div> */}
                
            </div>
        )
    }
}


