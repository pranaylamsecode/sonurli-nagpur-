import React from 'react';
import { Hero } from '../components/Hero';
import { Stats } from '../components/Stats';
import { AboutVillage } from '../components/AboutVillage';
import { Services } from '../components/Services';
import { Team } from '../components/Team';
import { GallerySection } from '../components/GallerySection';
import { Contact } from '../components/Contact';
import { Reveal } from '../components/ui/Reveal';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Reveal>
        <AboutVillage />
      </Reveal>
      <Reveal>
        <Services />
      </Reveal>
      <Reveal>
        <Team />
      </Reveal>
      <Reveal>
        <GallerySection />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
    </>
  );
};
