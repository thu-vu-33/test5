import React from "react";

import { Img, List, Text } from "components";

const NineteenPage = () => {
  return (
    <>
      <div className="flex flex-col font-inter items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="bg-gray-900_05 flex flex-row items-center justify-between p-[800px] md:px-10 sm:px-5 rounded-bl-[200px] rounded-br-[200px] rounded-tl-[500px] rounded-tr-[500px] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[36591px] mx-auto w-full">
            <div className="flex md:flex-1 flex-col md:gap-10 gap-[218px] items-start justify-start w-auto md:w-full">
              <Text
                className="md:text-5xl text-[751.47px] text-white-A700 w-full"
                size="txtInterSemiBold75147"
              >
                LittleLearners - School
              </Text>
              <Text
                className="md:text-5xl text-[355.96px] text-white-A700 w-full"
                size="txtInterRegular35596"
              >
                School Website Template
              </Text>
            </div>
            <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 gap-[400px] items-center justify-between w-auto md:w-full">
              <Text
                className="md:text-5xl text-[414.79px] text-white-A700 w-auto"
                size="txtInterSemiBold41479"
              >
                Copy This Template From
              </Text>
              <div className="bg-deep_orange-300 flex flex-col items-start justify-center outline outline-[50px] outline-blue_gray-900 md:px-10 sm:px-5 px-[300px] py-[280px] rounded-[100px] w-auto md:w-full">
                <a
                  href="https://produce-ui.com/templates"
                  className="font-medium md:text-5xl text-[414.79px] text-blue_gray-900 underline w-auto"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Text>produce-ui.com</Text>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-900_06 flex flex-col items-center justify-center p-[1795px] md:px-10 sm:px-5 rounded-[228px] shadow-bs1 w-full">
          <div className="flex flex-col items-center justify-start max-w-[34600px] mx-auto my-[59px] w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col md:gap-10 gap-[220px] items-center justify-start w-full">
                <List
                  className="sm:flex-col flex-row md:gap-10 gap-[1700px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 justify-center w-full"
                  orientation="horizontal"
                >
                  <div className="bg-red-50 flex flex-1 flex-col items-center justify-center max-w-[4350px] sm:ml-[0] outline outline-[5px] outline-deep_orange-300_01 p-[70px] md:px-10 sm:px-5 rounded-[29px] w-full">
                    <Text
                      className="md:text-5xl text-[84px] text-blue_gray-900 w-auto"
                      size="txtInterMedium84Bluegray900"
                    >
                      Home Page
                    </Text>
                  </div>
                  <div className="bg-red-50 flex flex-1 flex-col items-center justify-center max-w-[4350px] sm:ml-[0] outline outline-[5px] outline-deep_orange-300_01 p-[70px] md:px-10 sm:px-5 rounded-[29px] w-full">
                    <Text
                      className="md:text-5xl text-[84px] text-blue_gray-900 w-auto"
                      size="txtInterMedium84Bluegray900"
                    >
                      About Page
                    </Text>
                  </div>
                  <div className="bg-red-50 flex flex-1 flex-col items-center justify-center max-w-[4350px] sm:ml-[0] outline outline-[5px] outline-deep_orange-300_01 p-[70px] md:px-10 sm:px-5 rounded-[29px] w-full">
                    <Text
                      className="md:text-5xl text-[84px] text-blue_gray-900 w-auto"
                      size="txtInterMedium84Bluegray900"
                    >
                      Academics Page
                    </Text>
                  </div>
                  <div className="bg-red-50 flex flex-1 flex-col items-center justify-center max-w-[4350px] sm:ml-[0] outline outline-[5px] outline-deep_orange-300_01 p-[70px] md:px-10 sm:px-5 rounded-[29px] w-full">
                    <Text
                      className="md:text-5xl text-[84px] text-blue_gray-900 w-auto"
                      size="txtInterMedium84Bluegray900"
                    >
                      Admission Page
                    </Text>
                  </div>
                  <div className="bg-red-50 flex flex-1 flex-col items-center justify-center max-w-[4350px] sm:ml-[0] outline outline-[5px] outline-deep_orange-300_01 p-[70px] md:px-10 sm:px-5 rounded-[29px] w-full">
                    <Text
                      className="md:text-5xl text-[84px] text-blue_gray-900 w-auto"
                      size="txtInterMedium84Bluegray900"
                    >
                      Student Life Page
                    </Text>
                  </div>
                  <div className="bg-red-50 flex flex-1 flex-col items-center justify-center max-w-[4350px] sm:ml-[0] outline outline-[5px] outline-deep_orange-300_01 p-[70px] md:px-10 sm:px-5 rounded-[29px] w-full">
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
                    className="sm:flex-1 h-[7129px] md:h-auto object-cover w-[6%] sm:w-full"
                    src="images/img_image1_7129x1920.png"
                    alt="imageOne"
                  />
                  <Img
                    className="sm:flex-1 h-[5687px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[5%] sm:w-full"
                    src="images/img_image2_5687x1440.png"
                    alt="imageTwo"
                  />
                  <Img
                    className="sm:flex-1 h-[8924px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[2%] sm:w-full"
                    src="images/img_image3_8924x390.png"
                    alt="imageThree"
                  />
                  <Img
                    className="sm:flex-1 h-[7468px] md:h-auto sm:ml-[0] ml-[1700px] object-cover w-[6%] sm:w-full"
                    src="images/img_image4_7468x1920.png"
                    alt="imageFour"
                  />
                  <Img
                    className="sm:flex-1 h-[5880px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[5%] sm:w-full"
                    src="images/img_image5_5880x1440.png"
                    alt="imageFive"
                  />
                  <Img
                    className="sm:flex-1 h-[9076px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[2%] sm:w-full"
                    src="images/img_image6_9076x390.png"
                    alt="imageSix"
                  />
                  <Img
                    className="sm:flex-1 h-[8680px] md:h-auto sm:ml-[0] ml-[1700px] object-cover w-[6%] sm:w-full"
                    src="images/img_image7_8680x1920.png"
                    alt="imageSeven"
                  />
                  <Img
                    className="sm:flex-1 h-[6850px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[5%] sm:w-full"
                    src="images/img_image8_6850x1440.png"
                    alt="imageEight"
                  />
                  <Img
                    className="sm:flex-1 h-[9508px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[2%] sm:w-full"
                    src="images/img_image9_9508x390.png"
                    alt="imageNine"
                  />
                  <Img
                    className="sm:flex-1 h-[4906px] md:h-auto sm:ml-[0] ml-[1700px] object-cover w-[6%] sm:w-full"
                    src="images/img_image10_4906x1920.png"
                    alt="imageTen"
                  />
                  <Img
                    className="sm:flex-1 h-[3856px] md:h-auto sm:ml-[0] ml-[351px] object-cover w-[5%] sm:w-full"
                    src="images/img_image11_3856x1440.png"
                    alt="imageEleven"
                  />
                  <Img
                    className="sm:flex-1 h-[4096px] md:h-auto sm:ml-[0] ml-[351px] object-cover w-[1%] sm:w-full"
                    src="images/img_image12_4096x288.png"
                    alt="imageTwelve"
                  />
                  <Img
                    className="sm:flex-1 h-[5589px] md:h-auto sm:ml-[0] ml-[1700px] object-cover w-[6%] sm:w-full"
                    src="images/img_image13_5589x1920.png"
                    alt="imageThirteen"
                  />
                  <Img
                    className="sm:flex-1 h-[4365px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[5%] sm:w-full"
                    src="images/img_image14_4365x1440.png"
                    alt="imageFourteen"
                  />
                  <Img
                    className="sm:flex-1 h-[8320px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[2%] sm:w-full"
                    src="images/img_image15_8320x390.png"
                    alt="imageFifteen"
                  />
                  <Img
                    className="sm:flex-1 h-[3558px] md:h-auto sm:ml-[0] ml-[1700px] object-cover w-[6%] sm:w-full"
                    src="images/img_image16_3558x1920.png"
                    alt="imageSixteen"
                  />
                  <Img
                    className="sm:flex-1 h-[2796px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[5%] sm:w-full"
                    src="images/img_image17_2796x1440.png"
                    alt="imageSeventeen"
                  />
                  <Img
                    className="sm:flex-1 h-[3685px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[2%] sm:w-full"
                    src="images/img_image18_3685x390.png"
                    alt="imageEighteen"
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

export default NineteenPage;
