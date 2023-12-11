import { Center, Pagination, Text } from "@mantine/core";
import React from "react";

function GraphicsProject() {
  const profession = [
    {
      id: 1,
      department: "/portfolio/10.jpg",
      caption: "Abyssina Bank",
    },
    {
      id: 2,
      department: "/portfolio/02.jpg",
      caption: "Abyssina Bank",
    },
    {
      id: 3,
      department: "/portfolio/005.jpg",
      caption: "Abyssina Bank",
    },
    {
      id: 4,
      department: "/portfolio/11.jpg",
      caption: "Abyssina Bank",
    },
    {
      id: 5,
      department: "/portfolio/22.jpg",
      caption: "Ahadu Bank",
    },
    {
      id: 6,
      department: "/portfolio/011.jpg",
      caption: "Ahadu Bank",
    },
    {
      id: 7,
      department: "/portfolio/005.jpg",
      caption: "Ahadu Bank",
    },
    {
      id: 8,
      department: "/portfolio/20.jpg",
      caption: "Abyssina Bank",
    },
  ];
  return (
    <div>
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="space-y-8 lg:grid lg:grid-cols-4 sm:gap-6 xl:gap-10 lg:space-y-0 mb-10">
          {profession.map((filds) => {
            return (
              <div class="flex flex-col  mx-auto max-w-lg text-center hover:bg-yellow-700  text-gray-900 hover:text-white bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-1 dark:bg-gray-800 dark:text-white">
                <div class="">
                  <img
                    src={filds.department}
                    alt="aby"
                    className="w-fit h-fit rounded-lg"
                  />

                  <Text class="mb-3 font-normal  dark:text-gray-400">
                    {filds.caption}
                  </Text>
                </div>
              </div>
            );
          })}
        </div>
        <Center>
          <Pagination color="rgba(191, 113, 11, 1)" total={10} />
        </Center>
      </div>
    </div>
  );
}

export default GraphicsProject;
