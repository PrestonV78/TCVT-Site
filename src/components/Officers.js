import React from "react";
import { officers } from "../data";


export default function Officers() {
  return (
    <section id="officers" className="text-gray-400 bg-black body-font">
      <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center">
      </div>
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-wrap -m-4">
          {officers.map((officer) => (
            <a
              href={officer.link}
              key={officer.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={officer.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-purple-900 bg-black opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-purple-400 mb-1">
                    {officer.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {officer.title}
                  </h1>
                  <p className="leading-relaxed text-gray-400">{officer.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
