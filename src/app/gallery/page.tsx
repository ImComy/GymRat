"use client";

import React, { useState } from "react";
import Path from "../../components/path";
import EventGallery from'../../components/gallery/list';
import AddItemButton from '../../components/gallery/add';

const Gallery: React.FC = () => {
  return (
    <main className="bg-white w-screen p-10 overflow-hidden">
      <header className="relative">
        <Path />
        <div className="flex justify-between items-center flex-col sm:flex-row md:flex-row lg:flex-row">
          <h1 className="text-black text-[40px] md:text-[80px] font-black leading-[56px] md:leading-[72px] sm:text-[60px] sm:leading-[44px] mt-3">
            Gallery
          </h1>
          <AddItemButton />
        </div>
          <p className="text-[#515151] text-lg md:text-2xl font-medium font-['Roboto'] leading-[24px] md:leading-[28.80px] tracking-wide mt-3 md:mt-5">
            Track every detail of your body, from weight to height, and upload pictures to monitor your progress.
          </p>
      </header>
      <section>
        <EventGallery />
      </section>
    </main>
  );
};
export default Gallery;
