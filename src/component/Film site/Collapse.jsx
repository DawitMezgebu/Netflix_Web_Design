import React from "react";
import { useDisclosure } from "@mantine/hooks";
import { Button, Collapse, Group, Text } from "@mantine/core";

function Collapsed() {
  const [opened, { toggle }] = useDisclosure(false);

  const collapsecontent = [
    {
      id: 1,
      title: "What is Netflix ?",
      content:
        "From Bulbapedia: Bulbasaur is a small, quadrupedal Pokémon that has blue-green skin with darker patches. It has red eyes with white pupils,slender, tentacle-like vines and provides it with energy through photosynthesis as well as from the nutrient-rich seeds contained within.",
    },
    {
      id: 2,
      title: "What is Netflix Kids ?",
      content:
        "blue-green skin with darker patches. It has red eyes with white pupils,slender, tentacle-like vines and provides it with energy through photosynthesis as well as from the nutrient-rich seeds contained within.",
    },
  ];

  return (
    <div class="min-h-screen bg-black space-y-10">
      <p class="p-5 text-white font-bold text-5xl flex justify-center">
        Frequently Asked Questions
      </p>
      {collapsecontent &&
        collapsecontent.map((content) => {
          return (
            <div
              class="space-y-5 flex flex-col justify-center items-center"
              key={content.id}
            >
              <div class="p-5 bg-[#303030] w-3/4 flex justify-between">
                <span class="text-3xl text-white">{content.title}</span>
                <Group justify="center" mb={5}>
                  <Button
                    onClick={() => toggle(content.id)}
                    class="text-3xl text-white"
                  >
                    +
                  </Button>
                </Group>
              </div>
              <div class=" w-3/4 flex justify-between">
                <Collapse
                  in={opened}
                  transitionDuration={1000}
                  transitionTimingFunction="linear"
                  className="bg-gray-800 p-4"
                >
                  <Text color="white">{content.content}</Text>
                </Collapse>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Collapsed;
