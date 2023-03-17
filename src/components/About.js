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
          a member today!
        </p>
      </div>
      <div className="container h-10 mx-auto flex px-10 py-5 bg-white items-center"></div>
      <img
        class="mx-auto max-w-full h-auto"
        alt="banner"
        src="https://raw.githubusercontent.com/PrestonV78/TCVT-Site/main/public/trucks.webp"
      />
      <div className="container py-30 mx-auto flex-col items-center bg-pink-900 max-w-full">
        <div className="container h-20 mx-auto flex px-10 py-5 "></div>
        <h1 className="title-font px-10 sm:text-6xl text-3xl mb-4 text-white font-bold text-center ">
          TCVT HISTORY
        </h1>
        <div className="container h-20 mx-auto flex px-10 py-5 "></div>
        <h1 className="title-font px-10 sm:text-3xl text-xl mb-4 text-white font-semibold text-center ">
          Using Trucks as a Vessel for Positive Change
        </h1>
        <div className="container h-10 mx-auto flex px-10 py-5 "></div>
        <p className="mb-8 px-20 text-md text-white leading-relaxed text-center">
          Truck Club at Virginia Tech was founded in 2020 by a small group of close 
          friends as a way to express themselves through their vehicles and create 
          a positive outreach to other members of the Hokie Nation. The original founding 
          members, Sebastian Buenaño, Wayne Thompson, Reagan Sanchez, Jerry Gonzalez, and 
          Jhosselin Vasquez, believed that they could combine their passion for Trucks with 
          the Virginia Tech motto of "Ut Prosim" (That I May Serve), and thus the club motto 
          "Using Our Trucks as a Vessel for Positive Change" was born. Truck Club serves our 
          motto as well as the Virginia Tech motto by creating and serving multiple charity 
          events every year . With these values held dearly by our Club, the officers and 
          members, past and present, of Truck Club at Virginia Tech hope to continue serving 
          our community for many years to come.

        </p>
        <div className="container h-10 mx-auto flex px-10 py-5 "></div>
        <img
          class="mx-auto w-4/5 h-auto "
          alt="banner"
          src="https://raw.githubusercontent.com/PrestonV78/TCVT-Site/main/public/chl.webp"
        />
        <div className="container h-40 mx-auto flex px-10 py-5 "></div>
      </div>
      <div className="container h-10 mx-auto flex px-10 py-5 bg-white"></div>
    </section>
  );
}
