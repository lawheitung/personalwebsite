import React, { Component } from 'react'
import './travel.scss'
//import TravelMap from '../TravelMap/TravelMap'
//import {travelmapData} from '../../travelmapData'
import MapGL, { Marker,NavigationContro, Popup } from 'react-map-gl';
import img from './pin.svg'


const MAPBOX_TOKEN ='pk.eyJ1IjoibGF3aGVpdHVuZyIsImEiOiJjazh0dHMxNzEwNDEzM21vM2Z2M2FsbjljIn0.y1ygmbLRRSswPtVrQsMBUQ'



export default class Travel extends Component {
    constructor(props) {
        super(props);
        this.state = {
          viewport: {
            latitude: 30,
            longitude: 0,
            zoom: 1.5,
            bearing: 0,
            pitch: 0
          },
        //travelmap: travelmapData

        };
      }
    
      render() {
        const {viewport} = this.state;
        //const { id, longitude, latitude } = this.props.travelmap;
        return (
        <div className="backgroundColor1">
            <section className="journeylist">
                <div class="sectionHeader">
                    <span class="header ver2">
                        <strong>Wanderlist items checked</strong>
                    </span>
                </div>
            <MapGL
                {...this.state.viewport}
                width="60vw"
                height="60vh"
                center="center"
                mapStyle="mapbox://styles/mapbox/streets-v11"
                onViewportChange={viewport => this.setState({viewport})}
                mapboxApiAccessToken={MAPBOX_TOKEN}
            >
                    {/* SF */}
                    <Marker latitude={37.8} longitude={-122.41}>
                      <img src={img} className='marker'/>
                    </Marker>

                    {/* LA */}
                    <Marker anchor ="bottom" latitude={34.05} longitude={-118.24}>
                      <img src={img} className='marker'/>
                    </Marker>

                    {/* LV */}
                    <Marker latitude={36.17} longitude={-115.14}>
                      <img src={img} className='marker'/>
                    </Marker>

                    {/* GC */}
                    <Marker latitude={36.1} longitude={-112.11}>
                      <img src={img} className='marker'/>
                    </Marker>

                    {/* London*/}
                    <Marker latitude={51.399206} longitude={0}>
                      <img src={img} className='marker'/>
                    </Marker>

            </MapGL>
            </section>
        </div>
          
        );
      }
    }