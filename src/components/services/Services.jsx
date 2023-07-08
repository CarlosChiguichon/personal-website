import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">

        <article className="service">
          <div className="service__head">
            <h3>Web development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Website Development: I specialize in designing and building websites from scratch or customizing existing templates. I handle all aspects of the development process, including layout design, coding, and integrating functionality.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Front-End Development: I excel at creating visually appealing and interactive user interfaces using HTML, CSS, and JavaScript. I ensure that the websites I develop are responsive and provide an exceptional user experience.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Back-End Development: I have knowledge in building the server-side functionality of websites. I work with programming languages like JAVA, Python, or JavaScript (Node.js) to handle data storage, retrieval, and processing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Web Application Development: I excel at building dynamic and interactive web applications such as social media platforms, online collaboration tools, or customer relationship management (CRM) systems.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Responsive Web Design: I ensure that the websites I develop are optimized for various devices and screen sizes. I create responsive designs that adapt and provide a consistent user experience across desktops, tablets, and mobile devices.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Website Maintenance and Support: I offer ongoing maintenance services to keep websites up-to-date, secure, and running smoothly. I provide regular updates, bug fixes, and troubleshooting to ensure optimal website performance.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>IT services</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>IT Support and Troubleshooting: I provide technical support to users within the organization, resolving hardware and software issues. I assist with troubleshooting network connectivity problems, resolving software conflicts, and providing guidance on technology-related inquiries.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Network Infrastructure Management: I specialize in managing and maintaining the network infrastructure of organizations. This includes setting up and configuring network devices, monitoring network performance, and troubleshooting network issues.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>System Administration: I excel at managing and maintaining computer systems and servers. I handle tasks such as system configuration, user management, software installation and updates, and system monitoring.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>IT Consultation: I provide expert advice and recommendations on IT strategies, infrastructure upgrades, and technology solutions that align with organizational goals. I stay up-to-date with the latest industry trends and technologies to offer valuable insights.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>IT Asset Management: I manage the inventory of IT assets within the organization, including hardware, software licenses, and warranties. I ensure proper documentation, tracking, and maintenance of assets to optimize their utilization and streamline procurement processes.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services