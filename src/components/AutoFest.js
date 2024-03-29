import React from "react";

export default function AutoFest() {
  return (
    <section id="AutoFest" className="relative">
      <div className="container h-10 mx-auto flex px-10 py-15 bg-white items-center"></div>
      <div className="container mt-5 mx-auto flex flex-col items-center">
        <h1 className="title-font sm:text-5xl text-2xl mb-4 text-pink-900 font-bold text-center">
          AutoFest
        </h1>
        <p className="mb-8 px-20 sm:text-xl text-md text-black leading-relaxed text-center">
          Every Fall semester Truck Club at Virginia Tech hosts the largest automotive festival
          in the New River Valley! Trucks, cars, motorcycles, community fun, prizes, live music,
          awards, and much more are all happening at Auto Fest!
        </p>
      </div>
      <div className="container h-10 mx-auto flex px-10 py-5 bg-white items-center"></div>
      <img
        class="mx-auto max-w-full h-auto"
        alt="banner"
        src="https://raw.githubusercontent.com/PrestonV78/TCVT-Site/main/public/autofest.webp"
      />

      <div className="container py-30 mx-auto flex-col items-center bg-pink-900 max-w-full">
        <div className="container h-20 mx-auto flex py-5 "></div>
        <h1 className="title-font sm:text-3xl text-xl mb-4 text-white font-semibold text-center ">
          Next Show, November 2023
        </h1>

        <div className="container mx-auto flex-row flex px-5 py-5 ">
          <div className="container mx-auto w-1/4 flex-col flex px-10 py-5 border-2 border-white">
            <h1 className="title-font sm:text-xl text-md mb-4 text-white font-semibold text-center ">
              Attendee Regestration
            </h1>
            <a
              href="/autofest"
              className=" mx-auto inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none hover:opacity-50 rounded text-sm">
              <strong>Coming Soon</strong>
            </a>
          </div>

          <div className="container w-2 flex"></div>

          <div className="container mx-auto w-1/4 flex-col flex px-10 py-5 border-2 border-white">
            <h1 className="title-font sm:text-xl text-md mb-4 text-white font-semibold text-center ">
              Vendor Regestration
            </h1>
            <a
              href="/autofest"
              className=" mx-auto inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none hover:opacity-50 rounded text-sm">
              <strong>Coming Soon</strong>
            </a>
          </div>

          <div className="container w-2 flex"></div>

          <div className="container mx-auto w-1/4 flex-col flex px-10 py-5 border-2 border-white">
            <h1 className="title-font sm:text-xl text-md mb-4 text-white font-semibold text-center ">
              Sponsor Regestration
            </h1>
            <a
              href="/autofest"
              className=" mx-auto inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none hover:opacity-50 rounded text-sm">
              <strong>Coming Soon</strong>
            </a>
          </div>

          <div className="container w-2 flex"></div>

          <div className="container mx-auto w-1/4 flex-col flex px-10 py-5 border-2 border-white">
            <h1 className="title-font sm:text-xl text-md mb-4 text-white font-semibold text-center ">
              Shop Merch
            </h1>
            <a
              href="/autofest"
              className=" mx-auto inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none hover:opacity-50 rounded text-sm">
              <strong>Coming Soon</strong>
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex-col flex px-10 py-15 bg-white items-center">
        <div className="container h-10 mx-auto flex px-10 py-5 "></div>
        <h1 className="title-font px-10 sm:text-3xl text-xl mb-4 text-pink-900 font-semibold text-center ">
          Thank You For An Awesome Auto Fest 2022
        </h1>
        <h1 className="title-font px-10 sm:text-xl text-md mb-4 text-black font-semibold text-center ">
          See you in November 2023
        </h1>
      </div>
    </section>
  );
}
