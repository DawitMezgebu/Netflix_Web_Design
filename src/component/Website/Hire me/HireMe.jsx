import { Text } from "@mantine/core";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

function HireMe() {
  return (
    <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div class="p-6 space-y-4 md:space-y-5 sm:p-8">
        <h1 class="text-md mb-4 font-medium leading-tight tracking-tight text-gray-900 md:text-md dark:text-white">
          Thanks For Hiring Me as
          <br></br>
          <Text class=" mb-2 text-yellow-600 font-normal text-md">
            <Typewriter
              words={[
                "Software Engineer",
                "WordPress Developer",
                "Graphics Designer",
                "UI Designer",
              ]}
              loop={100}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </Text>
        </h1>
        <form class="space-y-4 md:space-y-3" action="#">
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-normal text-gray-900 dark:text-white"
            >
              Company Name
            </label>
            <input
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="herani tech"
              required=""
            />
          </div>
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-normal text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@company.com"
              required=""
            />
          </div>
          <div>
            <label
              for="password"
              class="block mb-2 text-sm font-normal text-gray-900 dark:text-white"
            >
              Profession
            </label>
            <select
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
            >
              <option>Front End Development</option>
              <option>WordPress Development</option>
              <option>UI Design</option>
              <option>Graphics Design</option>
              <option>Digital Marketing</option>
            </select>
          </div>

          <button
            type="submit"
            class="w-full text-white bg-yellow-700 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Hire
          </button>
          <p class="text-sm font-light text-gray-500 dark:text-gray-400">
            If you want to contact {""}
            <a
              href="./contact"
              class="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Click Me 🖐
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default HireMe;
