import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import testimonials from '../../assets/testimonial.png';
import { testidata } from '../../export.js';
import { FaQuoteLeft } from 'react-icons/fa';

const Clients = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: 'ease-in-sine',
    });
  }, []);

  return (
    <section id='testimonials' className='w-full mx-auto py-16 bg-gray-800 px-8 lg:px-20'>
      <div className='max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-10 py-16'>
        <div className='lg:w-[50%] w-full'>
          <img
            data-aos='fade-right'
            data-aos-delay='200'
            src={testimonials}
            alt='testemunhos'
            className='w-full h-auto rounded-lg shadow-lg'
          />
        </div>
        <div className='lg:w-[50%] w-full flex flex-col justify-center items-center lg:items-start gap-4'>
          <h2
            data-aos='fade-left'
            data-aos-delay='200'
            className='text-lime-300 text-2xl font-semibold tracking-tight text-center lg:text-left'
          >
            TESTEMUNHOS
          </h2>
          <h2
            data-aos='zoom-in'
            data-aos-delay='200'
            className='font-semibold lg:text-4xl text-3xl lg:leading-tight text-gray-100 tracking-tighter'
          >
            O que nossos clientes dizem
          </h2>
          <div data-aos='zoom-in' data-aos-delay='300' className='w-full mt-10'>
            {testidata.map((item, index) => (
              <div key={index} className='flex flex-col items-start gap-6 mb-8'>
                <div className='flex items-center gap-4'>
                  <div className='bg-gray-900 p-6 rounded-full'>
                    <FaQuoteLeft className='text-lime-300 text-4xl size-4' />
                  </div>
                  <div>
                    <h1 className='font-semibold text-2xl text-white'>{item.name}</h1>
                    <p className='text-lg text-gray-200'>{item.post}</p>
                  </div>
                </div>
                <p className='text-gray-300 text-lg'>{item.review}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
