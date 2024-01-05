import React from "react";
import {
  FaBehance,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa";

import { MdWhatsapp } from "react-icons/md";
function SocialMedia() {
  return (
    <div className="">
      <ul class="text-gray-600 dark:text-gray-400 ">
        <li class="mb-4">
          <div>
            <span className="inline-flex mr-2">
              <FaTelegram className="text-yellow-600 hover:text-yellow-700 " />
            </span>
            <a href="https://t.me/DavidM12" target=" _blank">
              Telegram
            </a>
          </div>
        </li>
        <li class="mb-4">
          <div>
            <span className="inline-flex mr-2">
              <FaLinkedin className="text-yellow-600 hover:text-yellow-700 " />
            </span>
            <a
              href="https://www.linkedin.com/in/dawit-mezgebu-46264a205/"
              target=" _blank"
            >
              LinkedIn
            </a>
          </div>
        </li>
        <li class="mb-4">
          <div>
            <span className="inline-flex mr-2">
              <FaFacebook className="text-yellow-600 hover:text-yellow-700 " />
            </span>
            <a
              href="https://www.facebook.com/profile.php?id=61551149005409"
              target=" _blank"
            >
              Facebook
            </a>
          </div>
        </li>
        <li class="mb-4">
          <span className="inline-flex mr-2">
            <FaInstagram className="text-yellow-600 hover:text-yellow-700 " />
          </span>
          <a href="https://www.instagram.com/dawit_m12/" target=" _blank">
            Instagram
          </a>
        </li>
        <li class="mb-4">
          <span className="inline-flex mr-2">
            <MdWhatsapp className="text-yellow-600 hover:text-yellow-700 " />
          </span>
          <a
            href="https://www.linkedin.com/in/gebrheir-humaniterian-022453296"
            target=" _blank"
          >
            Whatsapp
          </a>
        </li>
        <li class="mb-4">
          <div>
            <span className="inline-flex mr-2">
              <FaGithub className="text-yellow-600 hover:text-yellow-700 " />
            </span>
            <a href="https://github.com/DawitMezgebu" target=" _blank">
              Github
            </a>
          </div>
        </li>
        <li class="mb-4">
          <div>
            <span className="inline-flex mr-2">
              <FaBehance className="text-yellow-600 hover:text-yellow-700 " />
            </span>
            <a href="https://www.behance.net/dawitmezgebu" target=" _blank">
              Behance
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default SocialMedia;
