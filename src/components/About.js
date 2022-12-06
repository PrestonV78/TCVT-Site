import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-10 md:flex-col flex-col items-center">
        <h1 className="title-font sm:text-8xl mb-4 text-pink-900 font-bold text center">
          TRUCK CLUB AT <br></br>
          VIRGINIA TECH
        </h1>
        <p className="mb-8 sm:text-1xl text-black leading-relaxed text-center">
          Welcome to Truck Club at Virginia Tech. We are a student-run organization for people who <br></br>
          share a passion for trucks. We are here to serve the community and provide a space where <br></br>
          trucks become a vessel for positive change. We strive to establish a culture of respect, hard <br></br>
          work, and family among our members. We encourage people of all interests and backgrounds <br></br>
          to join. You do not need to know about trucks or own one to participate. We will host many <br></br>
          events including meet-ups, tailgates, cruises, and more.
        </p>
      </div>
      <div className="container items-center w-full">
          <img
            className="object-fill object-center w-full"
            alt="banner"
            src="../banner.webp"
          />
        </div>
    </section>
  );
}
