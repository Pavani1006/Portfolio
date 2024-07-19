import React from 'react'
import ht from '../assets/ht.png'
import css from '../assets/css.png'
import rt from '../assets/rt.png'
import ex from '../assets/ex.png'
import nd from '../assets/nd.jpg'
import db from '../assets/db.png'
import bt from '../assets/bt.png'
import tw from '../assets/tw.png'
import js from '../assets/js.png'
import c from '../assets/c.jpg'
import cpp from '../assets/cpp.png'
import py from '../assets/py.jpg'
import './Skills.css'
const Skills = () => {
  return (
    <div className='skills' id='skills'>
      <center><p className='skillsHead'>Skills</p></center>
      <center><p className='skillsHead1'>Technologies</p></center>
      <div className='skillsSect1'>
        <div className='skills1'>
            <img className='techlogo' src={rt} alt='react'/><p className='skilltxt'>React</p>
        </div>
        <div className='skills1'>
            <img className='techlogo' src={nd} alt='node'/><p className='skilltxt'>Node</p>
        </div>
        <div className='skills1'>
            <img className='techlogo' src={ex} alt='express'/><p className='skilltxt'>Express</p>
        </div>
        <div className='skills1'>
            <img className='techlogo' src={ht} alt='html'/><p className='skilltxt'>Html</p>
        </div>
        <div className='skills1'>
            <img className='techlogo' src={css} alt='css'/><p className='skilltxt'>Css</p>
        </div>
        <div className='skills1'>
          <img className='techlogo' src={db} alt='mongo'/><p className='skilltxt'>Mongo DB</p>
        </div>
        <div className='skills1'>
          <img className='techlogo' src={bt} alt='bootstrap'/><p className='skilltxt'>Bootstrap</p>
        </div>
        <div className='skills1'>
          <img className='techlogo' src={tw} alt='tailwindcss'/><p style={{fontSize: '1.1rem'}} className='skilltxt'>TailwindCss</p>
        </div>
        <div className='skills1'>
          <img className='techlogo' src={js} alt='js'/><p className='skilltxt'>JavaScript</p>
        </div>
      </div>
      <center><p className='skillsHead2'>Programming</p></center>
      <div className='skillsSect2'>
        <div className='skills2'>
           <img className='othrlogo' src={c} alt='c'/><p className='skilltxt'>C</p>
        </div>
        <div className='skills2'>
           <img className='othrlogo' src={cpp} alt='cpp'/><p className='skilltxt'>C++</p>
        </div>
        <div className='skills2'>
           <img className='othrlogo' src={py} alt='python'/><p className='skilltxt'>Python</p>
        </div>
      </div>
    </div>
  )
}

export default Skills
