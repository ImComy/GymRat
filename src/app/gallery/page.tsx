"use client";

import React, { useState } from "react";
import Path from "../../components/path";
import EventCard from'../../components/gallery/card'

const Gallery: React.FC = () => {
  return (
    <main className="bg-white w-screen p-10 overflow-hidden">
      <header className="relative">
        <Path />
        <h1 className="text-black text-[40px] md:text-[80px] font-black leading-[56px] md:leading-[72px] sm:text-[60px] sm:leading-[44px] mt-3">
          Gallery
        </h1>
      </header>
      <section>
        <EventCard />
      </section>
    </main>
  );
};
export default Gallery;
