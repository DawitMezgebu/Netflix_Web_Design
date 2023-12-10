import { Center, Slider, Text, Title } from "@mantine/core";
import React from "react";

function Skills() {
  return (
    <div>
      <Center className="mt-4 flex flex-col">
        <Text class="text-yellow-600">skills</Text>

        <Title class="lg:text-4xl font-bold">My Skills</Title>
      </Center>
      <div className="grid grid-cols-3 mt-12 space-x-6 px-10">
        <div>
          <Text size="sm" mb="md">
            Html
          </Text>
          <Slider
            color="rgba(214, 111, 9, 1)"
            defaultValue={95}
            labelAlwaysOn
          />
        </div>
        <div>
          <Text size="sm" mb="md">
            Css
          </Text>
          <Slider
            color="rgba(214, 111, 9, 1)"
            defaultValue={90}
            labelAlwaysOn
          />
        </div>
        <div>
          <Text size="sm" mb="md">
            JavaScript
          </Text>
          <Slider
            color="rgba(214, 111, 9, 1)"
            defaultValue={85}
            labelAlwaysOn
          />
        </div>
      </div>
      <div className="grid grid-cols-3 mt-8 space-x-6 px-10">
        <div>
          <Text size="sm" mb="md">
            React Js
          </Text>
          <Slider
            color="rgba(214, 111, 9, 1)"
            defaultValue={90}
            labelAlwaysOn
          />
        </div>
        <div>
          <Text size="sm" mb="md">
            Nest Js
          </Text>
          <Slider
            color="rgba(214, 111, 9, 1)"
            defaultValue={80}
            labelAlwaysOn
          />
        </div>
        <div>
          <Text size="sm" mb="md">
            WordPress
          </Text>
          <Slider
            color="rgba(214, 111, 9, 1)"
            defaultValue={90}
            labelAlwaysOn
          />
        </div>
      </div>
      <div className="grid grid-cols-3 mt-8 space-x-6 px-10">
        <div>
          <Text size="sm" mb="md">
            Github
          </Text>
          <Slider
            color="rgba(214, 111, 9, 1)"
            defaultValue={90}
            labelAlwaysOn
          />
        </div>
        <div>
          <Text size="sm" mb="md">
            Jira
          </Text>
          <Slider
            color="rgba(214, 111, 9, 1)"
            defaultValue={80}
            labelAlwaysOn
          />
        </div>
        <div>
          <Text size="sm" mb="md">
            Netlify
          </Text>
          <Slider
            color="rgba(214, 111, 9, 1)"
            defaultValue={90}
            labelAlwaysOn
          />
        </div>
      </div>
      <div className="grid grid-cols-3 mt-8 space-x-6 px-10">
        <div>
          <Text size="sm" mb="md">
            Adobe Photoshop
          </Text>
          <Slider
            color="rgba(214, 111, 9, 1)"
            defaultValue={95}
            labelAlwaysOn
          />
        </div>
        <div>
          <Text size="sm" mb="md">
            Adobe Illustrator
          </Text>
          <Slider
            color="rgba(214, 111, 9, 1)"
            defaultValue={90}
            labelAlwaysOn
          />
        </div>
        <div>
          <Text size="sm" mb="md">
            Adobe Xd
          </Text>
          <Slider
            color="rgba(214, 111, 9, 1)"
            defaultValue={95}
            labelAlwaysOn
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;
