import React from "react";

import { Button, Img, Line, List, PagerIndicator, Text } from "components";

const IconsPage = () => {
  return (
    <>
      <div className="bg-gray-900_01 flex flex-col font-manrope sm:gap-10 md:gap-10 gap-[149px] items-center justify-start mx-auto pb-[177px] w-full">
        <div className="h-[547px] md:px-5 relative w-full">
          <Img
            className="h-[547px] m-auto object-cover w-full"
            src="images/img_image_547x1920.png"
            alt="image"
          />
          <div className="absolute flex flex-row items-center justify-center right-[36%] top-[39%] w-auto">
            <Line className="bg-gray-500 h-0.5 rotate-[180deg] w-[13%]" />
            <Button
              className="bg-transparent border border-solid cursor-pointer font-semibold gray_400_01_blue_gray_700_00_border2 leading-[normal] min-w-[279px] rounded-[41px] sm:text-[30.369999999999997px] md:text-[32.37px] text-[34.37px] text-center underline"
              color="gray_900_02"
              size="lg"
              variant="fill"
            >
              By Produce UI
            </Button>
          </div>
        </div>
        <div className="flex flex-col font-inter md:gap-10 gap-[100px] items-start justify-start max-w-[1680px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[18px] items-start justify-start md:pr-10 sm:pr-5 pr-[300px] w-full">
            <Text
              className="sm:text-3xl md:text-[32px] text-[34px] text-white-A700 w-full"
              size="txtInterSemiBold34"
            >
              ✨ Icons Used In The Template
            </Text>
            <Text
              className="text-gray-300 text-lg w-full"
              size="txtInterRegular18"
            >
              <span className="text-gray-300 font-inter text-left font-normal">
                The icons listed below are from Heroicons.{" "}
              </span>
              <span className="text-gray-300 font-inter text-left font-normal">
                Browse all icons on{" "}
              </span>
              <a
                href="javascript:"
                className="text-gray-300 font-inter text-left font-bold underline"
              >
                heroicons.com
              </a>
            </Text>
          </div>
          <List
            className="bg-black-900 border border-gray-900 border-solid sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-start p-5 rounded-[12px] w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  academic-cap
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  adjustments-horizontal
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  adjustments-vertical
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons.svg"
                  alt="icons_Three"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  archive-box
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_white_a700.svg"
                  alt="icons_Four"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  archive-box-arrow-down
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_white_a700_24x116.svg"
                  alt="icons_Five"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  archive-box-x-mark
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_24x116.svg"
                  alt="icons_Six"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  arrow-down
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_1.svg"
                  alt="icons_Seven"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  arrow-down-circle
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_2.svg"
                  alt="icons_Eight"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  arrow-down-left
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_3.svg"
                  alt="icons_Nine"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  arrow-down-on-square
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_4.svg"
                  alt="icons_Ten"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  arrow-down-on-square-stack
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_5.svg"
                  alt="icons_Eleven"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  arrow-down-right
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_6.svg"
                  alt="icons_Twelve"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  arrow-down-tray
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_7.svg"
                  alt="icons_Thirteen"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  arrow-left
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_8.svg"
                  alt="icons_Fourteen"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  arrow-left-circle
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_9.svg"
                  alt="icons_Fifteen"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  arrow-left-on-rectangle
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_24x116.svg"
                  alt="icons_Sixteen"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  arrow-long-down
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_10.svg"
                  alt="icons_Seventeen"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  arrow-long-left
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_11.svg"
                  alt="icons_Eighteen"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  arrow-long-right
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_12.svg"
                  alt="icons_Nineteen"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  arrow-long-up
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_13.svg"
                  alt="icons_Twenty"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  arrow-path
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_14.svg"
                  alt="icons_TwentyOne"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  arrow-path-rounded-square
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_15.svg"
                  alt="icons_TwentyTwo"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  arrow-right
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_1.svg"
                  alt="icons_TwentyThree"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  arrow-right-circle
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_16.svg"
                  alt="icons_TwentyFour"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  arrow-right-on-rectangle
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_24x116.svg"
                  alt="icons_TwentyFive"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  arrow-small-down
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_24x116.svg"
                  alt="icons_TwentySix"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  arrow-small-left
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_24x116.svg"
                  alt="icons_TwentySeven"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  arrow-small-right
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_24x116.svg"
                  alt="icons_TwentyEight"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  arrow-small-up
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_17.svg"
                  alt="icons_TwentyNine"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  arrow-top-right-on-square
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_18.svg"
                  alt="icons_Thirty"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  arrow-trending-down
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_19.svg"
                  alt="icons_ThirtyOne"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  arrow-trending-up
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_20.svg"
                  alt="icons_ThirtyTwo"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  arrow-up
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_8.svg"
                  alt="icons_ThirtyThree"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  arrow-up-circle
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_21.svg"
                  alt="icons_ThirtyFour"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  arrow-up-left
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_22.svg"
                  alt="icons_ThirtyFive"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  arrow-up-on-square
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_23.svg"
                  alt="icons_ThirtySix"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  arrow-up-on-square-stack
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_24.svg"
                  alt="icons_ThirtySeven"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  arrow-up-right
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_25.svg"
                  alt="icons_ThirtyEight"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  arrow-up-tray
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_26.svg"
                  alt="icons_ThirtyNine"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  arrow-uturn-down
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_27.svg"
                  alt="icons_Forty"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  arrow-uturn-left
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_28.svg"
                  alt="icons_FortyOne"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  arrow-uturn-right
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  arrow-uturn-up
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_29.svg"
                  alt="icons_FortyThree"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  arrows-pointing-in
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_30.svg"
                  alt="icons_FortyFour"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  arrows-pointing-in
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_31.svg"
                  alt="icons_FortyFive"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  arrows-right-left
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_32.svg"
                  alt="icons_FortySix"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  arrows-up-down
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  at-symbol
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_33.svg"
                  alt="icons_FortyEight"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  backspace
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_34.svg"
                  alt="icons_FortyNine"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  backward
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  banknotes
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_35.svg"
                  alt="icons_FiftyOne"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  bars-2
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_36.svg"
                  alt="icons_FiftyTwo"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  bars-3
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_37.svg"
                  alt="icons_FiftyThree"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  bars-3-bottom-left
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_37.svg"
                  alt="icons_FiftyFour"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  bars-3-bottom-right
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  bars-3-center-left
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_38.svg"
                  alt="icons_FiftySix"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  bars-4
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_39.svg"
                  alt="icons_FiftySeven"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  bars-arrow-down
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_40.svg"
                  alt="icons_FiftyEight"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  bars-arrow-up
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_41.svg"
                  alt="icons"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  battery-0
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  battery-100
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_42.svg"
                  alt="icons_Two"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  battery-50
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_43.svg"
                  alt="icons_Three"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  beaker
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  bell
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  bell-alert
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_44.svg"
                  alt="icons_Six"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  bell-slash
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_45.svg"
                  alt="icons_Seven"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  bell-snooze
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_46.svg"
                  alt="icons_Eight"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  bolt
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_47.svg"
                  alt="icons_Nine"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  bolt-slash
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  book-open
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  bookmark
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_48.svg"
                  alt="icons_Twelve"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  bookmark-slash
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  bookmark-square
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  briefcase
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  bug-ant
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_49.svg"
                  alt="icons_Sixteen"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  building-library
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  building-office
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  building-office-2
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  building-storefront
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  cake
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  calculator
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_50.svg"
                  alt="icons_TwentyTwo"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  calendar
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  calendar-days
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  camera
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_51.svg"
                  alt="icons_TwentyFive"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  chart-bar
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_52.svg"
                  alt="icons_TwentySix"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  chart-bar-square
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  chart-pie
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_53.svg"
                  alt="icons_TwentyEight"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  chat-bubble-bottom-center
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  chat-bubble-bottom-center-text
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_54.svg"
                  alt="icons_Thirty"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  chat-bubble-left
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  chat-bubble-left-ellipsis
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_55.svg"
                  alt="icons_ThirtyTwo"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  chat-bubble-left-right
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  chat-bubble-oval-left
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  chat-bubble-oval-left-ellipsis
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_56.svg"
                  alt="icons_ThirtyFive"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  check
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  check-badge
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  check-circle
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_57.svg"
                  alt="icons_ThirtyEight"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  chevron-double-down
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_58.svg"
                  alt="icons_ThirtyNine"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  chevron-double-left
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_59.svg"
                  alt="icons_Forty"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  chevron-double-right
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_60.svg"
                  alt="icons_FortyOne"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  chevron-double-up
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_61.svg"
                  alt="icons_FortyTwo"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  chevron-down
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_62.svg"
                  alt="icons_FortyThree"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  chevron-left
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_63.svg"
                  alt="icons_FortyFour"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  chevron-right
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_64.svg"
                  alt="icons_FortyFive"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  chevron-up
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_65.svg"
                  alt="icons_FortySix"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  chevron-up-down
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  circle-stack
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  clipboard
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  clipboard-document
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_66.svg"
                  alt="icons_Fifty"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  clipboard-document-check
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  clipboard-document-list
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  clock
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  cloud
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_67.svg"
                  alt="icons_FiftyFour"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  cloud-arrow-down
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_68.svg"
                  alt="icons_FiftyFive"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  cloud-arrow-up
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_69.svg"
                  alt="icons_FiftySix"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  code-bracket
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_70.svg"
                  alt="icons_FiftySeven"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  code-bracket-square
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  cog
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  cog-6-tooth
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  cog-8-tooth
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_71.svg"
                  alt="icons_Two"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  command-line
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_72.svg"
                  alt="icons_Three"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  computer-desktop
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  cpu-chip
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  credit-card
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_73.svg"
                  alt="icons_Six"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  cube
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_74.svg"
                  alt="icons_Seven"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  cube-transparent
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  currency-bangladeshi
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  currency-dollar
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  currency-euro
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  currency-pound
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  currency-rupee
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_75.svg"
                  alt="icons_Thirteen"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  currency-yen
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_76.svg"
                  alt="icons_Fourteen"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  cursor-arrow-rays
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  cursor-arrow-ripple
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  device-phone-mobile
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_77.svg"
                  alt="icons_Seventeen"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  device-tablet
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  document
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_78.svg"
                  alt="icons_Nineteen"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  document-arrow-down
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_79.svg"
                  alt="icons_Twenty"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  document-arrow-up
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  document-chart-bar
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_80.svg"
                  alt="icons_TwentyTwo"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  document-check
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  document-duplicate
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  document-magnifying-glass
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_81.svg"
                  alt="icons_TwentyFive"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  document-minus
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  document-plus
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  document-text
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  ellipsis-horizontal
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  ellipsis-horizontal-circle
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  ellipsis-vertical
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_82.svg"
                  alt="icons_ThirtyOne"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  envelope
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_83.svg"
                  alt="icons_ThirtyTwo"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  envelope-open
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  exclamation-circle
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  exclamation-triangle
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  eye
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_84.svg"
                  alt="icons_ThirtySix"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  eye-dropper
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_85.svg"
                  alt="icons_ThirtySeven"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  eye-slash
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  face-frown
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  face-smile
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_86.svg"
                  alt="icons_Forty"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  film
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  finger-print
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  fire
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_87.svg"
                  alt="icons_FortyThree"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  flag
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_88.svg"
                  alt="icons_FortyFour"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  folder
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_89.svg"
                  alt="icons_FortyFive"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  folder-arrow-down
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_90.svg"
                  alt="icons_FortySix"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  folder-minus
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_91.svg"
                  alt="icons_FortySeven"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  folder-open
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_92.svg"
                  alt="icons_FortyEight"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  folder-plus
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_93.svg"
                  alt="icons_FortyNine"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  forward
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_94.svg"
                  alt="icons_Fifty"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  funnel
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700"
                  size="txtInterRegular17"
                >
                  gif
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  gift
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  gift-top
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  globe-alt
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  globe-americas
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  globe-asia-australia
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  globe-europe-africa
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_95.svg"
                  alt="icons"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  hand-raised
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  hand-thumb-down
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_96.svg"
                  alt="icons_Two"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  hand-thumb-up
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_97.svg"
                  alt="icons_Three"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  hashtag
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  heart
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_98.svg"
                  alt="icons_Five"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  home
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_99.svg"
                  alt="icons_Six"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  home-modern
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  identification
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_100.svg"
                  alt="icons_Eight"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  inbox
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_101.svg"
                  alt="icons_Nine"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  inbox-arrow-down
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_102.svg"
                  alt="icons_Ten"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  inbox-stack
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  information-circle
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  key
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_103.svg"
                  alt="icons_Thirteen"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  language
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_104.svg"
                  alt="icons_Fourteen"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  lifebuoy
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  light-bulb
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_105.svg"
                  alt="icons_Sixteen"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  link
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  list-bullet
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  lock-closed
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  lock-open
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_106.svg"
                  alt="icons_Twenty"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  magnifying-glass
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_107.svg"
                  alt="icons_TwentyOne"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  magnifying-glass-circle
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_108.svg"
                  alt="icons_TwentyTwo"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  magnifying-glass-minus
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_109.svg"
                  alt="icons_TwentyThree"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  magnifying-glass-plus
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_110.svg"
                  alt="icons_TwentyFour"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  map
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  map-pin
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_111.svg"
                  alt="icons_TwentySix"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  megaphone
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  microphone
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_112.svg"
                  alt="icons_TwentyEight"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  minus
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  minus-circle
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 bg-white-A700 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  minus-small
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  moon
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_113.svg"
                  alt="icons_ThirtyTwo"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  musical-note
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_114.svg"
                  alt="icons_ThirtyThree"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  newspaper
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  no-symbol
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_115.svg"
                  alt="icons_ThirtyFive"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  paint-brush
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_116.svg"
                  alt="icons_ThirtySix"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  paper-airplane
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_117.svg"
                  alt="icons_ThirtySeven"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  paper-clip
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_118.svg"
                  alt="icons_ThirtyEight"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  pause
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  pause-circle
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_119.svg"
                  alt="icons_Forty"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  pencil
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_120.svg"
                  alt="icons_FortyOne"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  pencil-square
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_121.svg"
                  alt="icons_FortyTwo"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  phone
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_122.svg"
                  alt="icons_FortyThree"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  phone-arrow-down-left
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_123.svg"
                  alt="icons_FortyFour"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  phone-arrow-up-right
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_124.svg"
                  alt="icons_FortyFive"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  phone-x-mark
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  photo
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_125.svg"
                  alt="icons_FortySeven"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  play
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  play-circle
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_126.svg"
                  alt="icons_FortyNine"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  play-pause
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  plus
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  plus-circle
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  plus-small
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_127.svg"
                  alt="icons_FiftyThree"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  power
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_128.svg"
                  alt="icons_FiftyFour"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  presentation-chart-bar
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_129.svg"
                  alt="icons_FiftyFive"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  presentation-chart-line
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  printer
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  puzzle-piece
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  qr-code
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  question-mark-circle
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_130.svg"
                  alt="icons_Two"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  queue-list
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  radio
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_131.svg"
                  alt="icons_Four"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  receipt-percent
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_132.svg"
                  alt="icons_Five"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  receipt-refund
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_51.svg"
                  alt="icons_Six"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  rectangle-group
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  rectangle-stack
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  rocket-launch
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  rss
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_133.svg"
                  alt="icons_Ten"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  scale
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_134.svg"
                  alt="icons_Eleven"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  scissors
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  server
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  server-stack
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_135.svg"
                  alt="icons_Fourteen"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  share
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  shield-check
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  shield-exclamation
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_136.svg"
                  alt="icons_Seventeen"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  shopping-bag
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  shopping-cart
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  signal
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  signal-slash
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  sparkles
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_137.svg"
                  alt="icons_TwentyTwo"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  speaker-wave
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_138.svg"
                  alt="icons_TwentyThree"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  speaker-x-mark
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  square-2-stack
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  squares-2x2
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  squares-plus
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_139.svg"
                  alt="icons_TwentySeven"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  square-3-stack-3d
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_140.svg"
                  alt="icons_TwentyEight"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  star
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  stop
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  stop-circle
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_141.svg"
                  alt="icons_ThirtyOne"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  sun
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  swatch
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_142.svg"
                  alt="icons_ThirtyThree"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  table-cells
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  tag
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  ticket
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_143.svg"
                  alt="icons_ThirtySix"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  trash
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  trophy
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  truck
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  tv
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  user
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  user-circle
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  user-group
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  user-minus
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  user-plus
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  users
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_144.svg"
                  alt="icons_FortySix"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  variable
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_145.svg"
                  alt="icons_FortySeven"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  video-camera
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_146.svg"
                  alt="icons_FortyEight"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  video-camera-slash
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  view-columns
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  viewfinder-dot
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  wallet
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  wifi
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  window
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  wrench
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <PagerIndicator
                  className="flex gap-6 h-6 items-end justify-start w-[116px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-6 w-6"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer h-5 bg-white-A700 w-5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  wrench-screwdriver
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_147.svg"
                  alt="icons_FiftySix"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  x-circle
                </Text>
              </div>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col gap-6 items-center justify-center px-5 py-10 rounded-lg w-full">
                <Img
                  className="h-6 w-[116px]"
                  src="images/img_icons_148.svg"
                  alt="icons_FiftySeven"
                />
                <Text
                  className="text-[17px] text-center text-white-A700 w-full"
                  size="txtInterRegular17"
                >
                  x-mark
                </Text>
              </div>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

export default IconsPage;
