import React from "react";

import {
  Button,
  CheckBox,
  Img,
  Input,
  Line,
  List,
  Text,
  TextArea,
} from "components";
import Footer1 from "components/Footer1";

const SupportPageLaptopPage = () => {
  return (
    <>
      <div className="bg-gray-900_01 flex flex-col font-manrope items-center justify-start mx-auto w-full">
        <header className="flex md:flex-col flex-row md:gap-10 items-center justify-between px-20 md:px-5 py-6 w-full">
          <Img
            className="h-[50px] w-[165px]"
            src="images/img_logo.svg"
            alt="logo"
          />
          <ul className="bg-black-900 flex flex-row gap-4 sm:hidden items-center justify-start outline outline-[3px] outline-gray-900_02 sm:px-5 px-[30px] py-2 rounded-[10px] w-auto common-row-list">
            <li>
              <a href="javascript:" className="text-gray-400 text-sm">
                <Text size="txtManropeRegular14">Home</Text>
              </a>
            </li>
            <li>
              <a href="javascript:" className="text-gray-400 text-sm">
                <Text size="txtManropeRegular14">Movies & Shows</Text>
              </a>
            </li>
            <li>
              <a href="javascript:">
                <Button
                  className="!text-white-A700 border border-gray-900_03 border-solid cursor-pointer font-medium rounded-lg text-center text-sm"
                  color="gray_900_03"
                  size="md"
                  variant="fill"
                >
                  Support
                </Button>
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
        <div className="flex md:flex-col flex-row gap-[50px] items-start justify-start max-w-[1279px] mt-[100px] mx-auto md:px-5 w-full">
          <div className="flex sm:flex-1 flex-col gap-10 h-[592px] md:h-auto items-start justify-start w-[429px] sm:w-full">
            <div className="flex flex-col gap-2.5 items-start justify-start w-full">
              <Text
                className="leading-[150.00%] max-w-[429px] md:max-w-full md:text-4xl sm:text-[34px] text-[38px] text-white-A700"
                size="txtManropeBold38"
              >
                Welcome to our support page!
              </Text>
              <Text
                className="leading-[150.00%] max-w-[429px] md:max-w-full text-base text-gray-500"
                size="txtManropeRegular16"
              >
                <>
                  We&#39;re here to help you with any problems you may be having
                  with our product.
                </>
              </Text>
            </div>
            <div className="bg-black-900 flex flex-col items-center justify-start outline outline-[6px] outline-gray-900 rounded w-full">
              <div className="flex flex-col h-[380px] md:h-auto items-start justify-start rounded w-[429px] sm:w-full">
                <List
                  className="flex flex-col gap-5 items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 sm:flex-col flex-row gap-5 h-full items-start justify-start w-full">
                    <Img
                      className="flex-1 md:h-auto h-full max-h-[27px] object-cover rounded-[12px] sm:w-[]"
                      src="images/img_image.png"
                      alt="image"
                    />
                    <Img
                      className="flex-1 md:h-auto h-full max-h-[27px] object-cover rounded-[12px] sm:w-[]"
                      src="images/img_image_200x195.png"
                      alt="image_One"
                    />
                    <Img
                      className="flex-1 md:h-auto h-full max-h-[27px] object-cover rounded-[12px] sm:w-[]"
                      src="images/img_image_1.png"
                      alt="image_Two"
                    />
                    <Img
                      className="flex-1 md:h-auto h-full max-h-[27px] object-cover rounded-[12px] sm:w-[]"
                      src="images/img_image_2.png"
                      alt="image_Three"
                    />
                  </div>
                  <div className="flex flex-1 sm:flex-col flex-row gap-5 h-full items-start justify-start w-full">
                    <Img
                      className="flex-1 md:h-auto h-full max-h-[121px] object-cover rounded-[12px] sm:w-[]"
                      src="images/img_image_8.png"
                      alt="image"
                    />
                    <Img
                      className="flex-1 md:h-auto h-full max-h-[121px] object-cover rounded-[12px] sm:w-[]"
                      src="images/img_image_9.png"
                      alt="image_One"
                    />
                    <Img
                      className="flex-1 md:h-auto h-full max-h-[121px] object-cover rounded-[12px] sm:w-[]"
                      src="images/img_image_10.png"
                      alt="image_Two"
                    />
                    <Img
                      className="flex-1 md:h-auto h-full max-h-[121px] object-cover rounded-[12px] sm:w-[]"
                      src="images/img_image_11.png"
                      alt="image_Three"
                    />
                  </div>
                  <div className="flex flex-1 sm:flex-col flex-row gap-5 h-full items-start justify-start w-full">
                    <Img
                      className="flex-1 md:h-auto h-full max-h-[121px] object-cover rounded-[12px] sm:w-[]"
                      src="images/img_image_17.png"
                      alt="image"
                    />
                    <Img
                      className="flex-1 md:h-auto h-full max-h-[121px] object-cover rounded-[12px] sm:w-[]"
                      src="images/img_image_18.png"
                      alt="image_One"
                    />
                    <Img
                      className="flex-1 md:h-auto h-full max-h-[121px] object-cover rounded-[12px] sm:w-[]"
                      src="images/img_image_19.png"
                      alt="image_Two"
                    />
                    <Img
                      className="flex-1 md:h-auto h-full max-h-[121px] object-cover rounded-[12px] sm:w-[]"
                      src="images/img_image_20.png"
                      alt="image_Three"
                    />
                  </div>
                  <div className="flex flex-1 sm:flex-col flex-row gap-5 h-full items-start justify-start w-full">
                    <Img
                      className="flex-1 md:h-auto h-full max-h-12 object-cover rounded-[12px] sm:w-[]"
                      src="images/img_image_26.png"
                      alt="image"
                    />
                    <Img
                      className="flex-1 md:h-auto h-full max-h-12 object-cover rounded-[12px] sm:w-[]"
                      src="images/img_image_27.png"
                      alt="image_One"
                    />
                    <Img
                      className="flex-1 md:h-auto h-full max-h-12 object-cover rounded-[12px] sm:w-[]"
                      src="images/img_image_28.png"
                      alt="image_Two"
                    />
                    <Img
                      className="flex-1 md:h-auto h-full max-h-12 object-cover rounded-[12px] sm:w-[]"
                      src="images/img_image_29.png"
                      alt="image_Three"
                    />
                  </div>
                </List>
              </div>
            </div>
          </div>
          <div className="bg-black-900 border border-gray-900 border-solid flex flex-1 flex-col gap-10 items-start justify-start p-10 sm:px-5 rounded-[10px] w-full">
            <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-full">
              <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full">
                <Text
                  className="text-base text-white-A700 w-full"
                  size="txtManropeSemiBold16"
                >
                  First Name
                </Text>
                <Input
                  name="inputfield"
                  placeholder="Enter First Name"
                  className="p-0 placeholder:text-gray-500 text-left text-sm w-full"
                  wrapClassName="border border-gray-900 border-solid rounded-md w-full"
                  type="text"
                ></Input>
              </div>
              <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full">
                <Text
                  className="text-base text-white-A700 w-full"
                  size="txtManropeSemiBold16"
                >
                  Last Name
                </Text>
                <Input
                  name="inputfeild"
                  placeholder="Enter Last Name"
                  className="p-0 placeholder:text-gray-500 text-left text-sm w-full"
                  wrapClassName="border border-gray-900 border-solid rounded-md w-full"
                  type="text"
                ></Input>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-full">
              <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full">
                <Text
                  className="text-base text-white-A700 w-full"
                  size="txtManropeSemiBold16"
                >
                  Email
                </Text>
                <Input
                  name="inputfield_One"
                  placeholder="Enter your Email"
                  className="p-0 placeholder:text-gray-500 text-left text-sm w-full"
                  wrapClassName="border border-gray-900 border-solid rounded-md w-full"
                  type="email"
                ></Input>
              </div>
              <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full">
                <Text
                  className="text-base text-white-A700 w-full"
                  size="txtManropeSemiBold16"
                >
                  Phone Number
                </Text>
                <div className="flex flex-row gap-3 items-center justify-start w-full">
                  <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-row gap-1 h-[53px] md:h-auto items-center justify-start px-2 rounded-md">
                    <Img
                      className="h-6 md:h-auto object-cover rounded-sm w-[38px]"
                      src="images/img_image_26x40.png"
                      alt="image_One"
                    />
                    <Img
                      className="h-5 w-5"
                      src="images/img_icon_10.svg"
                      alt="icon"
                    />
                  </div>
                  <Input
                    name="container"
                    placeholder="Enter Phone Number"
                    className="p-0 placeholder:text-gray-500 text-left text-sm w-full"
                    wrapClassName="border border-gray-900 border-solid flex-1 rounded-md w-3/4"
                    type="number"
                  ></Input>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 items-start justify-start w-full">
              <Text
                className="text-base text-white-A700 w-full"
                size="txtManropeSemiBold16"
              >
                Message
              </Text>
              <TextArea
                className="bg-gray-900_01 border border-gray-900 border-solid gap-[77px] h-[129px] p-4 rounded-md placeholder:text-gray-500 text-gray-500 text-left text-sm w-full"
                name="inputfield_Two"
                placeholder="Enter your Message"
              ></TextArea>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 gap-[70px] items-center justify-start w-full">
              <CheckBox
                className="sm:pr-5 text-base text-left"
                inputClassName="border border-gray-900 border-solid flex-1 h-6 mr-[5px] w-6"
                name="text"
                id="text"
                label="I agree with Terms of Use and Privacy Policy"
                shape="round"
                color="black_900"
                size="xs"
                variant="fill"
              ></CheckBox>
              <Button
                className="cursor-pointer font-semibold min-w-[138px] rounded-md text-center text-sm"
                color="red_A700"
                size="md"
                variant="fill"
              >
                Send Message
              </Button>
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
        <div className="bg-black-900 border border-gray-900 border-solid flex flex-col items-center justify-start max-w-7xl mt-[120px] mx-auto md:px-5 px-[60px] py-20 rounded-[12px] w-full">
          <div className="flex h-[236px] md:h-[250px] sm:h-[817px] justify-end relative rounded-[12px] w-[1280px] md:w-full">
            <div className="absolute flex sm:flex-col flex-row gap-5 h-full inset-x-[0] items-center justify-between mx-auto top-[0] w-full">
              <Img
                className="flex-1 md:h-auto h-full max-h-[13px] object-cover sm:w-[]"
                src="images/img_image_42x165.png"
                alt="image_Two"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[13px] object-cover sm:w-[]"
                src="images/img_image_54.png"
                alt="image_Three"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[13px] object-cover sm:w-[]"
                src="images/img_image_55.png"
                alt="image_Four"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[13px] object-cover sm:w-[]"
                src="images/img_image_56.png"
                alt="image_Five"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[13px] object-cover sm:w-[]"
                src="images/img_image_57.png"
                alt="image_Six"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[13px] object-cover sm:w-[]"
                src="images/img_image_58.png"
                alt="image_Seven"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[13px] object-cover sm:w-[]"
                src="images/img_image_59.png"
                alt="image_Eight"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[13px] object-cover sm:w-[]"
                src="images/img_image_60.png"
                alt="image_Nine"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[13px] object-cover sm:w-[]"
                src="images/img_image_42x115.png"
                alt="image_Ten"
              />
            </div>
            <div className="absolute flex sm:flex-col flex-row gap-5 h-full inset-x-[0] items-center justify-between mx-auto top-[14%] w-full">
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_83x165.png"
                alt="image_Eleven"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_61.png"
                alt="image_Twelve"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_62.png"
                alt="image_Thirteen"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_63.png"
                alt="image_Fourteen"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_64.png"
                alt="image_Fifteen"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_65.png"
                alt="image_Sixteen"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_66.png"
                alt="image_Seventeen"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_67.png"
                alt="image_Eighteen"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_83x115.png"
                alt="image_Nineteen"
              />
            </div>
            <div className="absolute bottom-[15%] flex sm:flex-col flex-row gap-5 h-full inset-x-[0] items-center justify-between mx-auto w-full">
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_68.png"
                alt="image_Twenty"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_69.png"
                alt="image_TwentyOne"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_70.png"
                alt="image_TwentyTwo"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_71.png"
                alt="image_TwentyThree"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_72.png"
                alt="image_TwentyFour"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_73.png"
                alt="image_TwentyFive"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_74.png"
                alt="image_TwentySix"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_75.png"
                alt="image_TwentySeven"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_76.png"
                alt="image_TwentyEight"
              />
            </div>
            <div className="flex sm:flex-col flex-row gap-5 h-full items-center justify-between mt-auto mx-auto w-full">
              <Img
                className="flex-1 md:h-auto h-full max-h-3.5 object-cover sm:w-[]"
                src="images/img_image_77.png"
                alt="image_TwentyNine"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-3.5 object-cover sm:w-[]"
                src="images/img_image_78.png"
                alt="image_Thirty"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-3.5 object-cover sm:w-[]"
                src="images/img_image_79.png"
                alt="image_ThirtyOne"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-3.5 object-cover sm:w-[]"
                src="images/img_image_80.png"
                alt="image_ThirtyTwo"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-3.5 object-cover sm:w-[]"
                src="images/img_image_81.png"
                alt="image_ThirtyThree"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-3.5 object-cover sm:w-[]"
                src="images/img_image_82.png"
                alt="image_ThirtyFour"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-3.5 object-cover sm:w-[]"
                src="images/img_image_83.png"
                alt="image_ThirtyFive"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-3.5 object-cover sm:w-[]"
                src="images/img_image_84.png"
                alt="image_ThirtySix"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-3.5 object-cover sm:w-[]"
                src="images/img_image_85.png"
                alt="image_ThirtySeven"
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

export default SupportPageLaptopPage;
