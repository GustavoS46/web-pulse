import React, { useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { servicesinfo } from '../../export.js';

const Services = () => {
  useEffect(() => {
    AOS.init({
      offset: 150,
      duration: 600,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section
      id='services'
      className='w-full py-16 bg-gray-900'
    >
      <div className='max-w-screen-2xl mx-auto tracking-tight gap-12 px-8 lg:px-20 py-16'>
        <div className="flex flex-col items-start gap-4 m-5">
          <h2
            data-aos="fade-right"
            data-aos-delay="300"
            className="text-lime-300 text-2xl font-semibold tracking-tight text-left"
          >
            SERVIÇOS
          </h2>
          <h2 
            className="font-semibold lg:text-4xl text-3xl lg:leading-tight text-gray-100 tracking-tighter text-left"
          >
            Conheça algumas de 
            <br /> 
            nossas especialidades
          </h2>
        </div>
        <div
          data-aos='zoom-in'
          data-aos-delay='200'
          className='bg-gray-800 flex lg:flex-row flex-col justify-between items-center gap-12 py-10 rounded-3xl mx-5'
        >
          {servicesinfo.map((item, index) => (
            <div
              key={index}
              className='flex flex-col justify-center items-start gap-6 p-5 transition-transform transform hover:scale-105'
            >
              <img
                src={item.icon}
                alt={`Ícone do serviço ${item.title}`}
                className='w-12 h-12'
              />
              <h2 className='text-2xl text-white font-semibold mb-2 tracking-tighter'>
                {item.title}
              </h2>
              <p className='text-lg text-slate-300 tracking-tight'>{item.about}</p>
              <button className='text-blue-400 hover:text-blue-600 flex justify-center items-center gap-3 tracking-tight'>
                {item.label}
                <FaArrowRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
