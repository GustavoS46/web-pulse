import React from 'react';
import { FaMapMarkedAlt, FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaArrowUp } from 'react-icons/fa';
import { FaPhoneVolume } from 'react-icons/fa6';
import { IoIosMailOpen } from 'react-icons/io';
import { IoTime } from 'react-icons/io5';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <>
      <section className='w-full bg-gray-900 py-16 px-8 lg:px-20'>
        <div className='max-w-screen-2xl m-auto grid lg:grid-cols-4 grid-cols-1 gap-16 lg:gap-28'>
          <div className='flex flex-col items-start gap-10'>
            <h1
              data-aos='fade-right'
              data-aos-delay='200'
              className='text-white font-semibold text-4xl leading-10'>
              Vamos começar a trabalhar juntos, entre em contato!
            </h1>
            <button
              data-aos='fade-right'
              data-aos-delay='300'
              className='bg-lime-300 font-semibold rounded-xl px-6 py-3 text-lg hover:bg-white text-gray-800 tracking-tight'>
              Comece agora
            </button>
          </div>
          <div
            data-aos='zoom-in'
            data-aos-delay='200'
            className='flex flex-col items-start gap-10'>
            <h1 className='text-white text-2xl font-semibold'>Informações de Contato</h1>
            <div className='flex flex-col gap-4'>
              <p className='flex items-center gap-3'>
                <FaMapMarkedAlt className='text-lime-300 size-6' />
                <span className='font-semibold tracking-tight text-slate-100'>
                  Rua das Orquídeas 345, Setor Jardim Primavera Goiânia - GO CEP: 74000-123
                </span>
              </p>
              <p className='flex items-center gap-3'>
                <FaPhoneVolume className='text-lime-300 size-6' />
                <span className='font-semibold tracking-tight text-slate-100'>62 3333-3333</span>
              </p>
              <p className='flex items-center gap-3'>
                <IoIosMailOpen className='text-lime-300 size-6' />
                <span className='font-semibold tracking-tight text-slate-100'>socialmedia@marketing.com</span>
              </p>
              <p className='flex items-center gap-3'>
                <IoTime className='text-lime-300 size-6' />
                <span className='text-base text-slate-100 flex flex-col'>
                  <span className='font-semibold tracking-tight'>Segunda a Sexta</span>
                  <span className='tracking-tight font-medium'>09:00 - 17:00</span>
                </span>
              </p>
            </div>
          </div>
          <div
            data-aos='zoom-in'
            data-aos-delay='200'
            className='flex flex-col items-start gap-6'>
            <h1 className='text-white text-2xl font-semibold tracking-tight'>
              Inscreva-se no nosso boletim informativo
            </h1>
            <p className='text-base text-slate-100 tracking-tight'>
              Fique por dentro das últimas novidades, dicas exclusivas e ofertas especiais direto no seu e-mail.
            </p>
            <div className='flex flex-col gap-6 w-full'>
              <input
                type="email"
                placeholder='Insira seu e-mail'
                className='bg-gray-800 w-full px-6 py-4 rounded-xl border-none placeholder:text-gray-300 tracking-tight'
              />
              <button className='bg-lime-300 font-semibold rounded-xl px-6 py-3 text-lg hover:bg-white text-gray-800 tracking-tight'>
                Inscrever
              </button>
            </div>
          </div>
          <div
            data-aos='fade-left'
            data-aos-delay='300'
            className='flex flex-col items-start gap-4'>
            <h1
              data-aos='fade-left'
              data-aos-delay='200'
              className='text-white text-2xl font-semibold tracking-tight'>
              Siga-nos nas redes sociais
            </h1>
            <div
              className='grid grid-cols-2 gap-6 w-full'>
              <div className='flex flex-col items-center gap-2'>
                <FaFacebook className='text-lime-300 hover:text-white text-2xl' />
                <p className='text-slate-100 font-medium text-base tracking-tight'>Facebook</p>
              </div>
              <div className='flex flex-col items-center gap-2'>
                <FaTwitter className='text-lime-300 hover:text-white text-2xl' />
                <p className='text-slate-100 font-medium text-base tracking-tight'>Twitter</p>
              </div>
              <div className='flex flex-col items-center gap-2'>
                <FaInstagram className='text-lime-300 hover:text-white text-2xl' />
                <p className='text-slate-100 font-medium text-base tracking-tight'>Instagram</p>
              </div>
              <div className='flex flex-col items-center gap-2'>
                <FaYoutube className='text-lime-300 hover:text-white text-2xl' />
                <p className='text-slate-100 font-medium text-base tracking-tight'>YouTube</p>
              </div>
            </div>

            <h1
              data-aos='fade-left'
              data-aos-delay='300'
              className='text-white text-2xl font-semibold tracking-tight mt-8'>
              Links
            </h1>
            <div className='grid grid-cols-1 gap-6 w-full'>
              <ul
                className="flex gap-6 text-slate-100 text-base font-medium">
                <li className="hover:text-gray-400">
                  <Link to="home" smooth={true} duration={500}>
                    Home
                  </Link>
                </li>
                <li className="hover:text-gray-400">
                  <Link to="about" smooth={true} duration={500}>
                    Sobre
                  </Link>
                </li>
                <li className="hover:text-gray-400">
                  <Link to="services" smooth={true} duration={500}>
                    Serviços
                  </Link>
                </li>
                <li className="hover:text-gray-400">
                  <Link to="contact" smooth={true} duration={500}>
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className='w-full bg-gray-800 m-auto py-5 justify-center items-center lg:gap-28 gap-8 px-20'>
        <div className='max-w-screen-2xl mx-auto px-5 flex justify-center items-center gap-5'>
          <p className='text-slate-100 tracking-tight'>
            Copyright 2024 ©{' '}
            <a
              href="https://www.linkedin.com/in/gustavo-desenvolvedor/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition duration-200"
            >
              Gustavo Silva
            </a>
            . Todos os direitos reservados.
          </p>
        </div>
      </section>
    </>
  )
}

export default Footer