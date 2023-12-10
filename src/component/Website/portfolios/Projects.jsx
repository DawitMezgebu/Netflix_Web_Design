import { Tabs } from "@mantine/core";
import React from "react";
import UiProject from "./UiProject";

function Projects() {
  return (
    <div>
      <Tabs
        color="rgba(191, 113, 11, 1)"
        defaultValue="UI Design"
        orientation="vertical"
        className="space-x-28 "
      >
        <Tabs.List className="space-y-8 lg:ml-28">
          <Tabs.Tab value="UI Design">UI Design</Tabs.Tab>
          <Tabs.Tab value="Graphics Design">Graphics Design</Tabs.Tab>
          <Tabs.Tab value="Website">Website</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="UI Design">
          <UiProject />
        </Tabs.Panel>
        <Tabs.Panel value="Graphics Design">
          <UiProject />
        </Tabs.Panel>
        <Tabs.Panel value="Website">
          <UiProject />
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}

export default Projects;
