import React from "react";

import { Button, Img, Line, List, Text } from "components";

const InformationAboutTheTemplatePage = () => {
  return (
    <>
      <div className="bg-gray-900_01 flex flex-col font-manrope sm:gap-10 md:gap-10 gap-[150px] items-center justify-start mx-auto outline outline-[5px] pb-[150px] red_A700_pink_900_border shadow-bs w-full">
        <div className="h-[547px] md:px-5 relative w-full">
          <Img
            className="h-[547px] m-auto object-cover w-full"
            src="images/img_image_547x1920.png"
            alt="image"
          />
          <div className="absolute flex flex-row items-center justify-center right-[36%] top-[39%] w-auto">
            <Line className="bg-gray-500 h-0.5 rotate-[180deg] w-[13%]" />
            <Button
              className="bg-transparent border border-solid cursor-pointer font-semibold gray_400_01_blue_gray_700_00_border3 leading-[normal] min-w-[279px] rounded-[41px] sm:text-[30.369999999999997px] md:text-[32.37px] text-[34.37px] text-center underline"
              color="gray_900_02"
              size="lg"
              variant="fill"
            >
              By Produce UI
            </Button>
          </div>
        </div>
        <div className="flex flex-col font-inter md:gap-10 gap-20 items-start justify-start max-w-[1680px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[18px] items-start justify-start md:pr-10 sm:pr-5 pr-[300px] w-full">
            <Text
              className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-full"
              size="txtInterSemiBold30"
            >
              Sitemap Of The Template
            </Text>
            <Text
              className="leading-[150.00%] max-w-[1380px] md:max-w-full text-gray-500 text-lg"
              size="txtInterRegular18Gray500"
            >
              <>
                A UI sitemap, or user experience (UX) sitemap, is a diagram that
                shows how the pages on a website are related to each other.
                It&#39;s also known as an information architecture (IA) diagram
                or content outline.
              </>
            </Text>
          </div>
          <div className="flex md:flex-col flex-row gap-5 items-start justify-start max-w-[1680px] w-full">
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <div className="flex flex-col gap-px items-center justify-start w-full">
                <Button
                  className="cursor-pointer font-medium leading-[normal] rounded-[10px] text-center text-xl w-full"
                  shape="round"
                  color="red_A700"
                  size="lg"
                  variant="fill"
                >
                  Home
                </Button>
                <Img
                  className="h-[79px] w-full"
                  src="images/img_container.svg"
                  alt="container"
                />
              </div>
              <div className="bg-gray-900_03 flex flex-col items-center justify-center p-5 rounded-bl-[12px] rounded-br-[12px] w-full">
                <div className="bg-gray-900_02 border border-solid flex flex-col gray_800_gray_800_00_border items-center justify-center px-4 py-5 rounded-[10px] w-full">
                  <Text
                    className="text-base text-center text-white-A700 w-auto"
                    size="txtInterMedium16"
                  >
                    Navigation Bar
                  </Text>
                </div>
                <Line className="bg-blue_gray-900 h-[38px] w-px" />
                <div className="bg-gray-900_02 border border-solid flex flex-col gray_800_gray_800_00_border2 items-center justify-center px-4 py-5 rounded-[10px] w-full">
                  <Text
                    className="text-base text-center text-white-A700 w-auto"
                    size="txtInterMedium16"
                  >
                    Hero Section
                  </Text>
                </div>
                <Line className="bg-blue_gray-900 h-[38px] w-px" />
                <div className="bg-gray-900_02 border border-solid flex flex-col gray_800_gray_800_00_border3 items-center justify-center px-4 py-5 rounded-[10px] w-full">
                  <Text
                    className="text-base text-center text-white-A700 w-auto"
                    size="txtInterMedium16"
                  >
                    Categories
                  </Text>
                </div>
                <Line className="bg-blue_gray-900 h-[38px] w-px" />
                <div className="bg-gray-900_02 border border-solid flex flex-col gray_800_gray_800_00_border4 items-center justify-center px-4 py-5 rounded-[10px] w-full">
                  <Text
                    className="text-base text-center text-white-A700 w-auto"
                    size="txtInterMedium16"
                  >
                    Devices
                  </Text>
                </div>
                <Line className="bg-blue_gray-900 h-[38px] w-px" />
                <div className="bg-gray-900_02 border border-solid flex flex-col gray_800_gray_800_00_border5 items-center justify-center px-4 py-5 rounded-[10px] w-full">
                  <Text
                    className="text-base text-center text-white-A700 w-auto"
                    size="txtInterMedium16"
                  >
                    FAQ’s
                  </Text>
                </div>
                <Line className="bg-blue_gray-900 h-[38px] w-px" />
                <div className="bg-gray-900_02 border border-solid flex flex-col gray_800_gray_800_00_border6 items-center justify-center px-4 py-5 rounded-[10px] w-full">
                  <Text
                    className="text-base text-center text-white-A700 w-auto"
                    size="txtInterMedium16"
                  >
                    Pricing
                  </Text>
                </div>
                <Line className="bg-blue_gray-900 h-[38px] w-px" />
                <div className="bg-gray-900_02 border border-solid flex flex-col gray_800_gray_800_00_border7 items-center justify-center px-4 py-5 rounded-[10px] w-full">
                  <Text
                    className="text-base text-center text-white-A700 w-auto"
                    size="txtInterMedium16"
                  >
                    CTA
                  </Text>
                </div>
                <Line className="bg-blue_gray-900 h-[38px] w-px" />
                <Button
                  className="bg-transparent border border-solid cursor-pointer font-medium gray_800_gray_800_00_border8 rounded-[10px] text-base text-center w-full"
                  shape="round"
                  color="gray_900_02"
                  size="xl"
                  variant="fill"
                >
                  Footer
                </Button>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <div className="flex flex-col gap-px items-center justify-start w-full">
                <Button
                  className="cursor-pointer font-medium leading-[normal] rounded-[10px] text-center text-xl w-full"
                  shape="round"
                  color="red_A700"
                  size="lg"
                  variant="fill"
                >
                  Movies & SHowa
                </Button>
                <Img
                  className="h-[79px] w-full"
                  src="images/img_container.svg"
                  alt="container_One"
                />
              </div>
              <div className="bg-gray-900_03 flex flex-col items-center justify-center p-5 rounded-bl-[12px] rounded-br-[12px] w-full">
                <div className="bg-gray-900_02 border border-solid flex flex-col gray_800_gray_800_00_border9 items-center justify-center px-4 py-5 rounded-[10px] w-full">
                  <Text
                    className="text-base text-center text-white-A700 w-auto"
                    size="txtInterMedium16"
                  >
                    Navigation Bar
                  </Text>
                </div>
                <Line className="bg-blue_gray-900 h-[38px] w-px" />
                <div className="bg-gray-900_02 border border-solid flex flex-col gray_800_gray_800_00_border10 items-center justify-center px-4 py-5 rounded-[10px] w-full">
                  <Text
                    className="text-base text-center text-white-A700 w-auto"
                    size="txtInterMedium16"
                  >
                    Video Trailer
                  </Text>
                </div>
                <Line className="bg-blue_gray-900 h-[38px] w-px" />
                <div className="bg-gray-900_02 border border-solid flex flex-col gray_800_gray_800_00_border11 items-center justify-center px-4 py-5 rounded-[10px] w-full">
                  <Text
                    className="text-base text-center text-white-A700 w-auto"
                    size="txtInterMedium16"
                  >
                    Movies Genres
                  </Text>
                </div>
                <Line className="bg-blue_gray-900 h-[38px] w-px" />
                <div className="bg-gray-900_02 border border-solid flex flex-col gray_800_gray_800_00_border12 items-center justify-center px-4 py-5 rounded-[10px] w-full">
                  <Text
                    className="text-base text-center text-white-A700 w-auto"
                    size="txtInterMedium16"
                  >
                    Top 10 in Movies Genres
                  </Text>
                </div>
                <Line className="bg-blue_gray-900 h-[38px] w-px" />
                <div className="bg-gray-900_02 border border-solid flex flex-col gray_800_gray_800_00_border13 items-center justify-center px-4 py-5 rounded-[10px] w-full">
                  <Text
                    className="text-base text-center text-white-A700 w-auto"
                    size="txtInterMedium16"
                  >
                    Trending Movies
                  </Text>
                </div>
                <Line className="bg-blue_gray-900 h-[38px] w-px" />
                <div className="bg-gray-900_02 border border-solid flex flex-col gray_800_gray_800_00_border14 items-center justify-center px-4 py-5 rounded-[10px] w-full">
                  <Text
                    className="text-base text-center text-white-A700 w-auto"
                    size="txtInterMedium16"
                  >
                    New Released Movies
                  </Text>
                </div>
                <Line className="bg-blue_gray-900 h-[38px] w-px" />
                <div className="bg-gray-900_02 border border-solid flex flex-col gray_800_gray_800_00_border15 items-center justify-center px-4 py-5 rounded-[10px] w-full">
                  <Text
                    className="text-base text-center text-white-A700 w-auto"
                    size="txtInterMedium16"
                  >
                    Must Watch Movies
                  </Text>
                </div>
                <Line className="bg-blue_gray-900 h-[38px] w-px" />
                <div className="bg-gray-900_02 border border-solid flex flex-col gray_800_gray_800_00_border16 items-center justify-center px-4 py-5 rounded-[10px] w-full">
                  <Text
                    className="text-base text-center text-white-A700 w-auto"
                    size="txtInterMedium16"
                  >
                    Shows Genres
                  </Text>
                </div>
                <Line className="bg-blue_gray-900 h-[38px] w-px" />
                <div className="bg-gray-900_02 border border-solid flex flex-col gray_800_gray_800_00_border17 items-center justify-center px-4 py-5 rounded-[10px] w-full">
                  <Text
                    className="text-base text-center text-white-A700 w-auto"
                    size="txtInterMedium16"
                  >
                    Top 10 in Shows Genres
                  </Text>
                </div>
                <Line className="bg-blue_gray-900 h-[38px] w-px" />
                <div className="bg-gray-900_02 border border-solid flex flex-col gray_800_gray_800_00_border18 items-center justify-center px-4 py-5 rounded-[10px] w-full">
                  <Text
                    className="text-base text-center text-white-A700 w-auto"
                    size="txtInterMedium16"
                  >
                    Trending Shows
                  </Text>
                </div>
                <Line className="bg-blue_gray-900 h-[38px] w-px" />
                <div className="bg-gray-900_02 border border-solid flex flex-col gray_800_gray_800_00_border19 items-center justify-center px-4 py-5 rounded-[10px] w-full">
                  <Text
                    className="text-base text-center text-white-A700 w-auto"
                    size="txtInterMedium16"
                  >
                    New Released Shows
                  </Text>
                </div>
                <Line className="bg-blue_gray-900 h-[38px] w-px" />
                <div className="bg-gray-900_02 border border-solid flex flex-col gray_800_gray_800_00_border20 items-center justify-center px-4 py-5 rounded-[10px] w-full">
                  <Text
                    className="text-base text-center text-white-A700 w-auto"
                    size="txtInterMedium16"
                  >
                    Must Watch Shows
                  </Text>
                </div>
                <Line className="bg-blue_gray-900 h-[38px] w-px" />
                <div className="bg-gray-900_02 border border-solid flex flex-col gray_800_gray_800_00_border21 items-center justify-center px-4 py-5 rounded-[10px] w-full">
                  <Text
                    className="text-base text-center text-white-A700 w-auto"
                    size="txtInterMedium16"
                  >
                    CTA
                  </Text>
                </div>
                <Line className="bg-blue_gray-900 h-[38px] w-px" />
                <Button
                  className="bg-transparent border border-solid cursor-pointer font-medium gray_800_gray_800_00_border22 rounded-[10px] text-base text-center w-full"
                  shape="round"
                  color="gray_900_02"
                  size="xl"
                  variant="fill"
                >
                  Footer
                </Button>
              </div>
            </div>
            <List
              className="md:flex-1 sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 w-[67%] md:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col gap-px items-center justify-start w-full">
                  <Button
                    className="cursor-pointer font-medium leading-[normal] rounded-[10px] text-center text-xl w-full"
                    shape="round"
                    color="red_A700"
                    size="lg"
                    variant="fill"
                  >
                    Open Movie
                  </Button>
                  <Img
                    className="h-[79px] w-full"
                    src="images/img_container.svg"
                    alt="container"
                  />
                </div>
                <div className="bg-gray-900_03 flex flex-col items-center justify-center p-5 rounded-bl-[12px] rounded-br-[12px] w-full">
                  <div className="bg-gray-900_02 border border-solid flex flex-col gray_800_gray_800_00_border23 items-center justify-center px-4 py-5 rounded-[10px] w-full">
                    <Text
                      className="text-base text-center text-white-A700 w-auto"
                      size="txtInterMedium16"
                    >
                      Navigation Bar
                    </Text>
                  </div>
                  <Line className="bg-blue_gray-900 h-[38px] w-px" />
                  <div className="bg-gray-900_02 border border-solid flex flex-col gray_800_gray_800_00_border24 items-center justify-center px-4 py-5 rounded-[10px] w-full">
                    <Text
                      className="text-base text-center text-white-A700 w-auto"
                      size="txtInterMedium16"
                    >
                      Video Screen & Controls
                    </Text>
                  </div>
                  <Line className="bg-blue_gray-900 h-[38px] w-px" />
                  <div className="bg-gray-900_02 border border-solid flex flex-col gray_800_gray_800_00_border25 items-center justify-center px-4 py-5 rounded-[10px] w-full">
                    <Text
                      className="text-base text-center text-white-A700 w-auto"
                      size="txtInterMedium16"
                    >
                      Information
                    </Text>
                  </div>
                  <Line className="bg-blue_gray-900 h-[38px] w-px" />
                  <div className="bg-gray-900_02 border border-solid flex flex-col gray_800_gray_800_00_border26 items-center justify-center px-4 py-5 rounded-[10px] w-full">
                    <Text
                      className="text-base text-center text-white-A700 w-auto"
                      size="txtInterMedium16"
                    >
                      Cast
                    </Text>
                  </div>
                  <Line className="bg-blue_gray-900 h-[38px] w-px" />
                  <div className="bg-gray-900_02 border border-solid flex flex-col gray_800_gray_800_00_border27 items-center justify-center px-4 py-5 rounded-[10px] w-full">
                    <Text
                      className="text-base text-center text-white-A700 w-auto"
                      size="txtInterMedium16"
                    >
                      CTA
                    </Text>
                  </div>
                  <Line className="bg-blue_gray-900 h-[38px] w-px" />
                  <Button
                    className="bg-transparent border border-solid cursor-pointer font-medium gray_800_gray_800_00_border28 rounded-[10px] text-base text-center w-full"
                    shape="round"
                    color="gray_900_02"
                    size="xl"
                    variant="fill"
                  >
                    Footer
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col gap-px items-center justify-start w-full">
                  <Button
                    className="cursor-pointer font-medium leading-[normal] rounded-[10px] text-center text-xl w-full"
                    shape="round"
                    color="red_A700"
                    size="lg"
                    variant="fill"
                  >
                    Open Show
                  </Button>
                  <Img
                    className="h-[79px] w-full"
                    src="images/img_container.svg"
                    alt="container"
                  />
                </div>
                <div className="bg-gray-900_03 flex flex-col items-center justify-center p-5 rounded-bl-[12px] rounded-br-[12px] w-full">
                  <div className="bg-gray-900_02 border border-solid flex flex-col gray_800_gray_800_00_border29 items-center justify-center px-4 py-5 rounded-[10px] w-full">
                    <Text
                      className="text-base text-center text-white-A700 w-auto"
                      size="txtInterMedium16"
                    >
                      Navigation Bar
                    </Text>
                  </div>
                  <Line className="bg-blue_gray-900 h-[38px] w-px" />
                  <div className="bg-gray-900_02 border border-solid flex flex-col gray_800_gray_800_00_border30 items-center justify-center px-4 py-5 rounded-[10px] w-full">
                    <Text
                      className="text-base text-center text-white-A700 w-auto"
                      size="txtInterMedium16"
                    >
                      Video Screen & Controls
                    </Text>
                  </div>
                  <Line className="bg-blue_gray-900 h-[38px] w-px" />
                  <div className="bg-gray-900_02 border border-solid flex flex-col gray_800_gray_800_00_border31 items-center justify-center px-4 py-5 rounded-[10px] w-full">
                    <Text
                      className="text-base text-center text-white-A700 w-auto"
                      size="txtInterMedium16"
                    >
                      Information
                    </Text>
                  </div>
                  <Line className="bg-blue_gray-900 h-[38px] w-px" />
                  <div className="bg-gray-900_02 border border-solid flex flex-col gray_800_gray_800_00_border32 items-center justify-center px-4 py-5 rounded-[10px] w-full">
                    <Text
                      className="text-base text-center text-white-A700 w-auto"
                      size="txtInterMedium16"
                    >
                      Episodes
                    </Text>
                  </div>
                  <Line className="bg-blue_gray-900 h-[38px] w-px" />
                  <div className="bg-gray-900_02 border border-solid flex flex-col gray_800_gray_800_00_border33 items-center justify-center px-4 py-5 rounded-[10px] w-full">
                    <Text
                      className="text-base text-center text-white-A700 w-auto"
                      size="txtInterMedium16"
                    >
                      Cast
                    </Text>
                  </div>
                  <Line className="bg-blue_gray-900 h-[38px] w-px" />
                  <div className="bg-gray-900_02 border border-solid flex flex-col gray_800_gray_800_00_border34 items-center justify-center px-4 py-5 rounded-[10px] w-full">
                    <Text
                      className="text-base text-center text-white-A700 w-auto"
                      size="txtInterMedium16"
                    >
                      CTA
                    </Text>
                  </div>
                  <Line className="bg-blue_gray-900 h-[38px] w-px" />
                  <Button
                    className="bg-transparent border border-solid cursor-pointer font-medium gray_800_gray_800_00_border35 rounded-[10px] text-base text-center w-full"
                    shape="round"
                    color="gray_900_02"
                    size="xl"
                    variant="fill"
                  >
                    Footer
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col gap-px items-center justify-start w-full">
                  <Button
                    className="cursor-pointer font-medium leading-[normal] rounded-[10px] text-center text-xl w-full"
                    shape="round"
                    color="red_A700"
                    size="lg"
                    variant="fill"
                  >
                    Support
                  </Button>
                  <Img
                    className="h-[79px] w-full"
                    src="images/img_container.svg"
                    alt="container"
                  />
                </div>
                <div className="bg-gray-900_03 flex flex-col items-center justify-center p-5 rounded-bl-[12px] rounded-br-[12px] w-full">
                  <div className="bg-gray-900_02 border border-solid flex flex-col gray_800_gray_800_00_border36 items-center justify-center px-4 py-5 rounded-[10px] w-full">
                    <Text
                      className="text-base text-center text-white-A700 w-auto"
                      size="txtInterMedium16"
                    >
                      Navigation Bar
                    </Text>
                  </div>
                  <Line className="bg-blue_gray-900 h-[38px] w-px" />
                  <div className="bg-gray-900_02 border border-solid flex flex-col gray_800_gray_800_00_border37 items-center justify-center px-4 py-5 rounded-[10px] w-full">
                    <Text
                      className="text-base text-center text-white-A700 w-auto"
                      size="txtInterMedium16"
                    >
                      Contact Form
                    </Text>
                  </div>
                  <Line className="bg-blue_gray-900 h-[38px] w-px" />
                  <div className="bg-gray-900_02 border border-solid flex flex-col gray_800_gray_800_00_border38 items-center justify-center px-4 py-5 rounded-[10px] w-full">
                    <Text
                      className="text-base text-center text-white-A700 w-auto"
                      size="txtInterMedium16"
                    >
                      FAQ’s
                    </Text>
                  </div>
                  <Line className="bg-blue_gray-900 h-[38px] w-px" />
                  <div className="bg-gray-900_02 border border-solid flex flex-col gray_800_gray_800_00_border39 items-center justify-center px-4 py-5 rounded-[10px] w-full">
                    <Text
                      className="text-base text-center text-white-A700 w-auto"
                      size="txtInterMedium16"
                    >
                      CTA
                    </Text>
                  </div>
                  <Line className="bg-blue_gray-900 h-[38px] w-px" />
                  <Button
                    className="bg-transparent border border-solid cursor-pointer font-medium gray_800_gray_800_00_border40 rounded-[10px] text-base text-center w-full"
                    shape="round"
                    color="gray_900_02"
                    size="xl"
                    variant="fill"
                  >
                    Footer
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col gap-px items-center justify-start w-full">
                  <Button
                    className="cursor-pointer font-medium leading-[normal] rounded-[10px] text-center text-xl w-full"
                    shape="round"
                    color="red_A700"
                    size="lg"
                    variant="fill"
                  >
                    Upgrade Subscription
                  </Button>
                  <Img
                    className="h-[79px] w-full"
                    src="images/img_container.svg"
                    alt="container"
                  />
                </div>
                <div className="bg-gray-900_03 flex flex-col items-center justify-center p-5 rounded-bl-[12px] rounded-br-[12px] w-full">
                  <div className="bg-gray-900_02 border border-solid flex flex-col gray_800_gray_800_00_border41 items-center justify-center px-4 py-5 rounded-[10px] w-full">
                    <Text
                      className="text-base text-center text-white-A700 w-auto"
                      size="txtInterMedium16"
                    >
                      Navigation Bar
                    </Text>
                  </div>
                  <Line className="bg-blue_gray-900 h-[38px] w-px" />
                  <div className="bg-gray-900_02 border border-solid flex flex-col gray_800_gray_800_00_border42 items-center justify-center px-4 py-5 rounded-[10px] w-full">
                    <Text
                      className="text-base text-center text-white-A700 w-auto"
                      size="txtInterMedium16"
                    >
                      Plans
                    </Text>
                  </div>
                  <Line className="bg-blue_gray-900 h-[38px] w-px" />
                  <div className="bg-gray-900_02 border border-solid flex flex-col gray_800_gray_800_00_border43 items-center justify-center px-4 py-5 rounded-[10px] w-full">
                    <Text
                      className="text-base text-center text-white-A700 w-auto"
                      size="txtInterMedium16"
                    >
                      Features & Comparison
                    </Text>
                  </div>
                  <Line className="bg-blue_gray-900 h-[38px] w-px" />
                  <div className="bg-gray-900_02 border border-solid flex flex-col gray_800_gray_800_00_border44 items-center justify-center px-4 py-5 rounded-[10px] w-full">
                    <Text
                      className="text-base text-center text-white-A700 w-auto"
                      size="txtInterMedium16"
                    >
                      CTA
                    </Text>
                  </div>
                  <Line className="bg-blue_gray-900 h-[38px] w-px" />
                  <Button
                    className="bg-transparent border border-solid cursor-pointer font-medium gray_800_gray_800_00_border45 rounded-[10px] text-base text-center w-full"
                    shape="round"
                    color="gray_900_02"
                    size="xl"
                    variant="fill"
                  >
                    Footer
                  </Button>
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default InformationAboutTheTemplatePage;
