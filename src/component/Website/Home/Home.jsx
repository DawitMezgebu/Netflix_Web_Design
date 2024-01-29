import React from "react";
import { Button, Center, Image, Modal, Text, Title } from "@mantine/core";
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
import { Typewriter } from "react-simple-typewriter";
import HireMe from "../Hire me/HireMe";
import { useDisclosure } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";
function Home() {
  const [opened, { open, close }] = useDisclosure(false);
  const navigate = useNavigate();

  function about() {
    navigate("/about");
  }

  return (
    <div className="">
      <div className="absolute inset-0 px-20 pt-8">
        <Nav />
      </div>
      <div className=" flex justify-between h-screen ">
        <div className="bg-gray-50 w-full ">
          <div className="mt-32">
            <Text class="text-center mb-4 text-yellow-600 font-bold text-2xl">
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
              onClick={about}
              color="rgba(209, 141, 6, 1)"
              rightSection={<IconArrowAutofitRight size={14} />}
            >
              More About Me
            </Button>
            <Button
              color="gray"
              className="text-black p-2 px-4 rounded-sm hover:shadow-none"
              rightSection={<IconArrowAutofitRight size={14} />}
              onClick={open}
            >
              Hire Me
            </Button>
            <Modal opened={opened} onClose={close} title="Hiring Process">
              <HireMe />
            </Modal>
          </Center>
          <Center className="mt-7">
            <Text>Social Media</Text>
          </Center>
          <Center className="mt-7 space-x-4">
            <a
              href="https://www.linkedin.com/in/gebrheir-humaniterian-022453296"
              target=" _blank"
            >
              <FaLinkedinIn
                className="bg-yellow-700 hover:shadow-xl text-white p-2 rounded-lg"
                style={{ width: "28px", height: "auto" }}
              />
            </a>
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
        <div className="bg-yellow-700 w-full hidden sm:block ">
          <div className="w-2/3  h-auto ">
            <Image src="./coverpg.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
