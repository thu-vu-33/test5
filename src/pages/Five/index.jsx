import React from "react";

import { Img, List, Text } from "components";

const FivePage = () => {
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
                Photographer Portfolio
              </Text>
              <Text
                className="md:text-5xl text-[355.96px] text-white-A700 w-full"
                size="txtInterRegular35596"
              >
                Portfolio Website Template for a Personal Photography Brand
              </Text>
            </div>
            <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 gap-[400px] items-center justify-between w-auto md:w-full">
              <Text
                className="md:text-5xl text-[414.79px] text-white-A700 w-auto"
                size="txtInterSemiBold41479"
              >
                Copy This Template From
              </Text>
              <div className="bg-gray-900_10 flex flex-col items-start justify-center md:px-10 sm:px-5 px-[300px] py-[280px] rounded-[100px] w-auto md:w-full">
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
        <div className="bg-gray-900_06 flex flex-col items-center justify-center p-[2205px] md:px-10 sm:px-5 rounded-[228px] shadow-bs1 w-full">
          <div className="flex flex-col items-center justify-start max-w-[40650px] mx-auto my-[325px] w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col md:gap-10 gap-[220px] items-center justify-start w-full">
                <List
                  className="sm:flex-col flex-row md:gap-10 gap-[1700px] grid sm:grid-cols-1 md:grid-cols-4 grid-cols-7 justify-center w-full"
                  orientation="horizontal"
                >
                  <div className="bg-gray-100 border-[5px] border-gray-300 border-solid flex flex-1 flex-col items-center justify-center max-w-[4350px] sm:ml-[0] p-[70px] md:px-10 sm:px-5 rounded-[29px] w-full">
                    <Text
                      className="md:text-5xl text-[84px] text-gray-900 w-auto"
                      size="txtInterMedium84Gray900"
                    >
                      Home Page
                    </Text>
                  </div>
                  <div className="bg-gray-100 border-[5px] border-gray-300 border-solid flex flex-1 flex-col items-center justify-center max-w-[4350px] sm:ml-[0] p-[70px] md:px-10 sm:px-5 rounded-[29px] w-full">
                    <Text
                      className="md:text-5xl text-[84px] text-gray-900 w-auto"
                      size="txtInterMedium84Gray900"
                    >
                      About Us Page
                    </Text>
                  </div>
                  <div className="bg-gray-100 border-[5px] border-gray-300 border-solid flex flex-1 flex-col items-center justify-center max-w-[4350px] sm:ml-[0] p-[70px] md:px-10 sm:px-5 rounded-[29px] w-full">
                    <Text
                      className="md:text-5xl text-[84px] text-gray-900 w-auto"
                      size="txtInterMedium84Gray900"
                    >
                      Portfolio Page
                    </Text>
                  </div>
                  <div className="bg-gray-100 border-[5px] border-gray-300 border-solid flex flex-1 flex-col items-center justify-center max-w-[4350px] sm:ml-[0] p-[70px] md:px-10 sm:px-5 rounded-[29px] w-full">
                    <Text
                      className="md:text-5xl text-[84px] text-gray-900 w-auto"
                      size="txtInterMedium84Gray900"
                    >
                      Services Page
                    </Text>
                  </div>
                  <div className="bg-gray-100 border-[5px] border-gray-300 border-solid flex flex-1 flex-col items-center justify-center max-w-[4350px] sm:ml-[0] p-[70px] md:px-10 sm:px-5 rounded-[29px] w-full">
                    <Text
                      className="md:text-5xl text-[84px] text-gray-900 w-auto"
                      size="txtInterMedium84Gray900"
                    >
                      Projects Page
                    </Text>
                  </div>
                  <div className="bg-gray-100 border-[5px] border-gray-300 border-solid flex flex-1 flex-col items-center justify-center max-w-[4350px] sm:ml-[0] p-[70px] md:px-10 sm:px-5 rounded-[29px] w-full">
                    <Text
                      className="md:text-5xl text-[84px] text-gray-900 w-auto"
                      size="txtInterMedium84Gray900"
                    >
                      Contact Page
                    </Text>
                  </div>
                  <div className="bg-gray-100 border-[5px] border-gray-300 border-solid flex flex-1 flex-col items-center justify-center max-w-[4350px] sm:ml-[0] p-[70px] md:px-10 sm:px-5 rounded-[29px] w-full">
                    <Text
                      className="md:text-5xl text-[84px] text-gray-900 w-auto"
                      size="txtInterMedium84Gray900"
                    >
                      Pricing Page
                    </Text>
                  </div>
                </List>
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                  <Img
                    className="sm:flex-1 h-[6172px] md:h-auto object-cover w-[5%] sm:w-full"
                    src="images/img_image245.png"
                    alt="image245"
                  />
                  <Img
                    className="sm:flex-1 h-[5015px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[4%] sm:w-full"
                    src="images/img_image246.png"
                    alt="image246"
                  />
                  <Img
                    className="sm:flex-1 h-[7261px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[1%] sm:w-full"
                    src="images/img_image247.png"
                    alt="image247"
                  />
                  <Img
                    className="sm:flex-1 h-[7053px] md:h-auto sm:ml-[0] ml-[1700px] object-cover w-[5%] sm:w-full"
                    src="images/img_image248.png"
                    alt="image248"
                  />
                  <Img
                    className="sm:flex-1 h-[5628px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[4%] sm:w-full"
                    src="images/img_image249.png"
                    alt="image249"
                  />
                  <Img
                    className="sm:flex-1 h-[6915px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[1%] sm:w-full"
                    src="images/img_image250.png"
                    alt="image250"
                  />
                  <Img
                    className="sm:flex-1 h-[6797px] md:h-auto sm:ml-[0] ml-[1700px] object-cover w-[5%] sm:w-full"
                    src="images/img_image251.png"
                    alt="image251"
                  />
                  <Img
                    className="sm:flex-1 h-[5476px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[4%] sm:w-full"
                    src="images/img_image252.png"
                    alt="image252"
                  />
                  <Img
                    className="sm:flex-1 h-[7195px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[1%] sm:w-full"
                    src="images/img_image253.png"
                    alt="image253"
                  />
                  <Img
                    className="sm:flex-1 h-[5791px] md:h-auto sm:ml-[0] ml-[1700px] object-cover w-[5%] sm:w-full"
                    src="images/img_image254.png"
                    alt="image254"
                  />
                  <Img
                    className="sm:flex-1 h-[4681px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[4%] sm:w-full"
                    src="images/img_image255.png"
                    alt="image255"
                  />
                  <Img
                    className="sm:flex-1 h-[6028px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[1%] sm:w-full"
                    src="images/img_image256.png"
                    alt="image256"
                  />
                  <Img
                    className="sm:flex-1 h-[8217px] md:h-auto sm:ml-[0] ml-[1700px] object-cover w-[5%] sm:w-full"
                    src="images/img_image257.png"
                    alt="image257"
                  />
                  <Img
                    className="sm:flex-1 h-[6850px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[4%] sm:w-full"
                    src="images/img_image258.png"
                    alt="image258"
                  />
                  <Img
                    className="sm:flex-1 h-[9800px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[1%] sm:w-full"
                    src="images/img_image259.png"
                    alt="image259"
                  />
                  <Img
                    className="sm:flex-1 h-[3790px] md:h-auto sm:ml-[0] ml-[1700px] object-cover w-[5%] sm:w-full"
                    src="images/img_image261.png"
                    alt="image261"
                  />
                  <Img
                    className="sm:flex-1 h-[3088px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[4%] sm:w-full"
                    src="images/img_image262.png"
                    alt="image262"
                  />
                  <Img
                    className="sm:flex-1 h-[3803px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[1%] sm:w-full"
                    src="images/img_image263.png"
                    alt="image263"
                  />
                  <Img
                    className="sm:flex-1 h-[5263px] md:h-auto sm:ml-[0] ml-[1700px] object-cover w-[5%] sm:w-full"
                    src="images/img_image264.png"
                    alt="image264"
                  />
                  <Img
                    className="sm:flex-1 h-[4113px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[4%] sm:w-full"
                    src="images/img_image265.png"
                    alt="image265"
                  />
                  <Img
                    className="sm:flex-1 h-[5746px] md:h-auto sm:ml-[0] ml-[300px] object-cover w-[1%] sm:w-full"
                    src="images/img_image266.png"
                    alt="image266"
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

export default FivePage;
