import React from "react";

import { Button, Img, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <Img
          className="h-[60px] w-[199px]"
          src="images/img_logo.svg"
          alt="logo"
        />
        <ul className="bg-black-900 flex sm:flex-col flex-row gap-[30px] sm:hidden items-center justify-start outline outline-[4px] outline-gray-900_02 px-10 sm:px-5 py-2.5 rounded-[12px] w-auto common-row-list">
          <li>
            <Text
              className="text-gray-400 text-lg"
              size="txtManropeRegular18Gray400"
            >
              Home
            </Text>
          </li>
          <li>
            <Button
              className="!text-white-A700 border border-gray-900_03 border-solid cursor-pointer font-manrope font-medium rounded-lg text-center text-lg"
              color="gray_900_03"
              size="lg"
              variant="fill"
            >
              Movies & Shows
            </Button>
          </li>
          <li>
            <Text
              className="text-gray-400 text-lg"
              size="txtManropeRegular18Gray400"
            >
              Support
            </Text>
          </li>
          <li>
            <Text
              className="text-gray-400 text-lg"
              size="txtManropeRegular18Gray400"
            >
              Subscriptions
            </Text>
          </li>
        </ul>
        <Img
          className="h-[34px] w-[98px]"
          src="images/img_buttonscontainer.svg"
          alt="buttonscontaine"
        />
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
