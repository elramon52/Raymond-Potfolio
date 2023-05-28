import React from 'react'
import './services.css'
import ListServices from './listServices'


export const Services = () => {
  return (
    <section id="services">
     
      <h2>Services I offer
      <ol>
<li><a href="network-installation-and-configuration.html">Network installation and configuration</a></li>
<li><a href="network-security.html">Network security</a></li>
<li><a href="network-monitoring.html">Network monitoring</a></li>
<li><a href="network-troubleshooting.html">Network troubleshooting</a></li>
<li><a href="network-training.html">Network training</a></li>
</ol>
      </h2>
     
      <div className="container services__container">
        <ListServices />
      </div>
    </section>
  );
}
export default Services;