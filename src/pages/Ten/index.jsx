import React from "react";

import { Img, List, Text } from "components";

const TenPage = () => {
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
                Estatein - Real Estate
              </Text>
              <Text
                className="md:text-5xl text-[355.96px] text-white-A700 w-full"
                size="txtInterRegular35596"
              >
                Real Estate Website Template For a Business Brand
              </Text>
            </div>
            <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 gap-[400px] items-center justify-between w-auto md:w-full">
              <Text
                className="md:text-5xl text-[414.79px] text-white-A700 w-auto"
                size="txtInterSemiBold41479"
              >
                Copy This Template From
              </Text>
              <div className="bg-deep_purple-A200 flex flex-col items-start justify-center outline outline-[50px] outline-blue_gray-900 md:px-10 sm:px-5 px-[300px] py-[280px] rounded-[100px] w-auto md:w-full">
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
        <div className="bg-gray-900_06 flex flex-col items-center justify-center p-[1795px] md:px-10 sm:px-5 rounded-[228px] shadow-bs1 w-full">
          <div className="flex flex-col items-center justify-start max-w-[34600px] mx-auto my-[59px] w-full">
            <div className="flex flex-col items-center justify-start pb-[1481px] w-full">
              <div className="flex flex-col md:gap-10 gap-[220px] items-center justify-start w-full">
                <List
                  className="sm:flex-col flex-row md:gap-10 gap-[1700px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 justify-center w-full"
                  orientation="horizontal"
                >
                  <div className="bg-gray-900_01 border-[5px] border-gray-900 border-solid flex flex-1 flex-col items-center justify-center max-w-[4350px] sm:ml-[0] p-[70px] md:px-10 sm:px-5 rounded-[29px] w-full">
                    <Text
                      className="md:text-5xl text-[84px] text-white-A700 w-auto"
                      size="txtInterMedium84"
                    >
                      Home Page
                    </Text>
                  </div>
                  <div className="bg-gray-900_01 border-[5px] border-gray-900 border-solid flex flex-1 flex-col items-center justify-center max-w-[4350px] sm:ml-[0] p-[70px] md:px-10 sm:px-5 rounded-[29px] w-full">
                    <Text
                      className="md:text-5xl text-[84px] text-white-A700 w-auto"
                      size="txtInterMedium84"
                    >
                      About Us Page
                    </Text>
                  </div>
                  <div className="bg-gray-900_01 border-[5px] border-gray-900 border-solid flex flex-1 flex-col items-center justify-center max-w-[4350px] sm:ml-[0] p-[70px] md:px-10 sm:px-5 rounded-[29px] w-full">
                    <Text
                      className="md:text-5xl text-[84px] text-white-A700 w-auto"
                      size="txtInterMedium84"
                    >
                      Properties Page
                    </Text>
                  </div>
                  <div className="bg-gray-900_01 border-[5px] border-gray-900 border-solid flex flex-1 flex-col items-center justify-center max-w-[4350px] sm:ml-[0] p-[70px] md:px-10 sm:px-5 rounded-[29px] w-full">
                    <Text
                      className="md:text-5xl text-[84px] text-white-A700 w-auto"
                      size="txtInterMedium84"
                    >
                      Property Details Page
                    </Text>
                  </div>
                  <div className="bg-gray-900_01 border-[5px] border-gray-900 border-solid flex flex-1 flex-col items-center justify-center max-w-[4350px] sm:ml-[0] p-[70px] md:px-10 sm:px-5 rounded-[29px] w-full">
                    <Text
                      className="md:text-5xl text-[84px] text-white-A700 w-auto"
                      size="txtInterMedium84"
                    >
                      Services Page
                    </Text>
                  </div>
                  <div className="bg-gray-900_01 border-[5px] border-gray-900 border-solid flex flex-1 flex-col items-center justify-center max-w-[4350px] sm:ml-[0] p-[70px] md:px-10 sm:px-5 rounded-[29px] w-full">
                    <Text
                      className="md:text-5xl text-[84px] text-white-A700 w-auto"
                      size="txtInterMedium84"
                    >
                      Contact Page
                    </Text>
                  </div>
                </List>
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                  <Img
                    className="sm:flex-1 h-[5136px] md:h-auto object-cover w-[6%] sm:w-full"
                    src="images/img_image267.png"
                    alt="image267"
                  />
                  <Img
                    className="sm:flex-1 h-[4034px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[5%] sm:w-full"
                    src="images/img_image268.png"
                    alt="image268"
                  />
                  <Img
                    className="sm:flex-1 h-[4885px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[2%] sm:w-full"
                    src="images/img_image269.png"
                    alt="image269"
                  />
                  <Img
                    className="sm:flex-1 h-[6021px] md:h-auto sm:ml-[0] ml-[1700px] object-cover w-[6%] sm:w-full"
                    src="images/img_image270.png"
                    alt="image270"
                  />
                  <Img
                    className="sm:flex-1 h-[4931px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[5%] sm:w-full"
                    src="images/img_image271.png"
                    alt="image271"
                  />
                  <Img
                    className="sm:flex-1 h-[8027px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[2%] sm:w-full"
                    src="images/img_aboutuspage.png"
                    alt="aboutuspage"
                  />
                  <Img
                    className="sm:flex-1 h-[4381px] md:h-auto sm:ml-[0] ml-[1700px] object-cover w-[6%] sm:w-full"
                    src="images/img_image272.png"
                    alt="image272"
                  />
                  <Img
                    className="sm:flex-1 h-[3347px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[5%] sm:w-full"
                    src="images/img_image273.png"
                    alt="image273"
                  />
                  <Img
                    className="sm:flex-1 h-[4797px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[2%] sm:w-full"
                    src="images/img_image274.png"
                    alt="image274"
                  />
                  <Img
                    className="sm:flex-1 h-[7740px] md:h-auto sm:ml-[0] ml-[1700px] object-cover w-[6%] sm:w-full"
                    src="images/img_image275.png"
                    alt="image275"
                  />
                  <Img
                    className="sm:flex-1 h-[6086px] md:h-auto sm:ml-[0] ml-[351px] object-cover w-[5%] sm:w-full"
                    src="images/img_image276.png"
                    alt="image276"
                  />
                  <Img
                    className="sm:flex-1 h-[7429px] md:h-auto sm:ml-[0] ml-[351px] object-cover w-[2%] sm:w-full"
                    src="images/img_image277.png"
                    alt="image277"
                  />
                  <Img
                    className="sm:flex-1 h-[4522px] md:h-auto sm:ml-[0] ml-[1598px] object-cover w-[6%] sm:w-full"
                    src="images/img_image278.png"
                    alt="image278"
                  />
                  <Img
                    className="sm:flex-1 h-[3672px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[5%] sm:w-full"
                    src="images/img_image279.png"
                    alt="image279"
                  />
                  <Img
                    className="sm:flex-1 h-[5938px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[2%] sm:w-full"
                    src="images/img_image280.png"
                    alt="image280"
                  />
                  <Img
                    className="sm:flex-1 h-[5180px] md:h-auto sm:ml-[0] ml-[1700px] object-cover w-[6%] sm:w-full"
                    src="images/img_image281.png"
                    alt="image281"
                  />
                  <Img
                    className="sm:flex-1 h-[4059px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[5%] sm:w-full"
                    src="images/img_image282.png"
                    alt="image282"
                  />
                  <Img
                    className="sm:flex-1 h-[5071px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[2%] sm:w-full"
                    src="images/img_image283.png"
                    alt="image283"
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

export default TenPage;
