import { Button, Tabs, rem } from "@mantine/core";
import { IconArrowRight, IconPhoto, IconSettings } from "@tabler/icons-react";
import React from "react";
import ContactTab from "./ContactTab";
import SocialMedia from "./SocialMedia";

function Box() {
  const iconStyle = { width: rem(12), height: rem(12) };
  return (
    <div className="">
      <div class="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div class="max-w-screen-xl m-0 sm:m-10  shadow sm:rounded-lg flex justify-center flex-1">
          <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-6">
            <div className="font-bold text-3xl">Contact us</div>
            <div class="mt-12 flex flex-col ">
              <Tabs
                orientation="vertical"
                defaultValue="gallery"
                color="rgba(191, 113, 11, 1)"
                className="space-x-8 "
              >
                <Tabs.List className="space-y-4">
                  <Tabs.Tab
                    value="gallery"
                    leftSection={<IconPhoto style={iconStyle} />}
                  >
                    Profile
                  </Tabs.Tab>

                  <Tabs.Tab
                    value="settings"
                    leftSection={<IconSettings style={iconStyle} />}
                  >
                    Social Media
                  </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="gallery">
                  <ContactTab />
                </Tabs.Panel>

                <Tabs.Panel value="settings">
                  <SocialMedia />
                </Tabs.Panel>
              </Tabs>
              <div class="w-full flex-1 mt-8">
                <div class="my-12 border-b text-center">
                  <div class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium  transform translate-y-1/2">
                    Or Send Message with e-mail
                  </div>
                </div>

                <div class="mx-auto max-w-xs">
                  <input
                    class="w-full px-8 py-4 rounded-lg   border border-yellow-700 text-sm bg-gray-100"
                    type="text"
                    placeholder="Name"
                  />
                  {/* <Input
                    variant="unstyled"
                    placeholder="Name"
                    className="bg-gray-100 border-b border-yellow-700 rounded-lg"
                  /> */}
                  <input
                    class="w-full px-8 py-4 rounded-lg mt-2 border border-yellow-700 text-sm bg-none bg-gray-100"
                    type="email"
                    placeholder="email"
                  />
                  <textarea
                    class="w-full px-8 py-4 rounded-lg mt-2 border border-yellow-700 text-sm  mb-4 bg-gray-100"
                    type="text"
                    placeholder="send message"
                  />
                  <Button
                    rightSection={<IconArrowRight size={14} />}
                    fullWidth
                    color="rgba(209, 141, 6, 1)"
                  >
                    Send Message
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div class="flex-1  text-center hidden lg:flex">
            <div
              class="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
              style={{
                "background-image":
                  "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box;
