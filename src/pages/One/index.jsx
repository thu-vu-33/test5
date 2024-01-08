import React from "react";

import { Img, List, Text } from "components";

const OnePage = () => {
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
                ForHelp - Charity
              </Text>
              <Text
                className="md:text-5xl text-[355.96px] text-white-A700 w-full"
                size="txtInterRegular35596"
              >
                Charity Website Template for a Non Profitable Organization
              </Text>
            </div>
            <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 gap-[400px] items-center justify-between w-auto md:w-full">
              <Text
                className="md:text-5xl text-[414.79px] text-white-A700 w-auto"
                size="txtInterSemiBold41479"
              >
                Copy This Template From
              </Text>
              <div className="bg-light_green-A200 flex flex-col items-start justify-center md:px-10 sm:px-5 px-[300px] py-[280px] rounded-[100px] w-auto md:w-full">
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
        <div className="bg-gray-900_06 flex flex-col items-center justify-end p-[2205px] md:px-10 sm:px-5 rounded-[228px] shadow-bs1 w-full">
          <div className="flex flex-col items-center justify-start max-w-[40650px] mb-2 mt-3.5 mx-auto w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col md:gap-10 gap-[220px] items-center justify-start w-full">
                <List
                  className="sm:flex-col flex-row md:gap-10 gap-[1700px] grid sm:grid-cols-1 md:grid-cols-4 grid-cols-7 justify-center w-full"
                  orientation="horizontal"
                >
                  <div className="bg-lime-50_01 border-[5px] border-blue_gray-50 border-solid flex flex-1 flex-col items-center justify-center max-w-[4350px] sm:ml-[0] p-[70px] md:px-10 sm:px-5 rounded-[29px] w-full">
                    <Text
                      className="md:text-5xl text-[84px] text-gray-900 w-auto"
                      size="txtInterMedium84Gray900"
                    >
                      Home Page
                    </Text>
                  </div>
                  <div className="bg-lime-50_01 border-[5px] border-blue_gray-50 border-solid flex flex-1 flex-col items-center justify-center max-w-[4350px] sm:ml-[0] p-[70px] md:px-10 sm:px-5 rounded-[29px] w-full">
                    <Text
                      className="md:text-5xl text-[84px] text-gray-900 w-auto"
                      size="txtInterMedium84Gray900"
                    >
                      Get Involved Page
                    </Text>
                  </div>
                  <div className="bg-lime-50_01 border-[5px] border-blue_gray-50 border-solid flex flex-1 flex-col items-center justify-center max-w-[4350px] sm:ml-[0] p-[70px] md:px-10 sm:px-5 rounded-[29px] w-full">
                    <Text
                      className="md:text-5xl text-[84px] text-gray-900 w-auto"
                      size="txtInterMedium84Gray900"
                    >
                      Donate Page
                    </Text>
                  </div>
                  <div className="bg-lime-50_01 border-[5px] border-blue_gray-50 border-solid flex flex-1 flex-col items-center justify-center max-w-[4350px] sm:ml-[0] p-[70px] md:px-10 sm:px-5 rounded-[29px] w-full">
                    <Text
                      className="md:text-5xl text-[84px] text-gray-900 w-auto"
                      size="txtInterMedium84Gray900"
                    >
                      Impact Areas Page
                    </Text>
                  </div>
                  <div className="bg-lime-50_01 border-[5px] border-blue_gray-50 border-solid flex flex-1 flex-col items-center justify-center max-w-[4350px] sm:ml-[0] p-[70px] md:px-10 sm:px-5 rounded-[29px] w-full">
                    <Text
                      className="md:text-5xl text-[84px] text-gray-900 w-auto"
                      size="txtInterMedium84Gray900"
                    >
                      Success Stories Page
                    </Text>
                  </div>
                  <div className="bg-lime-50_01 border-[5px] border-blue_gray-50 border-solid flex flex-1 flex-col items-center justify-center max-w-[4350px] sm:ml-[0] p-[70px] md:px-10 sm:px-5 rounded-[29px] w-full">
                    <Text
                      className="md:text-5xl text-[84px] text-gray-900 w-auto"
                      size="txtInterMedium84Gray900"
                    >
                      News Page
                    </Text>
                  </div>
                  <div className="bg-lime-50_01 border-[5px] border-blue_gray-50 border-solid flex flex-1 flex-col items-center justify-center max-w-[4350px] sm:ml-[0] p-[70px] md:px-10 sm:px-5 rounded-[29px] w-full">
                    <Text
                      className="md:text-5xl text-[84px] text-gray-900 w-auto"
                      size="txtInterMedium84Gray900"
                    >
                      Contact Page
                    </Text>
                  </div>
                </List>
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                  <Img
                    className="sm:flex-1 h-[9745px] md:h-auto object-cover w-[5%] sm:w-full"
                    src="images/img_image224.png"
                    alt="image224"
                  />
                  <Img
                    className="sm:flex-1 h-[7630px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[4%] sm:w-full"
                    src="images/img_image225.png"
                    alt="image225"
                  />
                  <Img
                    className="sm:flex-1 h-[9452px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[1%] sm:w-full"
                    src="images/img_image226.png"
                    alt="image226"
                  />
                  <Img
                    className="sm:flex-1 h-[8192px] md:h-auto sm:ml-[0] ml-[1700px] object-cover w-[5%] sm:w-full"
                    src="images/img_image227.png"
                    alt="image227"
                  />
                  <Img
                    className="sm:flex-1 h-[6495px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[4%] sm:w-full"
                    src="images/img_image228.png"
                    alt="image228"
                  />
                  <Img
                    className="sm:flex-1 h-[9740px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[1%] sm:w-full"
                    src="images/img_image229.png"
                    alt="image229"
                  />
                  <Img
                    className="sm:flex-1 h-[6054px] md:h-auto sm:ml-[0] ml-[1700px] object-cover w-[5%] sm:w-full"
                    src="images/img_image230.png"
                    alt="image230"
                  />
                  <Img
                    className="sm:flex-1 h-[4850px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[4%] sm:w-full"
                    src="images/img_image231.png"
                    alt="image231"
                  />
                  <Img
                    className="sm:flex-1 h-[7099px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[1%] sm:w-full"
                    src="images/img_image232.png"
                    alt="image232"
                  />
                  <Img
                    className="sm:flex-1 h-[5438px] md:h-auto sm:ml-[0] ml-[1700px] object-cover w-[5%] sm:w-full"
                    src="images/img_image233.png"
                    alt="image233"
                  />
                  <Img
                    className="sm:flex-1 h-[4308px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[4%] sm:w-full"
                    src="images/img_image234.png"
                    alt="image234"
                  />
                  <Img
                    className="sm:flex-1 h-[4826px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[1%] sm:w-full"
                    src="images/img_image235.png"
                    alt="image235"
                  />
                  <Img
                    className="sm:flex-1 h-[5397px] md:h-auto sm:ml-[0] ml-[1700px] object-cover w-[5%] sm:w-full"
                    src="images/img_image236.png"
                    alt="image236"
                  />
                  <Img
                    className="sm:flex-1 h-[4346px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[4%] sm:w-full"
                    src="images/img_image237.png"
                    alt="image237"
                  />
                  <Img
                    className="sm:flex-1 h-[6945px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[1%] sm:w-full"
                    src="images/img_image238.png"
                    alt="image238"
                  />
                  <Img
                    className="sm:flex-1 h-[4323px] md:h-auto sm:ml-[0] ml-[1700px] object-cover w-[5%] sm:w-full"
                    src="images/img_image239.png"
                    alt="image239"
                  />
                  <Img
                    className="sm:flex-1 h-[3441px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[4%] sm:w-full"
                    src="images/img_image240.png"
                    alt="image240"
                  />
                  <Img
                    className="sm:flex-1 h-[4271px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[1%] sm:w-full"
                    src="images/img_image241.png"
                    alt="image241"
                  />
                  <Img
                    className="sm:flex-1 h-[3300px] md:h-auto sm:ml-[0] ml-[1700px] object-cover w-[5%] sm:w-full"
                    src="images/img_image242.png"
                    alt="image242"
                  />
                  <Img
                    className="sm:flex-1 h-[2624px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[4%] sm:w-full"
                    src="images/img_image243.png"
                    alt="image243"
                  />
                  <Img
                    className="sm:flex-1 h-[3749px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[1%] sm:w-full"
                    src="images/img_image244.png"
                    alt="image244"
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

export default OnePage;
