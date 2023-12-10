import { Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import { Menu, rem } from "@mantine/core";
import { IconTrash, IconArrowsLeftRight, IconHome } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaListUl } from "react-icons/fa";
import { MdAddTask } from "react-icons/md";
import { IoBagSharp } from "react-icons/io5";

function Nav() {
  const [opened, { toggle }] = useDisclosure();
  const navigate = useNavigate();

  function about() {
    navigate("/about");
  }
  function home() {
    navigate("/home");
  }
  function service() {
    navigate("/whatwedo");
  }

  function project() {
    navigate("/projects");
  }
  return (
    <div className="  flex justify-between">
      <div className="font-black">Dawit Logo</div>
      <div>
        <Menu
          shadow="md"
          width={200}
          transitionProps={{ transition: "rotate-left", duration: 500 }}
        >
          <Menu.Target>
            <Burger
              opened={opened}
              onClick={toggle}
              aria-label="Toggle navigation"
            />
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item
              onClick={home}
              leftSection={
                <IconHome style={{ width: rem(14), height: rem(14) }} />
              }
            >
              Home
            </Menu.Item>
            <Menu.Item
              onClick={about}
              leftSection={
                <CgProfile style={{ width: rem(14), height: rem(14) }} />
              }
            >
              About
            </Menu.Item>
            <Menu.Item
              leftSection={
                <FaListUl style={{ width: rem(14), height: rem(14) }} />
              }
              onClick={service}
            >
              Services
            </Menu.Item>
            <Menu.Item
              leftSection={
                <MdAddTask style={{ width: rem(14), height: rem(14) }} />
              }
            >
              Experiences
            </Menu.Item>
            <Menu.Item
              leftSection={
                <IoBagSharp style={{ width: rem(14), height: rem(14) }} />
              }
              onClick={project}
            >
              Works
            </Menu.Item>

            <Menu.Item
              leftSection={
                <IconArrowsLeftRight
                  style={{ width: rem(14), height: rem(14) }}
                />
              }
            >
              Blog
            </Menu.Item>
            <Menu.Item
              leftSection={
                <IconTrash style={{ width: rem(14), height: rem(14) }} />
              }
            >
              Contact
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </div>
    </div>
  );
}

export default Nav;
