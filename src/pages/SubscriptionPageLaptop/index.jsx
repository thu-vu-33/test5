import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Footer1 from "components/Footer1";

const SubscriptionPageLaptopPage = () => {
  return (
    <>
      <div className="bg-gray-900_01 flex flex-col font-manrope items-center justify-start mx-auto w-full">
        <header className="flex md:flex-col flex-row md:gap-10 items-center justify-between px-20 md:px-5 py-6 w-full">
          <Img
            className="h-[50px] w-[165px]"
            src="images/img_logo.svg"
            alt="logo"
          />
          <ul className="bg-black-900 flex flex-row gap-4 sm:hidden items-center justify-start outline outline-[3px] outline-gray-900_02 sm:pl-5 pl-[30px] pr-2 py-2 rounded-[10px] w-auto common-row-list">
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
              <a href="javascript:" className="text-gray-400 text-sm">
                <Text size="txtManropeRegular14">Support</Text>
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
                  Subscriptions
                </Button>
              </a>
            </li>
          </ul>
          <Img
            className="h-6 w-[62px]"
            src="images/img_buttonscontainer.svg"
            alt="buttonscontaine"
          />
        </header>
        <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start max-w-7xl mt-[100px] mx-auto md:px-5 w-full">
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
        <div className="flex flex-col md:gap-10 gap-[60px] items-end justify-start max-w-[1279px] mt-[120px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-2.5 items-start justify-start md:pr-10 sm:pr-5 pr-[150px] w-full">
            <Text
              className="md:text-4xl sm:text-[34px] text-[38px] text-white-A700 w-full"
              size="txtManropeBold38"
            >
              Compare our plans and find the right one for you
            </Text>
            <Text
              className="leading-[150.00%] max-w-[1129px] md:max-w-full text-base text-gray-500"
              size="txtManropeRegular16"
            >
              <>
                StreamVibe offers three different plans to fit your needs:
                Basic, Standard, and Premium. Compare the features of each plan
                and choose the one that&#39;s right for you.
              </>
            </Text>
          </div>
          <div className="border border-gray-900 border-solid flex flex-col items-start justify-start rounded-[10px] w-full">
            <div className="bg-black-900 border-b border-gray-900 border-solid flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
              <div className="flex flex-1 flex-col items-center justify-center p-6 sm:px-5 w-full">
                <Text
                  className="text-lg text-white-A700 w-auto"
                  size="txtManropeSemiBold18"
                >
                  Features
                </Text>
              </div>
              <Text
                className="border-gray-900 border-l border-solid flex-1 pl-6 pr-[35px] sm:px-5 py-6 text-lg text-white-A700 w-full"
                size="txtManropeSemiBold18"
              >
                Basic
              </Text>
              <div className="border-gray-900 border-l border-solid flex flex-1 flex-row gap-2 items-center justify-start p-6 sm:px-5 w-full">
                <Text
                  className="text-lg text-white-A700 w-auto"
                  size="txtManropeSemiBold18"
                >
                  Standard
                </Text>
                <Text
                  className="bg-red-A700 justify-center pt-0.5 px-1.5 rounded-sm text-sm text-white-A700 w-auto"
                  size="txtManropeMedium14WhiteA700"
                >
                  Popular
                </Text>
              </div>
              <Text
                className="border-gray-900 border-l border-solid flex-1 pl-6 pr-[35px] sm:px-5 py-6 text-lg text-white-A700 w-full"
                size="txtManropeSemiBold18"
              >
                Premium
              </Text>
            </div>
            <div className="border-b border-gray-900 border-solid flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
              <div className="flex flex-1 flex-col items-center justify-center p-6 sm:px-5 w-full">
                <Text
                  className="text-base text-gray-500 w-auto"
                  size="txtManropeMedium16"
                >
                  Price
                </Text>
              </div>
              <Text
                className="border-gray-900 border-l border-solid flex-1 pl-6 pr-[35px] sm:px-5 py-6 text-base text-gray-500 w-full"
                size="txtManropeMedium16"
              >
                $9.99/Month
              </Text>
              <Text
                className="border-gray-900 border-l border-solid flex-1 pl-6 pr-[35px] sm:px-5 py-6 text-base text-gray-500 w-full"
                size="txtManropeMedium16"
              >
                $12.99/Month
              </Text>
              <Text
                className="border-gray-900 border-l border-solid flex-1 pl-6 pr-[35px] sm:px-5 py-6 text-base text-gray-500 w-full"
                size="txtManropeMedium16"
              >
                $14.99/Month
              </Text>
            </div>
            <List
              className="flex flex-col gap-px items-center w-full"
              orientation="vertical"
            >
              <div className="border-b border-gray-900 border-solid flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                <div className="flex flex-1 flex-col h-full items-center justify-start p-6 sm:px-5 w-full">
                  <Text
                    className="text-base text-gray-500 w-auto"
                    size="txtManropeMedium16"
                  >
                    Content
                  </Text>
                </div>
                <div className="border-gray-900 border-l border-solid flex flex-1 flex-col h-full items-start justify-start p-6 sm:px-5 w-full">
                  <Text
                    className="leading-[150.00%] max-w-[271px] md:max-w-full text-base text-gray-500"
                    size="txtManropeMedium16"
                  >
                    Access to a wide selection of movies and shows, including
                    some new releases.
                  </Text>
                </div>
                <div className="border-gray-900 border-l border-solid flex flex-1 flex-col items-center justify-center p-6 sm:px-5 w-full">
                  <Text
                    className="leading-[150.00%] max-w-[271px] md:max-w-full text-base text-gray-500"
                    size="txtManropeMedium16"
                  >
                    Access to a wider selection of movies and shows, including
                    most new releases and exclusive content
                  </Text>
                </div>
                <div className="border-gray-900 border-l border-solid flex flex-1 flex-col items-center justify-center p-6 sm:px-5 w-full">
                  <Text
                    className="leading-[150.00%] max-w-[271px] md:max-w-full text-base text-gray-500"
                    size="txtManropeMedium16"
                  >
                    Access to a widest selection of movies and shows, including
                    all new releases and Offline Viewing
                  </Text>
                </div>
              </div>
              <div className="border-b border-gray-900 border-solid flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                <div className="flex flex-1 flex-col items-center justify-center p-6 sm:px-5 w-full">
                  <Text
                    className="text-base text-gray-500 w-auto"
                    size="txtManropeMedium16"
                  >
                    Devices
                  </Text>
                </div>
                <div className="border-gray-900 border-l border-solid flex flex-1 flex-col items-center justify-center p-6 sm:px-5 w-full">
                  <Text
                    className="leading-[150.00%] max-w-[271px] md:max-w-full text-base text-gray-500"
                    size="txtManropeMedium16"
                  >
                    Watch on one device simultaneously
                  </Text>
                </div>
                <div className="border-gray-900 border-l border-solid flex flex-1 flex-col items-center justify-center p-6 sm:px-5 w-full">
                  <Text
                    className="leading-[150.00%] max-w-[271px] md:max-w-full text-base text-gray-500"
                    size="txtManropeMedium16"
                  >
                    Watch on Two device simultaneously
                  </Text>
                </div>
                <div className="border-gray-900 border-l border-solid flex flex-1 flex-col items-center justify-center p-6 sm:px-5 w-full">
                  <Text
                    className="leading-[150.00%] max-w-[271px] md:max-w-full text-base text-gray-500"
                    size="txtManropeMedium16"
                  >
                    Watch on Four device simultaneously
                  </Text>
                </div>
              </div>
              <div className="border-b border-gray-900 border-solid flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                <div className="flex flex-1 flex-col items-center justify-center p-6 sm:px-5 w-full">
                  <Text
                    className="text-base text-gray-500 w-auto"
                    size="txtManropeMedium16"
                  >
                    Free Trail
                  </Text>
                </div>
                <Text
                  className="border-gray-900 border-l border-solid flex-1 pb-[22px] pl-6 pr-[35px] pt-[27px] sm:px-5 text-base text-gray-500 w-full"
                  size="txtManropeMedium16"
                >
                  7 Days
                </Text>
                <Text
                  className="border-gray-900 border-l border-solid flex-1 pb-[22px] pl-6 pr-[35px] pt-[27px] sm:px-5 text-base text-gray-500 w-full"
                  size="txtManropeMedium16"
                >
                  7 Days
                </Text>
                <Text
                  className="border-gray-900 border-l border-solid flex-1 pb-[22px] pl-6 pr-[35px] pt-[27px] sm:px-5 text-base text-gray-500 w-full"
                  size="txtManropeMedium16"
                >
                  7 Days
                </Text>
              </div>
              <div className="border-b border-gray-900 border-solid flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                <div className="flex flex-1 flex-col items-center justify-center p-6 sm:px-5 w-full">
                  <Text
                    className="text-base text-gray-500 w-auto"
                    size="txtManropeMedium16"
                  >
                    Cancel Anytime
                  </Text>
                </div>
                <Text
                  className="border-gray-900 border-l border-solid flex-1 pl-6 pr-[35px] sm:px-5 py-6 text-base text-gray-500 w-full"
                  size="txtManropeMedium16"
                >
                  Yes
                </Text>
                <Text
                  className="border-gray-900 border-l border-solid flex-1 pl-6 pr-[35px] sm:px-5 py-6 text-base text-gray-500 w-full"
                  size="txtManropeMedium16"
                >
                  Yes
                </Text>
                <Text
                  className="border-gray-900 border-l border-solid flex-1 pl-6 pr-[35px] sm:px-5 py-6 text-base text-gray-500 w-full"
                  size="txtManropeMedium16"
                >
                  Yes
                </Text>
              </div>
              <div className="border-b border-gray-900 border-solid flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                <div className="flex flex-1 flex-col items-center justify-center p-6 sm:px-5 w-full">
                  <Text
                    className="text-base text-gray-500 w-auto"
                    size="txtManropeMedium16"
                  >
                    HDR
                  </Text>
                </div>
                <Text
                  className="border-gray-900 border-l border-solid flex-1 pl-6 pr-[35px] sm:px-5 py-6 text-base text-gray-500 w-full"
                  size="txtManropeMedium16"
                >
                  No
                </Text>
                <Text
                  className="border-gray-900 border-l border-solid flex-1 pl-6 pr-[35px] sm:px-5 py-6 text-base text-gray-500 w-full"
                  size="txtManropeMedium16"
                >
                  Yes
                </Text>
                <Text
                  className="border-gray-900 border-l border-solid flex-1 pl-6 pr-[35px] sm:px-5 py-6 text-base text-gray-500 w-full"
                  size="txtManropeMedium16"
                >
                  Yes
                </Text>
              </div>
              <div className="border-b border-gray-900 border-solid flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                <div className="flex flex-1 flex-col items-center justify-center p-6 sm:px-5 w-full">
                  <Text
                    className="text-base text-gray-500 w-auto"
                    size="txtManropeMedium16"
                  >
                    Dolby Atmos
                  </Text>
                </div>
                <Text
                  className="border-gray-900 border-l border-solid flex-1 pl-6 pr-[35px] sm:px-5 py-6 text-base text-gray-500 w-full"
                  size="txtManropeMedium16"
                >
                  No
                </Text>
                <Text
                  className="border-gray-900 border-l border-solid flex-1 pl-6 pr-[35px] sm:px-5 py-6 text-base text-gray-500 w-full"
                  size="txtManropeMedium16"
                >
                  Yes
                </Text>
                <Text
                  className="border-gray-900 border-l border-solid flex-1 pl-6 pr-[35px] sm:px-5 py-6 text-base text-gray-500 w-full"
                  size="txtManropeMedium16"
                >
                  Yes
                </Text>
              </div>
              <div className="border-b border-gray-900 border-solid flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                <div className="flex flex-1 flex-col items-center justify-center p-6 sm:px-5 w-full">
                  <Text
                    className="text-base text-gray-500 w-auto"
                    size="txtManropeMedium16"
                  >
                    Ad - Free
                  </Text>
                </div>
                <Text
                  className="border-gray-900 border-l border-solid flex-1 pl-6 pr-[35px] sm:px-5 py-6 text-base text-gray-500 w-full"
                  size="txtManropeMedium16"
                >
                  No
                </Text>
                <Text
                  className="border-gray-900 border-l border-solid flex-1 pl-6 pr-[35px] sm:px-5 py-6 text-base text-gray-500 w-full"
                  size="txtManropeMedium16"
                >
                  Yes
                </Text>
                <Text
                  className="border-gray-900 border-l border-solid flex-1 pl-6 pr-[35px] sm:px-5 py-6 text-base text-gray-500 w-full"
                  size="txtManropeMedium16"
                >
                  Yes
                </Text>
              </div>
              <div className="border-b border-gray-900 border-solid flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                <div className="flex flex-1 flex-col items-center justify-center p-6 sm:px-5 w-full">
                  <Text
                    className="text-base text-gray-500 w-auto"
                    size="txtManropeMedium16"
                  >
                    Offline Viewing
                  </Text>
                </div>
                <Text
                  className="border-gray-900 border-l border-solid flex-1 pl-6 pr-[35px] sm:px-5 py-6 text-base text-gray-500 w-full"
                  size="txtManropeMedium16"
                >
                  No
                </Text>
                <Text
                  className="border-gray-900 border-l border-solid flex-1 pb-[23px] pl-6 pr-[35px] pt-[26px] sm:px-5 text-base text-gray-500 w-full"
                  size="txtManropeMedium16"
                >
                  Yes, for select titles.
                </Text>
                <Text
                  className="border-gray-900 border-l border-solid flex-1 pb-[23px] pl-6 pr-[35px] pt-[26px] sm:px-5 text-base text-gray-500 w-full"
                  size="txtManropeMedium16"
                >
                  Yes, for all titles.
                </Text>
              </div>
              <div className="border border-gray-900 border-solid flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                <div className="flex flex-1 flex-col items-center justify-center p-6 sm:px-5 w-full">
                  <Text
                    className="text-base text-gray-500 w-auto"
                    size="txtManropeMedium16"
                  >
                    Family Sharing
                  </Text>
                </div>
                <Text
                  className="border-gray-900 border-l border-solid flex-1 pl-6 pr-[35px] sm:px-5 py-6 text-base text-gray-500 w-full"
                  size="txtManropeMedium16"
                >
                  No
                </Text>
                <Text
                  className="border-gray-900 border-l border-solid flex-1 pb-[22px] pl-6 pr-[35px] pt-[27px] sm:px-5 text-base text-gray-500 w-full"
                  size="txtManropeMedium16"
                >
                  Yes, up to 5 family members.
                </Text>
                <Text
                  className="border-gray-900 border-l border-solid flex-1 pb-[22px] pl-6 pr-[35px] pt-[27px] sm:px-5 text-base text-gray-500 w-full"
                  size="txtManropeMedium16"
                >
                  Yes, up to 6 family members.
                </Text>
              </div>
            </List>
          </div>
        </div>
        <div className="bg-black-900 border border-gray-900 border-solid flex flex-col items-center justify-start max-w-7xl mt-[120px] mx-auto md:px-5 px-[60px] py-20 rounded-[12px] w-full">
          <div className="flex h-[236px] md:h-[250px] sm:h-[817px] justify-end relative rounded-[12px] w-[1280px] md:w-full">
            <div className="absolute flex sm:flex-col flex-row gap-5 h-full inset-x-[0] items-center justify-between mx-auto top-[0] w-full">
              <Img
                className="flex-1 md:h-auto h-full max-h-[13px] object-cover sm:w-[]"
                src="images/img_image_42x165.png"
                alt="image_One"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[13px] object-cover sm:w-[]"
                src="images/img_image_54.png"
                alt="image_Two"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[13px] object-cover sm:w-[]"
                src="images/img_image_55.png"
                alt="image_Three"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[13px] object-cover sm:w-[]"
                src="images/img_image_56.png"
                alt="image_Four"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[13px] object-cover sm:w-[]"
                src="images/img_image_57.png"
                alt="image_Five"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[13px] object-cover sm:w-[]"
                src="images/img_image_58.png"
                alt="image_Six"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[13px] object-cover sm:w-[]"
                src="images/img_image_59.png"
                alt="image_Seven"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[13px] object-cover sm:w-[]"
                src="images/img_image_60.png"
                alt="image_Eight"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[13px] object-cover sm:w-[]"
                src="images/img_image_42x115.png"
                alt="image_Nine"
              />
            </div>
            <div className="absolute flex sm:flex-col flex-row gap-5 h-full inset-x-[0] items-center justify-between mx-auto top-[14%] w-full">
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_83x165.png"
                alt="image_Ten"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_61.png"
                alt="image_Eleven"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_62.png"
                alt="image_Twelve"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_63.png"
                alt="image_Thirteen"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_64.png"
                alt="image_Fourteen"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_65.png"
                alt="image_Fifteen"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_66.png"
                alt="image_Sixteen"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_67.png"
                alt="image_Seventeen"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_83x115.png"
                alt="image_Eighteen"
              />
            </div>
            <div className="absolute bottom-[15%] flex sm:flex-col flex-row gap-5 h-full inset-x-[0] items-center justify-between mx-auto w-full">
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_68.png"
                alt="image_Nineteen"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_69.png"
                alt="image_Twenty"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_70.png"
                alt="image_TwentyOne"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_71.png"
                alt="image_TwentyTwo"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_72.png"
                alt="image_TwentyThree"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_73.png"
                alt="image_TwentyFour"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_74.png"
                alt="image_TwentyFive"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_75.png"
                alt="image_TwentySix"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_76.png"
                alt="image_TwentySeven"
              />
            </div>
            <div className="flex sm:flex-col flex-row gap-5 h-full items-center justify-between mt-auto mx-auto w-full">
              <Img
                className="flex-1 md:h-auto h-full max-h-3.5 object-cover sm:w-[]"
                src="images/img_image_77.png"
                alt="image_TwentyEight"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-3.5 object-cover sm:w-[]"
                src="images/img_image_78.png"
                alt="image_TwentyNine"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-3.5 object-cover sm:w-[]"
                src="images/img_image_79.png"
                alt="image_Thirty"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-3.5 object-cover sm:w-[]"
                src="images/img_image_80.png"
                alt="image_ThirtyOne"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-3.5 object-cover sm:w-[]"
                src="images/img_image_81.png"
                alt="image_ThirtyTwo"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-3.5 object-cover sm:w-[]"
                src="images/img_image_82.png"
                alt="image_ThirtyThree"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-3.5 object-cover sm:w-[]"
                src="images/img_image_83.png"
                alt="image_ThirtyFour"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-3.5 object-cover sm:w-[]"
                src="images/img_image_84.png"
                alt="image_ThirtyFive"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-3.5 object-cover sm:w-[]"
                src="images/img_image_85.png"
                alt="image_ThirtySix"
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

export default SubscriptionPageLaptopPage;
