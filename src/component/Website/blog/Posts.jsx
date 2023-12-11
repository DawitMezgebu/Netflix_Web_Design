import { Badge, Button, Group, Modal, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";

function Posts() {
  const [opened, { open, close }] = useDisclosure(false);
  const profession = [
    {
      id: 1,
      imgurl: "/portfolio/18.jpg",
      department: "Front Development",
      caption:
        "building responsive and user-friendly web applications using React. .",
    },
    {
      id: 2,
      imgurl: "/portfolio/18.jpg",
      department: "WordPress Dev't",
      caption:
        "expertise in crafting engaging and functional websites using WordPress.",
    },
    {
      id: 3,
      imgurl: "/portfolio/18.jpg",
      department: "Ui Design",
      caption:
        "user-friendly interfaces for both web and mobile platforms. focus on usability and accessibility.  ",
    },
    {
      id: 4,
      imgurl: "/portfolio/18.jpg",
      department: "Graphics Design",
      caption:
        "deliver high-quality graphics that meet client objectives and brand standards.",
    },
  ];
  return (
    <div>
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="space-y-8 lg:grid lg:grid-cols-4 sm:gap-6 xl:gap-10 lg:space-y-0">
          {profession.map((filds) => {
            return (
              <div class="flex flex-col p-6 mx-auto max-w-lg text-center hover:shadow-xl  text-gray-900  bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-2 dark:bg-gray-800 dark:text-white">
                <div class="">
                  <img
                    src={filds.imgurl}
                    alt="aby"
                    className="w-fit h-fit rounded-lg"
                  />
                  <Group justify="space-between" mt="md" mb="xs">
                    <Text class="font-bold">{filds.department} </Text>
                    <Badge color="rgba(191, 113, 11, 1)">News</Badge>
                  </Group>

                  <Text class="mb-3 font-normal  dark:text-gray-400">
                    {filds.caption}
                  </Text>
                  <Button
                    color="rgba(191, 113, 11, 1)"
                    fullWidth
                    mt="md"
                    radius="md"
                    onClick={open}
                  >
                    Read More
                  </Button>
                </div>
                <Modal opened={opened} onClose={close} title="Blog">
                  <div class="">
                    <img
                      src={filds.imgurl}
                      alt="aby"
                      className="w-fit h-fit rounded-lg"
                    />
                    <Group justify="space-between" mt="md" mb="xs">
                      <Text class="font-bold">{filds.department} </Text>
                      <Badge color="rgba(191, 113, 11, 1)">News</Badge>
                    </Group>

                    <Text class="mb-3 font-normal  dark:text-gray-400">
                      {filds.caption}
                    </Text>
                  </div>
                </Modal>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Posts;
