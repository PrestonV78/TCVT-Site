import React from "react";
import { officers } from "../data";

export default function Officers() {
  return (
    <section id="officers" className="relative bg-pink-900">
      <div className="container h-20 mx-auto flex px-10 py-5 bg-pink-900 items-center"></div>
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <h1 className="title-font sm:text-6xl text-3xl mb-4 text-white font-bold text-center">
          MEET THE TEAM
        </h1>
        <p className="mb-8 px-20 sm:text-2xl text-lg text-white leading-relaxed text-center">
          The Faces of Our Organization
        </p>
        <div className="container h-10 mx-auto flex bg-pink-900 items-center"></div>
        <div className="flex flex-wrap -m-4">
          {officers.map((officer) => (
            <a href={officer.link} key={officer.image} className="md:w-1/3 md:h-1/3 h-full w-full p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={officer.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-white bg-pink-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-white mb-1">
                    {officer.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {officer.title}
                  </h1>
                  <p className="leading-relaxed text-gray-400">
                    {officer.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
