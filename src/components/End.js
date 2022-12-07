import React from "react";

export default function End() {
  return (
    <section id="end" className="relative">
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
          <a href="https://www.facebook.com/truckclubatvt/">
            <img
              class="mx-auto"
              alt="fb"
              src="https://raw.githubusercontent.com/PrestonV78/TCVT-Site/main/public/Facebook.webp"
            />
          </a>
          <a href="https://www.linkedin.com/groups/9170257/">
            <img
              class="mx-auto"
              alt="ln"
              src="https://raw.githubusercontent.com/PrestonV78/TCVT-Site/main/public/LinkedIn.webp"
            />
          </a>
          <a href="https://www.instagram.com/truckclubatvt/">
            <img
              class="mx-auto"
              alt="ig"
              src="https://raw.githubusercontent.com/PrestonV78/TCVT-Site/main/public/Instagram.webp"
            />
          </a>
          <a href="https://www.youtube.com/channel/UCvT9FXcNgF0oYMBc0bdStZw?view_as=subscriber">
            <img
              class="mx-auto"
              alt="yt"
              src="https://raw.githubusercontent.com/PrestonV78/TCVT-Site/main/public/YouTube.webp"
            />
          </a>
          <a href="https://linktr.ee/truckclubatvt">
            <img
              class="mx-auto"
              alt="link"
              src="https://raw.githubusercontent.com/PrestonV78/TCVT-Site/main/public/Link.webp"
            />
          </a>
      </div>
      <div className="container mx-auto w-full mb-5 text-center items-center px-5 py-10">
        <p className="mb-8 leading-relaxed text-black">
          Copyright 2023 Truck Club at Virginia Tech
        </p>
      </div>
    </section>
  );
}
