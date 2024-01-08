import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import Footer from "components/Footer";

const SupportPageDesktopPage = () => {
  return (
    <>
      <div className="bg-gray-900_01 flex flex-col font-manrope items-center justify-start mx-auto w-full">
        <header className="flex md:flex-col flex-row md:gap-10 items-center justify-between md:px-5 px-[162px] py-[30px] w-full">
          <Img
            className="h-[60px] w-[199px]"
            src="images/img_logo.svg"
            alt="logo"
          />
          <ul className="bg-black-900 flex sm:flex-col flex-row gap-[30px] sm:hidden items-center justify-start outline outline-[4px] outline-gray-900_02 px-10 sm:px-5 py-2.5 rounded-[12px] w-auto common-row-list">
            <li>
              <a href="javascript:" className="text-gray-400 text-lg">
                <Text size="txtManropeRegular18Gray400">Home</Text>
              </a>
            </li>
            <li>
              <a href="javascript:" className="text-gray-400 text-lg">
                <Text size="txtManropeRegular18Gray400">Movies & Shows</Text>
              </a>
            </li>
            <li>
              <a href="javascript:">
                <Button
                  className="!text-white-A700 border border-gray-900_03 border-solid cursor-pointer font-medium rounded-lg text-center text-lg"
                  color="gray_900_03"
                  size="lg"
                  variant="fill"
                >
                  Support
                </Button>
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
        <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-start justify-start max-w-[1589px] mt-[115px] mx-auto md:px-5 w-full">
          <div className="flex sm:flex-1 flex-col gap-[50px] h-[739px] md:h-auto items-start justify-start w-[533px] sm:w-full">
            <div className="flex flex-col gap-3.5 items-start justify-start w-full">
              <Text
                className="leading-[150.00%] max-w-[533px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
                size="txtManropeBold48"
              >
                Welcome to our support page!
              </Text>
              <Text
                className="leading-[150.00%] max-w-[533px] md:max-w-full text-gray-500 text-lg"
                size="txtManropeRegular18"
              >
                <>
                  We&#39;re here to help you with any problems you may be having
                  with our product.
                </>
              </Text>
            </div>
            <div className="bg-black-900 flex flex-col items-center justify-start outline outline-[6px] outline-gray-900 rounded-md w-full">
              <div className="flex flex-col h-[477px] md:h-auto items-start justify-start rounded-md w-[533px] sm:w-full">
                <List
                  className="flex flex-col gap-5 items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 sm:flex-col flex-row gap-5 h-full items-start justify-start w-full">
                    <Img
                      className="flex-1 md:h-auto h-full max-h-[30px] object-cover rounded-[12px] sm:w-[]"
                      src="images/img_image.png"
                      alt="image"
                    />
                    <Img
                      className="flex-1 md:h-auto h-full max-h-[30px] object-cover rounded-[12px] sm:w-[]"
                      src="images/img_image_200x195.png"
                      alt="image_One"
                    />
                    <Img
                      className="flex-1 md:h-auto h-full max-h-[30px] object-cover rounded-[12px] sm:w-[]"
                      src="images/img_image_1.png"
                      alt="image_Two"
                    />
                    <Img
                      className="flex-1 md:h-auto h-full max-h-[30px] object-cover rounded-[12px] sm:w-[]"
                      src="images/img_image_2.png"
                      alt="image_Three"
                    />
                  </div>
                  <div className="flex flex-1 sm:flex-col flex-row gap-5 h-full items-start justify-start w-full">
                    <Img
                      className="flex-1 md:h-auto h-full max-h-[168px] object-cover rounded-[12px] sm:w-[]"
                      src="images/img_image_8.png"
                      alt="image"
                    />
                    <Img
                      className="flex-1 md:h-auto h-full max-h-[168px] object-cover rounded-[12px] sm:w-[]"
                      src="images/img_image_9.png"
                      alt="image_One"
                    />
                    <Img
                      className="flex-1 md:h-auto h-full max-h-[168px] object-cover rounded-[12px] sm:w-[]"
                      src="images/img_image_10.png"
                      alt="image_Two"
                    />
                    <Img
                      className="flex-1 md:h-auto h-full max-h-[168px] object-cover rounded-[12px] sm:w-[]"
                      src="images/img_image_11.png"
                      alt="image_Three"
                    />
                  </div>
                  <div className="flex flex-1 sm:flex-col flex-row gap-5 h-full items-start justify-start w-full">
                    <Img
                      className="flex-1 md:h-auto h-full max-h-[168px] object-cover rounded-[12px] sm:w-[]"
                      src="images/img_image_17.png"
                      alt="image"
                    />
                    <Img
                      className="flex-1 md:h-auto h-full max-h-[168px] object-cover rounded-[12px] sm:w-[]"
                      src="images/img_image_18.png"
                      alt="image_One"
                    />
                    <Img
                      className="flex-1 md:h-auto h-full max-h-[168px] object-cover rounded-[12px] sm:w-[]"
                      src="images/img_image_19.png"
                      alt="image_Two"
                    />
                    <Img
                      className="flex-1 md:h-auto h-full max-h-[168px] object-cover rounded-[12px] sm:w-[]"
                      src="images/img_image_20.png"
                      alt="image_Three"
                    />
                  </div>
                  <div className="flex flex-1 sm:flex-col flex-row gap-5 h-full items-start justify-start w-full">
                    <Img
                      className="flex-1 md:h-auto h-full max-h-[50px] object-cover rounded-[12px] sm:w-[]"
                      src="images/img_image_26.png"
                      alt="image"
                    />
                    <Img
                      className="flex-1 md:h-auto h-full max-h-[50px] object-cover rounded-[12px] sm:w-[]"
                      src="images/img_image_27.png"
                      alt="image_One"
                    />
                    <Img
                      className="flex-1 md:h-auto h-full max-h-[50px] object-cover rounded-[12px] sm:w-[]"
                      src="images/img_image_28.png"
                      alt="image_Two"
                    />
                    <Img
                      className="flex-1 md:h-auto h-full max-h-[50px] object-cover rounded-[12px] sm:w-[]"
                      src="images/img_image_29.png"
                      alt="image_Three"
                    />
                  </div>
                </List>
              </div>
            </div>
          </div>
          <div className="bg-black-900 border border-gray-900 border-solid flex flex-1 flex-col gap-[50px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full">
            <div className="flex md:flex-col flex-row gap-[50px] items-start justify-start w-full">
              <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="text-lg text-white-A700 w-full"
                  size="txtManropeSemiBold18"
                >
                  First Name
                </Text>
                <Input
                  name="inputfield"
                  placeholder="Enter First Name"
                  className="p-0 placeholder:text-gray-500 text-left text-lg w-full"
                  wrapClassName="border border-gray-900 border-solid w-full"
                  type="text"
                  size="lg"
                ></Input>
              </div>
              <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="text-lg text-white-A700 w-full"
                  size="txtManropeSemiBold18"
                >
                  Last Name
                </Text>
                <Input
                  name="inputfeild"
                  placeholder="Enter Last Name"
                  className="p-0 placeholder:text-gray-500 text-left text-lg w-full"
                  wrapClassName="border border-gray-900 border-solid w-full"
                  type="text"
                  size="lg"
                ></Input>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[50px] items-start justify-start w-full">
              <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="text-lg text-white-A700 w-full"
                  size="txtManropeSemiBold18"
                >
                  Email
                </Text>
                <Input
                  name="inputfield_One"
                  placeholder="Enter your Email"
                  className="p-0 placeholder:text-gray-500 text-left text-lg w-full"
                  wrapClassName="border border-gray-900 border-solid w-full"
                  type="email"
                  size="lg"
                ></Input>
              </div>
              <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="text-lg text-white-A700 w-full"
                  size="txtManropeSemiBold18"
                >
                  Phone Number
                </Text>
                <div className="flex sm:flex-col flex-row gap-4 items-center justify-start w-full">
                  <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-row gap-1.5 h-[67px] md:h-auto items-center justify-start px-3 rounded-lg">
                    <Img
                      className="h-[26px] md:h-auto object-cover rounded-sm w-10"
                      src="images/img_image_26x40.png"
                      alt="image_One"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_icon_10.svg"
                      alt="icon"
                    />
                  </div>
                  <Input
                    name="container"
                    placeholder="Enter Phone Number"
                    className="p-0 placeholder:text-gray-500 text-left text-lg w-full"
                    wrapClassName="border border-gray-900 border-solid flex-1 sm:flex-1 w-[74%] sm:w-full"
                    type="number"
                    size="lg"
                  ></Input>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start w-full">
              <Text
                className="text-lg text-white-A700 w-full"
                size="txtManropeSemiBold18"
              >
                Message
              </Text>
              <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-col h-[163px] md:h-auto items-start justify-start p-5 rounded-lg w-full">
                <Text
                  className="text-gray-500 text-lg w-auto"
                  size="txtManropeRegular18"
                >
                  Enter your Message
                </Text>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 gap-[70px] items-center justify-start w-full">
              <div className="flex flex-1 sm:flex-col flex-row gap-2.5 items-center justify-start w-full">
                <div className="bg-black-900 border border-gray-900 border-solid h-7 rounded w-7"></div>
                <Text
                  className="flex-1 text-gray-500 text-lg w-auto"
                  size="txtManropeRegular18"
                >
                  I agree with Terms of Use and Privacy Policy
                </Text>
              </div>
              <Button
                className="cursor-pointer font-semibold min-w-[173px] rounded-lg text-center text-lg"
                color="red_A700"
                size="lg"
                variant="fill"
              >
                Send Message
              </Button>
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
        <div className="bg-black-900 border border-gray-900 border-solid flex flex-col items-center justify-start max-w-[1596px] mt-[150px] mx-auto px-20 md:px-5 py-[100px] rounded-[12px] w-full">
          <div className="flex h-[313px] sm:h-[907px] justify-end relative rounded-[12px] w-[1596px] md:w-full">
            <div className="absolute flex sm:flex-col flex-row gap-5 h-full inset-x-[0] items-center justify-between mx-auto top-[0] w-full">
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_42x165.png"
                alt="image_Two"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_54.png"
                alt="image_Three"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_55.png"
                alt="image_Four"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_56.png"
                alt="image_Five"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_57.png"
                alt="image_Six"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_58.png"
                alt="image_Seven"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_59.png"
                alt="image_Eight"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_60.png"
                alt="image_Nine"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_42x115.png"
                alt="image_Ten"
              />
            </div>
            <div className="absolute flex sm:flex-col flex-row gap-5 h-full inset-x-[0] items-center justify-between mx-auto top-[20%] w-full">
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_83x165.png"
                alt="image_Eleven"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_61.png"
                alt="image_Twelve"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_62.png"
                alt="image_Thirteen"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_63.png"
                alt="image_Fourteen"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_64.png"
                alt="image_Fifteen"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_65.png"
                alt="image_Sixteen"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_66.png"
                alt="image_Seventeen"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_67.png"
                alt="image_Eighteen"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_83x115.png"
                alt="image_Nineteen"
              />
            </div>
            <div className="absolute bottom-[20%] flex sm:flex-col flex-row gap-5 h-full inset-x-[0] items-center justify-between mx-auto w-full">
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_68.png"
                alt="image_Twenty"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_69.png"
                alt="image_TwentyOne"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_70.png"
                alt="image_TwentyTwo"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_71.png"
                alt="image_TwentyThree"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_72.png"
                alt="image_TwentyFour"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_73.png"
                alt="image_TwentyFive"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_74.png"
                alt="image_TwentySix"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_75.png"
                alt="image_TwentySeven"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_76.png"
                alt="image_TwentyEight"
              />
            </div>
            <div className="flex sm:flex-col flex-row gap-5 h-full items-center justify-between mt-auto mx-auto w-full">
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_77.png"
                alt="image_TwentyNine"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_78.png"
                alt="image_Thirty"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_79.png"
                alt="image_ThirtyOne"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_80.png"
                alt="image_ThirtyTwo"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_81.png"
                alt="image_ThirtyThree"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_82.png"
                alt="image_ThirtyFour"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_83.png"
                alt="image_ThirtyFive"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_84.png"
                alt="image_ThirtySix"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_85.png"
                alt="image_ThirtySeven"
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

export default SupportPageDesktopPage;
