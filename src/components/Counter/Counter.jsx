import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { counts } from '../../export';

const Counter = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: 'ease-in-sine',
    });
  }, []);

  return (
    <section
      id='counter' 
      className='w-full hero-gradient-inverted py-16'
    >
      <div className='max-w-screen-2xl mx-auto flex flex-col justify-center items-start gap-4 px-8 lg:px-20'>
        <h2 
            data-aos='fade-right'
            data-aos-delay='200'
            className='text-lime-300 text-2xl font-semibold tracking-tight'>
              NOSSOS NÚMEROS
        </h2>
        <h2 className='font-semibold lg:text-4xl text-3xl lg:leading-tight text-gray-100 tracking-tighter text-left'>
          Números que demonstram o impacto
          <br />
          de nossa agência em usuários e clientes
        </h2>
      </div>

      <div className='max-w-screen-2xl mx-auto gap-12 px-8 lg:px-20 flex lg:flex-row flex-col justify-between items-center py-16'>
        <div
          data-aos='zoom-in'
          data-aos-delay='200' 
          className='bg-gray-900 w-full lg:p-20 p-2 py-5 flex lg:flex-row flex-col justify-between items-center gap-20 rounded-3xl'>
            {
              counts.map((item, index) => (
                <div key={index} className='flex flex-col justify-center items-center gap-6'>
                  <h2 className='text-lime-300 text-4xl font-semibold tracking-tight'>{item.value}</h2>
                  <p className='text-white text-xl font-semibold tracking-tight'>{item.title}</p>
                </div>
              ))
            }
        </div>
      </div>
    </section>
  )
}

export default Counter;
