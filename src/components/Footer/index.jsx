import React from "react";

import { Img, Line, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col md:gap-10 gap-[100px] items-center justify-center w-full">
          <div className="flex md:flex-col flex-row gap-[30px] items-start justify-start w-full">
            <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
              <Text
                className="text-white-A700 text-xl w-full"
                size="txtManropeSemiBold20"
              >
                Home
              </Text>
              <ul className="flex flex-col gap-3.5 items-start justify-start w-full common-column-list">
                <li>
                  <Text
                    className="text-gray-500 text-lg"
                    size="txtManropeMedium18"
                  >
                    Categories
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-gray-500 text-lg"
                    size="txtManropeMedium18"
                  >
                    Devices
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-gray-500 text-lg"
                    size="txtManropeMedium18"
                  >
                    Pricing
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-gray-500 text-lg"
                    size="txtManropeMedium18"
                  >
                    FAQ
                  </Text>
                </li>
              </ul>
            </div>
            <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
              <Text
                className="text-white-A700 text-xl w-full"
                size="txtManropeSemiBold20"
              >
                Movies
              </Text>
              <ul className="flex flex-col gap-3.5 items-start justify-start w-full common-column-list">
                <li>
                  <Text
                    className="text-gray-500 text-lg"
                    size="txtManropeMedium18"
                  >
                    Gernes
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-gray-500 text-lg"
                    size="txtManropeMedium18"
                  >
                    Trending
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-gray-500 text-lg"
                    size="txtManropeMedium18"
                  >
                    New Release
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-gray-500 text-lg"
                    size="txtManropeMedium18"
                  >
                    Popular
                  </Text>
                </li>
              </ul>
            </div>
            <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
              <Text
                className="text-white-A700 text-xl w-full"
                size="txtManropeSemiBold20"
              >
                Shows
              </Text>
              <ul className="flex flex-col gap-3.5 items-start justify-start w-full common-column-list">
                <li>
                  <Text
                    className="text-gray-500 text-lg"
                    size="txtManropeMedium18"
                  >
                    Gernes
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-gray-500 text-lg"
                    size="txtManropeMedium18"
                  >
                    Trending
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-gray-500 text-lg"
                    size="txtManropeMedium18"
                  >
                    New Release
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-gray-500 text-lg"
                    size="txtManropeMedium18"
                  >
                    Popular
                  </Text>
                </li>
              </ul>
            </div>
            <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
              <Text
                className="text-white-A700 text-xl w-full"
                size="txtManropeSemiBold20"
              >
                Support
              </Text>
              <Text
                className="text-gray-500 text-lg w-full"
                size="txtManropeMedium18"
              >
                Contact Us
              </Text>
            </div>
            <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
              <Text
                className="text-white-A700 text-xl w-full"
                size="txtManropeSemiBold20"
              >
                Subscription
              </Text>
              <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                <Text
                  className="text-gray-500 text-lg w-full"
                  size="txtManropeMedium18"
                >
                  Plans
                </Text>
                <Text
                  className="text-gray-500 text-lg w-full"
                  size="txtManropeMedium18"
                >
                  Features
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
              <Text
                className="text-white-A700 text-xl w-full"
                size="txtManropeSemiBold20"
              >
                Connect With Us
              </Text>
              <Img
                className="h-14 w-[196px]"
                src="images/img_buttonscontainer_gray_900_03.svg"
                alt="buttonscontaine_One"
              />
            </div>
          </div>
          <div className="flex flex-col gap-6 items-start justify-start w-full">
            <Line className="bg-gray-900 h-px w-full" />
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <Text
                className="text-gray-500 text-lg w-auto"
                size="txtManropeRegular18"
              >
                @2023 streamvib, All Rights Reserved
              </Text>
              <div className="flex sm:flex-1 sm:flex-col flex-row gap-5 items-start justify-start w-auto sm:w-full">
                <Text
                  className="text-gray-500 text-lg w-auto"
                  size="txtManropeRegular18"
                >
                  Terms of Use
                </Text>
                <Line className="bg-gray-900 h-[27px] sm:h-px sm:w-full w-px" />
                <Text
                  className="text-gray-500 text-lg w-auto"
                  size="txtManropeRegular18"
                >
                  Privacy Policy
                </Text>
                <Line className="bg-gray-900 h-[27px] sm:h-px sm:w-full w-px" />
                <Text
                  className="text-gray-500 text-lg w-auto"
                  size="txtManropeRegular18"
                >
                  Cookie Policy
                </Text>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
