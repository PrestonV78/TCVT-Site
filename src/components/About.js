import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container h-10 mx-auto flex px-10 py-15 bg-white items-center"></div>
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="title-font py-5 sm:text-7xl text-3xl mb-4 text-pink-900 font-bold text-center">
          TRUCK CLUB AT <br></br>
          VIRGINIA TECH
        </h1>
        <p className="mb-8 py-5 sm:text-2xl text-lg text-black leading-relaxed text-center">
          Welcome to Truck Club at Virginia Tech. We are a student-run
          organization for people who <br></br>
          share a passion for trucks. We are here to serve the community and
          provide a space where <br></br>
          trucks become a vessel for positive change. We strive to establish a
          culture of respect, hard <br></br>
          work, and family among our members. We encourage people of all
          interests and backgrounds <br></br>
          to join. You do not need to know about trucks or own one to
          participate. We will host many <br></br>
          events including meet-ups, tailgates, cruises, and more.
        </p>
      </div>
      <div className="container h-10 mx-auto flex px-10 py-5 bg-white items-center"></div>
      <img
        class="mx-auto max-w-full h-auto"
        alt="banner"
        src="https://raw.githubusercontent.com/PrestonV78/TCVT-Site/main/public/banner.webp"
      />
      <div className="container py-30 mx-auto flex-col items-center bg-pink-900 max-w-full">
        <div className="container h-20 mx-auto flex px-10 py-5 "></div>
        <h1 className="title-font px-10 sm:text-8xl text-3xl mb-4 text-white font-bold text-center ">
          FEATURED ITEM
        </h1>
        <h1 className="title-font px-10 sm:text-5xl text-3xl mb-4 text-white font-semibold text-center ">
          TCVT ADOPTS A HIGHWAY
        </h1>
        <p className="mb-8 px-10 sm:text-3xl text-xl text-white leading-relaxed text-center">
          Helping Cleanup 460<br></br>
          <br></br>
          TCVT has joined the Adopt A Highway program in the state of Virginia!
          The organization has<br></br>
          officially adopted Route 460 from Southgate to Tom's Creek in
          Montgomery County totaling<br></br>
          3.0 miles. By adopting this section of highway, TCVT agrees to keep it
          cleared of litter for a<br></br>
          three-year period by performing at least two successful pickups in one
          calendar year. We, of<br></br>
          course, intend to perform more pickups. your support and we are glad
          that a lot of kids will<br></br>
          have a lot of awesome toys this Christmas season!
        </p>
        <div className="container h-10 mx-auto flex px-10 py-5 "></div>
        <img
          class="mx-auto w-1/2 h-auto "
          alt="banner"
          src="https://raw.githubusercontent.com/PrestonV78/TCVT-Site/main/public/highway.webp"
        />
        <div className="container h-20 mx-auto flex px-10 py-5 "></div>
      </div>
    </section>
  );
}
