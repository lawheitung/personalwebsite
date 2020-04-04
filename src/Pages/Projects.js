import React, { Component } from 'react'
import ProjectList from '../Components/ProjectList/ProjectList';
import Contact from '../Components/Contact/Contact'

export default function Project(){
    return (
      <React.Fragment>
        <ProjectList/>
        <Contact/>
      </React.Fragment>
    );
  }
