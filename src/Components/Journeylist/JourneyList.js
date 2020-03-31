import React, { Component } from 'react'
import './journeylist.scss'
import Journey from '../Journey/Journey'
import {journeyData} from '../../journeyData'

export default class Journeylist extends Component {
    state = {
        journeys: journeyData
    };

    
     
    render() {
        // console.log(this.state.journeys)
        const { journeys } = this.state;
        return (
            <div className="backgroundColor1">
                <section className="journeylist">
                <div class="sectionHeader">
                    <span class="header ver2">
                        <strong>My journey to adulting so far</strong>
                    </span>
		        </div>
                    {
                        journeys.map(journey => (<Journey key= { journey.id } journey = { journey } />))
                    }
                
            </section>
            </div>
            
        )
    }
}
