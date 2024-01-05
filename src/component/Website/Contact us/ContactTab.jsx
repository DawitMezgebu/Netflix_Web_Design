import React from "react";
import { FaUser } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

import { MdEmail, MdPhone } from "react-icons/md";
function ContactTab() {
  return (
    <div className="">
      <ul class="text-gray-600 dark:text-gray-400 ">
        <li class="mb-4">
          <div>
            <span className="inline-flex mr-2">
              <FaUser className="text-yellow-600 hover:text-yellow-700 " />
            </span>
            <span>Dawit Mezgebu</span>
          </div>
        </li>
        <li class="mb-4">
          <span className="inline-flex mr-2 ">
            <MdEmail className="text-yellow-600 hover:text-yellow-700 " />
          </span>
          <span className="">dawitmezgebu22@gmail.com</span>
        </li>
        <li class="mb-4">
          <span className="inline-flex mr-2">
            <MdPhone className="text-yellow-600 hover:text-yellow-700 " />
          </span>
          <span>+251 943 18 45 06</span>
        </li>
        <li class="mb-4">
          <span className="inline-flex mr-2">
            <IoLocation className="text-yellow-600 hover:text-yellow-700 " />
          </span>
          <span
            href="https://whatsapp.com/channel/0029Va7WSm3DTkJve0dsGw2K"
            target=" _blank"
          >
            Addis Abeba, Eth
          </span>
        </li>
      </ul>
    </div>
  );
}

export default ContactTab;
