import React from "react";

import { Button, Img, Line, List, PagerIndicator, Text } from "components";
import Footer1 from "components/Footer1";

const HomePageLaptopPage = () => {
  return (
    <>
      <div className="bg-gray-900_01 flex flex-col font-manrope items-center justify-start mx-auto w-full">
        <div className="flex flex-col md:px-5 relative w-[1440px] md:w-full">
          <div className="flex sm:h-[1880px] h-[699px] md:h-[745px] justify-end mx-auto w-full">
            <div className="absolute gap-2.5 grid sm:grid-cols-1 md:grid-cols-5 grid-cols-9 h-[200px] md:h-auto inset-x-[0] items-center justify-between mx-auto top-[0] w-full">
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
            <div className="absolute gap-2.5 grid sm:grid-cols-1 md:grid-cols-5 grid-cols-9 h-[200px] md:h-auto inset-x-[0] items-center justify-between mx-auto top-[30%] w-full">
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
            <div className="absolute bottom-[11%] gap-2.5 grid sm:grid-cols-1 md:grid-cols-5 grid-cols-9 h-[200px] md:h-auto inset-x-[0] items-center justify-between mx-auto w-full">
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
            <div className="gap-2.5 grid sm:grid-cols-1 md:grid-cols-5 grid-cols-9 md:h-auto h-full items-center justify-between mt-auto mx-auto w-full">
              <Img
                className="flex-1 md:flex-none md:h-[69px] sm:h-auto h-full max-h-[69px] object-cover rounded-[12px]"
                src="images/img_image_26.png"
                alt="image_TwentySeven"
              />
              <Img
                className="flex-1 md:flex-none md:h-[69px] sm:h-auto h-full max-h-[69px] object-cover rounded-[12px]"
                src="images/img_image_27.png"
                alt="image_TwentyEight"
              />
              <Img
                className="flex-1 md:flex-none md:h-[69px] sm:h-auto h-full max-h-[69px] object-cover rounded-[12px]"
                src="images/img_image_28.png"
                alt="image_TwentyNine"
              />
              <Img
                className="flex-1 md:flex-none md:h-[69px] sm:h-auto h-full max-h-[69px] object-cover rounded-[12px]"
                src="images/img_image_29.png"
                alt="image_Thirty"
              />
              <Img
                className="flex-1 md:flex-none md:h-[69px] sm:h-auto h-full max-h-[69px] object-cover rounded-[12px]"
                src="images/img_image_30.png"
                alt="image_ThirtyOne"
              />
              <Img
                className="flex-1 md:flex-none md:h-[69px] sm:h-auto h-full max-h-[69px] object-cover rounded-[12px]"
                src="images/img_image_31.png"
                alt="image_ThirtyTwo"
              />
              <Img
                className="flex-1 md:flex-none md:h-[69px] sm:h-auto h-full max-h-[69px] object-cover rounded-[12px]"
                src="images/img_image_32.png"
                alt="image_ThirtyThree"
              />
              <Img
                className="flex-1 md:flex-none md:h-[69px] sm:h-auto h-full max-h-[69px] object-cover rounded-[12px]"
                src="images/img_image_33.png"
                alt="image_ThirtyFour"
              />
              <Img
                className="flex-1 md:flex-none md:h-[69px] sm:h-auto h-full max-h-[69px] object-cover rounded-[12px]"
                src="images/img_image_34.png"
                alt="image_ThirtyFive"
              />
            </div>
            <div className="absolute inset-[0] justify-center m-auto w-full">
              <div className="m-auto w-full">
                <Img
                  className="absolute h-[699px] inset-[0] justify-center m-auto object-cover rounded-[12px] w-[1440px] md:w-full"
                  src="images/img_image_699x1440.png"
                  alt="image_ThirtySix"
                />
                <div className="absolute bg-gradient1  flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                  <header className="flex md:flex-col flex-row md:gap-10 items-center justify-between mb-[482px] md:px-10 px-20 sm:px-5 py-6 w-full">
                    <Img
                      className="h-[50px] w-[165px]"
                      src="images/img_logo.svg"
                      alt="logo"
                    />
                    <ul className="bg-black-900 flex sm:flex-col flex-row gap-4 sm:hidden items-center justify-start outline outline-[3px] outline-gray-900_02 pl-2 sm:pr-5 pr-[30px] py-2 rounded-[10px] w-auto common-row-list">
                      <li>
                        <a href="javascript:">
                          <Button
                            className="!text-white-A700 border border-gray-900_03 border-solid cursor-pointer font-medium rounded-lg text-center text-sm"
                            color="gray_900_03"
                            size="md"
                            variant="fill"
                          >
                            Home
                          </Button>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:" className="text-gray-400 text-sm">
                          <Text size="txtManropeRegular14">Movies & Shows</Text>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:" className="text-gray-400 text-sm">
                          <Text size="txtManropeRegular14">Support</Text>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:" className="text-gray-400 text-sm">
                          <Text size="txtManropeRegular14">Subscriptions</Text>
                        </a>
                      </li>
                    </ul>
                    <Img
                      className="h-6 w-[62px]"
                      src="images/img_buttonscontainer.svg"
                      alt="buttonscontaine"
                    />
                  </header>
                </div>
              </div>
              <div className="absolute bg-gradient2  bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto p-[81px] md:px-10 sm:px-5 w-full">
                <Img
                  className="h-[300px] md:h-auto mb-[119px] object-cover w-[300px]"
                  src="images/img_abstractdesign.png"
                  alt="abstractdesign"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10 items-center justify-start mt-[-100px] mx-auto md:px-10 sm:px-5 px-[150px] w-full z-[1]">
            <div className="flex flex-col gap-2.5 items-start justify-start w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700 w-full"
                size="txtManropeBold48"
              >
                The Best Streaming Experience
              </Text>
              <Text
                className="leading-[150.00%] max-w-[1140px] md:max-w-full text-center text-gray-500 text-sm"
                size="txtManropeRegular14Gray500"
              >
                StreamVibe is the best streaming experience for watching your
                favorite movies and shows on demand, anytime, anywhere. With
                StreamVibe, you can enjoy a wide variety of content, including
                the latest blockbusters, classic movies, popular TV shows, and
                more. You can also create your own watchlists, so you can easily
                find the content you want to watch.
              </Text>
            </div>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[209px] rounded-lg"
              leftIcon={
                <Img
                  className="h-6 mb-px mr-1"
                  src="images/img_icon.svg"
                  alt="Icon"
                />
              }
              color="red_A700"
              size="md"
              variant="fill"
            >
              <div className="font-semibold text-left text-sm">
                Start Watching Now
              </div>
            </Button>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start max-w-[1279px] mt-[150px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-end justify-start w-full">
            <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-full"
                size="txtManropeBold28"
              >
                Explore our wide variety of categories
              </Text>
              <Text
                className="text-base text-gray-500 w-full"
                size="txtManropeRegular16"
              >
                <>
                  Whether you&#39;re looking for a comedy to make you laugh, a
                  drama to make you think, or a documentary to learn something
                  new
                </>
              </Text>
            </div>
            <div className="bg-black-900 border border-gray-900_02 border-solid flex flex-row gap-3 items-center justify-start p-3 rounded-[10px] w-auto">
              <Img
                className="h-11 rounded-md w-11"
                src="images/img_button.svg"
                alt="button"
              />
              <PagerIndicator
                className="flex gap-[3px] h-1 items-start justify-start w-[69px]"
                count={4}
                activeCss="inline-block cursor-pointer h-1 bg-red-A700 w-[18px] rounded-sm"
                activeIndex={1}
                inactiveCss="inline-block cursor-pointer h-1 bg-blue_gray-900 w-3.5 rounded-sm"
                selectedWrapperCss="inline-block"
                unselectedWrapperCss="inline-block"
              />
              <Img
                className="h-11 rounded-md w-11"
                src="images/img_button_gray_900_03.svg"
                alt="button_One"
              />
            </div>
          </div>
          <List
            className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-start w-full"
            orientation="horizontal"
          >
            <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col items-start justify-start p-6 sm:px-5 rounded-[10px] w-full">
              <div className="h-[210px] md:h-auto relative w-full">
                <div className="flex flex-1 flex-row gap-[5px] h-full items-center justify-evenly mx-auto w-full">
                  <Img
                    className="flex-1 md:flex-none md:h-[102px] sm:h-auto h-full max-h-[102px] object-cover rounded-md"
                    src="images/img_image_102x93.png"
                    alt="image"
                  />
                  <Img
                    className="flex-1 md:flex-none md:h-[102px] sm:h-auto h-full max-h-[102px] object-cover rounded-md"
                    src="images/img_image_86.png"
                    alt="image_One"
                  />
                </div>
                <div className="flex flex-1 flex-row gap-[5px] h-full items-center justify-evenly mt-auto mx-auto w-full">
                  <Img
                    className="flex-1 md:flex-none md:h-[102px] sm:h-auto h-full max-h-[102px] object-cover rounded-md"
                    src="images/img_image_87.png"
                    alt="image_Two"
                  />
                  <Img
                    className="flex-1 md:flex-none md:h-[102px] sm:h-auto h-full max-h-[102px] object-cover rounded-md"
                    src="images/img_image_88.png"
                    alt="image_Three"
                  />
                </div>
                <div className="absolute bg-gradient3  h-[210px] inset-[0] justify-center m-auto w-full"></div>
              </div>
              <div className="flex flex-row items-center justify-between w-full">
                <Text
                  className="flex-1 text-base text-white-A700 w-auto"
                  size="txtManropeSemiBold16"
                >
                  Action
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowleft.svg"
                  alt="arrowright"
                />
              </div>
            </div>
            <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col items-start justify-start p-6 sm:px-5 rounded-[10px] w-full">
              <div className="h-[210px] md:h-auto relative w-full">
                <div className="flex flex-1 flex-row gap-[5px] h-full items-center justify-between mx-auto w-full">
                  <Img
                    className="flex-1 md:flex-none md:h-[102px] sm:h-auto h-full max-h-[102px] object-cover rounded-md"
                    src="images/img_image_89.png"
                    alt="image"
                  />
                  <Img
                    className="flex-1 md:flex-none md:h-[102px] sm:h-auto h-full max-h-[102px] object-cover rounded-md"
                    src="images/img_image_90.png"
                    alt="image_One"
                  />
                </div>
                <div className="flex flex-1 flex-row gap-[5px] h-full items-center justify-between mt-auto mx-auto w-full">
                  <Img
                    className="flex-1 md:flex-none md:h-[102px] sm:h-auto h-full max-h-[102px] object-cover rounded-md"
                    src="images/img_image_91.png"
                    alt="image_Two"
                  />
                  <Img
                    className="flex-1 md:flex-none md:h-[102px] sm:h-auto h-full max-h-[102px] object-cover rounded-md"
                    src="images/img_image_92.png"
                    alt="image_Three"
                  />
                </div>
                <div className="absolute bg-gradient3  h-[210px] inset-[0] justify-center m-auto w-full"></div>
              </div>
              <div className="flex flex-row items-center justify-between w-full">
                <Text
                  className="flex-1 text-base text-white-A700 w-auto"
                  size="txtManropeSemiBold16"
                >
                  Adventure
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowleft.svg"
                  alt="arrowright"
                />
              </div>
            </div>
            <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col items-start justify-start p-6 sm:px-5 rounded-[10px] w-full">
              <div className="h-[210px] md:h-auto relative w-full">
                <div className="flex flex-1 flex-row gap-[5px] h-full items-center justify-evenly mx-auto w-full">
                  <Img
                    className="flex-1 md:flex-none md:h-[102px] sm:h-auto h-full max-h-[102px] object-cover rounded-md"
                    src="images/img_image_93.png"
                    alt="image"
                  />
                  <Img
                    className="flex-1 md:flex-none md:h-[102px] sm:h-auto h-full max-h-[102px] object-cover rounded-md"
                    src="images/img_image_94.png"
                    alt="image_One"
                  />
                </div>
                <div className="flex flex-1 flex-row gap-[5px] h-full items-center justify-evenly mt-auto mx-auto w-full">
                  <Img
                    className="flex-1 md:flex-none md:h-[102px] sm:h-auto h-full max-h-[102px] object-cover rounded-md"
                    src="images/img_image_95.png"
                    alt="image_Two"
                  />
                  <Img
                    className="flex-1 md:flex-none md:h-[102px] sm:h-auto h-full max-h-[102px] object-cover rounded-md"
                    src="images/img_image_96.png"
                    alt="image_Three"
                  />
                </div>
                <div className="absolute bg-gradient3  h-[210px] inset-[0] justify-center m-auto w-full"></div>
              </div>
              <div className="flex flex-row items-center justify-between w-full">
                <Text
                  className="flex-1 text-base text-white-A700 w-auto"
                  size="txtManropeSemiBold16"
                >
                  Comedy
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowleft.svg"
                  alt="arrowright"
                />
              </div>
            </div>
            <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col items-start justify-start p-6 sm:px-5 rounded-[10px] w-full">
              <div className="h-[210px] md:h-auto relative w-full">
                <div className="flex flex-col items-center justify-start m-auto w-full">
                  <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                    <div className="flex flex-row gap-[5px] h-full items-start justify-start w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[102px] sm:h-auto h-full max-h-[102px] object-cover rounded-md"
                        src="images/img_image_97.png"
                        alt="image"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[102px] sm:h-auto h-full max-h-[102px] object-cover rounded-md"
                        src="images/img_image_98.png"
                        alt="image_One"
                      />
                    </div>
                    <div className="flex flex-row gap-[5px] h-full items-start justify-start w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[102px] sm:h-auto h-full max-h-[102px] object-cover rounded-md"
                        src="images/img_image_99.png"
                        alt="image_Two"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[102px] sm:h-auto h-full max-h-[102px] object-cover rounded-md"
                        src="images/img_image_100.png"
                        alt="image_Three"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute bg-gradient3  h-[210px] inset-[0] justify-center m-auto w-full"></div>
              </div>
              <div className="flex flex-row items-center justify-between w-full">
                <Text
                  className="flex-1 text-base text-white-A700 w-auto"
                  size="txtManropeSemiBold16"
                >
                  Drama
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowleft.svg"
                  alt="arrowright"
                />
              </div>
            </div>
            <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col items-start justify-start p-6 sm:px-5 rounded-[10px] w-full">
              <div className="h-[210px] md:h-auto relative w-full">
                <div className="flex flex-1 flex-row gap-[5px] h-full items-center justify-evenly mx-auto w-full">
                  <Img
                    className="flex-1 md:flex-none md:h-[102px] sm:h-auto h-full max-h-[102px] object-cover rounded-md"
                    src="images/img_image_101.png"
                    alt="image"
                  />
                  <Img
                    className="flex-1 md:flex-none md:h-[102px] sm:h-auto h-full max-h-[102px] object-cover rounded-md"
                    src="images/img_image_102.png"
                    alt="image_One"
                  />
                </div>
                <div className="flex flex-1 flex-row gap-[5px] h-full items-center justify-evenly mt-auto mx-auto w-full">
                  <Img
                    className="flex-1 md:flex-none md:h-[102px] sm:h-auto h-full max-h-[102px] object-cover rounded-md"
                    src="images/img_image_103.png"
                    alt="image_Two"
                  />
                  <Img
                    className="flex-1 md:flex-none md:h-[102px] sm:h-auto h-full max-h-[102px] object-cover rounded-md"
                    src="images/img_image_104.png"
                    alt="image_Three"
                  />
                </div>
                <div className="absolute bg-gradient3  h-[210px] inset-[0] justify-center m-auto w-full"></div>
              </div>
              <div className="flex flex-row items-center justify-between w-full">
                <Text
                  className="flex-1 text-base text-white-A700 w-auto"
                  size="txtManropeSemiBold16"
                >
                  Horror
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowleft.svg"
                  alt="arrowright"
                />
              </div>
            </div>
          </List>
        </div>
        <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start max-w-[1279px] mt-[120px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-2.5 items-start justify-start md:pr-10 sm:pr-5 pr-[150px] w-full">
            <Text
              className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-full"
              size="txtManropeBold28"
            >
              We Provide you streaming experience across various devices.
            </Text>
            <Text
              className="leading-[150.00%] max-w-[1129px] md:max-w-full text-base text-gray-500"
              size="txtManropeRegular16"
            >
              With StreamVibe, you can enjoy your favorite movies and TV shows
              anytime, anywhere. Our platform is designed to be compatible with
              a wide range of devices, ensuring that you never miss a moment of
              entertainment.
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
              <div className="bg-gradient4  border border-gray-900 border-solid flex flex-1 flex-col gap-6 items-start justify-start p-10 sm:px-5 rounded-[10px] w-full">
                <div className="flex flex-row gap-3 items-center justify-start w-full">
                  <Button
                    className="border border-gray-900_02 border-solid flex h-[54px] items-center justify-center rounded-[10px] w-[54px]"
                    shape="round"
                    color="gray_900_01"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-[30px]"
                      src="images/img_icon_red_a700_54x54.svg"
                      alt="icon"
                    />
                  </Button>
                  <Text
                    className="flex-1 text-white-A700 text-xl w-auto"
                    size="txtManropeSemiBold20"
                  >
                    Smartphones
                  </Text>
                </div>
                <Text
                  className="leading-[150.00%] max-w-[333px] md:max-w-full text-base text-gray-500"
                  size="txtManropeRegular16"
                >
                  StreamVibe is optimized for both Android and iOS smartphones.
                  Download our app from the Google Play Store or the Apple App
                  Store
                </Text>
              </div>
              <div className="bg-gradient4  border border-gray-900 border-solid flex flex-1 flex-col gap-6 items-start justify-start p-10 sm:px-5 rounded-[10px] w-full">
                <div className="flex flex-row gap-3 items-center justify-start w-full">
                  <Button
                    className="border border-gray-900_02 border-solid flex h-[54px] items-center justify-center rounded-[10px] w-[54px]"
                    shape="round"
                    color="gray_900_01"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-[30px]"
                      src="images/img_icon_red_a700_72x72.svg"
                      alt="icon"
                    />
                  </Button>
                  <Text
                    className="flex-1 text-white-A700 text-xl w-auto"
                    size="txtManropeSemiBold20"
                  >
                    Tablet
                  </Text>
                </div>
                <Text
                  className="leading-[150.00%] max-w-[333px] md:max-w-full text-base text-gray-500"
                  size="txtManropeRegular16"
                >
                  StreamVibe is optimized for both Android and iOS smartphones.
                  Download our app from the Google Play Store or the Apple App
                  Store
                </Text>
              </div>
              <div className="bg-gradient4  border border-gray-900 border-solid flex flex-1 flex-col gap-6 items-start justify-start p-10 sm:px-5 rounded-[10px] w-full">
                <div className="flex flex-row gap-3 items-center justify-start w-full">
                  <Button
                    className="border border-gray-900_02 border-solid flex h-[54px] items-center justify-center rounded-[10px] w-[54px]"
                    shape="round"
                    color="gray_900_01"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-[30px]"
                      src="images/img_icon_54x54.svg"
                      alt="icon"
                    />
                  </Button>
                  <Text
                    className="flex-1 text-white-A700 text-xl w-auto"
                    size="txtManropeSemiBold20"
                  >
                    Smart TV
                  </Text>
                </div>
                <Text
                  className="leading-[150.00%] max-w-[333px] md:max-w-full text-base text-gray-500"
                  size="txtManropeRegular16"
                >
                  StreamVibe is optimized for both Android and iOS smartphones.
                  Download our app from the Google Play Store or the Apple App
                  Store
                </Text>
              </div>
              <div className="bg-gradient4  border border-gray-900 border-solid flex flex-1 flex-col gap-6 items-start justify-start p-10 sm:px-5 rounded-[10px] w-full">
                <div className="flex flex-row gap-3 items-center justify-start w-full">
                  <Button
                    className="border border-gray-900_02 border-solid flex h-[54px] items-center justify-center rounded-[10px] w-[54px]"
                    shape="round"
                    color="gray_900_01"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-[30px]"
                      src="images/img_icon_4.svg"
                      alt="icon"
                    />
                  </Button>
                  <Text
                    className="flex-1 text-white-A700 text-xl w-auto"
                    size="txtManropeSemiBold20"
                  >
                    Laptops
                  </Text>
                </div>
                <Text
                  className="leading-[150.00%] max-w-[333px] md:max-w-full text-base text-gray-500"
                  size="txtManropeRegular16"
                >
                  StreamVibe is optimized for both Android and iOS smartphones.
                  Download our app from the Google Play Store or the Apple App
                  Store
                </Text>
              </div>
              <div className="bg-gradient4  border border-gray-900 border-solid flex flex-1 flex-col gap-6 items-start justify-start p-10 sm:px-5 rounded-[10px] w-full">
                <div className="flex flex-row gap-3 items-center justify-start w-full">
                  <Button
                    className="border border-gray-900_02 border-solid flex h-[54px] items-center justify-center rounded-[10px] w-[54px]"
                    shape="round"
                    color="gray_900_01"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-[30px]"
                      src="images/img_icon_5.svg"
                      alt="icon"
                    />
                  </Button>
                  <Text
                    className="flex-1 text-white-A700 text-xl w-auto"
                    size="txtManropeSemiBold20"
                  >
                    Gaming Consoles
                  </Text>
                </div>
                <Text
                  className="leading-[150.00%] max-w-[333px] md:max-w-full text-base text-gray-500"
                  size="txtManropeRegular16"
                >
                  StreamVibe is optimized for both Android and iOS smartphones.
                  Download our app from the Google Play Store or the Apple App
                  Store
                </Text>
              </div>
              <div className="bg-gradient4  border border-gray-900 border-solid flex flex-1 flex-col gap-6 items-start justify-start p-10 sm:px-5 rounded-[10px] w-full">
                <div className="flex flex-row gap-3 items-center justify-start w-full">
                  <Button
                    className="border border-gray-900_02 border-solid flex h-[54px] items-center justify-center rounded-[10px] w-[54px]"
                    shape="round"
                    color="gray_900_01"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-[30px]"
                      src="images/img_icon_6.svg"
                      alt="icon"
                    />
                  </Button>
                  <Text
                    className="flex-1 text-white-A700 text-xl w-auto"
                    size="txtManropeSemiBold20"
                  >
                    VR Headsets{" "}
                  </Text>
                </div>
                <Text
                  className="leading-[150.00%] max-w-[333px] md:max-w-full text-base text-gray-500"
                  size="txtManropeRegular16"
                >
                  StreamVibe is optimized for both Android and iOS smartphones.
                  Download our app from the Google Play Store or the Apple App
                  Store
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start max-w-7xl mt-[120px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-end justify-start w-full">
            <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-full"
                size="txtManropeBold28"
              >
                Frequently Asked Questions
              </Text>
              <Text
                className="text-base text-gray-500 w-full"
                size="txtManropeRegular16"
              >
                <>
                  Got questions? We&#39;ve got answers! Check out our FAQ
                  section to find answers to the most common questions about
                  StreamVibe.
                </>
              </Text>
            </div>
            <Button
              className="cursor-pointer font-semibold min-w-[140px] rounded-md text-center text-sm"
              color="red_A700"
              size="md"
              variant="fill"
            >
              Ask a Question
            </Button>
          </div>
          <List
            className="sm:flex-col flex-row gap-10 grid md:grid-cols-1 grid-cols-2 justify-start w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <div className="flex sm:flex-col flex-row gap-4 items-start justify-start p-6 sm:px-5 w-full">
                <Button
                  className="border border-gray-900 border-solid cursor-pointer font-semibold leading-[normal] min-w-[50px] rounded-lg text-base text-center"
                  color="gray_900_02"
                  size="lg"
                  variant="fill"
                >
                  01
                </Button>
                <div className="flex flex-1 flex-col gap-3.5 h-full items-start justify-start w-full">
                  <Text
                    className="text-white-A700 text-xl w-full"
                    size="txtManropeMedium20"
                  >
                    What is StreamVibe?
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[466px] md:max-w-full text-base text-gray-500"
                    size="txtManropeRegular16"
                  >
                    StreamVibe is a streaming service that allows you to watch
                    movies and shows on demand.
                  </Text>
                </div>
                <Img
                  className="h-6 w-6"
                  src="images/img_icon_white_a700.svg"
                  alt="icon"
                />
              </div>
              <Line className="bg-gradient5  h-px w-full" />
              <div className="flex sm:flex-col flex-row gap-4 items-center justify-start p-6 sm:px-5 w-full">
                <Button
                  className="border border-gray-900 border-solid cursor-pointer font-semibold leading-[normal] min-w-[52px] rounded-lg text-base text-center"
                  color="gray_900_02"
                  size="lg"
                  variant="fill"
                >
                  02
                </Button>
                <Text
                  className="flex-1 text-white-A700 text-xl w-auto"
                  size="txtManropeMedium20"
                >
                  How much does StreamVibe cost?
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_icon_white_a700_30x30.svg"
                  alt="icon_One"
                />
              </div>
              <Line className="bg-gradient5  h-px w-full" />
              <div className="flex sm:flex-col flex-row gap-4 items-center justify-start p-6 sm:px-5 w-full">
                <Button
                  className="border border-gray-900 border-solid cursor-pointer font-semibold leading-[normal] min-w-[52px] rounded-lg text-base text-center"
                  color="gray_900_02"
                  size="lg"
                  variant="fill"
                >
                  03
                </Button>
                <Text
                  className="flex-1 text-white-A700 text-xl w-auto"
                  size="txtManropeMedium20"
                >
                  What content is available on StreamVibe?
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_icon_white_a700_30x30.svg"
                  alt="icon_Two"
                />
              </div>
              <Line className="bg-gradient5  h-px w-full" />
              <div className="flex sm:flex-col flex-row gap-4 items-center justify-start p-6 sm:px-5 w-full">
                <Button
                  className="border border-gray-900 border-solid cursor-pointer font-semibold leading-[normal] min-w-[52px] rounded-lg text-base text-center"
                  color="gray_900_02"
                  size="lg"
                  variant="fill"
                >
                  04
                </Button>
                <Text
                  className="flex-1 text-white-A700 text-xl w-auto"
                  size="txtManropeMedium20"
                >
                  How can I watch StreamVibe?
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_icon_white_a700_30x30.svg"
                  alt="icon_Three"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <div className="flex sm:flex-col flex-row gap-4 items-center justify-start p-6 sm:px-5 w-full">
                <Button
                  className="border border-gray-900 border-solid cursor-pointer font-semibold leading-[normal] min-w-[52px] rounded-lg text-base text-center"
                  color="gray_900_02"
                  size="lg"
                  variant="fill"
                >
                  05
                </Button>
                <Text
                  className="flex-1 text-white-A700 text-xl w-auto"
                  size="txtManropeMedium20"
                >
                  How do I sign up for StreamVibe?
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_icon_white_a700_30x30.svg"
                  alt="icon"
                />
              </div>
              <Line className="bg-gradient5  h-px w-full" />
              <div className="flex sm:flex-col flex-row gap-4 items-center justify-start p-6 sm:px-5 w-full">
                <Button
                  className="border border-gray-900 border-solid cursor-pointer font-semibold h-[54px] leading-[normal] rounded-lg text-base text-center w-[53px]"
                  color="gray_900_02"
                  size="lg"
                  variant="fill"
                >
                  06
                </Button>
                <Text
                  className="flex-1 text-white-A700 text-xl w-auto"
                  size="txtManropeMedium20"
                >
                  What is the StreamVibe free trial?
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_icon_white_a700_30x30.svg"
                  alt="icon_One"
                />
              </div>
              <Line className="bg-gradient5  h-px w-full" />
              <div className="flex sm:flex-col flex-row gap-4 items-center justify-start p-6 sm:px-5 w-full">
                <Button
                  className="border border-gray-900 border-solid cursor-pointer font-semibold leading-[normal] min-w-[51px] rounded-lg text-base text-center"
                  color="gray_900_02"
                  size="lg"
                  variant="fill"
                >
                  07
                </Button>
                <Text
                  className="flex-1 text-white-A700 text-xl w-auto"
                  size="txtManropeMedium20"
                >
                  How do I contact StreamVibe customer support?
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_icon_white_a700_30x30.svg"
                  alt="icon_Two"
                />
              </div>
              <Line className="bg-gradient5  h-px w-full" />
              <div className="flex sm:flex-col flex-row gap-4 items-center justify-start p-6 sm:px-5 w-full">
                <Button
                  className="border border-gray-900 border-solid cursor-pointer font-semibold leading-[normal] min-w-[52px] rounded-lg text-base text-center"
                  color="gray_900_02"
                  size="lg"
                  variant="fill"
                >
                  08
                </Button>
                <Text
                  className="flex-1 text-white-A700 text-xl w-auto"
                  size="txtManropeMedium20"
                >
                  What are the StreamVibe payment methods?
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_icon_white_a700_30x30.svg"
                  alt="icon_Three"
                />
              </div>
            </div>
          </List>
        </div>
        <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start max-w-7xl mt-[120px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-end justify-start w-full">
            <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-full"
                size="txtManropeBold28"
              >
                <>Choose the plan that&#39;s right for you</>
              </Text>
              <Text
                className="leading-[150.00%] max-w-[1010px] md:max-w-full text-base text-gray-500"
                size="txtManropeRegular16"
              >
                Join StreamVibe and select from our flexible subscription
                options tailored to suit your viewing preferences. Get ready for
                non-stop entertainment!
              </Text>
            </div>
            <div className="bg-black-900 border border-gray-900 border-solid flex flex-row items-center justify-start p-2 rounded-lg w-auto">
              <Button
                className="cursor-pointer font-medium min-w-[94px] rounded-md text-center text-sm"
                color="gray_900_02"
                size="md"
                variant="fill"
              >
                Monthly
              </Button>
              <div className="flex flex-col items-center justify-center px-5 py-3 w-auto">
                <Text
                  className="text-gray-500 text-sm w-auto"
                  size="txtManropeMedium14"
                >
                  Yearly
                </Text>
              </div>
            </div>
          </div>
          <List
            className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-full"
            orientation="horizontal"
          >
            <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col gap-10 items-start justify-start p-10 sm:px-5 rounded-[10px] w-full">
              <div className="flex flex-col gap-3 items-start justify-start w-full">
                <Text
                  className="text-white-A700 text-xl w-full"
                  size="txtManropeBold20"
                >
                  Basic Plan
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[333px] md:max-w-full text-base text-gray-500"
                  size="txtManropeRegular16"
                >
                  Enjoy an extensive library of movies and shows, featuring a
                  range of content, including recently released titles.
                </Text>
              </div>
              <div className="flex flex-row gap-0.5 items-end justify-center w-auto">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-auto"
                  size="txtManropeSemiBold30"
                >
                  $9.99
                </Text>
                <Text
                  className="text-base text-gray-500 w-auto"
                  size="txtManropeMedium16"
                >
                  /month
                </Text>
              </div>
              <div className="flex flex-row gap-3 items-start justify-start w-full">
                <Button
                  className="!text-white-A700 border border-gray-900 border-solid cursor-pointer flex-1 font-semibold rounded-md text-center text-sm w-full"
                  color="gray_900_01"
                  size="md"
                  variant="fill"
                >
                  Start Free Trial
                </Button>
                <Button
                  className="cursor-pointer flex-1 font-semibold rounded-md text-center text-sm w-full"
                  color="red_A700"
                  size="md"
                  variant="fill"
                >
                  Choose Plan
                </Button>
              </div>
            </div>
            <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col gap-10 items-start justify-start p-10 sm:px-5 rounded-[10px] w-full">
              <div className="flex flex-col gap-3 items-start justify-start w-full">
                <Text
                  className="text-white-A700 text-xl w-full"
                  size="txtManropeBold20"
                >
                  Standard Plan
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[333px] md:max-w-full text-base text-gray-500"
                  size="txtManropeRegular16"
                >
                  Access to a wider selection of movies and shows, including
                  most new releases and exclusive content
                </Text>
              </div>
              <div className="flex flex-row gap-0.5 items-end justify-center w-auto">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-auto"
                  size="txtManropeSemiBold30"
                >
                  $12.99
                </Text>
                <Text
                  className="text-base text-gray-500 w-auto"
                  size="txtManropeMedium16"
                >
                  /month
                </Text>
              </div>
              <div className="flex flex-row gap-3 items-start justify-start w-full">
                <Button
                  className="!text-white-A700 border border-gray-900 border-solid cursor-pointer flex-1 font-semibold rounded-md text-center text-sm w-full"
                  color="gray_900_01"
                  size="md"
                  variant="fill"
                >
                  Start Free Trial
                </Button>
                <Button
                  className="cursor-pointer flex-1 font-semibold rounded-md text-center text-sm w-full"
                  color="red_A700"
                  size="md"
                  variant="fill"
                >
                  Choose Plan
                </Button>
              </div>
            </div>
            <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col gap-10 items-start justify-start p-10 sm:px-5 rounded-[10px] w-full">
              <div className="flex flex-col gap-3 items-start justify-start w-full">
                <Text
                  className="text-white-A700 text-xl w-full"
                  size="txtManropeBold20"
                >
                  Premium Plan
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[333px] md:max-w-full text-base text-gray-500"
                  size="txtManropeRegular16"
                >
                  Access to a widest selection of movies and shows, including
                  all new releases and Offline Viewing
                </Text>
              </div>
              <div className="flex flex-row gap-0.5 items-end justify-center w-auto">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-auto"
                  size="txtManropeSemiBold30"
                >
                  $14.99
                </Text>
                <Text
                  className="text-base text-gray-500 w-auto"
                  size="txtManropeMedium16"
                >
                  /month
                </Text>
              </div>
              <div className="flex flex-row gap-3 items-start justify-start w-full">
                <Button
                  className="!text-white-A700 border border-gray-900 border-solid cursor-pointer flex-1 font-semibold rounded-md text-center text-sm w-full"
                  color="gray_900_01"
                  size="md"
                  variant="fill"
                >
                  Start Free Trial
                </Button>
                <Button
                  className="cursor-pointer flex-1 font-semibold rounded-md text-center text-sm w-full"
                  color="red_A700"
                  size="md"
                  variant="fill"
                >
                  Choose Plan
                </Button>
              </div>
            </div>
          </List>
        </div>
        <div className="bg-black-900 border border-gray-900 border-solid flex flex-col items-center justify-start max-w-7xl mt-[120px] mx-auto md:px-5 px-[60px] py-20 rounded-[12px] w-full">
          <div className="flex h-[236px] md:h-[250px] sm:h-[817px] justify-end relative rounded-[12px] w-[1280px] md:w-full">
            <div className="absolute flex sm:flex-col flex-row gap-5 h-full inset-x-[0] items-center justify-between mx-auto top-[0] w-full">
              <Img
                className="flex-1 md:h-auto h-full max-h-[13px] object-cover sm:w-[]"
                src="images/img_image_42x165.png"
                alt="image_ThirtyEight"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[13px] object-cover sm:w-[]"
                src="images/img_image_54.png"
                alt="image_ThirtyNine"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[13px] object-cover sm:w-[]"
                src="images/img_image_55.png"
                alt="image_Forty"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[13px] object-cover sm:w-[]"
                src="images/img_image_56.png"
                alt="image_FortyOne"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[13px] object-cover sm:w-[]"
                src="images/img_image_57.png"
                alt="image_FortyTwo"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[13px] object-cover sm:w-[]"
                src="images/img_image_58.png"
                alt="image_FortyThree"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[13px] object-cover sm:w-[]"
                src="images/img_image_59.png"
                alt="image_FortyFour"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[13px] object-cover sm:w-[]"
                src="images/img_image_60.png"
                alt="image_FortyFive"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[13px] object-cover sm:w-[]"
                src="images/img_image_42x115.png"
                alt="image_FortySix"
              />
            </div>
            <div className="absolute flex sm:flex-col flex-row gap-5 h-full inset-x-[0] items-center justify-between mx-auto top-[14%] w-full">
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_83x165.png"
                alt="image_FortySeven"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_61.png"
                alt="image_FortyEight"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_62.png"
                alt="image_FortyNine"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_63.png"
                alt="image_Fifty"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_64.png"
                alt="image_FiftyOne"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_65.png"
                alt="image_FiftyTwo"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_66.png"
                alt="image_FiftyThree"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_67.png"
                alt="image_FiftyFour"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_83x115.png"
                alt="image_FiftyFive"
              />
            </div>
            <div className="absolute bottom-[15%] flex sm:flex-col flex-row gap-5 h-full inset-x-[0] items-center justify-between mx-auto w-full">
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_68.png"
                alt="image_FiftySix"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_69.png"
                alt="image_FiftySeven"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_70.png"
                alt="image_FiftyEight"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_71.png"
                alt="image_FiftyNine"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_72.png"
                alt="image_Sixty"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_73.png"
                alt="image_SixtyOne"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_74.png"
                alt="image_SixtyTwo"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_75.png"
                alt="image_SixtyThree"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_76.png"
                alt="image_SixtyFour"
              />
            </div>
            <div className="flex sm:flex-col flex-row gap-5 h-full items-center justify-between mt-auto mx-auto w-full">
              <Img
                className="flex-1 md:h-auto h-full max-h-3.5 object-cover sm:w-[]"
                src="images/img_image_77.png"
                alt="image_SixtyFive"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-3.5 object-cover sm:w-[]"
                src="images/img_image_78.png"
                alt="image_SixtySix"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-3.5 object-cover sm:w-[]"
                src="images/img_image_79.png"
                alt="image_SixtySeven"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-3.5 object-cover sm:w-[]"
                src="images/img_image_80.png"
                alt="image_SixtyEight"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-3.5 object-cover sm:w-[]"
                src="images/img_image_81.png"
                alt="image_SixtyNine"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-3.5 object-cover sm:w-[]"
                src="images/img_image_82.png"
                alt="image_Seventy"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-3.5 object-cover sm:w-[]"
                src="images/img_image_83.png"
                alt="image_SeventyOne"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-3.5 object-cover sm:w-[]"
                src="images/img_image_84.png"
                alt="image_SeventyTwo"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-3.5 object-cover sm:w-[]"
                src="images/img_image_85.png"
                alt="image_SeventyThree"
              />
            </div>
            <div className="absolute inset-[0] justify-center m-auto rounded-[12px] w-full">
              <div className="absolute bg-gradient6  h-[250px] inset-[0] justify-center m-auto w-full"></div>
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between m-auto relative w-[91%]">
                <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-full"
                    size="txtManropeBold28"
                  >
                    Start your free trial today!
                  </Text>
                  <Text
                    className="text-base text-gray-500 w-full"
                    size="txtManropeRegular16"
                  >
                    This is a clear and concise call to action that encourages
                    users to sign up for a free trial of StreamVibe.
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-semibold min-w-[149px] md:mt-0 my-[13px] rounded-lg text-center text-sm"
                  color="red_A700"
                  size="md"
                  variant="fill"
                >
                  Start a Free Trail
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Footer1 className="bg-black-900 flex gap-20 items-center justify-center mt-[120px] pb-10 pt-20 px-20 md:px-5 w-full" />
      </div>
    </>
  );
};

export default HomePageLaptopPage;
