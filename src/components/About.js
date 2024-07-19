import React from 'react'
import cc from '../assets/cc.png'
import lt from '../assets/lt.jpg'
import hk from '../assets/hk.png'
import './About.css'
const About = () => {
  return (
    <div id='about'>
    <div className='abttxt'>
      <div className='abtPara'>
        <center><p className='abtHead'>About</p></center>
        <p className='abtContent'>I am a dedicated Web Developer, my commitment to continuous learning enables me to deliver innovative and effective solutions. 
        I frequently engage with problems related to competitive programming, data structures, and algorithms.
        I have worked on a range of projects, utilizing cutting-edge technologies like MongoDB, React, Express, Node.js. My passion for technology drives me to explore new tools and techniques.</p>
      </div>
      <div className='profiles'>
        <div className='profilesHead'>
        <center><p className='abtHead1'>My Profiles</p></center>
        </div>
        <div className='profilelink'>
          <div className='eachProfile'>
      <div className="max-w-xs w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 box1">
        <div className="flex flex-col items-center">
          <img className="w-full h-32 object-contain rounded-lg mb-4" src={cc} alt="logo" />
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            Code Chef
          </h5>
          <p className="mb-3 text-lg font-normal text-gray-700 dark:text-gray-400 text-center">
            Highest Rating: 1500
          </p>
          <a
            href="https://www.codechef.com/users/pavani_2004"
            className="inline-flex items-center px-3 py-2 text-lg font-normal text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            style={{ backgroundColor: '#028cba',color: 'white' }}
          >
            View Profile
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="max-w-xs w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 box1">
        <div className="flex flex-col items-center">
          <img className="w-full h-32 object-contain rounded-lg mb-4" src={lt} alt="logo" />
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            Leet Code
          </h5>
          <p className="mb-3 text-lg font-normal text-gray-700 dark:text-gray-400 text-center">
            Highest Rating: 1532
          </p>
          <a
            href="https://leetcode.com/u/pavani_999/"
            className="inline-flex items-center px-3 py-2 text-lg font-normal text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
             style={{ backgroundColor: '#028cba',color: 'white' }}
          >
            View Profile
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="max-w-xs w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 box1">
        <div className="flex flex-col items-center">
          <img className="w-full h-32 object-contain rounded-lg mb-4" src={hk} alt="logo" />
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            Hacker Rank
          </h5>
          <p className="mb-3 text-lg font-normal text-gray-700 dark:text-gray-400 text-center">
            Earned 3 Badges
          </p>
          <a
            href="https://www.hackerrank.com/profile/pavanivallem"
            className="inline-flex items-center px-3 py-2 text-lg font-normal text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            style={{ backgroundColor: '#028cba',color: 'white' }}
          >
            View Profile
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default About
