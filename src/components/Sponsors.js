import React from "react";
import { officers } from "../data";

export default function Sponsors() {
  return (
    <section id="Sponsors" className="relative">
      <div className="container w-full flex-col flex">
        <div className="container h-30 mx-auto flex px-10 py-5 "></div>
        <h1 className="title-font sm:text-6xl text-3xl text-pink-900 font-bold text-center">
          BECOME A SPONSOR
        </h1>
        <div className="container h-10 mx-auto flex px-10 py-5 "></div>
        <h1 className="title-font w-2/3 px-35 mx-auto sm:text-2xl text-lg mb-8 text-black font-semibold text-center ">
          We are so happy you’re interested in getting involved with our work here at Truck Club at Virginia Tech.
          There are so many ways for you to help, and we truly appreciate each and every effort. By lending your
          support, you’ll become a valuable part of our Non-Profit Organization and help to strengthen our operations.
        </h1>
        <div className="container h-30 mx-auto flex px-10 py-5 "></div>

        <div className="container w-full flex flex-col bg-white ">
          <div className="container h-5 mx-auto flex bg-white px-10 py-5 "></div>
          <div className="container mx-auto w-4/5 flex flex-row bg-pink-900 py-5 ">
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
                className=" mx-auto inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none hover:opacity-50 rounded text-sm">
                <strong>Apply</strong>
              </a>
            </div>
          </div>

          <div className="container h-5 mx-auto flex bg-white px-10 py-5 "></div>

          <div className="container mx-auto w-4/5 flex flex-row bg-pink-900 py-5 ">
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
                className=" mx-auto inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none hover:opacity-50 rounded text-sm">
                <strong>Learn More</strong>
              </a>
            </div>
          </div>

          <div className="container h-10 mx-auto flex bg-white px-10 py-5 "></div>
        </div>

        <div className="container w-full mx-auto flex flex-col bg-pink-900">
          <h1 className="title-font sm:text-5xl text-3xl text-white font-bold text-center">
            SPONSORSHIP PAYMENT
          </h1>
          <h1 className="title-font px-35 mx-35 sm:text-xl text-lg mb-8 text-white leading-relaxed text-center italic">
            The Stripe processing fee of 2.9% + $0.30 has been added to fixed payments.
          </h1>
          <h1 className="title-font px-35 mx-35 sm:text-xl text-lg mb-8 text-white font-semibold text-center italic">
            Truck Club at Virginia Tech is a 501(c)3 organization. In short, you may be
            able to claim a deduction on your federal taxes if you make a donation!
            Payments to become an Official TCVT Sponsor are considered a donation to TCVT.
            Our organization accepts cash, check, Venmo, or credit card via Stripe payments.
            Please contact us via email at truckclubatvt@gmail.com if you have any questions
            or concerns.
          </h1>
        </div>

        <div className="container w-full flex flex-col bg-white ">
          <div className="container h-10 mx-auto flex bg-white px-10 py-5 "></div>
          <h1 className="title-font sm:text-6xl text-3xl text-black font-bold text-center">
            Package List and Pay Link
          </h1>
          <div className="container h-10 mx-auto flex bg-white px-10 py-5 "></div>
        </div>

        <div className="container mx-auto flex flex-col bg-pink-900 py-5 ">
          <h1 className="title-font sm:text-6xl text-3xl text-white font-bold text-center">
            Sponsor List
          </h1>

          {officers.map((officer) => (
            <div className="container w-full lg:w-1/3 h-eqw my-4 flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 h-full w-full object-contain object-center"
                src={officer.image}
              />
              <div className="px-8 py-10 relative z-10 w-full h-full border-4 border-white bg-pink-900 opacity-0 hover:opacity-100">
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
          ))}

        </div>
      </div>
    </section>
  );
}
