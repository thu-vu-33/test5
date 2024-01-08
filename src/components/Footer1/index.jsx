import React from "react";

import { Img, Line, Text } from "components";

const Footer1 = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col md:gap-10 gap-20 items-center justify-center w-full">
          <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-full">
            <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
              <Text
                className="text-lg text-white-A700 w-full"
                size="txtManropeSemiBold18"
              >
                Home
              </Text>
              <ul className="flex flex-col gap-2.5 items-start justify-start w-full common-column-list">
                <li>
                  <Text
                    className="text-base text-gray-500"
                    size="txtManropeMedium16"
                  >
                    Categories
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-base text-gray-500"
                    size="txtManropeMedium16"
                  >
                    Devices
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-base text-gray-500"
                    size="txtManropeMedium16"
                  >
                    Pricing
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-base text-gray-500"
                    size="txtManropeMedium16"
                  >
                    FAQ
                  </Text>
                </li>
              </ul>
            </div>
            <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
              <Text
                className="text-lg text-white-A700 w-full"
                size="txtManropeSemiBold18"
              >
                Movies
              </Text>
              <ul className="flex flex-col gap-2.5 items-start justify-start w-full common-column-list">
                <li>
                  <Text
                    className="text-base text-gray-500"
                    size="txtManropeMedium16"
                  >
                    Gernes
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-base text-gray-500"
                    size="txtManropeMedium16"
                  >
                    Trending
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-base text-gray-500"
                    size="txtManropeMedium16"
                  >
                    New Release
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-base text-gray-500"
                    size="txtManropeMedium16"
                  >
                    Popular
                  </Text>
                </li>
              </ul>
            </div>
            <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
              <Text
                className="text-lg text-white-A700 w-full"
                size="txtManropeSemiBold18"
              >
                Shows
              </Text>
              <ul className="flex flex-col gap-2.5 items-start justify-start w-full common-column-list">
                <li>
                  <Text
                    className="text-base text-gray-500"
                    size="txtManropeMedium16"
                  >
                    Gernes
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-base text-gray-500"
                    size="txtManropeMedium16"
                  >
                    Trending
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-base text-gray-500"
                    size="txtManropeMedium16"
                  >
                    New Release
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-base text-gray-500"
                    size="txtManropeMedium16"
                  >
                    Popular
                  </Text>
                </li>
              </ul>
            </div>
            <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
              <Text
                className="text-lg text-white-A700 w-full"
                size="txtManropeSemiBold18"
              >
                Support
              </Text>
              <Text
                className="text-base text-gray-500 w-full"
                size="txtManropeMedium16"
              >
                Contact Us
              </Text>
            </div>
            <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
              <Text
                className="text-lg text-white-A700 w-full"
                size="txtManropeSemiBold18"
              >
                Subscription
              </Text>
              <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                <Text
                  className="text-base text-gray-500 w-full"
                  size="txtManropeMedium16"
                >
                  Plans
                </Text>
                <Text
                  className="text-base text-gray-500 w-full"
                  size="txtManropeMedium16"
                >
                  Features
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
              <Text
                className="text-lg text-white-A700 w-full"
                size="txtManropeSemiBold18"
              >
                Connect With Us
              </Text>
              <Img
                className="h-11 w-[152px]"
                src="images/img_buttonscontainer_gray_900_03_44x152.svg"
                alt="buttonscontaine_One"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 items-start justify-start w-full">
            <Line className="bg-gray-900 h-px w-full" />
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <Text
                className="text-gray-500 text-sm w-auto"
                size="txtManropeRegular14Gray500"
              >
                @2023 streamvib, All Rights Reserved
              </Text>
              <div className="flex flex-row gap-4 items-start justify-start w-auto">
                <Text
                  className="text-gray-500 text-sm w-auto"
                  size="txtManropeRegular14Gray500"
                >
                  Terms of Use
                </Text>
                <Line className="bg-gray-900 h-[21px] w-px" />
                <Text
                  className="text-gray-500 text-sm w-auto"
                  size="txtManropeRegular14Gray500"
                >
                  Privacy Policy
                </Text>
                <Line className="bg-gray-900 h-[21px] w-px" />
                <Text
                  className="text-gray-500 text-sm w-auto"
                  size="txtManropeRegular14Gray500"
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

Footer1.defaultProps = {};

export default Footer1;
