import React, { Component } from 'react'
import './projectlist.scss'
import Project from '../Project/Project'
//import {projectData} from '../../projectData'

export default class Projectlist extends Component {
     
    render() {
        // console.log(this.state.journeys)
        return (
            <div className="backgroundColor">
                <section className="projectlist">
                <div class="sectionHeader2">
                    <span class="header2 ver1">
                        <strong>What I have created</strong>
                    </span>
		        </div>
                    {
                        // journeys.map(journey => (<Journey key= { journey.id } journey = { journey } />))
                    }
                
            </section>
            </div>
            
        )
    }
}
