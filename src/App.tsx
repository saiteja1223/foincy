import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';

import Contact from './components/Contact';
import Statistics from './components/Statistics';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FollowUs from './components/FollowUs';
import HowWeWork from './components/HowWeWork';
import PeopleInfo from './components/PoopleInfo';


function App() {
  return (
    <div className="min-h-screen bg-gray-50 ">
      <Navbar />
      <main  >
        <section id="home">
          <Hero />
        </section>
        <section id="about" className="py-20">
          <About />
        </section>
        <section id="services" className="py-20 bg-gray-100">
          <Services />
        </section>
        <section id="statistics" className="py-20">
          <Statistics />
        </section>
        <section id="portfolio" className="py-20 bg-gray-100">
          <Portfolio />
        </section>
        <section id="HowWeWork" className="py-20 bg-gray-100">
           <HowWeWork/>
        </section>
        <section id="testimonials" className="py-20">
          <Testimonials />
        </section>
        <section id="contact" className="py-20">
          <Contact />
        </section>
        <section id="pricing" className="py-20 bg-gray-100">
           <PeopleInfo/>
        </section>
       
      
      </main>
      <FollowUs/>
      <Footer/>
     
    </div>
  );
}

export default App;