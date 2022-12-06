import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center">
      </div>
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl text-3xl mb-4 text-amber-600 font-semibold">
          TRUCK CLUB AT <br></br>
          VIRGINIA TECH
          </h1>
          <p className="mb-8 text-pink-900 leading-relaxed">
          Welcome to Truck Club at Virginia Tech. We are a student-run organization for people who <br></br>
          share a passion for trucks. We are here to serve the community and provide a space where <br></br>
          trucks become a vessel for positive change. We strive to establish a culture of respect, hard <br></br>
          work, and family among our members. We encourage people of all interests and backgrounds <br></br>
          to join. You do not need to know about trucks or own one to participate. We will host many <br></br>
          events including meet-ups, tailgates, cruises, and more.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white-400 bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-black-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
