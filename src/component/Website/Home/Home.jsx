import React from "react";
import { Button, Center, Image, Text, Title } from "@mantine/core";
import { IconArrowAutofitRight } from "@tabler/icons-react";
import Nav from "../Basic/Nav";
import {
  FaBehance,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";

function Home() {
  return (
    <div className="">
      <div className="absolute inset-0 px-20 pt-8">
        <Nav />
      </div>
      <div className=" flex justify-between h-screen ">
        <div className="bg-gray-50 w-full ">
          <div className="mt-32">
            <Text class="text-center mb-4 text-yellow-600 font-bold">
              SOFTWARE ENGINEER, UI/UX & GRAPHICS DESIGNER
            </Text>
            <Title
              size="h1"
              fw={700}
              class="text-center font-black lg:text-8xl  "
            >
              {" "}
              I'm Dawit <br></br> Mezgebu
            </Title>
          </div>

          <Center className="mt-10 space-x-4">
            <Button
              class="bg-yellow-700 text-white p-2 px-4 rounded-sm hover:shadow-lg"
              rightSection={<IconArrowAutofitRight size={14} />}
            >
              More About Me
            </Button>
            <Button
              class="bg-gray-200 text-black p-2 px-4 rounded-sm hover:shadow-none"
              rightSection={<IconArrowAutofitRight size={14} />}
            >
              Hire Me
            </Button>
          </Center>
          <Center className="mt-7">
            <Text>Join Our Social Media</Text>
          </Center>
          <Center className="mt-7 space-x-4">
            <FaLinkedinIn
              className="bg-yellow-700 hover:shadow-xl text-white p-2 rounded-lg"
              style={{ width: "28px", height: "auto" }}
            />
            <FaBehance
              className="bg-yellow-700 text-white p-2 rounded-lg"
              style={{ width: "28px", height: "auto" }}
            />
            <FaGithub
              className="bg-yellow-700 text-white p-2 rounded-lg"
              style={{ width: "28px", height: "auto" }}
            />
            <FaTelegramPlane
              className="bg-yellow-700 text-white p-2 rounded-lg"
              style={{ width: "28px", height: "auto" }}
            />

            <FaFacebookF
              className="bg-yellow-700 text-white p-2 rounded-lg"
              style={{ width: "28px", height: "auto" }}
            />
            <FaInstagram
              color="white"
              variant="filled"
              className="bg-yellow-700 p-2 rounded-lg"
              style={{ width: "28px", height: "auto" }}
            />
          </Center>
        </div>
        <div className="bg-yellow-700 w-full">
          <div className="w-2/3  h-auto ">
            <Image src="./coverpg.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
