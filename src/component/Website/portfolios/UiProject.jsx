import { Center, Pagination } from "@mantine/core";
import React from "react";

function UiProject() {
  const profession = [
    {
      id: 1,
      department: "/portfolio/front.png",
    },
    {
      id: 2,
      department: "/portfolio/Sign ins.png",
    },
    {
      id: 3,
      department: "/portfolio/Homescreen.png",
    },
    {
      id: 4,
      department: "/portfolio/pay.png",
    },
    {
      id: 5,
      department: "/portfolio/scan.png",
    },
    {
      id: 6,
      department: "/portfolio/transaction.png",
    },
    {
      id: 7,
      department: "/portfolio/profiles.png",
    },

    {
      id: 8,
      department: "/portfolio/option.png",
    },
    {
      id: 9,
      department: "/portfolio/welcome.png",
    },
    {
      id: 10,
      department: "/portfolio/sign in.png",
    },
    {
      id: 11,
      department: "/portfolio/Verify.png",
    },
    {
      id: 12,
      department: "/portfolio/Login page.png",
    },
    {
      id: 13,
      department: "/portfolio/service.png",
    },
    {
      id: 14,
      department: "/portfolio/Order.png",
    },
    {
      id: 15,
      department: "/portfolio/profile.png",
    },
    {
      id: 16,
      department: "/portfolio/Payment.png",
    },
  ];
  return (
    <div>
      <div class="py-8 px-2 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="space-y-8 lg:grid lg:grid-cols-4 sm:gap-6 xl:gap-10 lg:space-y-0 mb-10">
          {profession.map((filds) => {
            return (
              <div class="flex flex-col  mx-auto max-w-lg text-center hover:bg-yellow-700  text-gray-900 hover:text-white bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-1 dark:bg-gray-800 dark:text-white">
                <div class="">
                  <img
                    src={filds.department}
                    alt="aby"
                    className="w-fit h-fit rounded-lg"
                  />
                </div>
              </div>
            );
          })}
        </div>
        <Center>
          <Pagination color="rgba(191, 113, 11, 1)" total={10} />
        </Center>
      </div>
    </div>
  );
}

export default UiProject;
