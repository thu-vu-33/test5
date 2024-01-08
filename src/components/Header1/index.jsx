import React from "react";

import { Button, Img, Text } from "components";

const Header1 = (props) => {
  return (
    <>
      <header className={props.className}>
        <Img
          className="h-[50px] w-[165px]"
          src="images/img_logo.svg"
          alt="logo"
        />
        <ul className="bg-black-900 flex flex-row gap-4 sm:hidden items-center justify-start outline outline-[3px] outline-gray-900_02 sm:px-5 px-[30px] py-2 rounded-[10px] w-auto common-row-list">
          <li>
            <Text className="text-gray-400 text-sm" size="txtManropeRegular14">
              Home
            </Text>
          </li>
          <li>
            <Button
              className="!text-white-A700 border border-gray-900_03 border-solid cursor-pointer font-manrope font-medium rounded-lg text-center text-sm"
              color="gray_900_03"
              size="md"
              variant="fill"
            >
              Movies & Shows
            </Button>
          </li>
          <li>
            <Text className="text-gray-400 text-sm" size="txtManropeRegular14">
              Support
            </Text>
          </li>
          <li>
            <Text className="text-gray-400 text-sm" size="txtManropeRegular14">
              Subscriptions
            </Text>
          </li>
        </ul>
        <Img
          className="h-6 w-[62px]"
          src="images/img_buttonscontainer.svg"
          alt="buttonscontaine"
        />
      </header>
    </>
  );
};

Header1.defaultProps = {};

export default Header1;
