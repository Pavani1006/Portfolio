import React from 'react';
import { ReactTyped as Typed } from 'react-typed';
import bg1 from '../assets/bg2.jpeg';
import './Home.css';

const Home = () => {
  const driveLink ="https://drive.google.com/file/d/1EPl64fd3SfYhl6EvdNxN73xo30HveOmz/view?usp=drivesdk";

  const handleClick = () => {
    window.open(driveLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className='intro' id='home'>
      <div className='introContent'>
        <span className='introText'>Hello I'm</span><br/>
        <span className='introAbout'>Pavani Vallem</span>
        <p className='introPara'> I'm a
          <span >
            <Typed
              className='highlt'
              strings={[
                "Competitive Programmer",
                "Full Stack Developer"
              ]}
              typeSpeed={70}
              backSpeed={60}
              loop
            />
          </span>
        </p>
        <p className='introtxt'>A Computer Science student passionate about programming, creating interactive and responsive web pages</p>
        <button className='resume' onClick={handleClick}>
          Check Resume
        </button>
      </div>
      <div className='introImg' ><img className='profile' src={bg1} alt='profile' /></div>
    </div>
  );
}

export default Home;


