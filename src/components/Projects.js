import React from 'react'
import tracker from '../assets/tracker.png'
import recipe from '../assets/recipe.png'
import weather from '../assets/weather.png'
import qr from '../assets/qr.jpg'
import editor from '../assets/editor.png'
import './Projects.css'
const Projects = () => {
  return (
    <div className='projects' id='projects'>
        <center><p className='projectsHead'>Projects</p></center>
        <div className='projectSect'>
            <div className='eachProject'>
                <div className='projectText'>
                    <img className='projectImg' src={tracker} alt='healthTracker'/>
                    <p className='projectHead'>Health-Tracker</p>
                    <div className='projectTech'>
                      <button className='tech'>React Js</button>
                      <button className='tech'>Express Js</button>
                      <button className='tech'>MongoDB</button>
                    </div>
                    <p className='projectAbt'>Built a full-stack-web application which allows users to add, 
                      update, view workouts making them to stay motivated and track their progress through
                      user-friendly interface. </p>
                </div>
                <div className='btnText'>
                  <a href='https://github.com/Pavani1006/Fitness_Tracker' className='cdbtn'>View Code</a>
                  <a href='https://fitness-monitor.netlify.app/' className='appbtn'>Live Demo</a>
                </div>
            </div>
            <div className='eachProject'>
                <div className='projectText'>
                    <img className='projectImg' src={recipe} alt='recipe-finder'/>
                    <p className='projectHead'>Recipe-Finder</p>
                    <div className='projectTech'>
                      <button className='tech'>React Js</button>
                      <button className='tech'>Edamam API</button>
                      <button className='tech'>MongoDB</button>
                    </div>
                    <p className='projectAbt'>Developed React project with Edamam API and MongoDB to store user details.
                    Users can explore a vast collection of recipes with detailed ingredients, 
                      step-by-step procedures. </p>
                </div>
                <div className='btnText'>
                  <a href='https://github.com/Pavani1006/Recipe_finder' className='cdbtn'>View Code</a>
                  <a href='https://fav-foodsearch.netlify.app/' className='appbtn'>Live Demo</a>
                </div>
            </div>
            <div className='eachProject'>
                <div className='projectText'>
                    <img className='projectImg' src={weather} alt='weather'/>
                    <p className='projectHead'>Weather-Forecasting</p>
                    <div className='projectTech'>
                      <button className='tech'>React Js</button>
                      <button className='tech'>OpenWeatherman-API</button>
                    </div>
                    <p className='projectAbt'>Built a React project with openWeatherman API.  Users can explore current 
                      weather conditions and ensures them to stay informed about weather changes</p>
                </div>
                <div className='btnText'>
                  <a href='https://github.com/Pavani1006/Weather-App' className='cdbtn'>View Code</a>
                  <a href='https://weatherapp-ebf10.web.app/' className='appbtn'>Live Demo</a>
                </div>
            </div>
            <div className='eachProject'>
                <div className='projectText'>
                    <img className='projectImg' src={qr} alt='qr-generator'/>
                    <p className='projectHead'>QR-Code-Generator</p>
                    <div className='projectTech'>
                      <button className='tech'>JavaScript</button>
                      <button className='tech'>EJS</button>
                      <button className='tech'>CSS</button>
                    </div>
                    <p className='projectAbt'>Application developed in React allows users to create, customize QR codes
                    for URLs, text, contact information and provides real-time previews and uses EJS for rendering the interface.</p>
                </div>
                <div className='btnText'>
                  <a href='https://github.com/Pavani1006/Qrcode-Generator' className='cdbtn'>View Code</a>
                  <a href='https://qrcode-generator-1.onrender.com/' className='appbtn'>Live Demo</a>
                </div>
            </div>
            <div className='eachProject'>
                <div className='projectText'>
                    <img className='projectImg' src={editor} alt='qr-generator'/>
                    <p className='projectHead'>Live-Editor</p>
                    <div className='projectTech'>
                      <button className='tech'>React Js</button>
                      <button className='tech'>CSS</button>
                    </div>
                    <p className='projectAbt'>Built using React which allows users to write and edit code in real-time with
                      live rendering. Users can write HTML, CSS, and JS code separately and can simultaneously modify them.</p>
                </div>
                <div className='btnText'>
                  <a href='https://github.com/Pavani1006/Live-Editor' className='cdbtn'>View Code</a>
                  <a href='https://code-editor-a71bf.web.app' className='appbtn'>Live Demo</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects
