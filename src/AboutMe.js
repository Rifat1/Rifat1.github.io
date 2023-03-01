import React, {Component} from 'react';
import image from './my-pic.jpg'
import './AboutMe.css';

const AboutMe = () => {
    return (
    <div className="about-me">
        <img src={image} alt="my picture" />
        <div><p style={{color:'grey'}}>Hello I'm</p></div>
        <h2>Abdur Rahman Abul Hossain</h2>
        <p id='bio'>I'm a final year Computer Science student at MUN. I have worked on various projects and have developed a deep understanding of software development best practices. My passion for technology drives me to learn and stay up-to-date with the ever-evolving software development trends. I am a self-motivated problem solver and passionate about creating innovative and reliable software solutions. I am eager to work with a team to help create amazing experiences</p><br/>
        <button className='button-31' role="button">My Projects</button>
    </div>)
}

export default AboutMe;