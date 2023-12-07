import { Button, Center, Title } from "@mantine/core";
import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import ProfessionSection from "./ProfessionSection";
import Nav from "../Basic/Nav";
import Skills from "./Skills";
import Testimonial from "./Testimonial";

function About() {
  return (
    <div>
      <div className="px-20 pt-8">
        <Nav />
      </div>
      <div>
        <Center className="mt-44 space-x-4">
          <Button
            class="bg-gray-200 text-black p-1 px-2 rounded-sm hover:shadow-none"
            rightSection={<MdArrowForwardIos size={14} />}
          >
            Home
          </Button>

          <Button
            class="bg-gray-200 text-black p-1 px-2 rounded-sm hover:shadow-none"
            rightSection={<MdArrowForwardIos size={14} />}
          >
            About Us
          </Button>
        </Center>
        <Center className="mt-4">
          <Title class="lg:text-5xl font-bold">About Us</Title>
        </Center>
      </div>
      <div className="mt-28">
        <ProfessionSection />
      </div>
      <div className="mt-32">
        <Skills />
      </div>
      <div className="mt-32">
        <Testimonial />
      </div>
    </div>
  );
}

export default About;
