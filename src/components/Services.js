import React from "react";

export default function Services() {
  return (
    <section id="Services" className="relative">
      <div className="container mx-auto flex flex-col items-center">
        <div className="container h-30 mx-auto flex px-10 py-5 "></div>
        <h1 className="title-font sm:text-6xl text-3xl mb-4 text-pink-900 font-bold text-center">
          TCVT SERVICES
        </h1>
        <div className="container mx-auto flex flex-col px-10 py-5 ">
          <h1 className="title-font px-35 mx-35 sm:text-3xl text-xl mb-4 text-black font-semibold text-center ">
            Our mission at Truck Club at Virginia Tech is to use our trucks as a vessel for positive change,
            which is why we want to help you in any way we can!
          </h1>
          <p className="px-35 mx-35 text-lg text-black leading-relaxed mb-4 text-center">
            Currently, TCVT is providing 2 services to assist the community around us.
          </p>
          <p className="px-35 mx-35 text-lg text-black font-semibold mb-4 text-center">
            1. Pallet Pickup Services: If you have wooden pallets that are laying around
            or are going to the landfill, then we can help take that inconvenience off your
            hands. TCVT reuses these pallets for storage, woodwork, bonfires, and more.
          </p>
          <p className="px-35 mx-35 text-lg text-black font-semibold mb-4 text-center">
            2. General Moving Assistance Services: If you are in need of assistance
            to move furniture, personal items, mulch, or anything at all, then contact
            us so that we can have our members and our trucks come to your assistance.
          </p>
          <p className="px-35 mx-35 text-lg text-black leading-relaxed mb-4 text-center">
            All services are individualized and customized to each request. Service availability
            may change due to weather, availability, resources, and more. Before every service,
            TCVT will contact you to confirm and remind you of said service that is scheduled to
            happen. <strong> If you are a TCVT Sponsor, then you have priority status to these services. </strong>
            These services are completely free but we do appreciate any donations to TCVT.
          </p>
          <p className="px-35 mx-35 text-lg text-black leading-relaxed mb-4 text-center">
            If you are interested, then please contact any of the officers or email us at
            <strong> truckclubatvt@gmail.com</strong>. Please fill out the optional survey
            below if you would like to give us more information about your service.
          </p>
        </div>
        <div className="container h-10 mx-auto flex px-10 py-5 "></div>
      </div>
    </section>
  );
}
