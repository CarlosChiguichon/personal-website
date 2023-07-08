import React from 'react'
import './JobExperience.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.png'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'TELUS INTERNATIONAL (FFH - PureFiber)',
    review: 'In summary, as a technical support agent for fiber services, I am committed to providing excellent customer service and resolving technical issues promptly. I have a strong grasp of fiber-optic network technologies and possess the skills necessary to assist customers in troubleshooting and resolving their connectivity concerns effectively.'
  },
  {
    avatar: AVTR2,
    name: 'TELUS INTERNATIONAL (Google Apps)',
    review: 'My primary responsibility was to address customer inquiries and troubleshoot technical issues related to Google products such as Google Workspace (formerly G Suite), Google Cloud Platform, Google Ads, Google Analytics, and more. I have a deep understanding of the features, functionalities, and best practices associated with these products.'
  },
  {
    avatar: AVTR3,
    name: 'Alorica (METRO PCS)',
    review: 'As a tech support agent for MetroPCS, I played a vital role in providing technical assistance to customers and ensuring their satisfaction with MetroPCS services. I was dedicated to delivering exceptional customer service and resolving various technical issues they encountered.'
  },
  {
    avatar: AVTR4,
    name: 'Atento Guatemala (Disney+)',
    review: 'As a Disney+ tech support agent, I played a crucial role in assisting customers and ensuring their optimal experience with the streaming platform. I was dedicated to providing exceptional customer service and resolving any technical issues they encountered while using Disney+.'
  },
]

const JobExperience = () => {
  return (
    <section id='jobexperience'>
      <h5>My Experience </h5>
      <h2>Job Experience</h2>

      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar}/>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default JobExperience