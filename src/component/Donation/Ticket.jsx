import { FileInput, Text } from "@mantine/core";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

function Ticket() {
  return (
    <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div class="p-6 space-y-4 md:space-y-5 sm:p-8">
        <h1 class="text-md mb-4 font-medium leading-tight tracking-tight text-gray-900 md:text-md dark:text-white">
          Thanks For Supporting Us
          <br></br>
          <Text class=" mb-2 text-yellow-600 font-normal text-md">
            <Typewriter
              words={["ጃን ያሬድ", "ጃን ሉቃስ", "ጃን ህንደኬ", "ጃን ሚዲያ"]}
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
              Full Name
            </label>
            <input
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required=""
            />
          </div>
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-normal text-gray-900 dark:text-white"
            >
              Phone Number
            </label>
            <input
              type="email"
              name="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
            />
          </div>
          <div>
            <FileInput label="Upload payment screenshot" placeholder="" />
          </div>

          <div class="mt-4 w-full flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
            <div class="flex items-center border-gray-100">
              <span
                class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                // onClick={() => setCount((prev) => prev - 1)}
              >
                -
              </span>
              <input
                class="h-8 w-8 border bg-white text-center text-xs outline-none"
                placeholder="2"
                // value={count}
                // onChange={(e) => setCount(parseInt(e.target.value))}
              />
              <span
                class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                // onClick={() => setCount((prev) => prev + 1)}
              >
                +
              </span>
            </div>
            <div class=" flex space-x-4">
              <p class="text-sm " placeholder="200br">
                200 br
              </p>
            </div>
          </div>
          <button
            type="submit"
            class="w-full text-white bg-yellow-600 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Submit
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

export default Ticket;
