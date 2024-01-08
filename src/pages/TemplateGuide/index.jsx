import React from "react";

import { Button, Img, Line, List, Text } from "components";

const TemplateGuidePage = () => {
  return (
    <>
      <div className="bg-gray-900_01 flex flex-col font-manrope sm:gap-10 md:gap-10 gap-[149px] items-center justify-start mx-auto pb-[150px] w-full">
        <div className="h-[547px] md:px-5 relative w-full">
          <Img
            className="h-[547px] m-auto object-cover w-full"
            src="images/img_image_547x1920.png"
            alt="image"
          />
          <div className="absolute flex flex-row items-center justify-center right-[36%] top-[39%] w-auto">
            <Line className="bg-gray-500 h-0.5 rotate-[180deg] w-[13%]" />
            <Button
              className="bg-transparent border border-solid cursor-pointer font-semibold gray_400_01_blue_gray_700_00_border leading-[normal] min-w-[279px] rounded-[41px] sm:text-[30.369999999999997px] md:text-[32.37px] text-[34.37px] text-center underline"
              color="gray_900_02"
              size="lg"
              variant="fill"
            >
              By Produce UI
            </Button>
          </div>
        </div>
        <div className="flex flex-col font-inter items-center justify-start max-w-[1680px] mx-auto md:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[100px] items-start justify-start max-w-[1680px] w-full">
            <div className="flex flex-col gap-[18px] items-start justify-start md:pr-10 sm:pr-5 pr-[300px] w-full">
              <Text
                className="sm:text-3xl md:text-[32px] text-[34px] text-white-A700 w-full"
                size="txtInterSemiBold34"
              >
                🎨 Color Styles
              </Text>
              <Text
                className="leading-[150.00%] max-w-[1380px] md:max-w-full text-gray-300 text-lg"
                size="txtInterRegular18"
              >
                <>
                  These are the colors that shaped this template&#39;s design,
                  selected with care and intention. Feel free to adjust them to
                  give your design a fresh and harmonious update.
                </>
              </Text>
            </div>
            <div className="bg-black-900 flex flex-col md:gap-10 gap-20 items-start justify-start outline outline-[3px] outline-gray-900 p-[120px] md:px-10 sm:px-5 rounded-[12px] w-full">
              <div className="flex md:flex-col flex-row gap-[59px] items-center justify-start w-full">
                <div className="flex sm:flex-1 flex-col gap-[21px] items-start justify-start w-auto sm:w-full">
                  <Text
                    className="md:text-4xl sm:text-[34px] text-[38px] text-white-A700 w-auto"
                    size="txtInterSemiBold38"
                  >
                    Absolute Colors
                  </Text>
                  <Text
                    className="text-gray-300 text-lg w-auto"
                    size="txtInterRegular18"
                  >
                    This is a absolute white and black.
                  </Text>
                </div>
                <List
                  className="bg-gray-900_01 border border-gray-900 border-solid flex-1 sm:flex-col flex-row gap-[30px] grid md:grid-cols-1 grid-cols-2 justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full"
                  orientation="horizontal"
                >
                  <div className="bg-white-A700 flex flex-1 flex-col gap-2.5 h-[107px] md:h-auto items-start justify-between outline outline-[3px] outline-blue_gray-900 p-2.5 rounded-[10px] w-full">
                    <div className="flex flex-col items-start justify-start px-[5px] py-0.5 w-full">
                      <Text
                        className="text-base text-black-900_01 w-auto"
                        size="txtInterRegular16"
                      >
                        White
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-end px-[5px] py-0.5 w-full">
                      <Text
                        className="text-black-900_01 text-sm w-auto"
                        size="txtInterRegular14"
                      >
                        #FFF
                      </Text>
                    </div>
                  </div>
                  <div className="bg-black-900_01 flex flex-1 flex-col gap-2.5 h-[107px] md:h-auto items-start justify-between outline outline-[3px] outline-blue_gray-900 p-2.5 rounded-[10px] w-full">
                    <div className="flex flex-col items-start justify-start px-[5px] py-0.5 w-full">
                      <Text
                        className="text-base text-white-A700 w-auto"
                        size="txtInterRegular16WhiteA700"
                      >
                        Black
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-end px-[5px] py-0.5 w-full">
                      <Text
                        className="text-sm text-white-A700 w-auto"
                        size="txtInterRegular14WhiteA700"
                      >
                        #000
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
              <List
                className="flex flex-col gap-20 items-center w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 md:flex-col flex-row gap-[59px] items-center justify-start w-full">
                  <div className="flex sm:flex-1 flex-col gap-[21px] items-start justify-start w-auto sm:w-full">
                    <Text
                      className="md:text-4xl sm:text-[34px] text-[38px] text-white-A700 w-auto"
                      size="txtInterSemiBold38"
                    >
                      Red Shades
                    </Text>
                    <Text
                      className="leading-[140.00%] max-w-[424px] md:max-w-full text-gray-300 text-lg"
                      size="txtInterRegular18"
                    >
                      Primary Colors - The foundational color representing brand
                      identity in this template
                    </Text>
                  </div>
                  <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-1 flex-col items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full">
                    <div className="md:gap-5 gap-[27px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                      <div className="bg-red-A700 flex flex-1 flex-col gap-2.5 h-[107px] md:h-auto items-start justify-between outline outline-[3px] outline-blue_gray-900 p-2.5 rounded-[10px] w-full">
                        <div className="flex flex-col items-start justify-start px-[5px] py-0.5 w-full">
                          <Text
                            className="text-base text-white-A700"
                            size="txtInterRegular16WhiteA700"
                          >
                            45
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-end px-[5px] py-0.5 w-full">
                          <Text
                            className="text-sm text-white-A700 w-auto"
                            size="txtInterRegular14WhiteA700"
                          >
                            #E50000
                          </Text>
                        </div>
                      </div>
                      <div className="bg-red-A700_01 flex flex-1 flex-col gap-2.5 h-[107px] md:h-auto items-start justify-between outline outline-[3px] outline-blue_gray-900 p-2.5 rounded-[10px] w-full">
                        <div className="flex flex-col items-start justify-start px-[5px] py-0.5 w-full">
                          <Text
                            className="text-base text-white-A700"
                            size="txtInterRegular16WhiteA700"
                          >
                            50
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-end px-[5px] py-0.5 w-full">
                          <Text
                            className="text-sm text-white-A700 w-auto"
                            size="txtInterRegular14WhiteA700"
                          >
                            #FF0000
                          </Text>
                        </div>
                      </div>
                      <div className="bg-red-A400 flex flex-1 flex-col gap-2.5 h-[107px] md:h-auto items-start justify-between outline outline-[3px] outline-blue_gray-900 p-2.5 rounded-[10px] w-full">
                        <div className="flex flex-col items-start justify-start px-[5px] py-0.5 w-full">
                          <Text
                            className="text-base text-white-A700"
                            size="txtInterRegular16WhiteA700"
                          >
                            55
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-end px-[5px] py-0.5 w-full">
                          <Text
                            className="text-sm text-white-A700 w-auto"
                            size="txtInterRegular14WhiteA700"
                          >
                            #FF1919
                          </Text>
                        </div>
                      </div>
                      <div className="bg-red-500 flex flex-1 flex-col gap-2.5 h-[107px] md:h-auto items-start justify-between outline outline-[3px] outline-blue_gray-900 p-2.5 rounded-[10px] w-full">
                        <div className="flex flex-col items-start justify-start px-[5px] py-0.5 w-full">
                          <Text
                            className="text-base text-white-A700"
                            size="txtInterRegular16WhiteA700"
                          >
                            60
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-end px-[5px] py-0.5 w-full">
                          <Text
                            className="text-sm text-white-A700 w-auto"
                            size="txtInterRegular14WhiteA700"
                          >
                            #FF3333
                          </Text>
                        </div>
                      </div>
                      <div className="bg-red-200 flex flex-1 flex-col gap-2.5 h-[107px] md:h-auto items-start justify-between outline outline-[3px] outline-blue_gray-900 p-2.5 rounded-[10px] w-full">
                        <div className="flex flex-col items-start justify-start px-[5px] py-0.5 w-full">
                          <Text
                            className="text-base text-black-900_01"
                            size="txtInterRegular16"
                          >
                            80
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-end px-[5px] py-0.5 w-full">
                          <Text
                            className="text-black-900_01 text-sm w-auto"
                            size="txtInterRegular14"
                          >
                            #FF9999
                          </Text>
                        </div>
                      </div>
                      <div className="bg-red-100 flex flex-1 flex-col gap-2.5 h-[107px] md:h-auto items-start justify-between outline outline-[3px] outline-blue_gray-900 p-2.5 rounded-[10px] w-full">
                        <div className="flex flex-col items-start justify-start px-[5px] py-0.5 w-full">
                          <Text
                            className="text-base text-black-900_01"
                            size="txtInterRegular16"
                          >
                            90
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-end px-[5px] py-0.5 w-full">
                          <Text
                            className="text-black-900_01 text-sm w-auto"
                            size="txtInterRegular14"
                          >
                            #FFCCCC
                          </Text>
                        </div>
                      </div>
                      <div className="bg-deep_orange-50 flex flex-1 flex-col gap-2.5 h-[107px] md:h-auto items-start justify-between outline outline-[3px] outline-blue_gray-900 p-2.5 rounded-[10px] w-full">
                        <div className="flex flex-col items-start justify-start px-[5px] py-0.5 w-full">
                          <Text
                            className="text-base text-black-900_01"
                            size="txtInterRegular16"
                          >
                            95
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-end px-[5px] py-0.5 w-full">
                          <Text
                            className="text-black-900_01 text-sm w-auto"
                            size="txtInterRegular14"
                          >
                            #FFE5E5
                          </Text>
                        </div>
                      </div>
                      <div className="bg-gray-50 flex flex-1 flex-col gap-2.5 h-[107px] md:h-auto items-start justify-between outline outline-[3px] outline-blue_gray-900 p-2.5 rounded-[10px] w-full">
                        <div className="flex flex-col items-start justify-start px-[5px] py-0.5 w-full">
                          <Text
                            className="text-base text-black-900_01"
                            size="txtInterRegular16"
                          >
                            99
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-end px-[5px] py-0.5 w-full">
                          <Text
                            className="text-black-900_01 text-sm w-auto"
                            size="txtInterRegular14"
                          >
                            #FFFAFA
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 md:flex-col flex-row gap-[59px] items-center justify-start w-full">
                  <div className="flex sm:flex-1 flex-col gap-[21px] items-start justify-start w-auto sm:w-full">
                    <Text
                      className="md:text-4xl sm:text-[34px] text-[38px] text-white-A700 w-auto"
                      size="txtInterSemiBold38"
                    >
                      Black Shades
                    </Text>
                    <Text
                      className="leading-[140.00%] max-w-[424px] md:max-w-full text-gray-300 text-lg"
                      size="txtInterRegular18"
                    >
                      Dark Colors - Setting the thematic tone and serving as the
                      predominant background hues in this template
                    </Text>
                  </div>
                  <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-1 flex-col items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full">
                    <div className="md:gap-5 gap-[27px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                      <div className="bg-black-900 flex flex-1 flex-col gap-2.5 h-[107px] md:h-auto items-start justify-between outline outline-[3px] outline-blue_gray-900 p-2.5 rounded-[10px] w-full">
                        <div className="flex flex-col items-start justify-start px-[5px] py-0.5 w-full">
                          <Text
                            className="text-base text-white-A700"
                            size="txtInterRegular16WhiteA700"
                          >
                            06
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-end px-[5px] py-0.5 w-full">
                          <Text
                            className="text-sm text-white-A700 w-auto"
                            size="txtInterRegular14WhiteA700"
                          >
                            #0F0F0F
                          </Text>
                        </div>
                      </div>
                      <div className="bg-gray-900_01 flex flex-1 flex-col gap-2.5 h-[107px] md:h-auto items-start justify-between outline outline-[3px] outline-blue_gray-900 p-2.5 rounded-[10px] w-full">
                        <div className="flex flex-col items-start justify-start px-[5px] py-0.5 w-full">
                          <Text
                            className="text-base text-white-A700"
                            size="txtInterRegular16WhiteA700"
                          >
                            08
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-end px-[5px] py-0.5 w-full">
                          <Text
                            className="text-sm text-white-A700 w-auto"
                            size="txtInterRegular14WhiteA700"
                          >
                            #141414
                          </Text>
                        </div>
                      </div>
                      <div className="bg-gray-900_03 flex flex-1 flex-col gap-2.5 h-[107px] md:h-auto items-start justify-between outline outline-[3px] outline-blue_gray-900 p-2.5 rounded-[10px] w-full">
                        <div className="flex flex-col items-start justify-start px-[5px] py-0.5 w-full">
                          <Text
                            className="text-base text-white-A700 w-auto"
                            size="txtInterRegular16WhiteA700"
                          >
                            10
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-end px-[5px] py-0.5 w-full">
                          <Text
                            className="text-sm text-white-A700 w-auto"
                            size="txtInterRegular14WhiteA700"
                          >
                            #1A1A1A
                          </Text>
                        </div>
                      </div>
                      <div className="bg-gray-900_02 flex flex-1 flex-col gap-2.5 h-[107px] md:h-auto items-start justify-between outline outline-[3px] outline-blue_gray-900 p-2.5 rounded-[10px] w-full">
                        <div className="flex flex-col items-start justify-start px-[5px] py-0.5 w-full">
                          <Text
                            className="text-base text-white-A700 w-auto"
                            size="txtInterRegular16WhiteA700"
                          >
                            12
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-end px-[5px] py-0.5 w-full">
                          <Text
                            className="text-sm text-white-A700 w-auto"
                            size="txtInterRegular14WhiteA700"
                          >
                            #1F1F1F
                          </Text>
                        </div>
                      </div>
                      <div className="bg-gray-900 flex flex-1 flex-col gap-2.5 h-[107px] md:h-auto items-start justify-between outline outline-[3px] outline-blue_gray-900 p-2.5 rounded-[10px] w-full">
                        <div className="flex flex-col items-start justify-start px-[5px] py-0.5 w-full">
                          <Text
                            className="text-base text-white-A700 w-auto"
                            size="txtInterRegular16WhiteA700"
                          >
                            15
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-end px-[5px] py-0.5 w-full">
                          <Text
                            className="text-sm text-white-A700 w-auto"
                            size="txtInterRegular14WhiteA700"
                          >
                            #262626
                          </Text>
                        </div>
                      </div>
                      <div className="bg-blue_gray-900 flex flex-1 flex-col gap-2.5 h-[107px] md:h-auto items-start justify-between outline outline-[3px] outline-blue_gray-900 p-2.5 rounded-[10px] w-full">
                        <div className="flex flex-col items-start justify-start px-[5px] py-0.5 w-full">
                          <Text
                            className="text-base text-white-A700"
                            size="txtInterRegular16WhiteA700"
                          >
                            20
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-end px-[5px] py-0.5 w-full">
                          <Text
                            className="text-sm text-white-A700 w-auto"
                            size="txtInterRegular14WhiteA700"
                          >
                            #333333
                          </Text>
                        </div>
                      </div>
                      <div className="bg-gray-800 flex flex-1 flex-col gap-2.5 h-[107px] md:h-auto items-start justify-between outline outline-[3px] outline-blue_gray-900 p-2.5 rounded-[10px] w-full">
                        <div className="flex flex-col items-start justify-start px-[5px] py-0.5 w-full">
                          <Text
                            className="text-base text-white-A700"
                            size="txtInterRegular16WhiteA700"
                          >
                            25
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-end px-[5px] py-0.5 w-full">
                          <Text
                            className="text-sm text-white-A700 w-auto"
                            size="txtInterRegular14WhiteA700"
                          >
                            #404040
                          </Text>
                        </div>
                      </div>
                      <div className="bg-gray-800_01 flex flex-1 flex-col gap-2.5 h-[107px] md:h-auto items-start justify-between outline outline-[3px] outline-blue_gray-900 p-2.5 rounded-[10px] w-full">
                        <div className="flex flex-col items-start justify-start px-[5px] py-0.5 w-full">
                          <Text
                            className="text-base text-white-A700"
                            size="txtInterRegular16WhiteA700"
                          >
                            30
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-end px-[5px] py-0.5 w-full">
                          <Text
                            className="text-sm text-white-A700 w-auto"
                            size="txtInterRegular14WhiteA700"
                          >
                            #4C4C4C
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 md:flex-col flex-row gap-[59px] items-center justify-start w-full">
                  <div className="flex sm:flex-1 flex-col gap-[21px] items-start justify-start w-auto sm:w-full">
                    <Text
                      className="md:text-4xl sm:text-[34px] text-[38px] text-white-A700 w-auto"
                      size="txtInterSemiBold38"
                    >
                      Grey Shades
                    </Text>
                    <Text
                      className="leading-[140.00%] max-w-[424px] md:max-w-full text-gray-300 text-lg"
                      size="txtInterRegular18"
                    >
                      Grey Colors - Employed for creating inviting and readable
                      text elements throughout the template
                    </Text>
                  </div>
                  <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-1 flex-col items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full">
                    <div className="md:gap-5 gap-[27px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                      <div className="bg-gray-500 flex flex-1 flex-col gap-2.5 h-[107px] md:h-auto items-start justify-between outline outline-[3px] outline-blue_gray-900 p-2.5 rounded-[10px] w-full">
                        <div className="flex flex-col items-start justify-start px-[5px] py-0.5 w-full">
                          <Text
                            className="text-base text-black-900_01"
                            size="txtInterRegular16"
                          >
                            60
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-end px-[5px] py-0.5 w-full">
                          <Text
                            className="text-black-900_01 text-sm w-auto"
                            size="txtInterRegular14"
                          >
                            #999999
                          </Text>
                        </div>
                      </div>
                      <div className="bg-gray-500_01 flex flex-1 flex-col gap-2.5 h-[107px] md:h-auto items-start justify-between outline outline-[3px] outline-blue_gray-900 p-2.5 rounded-[10px] w-full">
                        <div className="flex flex-col items-start justify-start px-[5px] py-0.5 w-full">
                          <Text
                            className="text-base text-black-900_01"
                            size="txtInterRegular16"
                          >
                            65
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-end px-[5px] py-0.5 w-full">
                          <Text
                            className="text-black-900_01 text-sm w-auto"
                            size="txtInterRegular14"
                          >
                            #A6A6A6
                          </Text>
                        </div>
                      </div>
                      <div className="bg-gray-400_02 flex flex-1 flex-col gap-2.5 h-[107px] md:h-auto items-start justify-between outline outline-[3px] outline-blue_gray-900 p-2.5 rounded-[10px] w-full">
                        <div className="flex flex-col items-start justify-start px-[5px] py-0.5 w-full">
                          <Text
                            className="text-base text-black-900_01"
                            size="txtInterRegular16"
                          >
                            70
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-end px-[5px] py-0.5 w-full">
                          <Text
                            className="text-black-900_01 text-sm w-auto"
                            size="txtInterRegular14"
                          >
                            #B3B3B3
                          </Text>
                        </div>
                      </div>
                      <div className="bg-gray-400 flex flex-1 flex-col gap-2.5 h-[107px] md:h-auto items-start justify-between outline outline-[3px] outline-blue_gray-900 p-2.5 rounded-[10px] w-full">
                        <div className="flex flex-col items-start justify-start px-[5px] py-0.5 w-full">
                          <Text
                            className="text-base text-black-900_01"
                            size="txtInterRegular16"
                          >
                            75
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-end px-[5px] py-0.5 w-full">
                          <Text
                            className="text-black-900_01 text-sm w-auto"
                            size="txtInterRegular14"
                          >
                            #BFBFBF
                          </Text>
                        </div>
                      </div>
                      <div className="bg-gray-300 flex flex-1 flex-col gap-2.5 h-[107px] md:h-auto items-start justify-between outline outline-[3px] outline-blue_gray-900 p-2.5 rounded-[10px] w-full">
                        <div className="flex flex-col items-start justify-start px-[5px] py-0.5 w-full">
                          <Text
                            className="text-base text-black-900_01"
                            size="txtInterRegular16"
                          >
                            90
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-end px-[5px] py-0.5 w-full">
                          <Text
                            className="text-black-900_01 text-sm w-auto"
                            size="txtInterRegular14"
                          >
                            #E4E4E7
                          </Text>
                        </div>
                      </div>
                      <div className="bg-blue_gray-50 flex flex-1 flex-col gap-2.5 h-[107px] md:h-auto items-start justify-between outline outline-[3px] outline-blue_gray-900 p-2.5 rounded-[10px] w-full">
                        <div className="flex flex-col items-start justify-start px-[5px] py-0.5 w-full">
                          <Text
                            className="text-base text-black-900_01"
                            size="txtInterRegular16"
                          >
                            95
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-end px-[5px] py-0.5 w-full">
                          <Text
                            className="text-black-900_01 text-sm w-auto"
                            size="txtInterRegular14"
                          >
                            #F1F1F3
                          </Text>
                        </div>
                      </div>
                      <div className="bg-gray-100 flex flex-1 flex-col gap-2.5 h-[107px] md:h-auto items-start justify-between outline outline-[3px] outline-blue_gray-900 p-2.5 rounded-[10px] w-full">
                        <div className="flex flex-col items-start justify-start px-[5px] py-0.5 w-full">
                          <Text
                            className="text-base text-black-900_01"
                            size="txtInterRegular16"
                          >
                            97
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-end px-[5px] py-0.5 w-full">
                          <Text
                            className="text-black-900_01 text-sm w-auto"
                            size="txtInterRegular14"
                          >
                            #F7F7F8
                          </Text>
                        </div>
                      </div>
                      <div className="bg-gray-50_01 flex flex-1 flex-col gap-2.5 h-[107px] md:h-auto items-start justify-between outline outline-[3px] outline-blue_gray-900 p-2.5 rounded-[10px] w-full">
                        <div className="flex flex-col items-start justify-start px-[5px] py-0.5 w-full">
                          <Text
                            className="text-base text-black-900_01"
                            size="txtInterRegular16"
                          >
                            99
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-end px-[5px] py-0.5 w-full">
                          <Text
                            className="text-black-900_01 text-sm w-auto"
                            size="txtInterRegular14"
                          >
                            #FCFCFD
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <div className="flex flex-col md:gap-10 gap-[100px] items-start justify-start max-w-[1680px] mt-[149px] w-full">
            <div className="flex flex-col gap-[18px] items-start justify-start md:pr-10 sm:pr-5 pr-[300px] w-full">
              <Text
                className="sm:text-3xl md:text-[32px] text-[34px] text-white-A700 w-full"
                size="txtInterSemiBold34"
              >
                🖍 Typography
              </Text>
              <Text
                className="leading-[150.00%] max-w-[1380px] md:max-w-full text-gray-300 text-lg"
                size="txtInterRegular18"
              >
                The font listed below is employed throughout this template, in
                line with our commitment to accessibility for all designers,
                using Google Fonts to ensure universal availability and
                readability across our designs.
              </Text>
            </div>
            <div className="bg-black-900 flex flex-col font-manrope gap-[30px] items-start justify-start outline outline-[3px] outline-gray-900 p-20 md:px-10 sm:px-5 rounded-[12px] w-full">
              <div className="flex md:flex-col flex-row gap-[30px] items-center justify-start w-full">
                <div className="bg-gray-900_01 flex md:flex-1 flex-col items-start justify-start outline outline-[1px] outline-gray-900 p-[50px] md:px-10 sm:px-5 rounded-[12px] w-auto md:w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 h-[175px] md:h-auto items-start justify-start w-[527px] sm:w-full">
                    <div className="flex flex-col h-[175px] md:h-auto items-end justify-center">
                      <div className="h-[51px] outline outline-gray-800_01 w-full"></div>
                      <Line className="bg-gray-800_01 h-[73px] w-px" />
                      <div className="h-[51px] outline outline-gray-800_01 w-full"></div>
                    </div>
                    <div className="md:h-[117px] h-[175px] relative">
                      <div className="absolute flex flex-col inset-x-[0] mx-auto top-[0] w-full">
                        <div className="bg-gray-900_01 border-b border-gray-800_01 border-solid h-[51px] mx-auto w-full"></div>
                        <Text
                          className="mt-[-20.5px] mx-auto md:text-5xl text-[100px] text-white-A700 w-auto z-[1]"
                          size="txtManropeBold100"
                        >
                          Manrope
                        </Text>
                      </div>
                      <div className="absolute bg-gray-900_01 border-gray-800_01 border-solid border-t bottom-[0] h-[51px] inset-x-[0] mx-auto w-full"></div>
                    </div>
                    <Img
                      className="h-full w-[49px]"
                      src="images/img_subcontainer_gray_800_01.svg"
                      alt="subcontainer"
                    />
                  </div>
                </div>
                <div className="bg-gray-900_01 flex flex-1 flex-col font-inter gap-[30px] h-full items-start justify-center outline outline-[1px] outline-gray-900 p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
                    size="txtInterSemiBold24"
                  >
                    Used Font Weights
                  </Text>
                  <div className="flex sm:flex-col flex-row font-manrope gap-2.5 items-start justify-start w-full">
                    <Button
                      className="!text-gray-500 border border-gray-900 border-solid cursor-pointer min-w-[120px] rounded-[28px] text-center text-xl"
                      color="black_900"
                      size="md"
                      variant="fill"
                    >
                      Regular
                    </Button>
                    <Button
                      className="!text-gray-500 border border-gray-900 border-solid cursor-pointer font-medium min-w-[124px] rounded-[28px] text-center text-xl"
                      color="black_900"
                      size="md"
                      variant="fill"
                    >
                      Medium
                    </Button>
                    <Button
                      className="!text-gray-500 border border-gray-900 border-solid cursor-pointer font-semibold min-w-[142px] rounded-[28px] text-center text-xl"
                      color="black_900"
                      size="md"
                      variant="fill"
                    >
                      Semi Bold
                    </Button>
                    <Button
                      className="!text-gray-500 border border-gray-900 border-solid cursor-pointer font-bold min-w-[91px] rounded-[28px] text-center text-xl"
                      color="black_900"
                      size="md"
                      variant="fill"
                    >
                      Bold
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900_01 flex flex-col font-inter md:gap-10 gap-[60px] items-start justify-center outline outline-[1px] outline-gray-900 p-20 md:px-10 sm:px-5 rounded-[12px] w-full">
                <List
                  className="flex flex-col gap-[60px] items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-col gap-[30px] items-start justify-center w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
                      size="txtInterMedium24"
                    >
                      Capital Letters
                    </Text>
                    <div className="flex flex-col font-manrope items-start justify-start w-full">
                      <div className="flex flex-col gap-2.5 items-start justify-start w-[97%]">
                        <div className="flex md:flex-col flex-row gap-2.5 items-center justify-between w-full">
                          <Button
                            className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[53px] rounded-[10px] text-center text-xl"
                            shape="round"
                            color="black_900"
                            size="md"
                            variant="fill"
                          >
                            A
                          </Button>
                          <Button
                            className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[53px] rounded-[10px] text-center text-xl"
                            shape="round"
                            color="black_900"
                            size="md"
                            variant="fill"
                          >
                            B
                          </Button>
                          <Button
                            className="border border-gray-900 border-solid cursor-pointer font-medium h-14 rounded-[10px] text-center text-xl w-[55px]"
                            shape="round"
                            color="black_900"
                            size="md"
                            variant="fill"
                          >
                            C
                          </Button>
                          <Button
                            className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[54px] rounded-[10px] text-center text-xl"
                            shape="round"
                            color="black_900"
                            size="md"
                            variant="fill"
                          >
                            D
                          </Button>
                          <Button
                            className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[52px] rounded-[10px] text-center text-xl"
                            shape="round"
                            color="black_900"
                            size="md"
                            variant="fill"
                          >
                            E
                          </Button>
                          <Button
                            className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[51px] rounded-[10px] text-center text-xl"
                            shape="round"
                            color="black_900"
                            size="md"
                            variant="fill"
                          >
                            F
                          </Button>
                          <Button
                            className="border border-gray-900 border-solid cursor-pointer font-medium h-14 rounded-[10px] text-center text-xl w-[55px]"
                            shape="round"
                            color="black_900"
                            size="md"
                            variant="fill"
                          >
                            G
                          </Button>
                          <Button
                            className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[54px] rounded-[10px] text-center text-xl"
                            shape="round"
                            color="black_900"
                            size="md"
                            variant="fill"
                          >
                            H
                          </Button>
                          <Button
                            className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[45px] rounded-[10px] text-center text-xl"
                            shape="round"
                            color="black_900"
                            size="md"
                            variant="fill"
                          >
                            I
                          </Button>
                          <Button
                            className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[50px] rounded-[10px] text-center text-xl"
                            shape="round"
                            color="black_900"
                            size="md"
                            variant="fill"
                          >
                            J
                          </Button>
                          <Button
                            className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[53px] rounded-[10px] text-center text-xl"
                            shape="round"
                            color="black_900"
                            size="md"
                            variant="fill"
                          >
                            K
                          </Button>
                          <Button
                            className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[51px] rounded-[10px] text-center text-xl"
                            shape="round"
                            color="black_900"
                            size="md"
                            variant="fill"
                          >
                            L
                          </Button>
                          <Button
                            className="border border-gray-900 border-solid cursor-pointer font-medium h-14 rounded-[10px] text-center text-xl w-[57px]"
                            shape="round"
                            color="black_900"
                            size="md"
                            variant="fill"
                          >
                            M
                          </Button>
                          <Button
                            className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[54px] rounded-[10px] text-center text-xl"
                            shape="round"
                            color="black_900"
                            size="md"
                            variant="fill"
                          >
                            N
                          </Button>
                          <Button
                            className="border border-gray-900 border-solid cursor-pointer font-medium h-14 rounded-[10px] text-center text-xl w-[55px]"
                            shape="round"
                            color="black_900"
                            size="md"
                            variant="fill"
                          >
                            O
                          </Button>
                          <Button
                            className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[53px] rounded-[10px] text-center text-xl"
                            shape="round"
                            color="black_900"
                            size="md"
                            variant="fill"
                          >
                            P
                          </Button>
                          <Button
                            className="border border-gray-900 border-solid cursor-pointer font-medium h-14 rounded-[10px] text-center text-xl w-[55px]"
                            shape="round"
                            color="black_900"
                            size="md"
                            variant="fill"
                          >
                            Q
                          </Button>
                          <Button
                            className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[53px] rounded-[10px] text-center text-xl"
                            shape="round"
                            color="black_900"
                            size="md"
                            variant="fill"
                          >
                            R
                          </Button>
                          <Button
                            className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[53px] rounded-[10px] text-center text-xl"
                            shape="round"
                            color="black_900"
                            size="md"
                            variant="fill"
                          >
                            S
                          </Button>
                          <Button
                            className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[52px] rounded-[10px] text-center text-xl"
                            shape="round"
                            color="black_900"
                            size="md"
                            variant="fill"
                          >
                            T
                          </Button>
                          <Button
                            className="border border-gray-900 border-solid cursor-pointer font-medium h-14 rounded-[10px] text-center text-xl w-[55px]"
                            shape="round"
                            color="black_900"
                            size="md"
                            variant="fill"
                          >
                            U
                          </Button>
                        </div>
                        <div className="flex flex-row gap-2.5 items-center justify-start w-[24%] md:w-full">
                          <Button
                            className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[53px] rounded-[10px] text-center text-xl"
                            shape="round"
                            color="black_900"
                            size="md"
                            variant="fill"
                          >
                            V
                          </Button>
                          <Button
                            className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[59px] rounded-[10px] text-center text-xl"
                            shape="round"
                            color="black_900"
                            size="md"
                            variant="fill"
                          >
                            W
                          </Button>
                          <Button
                            className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[53px] rounded-[10px] text-center text-xl"
                            shape="round"
                            color="black_900"
                            size="md"
                            variant="fill"
                          >
                            X
                          </Button>
                          <Button
                            className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[52px] rounded-[10px] text-center text-xl"
                            shape="round"
                            color="black_900"
                            size="md"
                            variant="fill"
                          >
                            Y
                          </Button>
                          <Button
                            className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[53px] rounded-[10px] text-center text-xl"
                            shape="round"
                            color="black_900"
                            size="md"
                            variant="fill"
                          >
                            Z
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Line className="self-center h-2.5 bg-blue_gray-900 w-full" />
                  <div className="flex flex-1 flex-col gap-[30px] items-start justify-center w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
                      size="txtInterMedium24"
                    >
                      Small Letters
                    </Text>
                    <div className="flex flex-col font-manrope items-start justify-start md:pr-10 sm:pr-5 pr-[45px] w-full">
                      <div className="flex flex-col gap-2.5 items-start justify-start w-[97%]">
                        <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-between w-full">
                          <Button
                            className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[52px] rounded-[10px] text-center text-xl"
                            shape="round"
                            color="black_900"
                            size="md"
                            variant="fill"
                          >
                            a
                          </Button>
                          <Button
                            className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[52px] rounded-[10px] text-center text-xl"
                            shape="round"
                            color="black_900"
                            size="md"
                            variant="fill"
                          >
                            b
                          </Button>
                          <Button
                            className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[52px] rounded-[10px] text-center text-xl"
                            shape="round"
                            color="black_900"
                            size="md"
                            variant="fill"
                          >
                            c
                          </Button>
                          <Button
                            className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[53px] rounded-[10px] text-center text-xl"
                            shape="round"
                            color="black_900"
                            size="md"
                            variant="fill"
                          >
                            d
                          </Button>
                          <Button
                            className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[52px] rounded-[10px] text-center text-xl"
                            shape="round"
                            color="black_900"
                            size="md"
                            variant="fill"
                          >
                            e
                          </Button>
                          <Button
                            className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[48px] rounded-[10px] text-center text-xl"
                            shape="round"
                            color="black_900"
                            size="md"
                            variant="fill"
                          >
                            f
                          </Button>
                          <Button
                            className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[52px] rounded-[10px] text-center text-xl"
                            shape="round"
                            color="black_900"
                            size="md"
                            variant="fill"
                          >
                            g
                          </Button>
                          <Button
                            className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[53px] rounded-[10px] text-center text-xl"
                            shape="round"
                            color="black_900"
                            size="md"
                            variant="fill"
                          >
                            h
                          </Button>
                          <Button
                            className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[45px] rounded-[10px] text-center text-xl"
                            shape="round"
                            color="black_900"
                            size="md"
                            variant="fill"
                          >
                            i
                          </Button>
                          <Button
                            className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[46px] rounded-[10px] text-center text-xl"
                            shape="round"
                            color="black_900"
                            size="md"
                            variant="fill"
                          >
                            j
                          </Button>
                          <Button
                            className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[51px] rounded-[10px] text-center text-xl"
                            shape="round"
                            color="black_900"
                            size="md"
                            variant="fill"
                          >
                            k
                          </Button>
                          <Button
                            className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[45px] rounded-[10px] text-center text-xl"
                            shape="round"
                            color="black_900"
                            size="md"
                            variant="fill"
                          >
                            l
                          </Button>
                          <Button
                            className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[58px] rounded-[10px] text-center text-xl"
                            shape="round"
                            color="black_900"
                            size="md"
                            variant="fill"
                          >
                            m
                          </Button>
                          <Button
                            className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[53px] rounded-[10px] text-center text-xl"
                            shape="round"
                            color="black_900"
                            size="md"
                            variant="fill"
                          >
                            n
                          </Button>
                          <Button
                            className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[53px] rounded-[10px] text-center text-xl"
                            shape="round"
                            color="black_900"
                            size="md"
                            variant="fill"
                          >
                            o
                          </Button>
                          <Button
                            className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[52px] rounded-[10px] text-center text-xl"
                            shape="round"
                            color="black_900"
                            size="md"
                            variant="fill"
                          >
                            p
                          </Button>
                          <Button
                            className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[53px] rounded-[10px] text-center text-xl"
                            shape="round"
                            color="black_900"
                            size="md"
                            variant="fill"
                          >
                            q
                          </Button>
                          <Button
                            className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[48px] rounded-[10px] text-center text-xl"
                            shape="round"
                            color="black_900"
                            size="md"
                            variant="fill"
                          >
                            r
                          </Button>
                          <Button
                            className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[51px] rounded-[10px] text-center text-xl"
                            shape="round"
                            color="black_900"
                            size="md"
                            variant="fill"
                          >
                            s
                          </Button>
                          <Button
                            className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[49px] rounded-[10px] text-center text-xl"
                            shape="round"
                            color="black_900"
                            size="md"
                            variant="fill"
                          >
                            t
                          </Button>
                          <Button
                            className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[53px] rounded-[10px] text-center text-xl"
                            shape="round"
                            color="black_900"
                            size="md"
                            variant="fill"
                          >
                            u
                          </Button>
                        </div>
                        <div className="flex flex-row gap-2.5 items-center justify-start w-[24%] md:w-full">
                          <Button
                            className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[51px] rounded-[10px] text-center text-xl"
                            shape="round"
                            color="black_900"
                            size="md"
                            variant="fill"
                          >
                            v
                          </Button>
                          <Button
                            className="border border-gray-900 border-solid cursor-pointer font-medium h-14 rounded-[10px] text-center text-xl w-14"
                            shape="round"
                            color="black_900"
                            size="md"
                            variant="fill"
                          >
                            w
                          </Button>
                          <Button
                            className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[51px] rounded-[10px] text-center text-xl"
                            shape="round"
                            color="black_900"
                            size="md"
                            variant="fill"
                          >
                            x
                          </Button>
                          <Button
                            className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[51px] rounded-[10px] text-center text-xl"
                            shape="round"
                            color="black_900"
                            size="md"
                            variant="fill"
                          >
                            y
                          </Button>
                          <Button
                            className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[51px] rounded-[10px] text-center text-xl"
                            shape="round"
                            color="black_900"
                            size="md"
                            variant="fill"
                          >
                            z
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
                <div className="flex flex-col gap-[30px] items-start justify-center w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
                    size="txtInterMedium24"
                  >
                    Others
                  </Text>
                  <div className="flex sm:flex-col flex-row font-manrope gap-2.5 items-start justify-start w-full">
                    <Button
                      className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[53px] rounded-[10px] text-center text-xl"
                      shape="round"
                      color="black_900"
                      size="md"
                      variant="fill"
                    >
                      0
                    </Button>
                    <Button
                      className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[49px] rounded-[10px] text-center text-xl"
                      shape="round"
                      color="black_900"
                      size="md"
                      variant="fill"
                    >
                      1
                    </Button>
                    <Button
                      className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[52px] rounded-[10px] text-center text-xl"
                      shape="round"
                      color="black_900"
                      size="md"
                      variant="fill"
                    >
                      2
                    </Button>
                    <Button
                      className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[52px] rounded-[10px] text-center text-xl"
                      shape="round"
                      color="black_900"
                      size="md"
                      variant="fill"
                    >
                      3
                    </Button>
                    <Button
                      className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[52px] rounded-[10px] text-center text-xl"
                      shape="round"
                      color="black_900"
                      size="md"
                      variant="fill"
                    >
                      4
                    </Button>
                    <Button
                      className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[52px] rounded-[10px] text-center text-xl"
                      shape="round"
                      color="black_900"
                      size="md"
                      variant="fill"
                    >
                      5
                    </Button>
                    <Button
                      className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[53px] rounded-[10px] text-center text-xl"
                      shape="round"
                      color="black_900"
                      size="md"
                      variant="fill"
                    >
                      6
                    </Button>
                    <Button
                      className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[51px] rounded-[10px] text-center text-xl"
                      shape="round"
                      color="black_900"
                      size="md"
                      variant="fill"
                    >
                      7
                    </Button>
                    <Button
                      className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[52px] rounded-[10px] text-center text-xl"
                      shape="round"
                      color="black_900"
                      size="md"
                      variant="fill"
                    >
                      8
                    </Button>
                    <Button
                      className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[53px] rounded-[10px] text-center text-xl"
                      shape="round"
                      color="black_900"
                      size="md"
                      variant="fill"
                    >
                      9
                    </Button>
                    <Button
                      className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[47px] rounded-[10px] text-center text-xl"
                      shape="round"
                      color="black_900"
                      size="md"
                      variant="fill"
                    >
                      !
                    </Button>
                    <Button
                      className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[59px] rounded-[10px] text-center text-xl"
                      shape="round"
                      color="black_900"
                      size="md"
                      variant="fill"
                    >
                      @
                    </Button>
                    <Button
                      className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[59px] rounded-[10px] text-center text-xl"
                      shape="round"
                      color="black_900"
                      size="md"
                      variant="fill"
                    >
                      #
                    </Button>
                    <Button
                      className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[53px] rounded-[10px] text-center text-xl"
                      shape="round"
                      color="black_900"
                      size="md"
                      variant="fill"
                    >
                      $
                    </Button>
                    <Button
                      className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[59px] rounded-[10px] text-center text-xl"
                      shape="round"
                      color="black_900"
                      size="md"
                      variant="fill"
                    >
                      %
                    </Button>
                    <Button
                      className="border border-gray-900 border-solid flex items-center justify-center rounded-[10px] w-[4%]"
                      shape="round"
                      color="black_900"
                      size="sm"
                      variant="fill"
                    >
                      <Img
                        src="images/img_textcontainer.png"
                        alt="textcontainer"
                      />
                    </Button>
                    <Button
                      className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[54px] rounded-[10px] text-center text-xl"
                      shape="round"
                      color="black_900"
                      size="md"
                      variant="fill"
                    >
                      &
                    </Button>
                    <Button
                      className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[49px] rounded-[10px] text-center text-xl"
                      shape="round"
                      color="black_900"
                      size="md"
                      variant="fill"
                    >
                      (
                    </Button>
                    <Button
                      className="border border-gray-900 border-solid cursor-pointer font-medium min-w-[49px] rounded-[10px] text-center text-xl"
                      shape="round"
                      color="black_900"
                      size="md"
                      variant="fill"
                    >
                      )
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:gap-10 gap-[100px] items-start justify-start max-w-[1680px] mt-[147px] w-full">
            <div className="flex flex-col gap-[18px] items-start justify-start md:pr-10 sm:pr-5 pr-[300px] w-full">
              <Text
                className="sm:text-3xl md:text-[32px] text-[34px] text-white-A700 w-full"
                size="txtInterSemiBold34"
              >
                🪄 Assets
              </Text>
              <Text
                className="text-gray-300 text-lg w-full"
                size="txtInterRegular18"
              >
                <>
                  Below, you&#39;ll find a list of the assets utilized in this
                  template.
                </>
              </Text>
            </div>
            <div className="bg-black-900 flex flex-col gap-[30px] items-start justify-start outline outline-[3px] outline-gray-900 p-20 md:px-10 sm:px-5 rounded-[12px] w-full">
              <div className="bg-gray-900_01 flex flex-col gap-[30px] items-start justify-center outline outline-[1px] outline-gray-900 p-20 md:px-10 sm:px-5 rounded-[12px] w-full">
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
                  size="txtInterMedium24"
                >
                  Logo
                </Text>
                <List
                  className="bg-black-900 border border-gray-900 border-solid sm:flex-col flex-row gap-[50px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center md:px-10 sm:px-5 px-[50px] py-20 rounded-[12px] w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
                    <Img
                      className="h-[60px] w-[199px]"
                      src="images/img_logo.svg"
                      alt="logo"
                    />
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                      <Line className="bg-blue_gray-900 h-[22px] sm:h-px sm:w-full w-px" />
                      <div className="flex flex-1 sm:flex-col flex-row gap-0.5 items-center justify-start w-full">
                        <Line className="bg-blue_gray-900 h-px rotate-[180deg] w-[36%]" />
                        <Text
                          className="text-gray-300 text-lg w-auto"
                          size="txtInterMedium18"
                        >
                          For Desktop
                        </Text>
                        <Line className="bg-blue_gray-900 h-px rotate-[180deg] w-[36%]" />
                      </div>
                      <Line className="bg-blue_gray-900 h-[22px] sm:h-px sm:w-full w-px" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
                    <Img
                      className="h-[50px] w-[165px]"
                      src="images/img_logo.svg"
                      alt="logo"
                    />
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                      <Line className="bg-blue_gray-900 h-[22px] sm:h-px sm:w-full w-px" />
                      <div className="flex flex-1 sm:flex-col flex-row gap-0.5 items-center justify-start w-full">
                        <Line className="bg-blue_gray-900 h-px rotate-[180deg] w-[38%]" />
                        <Text
                          className="text-gray-300 text-lg w-auto"
                          size="txtInterMedium18"
                        >
                          For Laptop
                        </Text>
                        <Line className="bg-blue_gray-900 h-px rotate-[180deg] w-[38%]" />
                      </div>
                      <Line className="bg-blue_gray-900 h-[22px] sm:h-px sm:w-full w-px" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
                    <Img
                      className="h-[35px] w-[116px]"
                      src="images/img_logo.svg"
                      alt="logo"
                    />
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                      <Line className="bg-blue_gray-900 h-[22px] sm:h-px sm:w-full w-px" />
                      <div className="flex flex-1 sm:flex-col flex-row gap-0.5 items-center justify-start w-full">
                        <Line className="bg-blue_gray-900 h-px rotate-[180deg] w-[38%]" />
                        <Text
                          className="text-gray-300 text-lg w-auto"
                          size="txtInterMedium18"
                        >
                          For Mobile
                        </Text>
                        <Line className="bg-blue_gray-900 h-px rotate-[180deg] w-[38%]" />
                      </div>
                      <Line className="bg-blue_gray-900 h-[22px] sm:h-px sm:w-full w-px" />
                    </div>
                  </div>
                </List>
              </div>
              <div className="bg-gray-900_01 flex flex-col gap-[30px] items-start justify-center outline outline-[1px] outline-gray-900 p-20 md:px-10 sm:px-5 rounded-[12px] w-full">
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
                  size="txtInterMedium24"
                >
                  Abstract Designs
                </Text>
                <div className="bg-black-900 border border-gray-900 border-solid flex flex-col items-center justify-center p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full">
                  <Img
                    className="h-[200px] md:h-auto object-cover w-[200px]"
                    src="images/img_abstractdesign_200x200.png"
                    alt="abstractdesign"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TemplateGuidePage;
