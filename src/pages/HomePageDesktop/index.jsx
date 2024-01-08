import React from "react";

import { Button, Img, Line, List, PagerIndicator, Text } from "components";
import Footer from "components/Footer";

const HomePageDesktopPage = () => {
  return (
    <>
      <div className="bg-gray-900_01 flex flex-col font-manrope items-center justify-start mx-auto w-full">
        <div className="h-[1092px] sm:h-[1960px] md:h-[860px] md:px-5 relative w-full">
          <div className="flex flex-col m-auto w-[1920px] md:w-full">
            <div className="flex sm:h-[1960px] h-[860px] justify-end mx-auto w-full">
              <div className="absolute flex-1 gap-5 grid sm:grid-cols-1 md:grid-cols-5 grid-cols-9 h-full inset-x-[0] items-center justify-between mx-auto top-[0] w-full">
                <Img
                  className="flex-1 md:flex-none md:h-[200px] sm:h-auto h-full max-h-[200px] object-cover rounded-[12px]"
                  src="images/img_image.png"
                  alt="image"
                />
                <Img
                  className="flex-1 md:flex-none md:h-[200px] sm:h-auto h-full max-h-[200px] object-cover rounded-[12px]"
                  src="images/img_image_200x195.png"
                  alt="image_One"
                />
                <Img
                  className="flex-1 md:flex-none md:h-[200px] sm:h-auto h-full max-h-[200px] object-cover rounded-[12px]"
                  src="images/img_image_1.png"
                  alt="image_Two"
                />
                <Img
                  className="flex-1 md:flex-none md:h-[200px] sm:h-auto h-full max-h-[200px] object-cover rounded-[12px]"
                  src="images/img_image_2.png"
                  alt="image_Three"
                />
                <Img
                  className="flex-1 md:flex-none md:h-[200px] sm:h-auto h-full max-h-[200px] object-cover rounded-[12px]"
                  src="images/img_image_3.png"
                  alt="image_Four"
                />
                <Img
                  className="flex-1 md:flex-none md:h-[200px] sm:h-auto h-full max-h-[200px] object-cover rounded-[12px]"
                  src="images/img_image_4.png"
                  alt="image_Five"
                />
                <Img
                  className="flex-1 md:flex-none md:h-[200px] sm:h-auto h-full max-h-[200px] object-cover rounded-[12px]"
                  src="images/img_image_5.png"
                  alt="image_Six"
                />
                <Img
                  className="flex-1 md:flex-none md:h-[200px] sm:h-auto h-full max-h-[200px] object-cover rounded-[12px]"
                  src="images/img_image_6.png"
                  alt="image_Seven"
                />
                <Img
                  className="flex-1 md:flex-none md:h-[200px] sm:h-auto h-full max-h-[200px] object-cover rounded-[12px]"
                  src="images/img_image_7.png"
                  alt="image_Eight"
                />
              </div>
              <div className="absolute flex-1 gap-5 grid sm:grid-cols-1 md:grid-cols-5 grid-cols-9 h-full inset-x-[0] items-center justify-between mx-auto top-[26%] w-full">
                <Img
                  className="flex-1 md:flex-none md:h-[200px] sm:h-auto h-full max-h-[200px] object-cover rounded-[12px]"
                  src="images/img_image_8.png"
                  alt="image_Nine"
                />
                <Img
                  className="flex-1 md:flex-none md:h-[200px] sm:h-auto h-full max-h-[200px] object-cover rounded-[12px]"
                  src="images/img_image_9.png"
                  alt="image_Ten"
                />
                <Img
                  className="flex-1 md:flex-none md:h-[200px] sm:h-auto h-full max-h-[200px] object-cover rounded-[12px]"
                  src="images/img_image_10.png"
                  alt="image_Eleven"
                />
                <Img
                  className="flex-1 md:flex-none md:h-[200px] sm:h-auto h-full max-h-[200px] object-cover rounded-[12px]"
                  src="images/img_image_11.png"
                  alt="image_Twelve"
                />
                <Img
                  className="flex-1 md:flex-none md:h-[200px] sm:h-auto h-full max-h-[200px] object-cover rounded-[12px]"
                  src="images/img_image_12.png"
                  alt="image_Thirteen"
                />
                <Img
                  className="flex-1 md:flex-none md:h-[200px] sm:h-auto h-full max-h-[200px] object-cover rounded-[12px]"
                  src="images/img_image_13.png"
                  alt="image_Fourteen"
                />
                <Img
                  className="flex-1 md:flex-none md:h-[200px] sm:h-auto h-full max-h-[200px] object-cover rounded-[12px]"
                  src="images/img_image_14.png"
                  alt="image_Fifteen"
                />
                <Img
                  className="flex-1 md:flex-none md:h-[200px] sm:h-auto h-full max-h-[200px] object-cover rounded-[12px]"
                  src="images/img_image_15.png"
                  alt="image_Sixteen"
                />
                <Img
                  className="flex-1 md:flex-none md:h-[200px] sm:h-auto h-full max-h-[200px] object-cover rounded-[12px]"
                  src="images/img_image_16.png"
                  alt="image_Seventeen"
                />
              </div>
              <div className="absolute bottom-[26%] flex-1 gap-5 grid sm:grid-cols-1 md:grid-cols-5 grid-cols-9 h-full inset-x-[0] items-center justify-between mx-auto w-full">
                <Img
                  className="flex-1 md:flex-none md:h-[200px] sm:h-auto h-full max-h-[200px] object-cover rounded-[12px]"
                  src="images/img_image_17.png"
                  alt="image_Eighteen"
                />
                <Img
                  className="flex-1 md:flex-none md:h-[200px] sm:h-auto h-full max-h-[200px] object-cover rounded-[12px]"
                  src="images/img_image_18.png"
                  alt="image_Nineteen"
                />
                <Img
                  className="flex-1 md:flex-none md:h-[200px] sm:h-auto h-full max-h-[200px] object-cover rounded-[12px]"
                  src="images/img_image_19.png"
                  alt="image_Twenty"
                />
                <Img
                  className="flex-1 md:flex-none md:h-[200px] sm:h-auto h-full max-h-[200px] object-cover rounded-[12px]"
                  src="images/img_image_20.png"
                  alt="image_TwentyOne"
                />
                <Img
                  className="flex-1 md:flex-none md:h-[200px] sm:h-auto h-full max-h-[200px] object-cover rounded-[12px]"
                  src="images/img_image_21.png"
                  alt="image_TwentyTwo"
                />
                <Img
                  className="flex-1 md:flex-none md:h-[200px] sm:h-auto h-full max-h-[200px] object-cover rounded-[12px]"
                  src="images/img_image_22.png"
                  alt="image_TwentyThree"
                />
                <Img
                  className="flex-1 md:flex-none md:h-[200px] sm:h-auto h-full max-h-[200px] object-cover rounded-[12px]"
                  src="images/img_image_23.png"
                  alt="image_TwentyFour"
                />
                <Img
                  className="flex-1 md:flex-none md:h-[200px] sm:h-auto h-full max-h-[200px] object-cover rounded-[12px]"
                  src="images/img_image_24.png"
                  alt="image_TwentyFive"
                />
                <Img
                  className="flex-1 md:flex-none md:h-[200px] sm:h-auto h-full max-h-[200px] object-cover rounded-[12px]"
                  src="images/img_image_25.png"
                  alt="image_TwentySix"
                />
              </div>
              <div className="flex-1 gap-5 grid sm:grid-cols-1 md:grid-cols-5 grid-cols-9 h-full items-center justify-between mt-auto mx-auto w-full">
                <Img
                  className="flex-1 md:flex-none md:h-[200px] sm:h-auto h-full max-h-[200px] object-cover rounded-[12px]"
                  src="images/img_image_26.png"
                  alt="image_TwentySeven"
                />
                <Img
                  className="flex-1 md:flex-none md:h-[200px] sm:h-auto h-full max-h-[200px] object-cover rounded-[12px]"
                  src="images/img_image_27.png"
                  alt="image_TwentyEight"
                />
                <Img
                  className="flex-1 md:flex-none md:h-[200px] sm:h-auto h-full max-h-[200px] object-cover rounded-[12px]"
                  src="images/img_image_28.png"
                  alt="image_TwentyNine"
                />
                <Img
                  className="flex-1 md:flex-none md:h-[200px] sm:h-auto h-full max-h-[200px] object-cover rounded-[12px]"
                  src="images/img_image_29.png"
                  alt="image_Thirty"
                />
                <Img
                  className="flex-1 md:flex-none md:h-[200px] sm:h-auto h-full max-h-[200px] object-cover rounded-[12px]"
                  src="images/img_image_30.png"
                  alt="image_ThirtyOne"
                />
                <Img
                  className="flex-1 md:flex-none md:h-[200px] sm:h-auto h-full max-h-[200px] object-cover rounded-[12px]"
                  src="images/img_image_31.png"
                  alt="image_ThirtyTwo"
                />
                <Img
                  className="flex-1 md:flex-none md:h-[200px] sm:h-auto h-full max-h-[200px] object-cover rounded-[12px]"
                  src="images/img_image_32.png"
                  alt="image_ThirtyThree"
                />
                <Img
                  className="flex-1 md:flex-none md:h-[200px] sm:h-auto h-full max-h-[200px] object-cover rounded-[12px]"
                  src="images/img_image_33.png"
                  alt="image_ThirtyFour"
                />
                <Img
                  className="flex-1 md:flex-none md:h-[200px] sm:h-auto h-full max-h-[200px] object-cover rounded-[12px]"
                  src="images/img_image_34.png"
                  alt="image_ThirtyFive"
                />
              </div>
              <div className="absolute inset-[0] justify-center m-auto w-full">
                <div className="m-auto w-full">
                  <div className="m-auto w-full">
                    <Img
                      className="absolute h-[860px] inset-[0] justify-center m-auto object-cover rounded-[12px] w-[1920px] md:w-full"
                      src="images/img_image_860x1920.png"
                      alt="image_ThirtySix"
                    />
                    <div className="absolute bg-gradient1  h-[581px] inset-x-[0] mx-auto top-[0] w-full"></div>
                  </div>
                  <div className="absolute bg-gradient2  bottom-[0] h-[581px] inset-x-[0] mx-auto w-full"></div>
                </div>
                <Img
                  className="absolute h-[470px] inset-[0] justify-center m-auto object-cover w-[470px]"
                  src="images/img_abstractdesign.png"
                  alt="abstractdesign"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[50px] items-center justify-start mt-[-64px] mx-auto md:px-10 sm:px-5 px-[412px] w-full z-[1]">
              <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                <Text
                  className="sm:text-[44px] md:text-[50px] text-[58px] text-center text-white-A700 w-full"
                  size="txtManropeBold58"
                >
                  The Best Streaming Experience
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[1096px] md:max-w-full text-center text-gray-500 text-lg"
                  size="txtManropeRegular18"
                >
                  StreamVibe is the best streaming experience for watching your
                  favorite movies and shows on demand, anytime, anywhere. With
                  StreamVibe, you can enjoy a wide variety of content, including
                  the latest blockbusters, classic movies, popular TV shows, and
                  more. You can also create your own watchlists, so you can
                  easily find the content you want to watch.
                </Text>
              </div>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[251px] rounded-lg"
                leftIcon={
                  <Img
                    className="h-7 mb-px mr-1"
                    src="images/img_icon.svg"
                    alt="Icon"
                  />
                }
                color="red_A700"
                size="lg"
                variant="fill"
              >
                <div className="font-semibold text-left text-lg">
                  Start Watching Now
                </div>
              </Button>
            </div>
          </div>
          <header className="absolute flex md:flex-col flex-row md:gap-10 inset-x-[0] items-center justify-between mx-auto md:px-10 sm:px-5 px-[162px] py-[30px] top-[0] w-full">
            <Img
              className="h-[60px] w-[199px]"
              src="images/img_logo.svg"
              alt="logo"
            />
            <ul className="bg-black-900 flex sm:flex-col flex-row gap-[30px] sm:hidden items-center justify-start outline outline-[4px] outline-gray-900_02 pl-2.5 pr-10 sm:pr-5 py-2.5 rounded-[12px] w-auto common-row-list">
              <li>
                <a href="javascript:">
                  <Button
                    className="!text-white-A700 border border-gray-900_03 border-solid cursor-pointer font-medium rounded-lg text-center text-lg"
                    color="gray_900_03"
                    size="lg"
                    variant="fill"
                  >
                    Home
                  </Button>
                </a>
              </li>
              <li>
                <a href="javascript:" className="text-gray-400 text-lg">
                  <Text size="txtManropeRegular18Gray400">Movies & Shows</Text>
                </a>
              </li>
              <li>
                <a href="javascript:" className="text-gray-400 text-lg">
                  <Text size="txtManropeRegular18Gray400">Support</Text>
                </a>
              </li>
              <li>
                <a href="javascript:" className="text-gray-400 text-lg">
                  <Text size="txtManropeRegular18Gray400">Subscriptions</Text>
                </a>
              </li>
            </ul>
            <Img
              className="h-[34px] w-[98px]"
              src="images/img_buttonscontainer.svg"
              alt="buttonscontaine"
            />
          </header>
        </div>
        <div className="flex flex-col md:gap-10 gap-20 items-start justify-start max-w-[1597px] mt-[200px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[100px] items-end justify-start w-full">
            <div className="flex flex-1 flex-col gap-3.5 items-start justify-start w-full">
              <Text
                className="md:text-4xl sm:text-[34px] text-[38px] text-white-A700 w-full"
                size="txtManropeBold38"
              >
                Explore our wide variety of categories
              </Text>
              <Text
                className="text-gray-500 text-lg w-full"
                size="txtManropeRegular18"
              >
                <>
                  Whether you&#39;re looking for a comedy to make you laugh, a
                  drama to make you think, or a documentary to learn something
                  new
                </>
              </Text>
            </div>
            <div className="bg-black-900 border border-gray-900_02 border-solid flex flex-row gap-4 items-center justify-start p-4 rounded-[12px] w-auto">
              <Button
                className="border border-gray-900_02 border-solid flex h-14 items-center justify-center rounded-lg w-14"
                color="gray_900_03"
                size="md"
                variant="fill"
              >
                <Img
                  className="h-7"
                  src="images/img_arrowleft.svg"
                  alt="arrowleft"
                />
              </Button>
              <PagerIndicator
                className="flex gap-[3px] h-1 items-start justify-start w-[81px]"
                count={4}
                activeCss="inline-block cursor-pointer h-1 bg-red-A700 w-[23px] rounded-sm"
                activeIndex={1}
                inactiveCss="inline-block cursor-pointer h-1 bg-blue_gray-900 w-4 rounded-sm"
                selectedWrapperCss="inline-block"
                unselectedWrapperCss="inline-block"
              />
              <Button
                className="border border-gray-900_02 border-solid flex h-14 items-center justify-center rounded-lg w-14"
                color="gray_900_03"
                size="md"
                variant="fill"
              >
                <Img
                  className="h-7"
                  src="images/img_arrowright_white_a700.svg"
                  alt="arrowright"
                />
              </Button>
            </div>
          </div>
          <List
            className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-start w-full"
            orientation="horizontal"
          >
            <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col items-start justify-start p-[30px] sm:px-5 rounded-[12px] w-full">
              <div className="h-[252px] md:h-auto relative w-full">
                <div className="flex flex-1 flex-row gap-[5px] h-full items-center justify-evenly mx-auto w-full">
                  <Img
                    className="flex-1 md:flex-none md:h-[123px] sm:h-auto h-full max-h-[123px] object-cover rounded-[10px]"
                    src="images/img_image_123x115.png"
                    alt="image"
                  />
                  <Img
                    className="flex-1 md:flex-none md:h-[123px] sm:h-auto h-full max-h-[123px] object-cover rounded-[10px]"
                    src="images/img_image_35.png"
                    alt="image_One"
                  />
                </div>
                <div className="flex flex-1 flex-row gap-[5px] h-full items-center justify-evenly mt-auto mx-auto w-full">
                  <Img
                    className="flex-1 md:flex-none md:h-[123px] sm:h-auto h-full max-h-[123px] object-cover rounded-[10px]"
                    src="images/img_image_36.png"
                    alt="image_Two"
                  />
                  <Img
                    className="flex-1 md:flex-none md:h-[123px] sm:h-auto h-full max-h-[123px] object-cover rounded-[10px]"
                    src="images/img_image_37.png"
                    alt="image_Three"
                  />
                </div>
                <div className="absolute bg-gradient3  h-[252px] inset-[0] justify-center m-auto w-full"></div>
              </div>
              <div className="flex flex-row items-center justify-between w-full">
                <Text
                  className="flex-1 text-lg text-white-A700 w-auto"
                  size="txtManropeSemiBold18"
                >
                  Action
                </Text>
                <Img
                  className="h-[30px] w-[30px]"
                  src="images/img_arrowleft.svg"
                  alt="arrowright"
                />
              </div>
            </div>
            <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col items-start justify-start p-[30px] sm:px-5 rounded-[12px] w-full">
              <div className="h-[252px] md:h-auto relative w-full">
                <div className="flex flex-1 flex-row gap-[5px] h-full items-center justify-evenly mx-auto w-full">
                  <Img
                    className="flex-1 md:flex-none md:h-[123px] sm:h-auto h-full max-h-[123px] object-cover rounded-[10px]"
                    src="images/img_image_38.png"
                    alt="image"
                  />
                  <Img
                    className="flex-1 md:flex-none md:h-[123px] sm:h-auto h-full max-h-[123px] object-cover rounded-[10px]"
                    src="images/img_image_39.png"
                    alt="image_One"
                  />
                </div>
                <div className="flex flex-1 flex-row gap-[5px] h-full items-center justify-evenly mt-auto mx-auto w-full">
                  <Img
                    className="flex-1 md:flex-none md:h-[123px] sm:h-auto h-full max-h-[123px] object-cover rounded-[10px]"
                    src="images/img_image_40.png"
                    alt="image_Two"
                  />
                  <Img
                    className="flex-1 md:flex-none md:h-[123px] sm:h-auto h-full max-h-[123px] object-cover rounded-[10px]"
                    src="images/img_image_41.png"
                    alt="image_Three"
                  />
                </div>
                <div className="absolute bg-gradient3  h-[252px] inset-[0] justify-center m-auto w-full"></div>
              </div>
              <div className="flex flex-row items-center justify-between w-full">
                <Text
                  className="flex-1 text-lg text-white-A700 w-auto"
                  size="txtManropeSemiBold18"
                >
                  Adventure
                </Text>
                <Img
                  className="h-[30px] w-[30px]"
                  src="images/img_arrowleft.svg"
                  alt="arrowright"
                />
              </div>
            </div>
            <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col items-start justify-start p-[30px] sm:px-5 rounded-[12px] w-full">
              <div className="h-[252px] md:h-auto relative w-full">
                <div className="flex flex-1 flex-row gap-[5px] h-full items-center justify-evenly mx-auto w-full">
                  <Img
                    className="flex-1 md:flex-none md:h-[123px] sm:h-auto h-full max-h-[123px] object-cover rounded-[10px]"
                    src="images/img_image_42.png"
                    alt="image"
                  />
                  <Img
                    className="flex-1 md:flex-none md:h-[123px] sm:h-auto h-full max-h-[123px] object-cover rounded-[10px]"
                    src="images/img_image_43.png"
                    alt="image_One"
                  />
                </div>
                <div className="flex flex-1 flex-row gap-[5px] h-full items-center justify-evenly mt-auto mx-auto w-full">
                  <Img
                    className="flex-1 md:flex-none md:h-[123px] sm:h-auto h-full max-h-[123px] object-cover rounded-[10px]"
                    src="images/img_image_44.png"
                    alt="image_Two"
                  />
                  <Img
                    className="flex-1 md:flex-none md:h-[123px] sm:h-auto h-full max-h-[123px] object-cover rounded-[10px]"
                    src="images/img_image_45.png"
                    alt="image_Three"
                  />
                </div>
                <div className="absolute bg-gradient3  h-[252px] inset-[0] justify-center m-auto w-full"></div>
              </div>
              <div className="flex flex-row items-center justify-between w-full">
                <Text
                  className="flex-1 text-lg text-white-A700 w-auto"
                  size="txtManropeSemiBold18"
                >
                  Comedy
                </Text>
                <Img
                  className="h-[30px] w-[30px]"
                  src="images/img_arrowleft.svg"
                  alt="arrowright"
                />
              </div>
            </div>
            <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col items-start justify-start p-[30px] sm:px-5 rounded-[12px] w-full">
              <div className="h-[252px] md:h-auto relative w-full">
                <div className="flex flex-1 flex-row gap-[5px] h-full items-center justify-between mx-auto w-full">
                  <Img
                    className="flex-1 md:flex-none md:h-[123px] sm:h-auto h-full max-h-[123px] object-cover rounded-[10px]"
                    src="images/img_image_46.png"
                    alt="image"
                  />
                  <Img
                    className="flex-1 md:flex-none md:h-[123px] sm:h-auto h-full max-h-[123px] object-cover rounded-[10px]"
                    src="images/img_image_47.png"
                    alt="image_One"
                  />
                </div>
                <div className="flex flex-1 flex-row gap-[5px] h-full items-center justify-between mt-auto mx-auto w-full">
                  <Img
                    className="flex-1 md:flex-none md:h-[123px] sm:h-auto h-full max-h-[123px] object-cover rounded-[10px]"
                    src="images/img_image_48.png"
                    alt="image_Two"
                  />
                  <Img
                    className="flex-1 md:flex-none md:h-[123px] sm:h-auto h-full max-h-[123px] object-cover rounded-[10px]"
                    src="images/img_image_49.png"
                    alt="image_Three"
                  />
                </div>
                <div className="absolute bg-gradient3  h-[252px] inset-[0] justify-center m-auto w-full"></div>
              </div>
              <div className="flex flex-row items-center justify-between w-full">
                <Text
                  className="flex-1 text-lg text-white-A700 w-auto"
                  size="txtManropeSemiBold18"
                >
                  Drama
                </Text>
                <Img
                  className="h-[30px] w-[30px]"
                  src="images/img_arrowleft.svg"
                  alt="arrowright"
                />
              </div>
            </div>
            <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col items-start justify-start p-[30px] sm:px-5 rounded-[12px] w-full">
              <div className="h-[252px] md:h-auto relative w-full">
                <div className="flex flex-1 flex-row gap-[5px] h-full items-center justify-between mx-auto w-full">
                  <Img
                    className="flex-1 md:flex-none md:h-[123px] sm:h-auto h-full max-h-[123px] object-cover rounded-[10px]"
                    src="images/img_image_50.png"
                    alt="image"
                  />
                  <Img
                    className="flex-1 md:flex-none md:h-[123px] sm:h-auto h-full max-h-[123px] object-cover rounded-[10px]"
                    src="images/img_image_51.png"
                    alt="image_One"
                  />
                </div>
                <div className="flex flex-1 flex-row gap-[5px] h-full items-center justify-between mt-auto mx-auto w-full">
                  <Img
                    className="flex-1 md:flex-none md:h-[123px] sm:h-auto h-full max-h-[123px] object-cover rounded-[10px]"
                    src="images/img_image_52.png"
                    alt="image_Two"
                  />
                  <Img
                    className="flex-1 md:flex-none md:h-[123px] sm:h-auto h-full max-h-[123px] object-cover rounded-[10px]"
                    src="images/img_image_53.png"
                    alt="image_Three"
                  />
                </div>
                <div className="absolute bg-gradient3  h-[252px] inset-[0] justify-center m-auto w-full"></div>
              </div>
              <div className="flex flex-row items-center justify-between w-full">
                <Text
                  className="flex-1 text-lg text-white-A700 w-auto"
                  size="txtManropeSemiBold18"
                >
                  Horror
                </Text>
                <Img
                  className="h-[30px] w-[30px]"
                  src="images/img_arrowleft.svg"
                  alt="arrowright"
                />
              </div>
            </div>
          </List>
        </div>
        <div className="flex flex-col md:gap-10 gap-20 items-start justify-start max-w-[1597px] mt-[150px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-3.5 items-start justify-start md:pr-10 sm:pr-5 pr-[300px] w-full">
            <Text
              className="md:text-4xl sm:text-[34px] text-[38px] text-white-A700 w-full"
              size="txtManropeBold38"
            >
              We Provide you streaming experience across various devices.
            </Text>
            <Text
              className="leading-[150.00%] max-w-[1297px] md:max-w-full text-gray-500 text-lg"
              size="txtManropeRegular18"
            >
              With StreamVibe, you can enjoy your favorite movies and TV shows
              anytime, anywhere. Our platform is designed to be compatible with
              a wide range of devices, ensuring that you never miss a moment of
              entertainment.
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <div className="md:gap-5 gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
              <div className="bg-gradient4  border border-gray-900 border-solid flex flex-1 flex-col gap-[30px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full">
                <div className="flex flex-row gap-4 items-center justify-start w-full">
                  <Button
                    className="border border-gray-900_02 border-solid flex h-[72px] items-center justify-center w-[72px]"
                    shape="round"
                    color="gray_900_01"
                    size="lg"
                    variant="fill"
                  >
                    <Img
                      className="h-10"
                      src="images/img_icon_red_a700.svg"
                      alt="icon"
                    />
                  </Button>
                  <Text
                    className="flex-1 text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                    size="txtManropeSemiBold24"
                  >
                    Smartphones
                  </Text>
                </div>
                <Text
                  className="leading-[150.00%] max-w-[412px] md:max-w-full text-gray-500 text-lg"
                  size="txtManropeRegular18"
                >
                  StreamVibe is optimized for both Android and iOS smartphones.
                  Download our app from the Google Play Store or the Apple App
                  Store
                </Text>
              </div>
              <div className="bg-gradient4  border border-gray-900 border-solid flex flex-1 flex-col gap-[30px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full">
                <div className="flex flex-row gap-4 items-center justify-start w-full">
                  <Button
                    className="border border-gray-900_02 border-solid flex flex-1 h-[72px] items-center justify-center w-[72px]"
                    shape="round"
                    color="gray_900_01"
                    size="lg"
                    variant="fill"
                  >
                    <Img
                      className="h-10"
                      src="images/img_icon_red_a700_72x72.svg"
                      alt="icon"
                    />
                  </Button>
                  <Text
                    className="flex-1 text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                    size="txtManropeSemiBold24"
                  >
                    Tablet
                  </Text>
                </div>
                <Text
                  className="leading-[150.00%] max-w-[412px] md:max-w-full text-gray-500 text-lg"
                  size="txtManropeRegular18"
                >
                  StreamVibe is optimized for both Android and iOS smartphones.
                  Download our app from the Google Play Store or the Apple App
                  Store
                </Text>
              </div>
              <div className="bg-gradient4  border border-gray-900 border-solid flex flex-1 flex-col gap-[30px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full">
                <div className="flex flex-row gap-4 items-center justify-start w-full">
                  <Button
                    className="border border-gray-900_02 border-solid flex h-[72px] items-center justify-center w-[72px]"
                    shape="round"
                    color="gray_900_01"
                    size="lg"
                    variant="fill"
                  >
                    <Img
                      className="h-10"
                      src="images/img_icon_72x72.svg"
                      alt="icon"
                    />
                  </Button>
                  <Text
                    className="flex-1 text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                    size="txtManropeSemiBold24"
                  >
                    Smart TV
                  </Text>
                </div>
                <Text
                  className="leading-[150.00%] max-w-[412px] md:max-w-full text-gray-500 text-lg"
                  size="txtManropeRegular18"
                >
                  StreamVibe is optimized for both Android and iOS smartphones.
                  Download our app from the Google Play Store or the Apple App
                  Store
                </Text>
              </div>
              <div className="bg-gradient4  border border-gray-900 border-solid flex flex-1 flex-col gap-[30px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full">
                <div className="flex flex-row gap-4 items-center justify-start w-full">
                  <Button
                    className="border border-gray-900_02 border-solid flex h-[72px] items-center justify-center w-[72px]"
                    shape="round"
                    color="gray_900_01"
                    size="lg"
                    variant="fill"
                  >
                    <Img
                      className="h-10"
                      src="images/img_icon_1.svg"
                      alt="icon"
                    />
                  </Button>
                  <Text
                    className="flex-1 text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                    size="txtManropeSemiBold24"
                  >
                    Laptops
                  </Text>
                </div>
                <Text
                  className="leading-[150.00%] max-w-[412px] md:max-w-full text-gray-500 text-lg"
                  size="txtManropeRegular18"
                >
                  StreamVibe is optimized for both Android and iOS smartphones.
                  Download our app from the Google Play Store or the Apple App
                  Store
                </Text>
              </div>
              <div className="bg-gradient4  border border-gray-900 border-solid flex flex-1 flex-col gap-[30px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full">
                <div className="flex flex-row gap-4 items-center justify-start w-full">
                  <Button
                    className="border border-gray-900_02 border-solid flex h-[72px] items-center justify-center w-[72px]"
                    shape="round"
                    color="gray_900_01"
                    size="lg"
                    variant="fill"
                  >
                    <Img
                      className="h-10"
                      src="images/img_icon_2.svg"
                      alt="icon"
                    />
                  </Button>
                  <Text
                    className="flex-1 text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                    size="txtManropeSemiBold24"
                  >
                    Gaming Consoles
                  </Text>
                </div>
                <Text
                  className="leading-[150.00%] max-w-[412px] md:max-w-full text-gray-500 text-lg"
                  size="txtManropeRegular18"
                >
                  StreamVibe is optimized for both Android and iOS smartphones.
                  Download our app from the Google Play Store or the Apple App
                  Store
                </Text>
              </div>
              <div className="bg-gradient4  border border-gray-900 border-solid flex flex-1 flex-col gap-[30px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full">
                <div className="flex flex-row gap-4 items-center justify-start w-full">
                  <Button
                    className="border border-gray-900_02 border-solid flex h-[72px] items-center justify-center w-[72px]"
                    shape="round"
                    color="gray_900_01"
                    size="lg"
                    variant="fill"
                  >
                    <Img
                      className="h-10"
                      src="images/img_icon_3.svg"
                      alt="icon"
                    />
                  </Button>
                  <Text
                    className="flex-1 text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                    size="txtManropeSemiBold24"
                  >
                    VR Headsets{" "}
                  </Text>
                </div>
                <Text
                  className="leading-[150.00%] max-w-[412px] md:max-w-full text-gray-500 text-lg"
                  size="txtManropeRegular18"
                >
                  StreamVibe is optimized for both Android and iOS smartphones.
                  Download our app from the Google Play Store or the Apple App
                  Store
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-20 items-center justify-start max-w-[1596px] mt-[150px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[100px] items-end justify-start w-full">
            <div className="flex flex-1 flex-col gap-3.5 items-start justify-start w-full">
              <Text
                className="md:text-4xl sm:text-[34px] text-[38px] text-white-A700 w-full"
                size="txtManropeBold38"
              >
                Frequently Asked Questions
              </Text>
              <Text
                className="text-gray-500 text-lg w-full"
                size="txtManropeRegular18"
              >
                <>
                  Got questions? We&#39;ve got answers! Check out our FAQ
                  section to find answers to the most common questions about
                  StreamVibe.
                </>
              </Text>
            </div>
            <Button
              className="cursor-pointer font-semibold min-w-[176px] rounded-lg text-center text-lg"
              color="red_A700"
              size="lg"
              variant="fill"
            >
              Ask a Question
            </Button>
          </div>
          <List
            className="sm:flex-col flex-row md:gap-10 gap-20 grid md:grid-cols-1 grid-cols-2 justify-start w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <div className="flex md:flex-col flex-row gap-5 items-start justify-start p-[34px] sm:px-5 w-full">
                <Button
                  className="border border-gray-900 border-solid cursor-pointer font-semibold leading-[normal] min-w-[62px] rounded-[10px] text-center text-xl"
                  shape="round"
                  color="gray_900_02"
                  size="lg"
                  variant="fill"
                >
                  01
                </Button>
                <div className="flex flex-1 flex-col gap-5 h-full items-start justify-start w-full">
                  <Text
                    className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-full"
                    size="txtManropeMedium22"
                  >
                    What is StreamVibe?
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[558px] md:max-w-full text-gray-500 text-lg"
                    size="txtManropeRegular18"
                  >
                    StreamVibe is a streaming service that allows you to watch
                    movies and shows on demand.
                  </Text>
                </div>
                <Img
                  className="h-[30px] w-[30px]"
                  src="images/img_icon_white_a700.svg"
                  alt="icon"
                />
              </div>
              <Line className="bg-gradient5  h-px w-full" />
              <div className="flex sm:flex-col flex-row gap-6 items-center justify-start sm:px-5 px-[34px] py-[30px] w-full">
                <Button
                  className="border border-gray-900 border-solid cursor-pointer font-semibold leading-[normal] min-w-[65px] rounded-[10px] text-center text-xl"
                  shape="round"
                  color="gray_900_02"
                  size="lg"
                  variant="fill"
                >
                  02
                </Button>
                <Text
                  className="flex-1 text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                  size="txtManropeMedium22"
                >
                  How much does StreamVibe cost?
                </Text>
                <Img
                  className="h-[30px] w-[30px]"
                  src="images/img_icon_white_a700_30x30.svg"
                  alt="icon_One"
                />
              </div>
              <Line className="bg-gradient5  h-px w-full" />
              <div className="flex sm:flex-col flex-row gap-6 items-center justify-start sm:px-5 px-[34px] py-[30px] w-full">
                <Button
                  className="border border-gray-900 border-solid cursor-pointer font-semibold leading-[normal] min-w-[65px] rounded-[10px] text-center text-xl"
                  shape="round"
                  color="gray_900_02"
                  size="lg"
                  variant="fill"
                >
                  03
                </Button>
                <Text
                  className="flex-1 text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                  size="txtManropeMedium22"
                >
                  What content is available on StreamVibe?
                </Text>
                <Img
                  className="h-[30px] w-[30px]"
                  src="images/img_icon_white_a700_30x30.svg"
                  alt="icon_Two"
                />
              </div>
              <Line className="bg-gradient5  h-px w-full" />
              <div className="flex sm:flex-col flex-row gap-6 items-center justify-start sm:px-5 px-[34px] py-[30px] w-full">
                <Button
                  className="border border-gray-900 border-solid cursor-pointer font-semibold leading-[normal] min-w-[65px] rounded-[10px] text-center text-xl"
                  shape="round"
                  color="gray_900_02"
                  size="lg"
                  variant="fill"
                >
                  04
                </Button>
                <Text
                  className="flex-1 text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                  size="txtManropeMedium22"
                >
                  How can I watch StreamVibe?
                </Text>
                <Img
                  className="h-[30px] w-[30px]"
                  src="images/img_icon_white_a700_30x30.svg"
                  alt="icon_Three"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <div className="flex sm:flex-col flex-row gap-6 items-center justify-start sm:px-5 px-[34px] py-[30px] w-full">
                <Button
                  className="border border-gray-900 border-solid cursor-pointer font-semibold leading-[normal] min-w-[65px] rounded-[10px] text-center text-xl"
                  shape="round"
                  color="gray_900_02"
                  size="lg"
                  variant="fill"
                >
                  05
                </Button>
                <Text
                  className="flex-1 text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                  size="txtManropeMedium22"
                >
                  How do I sign up for StreamVibe?
                </Text>
                <Img
                  className="h-[30px] w-[30px]"
                  src="images/img_icon_white_a700_30x30.svg"
                  alt="icon"
                />
              </div>
              <Line className="bg-gradient5  h-px w-full" />
              <div className="flex sm:flex-col flex-row gap-6 items-center justify-start sm:px-5 px-[34px] py-[30px] w-full">
                <Button
                  className="border border-gray-900 border-solid cursor-pointer font-semibold h-[67px] leading-[normal] rounded-[10px] text-center text-xl w-[66px]"
                  shape="round"
                  color="gray_900_02"
                  size="lg"
                  variant="fill"
                >
                  06
                </Button>
                <Text
                  className="flex-1 text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                  size="txtManropeMedium22"
                >
                  What is the StreamVibe free trial?
                </Text>
                <Img
                  className="h-[30px] w-[30px]"
                  src="images/img_icon_white_a700_30x30.svg"
                  alt="icon_One"
                />
              </div>
              <Line className="bg-gradient5  h-px w-full" />
              <div className="flex md:flex-col flex-row gap-6 items-center justify-start sm:px-5 px-[34px] py-[30px] w-full">
                <Button
                  className="border border-gray-900 border-solid cursor-pointer font-semibold leading-[normal] min-w-[64px] rounded-[10px] text-center text-xl"
                  shape="round"
                  color="gray_900_02"
                  size="lg"
                  variant="fill"
                >
                  07
                </Button>
                <Text
                  className="flex-1 text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                  size="txtManropeMedium22"
                >
                  How do I contact StreamVibe customer support?
                </Text>
                <Img
                  className="h-[30px] w-[30px]"
                  src="images/img_icon_white_a700_30x30.svg"
                  alt="icon_Two"
                />
              </div>
              <Line className="bg-gradient5  h-px w-full" />
              <div className="flex md:flex-col flex-row gap-6 items-center justify-start sm:px-5 px-[34px] py-[30px] w-full">
                <Button
                  className="border border-gray-900 border-solid cursor-pointer font-semibold leading-[normal] min-w-[65px] rounded-[10px] text-center text-xl"
                  shape="round"
                  color="gray_900_02"
                  size="lg"
                  variant="fill"
                >
                  08
                </Button>
                <Text
                  className="flex-1 text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                  size="txtManropeMedium22"
                >
                  What are the StreamVibe payment methods?
                </Text>
                <Img
                  className="h-[30px] w-[30px]"
                  src="images/img_icon_white_a700_30x30.svg"
                  alt="icon_Three"
                />
              </div>
            </div>
          </List>
        </div>
        <div className="flex flex-col md:gap-10 gap-20 items-start justify-start max-w-[1596px] mt-[150px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[100px] items-end justify-start w-full">
            <div className="flex flex-1 flex-col gap-3.5 items-start justify-start w-full">
              <Text
                className="md:text-4xl sm:text-[34px] text-[38px] text-white-A700 w-full"
                size="txtManropeBold38"
              >
                <>Choose the plan that&#39;s right for you</>
              </Text>
              <Text
                className="text-gray-500 text-lg w-full"
                size="txtManropeRegular18"
              >
                Join StreamVibe and select from our flexible subscription
                options tailored to suit your viewing preferences. Get ready for
                non-stop entertainment!
              </Text>
            </div>
            <div className="bg-black-900 border border-gray-900 border-solid flex flex-row items-center justify-start p-2.5 rounded-[10px] w-auto">
              <Button
                className="cursor-pointer font-medium min-w-[118px] rounded-[10px] text-center text-lg"
                shape="round"
                color="gray_900_02"
                size="lg"
                variant="fill"
              >
                Monthly
              </Button>
              <div className="flex flex-col items-center justify-center sm:px-5 px-6 py-3.5 w-auto">
                <Text
                  className="text-gray-500 text-lg w-auto"
                  size="txtManropeMedium18"
                >
                  Yearly
                </Text>
              </div>
            </div>
          </div>
          <List
            className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-full"
            orientation="horizontal"
          >
            <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col gap-[50px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
                  size="txtManropeBold24"
                >
                  Basic Plan
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[412px] md:max-w-full text-gray-500 text-lg"
                  size="txtManropeRegular18"
                >
                  Enjoy an extensive library of movies and shows, featuring a
                  range of content, including recently released titles.
                </Text>
              </div>
              <div className="flex flex-row gap-1 items-end justify-center w-auto">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-auto"
                  size="txtManropeSemiBold40"
                >
                  $9.99
                </Text>
                <Text
                  className="text-gray-500 text-lg w-auto"
                  size="txtManropeMedium18"
                >
                  /month
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row gap-5 items-start justify-start w-full">
                <Button
                  className="!text-white-A700 border border-gray-900 border-solid cursor-pointer flex-1 font-semibold rounded-lg text-center text-lg w-full"
                  color="gray_900_01"
                  size="lg"
                  variant="fill"
                >
                  Start Free Trial
                </Button>
                <Button
                  className="cursor-pointer flex-1 font-semibold rounded-lg text-center text-lg w-full"
                  color="red_A700"
                  size="lg"
                  variant="fill"
                >
                  Choose Plan
                </Button>
              </div>
            </div>
            <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col gap-[50px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
                  size="txtManropeBold24"
                >
                  Standard Plan
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[412px] md:max-w-full text-gray-500 text-lg"
                  size="txtManropeRegular18"
                >
                  Access to a wider selection of movies and shows, including
                  most new releases and exclusive content
                </Text>
              </div>
              <div className="flex flex-row gap-1 items-end justify-center w-auto">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-auto"
                  size="txtManropeSemiBold40"
                >
                  $12.99
                </Text>
                <Text
                  className="text-gray-500 text-lg w-auto"
                  size="txtManropeMedium18"
                >
                  /month
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row gap-5 items-start justify-start w-full">
                <Button
                  className="!text-white-A700 border border-gray-900 border-solid cursor-pointer flex-1 font-semibold rounded-lg text-center text-lg w-full"
                  color="gray_900_01"
                  size="lg"
                  variant="fill"
                >
                  Start Free Trial
                </Button>
                <Button
                  className="cursor-pointer flex-1 font-semibold rounded-lg text-center text-lg w-full"
                  color="red_A700"
                  size="lg"
                  variant="fill"
                >
                  Choose Plan
                </Button>
              </div>
            </div>
            <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col gap-[50px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
                  size="txtManropeBold24"
                >
                  Premium Plan
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[412px] md:max-w-full text-gray-500 text-lg"
                  size="txtManropeRegular18"
                >
                  Access to a widest selection of movies and shows, including
                  all new releases and Offline Viewing
                </Text>
              </div>
              <div className="flex flex-row gap-1 items-end justify-center w-auto">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-auto"
                  size="txtManropeSemiBold40"
                >
                  $14.99
                </Text>
                <Text
                  className="text-gray-500 text-lg w-auto"
                  size="txtManropeMedium18"
                >
                  /month
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row gap-5 items-start justify-start w-full">
                <Button
                  className="!text-white-A700 border border-gray-900 border-solid cursor-pointer flex-1 font-semibold rounded-lg text-center text-lg w-full"
                  color="gray_900_01"
                  size="lg"
                  variant="fill"
                >
                  Start Free Trial
                </Button>
                <Button
                  className="cursor-pointer flex-1 font-semibold rounded-lg text-center text-lg w-full"
                  color="red_A700"
                  size="lg"
                  variant="fill"
                >
                  Choose Plan
                </Button>
              </div>
            </div>
          </List>
        </div>
        <div className="bg-black-900 border border-gray-900 border-solid flex flex-col items-center justify-start max-w-[1596px] mt-[150px] mx-auto px-20 md:px-5 py-[100px] rounded-[12px] w-full">
          <div className="flex h-[313px] sm:h-[907px] justify-end relative rounded-[12px] w-[1596px] md:w-full">
            <div className="absolute flex sm:flex-col flex-row gap-5 h-full inset-x-[0] items-center justify-between mx-auto top-[0] w-full">
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_42x165.png"
                alt="image_ThirtyEight"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_54.png"
                alt="image_ThirtyNine"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_55.png"
                alt="image_Forty"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_56.png"
                alt="image_FortyOne"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_57.png"
                alt="image_FortyTwo"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_58.png"
                alt="image_FortyThree"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_59.png"
                alt="image_FortyFour"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_60.png"
                alt="image_FortyFive"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_42x115.png"
                alt="image_FortySix"
              />
            </div>
            <div className="absolute flex sm:flex-col flex-row gap-5 h-full inset-x-[0] items-center justify-between mx-auto top-[20%] w-full">
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_83x165.png"
                alt="image_FortySeven"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_61.png"
                alt="image_FortyEight"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_62.png"
                alt="image_FortyNine"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_63.png"
                alt="image_Fifty"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_64.png"
                alt="image_FiftyOne"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_65.png"
                alt="image_FiftyTwo"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_66.png"
                alt="image_FiftyThree"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_67.png"
                alt="image_FiftyFour"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_83x115.png"
                alt="image_FiftyFive"
              />
            </div>
            <div className="absolute bottom-[20%] flex sm:flex-col flex-row gap-5 h-full inset-x-[0] items-center justify-between mx-auto w-full">
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_68.png"
                alt="image_FiftySix"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_69.png"
                alt="image_FiftySeven"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_70.png"
                alt="image_FiftyEight"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_71.png"
                alt="image_FiftyNine"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_72.png"
                alt="image_Sixty"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_73.png"
                alt="image_SixtyOne"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_74.png"
                alt="image_SixtyTwo"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_75.png"
                alt="image_SixtyThree"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_76.png"
                alt="image_SixtyFour"
              />
            </div>
            <div className="flex sm:flex-col flex-row gap-5 h-full items-center justify-between mt-auto mx-auto w-full">
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_77.png"
                alt="image_SixtyFive"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_78.png"
                alt="image_SixtySix"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_79.png"
                alt="image_SixtySeven"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_80.png"
                alt="image_SixtyEight"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_81.png"
                alt="image_SixtyNine"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_82.png"
                alt="image_Seventy"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_83.png"
                alt="image_SeventyOne"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_84.png"
                alt="image_SeventyTwo"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_85.png"
                alt="image_SeventyThree"
              />
            </div>
            <div className="absolute inset-[0] justify-center m-auto overflow-x-auto w-full">
              <div className="relative rounded-[12px] w-full">
                <div className="absolute bg-gradient6  h-[344px] inset-[0] justify-center m-auto w-full"></div>
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between m-auto relative w-[90%]">
                  <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                    <Text
                      className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-full"
                      size="txtManropeBold48"
                    >
                      Start your free trial today!
                    </Text>
                    <Text
                      className="text-gray-500 text-lg w-full"
                      size="txtManropeRegular18"
                    >
                      This is a clear and concise call to action that encourages
                      users to sign up for a free trial of StreamVibe.
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-semibold min-w-[188px] md:mt-0 my-[25px] rounded-lg text-center text-lg"
                    color="red_A700"
                    size="lg"
                    variant="fill"
                  >
                    Start a Free Trail
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="bg-black-900 flex gap-[100px] items-center justify-center mt-[150px] pb-[50px] pt-[100px] md:px-5 px-[162px] w-full" />
      </div>
    </>
  );
};

export default HomePageDesktopPage;
