import React from "react";

import { Img, List, Text } from "components";

const TwelvePage = () => {
  return (
    <>
      <div className="flex flex-col font-inter items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="bg-gray-900_05 flex flex-row items-center justify-between p-[800px] md:px-10 sm:px-5 rounded-bl-[200px] rounded-br-[200px] rounded-tl-[500px] rounded-tr-[500px] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[26316px] mx-auto w-full">
            <div className="flex md:flex-1 flex-col md:gap-10 gap-[218px] items-start justify-start w-auto md:w-full">
              <Text
                className="md:text-5xl text-[751.47px] text-white-A700 w-full"
                size="txtInterSemiBold75147"
              >
                Designer Portfolio
              </Text>
              <Text
                className="md:text-5xl text-[355.96px] text-white-A700 w-full"
                size="txtInterRegular35596"
              >
                Designer Portfolio Website Template for a Personal Brand
              </Text>
            </div>
            <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 gap-[400px] items-center justify-between w-auto md:w-full">
              <Text
                className="md:text-5xl text-[414.79px] text-white-A700 w-auto"
                size="txtInterSemiBold41479"
              >
                Copy This Template From
              </Text>
              <div className="bg-deep_purple-A700 flex flex-col items-start justify-center md:px-10 sm:px-5 px-[300px] py-[280px] rounded-[100px] w-auto md:w-full">
                <a
                  href="https://produce-ui.com/templates"
                  className="font-medium md:text-5xl text-[414.79px] text-white-A700 underline w-auto"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Text>produce-ui.com</Text>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-900_06 flex flex-col items-center justify-end p-[1132px] md:px-10 sm:px-5 rounded-[228px] shadow-bs1 w-full">
          <div className="flex flex-col items-center justify-start max-w-[22500px] mx-auto w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col md:gap-10 gap-[220px] items-center justify-start w-full">
                <List
                  className="sm:flex-col flex-row md:gap-10 gap-[1700px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-full"
                  orientation="horizontal"
                >
                  <div className="bg-gray-200 border-[5px] border-gray-300_01 border-solid flex flex-1 flex-col items-center justify-center max-w-[4350px] sm:ml-[0] p-[70px] md:px-10 sm:px-5 rounded-[29px] w-full">
                    <Text
                      className="md:text-5xl text-[84px] text-blue_gray-900 w-auto"
                      size="txtInterMedium84Bluegray900"
                    >
                      Home Page
                    </Text>
                  </div>
                  <div className="bg-gray-200 border-[5px] border-gray-300_01 border-solid flex flex-1 flex-col items-center justify-center max-w-[4350px] sm:ml-[0] p-[70px] md:px-10 sm:px-5 rounded-[29px] w-full">
                    <Text
                      className="md:text-5xl text-[84px] text-blue_gray-900 w-auto"
                      size="txtInterMedium84Bluegray900"
                    >
                      About Page
                    </Text>
                  </div>
                  <div className="bg-gray-200 border-[5px] border-gray-300_01 border-solid flex flex-1 flex-col items-center justify-center max-w-[4350px] sm:ml-[0] p-[70px] md:px-10 sm:px-5 rounded-[29px] w-full">
                    <Text
                      className="md:text-5xl text-[84px] text-blue_gray-900 w-auto"
                      size="txtInterMedium84Bluegray900"
                    >
                      Portfolio Page
                    </Text>
                  </div>
                  <div className="bg-gray-200 border-[5px] border-gray-300_01 border-solid flex flex-1 flex-col items-center justify-center max-w-[4350px] sm:ml-[0] p-[70px] md:px-10 sm:px-5 rounded-[29px] w-full">
                    <Text
                      className="md:text-5xl text-[84px] text-blue_gray-900 w-auto"
                      size="txtInterMedium84Bluegray900"
                    >
                      Contact Page
                    </Text>
                  </div>
                </List>
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                  <Img
                    className="sm:flex-1 h-[6733px] md:h-auto object-cover w-[9%] sm:w-full"
                    src="images/img_image67_6733x1920.png"
                    alt="imageSixtySeven"
                  />
                  <Img
                    className="sm:flex-1 h-[5436px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[7%] sm:w-full"
                    src="images/img_image68_5436x1440.png"
                    alt="imageSixtyEight"
                  />
                  <Img
                    className="sm:flex-1 h-[7261px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[2%] sm:w-full"
                    src="images/img_image69_7261x390.png"
                    alt="imageSixtyNine"
                  />
                  <Img
                    className="sm:flex-1 h-[4064px] md:h-auto sm:ml-[0] ml-[1700px] object-cover w-[9%] sm:w-full"
                    src="images/img_image70_4064x1920.png"
                    alt="imageSeventy"
                  />
                  <Img
                    className="sm:flex-1 h-[3393px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[7%] sm:w-full"
                    src="images/img_image71_3393x1440.png"
                    alt="imageSeventyOne"
                  />
                  <Img
                    className="sm:flex-1 h-[4643px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[2%] sm:w-full"
                    src="images/img_image72_4643x390.png"
                    alt="imageSeventyTwo"
                  />
                  <Img
                    className="sm:flex-1 h-[3355px] md:h-auto sm:ml-[0] ml-[1700px] object-cover w-[9%] sm:w-full"
                    src="images/img_image73_3355x1920.png"
                    alt="imageSeventyThree"
                  />
                  <Img
                    className="sm:flex-1 h-[2672px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[7%] sm:w-full"
                    src="images/img_image74_2672x1440.png"
                    alt="imageSeventyFour"
                  />
                  <Img
                    className="sm:flex-1 h-[2915px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[2%] sm:w-full"
                    src="images/img_image75_2915x390.png"
                    alt="imageSeventyFive"
                  />
                  <Img
                    className="sm:flex-1 h-[3255px] md:h-auto sm:ml-[0] ml-[1700px] object-cover w-[9%] sm:w-full"
                    src="images/img_image76_3255x1920.png"
                    alt="imageSeventySix"
                  />
                  <Img
                    className="sm:flex-1 h-[2519px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[7%] sm:w-full"
                    src="images/img_image77_2519x1440.png"
                    alt="imageSeventySeven"
                  />
                  <Img
                    className="sm:flex-1 h-[3557px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[2%] sm:w-full"
                    src="images/img_image78_3557x390.png"
                    alt="imageSeventyEight"
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

export default TwelvePage;
