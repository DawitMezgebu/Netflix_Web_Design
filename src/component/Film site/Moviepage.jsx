import React from "react";
import WebFooter from "./WebFooter";
import Pricing from "./Pricing";
import { Typewriter } from "react-simple-typewriter";
import Collapsed from "./Collapse";

function Moviepage() {
  return (
    <div>
      <div
        class="h-screen  bg-cover bg-center"
        style={{
          "background-image":
            "linear-gradient(rgb(0 0 0 / 70%), rgb(0 0 0 / 70%)), url('https://assets.nflxext.com/ffe/siteui/vlv3/c0a32732-b033-43b3-be2a-8fee037a6146/2fe6e3c0-5613-4625-a0c1-3d605effd10b/IN-en-20210607-popsignuptwoweeks-perspective_alpha_website_large.jpg')",
        }}
      >
        <div className="flex justify-between pt-8 px-16">
          <div class=" ml-5 ">
            <img
              class="w-auto h-7"
              src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"
              alt=""
            />
          </div>

          <button class=" bg-red-600 hover:bg-red-700 text-white p-3 mr-5">
            Sign In
          </button>
        </div>
        <div class="space-y-5 pt-20">
          <p class="text-white font-bold text-5xl flex flex-col items-center">
            <span>
              Unlimited movies,
              <Typewriter
                words={[
                  " TV shows",
                  " Kids Movie",
                  " Action Movies",
                  " Adventure",
                ]}
                loop={100}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />{" "}
              and more.{" "}
            </span>
          </p>
          <p class="text-white font-medium text-3xl flex flex-col items-center">
            Watch anywhere. Cancel anytime.
          </p>
          <p class="text-white text-lg flex flex-col items-center">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div class="flex flex-row items-center justify-center">
            <input
              type="email"
              placeholder="Email address"
              class=" p-4 focus:outline-none focus:ring-1 focus:ring-green-400 border-2 border-green-400 rounded-md opacity-50 mr-4 w-96"
            />
            <button class="p-4 text-l font-semibold bg-red-600 hover:bg-red-700 text-white rounded-md px-6">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <hr />
      <div class="h-screen flex items-center justify-center bg-black p-5">
        <div class="space-y-5 p-5">
          <p class="text-white font-bold text-4xl">Enjoy on your TV.</p>
          <p class="text-white font-semiboldbold text-xl">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
        <div>
          <img
            alt="TV"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
          />
        </div>
      </div>
      <hr />
      <div class="h-screen flex items-center justify-center bg-black p-5">
        <div>
          <img
            alt=""
            class="our-story-card-img"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            data-uia="our-story-card-img"
          />
        </div>
        <div class="space-y-5">
          <p class="text-white font-bold text-4xl">
            Download your shows to watch offline.
          </p>
          <p class="text-white font-semiboldbold text-xl">
            Save your favourites easily and always have something to watch.
          </p>
        </div>
      </div>
      <hr />
      <div class="h-screen flex items-center justify-center bg-black p-5">
        <div class="space-y-5 p-5">
          <p class="text-white font-bold text-4xl">Watch everywhere.</p>
          <p class="text-white font-semiboldbold text-xl">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
        <div>
          <img
            alt=""
            class="our-story-card-img"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
            data-uia="our-story-card-img"
          />
        </div>
      </div>
      <hr />
      <div class="h-screen flex items-center justify-center bg-black p-5">
        <div class="p-5">
          <img
            alt=""
            class="our-story-card-img"
            src="https://occ-0-5556-3662.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVxdX2WnFSp49eXb1do0euaj-F8upNImjofE77XStKhf5kUHG94DPlTiGYqPeYNtiox-82NWEK0Ls3CnLe3WWClGdiJP.png?r=5cf"
            data-uia="our-story-card-img"
          />
        </div>
        <div class="space-y-5">
          <p class="text-white font-bold text-4xl">
            Create profiles for children.
          </p>
          <p class="text-white font-semiboldbold text-xl">
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </p>
        </div>
      </div>
      <hr />
      <Collapsed />
      <Pricing />
      <WebFooter />
      <hr />
    </div>
  );
}

export default Moviepage;
