import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import Ticket from "./Ticket";

function Donate() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div>
      <div
        class="w-full bg-center bg-cover h-96"
        // style={{
        //   "background-image":
        //     "url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)",
        // }}
        style={{
          "background-image":
            "url(https://res.cloudinary.com/dal5m3lkj/image/upload/v1704876237/photo_2024-01-10_11-43-22_hlbkpg.jpg)",
        }}
      >
        <div class="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
          <div class="text-center">
            <h1 class="text-2xl font-semibold text-white uppercase lg:text-3xl">
              የኢትዮጵያዊው ጃንደረባ ትውልድ <span class="text-yellow-500 ">ይደግፉ</span>
            </h1>
            <button
              class="w-full px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-yellow-600 rounded-md lg:w-auto hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500"
              onClick={open}
            >
              ትኬት ይቁረጡ
            </button>
            <Modal opened={opened} onClose={close} title="ትኬት መቁረጫ">
              <Ticket />
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donate;
