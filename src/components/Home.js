import React from "react";

export default function Home() {
  const [name, setName] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "Contact", name, subject, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="home">
      <div className="container h-10 mx-auto flex px-10 py-15 bg-white items-center"></div>
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="title-font py-5 sm:text-7xl text-3xl mb-4 text-pink-900 font-bold text-center">
          TRUCK CLUB AT <br></br>
          VIRGINIA TECH
        </h1>
        <p className="mb-8 py-5 sm:text-2xl text-md text-black leading-relaxed text-center">
          Welcome to Truck Club at Virginia Tech. We are a student-run
          organization for people who 
          share a passion for trucks. We are here to serve the community and
          provide a space where 
          trucks become a vessel for positive change. We strive to establish a
          culture of respect, hard 
          work, and family among our members. We encourage people of all
          interests and backgrounds 
          to join. You do not need to know about trucks or own one to
          participate. We will host many 
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
        <h1 className="title-font px-10 sm:text-6xl text-3xl mb-4 text-white font-bold text-center ">
          FEATURED ITEM
        </h1>
        <div className="container h-20 mx-auto flex px-10 py-5 "></div>
        <h1 className="title-font px-10 sm:text-5xl text-3xl mb-4 text-white font-semibold text-center ">
          TCVT ADOPTS A HIGHWAY
        </h1>
        <div className="container h-10 mx-auto flex px-10 py-5 "></div>
        <p className="mb-8 px-10 sm:text-2xl text-lg text-white leading-relaxed text-center">
          Helping Cleanup 460<br></br>
          <br></br>
          TCVT has joined the Adopt A Highway program in the state of Virginia!
          The organization has
          officially adopted Route 460 from Southgate to Tom's Creek in
          Montgomery County totaling
          3.0 miles. By adopting this section of highway, TCVT agrees to keep it
          cleared of litter for a
          three-year period by performing at least two successful pickups in one
          calendar year. We, of
          course, intend to perform more pickups. your support and we are glad
          that a lot of kids will
          have a lot of awesome toys this Christmas season!
        </p>
        <div className="container h-10 mx-auto flex px-10 py-5 "></div>
        <img
          class="mx-auto w-1/2 h-auto "
          alt="banner"
          src="https://raw.githubusercontent.com/PrestonV78/TCVT-Site/main/public/highway.webp"
        />
        <div className="container h-40 mx-auto flex px-10 py-5 "></div>
      </div>
      <div className="container mx-auto flex flex-wrap px-10 py-20">
        <form
          netlify
          name="Contact"
          onSubmit={handleSubmit}
          className="lg:w md:w- flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <h2 className="text-pink-900 sm:text-7xl font-semibold text-3xl mb-1 title-font text-center">
            Contact TCVT
          </h2>
          <div className="container h-2 mx-auto flex px-10 "></div>
          <div className="relative w-full flex items-center border-b border-pink-900 py-2">
            <input
              type="text"
              id="name"
              name="name"
              className="w-full appearance-none bg-transparent border-none text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
            <div className="relative w-10 flex items-center border-b border-white"></div>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full appearance-none bg-transparent border-none text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
          <div className="container h-2 mx-auto flex px-10 "></div>
          <div className="relative mb-4 flex items-center border-b border-pink-900 py-2">
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full appearance-none bg-transparent border-none text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
            />
          </div>
          <div className="container h-2 mx-auto flex px-10 "></div>
          <div className="relative mb-4 flex items-center border-b border-pink-900 py-2 h-150">
            <textarea
              id="message"
              name="message"
              className="w-full appearance-none bg-transparent border-none h-150 text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
            />
          </div>
          <div className="container h-2 mx-auto flex px-10 "></div>
          <button
            type="submit"
            className="text-white bg-black border-0 py-2 px-6 focus:outline-none hover: rounded text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
