import React from "react";
import { officers } from "../data";

export default function Officers() {
  return (
    <section id="officers" className="relative  bg-pink-900">
      <div className="container h-10 mx-auto flex bg-pink-900 items-center"></div>
      <img
        class="mx-auto max-w-full h-auto"
        alt="banner"
        src="https://raw.githubusercontent.com/PrestonV78/TCVT-Site/main/public/Team.webp"
      />
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <h1 className="title-font sm:text-5xl text-2xl mb-4 text-white font-bold text-center">
        MEET THE TEAM
        </h1>
        <p className="mb-8 px-20 sm:text-xl text-md text-white leading-relaxed text-center">
        The Faces of Our Organization
        </p>
        <div className="flex flex-wrap -m-4">
          {officers.map((officer) => (
            <a
              href={officer.link}
              key={officer.image}
              className="sm:w-1/2 w-100 p-4"
            >
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
