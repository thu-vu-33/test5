import React from "react";

import {
  Button,
  Img,
  Line,
  List,
  PagerIndicator,
  RatingBar,
  Slider,
  Text,
} from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const MoviesShowsPageDesktopPage = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  const sliderRef1 = React.useRef(null);
  const [sliderState1, setsliderState1] = React.useState(0);
  const sliderRef2 = React.useRef(null);
  const [sliderState2, setsliderState2] = React.useState(0);

  return (
    <>
      <div className="bg-gray-900_01 flex flex-col font-manrope items-center justify-start mx-auto w-full">
        <Header className="flex md:flex-col flex-row md:gap-10 items-center justify-between md:px-5 px-[162px] py-[30px] w-full" />
        <div
          className="bg-cover bg-gradient7  bg-no-repeat border border-solid flex flex-col gap-[50px] gray_900_gray_900_00_02_border h-[835px] md:h-auto items-center justify-end max-w-[1594px] mt-[50px] mx-auto pb-5 pt-[50px] md:px-5 px-[50px] rounded-[12px] w-full"
          style={{
            backgroundImage: "url('images/img_container_835x1594.png')",
          }}
        >
          <Slider
            autoPlay
            autoPlayInterval={2000}
            activeIndex={sliderState}
            responsive={{
              0: { items: 1 },
              550: { items: 1 },
              1050: { items: 1 },
            }}
            onSlideChanged={(e) => {
              setsliderState(e?.item);
            }}
            ref={sliderRef}
            className="w-full"
            items={[...Array(4)].map(() => (
              <React.Fragment key={Math.random()}>
                <div className="flex flex-col items-center justify-end max-w-[1494px] mx-2.5">
                  <div className="flex flex-col gap-[30px] items-center justify-start w-full">
                    <div className="flex flex-col gap-1 items-center justify-start md:px-10 sm:px-5 px-[150px] w-full">
                      <Text
                        className="md:text-4xl sm:text-[34px] text-[38px] text-center text-white-A700 w-full"
                        size="txtManropeBold38"
                      >
                        Avengers : Endgame
                      </Text>
                      <Text
                        className="leading-[150.00%] max-w-[1194px] md:max-w-full text-center text-gray-500 text-lg"
                        size="txtManropeMedium18"
                      >
                        <>
                          With the help of remaining allies, the Avengers must
                          assemble once more in order to undo Thanos&#39;s
                          actions and undo the chaos to the universe, no matter
                          what consequences may be in store, and no matter who
                          they face... Avenge the fallen.
                        </>
                      </Text>
                    </div>
                    <div className="flex flex-row gap-5 items-start justify-start w-auto">
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[157px] rounded-lg"
                        leftIcon={
                          <Img
                            className="h-7 mb-px mr-1"
                            src="images/img_icon.svg"
                            alt="Icon"
                          />
                        }
                        color="red_A700"
                        size="md"
                        variant="fill"
                      >
                        <div className="font-semibold text-left text-lg">
                          Play Now
                        </div>
                      </Button>
                      <Img
                        className="h-14 w-[188px]"
                        src="images/img_buttonscontainer_black_900.svg"
                        alt="buttonscontaine"
                      />
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
            renderDotsItem={({ isActive }) => {
              if (isActive) {
                return (
                  <div className="inline-block cursor-pointer h-1 bg-red-A700 w-[23px] rounded-sm" />
                );
              }
              return (
                <div
                  className="inline-block cursor-pointer h-1 bg-blue_gray-900 w-4 rounded-sm"
                  role="button"
                  tabIndex={0}
                />
              );
            }}
          />
          <div className="flex flex-row gap-4 items-center justify-between w-full">
            <Img
              className="h-14 rounded-lg w-14"
              src="images/img_button_black_900.svg"
              alt="button"
            />
            <PagerIndicator
              className="flex gap-[3px] h-1 items-start justify-start w-[81px]"
              count={4}
              activeCss="inline-block cursor-pointer h-1 bg-red-A700 w-[23px] rounded-sm"
              activeIndex={sliderState}
              inactiveCss="inline-block cursor-pointer h-1 bg-blue_gray-900 w-4 rounded-sm"
              sliderRef={sliderRef}
              selectedWrapperCss="inline-block"
              unselectedWrapperCss="inline-block"
            />
            <Img
              className="h-14 rounded-lg w-14"
              src="images/img_button_black_900_56x56.svg"
              alt="button_One"
            />
          </div>
        </div>
        <div className="flex flex-col max-w-[1598px] mt-[180px] mx-auto md:px-5 relative w-full">
          <Slider
            autoPlay
            autoPlayInterval={2000}
            activeIndex={sliderState1}
            responsive={{
              0: { items: 1 },
              550: { items: 1 },
              1050: { items: 1 },
            }}
            onSlideChanged={(e) => {
              setsliderState1(e?.item);
            }}
            ref={sliderRef1}
            className="mx-auto w-full"
            items={[...Array(4)].map(() => (
              <React.Fragment key={Math.random()}>
                <div className="flex flex-col items-start justify-start max-w-[1598px] mx-2.5 md:px-10 sm:px-5 px-[50px]">
                  <Button
                    className="cursor-pointer font-semibold min-w-[116px] rounded-lg text-center text-xl"
                    color="red_A700"
                    size="sm"
                    variant="fill"
                  >
                    Movies
                  </Button>
                </div>
              </React.Fragment>
            ))}
            renderDotsItem={({ isActive }) => {
              if (isActive) {
                return (
                  <div className="inline-block cursor-pointer h-1 bg-red-A700 w-[23px] rounded-sm" />
                );
              }
              return (
                <div
                  className="inline-block cursor-pointer h-1 bg-blue_gray-900 w-4 rounded-sm"
                  role="button"
                  tabIndex={0}
                />
              );
            }}
          />
          <div className="border border-gray-900 border-solid flex flex-col md:gap-10 gap-[100px] items-center justify-start mb-auto mt-[-30px] mx-auto p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full z-[1]">
            <div className="flex flex-col gap-[50px] items-start justify-start w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 gap-[100px] items-center justify-start w-full">
                <Text
                  className="flex-1 md:text-4xl sm:text-[34px] text-[38px] text-white-A700 w-auto"
                  size="txtManropeBold38"
                >
                  Our Genres
                </Text>
                <div className="bg-black-900 border border-gray-900_02 border-solid flex flex-row gap-4 items-center justify-start p-4 rounded-[12px] w-auto">
                  <Button
                    className="border border-gray-900_02 border-solid flex h-14 items-center justify-center rounded-lg w-14"
                    color="gray_900_03"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-7"
                      src="images/img_arrowleft.svg"
                      alt="arrowleft"
                    />
                  </Button>
                  <PagerIndicator
                    className="flex gap-[3px] h-1 items-start justify-start w-[81px]"
                    count={4}
                    activeCss="inline-block cursor-pointer h-1 bg-red-A700 w-[23px] rounded-sm"
                    activeIndex={sliderState1}
                    inactiveCss="inline-block cursor-pointer h-1 bg-blue_gray-900 w-4 rounded-sm"
                    sliderRef={sliderRef1}
                    selectedWrapperCss="inline-block"
                    unselectedWrapperCss="inline-block"
                  />
                  <Button
                    className="border border-gray-900_02 border-solid flex h-14 items-center justify-center rounded-lg w-14"
                    color="gray_900_03"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-7"
                      src="images/img_arrowright_white_a700.svg"
                      alt="arrowright"
                    />
                  </Button>
                </div>
              </div>
              <List
                className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-start w-full"
                orientation="horizontal"
              >
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col items-start justify-start p-[30px] sm:px-5 rounded-[12px] w-full">
                  <div className="h-[252px] md:h-auto relative w-full">
                    <div className="flex flex-1 flex-row gap-[5px] h-full items-center justify-evenly mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[123px] sm:h-auto h-full max-h-[123px] object-cover rounded-[10px]"
                        src="images/img_image_123x115.png"
                        alt="image"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[123px] sm:h-auto h-full max-h-[123px] object-cover rounded-[10px]"
                        src="images/img_image_35.png"
                        alt="image_One"
                      />
                    </div>
                    <div className="flex flex-1 flex-row gap-[5px] h-full items-center justify-evenly mt-auto mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[123px] sm:h-auto h-full max-h-[123px] object-cover rounded-[10px]"
                        src="images/img_image_36.png"
                        alt="image_Two"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[123px] sm:h-auto h-full max-h-[123px] object-cover rounded-[10px]"
                        src="images/img_image_37.png"
                        alt="image_Three"
                      />
                    </div>
                    <div className="absolute bg-gradient3  h-[252px] inset-[0] justify-center m-auto w-full"></div>
                  </div>
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="flex-1 text-lg text-white-A700 w-auto"
                      size="txtManropeSemiBold18"
                    >
                      Action
                    </Text>
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_arrowleft.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col items-start justify-start p-[30px] sm:px-5 rounded-[12px] w-full">
                  <div className="h-[252px] md:h-auto relative w-full">
                    <div className="flex flex-1 flex-row gap-[5px] h-full items-center justify-between mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[123px] sm:h-auto h-full max-h-[123px] object-cover rounded-[10px]"
                        src="images/img_image_38.png"
                        alt="image"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[123px] sm:h-auto h-full max-h-[123px] object-cover rounded-[10px]"
                        src="images/img_image_39.png"
                        alt="image_One"
                      />
                    </div>
                    <div className="flex flex-1 flex-row gap-[5px] h-full items-center justify-between mt-auto mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[123px] sm:h-auto h-full max-h-[123px] object-cover rounded-[10px]"
                        src="images/img_image_40.png"
                        alt="image_Two"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[123px] sm:h-auto h-full max-h-[123px] object-cover rounded-[10px]"
                        src="images/img_image_41.png"
                        alt="image_Three"
                      />
                    </div>
                    <div className="absolute bg-gradient3  h-[252px] inset-[0] justify-center m-auto w-full"></div>
                  </div>
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="flex-1 text-lg text-white-A700 w-auto"
                      size="txtManropeSemiBold18"
                    >
                      Adventure
                    </Text>
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_arrowleft.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col items-start justify-start p-[30px] sm:px-5 rounded-[12px] w-full">
                  <div className="h-[252px] md:h-auto relative w-full">
                    <div className="flex flex-1 flex-row gap-[5px] h-full items-center justify-evenly mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[123px] sm:h-auto h-full max-h-[123px] object-cover rounded-[10px]"
                        src="images/img_image_42.png"
                        alt="image"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[123px] sm:h-auto h-full max-h-[123px] object-cover rounded-[10px]"
                        src="images/img_image_43.png"
                        alt="image_One"
                      />
                    </div>
                    <div className="flex flex-1 flex-row gap-[5px] h-full items-center justify-evenly mt-auto mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[123px] sm:h-auto h-full max-h-[123px] object-cover rounded-[10px]"
                        src="images/img_image_44.png"
                        alt="image_Two"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[123px] sm:h-auto h-full max-h-[123px] object-cover rounded-[10px]"
                        src="images/img_image_45.png"
                        alt="image_Three"
                      />
                    </div>
                    <div className="absolute bg-gradient3  h-[252px] inset-[0] justify-center m-auto w-full"></div>
                  </div>
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="flex-1 text-lg text-white-A700 w-auto"
                      size="txtManropeSemiBold18"
                    >
                      Comedy
                    </Text>
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_arrowleft.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col items-start justify-start p-[30px] sm:px-5 rounded-[12px] w-full">
                  <div className="h-[252px] md:h-auto relative w-full">
                    <div className="flex flex-1 flex-row gap-[5px] h-full items-center justify-evenly mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[123px] sm:h-auto h-full max-h-[123px] object-cover rounded-[10px]"
                        src="images/img_image_46.png"
                        alt="image"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[123px] sm:h-auto h-full max-h-[123px] object-cover rounded-[10px]"
                        src="images/img_image_47.png"
                        alt="image_One"
                      />
                    </div>
                    <div className="flex flex-1 flex-row gap-[5px] h-full items-center justify-evenly mt-auto mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[123px] sm:h-auto h-full max-h-[123px] object-cover rounded-[10px]"
                        src="images/img_image_48.png"
                        alt="image_Two"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[123px] sm:h-auto h-full max-h-[123px] object-cover rounded-[10px]"
                        src="images/img_image_49.png"
                        alt="image_Three"
                      />
                    </div>
                    <div className="absolute bg-gradient3  h-[252px] inset-[0] justify-center m-auto w-full"></div>
                  </div>
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="flex-1 text-lg text-white-A700 w-auto"
                      size="txtManropeSemiBold18"
                    >
                      Drama
                    </Text>
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_arrowleft.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col items-start justify-start p-[30px] sm:px-5 rounded-[12px] w-full">
                  <div className="h-[252px] md:h-auto relative w-full">
                    <div className="flex flex-1 flex-row gap-[5px] h-full items-center justify-evenly mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[123px] sm:h-auto h-full max-h-[123px] object-cover rounded-[10px]"
                        src="images/img_image_50.png"
                        alt="image"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[123px] sm:h-auto h-full max-h-[123px] object-cover rounded-[10px]"
                        src="images/img_image_51.png"
                        alt="image_One"
                      />
                    </div>
                    <div className="flex flex-1 flex-row gap-[5px] h-full items-center justify-evenly mt-auto mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[123px] sm:h-auto h-full max-h-[123px] object-cover rounded-[10px]"
                        src="images/img_image_52.png"
                        alt="image_Two"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[123px] sm:h-auto h-full max-h-[123px] object-cover rounded-[10px]"
                        src="images/img_image_53.png"
                        alt="image_Three"
                      />
                    </div>
                    <div className="absolute bg-gradient3  h-[252px] inset-[0] justify-center m-auto w-full"></div>
                  </div>
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="flex-1 text-lg text-white-A700 w-auto"
                      size="txtManropeSemiBold18"
                    >
                      Horror
                    </Text>
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_arrowleft.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
              </List>
            </div>
            <div className="flex flex-col gap-[50px] items-start justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[100px] items-center justify-start w-full">
                <Text
                  className="flex-1 md:text-4xl sm:text-[34px] text-[38px] text-white-A700 w-auto"
                  size="txtManropeBold38"
                >
                  Popular Top 10 In Genres
                </Text>
                <div className="bg-black-900 border border-gray-900_02 border-solid flex flex-row gap-4 items-center justify-start p-4 rounded-[12px] w-auto">
                  <Button
                    className="border border-gray-900_02 border-solid flex h-14 items-center justify-center rounded-lg w-14"
                    color="gray_900_03"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-7"
                      src="images/img_arrowleft.svg"
                      alt="arrowleft_One"
                    />
                  </Button>
                  <PagerIndicator
                    className="flex gap-[3px] h-1 items-start justify-start w-[81px]"
                    count={4}
                    activeCss="inline-block cursor-pointer h-1 bg-red-A700 w-[23px] rounded-sm"
                    activeIndex={1}
                    inactiveCss="inline-block cursor-pointer h-1 bg-blue_gray-900 w-4 rounded-sm"
                    selectedWrapperCss="inline-block"
                    unselectedWrapperCss="inline-block"
                  />
                  <Button
                    className="border border-gray-900_02 border-solid flex h-14 items-center justify-center rounded-lg w-14"
                    color="gray_900_03"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-7"
                      src="images/img_arrowright_white_a700.svg"
                      alt="arrowright_One"
                    />
                  </Button>
                </div>
              </div>
              <List
                className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start w-full"
                orientation="horizontal"
              >
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col h-[378px] md:h-auto items-end justify-start p-[30px] sm:px-5 rounded-[12px] w-full">
                  <div className="bg-gradient3  h-full relative w-full">
                    <div className="flex flex-1 flex-row gap-2.5 h-full items-center justify-between mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[121px] sm:h-auto h-full max-h-[121px] object-cover rounded"
                        src="images/img_image_121x141.png"
                        alt="image"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[121px] sm:h-auto h-full max-h-[121px] object-cover rounded"
                        src="images/img_image_105.png"
                        alt="image_One"
                      />
                    </div>
                    <div className="flex flex-1 flex-row gap-2.5 h-full items-center justify-between mt-auto mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[121px] sm:h-auto h-full max-h-[121px] object-cover rounded"
                        src="images/img_image_106.png"
                        alt="image_Two"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[121px] sm:h-auto h-full max-h-[121px] object-cover rounded"
                        src="images/img_image_107.png"
                        alt="image_Three"
                      />
                    </div>
                    <div className="absolute bg-gradient3  h-[252px] inset-[0] justify-center m-auto w-full"></div>
                  </div>
                  <div className="flex flex-row gap-5 items-center justify-start w-full">
                    <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                      <Text
                        className="bg-red-A700 justify-center pb-0.5 pt-[7px] px-2.5 rounded-[5px] text-base text-white-A700 w-auto"
                        size="txtManropeSemiBold16"
                      >
                        Top 10 In
                      </Text>
                      <Text
                        className="text-white-A700 text-xl w-full"
                        size="txtManropeSemiBold20"
                      >
                        Action
                      </Text>
                    </div>
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_arrowleft.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col h-[378px] md:h-auto items-end justify-start p-[30px] sm:px-5 rounded-[12px] w-full">
                  <div className="bg-gradient3  h-full relative w-full">
                    <div className="flex flex-1 flex-row gap-2.5 h-full items-center justify-between mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[121px] sm:h-auto h-full max-h-[121px] object-cover rounded"
                        src="images/img_image_108.png"
                        alt="image"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[121px] sm:h-auto h-full max-h-[121px] object-cover rounded"
                        src="images/img_image_109.png"
                        alt="image_One"
                      />
                    </div>
                    <div className="flex flex-1 flex-row gap-2.5 h-full items-center justify-between mt-auto mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[121px] sm:h-auto h-full max-h-[121px] object-cover rounded"
                        src="images/img_image_110.png"
                        alt="image_Two"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[121px] sm:h-auto h-full max-h-[121px] object-cover rounded"
                        src="images/img_image_111.png"
                        alt="image_Three"
                      />
                    </div>
                    <div className="absolute bg-gradient3  h-[252px] inset-[0] justify-center m-auto w-full"></div>
                  </div>
                  <div className="flex flex-row gap-5 items-center justify-start w-full">
                    <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                      <Text
                        className="bg-red-A700 justify-center pb-0.5 pt-[7px] px-2.5 rounded-[5px] text-base text-white-A700 w-auto"
                        size="txtManropeSemiBold16"
                      >
                        Top 10 In
                      </Text>
                      <Text
                        className="text-white-A700 text-xl w-full"
                        size="txtManropeSemiBold20"
                      >
                        Adventure
                      </Text>
                    </div>
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_arrowleft.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col h-[378px] md:h-auto items-end justify-start p-[30px] sm:px-5 rounded-[12px] w-full">
                  <div className="bg-gradient3  h-full relative w-full">
                    <div className="flex flex-1 flex-row gap-2.5 h-full items-center justify-between mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[121px] sm:h-auto h-full max-h-[121px] object-cover rounded"
                        src="images/img_image_112.png"
                        alt="image"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[121px] sm:h-auto h-full max-h-[121px] object-cover rounded"
                        src="images/img_image_113.png"
                        alt="image_One"
                      />
                    </div>
                    <div className="flex flex-1 flex-row gap-2.5 h-full items-center justify-between mt-auto mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[121px] sm:h-auto h-full max-h-[121px] object-cover rounded"
                        src="images/img_image_114.png"
                        alt="image_Two"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[121px] sm:h-auto h-full max-h-[121px] object-cover rounded"
                        src="images/img_image_115.png"
                        alt="image_Three"
                      />
                    </div>
                    <div className="absolute bg-gradient3  h-[252px] inset-[0] justify-center m-auto w-full"></div>
                  </div>
                  <div className="flex flex-row gap-5 items-center justify-start w-full">
                    <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                      <Text
                        className="bg-red-A700 justify-center pb-0.5 pt-[7px] px-2.5 rounded-[5px] text-base text-white-A700 w-auto"
                        size="txtManropeSemiBold16"
                      >
                        Top 10 In
                      </Text>
                      <Text
                        className="text-white-A700 text-xl w-full"
                        size="txtManropeSemiBold20"
                      >
                        Comedy
                      </Text>
                    </div>
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_arrowleft.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col h-[378px] md:h-auto items-end justify-start p-[30px] sm:px-5 rounded-[12px] w-full">
                  <div className="bg-gradient3  h-full relative w-full">
                    <div className="flex flex-1 flex-row gap-2.5 h-full items-center justify-between mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[121px] sm:h-auto h-full max-h-[121px] object-cover rounded"
                        src="images/img_image_116.png"
                        alt="image"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[121px] sm:h-auto h-full max-h-[121px] object-cover rounded"
                        src="images/img_image_117.png"
                        alt="image_One"
                      />
                    </div>
                    <div className="flex flex-1 flex-row gap-2.5 h-full items-center justify-between mt-auto mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[121px] sm:h-auto h-full max-h-[121px] object-cover rounded"
                        src="images/img_image_118.png"
                        alt="image_Two"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[121px] sm:h-auto h-full max-h-[121px] object-cover rounded"
                        src="images/img_image_119.png"
                        alt="image_Three"
                      />
                    </div>
                    <div className="absolute bg-gradient3  h-[252px] inset-[0] justify-center m-auto w-full"></div>
                  </div>
                  <div className="flex flex-row gap-5 items-center justify-start w-full">
                    <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                      <Text
                        className="bg-red-A700 justify-center pb-0.5 pt-[7px] px-2.5 rounded-[5px] text-base text-white-A700 w-auto"
                        size="txtManropeSemiBold16"
                      >
                        Top 10 In
                      </Text>
                      <Text
                        className="text-white-A700 text-xl w-full"
                        size="txtManropeSemiBold20"
                      >
                        Drama
                      </Text>
                    </div>
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_arrowleft.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
              </List>
            </div>
            <div className="flex flex-col gap-[50px] items-start justify-start w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 gap-[100px] items-center justify-start w-full">
                <Text
                  className="flex-1 md:text-4xl sm:text-[34px] text-[38px] text-white-A700 w-auto"
                  size="txtManropeBold38"
                >
                  Trending Now
                </Text>
                <div className="bg-black-900 border border-gray-900_02 border-solid flex flex-row gap-4 items-center justify-start p-4 rounded-[12px] w-auto">
                  <Button
                    className="border border-gray-900_02 border-solid flex h-14 items-center justify-center rounded-lg w-14"
                    color="gray_900_03"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-7"
                      src="images/img_arrowleft.svg"
                      alt="arrowleft_Two"
                    />
                  </Button>
                  <PagerIndicator
                    className="flex gap-[3px] h-1 items-start justify-start w-[81px]"
                    count={4}
                    activeCss="inline-block cursor-pointer h-1 bg-red-A700 w-[23px] rounded-sm"
                    activeIndex={1}
                    inactiveCss="inline-block cursor-pointer h-1 bg-blue_gray-900 w-4 rounded-sm"
                    selectedWrapperCss="inline-block"
                    unselectedWrapperCss="inline-block"
                  />
                  <Button
                    className="border border-gray-900_02 border-solid flex h-14 items-center justify-center rounded-lg w-14"
                    color="gray_900_03"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-7"
                      src="images/img_arrowright_white_a700.svg"
                      alt="arrowright_Two"
                    />
                  </Button>
                </div>
              </div>
              <List
                className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-start w-full"
                orientation="horizontal"
              >
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col gap-5 h-[377px] md:h-auto items-start justify-start p-5 rounded-[12px] w-full">
                  <Img
                    className="md:h-auto h-full object-cover rounded-[12px] w-full"
                    src="images/img_image_281x243.png"
                    alt="image"
                  />
                  <div className="flex flex-row items-start justify-between w-full">
                    <Button
                      className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[108px] rounded-[18px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-0.5"
                          src="images/img_icon_gray_500.svg"
                          alt="Icon"
                        />
                      }
                      color="gray_900_01"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-medium text-base text-left">
                        1h 30min
                      </div>
                    </Button>
                    <Button
                      className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[64px] rounded-[18px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-1"
                          src="images/img_icon_gray_500_24x24.svg"
                          alt="Icon"
                        />
                      }
                      color="gray_900_01"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-medium text-base text-left">2K</div>
                    </Button>
                  </div>
                </div>
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col gap-5 h-[377px] md:h-auto items-start justify-start p-5 rounded-[12px] w-full">
                  <Img
                    className="md:h-auto h-full object-cover rounded-[12px] w-full"
                    src="images/img_image_120.png"
                    alt="image"
                  />
                  <div className="flex flex-row items-start justify-between w-full">
                    <Button
                      className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[107px] rounded-[18px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-0.5"
                          src="images/img_icon_gray_500.svg"
                          alt="Icon"
                        />
                      }
                      color="gray_900_01"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-medium text-base text-left">
                        1h 57min
                      </div>
                    </Button>
                    <Button
                      className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[74px] rounded-[18px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-1"
                          src="images/img_icon_gray_500_24x24.svg"
                          alt="Icon"
                        />
                      }
                      color="gray_900_01"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-medium text-base text-left">
                        1.5K
                      </div>
                    </Button>
                  </div>
                </div>
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col gap-5 h-[377px] md:h-auto items-start justify-start p-5 rounded-[12px] w-full">
                  <Img
                    className="md:h-auto h-full object-cover rounded-[12px] w-full"
                    src="images/img_image_121.png"
                    alt="image"
                  />
                  <div className="flex flex-row items-start justify-between w-full">
                    <Button
                      className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[109px] rounded-[18px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-0.5"
                          src="images/img_icon_gray_500.svg"
                          alt="Icon"
                        />
                      }
                      color="gray_900_01"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-medium text-base text-left">
                        2h 10min
                      </div>
                    </Button>
                    <Button
                      className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[74px] rounded-[18px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-1"
                          src="images/img_icon_gray_500_24x24.svg"
                          alt="Icon"
                        />
                      }
                      color="gray_900_01"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-medium text-base text-left">
                        1.8K
                      </div>
                    </Button>
                  </div>
                </div>
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col gap-5 h-[377px] md:h-auto items-start justify-start p-5 rounded-[12px] w-full">
                  <Img
                    className="md:h-auto h-full object-cover rounded-[12px] w-full"
                    src="images/img_image_122.png"
                    alt="image"
                  />
                  <div className="flex flex-row items-start justify-between w-full">
                    <Button
                      className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[111px] rounded-[18px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-0.5"
                          src="images/img_icon_gray_500.svg"
                          alt="Icon"
                        />
                      }
                      color="gray_900_01"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-medium text-base text-left">
                        2h 20min
                      </div>
                    </Button>
                    <Button
                      className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[63px] rounded-[18px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-1"
                          src="images/img_icon_gray_500_24x24.svg"
                          alt="Icon"
                        />
                      }
                      color="gray_900_01"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-medium text-base text-left">3K</div>
                    </Button>
                  </div>
                </div>
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col gap-5 h-[377px] md:h-auto items-start justify-start p-5 rounded-[12px] w-full">
                  <Img
                    className="md:h-auto h-full object-cover rounded-[12px] w-full"
                    src="images/img_image_123.png"
                    alt="image"
                  />
                  <div className="flex flex-row items-start justify-between w-full">
                    <Button
                      className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[108px] rounded-[18px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-0.5"
                          src="images/img_icon_gray_500.svg"
                          alt="Icon"
                        />
                      }
                      color="gray_900_01"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-medium text-base text-left">
                        1h 42min
                      </div>
                    </Button>
                    <Button
                      className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[64px] rounded-[18px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-1"
                          src="images/img_icon_gray_500_24x24.svg"
                          alt="Icon"
                        />
                      }
                      color="gray_900_01"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-medium text-base text-left">5K</div>
                    </Button>
                  </div>
                </div>
              </List>
            </div>
            <div className="flex flex-col gap-[50px] items-start justify-start w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 gap-[100px] items-center justify-start w-full">
                <Text
                  className="flex-1 md:text-4xl sm:text-[34px] text-[38px] text-white-A700 w-auto"
                  size="txtManropeBold38"
                >
                  New Releases
                </Text>
                <div className="bg-black-900 border border-gray-900_02 border-solid flex flex-row gap-4 items-center justify-start p-4 rounded-[12px] w-auto">
                  <Button
                    className="border border-gray-900_02 border-solid flex h-14 items-center justify-center rounded-lg w-14"
                    color="gray_900_03"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-7"
                      src="images/img_arrowleft.svg"
                      alt="arrowleft_Three"
                    />
                  </Button>
                  <PagerIndicator
                    className="flex gap-[3px] h-1 items-start justify-start w-[81px]"
                    count={4}
                    activeCss="inline-block cursor-pointer h-1 bg-red-A700 w-[23px] rounded-sm"
                    activeIndex={1}
                    inactiveCss="inline-block cursor-pointer h-1 bg-blue_gray-900 w-4 rounded-sm"
                    selectedWrapperCss="inline-block"
                    unselectedWrapperCss="inline-block"
                  />
                  <Button
                    className="border border-gray-900_02 border-solid flex h-14 items-center justify-center rounded-lg w-14"
                    color="gray_900_03"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-7"
                      src="images/img_arrowright_white_a700.svg"
                      alt="arrowright_Three"
                    />
                  </Button>
                </div>
              </div>
              <List
                className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-start w-full"
                orientation="horizontal"
              >
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col gap-5 h-[377px] md:h-auto items-start justify-start p-5 rounded-[12px] w-full">
                  <Img
                    className="md:h-auto h-full object-cover rounded-[12px] w-full"
                    src="images/img_image_124.png"
                    alt="image"
                  />
                  <Text
                    className="bg-gray-900_01 border border-gray-900 border-solid justify-center pb-1 pl-[27px] pr-[31px] pt-[9px] sm:px-5 rounded-[18px] text-base text-center text-gray-500 w-full"
                    size="txtManropeMedium16"
                  >
                    <span className="text-gray-500 font-manrope font-medium">
                      Released at{" "}
                    </span>
                    <span className="text-gray-400 font-manrope font-medium">
                      14 April 2023
                    </span>
                  </Text>
                </div>
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col gap-5 h-[377px] md:h-auto items-start justify-start p-5 rounded-[12px] w-full">
                  <Img
                    className="md:h-auto h-full object-cover rounded-[12px] w-full"
                    src="images/img_image_125.png"
                    alt="image"
                  />
                  <Text
                    className="bg-gray-900_01 border border-gray-900 border-solid justify-center pb-1 pl-[25px] pr-[29px] pt-[9px] sm:px-5 rounded-[18px] text-base text-center text-gray-500 w-full"
                    size="txtManropeMedium16"
                  >
                    <span className="text-gray-500 font-manrope font-medium">
                      Released at{" "}
                    </span>
                    <span className="text-gray-400 font-manrope font-medium">
                      22 April 2023
                    </span>
                  </Text>
                </div>
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col gap-5 h-[377px] md:h-auto items-start justify-start p-5 rounded-[12px] w-full">
                  <Img
                    className="md:h-auto h-full object-cover rounded-[12px] w-full"
                    src="images/img_image_126.png"
                    alt="image"
                  />
                  <Text
                    className="bg-gray-900_01 border border-gray-900 border-solid justify-center pb-1 pl-[27px] pr-[31px] pt-[9px] sm:px-5 rounded-[18px] text-base text-center text-gray-500 w-full"
                    size="txtManropeMedium16"
                  >
                    <span className="text-gray-500 font-manrope font-medium">
                      Released at{" "}
                    </span>
                    <span className="text-gray-400 font-manrope font-medium">
                      13 April 2023
                    </span>
                  </Text>
                </div>
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col gap-5 h-[377px] md:h-auto items-start justify-start p-5 rounded-[12px] w-full">
                  <Img
                    className="md:h-auto h-full object-cover rounded-[12px] w-full"
                    src="images/img_image_127.png"
                    alt="image"
                  />
                  <Text
                    className="bg-gray-900_01 border border-gray-900 border-solid justify-center pb-1 pl-[27px] pr-[30px] pt-[9px] sm:px-5 rounded-[18px] text-base text-center text-gray-500 w-full"
                    size="txtManropeMedium16"
                  >
                    <span className="text-gray-500 font-manrope font-medium">
                      Released at{" "}
                    </span>
                    <span className="text-gray-400 font-manrope font-medium">
                      19 April 2023
                    </span>
                  </Text>
                </div>
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col gap-5 h-[377px] md:h-auto items-start justify-start p-5 rounded-[12px] w-full">
                  <Img
                    className="md:h-auto h-full object-cover rounded-[12px] w-full"
                    src="images/img_image_128.png"
                    alt="image"
                  />
                  <Text
                    className="bg-gray-900_01 border border-gray-900 border-solid justify-center pb-1 pl-7 pr-8 pt-[9px] sm:px-5 rounded-[18px] text-base text-center text-gray-500 w-full"
                    size="txtManropeMedium16"
                  >
                    <span className="text-gray-500 font-manrope font-medium">
                      Released at{" "}
                    </span>
                    <span className="text-gray-400 font-manrope font-medium">
                      11 April 2023
                    </span>
                  </Text>
                </div>
              </List>
            </div>
            <div className="flex flex-col gap-[50px] items-start justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[100px] items-center justify-start w-full">
                <Text
                  className="flex-1 md:text-4xl sm:text-[34px] text-[38px] text-white-A700 w-auto"
                  size="txtManropeBold38"
                >
                  Must - Watch Movies
                </Text>
                <div className="bg-black-900 border border-gray-900_02 border-solid flex flex-row gap-4 items-center justify-start p-4 rounded-[12px] w-auto">
                  <Button
                    className="border border-gray-900_02 border-solid flex h-14 items-center justify-center rounded-lg w-14"
                    color="gray_900_03"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-7"
                      src="images/img_arrowleft.svg"
                      alt="arrowleft_Four"
                    />
                  </Button>
                  <PagerIndicator
                    className="flex gap-[3px] h-1 items-start justify-start w-[81px]"
                    count={4}
                    activeCss="inline-block cursor-pointer h-1 bg-red-A700 w-[23px] rounded-sm"
                    activeIndex={1}
                    inactiveCss="inline-block cursor-pointer h-1 bg-blue_gray-900 w-4 rounded-sm"
                    selectedWrapperCss="inline-block"
                    unselectedWrapperCss="inline-block"
                  />
                  <Button
                    className="border border-gray-900_02 border-solid flex h-14 items-center justify-center rounded-lg w-14"
                    color="gray_900_03"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-7"
                      src="images/img_arrowright_white_a700.svg"
                      alt="arrowright_Four"
                    />
                  </Button>
                </div>
              </div>
              <List
                className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start w-full"
                orientation="horizontal"
              >
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col gap-5 h-[500px] md:h-auto items-start justify-start p-5 rounded-[12px] w-full">
                  <Img
                    className="md:h-auto h-full object-cover rounded-[12px] w-full"
                    src="images/img_image_404x319.png"
                    alt="image"
                  />
                  <div className="flex flex-row items-center justify-between w-full">
                    <Button
                      className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[107px] rounded-[18px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-0.5"
                          src="images/img_icon_gray_500.svg"
                          alt="Icon"
                        />
                      }
                      color="gray_900_01"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-medium text-base text-left">
                        1h 57min
                      </div>
                    </Button>
                    <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-row gap-1 items-center justify-start px-2.5 py-1.5 rounded-[16px] w-auto">
                      <div className="flex flex-row gap-0.5 items-start justify-start w-auto">
                        <Img
                          className="h-[18px] w-[18px]"
                          src="images/img_shape.svg"
                          alt="shape"
                        />
                        <Img
                          className="h-[18px] w-[18px]"
                          src="images/img_shape_18x18.svg"
                          alt="shape_One"
                        />
                        <Img
                          className="h-[18px] w-[18px]"
                          src="images/img_shape_1.svg"
                          alt="shape_Two"
                        />
                        <Img
                          className="h-[18px] w-[18px]"
                          src="images/img_shape_2.svg"
                          alt="shape_Three"
                        />
                        <Img
                          className="h-4 w-[17px]"
                          src="images/img_user.svg"
                          alt="user"
                        />
                      </div>
                      <Text
                        className="text-gray-500 text-sm w-auto"
                        size="txtManropeMedium14"
                      >
                        20K
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col gap-5 h-[500px] md:h-auto items-start justify-start p-5 rounded-[12px] w-full">
                  <Img
                    className="md:h-auto h-full object-cover rounded-[12px] w-full"
                    src="images/img_image_129.png"
                    alt="image"
                  />
                  <div className="flex flex-row items-center justify-between w-full">
                    <Button
                      className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[100px] rounded-[18px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-0.5"
                          src="images/img_icon_gray_500.svg"
                          alt="Icon"
                        />
                      }
                      color="gray_900_01"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-medium text-left text-sm">
                        1h 30min
                      </div>
                    </Button>
                    <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-row gap-1 items-center justify-start px-2.5 py-1.5 rounded-[16px] w-auto">
                      <div className="flex flex-row items-start justify-start w-auto">
                        <RatingBar
                          className="flex justify-between w-[98px]"
                          value={4}
                          starCount={5}
                          color="#999999"
                          activeColor="#e50000"
                          size={18}
                        ></RatingBar>
                      </div>
                      <Text
                        className="text-gray-500 text-sm w-auto"
                        size="txtManropeMedium14"
                      >
                        20K
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col gap-5 h-[500px] md:h-auto items-start justify-start p-5 rounded-[12px] w-full">
                  <Img
                    className="md:h-auto h-full object-cover rounded-[12px] w-full"
                    src="images/img_image_130.png"
                    alt="image"
                  />
                  <div className="flex flex-row items-center justify-between w-full">
                    <Button
                      className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[108px] rounded-[18px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-0.5"
                          src="images/img_icon_gray_500.svg"
                          alt="Icon"
                        />
                      }
                      color="gray_900_01"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-medium text-base text-left">
                        1h 42min
                      </div>
                    </Button>
                    <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-row gap-1 items-center justify-start px-2.5 py-1.5 rounded-[16px] w-auto">
                      <div className="flex flex-row gap-0.5 items-start justify-start w-auto">
                        <Img
                          className="h-[18px] w-[18px]"
                          src="images/img_shape_3.svg"
                          alt="shape"
                        />
                        <Img
                          className="h-[18px] w-[18px]"
                          src="images/img_shape_4.svg"
                          alt="shape_One"
                        />
                        <Img
                          className="h-[18px] w-[18px]"
                          src="images/img_shape_5.svg"
                          alt="shape_Two"
                        />
                        <Img
                          className="h-[18px] w-[18px]"
                          src="images/img_shape_6.svg"
                          alt="shape_Three"
                        />
                        <Img
                          className="h-4 w-[17px]"
                          src="images/img_user.svg"
                          alt="user"
                        />
                      </div>
                      <Text
                        className="text-gray-500 text-sm w-auto"
                        size="txtManropeMedium14"
                      >
                        20K
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col gap-5 h-[500px] md:h-auto items-start justify-start p-5 rounded-[12px] w-full">
                  <Img
                    className="md:h-auto h-full object-cover rounded-[12px] w-full"
                    src="images/img_image_124.png"
                    alt="image"
                  />
                  <div className="flex flex-row items-center justify-between w-full">
                    <Button
                      className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[109px] rounded-[18px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-0.5"
                          src="images/img_icon_gray_500.svg"
                          alt="Icon"
                        />
                      }
                      color="gray_900_01"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-medium text-base text-left">
                        2h 10min
                      </div>
                    </Button>
                    <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-row gap-1 items-center justify-start px-2.5 py-1.5 rounded-[16px] w-auto">
                      <div className="flex flex-row items-start justify-start w-auto">
                        <RatingBar
                          className="flex justify-between w-[98px]"
                          value={4}
                          starCount={5}
                          color="#999999"
                          activeColor="#e50000"
                          size={18}
                        ></RatingBar>
                      </div>
                      <Text
                        className="text-gray-500 text-sm w-auto"
                        size="txtManropeMedium14"
                      >
                        20K
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
        <div className="flex flex-col max-w-[1597px] mt-[150px] mx-auto md:px-5 relative w-full">
          <Slider
            autoPlay
            autoPlayInterval={2000}
            activeIndex={sliderState2}
            responsive={{
              0: { items: 1 },
              550: { items: 1 },
              1050: { items: 1 },
            }}
            onSlideChanged={(e) => {
              setsliderState2(e?.item);
            }}
            ref={sliderRef2}
            className="mx-auto w-full"
            items={[...Array(4)].map(() => (
              <React.Fragment key={Math.random()}>
                <div className="flex flex-col items-start justify-start max-w-[1597px] mx-2.5 md:px-10 sm:px-5 px-[50px]">
                  <Button
                    className="cursor-pointer font-semibold min-w-[112px] rounded-lg text-center text-xl"
                    color="red_A700"
                    size="sm"
                    variant="fill"
                  >
                    Shows
                  </Button>
                </div>
              </React.Fragment>
            ))}
            renderDotsItem={({ isActive }) => {
              if (isActive) {
                return (
                  <div className="inline-block cursor-pointer h-1 bg-red-A700 w-[23px] rounded-sm" />
                );
              }
              return (
                <div
                  className="inline-block cursor-pointer h-1 bg-blue_gray-900 w-4 rounded-sm"
                  role="button"
                  tabIndex={0}
                />
              );
            }}
          />
          <div className="border border-gray-900 border-solid flex flex-col md:gap-10 gap-[100px] items-center justify-start mb-auto mt-[-30px] mx-auto p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full z-[1]">
            <div className="flex flex-col gap-[50px] items-start justify-start w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 gap-[100px] items-center justify-start w-full">
                <Text
                  className="flex-1 md:text-4xl sm:text-[34px] text-[38px] text-white-A700 w-auto"
                  size="txtManropeBold38"
                >
                  Our Genres
                </Text>
                <div className="bg-black-900 border border-gray-900_02 border-solid flex flex-row gap-4 items-center justify-start p-4 rounded-[12px] w-auto">
                  <Button
                    className="border border-gray-900_02 border-solid flex h-14 items-center justify-center rounded-lg w-14"
                    color="gray_900_03"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-7"
                      src="images/img_arrowleft.svg"
                      alt="arrowleft_Five"
                    />
                  </Button>
                  <PagerIndicator
                    className="flex gap-[3px] h-1 items-start justify-start w-[81px]"
                    count={4}
                    activeCss="inline-block cursor-pointer h-1 bg-red-A700 w-[23px] rounded-sm"
                    activeIndex={sliderState2}
                    inactiveCss="inline-block cursor-pointer h-1 bg-blue_gray-900 w-4 rounded-sm"
                    sliderRef={sliderRef2}
                    selectedWrapperCss="inline-block"
                    unselectedWrapperCss="inline-block"
                  />
                  <Button
                    className="border border-gray-900_02 border-solid flex h-14 items-center justify-center rounded-lg w-14"
                    color="gray_900_03"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-7"
                      src="images/img_arrowright_white_a700.svg"
                      alt="arrowright_Five"
                    />
                  </Button>
                </div>
              </div>
              <List
                className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-start w-full"
                orientation="horizontal"
              >
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col items-start justify-start p-[30px] sm:px-5 rounded-[12px] w-full">
                  <div className="h-[252px] md:h-auto relative w-full">
                    <div className="flex flex-1 flex-row gap-[5px] h-full items-center justify-evenly mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[123px] sm:h-auto h-full max-h-[123px] object-cover rounded-[10px]"
                        src="images/img_image_123x115.png"
                        alt="image"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[123px] sm:h-auto h-full max-h-[123px] object-cover rounded-[10px]"
                        src="images/img_image_35.png"
                        alt="image_One"
                      />
                    </div>
                    <div className="flex flex-1 flex-row gap-[5px] h-full items-center justify-evenly mt-auto mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[123px] sm:h-auto h-full max-h-[123px] object-cover rounded-[10px]"
                        src="images/img_image_36.png"
                        alt="image_Two"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[123px] sm:h-auto h-full max-h-[123px] object-cover rounded-[10px]"
                        src="images/img_image_37.png"
                        alt="image_Three"
                      />
                    </div>
                    <div className="absolute bg-gradient3  h-[252px] inset-[0] justify-center m-auto w-full"></div>
                  </div>
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="flex-1 text-lg text-white-A700 w-auto"
                      size="txtManropeSemiBold18"
                    >
                      Action
                    </Text>
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_arrowleft.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col items-start justify-start p-[30px] sm:px-5 rounded-[12px] w-full">
                  <div className="h-[252px] md:h-auto relative w-full">
                    <div className="flex flex-1 flex-row gap-[5px] h-full items-center justify-evenly mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[123px] sm:h-auto h-full max-h-[123px] object-cover rounded-[10px]"
                        src="images/img_image_38.png"
                        alt="image"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[123px] sm:h-auto h-full max-h-[123px] object-cover rounded-[10px]"
                        src="images/img_image_39.png"
                        alt="image_One"
                      />
                    </div>
                    <div className="flex flex-1 flex-row gap-[5px] h-full items-center justify-evenly mt-auto mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[123px] sm:h-auto h-full max-h-[123px] object-cover rounded-[10px]"
                        src="images/img_image_40.png"
                        alt="image_Two"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[123px] sm:h-auto h-full max-h-[123px] object-cover rounded-[10px]"
                        src="images/img_image_41.png"
                        alt="image_Three"
                      />
                    </div>
                    <div className="absolute bg-gradient3  h-[252px] inset-[0] justify-center m-auto w-full"></div>
                  </div>
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="flex-1 text-lg text-white-A700 w-auto"
                      size="txtManropeSemiBold18"
                    >
                      Adventure
                    </Text>
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_arrowleft.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col items-start justify-start p-[30px] sm:px-5 rounded-[12px] w-full">
                  <div className="h-[252px] md:h-auto relative w-full">
                    <div className="flex flex-1 flex-row gap-[5px] h-full items-center justify-evenly mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[123px] sm:h-auto h-full max-h-[123px] object-cover rounded-[10px]"
                        src="images/img_image_42.png"
                        alt="image"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[123px] sm:h-auto h-full max-h-[123px] object-cover rounded-[10px]"
                        src="images/img_image_43.png"
                        alt="image_One"
                      />
                    </div>
                    <div className="flex flex-1 flex-row gap-[5px] h-full items-center justify-evenly mt-auto mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[123px] sm:h-auto h-full max-h-[123px] object-cover rounded-[10px]"
                        src="images/img_image_44.png"
                        alt="image_Two"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[123px] sm:h-auto h-full max-h-[123px] object-cover rounded-[10px]"
                        src="images/img_image_45.png"
                        alt="image_Three"
                      />
                    </div>
                    <div className="absolute bg-gradient3  h-[252px] inset-[0] justify-center m-auto w-full"></div>
                  </div>
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="flex-1 text-lg text-white-A700 w-auto"
                      size="txtManropeSemiBold18"
                    >
                      Comedy
                    </Text>
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_arrowleft.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col items-start justify-start p-[30px] sm:px-5 rounded-[12px] w-full">
                  <div className="h-[252px] md:h-auto relative w-full">
                    <div className="flex flex-1 flex-row gap-[5px] h-full items-center justify-between mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[123px] sm:h-auto h-full max-h-[123px] object-cover rounded-[10px]"
                        src="images/img_image_46.png"
                        alt="image"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[123px] sm:h-auto h-full max-h-[123px] object-cover rounded-[10px]"
                        src="images/img_image_47.png"
                        alt="image_One"
                      />
                    </div>
                    <div className="flex flex-1 flex-row gap-[5px] h-full items-center justify-between mt-auto mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[123px] sm:h-auto h-full max-h-[123px] object-cover rounded-[10px]"
                        src="images/img_image_48.png"
                        alt="image_Two"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[123px] sm:h-auto h-full max-h-[123px] object-cover rounded-[10px]"
                        src="images/img_image_49.png"
                        alt="image_Three"
                      />
                    </div>
                    <div className="absolute bg-gradient3  h-[252px] inset-[0] justify-center m-auto w-full"></div>
                  </div>
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="flex-1 text-lg text-white-A700 w-auto"
                      size="txtManropeSemiBold18"
                    >
                      Drama
                    </Text>
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_arrowleft.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col items-start justify-start p-[30px] sm:px-5 rounded-[12px] w-full">
                  <div className="h-[252px] md:h-auto relative w-full">
                    <div className="flex flex-1 flex-row gap-[5px] h-full items-center justify-between mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[123px] sm:h-auto h-full max-h-[123px] object-cover rounded-[10px]"
                        src="images/img_image_50.png"
                        alt="image"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[123px] sm:h-auto h-full max-h-[123px] object-cover rounded-[10px]"
                        src="images/img_image_51.png"
                        alt="image_One"
                      />
                    </div>
                    <div className="flex flex-1 flex-row gap-[5px] h-full items-center justify-between mt-auto mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[123px] sm:h-auto h-full max-h-[123px] object-cover rounded-[10px]"
                        src="images/img_image_52.png"
                        alt="image_Two"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[123px] sm:h-auto h-full max-h-[123px] object-cover rounded-[10px]"
                        src="images/img_image_53.png"
                        alt="image_Three"
                      />
                    </div>
                    <div className="absolute bg-gradient3  h-[252px] inset-[0] justify-center m-auto w-full"></div>
                  </div>
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="flex-1 text-lg text-white-A700 w-auto"
                      size="txtManropeSemiBold18"
                    >
                      Horror
                    </Text>
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_arrowleft.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
              </List>
            </div>
            <div className="flex flex-col gap-[50px] items-start justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[100px] items-center justify-start w-full">
                <Text
                  className="flex-1 md:text-4xl sm:text-[34px] text-[38px] text-white-A700 w-auto"
                  size="txtManropeBold38"
                >
                  Popular Top 10 In Genres
                </Text>
                <div className="bg-black-900 border border-gray-900_02 border-solid flex flex-row gap-4 items-center justify-start p-4 rounded-[12px] w-auto">
                  <Button
                    className="border border-gray-900_02 border-solid flex h-14 items-center justify-center rounded-lg w-14"
                    color="gray_900_03"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-7"
                      src="images/img_arrowleft.svg"
                      alt="arrowleft_Six"
                    />
                  </Button>
                  <PagerIndicator
                    className="flex gap-[3px] h-1 items-start justify-start w-[81px]"
                    count={4}
                    activeCss="inline-block cursor-pointer h-1 bg-red-A700 w-[23px] rounded-sm"
                    activeIndex={1}
                    inactiveCss="inline-block cursor-pointer h-1 bg-blue_gray-900 w-4 rounded-sm"
                    selectedWrapperCss="inline-block"
                    unselectedWrapperCss="inline-block"
                  />
                  <Button
                    className="border border-gray-900_02 border-solid flex h-14 items-center justify-center rounded-lg w-14"
                    color="gray_900_03"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-7"
                      src="images/img_arrowright_white_a700.svg"
                      alt="arrowright_Six"
                    />
                  </Button>
                </div>
              </div>
              <List
                className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start w-full"
                orientation="horizontal"
              >
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col h-[378px] md:h-auto items-end justify-start p-[30px] sm:px-5 rounded-[12px] w-full">
                  <div className="h-full relative w-full">
                    <div className="flex flex-col items-center justify-start m-auto w-full">
                      <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                        <div className="flex flex-row gap-2.5 h-full items-start justify-start w-full">
                          <Img
                            className="flex-1 md:flex-none md:h-[121px] sm:h-auto h-full max-h-[121px] object-cover rounded"
                            src="images/img_image_121x140.png"
                            alt="image"
                          />
                          <Img
                            className="flex-1 md:flex-none md:h-[121px] sm:h-auto h-full max-h-[121px] object-cover rounded"
                            src="images/img_image_131.png"
                            alt="image_One"
                          />
                        </div>
                        <div className="flex flex-row gap-2.5 h-full items-start justify-start w-full">
                          <Img
                            className="flex-1 md:flex-none md:h-[121px] sm:h-auto h-full max-h-[121px] object-cover rounded"
                            src="images/img_image_132.png"
                            alt="image_Two"
                          />
                          <Img
                            className="flex-1 md:flex-none md:h-[121px] sm:h-auto h-full max-h-[121px] object-cover rounded"
                            src="images/img_image_133.png"
                            alt="image_Three"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bg-gradient3  h-[252px] inset-[0] justify-center m-auto w-full"></div>
                  </div>
                  <div className="flex flex-row gap-5 items-center justify-start w-full">
                    <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                      <Text
                        className="bg-red-A700 justify-center pb-0.5 pt-[7px] px-2.5 rounded-[5px] text-base text-white-A700 w-auto"
                        size="txtManropeSemiBold16"
                      >
                        Top 10 In
                      </Text>
                      <Text
                        className="text-white-A700 text-xl w-full"
                        size="txtManropeSemiBold20"
                      >
                        Action
                      </Text>
                    </div>
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_arrowleft.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col h-[378px] md:h-auto items-end justify-start p-[30px] sm:px-5 rounded-[12px] w-full">
                  <div className="bg-gradient3  h-full relative w-full">
                    <div className="flex flex-1 flex-row gap-2.5 h-full items-center justify-between mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[121px] sm:h-auto h-full max-h-[121px] object-cover rounded"
                        src="images/img_image_108.png"
                        alt="image"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[121px] sm:h-auto h-full max-h-[121px] object-cover rounded"
                        src="images/img_image_109.png"
                        alt="image_One"
                      />
                    </div>
                    <div className="flex flex-1 flex-row gap-2.5 h-full items-center justify-between mt-auto mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[121px] sm:h-auto h-full max-h-[121px] object-cover rounded"
                        src="images/img_image_110.png"
                        alt="image_Two"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[121px] sm:h-auto h-full max-h-[121px] object-cover rounded"
                        src="images/img_image_111.png"
                        alt="image_Three"
                      />
                    </div>
                    <div className="absolute bg-gradient3  h-[252px] inset-[0] justify-center m-auto w-full"></div>
                  </div>
                  <div className="flex flex-row gap-5 items-center justify-start w-full">
                    <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                      <Text
                        className="bg-red-A700 justify-center pb-0.5 pt-[7px] px-2.5 rounded-[5px] text-base text-white-A700 w-auto"
                        size="txtManropeSemiBold16"
                      >
                        Top 10 In
                      </Text>
                      <Text
                        className="text-white-A700 text-xl w-full"
                        size="txtManropeSemiBold20"
                      >
                        Adventure
                      </Text>
                    </div>
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_arrowleft.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col h-[378px] md:h-auto items-end justify-start p-[30px] sm:px-5 rounded-[12px] w-full">
                  <div className="h-full relative w-full">
                    <div className="flex flex-col items-center justify-start m-auto w-full">
                      <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                        <div className="flex flex-row gap-2.5 h-full items-start justify-start w-full">
                          <Img
                            className="flex-1 md:flex-none md:h-[121px] sm:h-auto h-full max-h-[121px] object-cover rounded"
                            src="images/img_image_112.png"
                            alt="image"
                          />
                          <Img
                            className="flex-1 md:flex-none md:h-[121px] sm:h-auto h-full max-h-[121px] object-cover rounded"
                            src="images/img_image_113.png"
                            alt="image_One"
                          />
                        </div>
                        <div className="flex flex-row gap-2.5 h-full items-start justify-start w-full">
                          <Img
                            className="flex-1 md:flex-none md:h-[121px] sm:h-auto h-full max-h-[121px] object-cover rounded"
                            src="images/img_image_114.png"
                            alt="image_Two"
                          />
                          <Img
                            className="flex-1 md:flex-none md:h-[121px] sm:h-auto h-full max-h-[121px] object-cover rounded"
                            src="images/img_image_115.png"
                            alt="image_Three"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bg-gradient3  h-[252px] inset-[0] justify-center m-auto w-full"></div>
                  </div>
                  <div className="flex flex-row gap-5 items-center justify-start w-full">
                    <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                      <Text
                        className="bg-red-A700 justify-center pb-0.5 pt-[7px] px-2.5 rounded-[5px] text-base text-white-A700 w-auto"
                        size="txtManropeSemiBold16"
                      >
                        Top 10 In
                      </Text>
                      <Text
                        className="text-white-A700 text-xl w-full"
                        size="txtManropeSemiBold20"
                      >
                        Comedy
                      </Text>
                    </div>
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_arrowleft.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col h-[378px] md:h-auto items-end justify-start p-[30px] sm:px-5 rounded-[12px] w-full">
                  <div className="bg-gradient3  h-full relative w-full">
                    <div className="flex flex-1 flex-row gap-2.5 h-full items-center justify-between mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[121px] sm:h-auto h-full max-h-[121px] object-cover rounded"
                        src="images/img_image_116.png"
                        alt="image"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[121px] sm:h-auto h-full max-h-[121px] object-cover rounded"
                        src="images/img_image_117.png"
                        alt="image_One"
                      />
                    </div>
                    <div className="flex flex-1 flex-row gap-2.5 h-full items-center justify-between mt-auto mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[121px] sm:h-auto h-full max-h-[121px] object-cover rounded"
                        src="images/img_image_118.png"
                        alt="image_Two"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[121px] sm:h-auto h-full max-h-[121px] object-cover rounded"
                        src="images/img_image_119.png"
                        alt="image_Three"
                      />
                    </div>
                    <div className="absolute bg-gradient3  h-[252px] inset-[0] justify-center m-auto w-full"></div>
                  </div>
                  <div className="flex flex-row gap-5 items-center justify-start w-full">
                    <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                      <Text
                        className="bg-red-A700 justify-center pb-0.5 pt-[7px] px-2.5 rounded-[5px] text-base text-white-A700 w-auto"
                        size="txtManropeSemiBold16"
                      >
                        Top 10 In
                      </Text>
                      <Text
                        className="text-white-A700 text-xl w-full"
                        size="txtManropeSemiBold20"
                      >
                        Drama
                      </Text>
                    </div>
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_arrowleft.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
              </List>
            </div>
            <List
              className="flex flex-col gap-[100px] items-center w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 flex-col gap-[50px] items-start justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-10 gap-[100px] items-center justify-start w-full">
                  <Text
                    className="flex-1 md:text-4xl sm:text-[34px] text-[38px] text-white-A700 w-auto"
                    size="txtManropeBold38"
                  >
                    Trending Shows Now
                  </Text>
                  <div className="bg-black-900 border border-gray-900_02 border-solid flex flex-row gap-4 items-center justify-start p-4 rounded-[12px] w-auto">
                    <Button
                      className="border border-gray-900_02 border-solid flex h-14 items-center justify-center rounded-lg w-14"
                      color="gray_900_03"
                      size="md"
                      variant="fill"
                    >
                      <Img
                        className="h-7"
                        src="images/img_arrowleft.svg"
                        alt="arrowleft"
                      />
                    </Button>
                    <PagerIndicator
                      className="flex gap-[3px] h-1 items-start justify-start w-[81px]"
                      count={4}
                      activeCss="inline-block cursor-pointer h-1 bg-red-A700 w-[23px] rounded-sm"
                      activeIndex={1}
                      inactiveCss="inline-block cursor-pointer h-1 bg-blue_gray-900 w-4 rounded-sm"
                      selectedWrapperCss="inline-block"
                      unselectedWrapperCss="inline-block"
                    />
                    <Button
                      className="border border-gray-900_02 border-solid flex h-14 items-center justify-center rounded-lg w-14"
                      color="gray_900_03"
                      size="md"
                      variant="fill"
                    >
                      <Img
                        className="h-7"
                        src="images/img_arrowright_white_a700.svg"
                        alt="arrowright"
                      />
                    </Button>
                  </div>
                </div>
                <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-start justify-start w-full">
                  <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col gap-5 h-[444px] md:h-auto items-start justify-start p-5 rounded-[12px] w-full">
                    <Img
                      className="md:h-auto h-full object-cover rounded-[12px] w-full"
                      src="images/img_image_348x319.png"
                      alt="image"
                    />
                    <div className="flex flex-row items-start justify-between w-full">
                      <Button
                        className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[112px] rounded-[18px]"
                        leftIcon={
                          <Img
                            className="h-6 mr-0.5"
                            src="images/img_icon_gray_500.svg"
                            alt="Icon"
                          />
                        }
                        color="gray_900_01"
                        size="xs"
                        variant="fill"
                      >
                        <div className="font-medium text-base text-left">
                          8h 20min
                        </div>
                      </Button>
                      <Button
                        className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[113px] rounded-[18px]"
                        leftIcon={
                          <Img
                            className="h-6 mr-1"
                            src="images/img_icon_24x24.svg"
                            alt="Icon"
                          />
                        }
                        color="gray_900_01"
                        size="xs"
                        variant="fill"
                      >
                        <div className="font-medium text-base text-left">
                          4 Season
                        </div>
                      </Button>
                    </div>
                  </div>
                  <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col gap-5 h-[444px] md:h-auto items-start justify-start p-5 rounded-[12px] w-full">
                    <Img
                      className="md:h-auto h-full object-cover rounded-[12px] w-full"
                      src="images/img_image_134.png"
                      alt="image_One"
                    />
                    <div className="flex flex-row items-start justify-between w-full">
                      <Button
                        className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[117px] rounded-[18px]"
                        leftIcon={
                          <Img
                            className="h-6 mr-0.5"
                            src="images/img_icon_gray_500.svg"
                            alt="Icon"
                          />
                        }
                        color="gray_900_01"
                        size="xs"
                        variant="fill"
                      >
                        <div className="font-medium text-base text-left">
                          12h 23min
                        </div>
                      </Button>
                      <Button
                        className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[113px] rounded-[18px]"
                        leftIcon={
                          <Img
                            className="h-6 mr-1"
                            src="images/img_icon_24x24.svg"
                            alt="Icon"
                          />
                        }
                        color="gray_900_01"
                        size="xs"
                        variant="fill"
                      >
                        <div className="font-medium text-base text-left">
                          5 Season
                        </div>
                      </Button>
                    </div>
                  </div>
                  <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col gap-5 h-[444px] md:h-auto items-start justify-start p-5 rounded-[12px] w-full">
                    <Img
                      className="md:h-auto h-full object-cover rounded-[12px] w-full"
                      src="images/img_image_135.png"
                      alt="image_Two"
                    />
                    <div className="flex flex-row items-start justify-between w-full">
                      <Button
                        className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[118px] rounded-[18px]"
                        leftIcon={
                          <Img
                            className="h-6 mr-0.5"
                            src="images/img_icon_gray_500.svg"
                            alt="Icon"
                          />
                        }
                        color="gray_900_01"
                        size="xs"
                        variant="fill"
                      >
                        <div className="font-medium text-base text-left">
                          14h 30min
                        </div>
                      </Button>
                      <Button
                        className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[113px] rounded-[18px]"
                        leftIcon={
                          <Img
                            className="h-6 mr-1"
                            src="images/img_icon_24x24.svg"
                            alt="Icon"
                          />
                        }
                        color="gray_900_01"
                        size="xs"
                        variant="fill"
                      >
                        <div className="font-medium text-base text-left">
                          3 Season
                        </div>
                      </Button>
                    </div>
                  </div>
                  <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col gap-5 h-[444px] md:h-auto items-start justify-start p-5 rounded-[12px] w-full">
                    <Img
                      className="md:h-auto h-full object-cover rounded-[12px] w-full"
                      src="images/img_image_14.png"
                      alt="image_Three"
                    />
                    <div className="flex flex-row items-start justify-between w-full">
                      <Button
                        className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[111px] rounded-[18px]"
                        leftIcon={
                          <Img
                            className="h-6 mr-0.5"
                            src="images/img_icon_gray_500.svg"
                            alt="Icon"
                          />
                        }
                        color="gray_900_01"
                        size="xs"
                        variant="fill"
                      >
                        <div className="font-medium text-base text-left">
                          7h 40min
                        </div>
                      </Button>
                      <Button
                        className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[113px] rounded-[18px]"
                        leftIcon={
                          <Img
                            className="h-6 mr-1"
                            src="images/img_icon_24x24.svg"
                            alt="Icon"
                          />
                        }
                        color="gray_900_01"
                        size="xs"
                        variant="fill"
                      >
                        <div className="font-medium text-base text-left">
                          2 Season
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[50px] items-start justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-10 gap-[100px] items-center justify-start w-full">
                  <Text
                    className="flex-1 md:text-4xl sm:text-[34px] text-[38px] text-white-A700 w-auto"
                    size="txtManropeBold38"
                  >
                    New Released Shows
                  </Text>
                  <div className="bg-black-900 border border-gray-900_02 border-solid flex flex-row gap-4 items-center justify-start p-4 rounded-[12px] w-auto">
                    <Button
                      className="border border-gray-900_02 border-solid flex h-14 items-center justify-center rounded-lg w-14"
                      color="gray_900_03"
                      size="md"
                      variant="fill"
                    >
                      <Img
                        className="h-7"
                        src="images/img_arrowleft.svg"
                        alt="arrowleft"
                      />
                    </Button>
                    <PagerIndicator
                      className="flex gap-[3px] h-1 items-start justify-start w-[81px]"
                      count={4}
                      activeCss="inline-block cursor-pointer h-1 bg-red-A700 w-[23px] rounded-sm"
                      activeIndex={1}
                      inactiveCss="inline-block cursor-pointer h-1 bg-blue_gray-900 w-4 rounded-sm"
                      selectedWrapperCss="inline-block"
                      unselectedWrapperCss="inline-block"
                    />
                    <Button
                      className="border border-gray-900_02 border-solid flex h-14 items-center justify-center rounded-lg w-14"
                      color="gray_900_03"
                      size="md"
                      variant="fill"
                    >
                      <Img
                        className="h-7"
                        src="images/img_arrowright_white_a700.svg"
                        alt="arrowright"
                      />
                    </Button>
                  </div>
                </div>
                <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-start justify-start w-full">
                  <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col gap-5 h-[444px] md:h-auto items-start justify-start p-5 rounded-[12px] w-full">
                    <Img
                      className="md:h-auto h-full object-cover rounded-[12px] w-full"
                      src="images/img_image_136.png"
                      alt="image"
                    />
                    <div className="flex flex-row items-start justify-between w-full">
                      <Button
                        className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[117px] rounded-[18px]"
                        leftIcon={
                          <Img
                            className="h-6 mr-0.5"
                            src="images/img_icon_gray_500.svg"
                            alt="Icon"
                          />
                        }
                        color="gray_900_01"
                        size="xs"
                        variant="fill"
                      >
                        <div className="font-medium text-base text-left">
                          12h 23min
                        </div>
                      </Button>
                      <Button
                        className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[113px] rounded-[18px]"
                        leftIcon={
                          <Img
                            className="h-6 mr-1"
                            src="images/img_icon_24x24.svg"
                            alt="Icon"
                          />
                        }
                        color="gray_900_01"
                        size="xs"
                        variant="fill"
                      >
                        <div className="font-medium text-base text-left">
                          5 Season
                        </div>
                      </Button>
                    </div>
                  </div>
                  <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col gap-5 h-[444px] md:h-auto items-start justify-start p-5 rounded-[12px] w-full">
                    <Img
                      className="md:h-auto h-full object-cover rounded-[12px] w-full"
                      src="images/img_image_137.png"
                      alt="image_One"
                    />
                    <div className="flex flex-row items-start justify-between w-full">
                      <Button
                        className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[111px] rounded-[18px]"
                        leftIcon={
                          <Img
                            className="h-6 mr-0.5"
                            src="images/img_icon_gray_500.svg"
                            alt="Icon"
                          />
                        }
                        color="gray_900_01"
                        size="xs"
                        variant="fill"
                      >
                        <div className="font-medium text-base text-left">
                          7h 40min
                        </div>
                      </Button>
                      <Button
                        className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[113px] rounded-[18px]"
                        leftIcon={
                          <Img
                            className="h-6 mr-1"
                            src="images/img_icon_24x24.svg"
                            alt="Icon"
                          />
                        }
                        color="gray_900_01"
                        size="xs"
                        variant="fill"
                      >
                        <div className="font-medium text-base text-left">
                          2 Season
                        </div>
                      </Button>
                    </div>
                  </div>
                  <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col gap-5 h-[444px] md:h-auto items-start justify-start p-5 rounded-[12px] w-full">
                    <Img
                      className="md:h-auto h-full object-cover rounded-[12px] w-full"
                      src="images/img_image_138.png"
                      alt="image_Two"
                    />
                    <div className="flex flex-row items-start justify-between w-full">
                      <Button
                        className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[112px] rounded-[18px]"
                        leftIcon={
                          <Img
                            className="h-6 mr-0.5"
                            src="images/img_icon_gray_500.svg"
                            alt="Icon"
                          />
                        }
                        color="gray_900_01"
                        size="xs"
                        variant="fill"
                      >
                        <div className="font-medium text-base text-left">
                          8h 20min
                        </div>
                      </Button>
                      <Button
                        className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[113px] rounded-[18px]"
                        leftIcon={
                          <Img
                            className="h-6 mr-1"
                            src="images/img_icon_24x24.svg"
                            alt="Icon"
                          />
                        }
                        color="gray_900_01"
                        size="xs"
                        variant="fill"
                      >
                        <div className="font-medium text-base text-left">
                          4 Season
                        </div>
                      </Button>
                    </div>
                  </div>
                  <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col gap-5 h-[444px] md:h-auto items-start justify-start p-5 rounded-[12px] w-full">
                    <Img
                      className="md:h-auto h-full object-cover rounded-[12px] w-full"
                      src="images/img_image_139.png"
                      alt="image_Three"
                    />
                    <div className="flex flex-row items-start justify-between w-full">
                      <Button
                        className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[118px] rounded-[18px]"
                        leftIcon={
                          <Img
                            className="h-6 mr-0.5"
                            src="images/img_icon_gray_500.svg"
                            alt="Icon"
                          />
                        }
                        color="gray_900_01"
                        size="xs"
                        variant="fill"
                      >
                        <div className="font-medium text-base text-left">
                          10h 30min
                        </div>
                      </Button>
                      <Button
                        className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[113px] rounded-[18px]"
                        leftIcon={
                          <Img
                            className="h-6 mr-1"
                            src="images/img_icon_24x24.svg"
                            alt="Icon"
                          />
                        }
                        color="gray_900_01"
                        size="xs"
                        variant="fill"
                      >
                        <div className="font-medium text-base text-left">
                          3 Season
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </List>
            <div className="flex flex-col gap-[50px] items-start justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[100px] items-center justify-start w-full">
                <Text
                  className="flex-1 md:text-4xl sm:text-[34px] text-[38px] text-white-A700 w-auto"
                  size="txtManropeBold38"
                >
                  Must - Watch Shows
                </Text>
                <div className="bg-black-900 border border-gray-900_02 border-solid flex flex-row gap-4 items-center justify-start p-4 rounded-[12px] w-auto">
                  <Button
                    className="border border-gray-900_02 border-solid flex h-14 items-center justify-center rounded-lg w-14"
                    color="gray_900_03"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-7"
                      src="images/img_arrowleft.svg"
                      alt="arrowleft_Seven"
                    />
                  </Button>
                  <PagerIndicator
                    className="flex gap-[3px] h-1 items-start justify-start w-[81px]"
                    count={4}
                    activeCss="inline-block cursor-pointer h-1 bg-red-A700 w-[23px] rounded-sm"
                    activeIndex={1}
                    inactiveCss="inline-block cursor-pointer h-1 bg-blue_gray-900 w-4 rounded-sm"
                    selectedWrapperCss="inline-block"
                    unselectedWrapperCss="inline-block"
                  />
                  <Button
                    className="border border-gray-900_02 border-solid flex h-14 items-center justify-center rounded-lg w-14"
                    color="gray_900_03"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-7"
                      src="images/img_arrowright_white_a700.svg"
                      alt="arrowright_Seven"
                    />
                  </Button>
                </div>
              </div>
              <List
                className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start w-full"
                orientation="horizontal"
              >
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col gap-5 h-[500px] md:h-auto items-start justify-start p-5 rounded-[12px] w-full">
                  <Img
                    className="md:h-auto h-full object-cover rounded-[12px] w-full"
                    src="images/img_image_140.png"
                    alt="image"
                  />
                  <div className="flex flex-row items-center justify-between w-full">
                    <Button
                      className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[111px] rounded-[18px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-0.5"
                          src="images/img_icon_gray_500.svg"
                          alt="Icon"
                        />
                      }
                      color="gray_900_01"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-medium text-base text-left">
                        7h 40min
                      </div>
                    </Button>
                    <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-row gap-1 items-center justify-start px-2.5 py-1.5 rounded-[16px] w-auto">
                      <div className="flex flex-row gap-0.5 items-start justify-start w-auto">
                        <Img
                          className="h-[18px] w-[18px]"
                          src="images/img_shape_7.svg"
                          alt="shape"
                        />
                        <Img
                          className="h-[18px] w-[18px]"
                          src="images/img_shape_8.svg"
                          alt="shape_One"
                        />
                        <Img
                          className="h-[18px] w-[18px]"
                          src="images/img_shape_9.svg"
                          alt="shape_Two"
                        />
                        <Img
                          className="h-[18px] w-[18px]"
                          src="images/img_shape_10.svg"
                          alt="shape_Three"
                        />
                        <Img
                          className="h-4 w-[17px]"
                          src="images/img_user.svg"
                          alt="user"
                        />
                      </div>
                      <Text
                        className="text-gray-500 text-sm w-auto"
                        size="txtManropeMedium14"
                      >
                        12K
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col gap-5 h-[500px] md:h-auto items-start justify-start p-5 rounded-[12px] w-full">
                  <Img
                    className="md:h-auto h-full object-cover rounded-[12px] w-full"
                    src="images/img_image_141.png"
                    alt="image"
                  />
                  <div className="flex flex-row items-center justify-between w-full">
                    <Button
                      className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[117px] rounded-[18px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-0.5"
                          src="images/img_icon_gray_500.svg"
                          alt="Icon"
                        />
                      }
                      color="gray_900_01"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-medium text-base text-left">
                        12h 23min
                      </div>
                    </Button>
                    <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-row gap-1 items-center justify-start px-2.5 py-1.5 rounded-[16px] w-auto">
                      <div className="flex flex-row items-start justify-start w-auto">
                        <RatingBar
                          className="flex justify-between w-[98px]"
                          value={5}
                          starCount={5}
                          activeColor="#e50000"
                          size={18}
                        ></RatingBar>
                      </div>
                      <Text
                        className="text-gray-500 text-sm w-auto"
                        size="txtManropeMedium14"
                      >
                        28K
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col gap-5 h-[500px] md:h-auto items-start justify-start p-5 rounded-[12px] w-full">
                  <Img
                    className="md:h-auto h-full object-cover rounded-[12px] w-full"
                    src="images/img_image_142.png"
                    alt="image"
                  />
                  <div className="flex flex-row items-center justify-between w-full">
                    <Button
                      className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[109px] rounded-[18px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-0.5"
                          src="images/img_icon_gray_500.svg"
                          alt="Icon"
                        />
                      }
                      color="gray_900_01"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-medium text-left text-sm">
                        10h 30min
                      </div>
                    </Button>
                    <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-row gap-1 items-center justify-start px-2.5 py-1.5 rounded-[16px] w-auto">
                      <div className="flex flex-row items-start justify-start w-auto">
                        <RatingBar
                          className="flex justify-between w-[98px]"
                          value={4}
                          starCount={5}
                          color="#999999"
                          activeColor="#e50000"
                          size={18}
                        ></RatingBar>
                      </div>
                      <Text
                        className="text-gray-500 text-sm w-auto"
                        size="txtManropeMedium14"
                      >
                        2K
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col gap-5 h-[500px] md:h-auto items-start justify-start p-5 rounded-[12px] w-full">
                  <Img
                    className="md:h-auto h-full object-cover rounded-[12px] w-full"
                    src="images/img_image_348x319.png"
                    alt="image"
                  />
                  <div className="flex flex-row items-center justify-between w-full">
                    <Button
                      className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[112px] rounded-[18px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-0.5"
                          src="images/img_icon_gray_500.svg"
                          alt="Icon"
                        />
                      }
                      color="gray_900_01"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-medium text-base text-left">
                        8h 20min
                      </div>
                    </Button>
                    <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-row gap-1 items-center justify-start px-2.5 py-1.5 rounded-[16px] w-auto">
                      <div className="flex flex-row gap-0.5 items-start justify-start w-auto">
                        <Img
                          className="h-[18px] w-[18px]"
                          src="images/img_shape_11.svg"
                          alt="shape"
                        />
                        <Img
                          className="h-[18px] w-[18px]"
                          src="images/img_shape_12.svg"
                          alt="shape_One"
                        />
                        <Img
                          className="h-[18px] w-[18px]"
                          src="images/img_shape_13.svg"
                          alt="shape_Two"
                        />
                        <Img
                          className="h-[18px] w-[18px]"
                          src="images/img_shape_14.svg"
                          alt="shape_Three"
                        />
                        <Img
                          className="h-4 w-[17px]"
                          src="images/img_user.svg"
                          alt="user"
                        />
                      </div>
                      <Text
                        className="text-gray-500 text-sm w-auto"
                        size="txtManropeMedium14"
                      >
                        32K
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
        <div className="bg-black-900 border border-gray-900 border-solid flex flex-col items-center justify-start max-w-[1596px] mt-[150px] mx-auto px-20 md:px-5 py-[100px] rounded-[12px] w-full">
          <div className="flex h-[313px] sm:h-[907px] justify-end relative rounded-[12px] w-[1596px] md:w-full">
            <div className="absolute flex sm:flex-col flex-row gap-5 h-full inset-x-[0] items-center justify-between mx-auto top-[0] w-full">
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_42x165.png"
                alt="image_One"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_54.png"
                alt="image_Two"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_55.png"
                alt="image_Three"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_56.png"
                alt="image_Four"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_57.png"
                alt="image_Five"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_58.png"
                alt="image_Six"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_59.png"
                alt="image_Seven"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_60.png"
                alt="image_Eight"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_42x115.png"
                alt="image_Nine"
              />
            </div>
            <div className="absolute flex sm:flex-col flex-row gap-5 h-full inset-x-[0] items-center justify-between mx-auto top-[20%] w-full">
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_83x165.png"
                alt="image_Ten"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_61.png"
                alt="image_Eleven"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_62.png"
                alt="image_Twelve"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_63.png"
                alt="image_Thirteen"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_64.png"
                alt="image_Fourteen"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_65.png"
                alt="image_Fifteen"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_66.png"
                alt="image_Sixteen"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_67.png"
                alt="image_Seventeen"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_83x115.png"
                alt="image_Eighteen"
              />
            </div>
            <div className="absolute bottom-[20%] flex sm:flex-col flex-row gap-5 h-full inset-x-[0] items-center justify-between mx-auto w-full">
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_68.png"
                alt="image_Nineteen"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_69.png"
                alt="image_Twenty"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_70.png"
                alt="image_TwentyOne"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_71.png"
                alt="image_TwentyTwo"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_72.png"
                alt="image_TwentyThree"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_73.png"
                alt="image_TwentyFour"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_74.png"
                alt="image_TwentyFive"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_75.png"
                alt="image_TwentySix"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_76.png"
                alt="image_TwentySeven"
              />
            </div>
            <div className="flex sm:flex-col flex-row gap-5 h-full items-center justify-between mt-auto mx-auto w-full">
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_77.png"
                alt="image_TwentyEight"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_78.png"
                alt="image_TwentyNine"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_79.png"
                alt="image_Thirty"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_80.png"
                alt="image_ThirtyOne"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_81.png"
                alt="image_ThirtyTwo"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_82.png"
                alt="image_ThirtyThree"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_83.png"
                alt="image_ThirtyFour"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_84.png"
                alt="image_ThirtyFive"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_85.png"
                alt="image_ThirtySix"
              />
            </div>
            <div className="absolute inset-[0] justify-center m-auto overflow-x-auto w-full">
              <div className="relative rounded-[12px] w-full">
                <div className="absolute bg-gradient6  h-[344px] inset-[0] justify-center m-auto w-full"></div>
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between m-auto relative w-[90%]">
                  <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                    <Text
                      className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-full"
                      size="txtManropeBold48"
                    >
                      Start your free trial today!
                    </Text>
                    <Text
                      className="text-gray-500 text-lg w-full"
                      size="txtManropeRegular18"
                    >
                      This is a clear and concise call to action that encourages
                      users to sign up for a free trial of StreamVibe.
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-semibold min-w-[188px] md:mt-0 my-[25px] rounded-lg text-center text-lg"
                    color="red_A700"
                    size="lg"
                    variant="fill"
                  >
                    Start a Free Trail
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="bg-black-900 flex gap-[100px] items-center justify-center mt-[150px] pb-[50px] pt-[100px] md:px-5 px-[162px] w-full" />
      </div>
    </>
  );
};

export default MoviesShowsPageDesktopPage;
