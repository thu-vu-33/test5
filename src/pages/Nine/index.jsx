import React from "react";

import { Img, List, Text } from "components";

const NinePage = () => {
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
                SqareUp - Digital Agency
              </Text>
              <Text
                className="md:text-5xl text-[355.96px] text-white-A700 w-full"
                size="txtInterRegular35596"
              >
                Agency Website Template for a Digital Brand
              </Text>
            </div>
            <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 gap-[400px] items-center justify-between w-auto md:w-full">
              <Text
                className="md:text-5xl text-[414.79px] text-white-A700 w-auto"
                size="txtInterSemiBold41479"
              >
                Copy This Template From
              </Text>
              <div className="bg-lime-A700 flex flex-col items-start justify-center md:px-10 sm:px-5 px-[300px] py-[280px] rounded-[100px] w-auto md:w-full">
                <a
                  href="https://produce-ui.com/templates"
                  className="font-medium md:text-5xl text-[414.79px] text-black-900_01 underline w-auto"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Text>produce-ui.com</Text>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-900_06 flex flex-col items-center justify-end p-[1783px] md:px-10 sm:px-5 rounded-[228px] shadow-bs1 w-full">
          <div className="flex flex-col items-center justify-start max-w-[40650px] mt-[71px] mx-auto w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col md:gap-10 gap-[220px] items-center justify-start w-full">
                <List
                  className="sm:flex-col flex-row md:gap-10 gap-[1700px] grid sm:grid-cols-1 md:grid-cols-4 grid-cols-7 justify-center w-full"
                  orientation="horizontal"
                >
                  <div className="bg-gray-900_01 border-[5px] border-blue_gray-900 border-solid flex flex-1 flex-col items-center justify-center max-w-[4350px] sm:ml-[0] p-[70px] md:px-10 sm:px-5 rounded-[29px] w-full">
                    <Text
                      className="md:text-5xl text-[84px] text-white-A700 w-auto"
                      size="txtInterMedium84"
                    >
                      Home Page
                    </Text>
                  </div>
                  <div className="bg-gray-900_01 border-[5px] border-blue_gray-900 border-solid flex flex-1 flex-col items-center justify-center max-w-[4350px] sm:ml-[0] p-[70px] md:px-10 sm:px-5 rounded-[29px] w-full">
                    <Text
                      className="md:text-5xl text-[84px] text-white-A700 w-auto"
                      size="txtInterMedium84"
                    >
                      Services Page
                    </Text>
                  </div>
                  <div className="bg-gray-900_01 border-[5px] border-blue_gray-900 border-solid flex flex-1 flex-col items-center justify-center max-w-[4350px] sm:ml-[0] p-[70px] md:px-10 sm:px-5 rounded-[29px] w-full">
                    <Text
                      className="md:text-5xl text-[84px] text-white-A700 w-auto"
                      size="txtInterMedium84"
                    >
                      Works Page
                    </Text>
                  </div>
                  <div className="bg-gray-900_01 border-[5px] border-blue_gray-900 border-solid flex flex-1 flex-col items-center justify-center max-w-[4350px] sm:ml-[0] p-[70px] md:px-10 sm:px-5 rounded-[29px] w-full">
                    <Text
                      className="md:text-5xl text-[84px] text-white-A700 w-auto"
                      size="txtInterMedium84"
                    >
                      Process Page
                    </Text>
                  </div>
                  <div className="bg-gray-900_01 border-[5px] border-blue_gray-900 border-solid flex flex-1 flex-col items-center justify-center max-w-[4350px] sm:ml-[0] p-[70px] md:px-10 sm:px-5 rounded-[29px] w-full">
                    <Text
                      className="md:text-5xl text-[84px] text-white-A700 w-auto"
                      size="txtInterMedium84"
                    >
                      About Page
                    </Text>
                  </div>
                  <div className="bg-gray-900_01 border-[5px] border-blue_gray-900 border-solid flex flex-1 flex-col items-center justify-center max-w-[4350px] sm:ml-[0] p-[70px] md:px-10 sm:px-5 rounded-[29px] w-full">
                    <Text
                      className="md:text-5xl text-[84px] text-white-A700 w-auto"
                      size="txtInterMedium84"
                    >
                      Careers Page
                    </Text>
                  </div>
                  <div className="bg-gray-900_01 border-[5px] border-blue_gray-900 border-solid flex flex-1 flex-col items-center justify-center max-w-[4350px] sm:ml-[0] p-[70px] md:px-10 sm:px-5 rounded-[29px] w-full">
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
                    className="sm:flex-1 h-[8393px] md:h-auto object-cover w-[5%] sm:w-full"
                    src="images/img_image164_8393x1920.png"
                    alt="image164"
                  />
                  <Img
                    className="sm:flex-1 h-[6810px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[4%] sm:w-full"
                    src="images/img_image165_6810x1440.png"
                    alt="image165"
                  />
                  <Img
                    className="sm:flex-1 h-[8874px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[1%] sm:w-full"
                    src="images/img_image166_8874x390.png"
                    alt="image166"
                  />
                  <Img
                    className="sm:flex-1 h-[6291px] md:h-auto sm:ml-[0] ml-[1700px] object-cover w-[5%] sm:w-full"
                    src="images/img_image167_6291x1920.png"
                    alt="image167"
                  />
                  <Img
                    className="sm:flex-1 h-[4985px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[4%] sm:w-full"
                    src="images/img_image168_4985x1440.png"
                    alt="image168"
                  />
                  <Img
                    className="sm:flex-1 h-[6797px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[1%] sm:w-full"
                    src="images/img_image169_6797x390.png"
                    alt="image169"
                  />
                  <Img
                    className="sm:flex-1 h-[6342px] md:h-auto sm:ml-[0] ml-[1700px] object-cover w-[5%] sm:w-full"
                    src="images/img_image170_6342x1920.png"
                    alt="image170"
                  />
                  <Img
                    className="sm:flex-1 h-[5294px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[4%] sm:w-full"
                    src="images/img_image171_5294x1440.png"
                    alt="image171"
                  />
                  <Img
                    className="sm:flex-1 h-[4106px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[1%] sm:w-full"
                    src="images/img_image172_4106x390.png"
                    alt="image172"
                  />
                  <Img
                    className="sm:flex-1 h-[4869px] md:h-auto sm:ml-[0] ml-[1700px] object-cover w-[5%] sm:w-full"
                    src="images/img_image173_4869x1920.png"
                    alt="image173"
                  />
                  <Img
                    className="sm:flex-1 h-[3979px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[4%] sm:w-full"
                    src="images/img_image174_3979x1440.png"
                    alt="image174"
                  />
                  <Img
                    className="sm:flex-1 h-[5360px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[1%] sm:w-full"
                    src="images/img_image175_5360x390.png"
                    alt="image175"
                  />
                  <Img
                    className="sm:flex-1 h-[3834px] md:h-auto sm:ml-[0] ml-[1700px] object-cover w-[5%] sm:w-full"
                    src="images/img_image176_3834x1920.png"
                    alt="image176"
                  />
                  <Img
                    className="sm:flex-1 h-[3205px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[4%] sm:w-full"
                    src="images/img_image177_3205x1440.png"
                    alt="image177"
                  />
                  <Img
                    className="sm:flex-1 h-[4782px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[1%] sm:w-full"
                    src="images/img_image178_4782x390.png"
                    alt="image178"
                  />
                  <Img
                    className="sm:flex-1 h-[5645px] md:h-auto sm:ml-[0] ml-[1700px] object-cover w-[5%] sm:w-full"
                    src="images/img_image179_5645x1920.png"
                    alt="image179"
                  />
                  <Img
                    className="sm:flex-1 h-[4626px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[4%] sm:w-full"
                    src="images/img_image180_4626x1440.png"
                    alt="image180"
                  />
                  <Img
                    className="sm:flex-1 h-[8681px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[1%] sm:w-full"
                    src="images/img_image181_8681x390.png"
                    alt="image181"
                  />
                  <Img
                    className="sm:flex-1 h-[3904px] md:h-auto sm:ml-[0] ml-[1700px] object-cover w-[5%] sm:w-full"
                    src="images/img_image182_3904x1920.png"
                    alt="image182"
                  />
                  <Img
                    className="sm:flex-1 h-[3169px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[4%] sm:w-full"
                    src="images/img_image183_3169x1440.png"
                    alt="image183"
                  />
                  <Img
                    className="sm:flex-1 h-[4033px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[1%] sm:w-full"
                    src="images/img_image184_4033x390.png"
                    alt="image184"
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

export default NinePage;
