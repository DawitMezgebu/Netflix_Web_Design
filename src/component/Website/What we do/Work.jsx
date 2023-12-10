import { Center, Text, Title } from "@mantine/core";
import React from "react";
import { IoDesktopSharp } from "react-icons/io5";

function Work() {
  const profession = [
    {
      id: 1,
      department: "Front Development",
      caption:
        "building responsive and user-friendly web applications using React. Proven ability to translate design and business requirements into high-quality code and deliver exceptional user experiences.",
    },
    {
      id: 2,
      department: "WordPress Development",
      caption:
        "expertise in crafting engaging and functional websites using WordPress. Proficient in custom theme development, plugin integration, and optimizing site performance.",
    },
    {
      id: 3,
      department: "Ui Design",
      caption:
        "user-friendly interfaces for both web and mobile platforms. Adept at translating complex concepts into intuitive and engaging designs, with a strong focus on usability and accessibility. ",
    },
    {
      id: 4,
      department: "Graphics Design",
      caption:
        "Experienced in both print and digital media, with a proven ability to deliver high-quality graphics that meet client objectives and brand standards.",
    },
  ];
  return (
    <div>
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="space-y-8 lg:grid lg:grid-cols-4 sm:gap-6 xl:gap-10 lg:space-y-0">
          {profession.map((filds) => {
            return (
              <div class="flex flex-col p-6 mx-auto max-w-lg text-center hover:bg-yellow-700  text-gray-900 hover:text-white bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                <div class="">
                  <Center>
                    <IoDesktopSharp className=" font-bold text-6xl mb-8" />
                  </Center>

                  <Title class="mb-4 text-1xl font-bold tracking-tight  dark:text-white">
                    {filds.department}
                  </Title>

                  <Text class="mb-3 font-normal  dark:text-gray-400">
                    {filds.caption}
                  </Text>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Work;
