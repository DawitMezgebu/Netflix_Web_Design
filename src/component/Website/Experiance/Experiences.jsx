import { Badge, Button, Center, Group, Text, Title } from "@mantine/core";
import React from "react";
import Nav from "../Basic/Nav";
import { MdArrowForwardIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Experiences() {
  const navigate = useNavigate();

  function experience() {
    navigate("/experiences");
  }
  function home() {
    navigate("/home");
  }
  const profession = [
    {
      id: 1,
      imgurl: "2022-2024",
      department: "Front End Dev't",
      location: "Herani Tech",
      caption:
        "building responsive and user-friendly web applications using React. .",
    },
    {
      id: 2,
      imgurl: "2014-2015",
      department: "WordPress Dev't",
      location: "Bachelor's Degree",
      caption:
        "expertise in crafting engaging and functional websites using WordPress.",
    },
    {
      id: 3,
      imgurl: "2014-2015",
      department: "Ui Design",
      location: "Bachelor's Degree",
      caption:
        "user-friendly interfaces for both web and mobile platforms. focus on usability and accessibility.  ",
    },
    {
      id: 4,
      imgurl: "2014-2015",
      department: "Graphics Design",
      location: "Bachelor's Degree",
      caption:
        "deliver high-quality graphics that meet client objectives and brand standards.",
    },
    {
      id: 4,
      imgurl: "2014-2015",
      department: "Digital Marketing",
      location: "Bachelor's Degree",
      caption:
        "deliver high-quality graphics that meet client objectives and brand standards.",
    },
  ];
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
            onClick={home}
          >
            Home
          </Button>

          <Button
            class="bg-gray-200 text-black p-1 px-2 rounded-sm hover:shadow-none"
            rightSection={<MdArrowForwardIos size={14} />}
            onClick={experience}
          >
            Experiences
          </Button>
        </Center>
        <Center className="mt-4">
          <Title class="lg:text-5xl font-bold">Experiences</Title>
        </Center>
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0">
            {profession.map((filds) => {
              return (
                <div class="flex flex-col  mx-auto max-w-lg text-center hover:shadow-xl   text-gray-900  bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-2 dark:bg-gray-800 dark:text-white">
                  <div class="p-6">
                    <Text
                      alt="aby"
                      color="rgba(191, 113, 11, 1)"
                      className="w-fit h-fit rounded-lg "
                    >
                      {filds.imgurl}
                    </Text>

                    <Group justify="space-between" mt="md" mb="xs">
                      <Text class="font-bold">{filds.department} </Text>
                      <Badge color="rgba(191, 113, 11, 1)">News</Badge>
                    </Group>
                    <Text class="text-start mb-3 font-normal  dark:text-gray-400">
                      {filds.location}
                    </Text>
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
    </div>
  );
}

export default Experiences;
