import React from "react";

function TopNav() {
  return (
    // Top NAV
    <nav className="bg-black ">
      <div className="max-w-screen-xl px-4 py-2 mx-auto ">
        <div className="flex items-center">
          <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm ">
            <li>
              <a
                href="./some/url"
                className="text-gray-900 dark:text-white py-2 border-b-[3px] border-spacing-y-[9px] border-red-600 "
                aria-current="page"
              >
                JPL
              </a>
            </li>
            <li>
              <a
                href="./some/url"
                className="text-gray-900 dark:text-white py-2 hover:border-b-[3px] border-spacing-y-[9px] border-red-600"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="./some/url"
                className="text-gray-900 dark:text-white py-2 hover:border-b-[3px] border-spacing-y-[9px] border-red-600"
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="./some/url"
                className="text-gray-900 dark:text-white py-2 hover:border-b-[3px] border-spacing-y-[9px] border-red-600"
              >
                Science & Technology
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default TopNav;
