import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center">
      </div>
      <div className="container mx-auto flex px-10 py-20 md:flex-col flex-col items-center">
        <h1 className="title-font sm:text-9xl mb-4 text-pink-900 font-semibold">
          TRUCK CLUB AT <br></br>
          VIRGINIA TECH
        </h1>
        <h1 className="mb-8 sm:text-2xl text-black leading-relaxed">
          Welcome to Truck Club at Virginia Tech. We are a student-run organization for people who <br></br>
          share a passion for trucks. We are here to serve the community and provide a space where <br></br>
          trucks become a vessel for positive change. We strive to establish a culture of respect, hard <br></br>
          work, and family among our members. We encourage people of all interests and backgrounds <br></br>
          to join. You do not need to know about trucks or own one to participate. We will host many <br></br>
          events including meet-ups, tailgates, cruises, and more.
        </h1>
      </div>
    </section>
  );
}
