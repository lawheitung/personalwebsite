import React, { Component } from 'react'
import './projectlist.scss'
import Project from '../Projectdetails/Projectdetails'
import {projectData} from '../../projectData'

export default class Projectlist extends Component {
        state = {
            projects: projectData
        };
    render() {
        // console.log(this.state.journeys)
        const { projects } = this.state;
        return (
            <div className="backgroundColor1">
                <section className="projectlist">
                <div class="sectionHeader">
                    <span class="header ver2">
                        <strong>What I have created</strong>
                    </span>
		        </div>
                    {
                        projects.map(project => (<Project key= { project.id } project = { project } />))
                    }
                
                </section>
            </div>
            
        )
    }
}
