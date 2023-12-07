import { Button, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";

function ProjectList() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className="p-8">
      <div className="flex items-center justify-between">
        <div className="flex ">
          <div className="w-8 h-8  flex-col items-center">
            <img
              src="./my.jpg"
              alt="profile"
              className="shadow-md rounded-full object-cover "
            />
          </div>
          <div>
            <span className="flex">Pharmacy Management</span>
            <span>Pharmacy Management</span>
          </div>
        </div>
        <div>
          <Modal opened={opened} onClose={close} title="Authentication">
            {/* Modal content */}
          </Modal>

          <Button onClick={open}>Create Project</Button>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default ProjectList;
