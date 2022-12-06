import React from "react";

export default function Contact() {
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
    <section id="Contact" className="relative">
      <div className="container mx-auto flex flex-wrap px-10 py-20">
        <form
          netlify
          name="Contact"
          onSubmit={handleSubmit}
          className="lg:w md:w- flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <h2 className="text-pink-900 sm:text-7xl text-3xl mb-1 title-font text-center">
            Contact TCVT
          </h2>
          <div className="relative w-1/2 flex items-center border-b border-pink-900 py-2">
            <input
              type="text"
              id="name"
              name="name"
              className="w-full appearance-none bg-transparent border-none"
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
            <input
              type="email"
              id="email"
              name="email"
              className="w-full appearance-none bg-transparent border-none "
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
          <div className="relative mb-4 flex items-center border-b border-pink-900 py-2">
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full appearance-none bg-transparent border-none "
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
            />
          </div>
          <div className="relative mb-4 flex items-center border-b border-pink-900 py-2">
            <textarea
              id="message"
              name="message"
              className="w-full appearance-none bg-transparent border-none "
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
            />
          </div>
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
