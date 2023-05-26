import React from "react";
import "./experience.css";
import ListExperiences from "./components/listExperiences";

export const Experience = () => {
  return (
    <section id="experience">
     <h2>My Experience </h2>
     <ol>
<li>Network Engineer Intern, El-Groups Corporation, 2022</li>
<li>Helpdesk Technician CRTV News Agency, 2021</li>
<li>Volunteering with a local non-profit organization that provides computer access to people in need.</li>
<li>Participating in a hackathon or other networking event.</li>
<li>Creating a personal website or blog to showcase your skills and experience.</li>
<li>Getting involved in a professional networking organization, such as the Hauwei or ACM.</li>
<li>Taking online courses or tutorials to learn new networking technologies.</li>
</ol>
   
      <div className="container experience__container">
        <ListExperiences />
        
      </div>
    </section>
  );
};
export default Experience;
