import { Button, Image, Modal, Table, Text, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconDownload, IconEye } from "@tabler/icons-react";
import React from "react";

function ProfessionSection() {
  const [opened, { open, close }] = useDisclosure(false);
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = imageName || "image"; // You can specify a default name if no name is provided
    link.click();
  };

  const imageUrl = "./david cv.jpg";
  const imageName = "Dawit Cv";
  const elements = [
    {
      name: "Dawit Mezgebu",
      email: "dawitmezgebu22@gmail.com",
      phone: "+251 943 18 45 06",
    },
  ];
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.email}</Table.Td>

      <Table.Td>{element.phone}</Table.Td>
      <Table.Td>
        <Button
          class="bg-yellow-700 text-white p-2 px-4 rounded-sm hover:shadow-lg mt-8"
          onClick={open}
          rightSection={<IconEye size={14} />}
        >
          Preview My Cv
        </Button>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <div>
      <div className="flex justify-between space-x-8 px-8 ">
        {/* <div className="flex flex-col space-y-6">
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
        </div> */}
        <div className="">
          {/* <Title
            size="h1"
            fw={700}
            class=" font-black lg:text-2xl text-center "
          >
            {" "}
            A Front End Developer, WordPress Developer, UI/UX Designer &
            Graphics Designer 
          </Title> */}
          <Text class="mt-8 text-center">
            Dynamic and highly skilled Front End Development with a strong
            background in UI/UX design and graphics design. Proven ability to
            create innovative and visually appealing user interfaces while
            excelling in the development of robust and scalable software
            solutions. Adept at collaborating with cross-functional teams to
            deliver high-quality products that meet user and business
            requirements.
          </Text>
          <div class="grid grid-cols-1 md:grid-cols-4 space-y-6 mt-8">
            <div class="md:col-span-1">
              <Text class="font-bold">Name:</Text>
              <Text class="text-sm">Dawit Mezgebu</Text>
            </div>
            <div class="md:col-span-1">
              <Text class="font-bold">Email</Text>
              <Text class="text-sm">dawitmezgebu22@gmail.com</Text>
            </div>

            <div class="md:col-span-1">
              <Text class="font-bold">Phone</Text>
              <Text class="text-sm">+251 943 18 45 06</Text>
            </div>
            <div class="md:col-span-1">
              <Text class="font-bold">Address: </Text>
              <Text class="text-sm">Addis Abeba, Eth</Text>
            </div>
          </div>

          <Button
            class="bg-yellow-700 text-white p-2 px-4 rounded-sm hover:shadow-lg mt-8"
            onClick={open}
            rightSection={<IconEye size={14} />}
          >
            Preview My Cv
          </Button>
          <Modal opened={opened} onClose={close} title="Dawit Mezgebu CV">
            <Image src={imageUrl} />
            <Button
              class="bg-yellow-700 text-white p-2 px-4 rounded-sm hover:shadow-lg mt-8"
              onClick={handleDownload}
              rightSection={<IconDownload size={14} />}
            >
              Download My Cv
            </Button>
          </Modal>
        </div>
      </div>
      {/* <div className="mt-10">
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th> Name</Table.Th>
              <Table.Th> Email</Table.Th>
              <Table.Th>Phone Number</Table.Th>
              <Table.Th>Cv</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </div> */}
    </div>
  );
}

export default ProfessionSection;
