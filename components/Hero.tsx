'use client'
import Image from "next/image";
import { CustomButton } from ".";

const Hero = () => {
  const handleScroll = ()=>{

  }
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Encuentra, reserva o renta un auto -- rápido y fácil!
        </h1>
        <p className=">hero__subtitle">
          Simplifica tu experiencia de renta de autos con nuestro sencillo
          proceso de reserva.
        </p>
        <CustomButton
          title="Explora Autos"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src='/hero.png' alt="hero" fill className="object-contain"/>
          </div>
          <div className="hero__image-overlay"/>
      
      </div>
    </div>
  );
};

export default Hero;
