import React, { Component } from 'react'
import './qualitylist.scss'
import Qualities from '../Qualities/Qualities'
import {qualityData} from '../../qualityData'

export default class QualityList extends Component {
    state = {
        qualitiess: qualityData
    };

    
     
    render() {
        // console.log(this.state.journeys)
        const { qualitiess } = this.state;
        return (
            <div className="backgroundColor2">
                <div className="qualitylist">
                    <div class="sectionHeader2">
                        <span class="header2 ver1">
                            <strong>My game plan</strong>
                        </span>
		            </div>
                </div>
                
                <section className="qualitylist">
                {
                    qualitiess.map(qualities => (<Qualities key= { qualities.id } qualities = { qualities } />))
                }
                
                </section>
            </div> 
            
        )
    }
}
