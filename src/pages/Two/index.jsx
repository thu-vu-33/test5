import React from "react";

import { Text } from "components";

const TwoPage = () => {
  return (
    <>
      <div className="bg-black-900 border-[5px] border-gray-900 border-solid flex flex-col font-inter items-center justify-center mx-auto p-[70px] md:px-10 sm:px-5 w-auto sm:w-full md:w-full">
        <Text
          className="md:text-5xl text-[84px] text-white-A700 w-auto"
          size="txtInterMedium84"
        >
          Home Page
        </Text>
      </div>
    </>
  );
};

export default TwoPage;
