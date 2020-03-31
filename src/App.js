import React, { Component } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Components/Navbar/Navbar';
import JourneyList from './Components/Journeylist/JourneyList';
import Intro from './Components/Intro/Intro';
import QualityList from './Components/QualityList/QualityList';
import FencingList from './Components/FencingList/FencingList'

import Home from './Pages/Home';

import Projects from './Pages/Projects'
import Resume from './Pages/Resume'

import {Route, Switch} from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Navbar />
        <Route exact path="/" component={Home}/>
        <Route exact path="/projects/" component={Projects}/>
        <Route exact path="/resume/" component={Resume}/>
    </div>
  )
}

// class App extends Component {
//   render(){
//     return (
      
      
//       <React.Fragment>
//         <Navbar/>

//         <Intro/>
//         <JourneyList/>
//         <FencingList/>
//         <QualityList/>
//       </React.Fragment>
//     );
//   }
  
// }

//export default App;
