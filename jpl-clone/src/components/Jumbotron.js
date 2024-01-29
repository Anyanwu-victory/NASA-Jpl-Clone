import React from "react";

function Jumbotron() {
  return (
    //JUMBOTRON WITH FEATURED VIDEO
    <section className="relative h-[30rem] bg-cover bg-no-repeat bg-gray-700 bg-blend-multiply">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-[60rem] object-cover"
      >
        <source src="./video/Rocket-Launch.mp4" type="video/mp4" />
      </video>

      <div className="px-4 mx-auto h-[30rem]  py-24  relative">
        {/* //This is the inner nav bar that contains the Logo and the other CTA Buttons  */}
        <nav className=" flex flex-row space-x-5 ">
          <div className="flex  mt-[-5rem] space-x-[30px]">
            {/* <!-- This is the image div that contains the Logo --> */}
            <div className="mr-[13rem]">
              <img
                src="./img/jpl_logo-removebg-preview.png"
                alt="logo"
                className=" ml-[-1rem] w-[25rem]"
              />
            </div>
            {/* <!-- This is the Div that contains the CTA buttons  --> */}
            <div className=" flex pt-9 text-white ">
              <ul className="flex space-x-8 text-[15px] font-bold">
                <li className="">
                  <a
                    href="./some/url"
                    className="text-gray-900 dark:text-white py-2 hover:border-b-[3px]  border-spacing-y-[9px] border-white-600 "
                  >
                    About JPL
                  </a>
                </li>

                <li>
                  <a
                    href="/some/url"
                    className="text-gray-900 dark:text-white py-2 hover:border-b-[3px] border-spacing-y-[9px] border-white-600"
                  >
                    Missions
                  </a>
                </li>
                <li>
                  <a
                    href="/some/url"
                    className="text-gray-900 dark:text-white py-2 hover:border-b-[3px] border-spacing-y-[9px] border-white-600"
                  >
                    {" "}
                    News
                  </a>
                </li>

                <li>
                  <a
                    href="/some/url"
                    className="text-gray-900 dark:text-white py-2 hover:border-b-[3px] border-spacing-y-[9px] border-white-600"
                  >
                    {" "}
                    Galleries
                  </a>
                </li>

                <li>
                  <a
                    href="/some/url"
                    className="text-gray-900 dark:text-white py-2 hover:border-b-[3px] border-spacing-y-[9px] border-white-600"
                  >
                    Events
                  </a>
                </li>

                <li>
                  <a
                    href="/some/url"
                    className="text-gray-900 dark:text-white py-2 hover:border-b-[3px] border-spacing-y-[9px] border-white-600"
                  >
                    Visit
                  </a>
                </li>

                <li>
                  <a
                    href="/some/url"
                    className="text-gray-900 dark:text-white py-2 hover:border-b-[3px] border-spacing-y-[9px] border-white-600"
                  >
                    Topics
                  </a>
                </li>

                <li>
                  <a href="/some/url" className="">
                    <span className="material-symbols-outlined">search</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* <!-- The bold text that is centered --> */}
        <div className="text-center justify-center mt-[13rem] ">
          <div className=" w-[30rem] ">
            <div className="text-justify ml-[2.5rem]">
              <h1 className="uppercase font-semibold text-red-500 text-[30px] ">
                Dare mighty Things
              </h1>
              <p className="font-bold text-white text-[60px] ">
                creating beyond borders that fit peoples relationship with
                rockets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Jumbotron;
