import { Avatar, Card, Center, Text, Title } from "@mantine/core";
import React from "react";

function Testimonial() {
  return (
    <div>
      <Center className="mt-4 flex flex-col">
        <Text class="text-yellow-600">Testimonial</Text>
        <Title class="lg:text-4xl font-bold">Happy Client</Title>
      </Center>
      <div className="flex justify-between px-10 items-center mt-14 mb-6">
        <Card
          shadow="sm"
          padding="lg"
          radius="md"
          withBorder
          className="w-96 h-52 hover:shadow-xl"
        >
          <Center className="flex flex-row space-x-5 items-center">
            <div className="items-center">
              <Avatar
                src="./my.jpg"
                className="border border-yellow-700 rounded-full "
                alt="it's me"
              />
            </div>
            <div>
              <Text class="font-bold text-lg">Dawit Mezgebu</Text>
              <Text class="text-yellow-600 font-normal text-center">
                Africa 118 CEO
              </Text>
            </div>
          </Center>
          <Text size="sm" c="dimmed" class="mt-8">
            With Fjord Tours you can explore more of the magical fjord
            landscapes with tours and activities on and around the fjords of
            Norway
          </Text>
        </Card>
        <Card
          shadow="sm"
          padding="lg"
          radius="md"
          withBorder
          className="w-96 h-52 hover:shadow-xl"
        >
          <Center className="flex flex-row space-x-5 items-center">
            <div className="items-center">
              <Avatar
                src="./my.jpg"
                className="border border-yellow-700 rounded-full "
                alt="it's me"
              />
            </div>
            <div>
              <Text class="font-bold text-lg">Dawit Mezgebu</Text>
              <Text class="text-yellow-600 font-normal text-center">
                Africa 118 CEO
              </Text>
            </div>
          </Center>
          <Text size="sm" c="dimmed" class="mt-8">
            With Fjord Tours you can explore more of the magical fjord
            landscapes with tours and activities on and around the fjords of
            Norway
          </Text>
        </Card>
        <Card
          shadow="sm"
          padding="lg"
          radius="md"
          withBorder
          className="w-96 h-52 hover:shadow-xl"
        >
          <Center className="flex flex-row space-x-5 items-center">
            <div className="items-center">
              <Avatar
                src="./my.jpg"
                className="border border-yellow-700 rounded-full "
                alt="it's me"
              />
            </div>
            <div>
              <Text class="font-bold text-lg">Dawit Mezgebu</Text>
              <Text class="text-yellow-600 font-normal text-center">
                Africa 118 CEO
              </Text>
            </div>
          </Center>
          <Text size="sm" c="dimmed" class="mt-8">
            With Fjord Tours you can explore more of the magical fjord
            landscapes with tours and activities on and around the fjords of
            Norway
          </Text>
        </Card>
      </div>
    </div>
  );
}

export default Testimonial;
