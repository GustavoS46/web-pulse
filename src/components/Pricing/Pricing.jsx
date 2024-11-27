import React, { useEffect } from 'react';
import { FaChevronCircleRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { pricingplan } from '../../export.js'

const Pricing = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: 'ease-in-sine',
    });
  }, []);

  return (
    <section
      id='plans'
      className='w-full mx-auto py-16 bg-gray-900 px-8 lg:px-20' 
    >
      <div className='max-w-screen-2xl mx-auto flex flex-col justify-between items-center gap-4 py-16 m-5'>
        <h2 
          data-aos='zoom-in'
          data-aos-delau='200'
          className='text-teal-300 text-2xl font-semibold tracking-tight'>
            PLANOS
        </h2>
        <h2
          data-aos='zoom-in'
          data-aos-delau='200'
          className='font-semibold lg:text-4xl text-3xl lg:leading-tight text-gray-100 tracking-tighter'
        > 
          Escolha o plano que cabe no seu bolso
        </h2>
      </div>
      <div 
        data-aos="zoom-in"
        data-aos-delay="300"
        className="max-w-screen-2xl mx-auto tracking-tight grid lg:grid-cols-3 gap-5"
      >
        {pricingplan.map((item, index) => (
          <div 
            key={index} 
            className="bg-gray-800 p-10 rounded-3xl flex flex-col justify-between items-start gap-6 min-h-[400px]"
          >
            <h2 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 tracking-tight text-3xl bg-animate-gradient">
              {item.type}
            </h2>
            <p className="text-white text-lg tracking-tight">
              {item.about}
            </p>
            <h2 className="text-teal-300 font-bold tracking-wide text-5xl">
              {item.price}
              <span className="text-sm tracking-tight">/Mês</span>
            </h2>
            <ul className="text-white text-lg tracking-tight flex flex-col gap-2">
              {item.specs.map((spec, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <FaChevronCircleRight className="text-teal-300" size={20} />
                  {spec}
                </li>
              ))}
            </ul>
            <button className="w-full bg-lime-300 font-semibold rounded-xl px-6 py-3 text-lg hover:bg-white text-gray-800 tracking-tight">
              {item.label}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Pricing