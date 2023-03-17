import React from "react";
import { sponsors } from "../data";

export default function Sponsors() {
  return (
    <section id="Sponsors" className="relative">
      <div className="container w-full flex-col flex">
        <div className="container h-30 mx-auto flex px-10 py-5 "></div>
        <h1 className="title-font sm:text-6xl text-3xl text-pink-900 font-bold text-center">
          BECOME A SPONSOR
        </h1>
        <div className="container h-5 mx-auto flex px-10 py-5 "></div>
        <h1 className="title-font w-3/4 px-35 mx-auto sm:text-2xl text-lg mb-8 text-black font-semibold text-center ">
          We are so happy you’re interested in getting involved with our work
          here at Truck Club at Virginia Tech. There are so many ways for you to
          help, and we truly appreciate each and every effort. By lending your
          support, you’ll become a valuable part of our Non-Profit Organization
          and help to strengthen our operations.
        </h1>
        <div className="container h-30 mx-auto flex px-10 py-5 "></div>

        <div className="container w-full flex flex-col bg-white ">
          <div className="container h-5 mx-auto flex bg-white px-10 py-5 "></div>
          <div className="container mx-auto w-5/6 flex flex-row bg-pink-900 py-5 ">
            <div className="container w-1/2 flex px-10 py-5 ">
              <img
                class="mx-auto max-w-full h-auto"
                alt="moving"
                src="https://raw.githubusercontent.com/PrestonV78/TCVT-Site/main/public/handshake.webp"
              />
            </div>
            <div className="container w-1/2 flex-col flex px-10 py-5 ">
              <h1 className="title-font px-35 mx-35 sm:text-4xl text-2xl mb-8 text-white font-semibold text-center ">
                <strong>BECOME A SPONSOR</strong>
              </h1>
              <h1 className="title-font px-35 mx-35 sm:text-4xl text-2xl mb-8 text-white leading-relaxed text-center ">
                Have an Impact
              </h1>
              <a
                href="https://forms.gle/QSobfhRWdqkX8Wi49"
                className=" mx-auto inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none hover:opacity-50 rounded text-sm"
              >
                <strong>Apply</strong>
              </a>
            </div>
          </div>

          <div className="container h-5 mx-auto flex bg-white px-10 py-5 "></div>

          <div className="container mx-auto w-5/6 flex flex-row bg-pink-900 py-5 ">
            <div className="container w-1/2 flex px-10 py-5 ">
              <img
                class="mx-auto max-w-full h-auto"
                alt="moving"
                src="https://raw.githubusercontent.com/PrestonV78/TCVT-Site/main/public/meeting.webp"
              />
            </div>
            <div className="container w-1/2 flex-col flex px-10 py-5 ">
              <h1 className="title-font px-35 mx-35 sm:text-4xl text-2xl mb-8 text-white font-semibold text-center ">
                <strong>SPONSORSHIP PACKAGE</strong>
              </h1>
              <h1 className="title-font px-35 mx-35 sm:text-4xl text-2xl mb-8 text-white leading-relaxed text-center ">
                2022-2023
              </h1>
              <a
                href="https://raw.githubusercontent.com/PrestonV78/TCVT-Site/main/public/sponsor_package.pdf"
                className=" mx-auto inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none hover:opacity-50 rounded text-sm"
              >
                <strong>Learn More</strong>
              </a>
            </div>
          </div>

          <div className="container h-10 mx-auto flex bg-white px-10 py-5 "></div>
        </div>
      </div>

      <div className="container w-full mx-0 mr-0 my-15 flex flex-col bg-pink-900">
        <h1 className="title-font sm:text-5xl text-3xl text-white font-bold text-center">
          SPONSORSHIP PAYMENT
        </h1>
        <h1 className="title-font px-35 mx-35 sm:text-xl text-lg mb-8 text-white leading-relaxed text-center italic">
          The Stripe processing fee of 2.9% + $0.30 has been added to fixed
          payments.
        </h1>
        <h1 className="title-font px-35 mx-35 sm:text-xl text-lg mb-8 text-white font-semibold text-center italic">
          Payments to become an Official TCVT Sponsor are considered a donation
          to TCVT. Our organization accepts cash, check, Venmo, or credit card
          via Stripe payments. Please contact us via email at
          truckclubatvt@gmail.com if you have any questions or concerns.
        </h1>
      </div>

      <div className="container w-full flex flex-col bg-white ">
        <div className="container h-10 mx-auto flex bg-white px-10 py-5 "></div>
        <h1 className="title-font sm:text-6xl text-3xl text-black font-bold text-center">
          Package List and Pay Link
        </h1>
        <div className="container h-10 mx-auto flex bg-white px-10 py-5 "></div>
      </div>

      <div className="container w-full mx-0 mr-0 flex flex-col bg-pink-900 py-5 ">
        <h1 className="title-font sm:text-6xl text-3xl text-white font-bold text-center">
          Sponsor List
        </h1>

        {sponsors.map((sponsor) => (
          <div className="container mx-auto w-5/6 flex flex-row bg-pink-900 py-5 ">
            <div className="container w-1/2 flex px-10 py-5 ">
              <img
                alt="gallery"
                class="object-contain mx-auto max-w-full h-auto"
                src={sponsor.image}
              />
            </div>
            <div className="container w-1/2 flex-col flex px-10 py-5 ">
              <h1 className="title-font px-35 mx-35 sm:text-4xl text-2xl mb-8 text-white font-semibold text-center ">
                <strong>{sponsor.title}</strong>
              </h1>
              <h1 className="title-font px-35 mx-35 sm:text-2xl text-lg mb-8 text-white leading-relaxed text-center ">
                {sponsor.subtitle}
              </h1>
              <p className="leading-relaxed text-white">
                {sponsor.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
