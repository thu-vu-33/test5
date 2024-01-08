import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Footer from "components/Footer";

const SubscriptionPageDesktopPage = () => {
  return (
    <>
      <div className="bg-gray-900_01 flex flex-col font-manrope items-center justify-start mx-auto w-full">
        <header className="flex md:flex-col flex-row md:gap-10 items-center justify-between md:px-5 px-[162px] py-[30px] w-full">
          <Img
            className="h-[60px] w-[199px]"
            src="images/img_logo.svg"
            alt="logo"
          />
          <ul className="bg-black-900 flex sm:flex-col flex-row gap-[30px] sm:hidden items-center justify-start outline outline-[4px] outline-gray-900_02 pl-10 sm:pl-5 pr-2.5 py-2.5 rounded-[12px] w-auto common-row-list">
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
              <a href="javascript:" className="text-gray-400 text-lg">
                <Text size="txtManropeRegular18Gray400">Support</Text>
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
                  Subscriptions
                </Button>
              </a>
            </li>
          </ul>
          <Img
            className="h-[34px] w-[98px]"
            src="images/img_buttonscontainer.svg"
            alt="buttonscontaine"
          />
        </header>
        <div className="flex flex-col md:gap-10 gap-20 items-start justify-start max-w-[1596px] mt-[100px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[100px] items-end justify-start w-full">
            <div className="flex flex-1 flex-col gap-3.5 items-start justify-start w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-full"
                size="txtManropeBold48"
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
        <div className="flex flex-col md:gap-10 gap-20 items-end justify-start max-w-[1597px] mt-[150px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-3.5 items-start justify-start md:pr-10 sm:pr-5 pr-[300px] w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-full"
              size="txtManropeBold48"
            >
              Compare our plans and find the right one for you
            </Text>
            <Text
              className="leading-[150.00%] max-w-[1297px] md:max-w-full text-gray-500 text-lg"
              size="txtManropeRegular18"
            >
              <>
                StreamVibe offers three different plans to fit your needs:
                Basic, Standard, and Premium. Compare the features of each plan
                and choose the one that&#39;s right for you.
              </>
            </Text>
          </div>
          <div className="border border-gray-900 border-solid flex flex-col items-start justify-start rounded-[12px] w-full">
            <div className="bg-black-900 border-b border-gray-900 border-solid flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
              <div className="flex flex-1 flex-col items-center justify-center p-[30px] sm:px-5 w-full">
                <Text
                  className="text-white-A700 text-xl w-auto"
                  size="txtManropeSemiBold20"
                >
                  Features
                </Text>
              </div>
              <Text
                className="border-gray-900 border-l border-solid flex-1 pl-[30px] pr-[35px] sm:px-5 py-[30px] text-white-A700 text-xl w-full"
                size="txtManropeSemiBold20"
              >
                Basic
              </Text>
              <div className="border-gray-900 border-l border-solid flex flex-1 flex-row gap-2 items-center justify-start p-[30px] sm:px-5 w-full">
                <Text
                  className="text-white-A700 text-xl w-auto"
                  size="txtManropeSemiBold20"
                >
                  Standard
                </Text>
                <Text
                  className="bg-red-A700 justify-center pt-0.5 px-2.5 rounded-sm text-sm text-white-A700 w-auto"
                  size="txtManropeMedium14WhiteA700"
                >
                  Popular
                </Text>
              </div>
              <Text
                className="border-gray-900 border-l border-solid flex-1 pl-[30px] pr-[35px] sm:px-5 py-[30px] text-white-A700 text-xl w-full"
                size="txtManropeSemiBold20"
              >
                Premium
              </Text>
            </div>
            <div className="border-b border-gray-900 border-solid flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
              <div className="flex flex-1 flex-col items-center justify-center p-[30px] sm:px-5 w-full">
                <Text
                  className="text-gray-500 text-lg w-auto"
                  size="txtManropeMedium18"
                >
                  Price
                </Text>
              </div>
              <Text
                className="border-gray-900 border-l border-solid flex-1 pl-[30px] pr-[35px] sm:px-5 py-[30px] text-gray-500 text-lg w-full"
                size="txtManropeMedium18"
              >
                $9.99/Month
              </Text>
              <Text
                className="border-gray-900 border-l border-solid flex-1 pl-[30px] pr-[35px] sm:px-5 py-[30px] text-gray-500 text-lg w-full"
                size="txtManropeMedium18"
              >
                $12.99/Month
              </Text>
              <Text
                className="border-gray-900 border-l border-solid flex-1 pl-[30px] pr-[35px] sm:px-5 py-[30px] text-gray-500 text-lg w-full"
                size="txtManropeMedium18"
              >
                $14.99/Month
              </Text>
            </div>
            <List
              className="border-b border-gray-900 border-solid sm:flex-col flex-row md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start w-full"
              orientation="horizontal"
            >
              <div className="flex flex-1 flex-col h-full items-center justify-start sm:ml-[0] p-[30px] sm:px-5 w-full">
                <Text
                  className="text-gray-500 text-lg w-auto"
                  size="txtManropeMedium18"
                >
                  Content
                </Text>
              </div>
              <div className="border-gray-900 border-l border-solid flex flex-1 flex-col h-full items-start justify-start sm:ml-[0] p-[30px] sm:px-5 w-full">
                <Text
                  className="leading-[150.00%] max-w-[339px] md:max-w-full text-gray-500 text-lg"
                  size="txtManropeMedium18"
                >
                  Access to a wide selection of movies and shows, including some
                  new releases.
                </Text>
              </div>
              <div className="border-gray-900 border-l border-solid flex flex-1 flex-col items-center justify-center sm:ml-[0] p-[30px] sm:px-5 w-full">
                <Text
                  className="leading-[150.00%] max-w-[339px] md:max-w-full text-gray-500 text-lg"
                  size="txtManropeMedium18"
                >
                  Access to a wider selection of movies and shows, including
                  most new releases and exclusive content
                </Text>
              </div>
              <div className="border-gray-900 border-l border-solid flex flex-1 flex-col items-center justify-center sm:ml-[0] p-[30px] sm:px-5 w-full">
                <Text
                  className="leading-[150.00%] max-w-[339px] md:max-w-full text-gray-500 text-lg"
                  size="txtManropeMedium18"
                >
                  Access to a widest selection of movies and shows, including
                  all new releases and Offline Viewing
                </Text>
              </div>
            </List>
            <List
              className="flex flex-col gap-px items-center w-full"
              orientation="vertical"
            >
              <div className="border-b border-gray-900 border-solid flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                <div className="flex flex-1 flex-col items-center justify-center p-[30px] sm:px-5 w-full">
                  <Text
                    className="text-gray-500 text-lg w-auto"
                    size="txtManropeMedium18"
                  >
                    Devices
                  </Text>
                </div>
                <Text
                  className="border-gray-900 border-l border-solid flex-1 pb-7 pl-[30px] pr-[35px] pt-[33px] sm:px-5 text-gray-500 text-lg w-full"
                  size="txtManropeMedium18"
                >
                  Watch on one device simultaneously
                </Text>
                <Text
                  className="border-gray-900 border-l border-solid flex-1 pb-7 pl-[30px] pr-[35px] pt-[33px] sm:px-5 text-gray-500 text-lg w-full"
                  size="txtManropeMedium18"
                >
                  Watch on Two device simultaneously
                </Text>
                <Text
                  className="border-gray-900 border-l border-solid flex-1 pb-7 pl-[30px] pr-[35px] pt-[33px] sm:px-5 text-gray-500 text-lg w-full"
                  size="txtManropeMedium18"
                >
                  Watch on Four device simultaneously
                </Text>
              </div>
              <div className="border-b border-gray-900 border-solid flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                <div className="flex flex-1 flex-col items-center justify-center p-[30px] sm:px-5 w-full">
                  <Text
                    className="text-gray-500 text-lg w-auto"
                    size="txtManropeMedium18"
                  >
                    Free Trail
                  </Text>
                </div>
                <Text
                  className="border-gray-900 border-l border-solid flex-1 pb-7 pl-[30px] pr-[35px] pt-[33px] sm:px-5 text-gray-500 text-lg w-full"
                  size="txtManropeMedium18"
                >
                  7 Days
                </Text>
                <Text
                  className="border-gray-900 border-l border-solid flex-1 pb-7 pl-[30px] pr-[35px] pt-[33px] sm:px-5 text-gray-500 text-lg w-full"
                  size="txtManropeMedium18"
                >
                  7 Days
                </Text>
                <Text
                  className="border-gray-900 border-l border-solid flex-1 pb-7 pl-[30px] pr-[35px] pt-[33px] sm:px-5 text-gray-500 text-lg w-full"
                  size="txtManropeMedium18"
                >
                  7 Days
                </Text>
              </div>
              <div className="border-b border-gray-900 border-solid flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                <div className="flex flex-1 flex-col items-center justify-center p-[30px] sm:px-5 w-full">
                  <Text
                    className="text-gray-500 text-lg w-auto"
                    size="txtManropeMedium18"
                  >
                    Cancel Anytime
                  </Text>
                </div>
                <Text
                  className="border-gray-900 border-l border-solid flex-1 pl-[30px] pr-[35px] sm:px-5 py-[30px] text-gray-500 text-lg w-full"
                  size="txtManropeMedium18"
                >
                  Yes
                </Text>
                <Text
                  className="border-gray-900 border-l border-solid flex-1 pl-[30px] pr-[35px] sm:px-5 py-[30px] text-gray-500 text-lg w-full"
                  size="txtManropeMedium18"
                >
                  Yes
                </Text>
                <Text
                  className="border-gray-900 border-l border-solid flex-1 pl-[30px] pr-[35px] sm:px-5 py-[30px] text-gray-500 text-lg w-full"
                  size="txtManropeMedium18"
                >
                  Yes
                </Text>
              </div>
              <div className="border-b border-gray-900 border-solid flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                <div className="flex flex-1 flex-col items-center justify-center p-[30px] sm:px-5 w-full">
                  <Text
                    className="text-gray-500 text-lg w-auto"
                    size="txtManropeMedium18"
                  >
                    HDR
                  </Text>
                </div>
                <Text
                  className="border-gray-900 border-l border-solid flex-1 pl-[30px] pr-[35px] sm:px-5 py-[30px] text-gray-500 text-lg w-full"
                  size="txtManropeMedium18"
                >
                  No
                </Text>
                <Text
                  className="border-gray-900 border-l border-solid flex-1 pl-[30px] pr-[35px] sm:px-5 py-[30px] text-gray-500 text-lg w-full"
                  size="txtManropeMedium18"
                >
                  Yes
                </Text>
                <Text
                  className="border-gray-900 border-l border-solid flex-1 pl-[30px] pr-[35px] sm:px-5 py-[30px] text-gray-500 text-lg w-full"
                  size="txtManropeMedium18"
                >
                  Yes
                </Text>
              </div>
              <div className="border-b border-gray-900 border-solid flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                <div className="flex flex-1 flex-col items-center justify-center p-[30px] sm:px-5 w-full">
                  <Text
                    className="text-gray-500 text-lg w-auto"
                    size="txtManropeMedium18"
                  >
                    Dolby Atmos
                  </Text>
                </div>
                <Text
                  className="border-gray-900 border-l border-solid flex-1 pl-[30px] pr-[35px] sm:px-5 py-[30px] text-gray-500 text-lg w-full"
                  size="txtManropeMedium18"
                >
                  No
                </Text>
                <Text
                  className="border-gray-900 border-l border-solid flex-1 pl-[30px] pr-[35px] sm:px-5 py-[30px] text-gray-500 text-lg w-full"
                  size="txtManropeMedium18"
                >
                  Yes
                </Text>
                <Text
                  className="border-gray-900 border-l border-solid flex-1 pl-[30px] pr-[35px] sm:px-5 py-[30px] text-gray-500 text-lg w-full"
                  size="txtManropeMedium18"
                >
                  Yes
                </Text>
              </div>
              <div className="border-b border-gray-900 border-solid flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                <div className="flex flex-1 flex-col items-center justify-center p-[30px] sm:px-5 w-full">
                  <Text
                    className="text-gray-500 text-lg w-auto"
                    size="txtManropeMedium18"
                  >
                    Ad - Free
                  </Text>
                </div>
                <Text
                  className="border-gray-900 border-l border-solid flex-1 pl-[30px] pr-[35px] sm:px-5 py-[30px] text-gray-500 text-lg w-full"
                  size="txtManropeMedium18"
                >
                  No
                </Text>
                <Text
                  className="border-gray-900 border-l border-solid flex-1 pl-[30px] pr-[35px] sm:px-5 py-[30px] text-gray-500 text-lg w-full"
                  size="txtManropeMedium18"
                >
                  Yes
                </Text>
                <Text
                  className="border-gray-900 border-l border-solid flex-1 pl-[30px] pr-[35px] sm:px-5 py-[30px] text-gray-500 text-lg w-full"
                  size="txtManropeMedium18"
                >
                  Yes
                </Text>
              </div>
              <div className="border-b border-gray-900 border-solid flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                <div className="flex flex-1 flex-col items-center justify-center p-[30px] sm:px-5 w-full">
                  <Text
                    className="text-gray-500 text-lg w-auto"
                    size="txtManropeMedium18"
                  >
                    Offline Viewing
                  </Text>
                </div>
                <Text
                  className="border-gray-900 border-l border-solid flex-1 pl-[30px] pr-[35px] sm:px-5 py-[30px] text-gray-500 text-lg w-full"
                  size="txtManropeMedium18"
                >
                  No
                </Text>
                <Text
                  className="border-gray-900 border-l border-solid flex-1 pl-[30px] pr-[35px] sm:px-5 py-[30px] text-gray-500 text-lg w-full"
                  size="txtManropeMedium18"
                >
                  Yes, for select titles.
                </Text>
                <Text
                  className="border-gray-900 border-l border-solid flex-1 pl-[30px] pr-[35px] sm:px-5 py-[30px] text-gray-500 text-lg w-full"
                  size="txtManropeMedium18"
                >
                  Yes, for all titles.
                </Text>
              </div>
              <div className="border border-gray-900 border-solid flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                <div className="flex flex-1 flex-col items-center justify-center p-[30px] sm:px-5 w-full">
                  <Text
                    className="text-gray-500 text-lg w-auto"
                    size="txtManropeMedium18"
                  >
                    Family Sharing
                  </Text>
                </div>
                <Text
                  className="border-gray-900 border-l border-solid flex-1 pl-[30px] pr-[35px] sm:px-5 py-[30px] text-gray-500 text-lg w-full"
                  size="txtManropeMedium18"
                >
                  No
                </Text>
                <Text
                  className="border-gray-900 border-l border-solid flex-1 pb-7 pl-[30px] pr-[35px] pt-[33px] sm:px-5 text-gray-500 text-lg w-full"
                  size="txtManropeMedium18"
                >
                  Yes, up to 5 family members.
                </Text>
                <Text
                  className="border-gray-900 border-l border-solid flex-1 pb-7 pl-[30px] pr-[35px] pt-[33px] sm:px-5 text-gray-500 text-lg w-full"
                  size="txtManropeMedium18"
                >
                  Yes, up to 6 family members.
                </Text>
              </div>
            </List>
          </div>
        </div>
        <div className="bg-black-900 border border-gray-900 border-solid flex flex-col items-center justify-start max-w-[1596px] mt-[150px] mx-auto px-20 md:px-5 py-[100px] rounded-[12px] w-full">
          <div className="flex h-[313px] sm:h-[907px] justify-end relative rounded-[12px] w-[1596px] md:w-full">
            <div className="absolute flex sm:flex-col flex-row gap-5 h-full inset-x-[0] items-center justify-between mx-auto top-[0] w-full">
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_42x165.png"
                alt="image_One"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_54.png"
                alt="image_Two"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_55.png"
                alt="image_Three"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_56.png"
                alt="image_Four"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_57.png"
                alt="image_Five"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_58.png"
                alt="image_Six"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_59.png"
                alt="image_Seven"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_60.png"
                alt="image_Eight"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_42x115.png"
                alt="image_Nine"
              />
            </div>
            <div className="absolute flex sm:flex-col flex-row gap-5 h-full inset-x-[0] items-center justify-between mx-auto top-[20%] w-full">
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_83x165.png"
                alt="image_Ten"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_61.png"
                alt="image_Eleven"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_62.png"
                alt="image_Twelve"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_63.png"
                alt="image_Thirteen"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_64.png"
                alt="image_Fourteen"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_65.png"
                alt="image_Fifteen"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_66.png"
                alt="image_Sixteen"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_67.png"
                alt="image_Seventeen"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_83x115.png"
                alt="image_Eighteen"
              />
            </div>
            <div className="absolute bottom-[20%] flex sm:flex-col flex-row gap-5 h-full inset-x-[0] items-center justify-between mx-auto w-full">
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_68.png"
                alt="image_Nineteen"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_69.png"
                alt="image_Twenty"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_70.png"
                alt="image_TwentyOne"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_71.png"
                alt="image_TwentyTwo"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_72.png"
                alt="image_TwentyThree"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_73.png"
                alt="image_TwentyFour"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_74.png"
                alt="image_TwentyFive"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_75.png"
                alt="image_TwentySix"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_76.png"
                alt="image_TwentySeven"
              />
            </div>
            <div className="flex sm:flex-col flex-row gap-5 h-full items-center justify-between mt-auto mx-auto w-full">
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_77.png"
                alt="image_TwentyEight"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_78.png"
                alt="image_TwentyNine"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_79.png"
                alt="image_Thirty"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_80.png"
                alt="image_ThirtyOne"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_81.png"
                alt="image_ThirtyTwo"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_82.png"
                alt="image_ThirtyThree"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_83.png"
                alt="image_ThirtyFour"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_84.png"
                alt="image_ThirtyFive"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_85.png"
                alt="image_ThirtySix"
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

export default SubscriptionPageDesktopPage;
