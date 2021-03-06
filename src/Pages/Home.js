import React, { Component } from 'react';
import JourneyList from '../Components/Journeylist/JourneyList';
import QualityList from '../Components/QualityList/QualityList';
import FencingList from '../Components/FencingList/FencingList';
import Hero from '../Components/Hero/Hero'
import Contact from '../Components/Contact/Contact'
import Travel from '../Components/Travel/Travel'

export default function Home(){
    return (
      <React.Fragment>
        <Hero max="true"/>
        <JourneyList/>
        <FencingList/>
        <Travel/>
        <QualityList/>
        <Contact/>
      </React.Fragment>
    );
  }


