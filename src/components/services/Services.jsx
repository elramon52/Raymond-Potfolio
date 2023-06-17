import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
     <h5>What I Offer</h5>
     <h2>Services</h2>
     <div className="container services_container">
       <article className="service">
         <div className="service_head">
           <h3>UI/UX Design</h3>
         </div>
         <ul className="service_list">
           <li>
             <BiCheck className='service_list-icon' />
             <p>User-centric and visually appealing design solutions.</p>
           </li>
           <li>
             <BiCheck className='service_list-icon' />
             <p>Wireframing and prototyping for intuitive user experiences.</p>
           </li>
           <li>
             <BiCheck className='service_list-icon' />
             <p>Responsive and accessible designs for various devices.</p>
           </li>
           <li>
             <BiCheck className='service_list-icon' />
             <p>Collaboration with developers to implement seamless UI/UX.</p>
           </li>
           <li>
             <BiCheck className='service_list-icon' />
             <p>Usability testing and iteration for optimal user engagement.</p>
           </li>
         </ul>
       </article>
       {/* END OF UI/UX DESIGN ARTICLE */}
       <article className="service">
         <div className="service_head">
           <h3>Web Development</h3>
         </div>
         <ul className="service_list">
           <li>
             <BiCheck className='service_list-icon' />
             <p>Responsive and interactive websites tailored to client needs.</p>
           </li>
           <li>
             <BiCheck className='service_list-icon' />
             <p>Front-end development using modern web technologies.</p>
           </li>
           <li>
             <BiCheck className='service_list-icon' />
             <p>Back-end development for dynamic and secure web applications.</p>
           </li>
           <li>
             <BiCheck className='service_list-icon' />
             <p>Database management and integration with web systems.</p>
           </li>
           <li>
             <BiCheck className='service_list-icon' />
             <p>Testing, debugging, and maintaining web applications.</p>
           </li>
         </ul>
       </article>
      {/* END OF WEB DEVELOPMENT */}

      <article className="service">
         <div className="service_head">
           <h3>Content Creation</h3>
         </div>
         <ul className="service_list">
           <li>
             <BiCheck className='service_list-icon' />
             <p>Engaging and persuasive written content for websites.</p>
           </li>
           <li>
             <BiCheck className='service_list-icon' />
             <p>SEO optimization to improve search engine visibility.</p>
           </li>
           <li>
             <BiCheck className='service_list-icon' />
             <p>Copywriting for marketing materials and promotional campaigns.</p>
           </li>
           <li>
             <BiCheck className='service_list-icon' />
             <p>Content editing and proofreading for accuracy and clarity.</p>
           </li>
           <li>
             <BiCheck className='service_list-icon' />
             <p>Content strategy and planning to drive audience engagement.</p>
           </li>
         </ul>
       </article>
       {/* END OF CONTENT CREATION */}
     </div>
    </section>
  )
}

export default Services;
