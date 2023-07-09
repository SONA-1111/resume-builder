import React, { Fragment } from 'react'
import Container from 'react-bootstrap/Container';
import Profile from './Profile';
import About from './About';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import { NavLink } from 'react-router-dom';

function Resume() {
  return (
    <Fragment>

      <div className='row back'>

        <div className='col-1'></div>
        <Container className='col-7 container-size' style={{ marginTop: "150px" }}>

          <Profile />

          <About />

          <Experience />

          <Education />

          <Skills />

          <div className="d-grid col-2 mx-auto my-4 text-center">
            <NavLink className="nav-link align-middle p-2 rounded custom-button" to="/preview">Preview</NavLink>
          </div>

        </Container>
        <div className='col-1'></div>
      </div>
    </Fragment>
  )
}

export default Resume