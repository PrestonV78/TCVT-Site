import React from "react";

export default function Services() {
  return (
    <section id="Services" className="relative">
      <div className="container h-10 mx-auto flex px-10 py-15 bg-white items-center"></div>
      <div className="container mt-5 mx-auto flex flex-col items-center">
        <h1 className="title-font sm:text-5xl text-2xl mb-4 text-pink-900 font-bold text-center">
          TCVT SERVICES
        </h1>
        <h1 className="title-font px-10 sm:text-3xl text-xl mb-4 text-white font-semibold text-center ">
          Our mission at Truck Club at Virginia Tech is to use our trucks as a vessel for positive change,
          which is why we want to help you in any way we can!
        </h1>
        <div className="container h-10 mx-auto flex px-10 py-5 "></div>
        <p className="mb-8 px-20 text-md text-white leading-relaxed text-center">
          Currently, TCVT is providing 2 services to assist the community around us.
        </p>
        <div className="container h-10 mx-auto flex px-10 py-5 "></div>
        <p className="mb-8 px-20 text-md text-white font-semibold text-center">
          1. Pallet Pickup Services: If you have wooden pallets that are laying around
          or are going to the landfill, then we can help take that inconvenience off your
          hands. TCVT reuses these pallets for storage, woodwork, bonfires, and more.
        </p>
        <div className="container h-10 mx-auto flex px-10 py-5 "></div>
        <p className="mb-8 px-20 text-md text-white font-semibold text-center">
          2. General Moving Assistance Services: If you are in need of assistance
          to move furniture, personal items, mulch, or anything at all, then contact
          us so that we can have our members and our trucks come to your assistance.
        </p>
        <div className="container h-10 mx-auto flex px-10 py-5 "></div>
      </div>
    </section>
  );
}
