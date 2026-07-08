import React from 'react'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'



const Home = () => {
  return (
    <div className="img" >
        <img src="src/assets/imagess/portfolio.png "  width="100%" height="700"/>
        <About />
        <Skills />
        <Projects />
      
    </div>
  )
}

export default Home
