import React from "react";

export default function End() {
  return (
    <section id="end" className="relative">
      <div className="container h-10 mx-auto flex py-5 bg-white"></div>
      <div class="container h-10 flex flex-wrap place-content-center justify-center justify-items-center tp-3 mb-4
      ">
        <a href="https://www.facebook.com/truckclubatvt/">
          <img
            class="mx-3"
            alt="fb"
            src="https://raw.githubusercontent.com/PrestonV78/TCVT-Site/main/public/Facebook.webp"
          />
        </a>
        <a href="https://www.linkedin.com/groups/9170257/">
          <img
            class="mx-3"
            alt="ln"
            src="https://raw.githubusercontent.com/PrestonV78/TCVT-Site/main/public/LinkedIn.webp"
          />
        </a>
        <a href="https://www.instagram.com/truckclubatvt/">
          <img
            class="mx-3"
            alt="ig"
            src="https://raw.githubusercontent.com/PrestonV78/TCVT-Site/main/public/Instagram.webp"
          />
        </a>
        <a href="https://www.youtube.com/channel/UCvT9FXcNgF0oYMBc0bdStZw?view_as=subscriber">
          <img
            class="mx-3"
            alt="yt"
            src="https://raw.githubusercontent.com/PrestonV78/TCVT-Site/main/public/YouTube.webp"
          />
        </a>
        <a href="https://linktr.ee/truckclubatvt">
          <img
            class="mx-3"
            alt="link"
            src="https://raw.githubusercontent.com/PrestonV78/TCVT-Site/main/public/Link.webp"
          />
        </a>
      </div>
      <div className="container mx-auto w-full mb-4 text-center items-center">
        <p className="text-sm text-black">
          ©2022 by Truck Club at Virginia Tech
        </p>
      </div>
    </section>
  );
}
