import React from "react";

export default function About() {
  return (
    <section id="About" className="relative">
      <div className="container h-10 mx-auto flex px-10 py-15 bg-white items-center"></div>
      <div className="container mt-5 mx-auto flex flex-col items-center">
        <h1 className="title-font sm:text-5xl text-2xl mb-4 text-pink-900 font-bold text-center">
          ABOUT US
        </h1>
        <p className="mb-8 px-20 sm:text-xl text-md text-black leading-relaxed text-center">
          Truck Club at Virginia Tech was founded as a Registered Student
          Organization at Virginia Tech on October 13, 2020. We have grown from
          just 5 members to well over 50 members in one year! Our goal is to
          provide a space where trucks become a vessel for positive change. We
          strive to accomplish this goal through our events, service, and our
          TCVT family. We encourage people of all interests and backgrounds to
          join. If this is what you are looking for, then don't wait and become
          a member today.
        </p>
      </div>
      <div className="container h-10 mx-auto flex px-10 py-5 bg-white items-center"></div>
      <img
        class="mx-auto max-w-full h-auto"
        alt="banner"
        src="https://raw.githubusercontent.com/PrestonV78/TCVT-Site/main/public/trucks.webp"
      />
    </section>
  );
}
