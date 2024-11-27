import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import cotacting from '../../assets/contact.png'

const Contact = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: 'ease-in-sine',
    });
  }, []);

  return (
    <section id='contact' className='w-full mx-auto py-16 hero-gradient px-8 lg:px-20'
    >
      <div className='max-w-screen-2xl mx-auto flex flex-col justify-start items-start gap-4 py-16 m-5'>
        <h2
          data-aos='fade-right'
          data-aos-delau='200'
          className='text-teal-300 text-2xl font-semibold tracking-tight'>
          CONTATO
        </h2>
        <h2 
          data-aos='fade-right'
          data-aos-delau='300'
          className='font-semibold lg:text-4xl text-3xl lg:leading-tight text-gray-100 tracking-tighter text-left'>
          Entre em contato conosco e 
          <br /> 
          inicie seu projeto de sucesso
        </h2>
        <div className='max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-10 py-16'>
          <div className='lg:w-[50%] w-fulll'>
            <img
              data-aos='zoom-in'
              data-aos-delay='200'
              src={cotacting}
              alt="contato imagem"
            />
          </div>
          <div
            data-aos='zoom-in'
            data-aos-delay='200'
            className='lg:w-[50%] w-full flex flex-col justify-center items-start gap-8 bg-gray-900 lg:p-16 p-8 rounded-3xl'
          >
            <h1 className='text-white text-3xl font-semibold tracking-tight'>Vamos falar sobre o seu projeto</h1>
            <div
              id='form-box'
              className='w-full bg-transparent flex flex-col justify-center items-center gap-4'
            >
              <input
                type="text"
                className="w-full bg-gray-800 px-6 py-4 rounded-lg border-none placeholder:text-gray-300 tracking-tight"
                placeholder="Nome completo"
              />
            </div>
            <div
              id='form-box'
              className='w-full flex justify-center items-center gap-4'
            >
              <input
                type="email"
                className="w-full bg-gray-800 px-6 py-4 rounded-lg border-none placeholder:text-gray-300 tracking-tight"
                placeholder="Insira seu e-mail"
              />
              <input
                type="number"
                className="w-full bg-gray-800 px-6 py-4 rounded-lg border-none placeholder:text-gray-300 tracking-tight"
                placeholder="Insira seu telefone"
              />
            </div>
            <textarea name="" id="" className='w-full bg-gray-800 px-5 py-4 rounded-lg border-none font-semibold text-md tracking-tight placeholder:text-gray-300' placeholder='Informe sua mensagem'></textarea>
            <button className="w-full bg-lime-300 font-semibold rounded-xl px-6 py-3 text-lg hover:bg-white text-gray-800 tracking-tight">
              Enviar
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact