import React from "react";

import { Img, List, Text } from "components";

const SixteenPage = () => {
  return (
    <>
      <div className="flex flex-col font-inter items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="bg-gray-900_05 flex flex-row items-center justify-between p-[800px] md:px-10 sm:px-5 rounded-bl-[200px] rounded-br-[200px] rounded-tl-[500px] rounded-tr-[500px] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[43461px] mx-auto w-full">
            <div className="flex md:flex-1 flex-col md:gap-10 gap-[218px] items-start justify-start w-auto md:w-full">
              <Text
                className="md:text-5xl text-[751.47px] text-white-A700 w-full"
                size="txtInterSemiBold75147"
              >
                Current Vandi - E Vehicle Rent
              </Text>
              <Text
                className="md:text-5xl text-[355.96px] text-white-A700 w-full"
                size="txtInterRegular35596"
              >
                Renting E-Vehicle Template for a Business
              </Text>
            </div>
            <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 gap-[400px] items-center justify-between w-auto md:w-full">
              <Text
                className="md:text-5xl text-[414.79px] text-white-A700 w-auto"
                size="txtInterSemiBold41479"
              >
                Copy This Template From
              </Text>
              <div className="bg-red-A400_01 flex flex-col items-start justify-center md:px-10 sm:px-5 px-[300px] py-[280px] rounded-[100px] w-auto md:w-full">
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
        <div className="bg-gray-900_06 flex flex-col items-center justify-end p-[1836px] md:px-10 sm:px-5 rounded-[228px] shadow-bs1 w-full">
          <div className="flex flex-col items-center justify-start max-w-[40650px] mx-auto w-full">
            <div className="flex flex-col items-center justify-start pb-[282px] w-full">
              <div className="flex flex-col md:gap-10 gap-[220px] items-center justify-start w-full">
                <List
                  className="sm:flex-col flex-row md:gap-10 gap-[1700px] grid sm:grid-cols-1 md:grid-cols-4 grid-cols-7 justify-center w-full"
                  orientation="horizontal"
                >
                  <div className="bg-gray-900_09 border-[5px] border-blue_gray-900_03 border-solid flex flex-1 flex-col items-center justify-center max-w-[4350px] sm:ml-[0] p-[70px] md:px-10 sm:px-5 rounded-[29px] w-full">
                    <Text
                      className="md:text-5xl text-[84px] text-white-A700 w-auto"
                      size="txtInterMedium84"
                    >
                      Home Page
                    </Text>
                  </div>
                  <div className="bg-gray-900_09 border-[5px] border-blue_gray-900_03 border-solid flex flex-1 flex-col items-center justify-center max-w-[4350px] sm:ml-[0] p-[70px] md:px-10 sm:px-5 rounded-[29px] w-full">
                    <Text
                      className="md:text-5xl text-[84px] text-white-A700 w-auto"
                      size="txtInterMedium84"
                    >
                      Process Page
                    </Text>
                  </div>
                  <div className="bg-gray-900_09 border-[5px] border-blue_gray-900_03 border-solid flex flex-1 flex-col items-center justify-center max-w-[4350px] sm:ml-[0] p-[70px] md:px-10 sm:px-5 rounded-[29px] w-full">
                    <Text
                      className="md:text-5xl text-[84px] text-white-A700 w-auto"
                      size="txtInterMedium84"
                    >
                      Vehicles Page
                    </Text>
                  </div>
                  <div className="bg-gray-900_09 border-[5px] border-blue_gray-900_03 border-solid flex flex-1 flex-col items-center justify-center max-w-[4350px] sm:ml-[0] p-[70px] md:px-10 sm:px-5 rounded-[29px] w-full">
                    <Text
                      className="md:text-5xl text-[84px] text-white-A700 w-auto"
                      size="txtInterMedium84"
                    >
                      Pricing Page
                    </Text>
                  </div>
                  <div className="bg-gray-900_09 border-[5px] border-blue_gray-900_03 border-solid flex flex-1 flex-col items-center justify-center max-w-[4350px] sm:ml-[0] p-[70px] md:px-10 sm:px-5 rounded-[29px] w-full">
                    <Text
                      className="md:text-5xl text-[84px] text-white-A700 w-auto"
                      size="txtInterMedium84"
                    >
                      About Page
                    </Text>
                  </div>
                  <div className="bg-gray-900_09 border-[5px] border-blue_gray-900_03 border-solid flex flex-1 flex-col items-center justify-center max-w-[4350px] sm:ml-[0] p-[70px] md:px-10 sm:px-5 rounded-[29px] w-full">
                    <Text
                      className="md:text-5xl text-[84px] text-white-A700 w-auto"
                      size="txtInterMedium84"
                    >
                      App Page
                    </Text>
                  </div>
                  <div className="bg-gray-900_09 border-[5px] border-blue_gray-900_03 border-solid flex flex-1 flex-col items-center justify-center max-w-[4350px] sm:ml-[0] p-[70px] md:px-10 sm:px-5 rounded-[29px] w-full">
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
                    className="sm:flex-1 h-[7984px] md:h-auto object-cover w-[5%] sm:w-full"
                    src="images/img_image185_7984x1920.png"
                    alt="image185"
                  />
                  <Img
                    className="sm:flex-1 h-[6383px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[4%] sm:w-full"
                    src="images/img_image186_6383x1440.png"
                    alt="image186"
                  />
                  <Img
                    className="sm:flex-1 h-[7869px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[1%] sm:w-full"
                    src="images/img_image187_7869x390.png"
                    alt="image187"
                  />
                  <Img
                    className="sm:flex-1 h-[4493px] md:h-auto sm:ml-[0] ml-[1700px] object-cover w-[5%] sm:w-full"
                    src="images/img_image188_4493x1920.png"
                    alt="image188"
                  />
                  <Img
                    className="sm:flex-1 h-[3623px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[4%] sm:w-full"
                    src="images/img_image189_3623x1440.png"
                    alt="image189"
                  />
                  <Img
                    className="sm:flex-1 h-[3300px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[1%] sm:w-full"
                    src="images/img_image190_3300x390.png"
                    alt="image190"
                  />
                  <Img
                    className="sm:flex-1 h-[4601px] md:h-auto sm:ml-[0] ml-[1700px] object-cover w-[5%] sm:w-full"
                    src="images/img_image191_4601x1920.png"
                    alt="image191"
                  />
                  <Img
                    className="sm:flex-1 h-[3697px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[4%] sm:w-full"
                    src="images/img_image192_3697x1440.png"
                    alt="image192"
                  />
                  <Img
                    className="sm:flex-1 h-[4425px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[1%] sm:w-full"
                    src="images/img_image193_4425x390.png"
                    alt="image193"
                  />
                  <Img
                    className="sm:flex-1 h-[5503px] md:h-auto sm:ml-[0] ml-[1700px] object-cover w-[5%] sm:w-full"
                    src="images/img_image194_5503x1920.png"
                    alt="image194"
                  />
                  <Img
                    className="sm:flex-1 h-[4388px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[4%] sm:w-full"
                    src="images/img_image195_4388x1440.png"
                    alt="image195"
                  />
                  <Img
                    className="sm:flex-1 h-[5725px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[1%] sm:w-full"
                    src="images/img_image196_5725x390.png"
                    alt="image196"
                  />
                  <Img
                    className="sm:flex-1 h-[5921px] md:h-auto sm:ml-[0] ml-[1700px] object-cover w-[5%] sm:w-full"
                    src="images/img_image197_5921x1920.png"
                    alt="image197"
                  />
                  <Img
                    className="sm:flex-1 h-[4775px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[4%] sm:w-full"
                    src="images/img_image198.png"
                    alt="image198"
                  />
                  <Img
                    className="sm:flex-1 h-[6289px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[1%] sm:w-full"
                    src="images/img_image199.png"
                    alt="image199"
                  />
                  <Img
                    className="sm:flex-1 h-[3811px] md:h-auto sm:ml-[0] ml-[1700px] object-cover w-[5%] sm:w-full"
                    src="images/img_image200.png"
                    alt="image200"
                  />
                  <Img
                    className="sm:flex-1 h-[3038px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[4%] sm:w-full"
                    src="images/img_image201.png"
                    alt="image201"
                  />
                  <Img
                    className="sm:flex-1 h-[3355px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[1%] sm:w-full"
                    src="images/img_image202.png"
                    alt="image202"
                  />
                  <Img
                    className="sm:flex-1 h-[4241px] md:h-auto sm:ml-[0] ml-[1700px] object-cover w-[5%] sm:w-full"
                    src="images/img_image203.png"
                    alt="image203"
                  />
                  <Img
                    className="sm:flex-1 h-[3339px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[4%] sm:w-full"
                    src="images/img_image204.png"
                    alt="image204"
                  />
                  <Img
                    className="sm:flex-1 h-[3495px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[1%] sm:w-full"
                    src="images/img_image205.png"
                    alt="image205"
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

export default SixteenPage;
