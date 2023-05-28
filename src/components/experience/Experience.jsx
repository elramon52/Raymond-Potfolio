import React from "react";
import "./experience.css";
import ListExperiences from "./components/listExperiences";

export const Experience = () => {
  return (
    <section id="experience">
     <h2>My Experience </h2>
     <ol>
<li>1. Network Engineer Intern, El-Groups Corporation, 2022</li>
<li>2. Helpdesk Technician CRTV News Agency, 2021</li>
<li>3. Volunteering with a local non-profit organization that provides computer access to people in need.</li>
<li>4. Participating in a hackathon or other networking event.</li>
<li>5. Creating a personal website or blog to showcase your skills and experience.</li>
<li>6. Getting involved in a professional networking organization, such as the Hauwei or ACM.</li>
<li>7. Taking online courses or tutorials to learn new networking technologies.</li>
</ol>
   
      <div className="container experience__container">
        <ListExperiences />
        
      </div>
    </section>
  );
};
export default Experience;
