import React,{useRef} from 'react'
import emailjs from '@emailjs/browser';
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import './Contact.css'
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_3opzzth', 'template_dbth2mb', form.current, {
        publicKey: 'GBc1P0lOJWeECroGs',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className='contact' id='contact'>
        <center><div className='cntHead'>Contact</div></center>
        <form className='cntbox' ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder='Your name' name="from_name" required className='inputBox'/><br/>
            <input type="email" placeholder='Your Email' name="from_email" required className='inputBox' /><br/>
            <textarea rows={5} cols={20} placeholder='Your Message' name="message" className='inputBox'></textarea>
            <button type="submit" className='inputBox sendbtn' value="Send" >Submit</button>
        </form>
        <div className='footer'>
          <div className='logosect'>
          <a href='https://www.linkedin.com/in/pavani-vallem-73a603255/'><FaLinkedinIn className='flogo' /></a>
          <a href='https://github.com/Pavani1006'><TbBrandGithubFilled className='slogo' /></a>
          </div>
          <div className='locatsect'>
           <FaLocationDot className='locat' />
           <p >Gopalapatnam, Visakhapatnam, AndhraPradesh</p>
          </div>
          <div className='namef' ><p >&copy; {new Date().getFullYear()} Pavani Vallem. All rights reserved</p></div>
        </div>
    </div>
  )
}

export default Contact
