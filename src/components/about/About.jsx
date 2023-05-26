import React from 'react'
import './about.css'
import me from '../../assets/raymond.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return (
      <section id="about">
        <h5>Get to know</h5>
        <h2>About me</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me__image">
              <img src={me} alt="El-Ramon" />
            </div>
          </div>
          <div className="about__me__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>1+ Years</small>
              </article>
              <article className="about__card">
                <FiUsers className="about__icon" />
                <h5>Clients</h5>
                <small>3 world widely</small>
              </article>
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Projects</h5>
                <small>2 Completed</small>
              </article>
            </div>
            <p>I am a student at the University of Buea, where I am studying Network Engineering. I am passionate about technology and I am excited to learn more about how networks work. I am also interested in cybersecurity and I hope to one day work in that field.

In my spare time, I enjoy playing video games, reading, and spending time with my friends and family. I am also a member of the University of Buea's Computer Science Club.

I am a hard worker and I am always willing to learn new things. I am confident that I can make a significant contribution to the field of networking.

Skills

Proficient in a variety of networking technologies, including TCP/IP, routing, and switching
Experience with cybersecurity and penetration testing
Strong problem-solving and analytical skills
Excellent communication and teamwork skills
Experience

Network Engineer Intern, Acme Corporation, 2022
Helpdesk Technician, ABC Company, 2021
Education

Bachelor of Science in Network Engineering, University of Buea, 2023


            </p>
            <a href="#contact" className="btn btn-primary">
              Let's talk
            </a>
          </div>
        </div>
      </section>
    );
}

export default About
