import React from 'react'
import './intro.scss'
//import defaultBcg from '../myimg.jpg'
//import {Link} from "react-router-dom";

export default function Intro() {
    return (
        <section className="section">
           <div className="introtable">
            <div className="greetings">
                <p>
                    Howdy! I'm
                </p>
            </div>
            <div className="myname">
                <p>
                    – Tiffany Law –
                </p>
            </div>
           </div>
           
       </section>
    )
}

/*<>
            <Hero img={defaultBcg} title="404" max="true"/>
        </>
*/