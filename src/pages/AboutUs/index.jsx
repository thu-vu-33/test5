import React from "react";

import { Button, CheckBox, Img, Input, Line, List, Text } from "components";

const AboutUsPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[140px] items-center justify-start mx-auto p-[50px] md:px-10 sm:px-5 w-full">
        <div className="bg-gray-50_03 flex flex-col items-start justify-center max-w-[1820px] mx-auto outline outline-[2px] outline-blue-100 p-[120px] md:px-5 rounded-[20px] shadow-bs2 w-full">
          <div className="flex flex-col md:gap-10 gap-20 items-start justify-start w-full">
            <div className="flex flex-col gap-[50px] items-start justify-start w-full">
              <div className="flex md:flex-col flex-row gap-10 items-center justify-start w-full">
                <div className="flex md:flex-1 sm:flex-col flex-row gap-[30px] items-center justify-between w-[26%] md:w-full">
                  <div className="flex flex-col items-center justify-start">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-row items-center justify-start w-[65%] md:w-full">
                        <Img
                          className="h-[25px] md:h-auto object-cover w-6"
                          src="images/img_vector.png"
                          alt="vector"
                        />
                        <div className="bg-light_blue-400 h-[25px] w-6"></div>
                      </div>
                      <div className="flex flex-row gap-6 items-center justify-between w-full">
                        <div className="bg-light_blue-400 h-[25px] w-6"></div>
                        <div className="bg-light_blue-A700 h-[25px] rotate-[-180deg] w-6"></div>
                      </div>
                      <div className="flex flex-row items-center justify-end md:ml-[0] ml-[25px] w-[67%] md:w-full">
                        <div className="bg-blue-A700 h-[25px] rotate-[-180deg] w-6"></div>
                        <Img
                          className="h-[25px] md:h-auto object-cover w-6"
                          src="images/img_vector_25x24.png"
                          alt="vector_Five"
                        />
                      </div>
                      <Img
                        className="h-6 w-6"
                        src="images/img_thumbsup.svg"
                        alt="thumbsup"
                      />
                    </div>
                  </div>
                  <Img
                    className="h-11"
                    src="images/img_group.svg"
                    alt="group"
                  />
                </div>
                <Input
                  name="button"
                  placeholder="https:///produce-ui.com"
                  className="font-medium p-0 placeholder:text-blue_gray-900 text-left text-xl underline w-full"
                  wrapClassName="border-[3px] border-blue-50 border-solid flex md:flex-1 rounded-[10px] w-[22%] md:w-full"
                  prefix={
                    <div className="h-[60px] mr-2.5 w-[60px] bg-gray-100_02 p-2.5 rounded-[12px] flex justify-center items-center">
                      <Img
                        className="h-10 my-auto"
                        src="images/img_icon_blue_gray_900.svg"
                        alt="Icon"
                      />
                    </div>
                  }
                  color="white_A700"
                  size="sm"
                ></Input>
              </div>
              <Text
                className="leading-[150.00%] max-w-[1580px] md:max-w-full text-gray-800_01 text-xl"
                size="txtInterRegular20"
              >
                <>
                  Discover our vast collection of original Figma designs,
                  including sections, elements, pages, and templates. Copy all
                  these designs from our website and paste them into your Figma
                  files effortlessly, and it&#39;s all free.
                </>
              </Text>
            </div>
            <div className="bg-white-A700 border border-blue-50 border-solid flex md:flex-col flex-row gap-5 items-start justify-start p-[30px] sm:px-5 rounded-[12px] w-auto md:w-full">
              <Input
                name="button_One"
                placeholder="Instagram"
                className="font-medium p-0 placeholder:text-blue_gray-900 text-left text-lg underline w-full"
                wrapClassName="border-[3px] border-blue-50 border-solid flex rounded-[10px] w-[17%] md:w-full"
                prefix={
                  <div className="h-[50px] mr-2.5 w-[50px] bg-white-A700 rounded-[10px]">
                    <Img
                      className="h-[50px] rounded-[10px] my-auto"
                      src="images/img_icon_container.png"
                      alt="Icon Container"
                    />
                  </div>
                }
                color="gray_100_02"
                size="xs"
              ></Input>
              <Input
                name="button_Two"
                placeholder="LinkedIn"
                className="font-medium p-0 placeholder:text-blue_gray-900 text-left text-lg underline w-full"
                wrapClassName="border-[3px] border-blue-50 border-solid flex rounded-[10px] w-[16%] md:w-full"
                prefix={
                  <div className="h-[50px] mr-2.5 w-[50px] bg-white-A700 rounded-[10px]">
                    <Img
                      className="h-[50px] rounded-[10px] my-auto"
                      src="images/img_link.svg"
                      alt="link"
                    />
                  </div>
                }
                color="gray_100_02"
                size="xs"
              ></Input>
              <div className="bg-gray-100_02 border-[3px] border-blue-50 border-solid flex flex-row gap-2.5 items-center justify-center pl-2.5 sm:pr-5 pr-[30px] py-2.5 rounded-[10px] w-auto">
                <div className="bg-white-A700 flex flex-col items-center justify-center p-2.5 rounded-[10px] w-[50px]">
                  <Img className="h-6" src="images/img_trash.svg" alt="trash" />
                </div>
                <a
                  href="https://twitter.com/produce_ui"
                  className="font-medium text-blue_gray-900 text-lg underline w-auto"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Text>Twitter</Text>
                </a>
              </div>
              <Input
                name="button_Three"
                placeholder="Behance"
                className="font-medium p-0 placeholder:text-blue_gray-900 text-left text-lg underline w-full"
                wrapClassName="border-[3px] border-blue-50 border-solid flex rounded-[10px] w-[16%] md:w-full"
                prefix={
                  <div className="h-[50px] mr-2.5 w-[50px] bg-white-A700 rounded-[10px]">
                    <Img
                      className="h-[50px] rounded-[10px] my-auto"
                      src="images/img_icon_container_white_a700.svg"
                      alt="Icon Container"
                    />
                  </div>
                }
                color="gray_100_02"
                size="xs"
              ></Input>
              <div className="bg-gray-100_02 border-[3px] border-blue-50 border-solid flex flex-row gap-2.5 items-center justify-center pl-2.5 sm:pr-5 pr-[30px] py-2.5 rounded-[10px] w-auto">
                <Img
                  className="h-[50px] rounded-[10px] w-[50px]"
                  src="images/img_iconcontainer_white_a700_1.svg"
                  alt="iconcontainer"
                />
                <a
                  href="https://www.figma.com/@produce_ui"
                  className="font-medium text-blue_gray-900 text-lg underline w-auto"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Text>Figma</Text>
                </a>
              </div>
              <div className="bg-gray-100_02 border-[3px] border-blue-50 border-solid flex flex-row gap-2.5 items-center justify-center pl-2.5 sm:pr-5 pr-[30px] py-2.5 rounded-[10px] w-auto">
                <div className="bg-white-A700 flex flex-col items-center justify-center p-2.5 rounded-[10px] w-[50px]">
                  <Img
                    className="h-[30px] w-[30px]"
                    src="images/img_globe.svg"
                    alt="globe"
                  />
                </div>
                <a
                  href="https://dribbble.com/produce_ui"
                  className="font-medium text-blue_gray-900 text-lg underline w-auto"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Text>Dribble</Text>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[149px] items-center justify-start max-w-[1680px] mb-[100px] mx-auto w-full">
          <div className="flex flex-col md:gap-10 gap-[150px] items-start justify-start max-w-[1680px] w-full">
            <div className="flex flex-col gap-[18px] items-start justify-start w-full">
              <Text
                className="sm:text-[44px] md:text-[50px] text-[58px] text-gray-900_10 w-full"
                size="txtInterSemiBold58"
              >
                💪 Our Products
              </Text>
              <div className="bg-white-A700 flex md:flex-col flex-row gap-4 items-center justify-center outline outline-[1px] outline-blue-50 p-6 sm:px-5 rounded-[12px] shadow-bs3 w-full">
                <Button
                  className="border border-blue-50 border-solid flex h-[58px] items-center justify-center rounded-[50%] w-[58px]"
                  shape="circle"
                  color="gray_100_02"
                  size="md"
                  variant="fill"
                >
                  <Img
                    className="h-[30px]"
                    src="images/img_icon_blue_gray_900_58x58.svg"
                    alt="icon"
                  />
                </Button>
                <Text
                  className="flex-1 leading-[150.00%] max-w-[1558px] md:max-w-full text-gray-800_01 text-lg"
                  size="txtInterRegular18Gray80001"
                >
                  Our website is constantly evolving with new designs, so the
                  following counts are accurate as of when this template was
                  created. Please note that there may be additional designs on
                  our website when you check.
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-[50px] items-start justify-start w-full">
              <div className="flex flex-col gap-2.5 items-start justify-start md:pr-10 sm:pr-5 pr-[300px] w-full">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 w-full"
                  size="txtInterMedium30"
                >
                  Components
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[1380px] md:max-w-full text-gray-800_01 text-lg"
                  size="txtInterRegular18Gray80001"
                >
                  Produce UI components are composed of elements and sections
                  designs, These modular components offer the capability to
                  enhance your existing website design seamlessly and
                  efficiently, harnessing the power of Produce UI Components for
                  effective improvements.
                </Text>
              </div>
              <List
                className="flex flex-col gap-[100px] items-start w-full"
                orientation="vertical"
              >
                <div className="bg-gray-100_02 flex flex-1 flex-col gap-[50px] items-start justify-start my-0 p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full">
                  <div className="bg-white-A700 h-[554px] outline outline-[2px] outline-blue-50 relative rounded-[12px] shadow-bs4 w-full">
                    <Img
                      className="h-full m-auto max-h-[554px] object-cover rounded-[12px]"
                      src="images/img_image_554x1580.png"
                      alt="image"
                    />
                    <div className="absolute bottom-[0] flex flex-1 flex-col inset-x-[0] items-center justify-start mx-auto p-5 w-full">
                      <div className="bg-white-A700 flex md:flex-col flex-row md:gap-10 gap-[100px] items-center justify-start outline outline-[1px] outline-blue-50 p-[50px] md:px-10 sm:px-5 rounded-[12px] shadow-bs5 w-full">
                        <div className="flex flex-1 flex-col gap-[17px] items-start justify-start w-full">
                          <Text
                            className="text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 w-full"
                            size="txtInterSemiBold30Bluegray900"
                          >
                            170+ Elements
                          </Text>
                          <Text
                            className="leading-[150.00%] max-w-[1143px] md:max-w-full text-gray-800_01 text-lg"
                            size="txtInterRegular18Gray80001"
                          >
                            With over 170+ reusable elements available in three
                            sizes, our carefully crafted designs are optimized
                            for effortless reuse, streamlining your workflow and
                            speeding up the design process.
                          </Text>
                        </div>
                        <Button
                          className="cursor-pointer font-medium leading-[normal] min-w-[197px] rounded-[10px] text-center text-lg underline"
                          shape="round"
                          size="lg"
                          variant="gradient"
                          color="blue_A700_light_blue_A400"
                        >
                          Browse Elements
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col gap-[30px] items-start justify-start outline outline-[2px] outline-blue-50 p-[50px] md:px-10 sm:px-5 rounded-[12px] shadow-bs4 w-full">
                    <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-full">
                      <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                          size="txtInterSemiBold34Bluegray900"
                        >
                          17
                        </Text>
                        <Text
                          className="text-gray-800_01 text-lg w-full"
                          size="txtInterRegular18Gray80001"
                        >
                          Avatar
                        </Text>
                      </div>
                      <Line className="bg-blue-50 h-[98px] md:h-px md:w-full w-px" />
                      <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                          size="txtInterSemiBold34Bluegray900"
                        >
                          09
                        </Text>
                        <Text
                          className="text-gray-800_01 text-lg w-full"
                          size="txtInterRegular18Gray80001"
                        >
                          Banner
                        </Text>
                      </div>
                      <Line className="bg-blue-50 h-[98px] md:h-px md:w-full w-px" />
                      <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900"
                          size="txtInterSemiBold34Bluegray900"
                        >
                          22
                        </Text>
                        <Text
                          className="text-gray-800_01 text-lg w-full"
                          size="txtInterRegular18Gray80001"
                        >
                          Breadcrumb
                        </Text>
                      </div>
                      <Line className="bg-blue-50 h-[98px] md:h-px md:w-full w-px" />
                      <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                          size="txtInterSemiBold34Bluegray900"
                        >
                          06
                        </Text>
                        <Text
                          className="text-gray-800_01 text-lg w-full"
                          size="txtInterRegular18Gray80001"
                        >
                          Button
                        </Text>
                      </div>
                      <Line className="bg-blue-50 h-[98px] md:h-px md:w-full w-px" />
                      <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                          size="txtInterSemiBold34Bluegray900"
                        >
                          05
                        </Text>
                        <Text
                          className="text-gray-800_01 text-lg w-full"
                          size="txtInterRegular18Gray80001"
                        >
                          Calendar
                        </Text>
                      </div>
                      <Line className="bg-blue-50 h-[98px] md:h-px md:w-full w-px" />
                      <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                          size="txtInterSemiBold34Bluegray900"
                        >
                          20
                        </Text>
                        <Text
                          className="text-gray-800_01 text-lg w-full"
                          size="txtInterRegular18Gray80001"
                        >
                          Card
                        </Text>
                      </div>
                      <Line className="bg-blue-50 h-[98px] md:h-px md:w-full w-px" />
                      <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                          size="txtInterSemiBold34Bluegray900"
                        >
                          05
                        </Text>
                        <Text
                          className="text-gray-800_01 text-lg w-full"
                          size="txtInterRegular18Gray80001"
                        >
                          Chart
                        </Text>
                      </div>
                      <Line className="bg-blue-50 h-[98px] md:h-px md:w-full w-px" />
                      <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                          size="txtInterSemiBold34Bluegray900"
                        >
                          04
                        </Text>
                        <Text
                          className="text-gray-800_01 text-lg w-full"
                          size="txtInterRegular18Gray80001"
                        >
                          Check Box
                        </Text>
                      </div>
                    </div>
                    <Line className="bg-blue-50 h-px w-full" />
                    <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-full">
                      <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                          size="txtInterSemiBold34Bluegray900"
                        >
                          04
                        </Text>
                        <Text
                          className="text-gray-800_01 text-lg w-full"
                          size="txtInterRegular18Gray80001"
                        >
                          Chips
                        </Text>
                      </div>
                      <Line className="bg-blue-50 h-[98px] md:h-px md:w-full w-px" />
                      <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                          size="txtInterSemiBold34Bluegray900"
                        >
                          01
                        </Text>
                        <Text
                          className="text-gray-800_01 text-lg w-full"
                          size="txtInterRegular18Gray80001"
                        >
                          Clock
                        </Text>
                      </div>
                      <Line className="bg-blue-50 h-[98px] md:h-px md:w-full w-px" />
                      <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                          size="txtInterSemiBold34Bluegray900"
                        >
                          01
                        </Text>
                        <Text
                          className="text-gray-800_01 text-lg w-full"
                          size="txtInterRegular18Gray80001"
                        >
                          Dropdown
                        </Text>
                      </div>
                      <Line className="bg-blue-50 h-[98px] md:h-px md:w-full w-px" />
                      <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                          size="txtInterSemiBold34Bluegray900"
                        >
                          05
                        </Text>
                        <Text
                          className="text-gray-800_01 text-lg w-full"
                          size="txtInterRegular18Gray80001"
                        >
                          File Upload
                        </Text>
                      </div>
                      <Line className="bg-blue-50 h-[98px] md:h-px md:w-full w-px" />
                      <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                          size="txtInterSemiBold34Bluegray900"
                        >
                          05
                        </Text>
                        <Text
                          className="text-gray-800_01 text-lg w-full"
                          size="txtInterRegular18Gray80001"
                        >
                          Pagination
                        </Text>
                      </div>
                      <Line className="bg-blue-50 h-[98px] md:h-px md:w-full w-px" />
                      <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                          size="txtInterSemiBold34Bluegray900"
                        >
                          20
                        </Text>
                        <Text
                          className="text-gray-800_01 text-lg w-full"
                          size="txtInterRegular18Gray80001"
                        >
                          Popover
                        </Text>
                      </div>
                      <Line className="bg-blue-50 h-[98px] md:h-px md:w-full w-px" />
                      <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                          size="txtInterSemiBold34Bluegray900"
                        >
                          05
                        </Text>
                        <Text
                          className="text-gray-800_01 text-lg w-full"
                          size="txtInterRegular18Gray80001"
                        >
                          Progress
                        </Text>
                      </div>
                      <Line className="bg-blue-50 h-[98px] md:h-px md:w-full w-px" />
                      <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                          size="txtInterSemiBold34Bluegray900"
                        >
                          02
                        </Text>
                        <Text
                          className="text-gray-800_01 text-lg w-full"
                          size="txtInterRegular18Gray80001"
                        >
                          Radio Button
                        </Text>
                      </div>
                    </div>
                    <Line className="bg-blue-50 h-px w-full" />
                    <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-full">
                      <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                          size="txtInterSemiBold34Bluegray900"
                        >
                          05
                        </Text>
                        <Text
                          className="text-gray-800_01 text-lg w-full"
                          size="txtInterRegular18Gray80001"
                        >
                          Range Slider
                        </Text>
                      </div>
                      <Line className="bg-blue-50 h-[98px] md:h-px md:w-full w-px" />
                      <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                          size="txtInterSemiBold34Bluegray900"
                        >
                          08
                        </Text>
                        <Text
                          className="text-gray-800_01 text-lg w-full"
                          size="txtInterRegular18Gray80001"
                        >
                          Search Bar
                        </Text>
                      </div>
                      <Line className="bg-blue-50 h-[98px] md:h-px md:w-full w-px" />
                      <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                          size="txtInterSemiBold34Bluegray900"
                        >
                          09
                        </Text>
                        <Text
                          className="text-gray-800_01 text-lg w-full"
                          size="txtInterRegular18Gray80001"
                        >
                          Table
                        </Text>
                      </div>
                      <Line className="bg-blue-50 h-[98px] md:h-px md:w-full w-px" />
                      <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                          size="txtInterSemiBold34Bluegray900"
                        >
                          05
                        </Text>
                        <Text
                          className="text-gray-800_01 text-lg w-full"
                          size="txtInterRegular18Gray80001"
                        >
                          Tabs
                        </Text>
                      </div>
                      <Line className="bg-blue-50 h-[98px] md:h-px md:w-full w-px" />
                      <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                          size="txtInterSemiBold34Bluegray900"
                        >
                          02
                        </Text>
                        <Text
                          className="text-gray-800_01 text-lg w-full"
                          size="txtInterRegular18Gray80001"
                        >
                          Text Input
                        </Text>
                      </div>
                      <Line className="bg-blue-50 h-[98px] md:h-px md:w-full w-px" />
                      <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                          size="txtInterSemiBold34Bluegray900"
                        >
                          10
                        </Text>
                        <Text
                          className="text-gray-800_01 text-lg w-full"
                          size="txtInterRegular18Gray80001"
                        >
                          Toast
                        </Text>
                      </div>
                      <Line className="bg-blue-50 h-[98px] md:h-px md:w-full w-px" />
                      <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                          size="txtInterSemiBold34Bluegray900"
                        >
                          02
                        </Text>
                        <Text
                          className="text-gray-800_01 text-lg w-full"
                          size="txtInterRegular18Gray80001"
                        >
                          Toggle
                        </Text>
                      </div>
                      <Line className="bg-blue-50 h-[98px] md:h-px md:w-full w-px" />
                      <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                          size="txtInterSemiBold34Bluegray900"
                        >
                          05
                        </Text>
                        <Text
                          className="text-gray-800_01 text-lg w-full"
                          size="txtInterRegular18Gray80001"
                        >
                          Tooltip
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-100_02 flex flex-1 flex-col gap-[50px] items-start justify-start my-0 p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full">
                  <div className="bg-white-A700 h-[554px] outline outline-[2px] outline-blue-50 relative rounded-[12px] shadow-bs4 w-full">
                    <Img
                      className="h-full m-auto max-h-[554px] object-cover rounded-[12px]"
                      src="images/img_image_260.png"
                      alt="image"
                    />
                    <div className="absolute bottom-[0] flex flex-1 flex-col inset-x-[0] items-center justify-start mx-auto p-5 w-full">
                      <div className="bg-white-A700 flex md:flex-col flex-row md:gap-10 gap-[100px] items-center justify-start outline outline-[1px] outline-blue-50 p-[50px] md:px-10 sm:px-5 rounded-[12px] shadow-bs5 w-full">
                        <div className="flex flex-1 flex-col gap-[17px] items-start justify-start w-full">
                          <Text
                            className="text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 w-full"
                            size="txtInterSemiBold30Bluegray900"
                          >
                            1100+ Sections
                          </Text>
                          <Text
                            className="leading-[150.00%] max-w-[1148px] md:max-w-full text-gray-800_01 text-lg"
                            size="txtInterRegular18Gray80001"
                          >
                            With a vast selection of 1110+ reusable sections,
                            available in three sizes, our thoughtfully crafted
                            designs are geared toward effortless reuse,
                            simplifying your workflow and expediting the design
                            process.
                          </Text>
                        </div>
                        <Button
                          className="cursor-pointer font-medium leading-[normal] min-w-[192px] rounded-[10px] text-center text-lg underline"
                          shape="round"
                          size="lg"
                          variant="gradient"
                          color="blue_A700_light_blue_A400"
                        >
                          Browse Sections
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col gap-[30px] items-start justify-start outline outline-[2px] outline-blue-50 p-[50px] md:px-10 sm:px-5 rounded-[12px] shadow-bs4 w-full">
                    <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-full">
                      <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                          size="txtInterSemiBold34Bluegray900"
                        >
                          50
                        </Text>
                        <Text
                          className="text-gray-800_01 text-lg w-full"
                          size="txtInterRegular18Gray80001"
                        >
                          Login
                        </Text>
                      </div>
                      <Line className="bg-blue-50 h-[98px] md:h-px md:w-full w-px" />
                      <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                          size="txtInterSemiBold34Bluegray900"
                        >
                          50
                        </Text>
                        <Text
                          className="text-gray-800_01 text-lg w-full"
                          size="txtInterRegular18Gray80001"
                        >
                          Signup
                        </Text>
                      </div>
                      <Line className="bg-blue-50 h-[98px] md:h-px md:w-full w-px" />
                      <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                          size="txtInterSemiBold34Bluegray900"
                        >
                          15
                        </Text>
                        <Text
                          className="text-gray-800_01 text-lg w-full"
                          size="txtInterRegular18Gray80001"
                        >
                          Search Section
                        </Text>
                      </div>
                      <Line className="bg-blue-50 h-[98px] md:h-px md:w-full w-px" />
                      <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900"
                          size="txtInterSemiBold34Bluegray900"
                        >
                          25
                        </Text>
                        <Text
                          className="text-gray-800_01 text-lg w-full"
                          size="txtInterRegular18Gray80001"
                        >
                          Timeline
                        </Text>
                      </div>
                      <Line className="bg-blue-50 h-[98px] md:h-px md:w-full w-px" />
                      <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900"
                          size="txtInterSemiBold34Bluegray900"
                        >
                          70
                        </Text>
                        <Text
                          className="text-gray-800_01 text-lg w-full"
                          size="txtInterRegular18Gray80001"
                        >
                          Process
                        </Text>
                      </div>
                    </div>
                    <Line className="bg-blue-50 h-px w-full" />
                    <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-full">
                      <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                          size="txtInterSemiBold34Bluegray900"
                        >
                          120
                        </Text>
                        <Text
                          className="text-gray-800_01 text-lg w-full"
                          size="txtInterRegular18Gray80001"
                        >
                          Testimonial Section
                        </Text>
                      </div>
                      <Line className="bg-blue-50 h-[98px] md:h-px md:w-full w-px" />
                      <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                          size="txtInterSemiBold34Bluegray900"
                        >
                          120
                        </Text>
                        <Text
                          className="text-gray-800_01 text-lg w-full"
                          size="txtInterRegular18Gray80001"
                        >
                          Team Members Section
                        </Text>
                      </div>
                      <Line className="bg-blue-50 h-[98px] md:h-px md:w-full w-px" />
                      <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                          size="txtInterSemiBold34Bluegray900"
                        >
                          15
                        </Text>
                        <Text
                          className="text-gray-800_01 text-lg w-full"
                          size="txtInterRegular18Gray80001"
                        >
                          Search Section
                        </Text>
                      </div>
                      <Line className="bg-blue-50 h-[98px] md:h-px md:w-full w-px" />
                      <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900"
                          size="txtInterSemiBold34Bluegray900"
                        >
                          52
                        </Text>
                        <Text
                          className="text-gray-800_01 text-lg w-full"
                          size="txtInterRegular18Gray80001"
                        >
                          CTA
                        </Text>
                      </div>
                      <Line className="bg-blue-50 h-[98px] md:h-px md:w-full w-px" />
                      <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                          size="txtInterSemiBold34Bluegray900"
                        >
                          100
                        </Text>
                        <Text
                          className="text-gray-800_01 text-lg w-full"
                          size="txtInterRegular18Gray80001"
                        >
                          Blog Listing
                        </Text>
                      </div>
                    </div>
                    <Line className="bg-blue-50 h-px w-full" />
                    <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-full">
                      <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                          size="txtInterSemiBold34Bluegray900"
                        >
                          50
                        </Text>
                        <Text
                          className="text-gray-800_01 text-lg w-full"
                          size="txtInterRegular18Gray80001"
                        >
                          Logo Section
                        </Text>
                      </div>
                      <Line className="bg-blue-50 h-[98px] md:h-px md:w-full w-px" />
                      <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                          size="txtInterSemiBold34Bluegray900"
                        >
                          140
                        </Text>
                        <Text
                          className="text-gray-800_01 text-lg w-full"
                          size="txtInterRegular18Gray80001"
                        >
                          Features
                        </Text>
                      </div>
                      <Line className="bg-blue-50 h-[98px] md:h-px md:w-full w-px" />
                      <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                          size="txtInterSemiBold34Bluegray900"
                        >
                          80
                        </Text>
                        <Text
                          className="text-gray-800_01 text-lg w-full"
                          size="txtInterRegular18Gray80001"
                        >
                          Product Listing
                        </Text>
                      </div>
                      <Line className="bg-blue-50 h-[98px] md:h-px md:w-full w-px" />
                      <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                          size="txtInterSemiBold34Bluegray900"
                        >
                          50
                        </Text>
                        <Text
                          className="text-gray-800_01 text-lg w-full"
                          size="txtInterRegular18Gray80001"
                        >
                          Hero Section
                        </Text>
                      </div>
                      <Line className="bg-blue-50 h-[98px] md:h-px md:w-full w-px" />
                      <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                          size="txtInterSemiBold34Bluegray900"
                        >
                          60
                        </Text>
                        <Text
                          className="text-gray-800_01 text-lg w-full"
                          size="txtInterRegular18Gray80001"
                        >
                          Pricing
                        </Text>
                      </div>
                    </div>
                    <Line className="bg-blue-50 h-px w-full" />
                    <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-full">
                      <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                          size="txtInterSemiBold34Bluegray900"
                        >
                          50
                        </Text>
                        <Text
                          className="text-gray-800_01 text-lg w-full"
                          size="txtInterRegular18Gray80001"
                        >
                          Footer
                        </Text>
                      </div>
                      <Line className="bg-blue-50 h-[98px] md:h-px md:w-full w-px" />
                      <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                          size="txtInterSemiBold34Bluegray900"
                        >
                          50
                        </Text>
                        <Text
                          className="text-gray-800_01 text-lg w-full"
                          size="txtInterRegular18Gray80001"
                        >
                          Navbar
                        </Text>
                      </div>
                      <Line className="bg-blue-50 h-[98px] md:h-px md:w-full w-px" />
                      <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                          size="txtInterSemiBold34Bluegray900"
                        >
                          45
                        </Text>
                        <Text
                          className="text-gray-800_01 text-lg w-full"
                          size="txtInterRegular18Gray80001"
                        >
                          Navbar Listing
                        </Text>
                      </div>
                      <Line className="bg-blue-50 h-[98px] md:h-px md:w-full w-px" />
                      <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                          size="txtInterSemiBold34Bluegray900"
                        >
                          60
                        </Text>
                        <Text
                          className="text-gray-800_01 text-lg w-full"
                          size="txtInterRegular18Gray80001"
                        >
                          FAQ Section
                        </Text>
                      </div>
                      <Line className="bg-blue-50 h-[98px] md:h-px md:w-full w-px" />
                      <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                          size="txtInterSemiBold34Bluegray900"
                        >
                          40
                        </Text>
                        <Text
                          className="text-gray-800_01 text-lg w-full"
                          size="txtInterRegular18Gray80001"
                        >
                          Gallery
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
            </div>
            <div className="flex flex-col gap-[50px] items-start justify-start w-full">
              <div className="flex flex-col gap-2.5 items-start justify-start md:pr-10 sm:pr-5 pr-[300px] w-full">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 w-full"
                  size="txtInterMedium30"
                >
                  Pages
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[1380px] md:max-w-full text-gray-800_01 text-lg"
                  size="txtInterRegular18Gray80001"
                >
                  Pages of Produce UI are pre-designed, fully completed
                  individual page design. You can easily copy these pages from
                  Produce UI and customize their content and style according to
                  your preferences, enabling you to expedite the design process
                  efficiently and achieve a polished result swiftly.
                </Text>
              </div>
              <div className="bg-gray-100_02 flex flex-col gap-[50px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full">
                <div className="bg-white-A700 h-[554px] outline outline-[2px] outline-blue-50 relative rounded-[12px] shadow-bs4 w-full">
                  <Img
                    className="h-full m-auto max-h-[554px] object-cover rounded-[12px]"
                    src="images/img_image_284.png"
                    alt="image_One"
                  />
                  <div className="absolute bottom-[0] flex flex-1 flex-col inset-x-[0] items-center justify-start mx-auto p-5 w-full">
                    <div className="bg-white-A700 flex md:flex-col flex-row md:gap-10 gap-[100px] items-center justify-start outline outline-[1px] outline-blue-50 p-[50px] md:px-10 sm:px-5 rounded-[12px] shadow-bs5 w-full">
                      <div className="flex flex-1 flex-col gap-[17px] items-start justify-start w-full">
                        <Text
                          className="text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 w-full"
                          size="txtInterSemiBold30Bluegray900"
                        >
                          85+ Pages
                        </Text>
                        <Text
                          className="leading-[150.00%] max-w-[1170px] md:max-w-full text-gray-800_01 text-lg"
                          size="txtInterRegular18Gray80001"
                        >
                          Explore our extensive collection of 300+ reusable
                          fully designed pages, available in three sizes. Our
                          thoughtfully crafted designs are aimed at making reuse
                          effortless, streamlining your workflow, and expediting
                          the design process.
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[170px] rounded-[10px] text-center text-lg underline"
                        shape="round"
                        size="lg"
                        variant="gradient"
                        color="blue_A700_light_blue_A400"
                      >
                        Browse Pages
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col gap-[30px] items-start justify-start outline outline-[2px] outline-blue-50 p-[50px] md:px-10 sm:px-5 rounded-[12px] shadow-bs4 w-full">
                  <List
                    className="flex flex-col gap-[30px] items-center w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 md:flex-col flex-row gap-5 items-start justify-start w-full">
                      <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                          size="txtInterSemiBold34Bluegray900"
                        >
                          11
                        </Text>
                        <Text
                          className="text-gray-800_01 text-lg w-full"
                          size="txtInterRegular18Gray80001"
                        >
                          About Us
                        </Text>
                      </div>
                      <Line className="bg-blue-50 h-[98px] md:h-px md:w-full w-px" />
                      <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                          size="txtInterSemiBold34Bluegray900"
                        >
                          04
                        </Text>
                        <Text
                          className="text-gray-800_01 text-lg w-full"
                          size="txtInterRegular18Gray80001"
                        >
                          Blog Listing
                        </Text>
                      </div>
                      <Line className="bg-blue-50 h-[98px] md:h-px md:w-full w-px" />
                      <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                          size="txtInterSemiBold34Bluegray900"
                        >
                          03
                        </Text>
                        <Text
                          className="text-gray-800_01 text-lg w-full"
                          size="txtInterRegular18Gray80001"
                        >
                          Careers
                        </Text>
                      </div>
                      <Line className="bg-blue-50 h-[98px] md:h-px md:w-full w-px" />
                      <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                          size="txtInterSemiBold34Bluegray900"
                        >
                          09
                        </Text>
                        <Text
                          className="text-gray-800_01 text-lg w-full"
                          size="txtInterRegular18Gray80001"
                        >
                          Contact
                        </Text>
                      </div>
                      <Line className="bg-blue-50 h-[98px] md:h-px md:w-full w-px" />
                      <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                          size="txtInterSemiBold34Bluegray900"
                        >
                          01
                        </Text>
                        <Text
                          className="text-gray-800_01 text-lg w-full"
                          size="txtInterRegular18Gray80001"
                        >
                          Contribute
                        </Text>
                      </div>
                    </div>
                    <Line className="self-center h-px bg-blue-50 w-full" />
                    <div className="flex flex-1 md:flex-col flex-row gap-5 items-start justify-start w-full">
                      <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                          size="txtInterSemiBold34Bluegray900"
                        >
                          13
                        </Text>
                        <Text
                          className="text-gray-800_01 text-lg w-full"
                          size="txtInterRegular18Gray80001"
                        >
                          Home / Landing Page
                        </Text>
                      </div>
                      <Line className="bg-blue-50 h-[98px] md:h-px md:w-full w-px" />
                      <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                          size="txtInterSemiBold34Bluegray900"
                        >
                          15
                        </Text>
                        <Text
                          className="text-gray-800_01 text-lg w-full"
                          size="txtInterRegular18Gray80001"
                        >
                          Information
                        </Text>
                      </div>
                      <Line className="bg-blue-50 h-[98px] md:h-px md:w-full w-px" />
                      <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                          size="txtInterSemiBold34Bluegray900"
                        >
                          03
                        </Text>
                        <Text
                          className="text-gray-800_01 text-lg w-full"
                          size="txtInterRegular18Gray80001"
                        >
                          Login Page
                        </Text>
                      </div>
                      <Line className="bg-blue-50 h-[98px] md:h-px md:w-full w-px" />
                      <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                          size="txtInterSemiBold34Bluegray900"
                        >
                          03
                        </Text>
                        <Text
                          className="text-gray-800_01 text-lg w-full"
                          size="txtInterRegular18Gray80001"
                        >
                          Sign Up Page
                        </Text>
                      </div>
                      <Line className="bg-blue-50 h-[98px] md:h-px md:w-full w-px" />
                      <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                          size="txtInterSemiBold34Bluegray900"
                        >
                          02
                        </Text>
                        <Text
                          className="text-gray-800_01 text-lg w-full"
                          size="txtInterRegular18Gray80001"
                        >
                          News Page
                        </Text>
                      </div>
                    </div>
                    <Line className="self-center h-px bg-blue-50 w-full" />
                    <div className="flex flex-1 md:flex-col flex-row gap-5 items-start justify-start w-full">
                      <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                          size="txtInterSemiBold34Bluegray900"
                        >
                          05
                        </Text>
                        <Text
                          className="text-gray-800_01 text-lg w-full"
                          size="txtInterRegular18Gray80001"
                        >
                          Portfolio Page
                        </Text>
                      </div>
                      <Line className="bg-blue-50 h-[98px] md:h-px md:w-full w-px" />
                      <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                          size="txtInterSemiBold34Bluegray900"
                        >
                          06
                        </Text>
                        <Text
                          className="text-gray-800_01 text-lg w-full"
                          size="txtInterRegular18Gray80001"
                        >
                          Pricing Page
                        </Text>
                      </div>
                      <Line className="bg-blue-50 h-[98px] md:h-px md:w-full w-px" />
                      <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                          size="txtInterSemiBold34Bluegray900"
                        >
                          03
                        </Text>
                        <Text
                          className="text-gray-800_01 text-lg w-full"
                          size="txtInterRegular18Gray80001"
                        >
                          Product Detail Page
                        </Text>
                      </div>
                      <Line className="bg-blue-50 h-[98px] md:h-px md:w-full w-px" />
                      <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                          size="txtInterSemiBold34Bluegray900"
                        >
                          04
                        </Text>
                        <Text
                          className="text-gray-800_01 text-lg w-full"
                          size="txtInterRegular18Gray80001"
                        >
                          Product Listing Page
                        </Text>
                      </div>
                      <Line className="bg-blue-50 h-[98px] md:h-px md:w-full w-px" />
                      <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                        <Text
                          className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                          size="txtInterSemiBold34Bluegray900"
                        >
                          03
                        </Text>
                        <Text
                          className="text-gray-800_01 text-lg w-full"
                          size="txtInterRegular18Gray80001"
                        >
                          Services Page
                        </Text>
                      </div>
                    </div>
                  </List>
                  <div className="flex sm:flex-col flex-row gap-5 items-start justify-start w-full">
                    <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                      <Text
                        className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                        size="txtInterSemiBold34Bluegray900"
                      >
                        01
                      </Text>
                      <Text
                        className="text-gray-800_01 text-lg w-full"
                        size="txtInterRegular18Gray80001"
                      >
                        Support Page
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                      <Text
                        className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                        size="txtInterSemiBold34Bluegray900"
                      >
                        01
                      </Text>
                      <Text
                        className="text-gray-800_01 text-lg w-full"
                        size="txtInterRegular18Gray80001"
                      >
                        Team Members Page
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[50px] items-start justify-start w-full">
              <div className="flex flex-col gap-2.5 items-start justify-start md:pr-10 sm:pr-5 pr-[300px] w-full">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 w-full"
                  size="txtInterMedium30"
                >
                  Templates
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[1380px] md:max-w-full text-gray-800_01 text-lg"
                  size="txtInterRegular18Gray80001"
                >
                  Templates are pre-designed, complete websites within a
                  specific theme. We offer the option to either copy individual
                  pages from the template or download the entire template,
                  providing a convenient and ready-made foundation for your web
                  design projects.
                </Text>
              </div>
              <div className="bg-gray-100_02 flex flex-col gap-[50px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full">
                <div className="bg-white-A700 h-[554px] outline outline-[2px] outline-blue-50 relative rounded-[12px] shadow-bs4 w-full">
                  <Img
                    className="h-full m-auto max-h-[554px] object-cover rounded-[12px]"
                    src="images/img_image_285.png"
                    alt="image_Two"
                  />
                  <div className="absolute bottom-[0] flex flex-1 flex-col inset-x-[0] items-center justify-start mx-auto p-5 w-full">
                    <div className="bg-white-A700 flex md:flex-col flex-row md:gap-10 gap-[100px] items-center justify-start outline outline-[1px] outline-blue-50 p-[50px] md:px-10 sm:px-5 rounded-[12px] shadow-bs5 w-full">
                      <div className="flex flex-1 flex-col gap-[17px] items-start justify-start w-full">
                        <Text
                          className="text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900 w-full"
                          size="txtInterSemiBold30Bluegray900"
                        >
                          12+ Templates
                        </Text>
                        <Text
                          className="leading-[150.00%] max-w-[1133px] md:max-w-full text-gray-800_01 text-lg"
                          size="txtInterRegular18Gray80001"
                        >
                          We offer 12+ fully designed templates that you can
                          either copy or download. Enhance your designs and save
                          time by utilizing these templates for improved
                          efficiency in your projects.
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[207px] rounded-[10px] text-center text-lg underline"
                        shape="round"
                        size="lg"
                        variant="gradient"
                        color="blue_A700_light_blue_A400"
                      >
                        Browse Templates
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col gap-[30px] items-start justify-start outline outline-[2px] outline-blue-50 p-[50px] md:px-10 sm:px-5 rounded-[12px] shadow-bs4 w-full">
                  <List
                    className="sm:flex-col flex-row gap-5 grid sm:grid-cols-[repeat(0,_1fr_1px)_1fr] md:grid-cols-[repeat(2,_1fr_1px)_1fr] grid-cols-[repeat(4,_1fr_1px)_1fr] justify-start w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                      <Text
                        className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                        size="txtInterSemiBold34Bluegray900"
                      >
                        02
                      </Text>
                      <Text
                        className="text-gray-800_01 text-lg w-full"
                        size="txtInterRegular18Gray80001"
                      >
                        Agency Template
                      </Text>
                    </div>
                    <Line className="self-center h-[98px] bg-blue-50 w-px" />
                    <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                      <Text
                        className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                        size="txtInterSemiBold34Bluegray900"
                      >
                        02
                      </Text>
                      <Text
                        className="text-gray-800_01 text-lg w-full"
                        size="txtInterRegular18Gray80001"
                      >
                        Business Template
                      </Text>
                    </div>
                    <Line className="self-center h-[98px] bg-blue-50 w-px" />
                    <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                      <Text
                        className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                        size="txtInterSemiBold34Bluegray900"
                      >
                        02
                      </Text>
                      <Text
                        className="text-gray-800_01 text-lg w-full"
                        size="txtInterRegular18Gray80001"
                      >
                        Education Template
                      </Text>
                    </div>
                    <Line className="self-center h-[98px] bg-blue-50 w-px" />
                    <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                      <Text
                        className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                        size="txtInterSemiBold34Bluegray900"
                      >
                        01
                      </Text>
                      <Text
                        className="text-gray-800_01 text-lg w-full"
                        size="txtInterRegular18Gray80001"
                      >
                        Entertainment Template
                      </Text>
                    </div>
                    <Line className="self-center h-[98px] bg-blue-50 w-px" />
                    <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                      <Text
                        className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                        size="txtInterSemiBold34Bluegray900"
                      >
                        01
                      </Text>
                      <Text
                        className="text-gray-800_01 text-lg w-full"
                        size="txtInterRegular18Gray80001"
                      >
                        Finance Template
                      </Text>
                    </div>
                  </List>
                  <Line className="bg-blue-50 h-px w-full" />
                  <List
                    className="sm:flex-col flex-row gap-5 grid sm:grid-cols-[repeat(0,_1fr_1px)_1fr] md:grid-cols-[repeat(1,_1fr_1px)_1fr] grid-cols-[repeat(2,_1fr_1px)_1fr] justify-start w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                      <Text
                        className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                        size="txtInterSemiBold34Bluegray900"
                      >
                        02
                      </Text>
                      <Text
                        className="text-gray-800_01 text-lg w-full"
                        size="txtInterRegular18Gray80001"
                      >
                        Healthcare Template
                      </Text>
                    </div>
                    <Line className="self-center h-[98px] bg-blue-50 w-px" />
                    <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                      <Text
                        className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                        size="txtInterSemiBold34Bluegray900"
                      >
                        01
                      </Text>
                      <Text
                        className="text-gray-800_01 text-lg w-full"
                        size="txtInterRegular18Gray80001"
                      >
                        Non Profit Template
                      </Text>
                    </div>
                    <Line className="self-center h-[98px] bg-blue-50 w-px" />
                    <div className="flex flex-1 flex-col gap-5 items-center justify-start p-5 w-full">
                      <Text
                        className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-full"
                        size="txtInterSemiBold34Bluegray900"
                      >
                        02
                      </Text>
                      <Text
                        className="text-gray-800_01 text-lg w-full"
                        size="txtInterRegular18Gray80001"
                      >
                        Portfolio Template
                      </Text>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:gap-10 gap-[100px] items-start justify-start max-w-[1679px] w-full">
            <div className="flex flex-col gap-3.5 items-start justify-start w-full">
              <Text
                className="sm:text-[44px] md:text-[50px] text-[58px] text-gray-900_10 w-full"
                size="txtInterSemiBold58"
              >
                Valuable Information
              </Text>
              <Text
                className="text-gray-800_01 text-lg w-full"
                size="txtInterRegular18Gray80001"
              >
                <>
                  Whether you&#39;re a seasoned designer or just starting, our
                  designs aim to inspire all. Dive in to discover a treasure
                  trove of designs that will help you craft remarkable websites.
                </>
              </Text>
            </div>
            <div className="bg-gray-100_02 flex flex-col gap-[50px] items-start justify-start p-20 md:px-10 sm:px-5 rounded-[12px] w-full">
              <List
                className="sm:flex-col flex-row gap-[50px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-full"
                orientation="horizontal"
              >
                <div className="bg-white-A700 border border-blue-50 border-solid flex flex-1 flex-col gap-[50px] items-center justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] shadow-bs6 w-full">
                  <div className="bg-gray-100_02 flex flex-col items-start justify-start p-5 rounded-[12px] w-20">
                    <Img
                      className="h-10 md:h-auto object-cover w-10"
                      src="images/img_icon_40x40.png"
                      alt="icon"
                    />
                  </div>
                  <div className="flex flex-col gap-5 items-start justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl w-full"
                      size="txtInterSemiBold24Bluegray900"
                    >
                      Save Your Liked One’s
                    </Text>
                    <Text
                      className="leading-[150.00%] max-w-[373px] md:max-w-full text-center text-gray-800_01 text-lg"
                      size="txtInterRegular18Gray80001"
                    >
                      Allows you to bookmark and quickly access your favorite
                      designs, streamlining the creative process and providing
                      easy reference to preferred designs.
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 border border-blue-50 border-solid flex flex-1 flex-col gap-[50px] items-center justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] shadow-bs6 w-full">
                  <div className="bg-gray-100_02 flex flex-col items-start justify-start p-5 rounded-[12px] w-20">
                    <Img
                      className="h-10 md:h-auto object-cover w-10"
                      src="images/img_icon_11.png"
                      alt="icon"
                    />
                  </div>
                  <div className="flex flex-col gap-5 items-start justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl w-full"
                      size="txtInterSemiBold24Bluegray900"
                    >
                      Folder
                    </Text>
                    <Text
                      className="leading-[150.00%] max-w-[373px] md:max-w-full text-center text-gray-800_01 text-lg"
                      size="txtInterRegular18Gray80001"
                    >
                      With this feature, you can easily group similar elements,
                      sections, pages, or templates making it a breeze to find
                      and access what you need, when you need it.
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 border border-blue-50 border-solid flex flex-1 flex-col gap-[50px] items-center justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] shadow-bs6 w-full">
                  <div className="bg-gray-100_02 flex flex-col items-start justify-start p-5 rounded-[12px] w-20">
                    <Img
                      className="h-10 md:h-auto object-cover w-10"
                      src="images/img_icon_12.png"
                      alt="icon"
                    />
                  </div>
                  <div className="flex flex-col gap-5 items-start justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl w-full"
                      size="txtInterSemiBold24Bluegray900"
                    >
                      Frequent Design Release
                    </Text>
                    <Text
                      className="leading-[150.00%] max-w-[373px] md:max-w-full text-center text-gray-800_01 text-lg"
                      size="txtInterRegular18Gray80001"
                    >
                      We regularly upload new elements, sections, pages, and
                      templates. With each release, you can expect a wealth of
                      inspiration to elevate your design projects.
                    </Text>
                  </div>
                </div>
              </List>
              <div className="flex md:flex-col flex-row gap-[50px] items-start justify-start w-full">
                <div className="bg-white-A700 border border-blue-50 border-solid flex flex-1 flex-col gap-[50px] items-center justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] shadow-bs4 w-full">
                  <Img
                    className="h-36 rounded-[12px] w-[151px]"
                    src="images/img_iconcontainer_gray_100_02.svg"
                    alt="iconcontainer_One"
                  />
                  <div className="flex flex-col gap-5 items-start justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl w-full"
                      size="txtInterSemiBold24Bluegray900"
                    >
                      100% Autolayout
                    </Text>
                    <Text
                      className="leading-[150.00%] max-w-[634px] md:max-w-full text-center text-gray-800_01 text-lg"
                      size="txtInterRegular18Gray80001"
                    >
                      Every design on Produce UI is meticulously crafted using
                      100% Auto Layout, ensuring responsiveness and flexibility
                      for seamless integration into your Figma projects.
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 border border-blue-50 border-solid flex flex-1 flex-col gap-[50px] h-full items-center justify-center p-[50px] md:px-10 sm:px-5 rounded-[12px] shadow-bs4 w-full">
                  <div className="flex flex-col gap-[7px] items-start justify-start w-full">
                    <Text
                      className="text-center text-gray-700 text-xl w-full"
                      size="txtInterRegular20Gray700"
                    >
                      All The Designs are Available in
                    </Text>
                    <Text
                      className="sm:text-[40px] md:text-[46px] text-[50px] text-blue_gray-900 text-center w-full"
                      size="txtInterSemiBold50"
                    >
                      3 Screen Sizes
                    </Text>
                  </div>
                  <div className="gap-2.5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-center w-full">
                    <Button
                      className="border border-blue-100 border-solid cursor-pointer flex flex-1 items-center justify-center min-w-[204px] rounded-[29px] w-full"
                      leftIcon={
                        <Img
                          className="h-[30px] mr-2.5 w-[30pxpx]"
                          src="images/img_icon_blue_gray_900_30x30.svg"
                          alt="Icon"
                        />
                      }
                      color="gray_100_02"
                      size="md"
                      variant="fill"
                    >
                      <div className="text-center text-xl">Desktop</div>
                    </Button>
                    <Button
                      className="border border-blue-100 border-solid cursor-pointer flex flex-1 items-center justify-center min-w-[204px] rounded-[29px] w-full"
                      leftIcon={
                        <Img
                          className="h-[30px] mr-2.5 w-[30pxpx]"
                          src="images/img_icon_13.svg"
                          alt="Icon"
                        />
                      }
                      color="gray_100_02"
                      size="md"
                      variant="fill"
                    >
                      <div className="text-center text-xl">Laptop</div>
                    </Button>
                    <Button
                      className="border border-blue-100 border-solid cursor-pointer flex flex-1 items-center justify-center min-w-[204px] rounded-[29px] w-full"
                      leftIcon={
                        <Img
                          className="h-[30px] mr-2.5 w-[30pxpx]"
                          src="images/img_icon_14.svg"
                          alt="Icon"
                        />
                      }
                      color="gray_100_02"
                      size="md"
                      variant="fill"
                    >
                      <div className="text-center text-xl">Mobile</div>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-[50px] items-start justify-start w-full">
                <div className="bg-white-A700 border border-blue-50 border-solid flex flex-1 flex-col gap-[50px] items-center justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] shadow-bs4 w-full">
                  <div className="bg-gray-100_02 flex flex-col items-start justify-start p-5 rounded-[12px] w-auto sm:w-full">
                    <div className="bg-white-A700 flex flex-col items-start justify-start rounded-[12px] shadow-bs7 w-[405px] sm:w-full">
                      <div className="bg-blue-50 flex flex-row gap-[8.24px] items-center justify-start px-[16.48px] py-[13.73px] w-full">
                        <Img
                          className="h-4 w-4"
                          src="images/img_frame3736.svg"
                          alt="frame3736"
                        />
                        <Text
                          className="text-[12.36px] text-gray-900_10 w-auto"
                          size="txtInterSemiBold1236"
                        >
                          Desktop - Home Page
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start w-full">
                        <CheckBox
                          className="font-medium text-[10.99px] text-blue_gray-900 text-left"
                          inputClassName="mr-[5px]"
                          name="container"
                          id="container"
                          label="Container"
                        ></CheckBox>
                        <CheckBox
                          className="font-medium text-[10.99px] text-blue_gray-900 text-left"
                          inputClassName="mr-[5px]"
                          name="container_One"
                          id="container_One"
                          label="Container"
                        ></CheckBox>
                        <CheckBox
                          className="font-medium text-[10.99px] text-blue_gray-900 text-left"
                          inputClassName="mr-[5px]"
                          name="faqsection"
                          id="faqsection"
                          label="FAQ Section"
                        ></CheckBox>
                        <CheckBox
                          className="font-medium text-[10.99px] text-blue_gray-900 text-left"
                          inputClassName="mr-[5px]"
                          name="testimonialssec_One"
                          id="testimonialssec_One"
                          label="Testimonials Section"
                        ></CheckBox>
                        <CheckBox
                          className="font-medium text-[10.99px] text-blue_gray-900 text-left"
                          inputClassName="mr-[5px]"
                          name="container_Two"
                          id="container_Two"
                          label="Container"
                        ></CheckBox>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-5 items-start justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl w-full"
                      size="txtInterSemiBold24Bluegray900"
                    >
                      Properly Structured and Named
                    </Text>
                    <Text
                      className="leading-[150.00%] max-w-[634px] md:max-w-full text-center text-gray-800_01 text-lg"
                      size="txtInterRegular18Gray80001"
                    >
                      All designs on Produce UI are thoughtfully structured and
                      meticulously named, facilitating easy navigation and
                      efficient use in your projects.
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 border border-blue-50 border-solid flex flex-1 flex-col gap-[-82px] h-full items-center justify-center rounded-[12px] shadow-bs4 w-full">
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[187px] rounded-[10px] text-center text-lg underline"
                    shape="round"
                    size="lg"
                    variant="gradient"
                    color="blue_A700_light_blue_A400"
                  >
                    <>View Website -&gt;</>
                  </Button>
                  <div className="flex flex-col items-start justify-center md:px-10 sm:px-5 px-[50px] py-[60px] w-full">
                    <div className="flex flex-col gap-5 items-start justify-start w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-full"
                        size="txtInterSemiBold24Bluegray900"
                      >
                        Completely Free
                      </Text>
                      <Text
                        className="leading-[150.00%] max-w-[634px] md:max-w-full text-gray-800_01 text-lg"
                        size="txtInterRegular18Gray80001"
                      >
                        <span className="text-gray-800_01 font-inter text-left font-normal">
                          <>
                            You can freely copy all elements, sections, pages
                            and templates from our website, &quot;
                          </>
                        </span>
                        <a
                          href="javascript:"
                          className="text-gray-800_01 font-inter text-left font-normal underline"
                        >
                          produce-ui.com
                        </a>
                        <span className="text-gray-800_01 font-inter text-left font-normal">
                          <>&quot;</>
                        </span>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
