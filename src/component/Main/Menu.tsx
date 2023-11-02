import {
  IconSettings,
  IconSearch,
  IconMessageCircle,
  IconArrowsLeftRight,
  IconLogout,
  IconReport,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { Indicator, Menu, rem, Text } from "@mantine/core";

function DropMenu() {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        {/* <Button> */}
        <div className="w-8 h-8 flex ">
          <IconSettings className="flex items-center text-gray-500" />
        </div>
        {/* </Button> */}
      </Menu.Target>

      <Menu.Target>
        {/* <Button> */}
        <div className="w-8 h-8 flex ">
          <Indicator
            inline
            size={16}
            offset={3}
            position="bottom-end"
            color="green"
            withBorder
          >
            <img
              src="./my.jpg"
              alt="profile"
              className="shadow-md rounded-full object-cover "
            />
          </Indicator>
        </div>
        {/* </Button> */}
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>
        <Link to="/setting">
          <Menu.Item
            leftSection={
              <IconSettings style={{ width: rem(14), height: rem(14) }} />
            }
          >
            Settings
          </Menu.Item>
        </Link>
        <Menu.Item
          leftSection={
            <IconMessageCircle style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Messages
        </Menu.Item>
        <Link to="/instock">
          <Menu.Item
            leftSection={
              <IconReport style={{ width: rem(14), height: rem(14) }} />
            }
          >
            Report
          </Menu.Item>
        </Link>
        <Menu.Item
          leftSection={
            <IconSearch style={{ width: rem(14), height: rem(14) }} />
          }
          rightSection={
            <Text size="xs" c="dimmed">
              ⌘K
            </Text>
          }
        >
          Search
        </Menu.Item>

        <Menu.Divider />

        <Menu.Label>Danger zone</Menu.Label>
        <Link to="/instock">
          <Menu.Item
            leftSection={
              <IconArrowsLeftRight
                style={{ width: rem(14), height: rem(14) }}
              />
            }
          >
            Transfer my data
          </Menu.Item>
        </Link>
        <Menu.Item
          color="red"
          leftSection={
            <IconLogout style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Log Out
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
export default DropMenu;
