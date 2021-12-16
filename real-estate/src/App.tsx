/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Navbar } from "./components/Navbar";
import { PropertySection } from "./components/PropertySection";
import { Banner } from "./components/Banner";
import { ImageSection } from "./components/ImageSection";
import { LocationSection } from "./components/LocationSection";
import { GradientSection } from "./components/GradientSection";
import { TestimonialSection } from "./components/TestimonialSection";
import { ContactSection } from "./components/ContactSection";
import { FooterSection } from "./components/FooterSection";

function App() {
  return (
    <div className="">
      <Navbar />
      <Banner />
      <div className="mt-5 p-10 flex justify-center">
        <h2 className="text-4xl text-gray-500 mb-2 font-medium">Recent Properties</h2>
      </div>
      <PropertySection />
      <ImageSection />
      <div className="my-10 p-10 flex justify-center">
        <h2 className="text-4xl text-gray-500 mb-2 font-medium">Explore Locations</h2>
      </div>
      <LocationSection />
      <GradientSection />
      <div className="my-10 p-5 flex justify-center">
        <h2 className="text-4xl text-gray-500 mb-2 font-medium">What Clients say about us</h2>
      </div>
      <TestimonialSection />
      <div className="my-10 p-5 flex justify-center">
        <h2 className="text-4xl text-gray-500 mb-2 font-medium">Contact Us</h2>
      </div>
      <ContactSection />

      <FooterSection />
    </div>
  );
}

export default App;
