import { Button, Card, Center, Image, Modal, Text, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconDownload } from "@tabler/icons-react";
import React from "react";

function ProfessionSection() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div>
      <div className="flex justify-between space-x-8 px-8 ">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-row space-x-6">
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              className="w-72 h-52"
            >
              <Center className="mt-10 flex flex-col">
                <Text class="text-yellow-600 font-bold text-5xl">5000</Text>
                <Text>Happy Client</Text>
              </Center>
            </Card>
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              className="w-72 h-52"
            >
              <Center className="mt-10 flex flex-col">
                <Text class="text-yellow-600 font-bold text-5xl">5000</Text>
                <Text>Happy Client</Text>
              </Center>
            </Card>
          </div>
          <div className="flex flex-row space-x-6">
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              className="w-72 h-52"
            >
              <Center className="mt-10 flex flex-col">
                <Text class="text-yellow-600 font-bold text-5xl">5000</Text>
                <Text>Happy Client</Text>
              </Center>
            </Card>
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              className="w-72 h-52"
            >
              <Center className="mt-10 flex flex-col">
                <Text class="text-yellow-600 font-bold text-5xl">5000</Text>
                <Text>Happy Client</Text>
              </Center>
            </Card>
          </div>
        </div>
        <div className="">
          <Text class=" mb-4 text-yellow-600 font-bold">About Me</Text>
          <Title size="h1" fw={700} class=" font-black lg:text-4xl  ">
            {" "}
            A Front End Developer, WordPress Developer, UI/UX Designer &
            Graphics Designer Based in Ethiopia
          </Title>
          <Text class="mt-8">
            Dynamic and highly skilled Front End Development with a strong
            background in UI/UX design and graphics design. Proven ability to
            create innovative and visually appealing user interfaces while
            excelling in the development of robust and scalable software
            solutions. Adept at collaborating with cross-functional teams to
            deliver high-quality products that meet user and business
            requirements.
          </Text>
          <div className="grid grid-cols-4 space-y-6 mt-8">
            <Text class="font-bold ">Name:</Text>
            <Text class="text-sm">Dawit Mezgebu</Text>
            <Text class="font-bold">Email</Text>
            <Text class="text-sm">dawitmezgebu22@gmail.com</Text>
            <Text class="font-bold">Date of birth: </Text>
            <Text class="text-sm">Feb 3, 2000 </Text>
            <Text class="font-bold">Phone</Text>
            <Text class="text-sm">+251 943 18 45 06</Text>
            <Text class="font-bold">Address: </Text>
            <Text class="text-sm">Addis Abeba, Eth</Text>
            <Text class="font-bold">Zip Code</Text>
            <Text class="text-sm">1000</Text>
          </div>
          <Button
            class="bg-yellow-700 text-white p-2 px-4 rounded-sm hover:shadow-lg mt-8"
            onClick={open}
            rightSection={<IconDownload size={14} />}
          >
            Download My Cv
          </Button>
          <Modal opened={opened} onClose={close} title="Dawit Mezgebu CV">
            <Image src="./david cv.jpg" />
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default ProfessionSection;
