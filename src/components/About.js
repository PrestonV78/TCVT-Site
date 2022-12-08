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
        <p className="mb-8 px-20 sm:text-2xl text-lg text-white leading-relaxed text-center">
          Truck Club at Virginia Tech started off as an idea from Sebastian
          Buenaño. As a sophomore, Sebastian had already been part of multiple
          organizations and clubs on campus but he always dreamed about starting
          his own club at Virginia Tech especially a truck club. Sebastian has a
          passion for trucks and he himself has a 2015 GMC Sierra Denali 1500
          which he calls "Big Red". During the Spring 2020 Semester, Sebastian
          would share his vision and passion with some close friends. Many of
          those close friends like Tara Tafro, Leo Olivera, Reagan Sanchez,
          Jerry Gonzalez, Jhosselin Vasquez, Eric Aponte, and Wayne Thompson all
          encouraged Sebastian to start a club. His friends also gave him ideas
          and tips about making the club. As Sebastian's passion grew he started
          to see the awesome potential of forming a possible Truck Club on
          campus. Southwestern Virginia and Virginia Tech itself is definitely a
          hotspot for trucks and truck enthusiasts which is why Sebastian knew
          his vision could come to reality. With the support from family and
          friends, the process of making a truck club at Virginia Tech was
          underway in the late Spring 2020 Semester. By early Fall 2020 Semester
          Sebastian was able to form a group of 5 founding Truck Club at
          Virginia Tech (TCVT) members. Reagan Sanchez as Social Media Chair,
          Jerry Gonzalez as Secretary, Jhosselin Vasquez as Treasure, Wayne
          Thompson as Vice President, and Sebastian Buenaño as President were
          the founding members of TCVT. After finalizing all the necessary steps
          to becoming a Registered Student Organization (RSO) Truck Club at
          Virginia Tech was officially recognized by Virginia Tech on October
          13, 2020! This is our history and we cannot wait to see what the
          future holds for this awesome organization!
        </p>
        <div className="container h-10 mx-auto flex px-10 py-5 "></div>
        <img
          class="mx-auto w-3/5 h-auto "
          alt="banner"
          src="https://raw.githubusercontent.com/PrestonV78/TCVT-Site/main/public/chl.webp"
        />
        <div className="container h-40 mx-auto flex px-10 py-5 "></div>
      </div>
    </section>
  );
}
