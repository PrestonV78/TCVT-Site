import React from "react";

export default function End() {
  return (
    <section id="end" className="relative">
      <div className="container px-5 py-10 mx-auto text-center items-center lg:px-40">
        <div className="w-full items-center flex flex-row">
          <img
            class="mx-2 max-w-full h-auto"
            alt="fb"
            src="https://raw.githubusercontent.com/PrestonV78/TCVT-Site/main/public/Facebook.webp"
            href="https://www.facebook.com/truckclubatvt/"
          />
          <img
            class="mx-2 max-w-full h-auto"
            alt="ln"
            src="https://raw.githubusercontent.com/PrestonV78/TCVT-Site/main/public/LinkedIn.webp"
            href="https://www.linkedin.com/groups/9170257/"
          />
          <img
            class="mx-2 max-w-full h-auto"
            alt="ig"
            src="https://raw.githubusercontent.com/PrestonV78/TCVT-Site/main/public/Instagram.webp"
            href="https://www.instagram.com/truckclubatvt/"
          />
          <img
            class="mx-2 max-w-full h-auto"
            alt="yt"
            src="https://raw.githubusercontent.com/PrestonV78/TCVT-Site/main/public/YouTube.webp"
            href="https://www.youtube.com/channel/UCvT9FXcNgF0oYMBc0bdStZw?view_as=subscriber"
          />
          <img
            class="mx-2 max-w-full h-auto"
            alt="link"
            src="https://raw.githubusercontent.com/PrestonV78/TCVT-Site/main/public/Link.webp"
            href="https://linktr.ee/truckclubatvt"
          />
        </div>
        <div className="flex flex-col w-full mb-10">
          <p className="mb-8 leading-relaxed text-black">
            Copyright 2023 Truck Club at Virginia Tech
          </p>
        </div>
      </div>
    </section>
  );
}
