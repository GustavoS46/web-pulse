import React, { useEffect } from 'react';
import herobanner from '../../assets/herobanner.png';
import clients from '../../assets/clients.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Hero/Hero.css'; 

const Hero = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: 'ease-in-sine',
    });
  }, []);

  return (
    <section id="home" className="w-full hero-gradient py-16">
      <div className="max-w-screen-2xl mx-auto flex lg:flex-row flex-col justify-between items-center gap-12 px-8 lg:px-20">
        <div className="flex flex-col justify-center items-start gap-8">
        <h1
        data-aos="fade-right"
        className="text-5xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 tracking-tight leading-tight"
      >
        Social Media Marketing
      </h1>
          <p
            data-aos="fade-right"
            data-aos-delay="100"
            className="text-lg lg:text-2xl text-gray-100 leading-relaxed tracking-tighter"
          >
            Projetamos logos, produtos, aplicativos, <br /> sites excepcionais para startups e empresas.
          </p>
          <button
            data-aos="fade-right"
            data-aos-delay="200"
            className="bg-lime-300 font-semibold rounded-xl px-6 py-3 text-lg hover:bg-white text-gray-800 tracking-tight"
          >
            Comece agora
          </button>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex flex-col lg:flex-row items-center gap-6 mt-8"
          >
            <img src={clients} alt="clientes" className="w-40 lg:w-48" />
            <p className="text-white font-semibold text-center lg:text-left tracking-tighter">
              Aprovado por mais de 5000 marcas <br /> e clientes em todo o mundo.
            </p>
          </div>
        </div>
        <div data-aos="fade-left">
          <img
            src={herobanner}
            alt="banner"
            className="w-full lg:w-[650px] h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
