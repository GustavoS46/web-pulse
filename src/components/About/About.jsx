import React, { useEffect } from 'react';
import about from '../../assets/about.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: 'ease-in-sine',
    });
  }, []);

  return (
    <section
      id='about'
      className='w-full py-16 bg-gray-800'
    >
      <div className='max-w-screen-2xl mx-auto gap-12 px-8 lg:px-20'>
        <div
          className='grid grid-cols-1 lg:grid-cols-3 gap-12 py-20 items-center'
        >
          <div 
            className='lg:col-span-1 mx-5'>
            <img
              data-aos='fade-right'
              data-aos-delay='200'
              src={about}
              alt="Sobre nós"
              className='w-full h-auto'
            />
          </div>
          <div
            data-aos='fade-left'
            data-aos-delay='200'
            className='lg:col-span-2 flex flex-col justify-center items-start gap-4 m-5'
          >
            <h2 
              className='text-teal-300 text-2xl font-semibold tracking-tight'>QUEM SOMOS</h2>
            <h2 className='font-semibold lg:text-4xl text-3xl lg:leading-tight text-gray-100 tracking-tighter'>
              A principal agência de marketing <br /> de mídia social
            </h2>
            <p className='text-gray-300 tracking-tight'>
              Com anos de experiência em estratégias de marketing digital, nossa equipe é especializada em criar soluções personalizadas para aumentar a presença online de marcas e empresas em todo o mundo. Acreditamos que cada marca tem uma história única e, com criatividade e estratégias bem fundamentadas, ajudamos nossos clientes a se conectarem com o público certo, impulsionando resultados e construindo relacionamentos duradouros. Seja para criar campanhas impactantes ou gerenciar sua presença nas mídias sociais, estamos aqui para levar sua marca ao próximo nível.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
