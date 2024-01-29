import {
  Button,
  TextInput,
  Select,
  Textarea,
  Card,
  Group,
  Badge,
  Text,
  Modal,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconUser } from "@tabler/icons-react";
import { useRef, useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useReactToPrint } from "react-to-print";

function OnCash() {
  const form = useForm({
    initialValues: {
      selectbank: "",
      banktransfer: "",
      drugId: "",
      transactionid: "",
      bankfee: "",
      price: "",
      totalprice: "",
      toaccname: "",
      toaccnumber: "",
      fromaccname: "",
      fromaccnumber: "",
      description: "",
    },
    validate: {
      selectbank: (value) =>
        value.length < 2 ? "please enter Categories" : null,
      banktransfer: (value) =>
        value.length < 2 ? "please enter Categories" : null,
      drugId: (value) => (value.length < 2 ? "please enter Categories" : null),
      transactionid: (value) =>
        value.length < 2 ? "please enter Categories" : null,
      bankfee: (value) => (value.length < 2 ? "please enter Categories" : null),
      price: (value) => (value.length < 2 ? "please enter Categories" : null),
      toaccnumber: (value) =>
        value.length < 2 ? "please enter Categories" : null,
      fromaccnumber: (value) =>
        value.length < 2 ? "please enter Categories" : null,
    },
    //
  });
  const exports = useRef();
  const change = useReactToPrint({
    content: () => exports.current,
    documentTitle: "user List",
    onAfterPrint: () => alert("Data Saved"),
  });
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Payment receipt"
      >
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Group justify="center" mt="md" mb="xs">
            <Card.Section>
              {/* <ThemeIcon radius="xl" size={160} color="green">
                    <BsFillCheckCircleFill className="text-9xl" />
                  </ThemeIcon> */}
              <BsFillCheckCircleFill
                size={100}
                className="text-green-600 mb-4"
              />
              <Text className="text-center text-4xl">Success</Text>
            </Card.Section>
          </Group>
          <Text size="xl" c="dimmed" className="text-center">
            -------------------------------------
          </Text>
          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Payment Method</Text>
            <Badge color="pink" variant="light">
              Bank Transfer
            </Badge>
          </Group>
          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Transfer Bank</Text>
            <Badge color="pink" variant="light">
              Ahadu Bank
            </Badge>
          </Group>
          <Text size="xl" c="dimmed" className="text-center">
            -------------------------------------
          </Text>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Transaction Id</Text>
            <Text>FT1029f30m12</Text>
          </Group>
          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>From Acc number</Text>
            <Text>100002238139</Text>
          </Group>
          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>From Acc name</Text>
            <Text>Dawit Mezgebu</Text>
          </Group>
          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>To Acc number</Text>
            <Text>1000055548139</Text>
          </Group>
          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>To Acc name</Text>
            <Text>Golden Kids</Text>
          </Group>
          <Text size="xl" c="dimmed" className="text-center">
            -------------------------------------
          </Text>
          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Price</Text>
            <Text>2000 br</Text>
          </Group>
          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Bank Fee</Text>
            <Text>200 br</Text>
          </Group>
          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Total Price</Text>
            <Text>2200 br</Text>
          </Group>

          <Button
            variant="light"
            color="blue"
            fullWidth
            mt="md"
            radius="md"
            onClick={change}
          >
            Download
          </Button>
        </Card>
      </Modal>

      <Group>
        <Button
          leftSection={<IconUser size={14} />}
          onClick={() => setOpened(true)}
        >
          Get your Receipt
        </Button>
      </Group>
      <div className=" flex mt-8 justify-center items-center  ">
        <div className="w-full max-w-3xl  pl-10 mt-5 bg-white p-8 rounded-xl ">
          <div className="flex mb-10 text-center items-center justify-center font-semibold text-xl">
            <h1>New Drug</h1>
          </div>
          <form>
            <div className="flex  mb-2 space-x-3">
              <div className="w-full md:w-1/2  mb-3 md:mb-0 ">
                <Select
                  mt="md"
                  comboboxProps={{ withinPortal: true }}
                  data={[
                    "Ahadu Bank",
                    "Abyssina Bank",
                    "Hibret Bank",
                    "Wegagen Bank",
                  ]}
                  label="Select Bank"
                  placeholder="Select Bank"
                  {...form.getInputProps("selectbank")}
                />
                <TextInput
                  mt="md"
                  label="Bank Transaction"
                  placeholder="Bank Transaction"
                  {...form.getInputProps("transferbank")}
                />

                <TextInput
                  mt="sm"
                  label="Transaction Id"
                  placeholder="Transaction Id"
                  {...form.getInputProps("transactionid")}
                />

                <TextInput
                  mt="md"
                  label="From Account Number"
                  placeholder="From Account Number"
                  {...form.getInputProps("fromaccnumber")}
                />

                <TextInput
                  mt="md"
                  label="From Account Name"
                  placeholder="From Account Name"
                  {...form.getInputProps("fromaccname")}
                />

                <TextInput
                  mt="md"
                  label="To Account Number"
                  placeholder="To Account Number"
                  {...form.getInputProps("toaccnumber")}
                />
                <TextInput
                  mt="md"
                  label="From Account Name"
                  placeholder="To Account Name"
                  {...form.getInputProps("toaccname")}
                />
                <TextInput
                  mt="sm"
                  label="Price"
                  placeholder="Price"
                  {...form.getInputProps("price")}
                />
                <TextInput
                  mt="sm"
                  label="Bank Fee"
                  placeholder="Bank Fee"
                  {...form.getInputProps("bankfee")}
                />

                <TextInput
                  mt="sm"
                  label="Total Price"
                  placeholder="Total Price"
                  {...form.getInputProps("totalprice")}
                />
                <Textarea
                  mt="md"
                  label="Description"
                  placeholder="Description"
                  {...form.getInputProps("description")}
                />
                <Button type="submit" className="flex justify-end" mt="xl">
                  Save
                </Button>
              </div>

              <div className="w-full md:w-1/2  mb-3 md:mb-0 ">
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Group justify="center" mt="md" mb="xs">
                    <Card.Section>
                      {/* <ThemeIcon radius="xl" size={160} color="green">
                    <BsFillCheckCircleFill className="text-9xl" />
                  </ThemeIcon> */}
                      <BsFillCheckCircleFill
                        size={100}
                        className="text-green-600 mb-4"
                      />
                      <Text className="text-center text-4xl">Success</Text>
                    </Card.Section>
                  </Group>
                  <Text size="xl" c="dimmed">
                    -------------------------------------
                  </Text>
                  <Group justify="space-between" mt="md" mb="xs">
                    <Text fw={500}>Payment Method</Text>
                    <Badge color="pink" variant="light">
                      OnCash
                    </Badge>
                  </Group>
                  <Group justify="space-between" mt="md" mb="xs">
                    <Text fw={500}>Transfer Bank</Text>
                    <Badge color="pink" variant="light">
                      {form.values.selectbank}
                    </Badge>
                  </Group>
                  <Text size="xl" c="dimmed">
                    -------------------------------------
                  </Text>

                  <Group justify="space-between" mt="md" mb="xs">
                    <Text fw={500}>Transaction Id</Text>
                    <Text>{form.values.transactionid}</Text>
                  </Group>
                  <Group justify="space-between" mt="md" mb="xs">
                    <Text fw={500}>From Acc number</Text>
                    <Text>{form.values.fromaccnumber}</Text>
                  </Group>
                  <Group justify="space-between" mt="md" mb="xs">
                    <Text fw={500}>From Acc name</Text>
                    <Text>{form.values.fromaccname}</Text>
                  </Group>
                  <Group justify="space-between" mt="md" mb="xs">
                    <Text fw={500}>To Acc number</Text>
                    <Text>{form.values.toaccnumber}</Text>
                  </Group>
                  <Group justify="space-between" mt="md" mb="xs">
                    <Text fw={500}>To Acc name</Text>
                    <Text>{form.values.toaccname}</Text>
                  </Group>
                  <Text size="xl" c="dimmed">
                    -------------------------------------
                  </Text>
                  <Group justify="space-between" mt="md" mb="xs">
                    <Text fw={500}>Price</Text>
                    <Text>2000 br</Text>
                  </Group>
                  <Group justify="space-between" mt="md" mb="xs">
                    <Text fw={500}>Bank Fee</Text>
                    <Text>200 br</Text>
                  </Group>
                  <Group justify="space-between" mt="md" mb="xs">
                    <Text fw={500}>Total Price</Text>
                    <Text>2200 br</Text>
                  </Group>

                  <Button
                    variant="light"
                    color="blue"
                    fullWidth
                    mt="md"
                    radius="md"
                    onClick={change}
                  >
                    Download
                  </Button>
                </Card>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default OnCash;
