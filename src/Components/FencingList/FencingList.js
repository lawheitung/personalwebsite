import React, { Component } from 'react'
import './fencinglist.scss'
import FencingComp from '../FencingComp/FencingComp'
import {fencingData} from '../../fencingData'

export default class FencingList extends Component {
    state = {
        fencingcomps: fencingData
    };
     
    render() {
        // console.log(this.state.journeys)
        const { fencingcomps } = this.state;
        return (
            <div className="backgroundColor3">
                <div class="sectionHeader3">
                    <span class="header3 ver3">
                        <strong>I'm intrigued by weapons, foil in particular</strong>
                    </span>
		        </div>
                <div className="content">
                    <p>Fencing has improved me as a person in most ways... except nimberness.
                        It connects me to the world, an iterative cycle of improvements and a decade of friendships. </p>
                </div>
                <section className="fencinglist">
                    {
                        fencingcomps.map(fencingcomp => (<FencingComp key= { fencingcomp.id } fencingcomp = { fencingcomp } />))
                    }
                
                </section>
            </div>
            
        )
    }
}
