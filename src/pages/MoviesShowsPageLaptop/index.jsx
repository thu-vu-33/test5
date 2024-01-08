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
import Footer1 from "components/Footer1";
import Header1 from "components/Header1";

const MoviesShowsPageLaptopPage = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-gray-900_01 flex flex-col font-manrope items-center justify-start mx-auto w-full">
        <Header1 className="flex md:flex-col flex-row md:gap-10 items-center justify-between px-20 md:px-5 py-6 w-full" />
        <div className="h-[709px] md:h-[749px] max-w-7xl mt-10 mx-auto md:px-5 relative w-full">
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
            className="m-auto w-full"
            items={[...Array(4)].map(() => (
              <React.Fragment key={Math.random()}>
                <div
                  className="bg-cover bg-gradient7  bg-no-repeat border border-solid flex flex-col gray_900_gray_900_00_02_border2 h-[709px] md:h-auto items-center justify-end max-w-7xl mx-2.5 pb-4 pt-10 px-10 sm:px-5 rounded-[12px]"
                  style={{
                    backgroundImage: "url('images/img_container_835x1594.png')",
                  }}
                >
                  <div className="flex flex-col gap-10 items-center justify-start w-full">
                    <div className="flex flex-col gap-6 items-center justify-end w-full">
                      <div className="flex flex-col gap-0.5 items-center justify-start md:px-10 sm:px-5 px-[120px] w-full">
                        <Text
                          className="text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700 w-full"
                          size="txtManropeBold30"
                        >
                          Avengers : Endgame
                        </Text>
                        <Text
                          className="leading-[150.00%] max-w-[960px] md:max-w-full text-base text-center text-gray-500"
                          size="txtManropeMedium16"
                        >
                          <>
                            With the help of remaining allies, the Avengers must
                            assemble once more in order to undo Thanos&#39;s
                            actions and undo the chaos to the universe, no
                            matter what consequences may be in store, and no
                            matter who they face... Avenge the fallen.
                          </>
                        </Text>
                      </div>
                      <div className="flex flex-row gap-5 items-center justify-start w-auto">
                        <Button
                          className="cursor-pointer flex items-center justify-center min-w-[128px] rounded-lg"
                          leftIcon={
                            <Img
                              className="h-6 mb-px mr-1"
                              src="images/img_icon.svg"
                              alt="Icon"
                            />
                          }
                          color="red_A700"
                          size="md"
                          variant="fill"
                        >
                          <div className="font-semibold text-left text-sm">
                            Play Now
                          </div>
                        </Button>
                        <Img
                          className="h-12 w-40"
                          src="images/img_buttonscontainer_black_900_48x160.svg"
                          alt="buttonscontaine"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-between w-full">
                      <Img
                        className="h-12 rounded-lg w-12"
                        src="images/img_button_black_900_48x48.svg"
                        alt="button_One"
                      />
                      <Img
                        className="h-12 rounded-lg w-12"
                        src="images/img_button_48x48.svg"
                        alt="button_Two"
                      />
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
            renderDotsItem={({ isActive }) => {
              if (isActive) {
                return (
                  <div className="inline-block cursor-pointer h-1 bg-red-A700 w-[23px] relative rounded-sm" />
                );
              }
              return (
                <div
                  className="inline-block cursor-pointer h-1 bg-blue_gray-900 w-4 relative rounded-sm"
                  role="button"
                  tabIndex={0}
                />
              );
            }}
          />
          <PagerIndicator
            className="absolute bottom-[5%] flex gap-[3px] h-1 inset-x-[0] justify-center mx-auto w-[81px]"
            count={4}
            activeCss="inline-block cursor-pointer h-1 bg-red-A700 w-[23px] relative rounded-sm"
            activeIndex={sliderState}
            inactiveCss="inline-block cursor-pointer h-1 bg-blue_gray-900 w-4 relative rounded-sm"
            sliderRef={sliderRef}
            selectedWrapperCss="inline-block"
            unselectedWrapperCss="inline-block"
          />
        </div>
        <div className="flex flex-col max-w-7xl mt-[100px] mx-auto md:px-5 relative w-full">
          <div className="flex flex-col items-start justify-start mx-auto px-10 sm:px-5 w-full">
            <Button
              className="cursor-pointer font-semibold min-w-[95px] rounded-md text-base text-center"
              color="red_A700"
              size="sm"
              variant="fill"
            >
              Movies
            </Button>
          </div>
          <div className="border border-gray-900 border-solid flex flex-col md:gap-10 gap-20 items-center justify-start mb-auto mt-[-22px] mx-auto p-10 sm:px-5 rounded-[12px] w-full z-[1]">
            <div className="flex flex-col gap-10 items-start justify-start w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 gap-[100px] items-center justify-start w-full">
                <Text
                  className="flex-1 text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-auto"
                  size="txtManropeBold30"
                >
                  Our Genres
                </Text>
                <div className="bg-black-900 border border-gray-900_02 border-solid flex flex-row gap-3 items-center justify-start p-3 rounded-[10px] w-auto">
                  <Img
                    className="h-11 rounded-md w-11"
                    src="images/img_button.svg"
                    alt="button"
                  />
                  <PagerIndicator
                    className="flex gap-[3px] h-1 items-start justify-start w-[69px]"
                    count={4}
                    activeCss="inline-block cursor-pointer h-1 bg-red-A700 w-[18px] rounded-sm"
                    activeIndex={1}
                    inactiveCss="inline-block cursor-pointer h-1 bg-blue_gray-900 w-3.5 rounded-sm"
                    selectedWrapperCss="inline-block"
                    unselectedWrapperCss="inline-block"
                  />
                  <Img
                    className="h-11 rounded-md w-11"
                    src="images/img_button_gray_900_03.svg"
                    alt="button_One"
                  />
                </div>
              </div>
              <List
                className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-start w-full"
                orientation="horizontal"
              >
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col items-start justify-start p-6 sm:px-5 rounded-[10px] w-full">
                  <div className="h-[187px] md:h-auto relative w-full">
                    <div className="flex flex-1 flex-row gap-[5px] h-full items-center justify-evenly mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[91px] sm:h-auto h-full max-h-[91px] object-cover rounded-md"
                        src="images/img_image_102x93.png"
                        alt="image"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[91px] sm:h-auto h-full max-h-[91px] object-cover rounded-md"
                        src="images/img_image_86.png"
                        alt="image_One"
                      />
                    </div>
                    <div className="flex flex-1 flex-row gap-[5px] h-full items-center justify-evenly mt-auto mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[91px] sm:h-auto h-full max-h-[91px] object-cover rounded-md"
                        src="images/img_image_87.png"
                        alt="image_Two"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[91px] sm:h-auto h-full max-h-[91px] object-cover rounded-md"
                        src="images/img_image_88.png"
                        alt="image_Three"
                      />
                    </div>
                    <div className="absolute bg-gradient3  h-[187px] inset-[0] justify-center m-auto w-full"></div>
                  </div>
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="flex-1 text-base text-white-A700 w-auto"
                      size="txtManropeSemiBold16"
                    >
                      Action
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowleft.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col items-start justify-start p-6 sm:px-5 rounded-[10px] w-full">
                  <div className="h-[187px] md:h-auto relative w-full">
                    <div className="flex flex-1 flex-row gap-[5px] h-full items-center justify-evenly mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[91px] sm:h-auto h-full max-h-[91px] object-cover rounded-md"
                        src="images/img_image_89.png"
                        alt="image"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[91px] sm:h-auto h-full max-h-[91px] object-cover rounded-md"
                        src="images/img_image_90.png"
                        alt="image_One"
                      />
                    </div>
                    <div className="flex flex-1 flex-row gap-[5px] h-full items-center justify-evenly mt-auto mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[91px] sm:h-auto h-full max-h-[91px] object-cover rounded-md"
                        src="images/img_image_91.png"
                        alt="image_Two"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[91px] sm:h-auto h-full max-h-[91px] object-cover rounded-md"
                        src="images/img_image_92.png"
                        alt="image_Three"
                      />
                    </div>
                    <div className="absolute bg-gradient3  h-[187px] inset-[0] justify-center m-auto w-full"></div>
                  </div>
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="flex-1 text-base text-white-A700 w-auto"
                      size="txtManropeSemiBold16"
                    >
                      Adventure
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowleft.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col items-start justify-start p-6 sm:px-5 rounded-[10px] w-full">
                  <div className="h-[187px] md:h-auto relative w-full">
                    <div className="flex flex-1 flex-row gap-[5px] h-full items-center justify-evenly mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[91px] sm:h-auto h-full max-h-[91px] object-cover rounded-md"
                        src="images/img_image_93.png"
                        alt="image"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[91px] sm:h-auto h-full max-h-[91px] object-cover rounded-md"
                        src="images/img_image_94.png"
                        alt="image_One"
                      />
                    </div>
                    <div className="flex flex-1 flex-row gap-[5px] h-full items-center justify-evenly mt-auto mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[91px] sm:h-auto h-full max-h-[91px] object-cover rounded-md"
                        src="images/img_image_95.png"
                        alt="image_Two"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[91px] sm:h-auto h-full max-h-[91px] object-cover rounded-md"
                        src="images/img_image_96.png"
                        alt="image_Three"
                      />
                    </div>
                    <div className="absolute bg-gradient3  h-[187px] inset-[0] justify-center m-auto w-full"></div>
                  </div>
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="flex-1 text-base text-white-A700 w-auto"
                      size="txtManropeSemiBold16"
                    >
                      Comedy
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowleft.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col items-start justify-start p-6 sm:px-5 rounded-[10px] w-full">
                  <div className="h-[187px] md:h-auto relative w-full">
                    <div className="flex flex-1 flex-row gap-[5px] h-full items-center justify-evenly mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[91px] sm:h-auto h-full max-h-[91px] object-cover rounded-md"
                        src="images/img_image_97.png"
                        alt="image"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[91px] sm:h-auto h-full max-h-[91px] object-cover rounded-md"
                        src="images/img_image_98.png"
                        alt="image_One"
                      />
                    </div>
                    <div className="flex flex-1 flex-row gap-[5px] h-full items-center justify-evenly mt-auto mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[91px] sm:h-auto h-full max-h-[91px] object-cover rounded-md"
                        src="images/img_image_99.png"
                        alt="image_Two"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[91px] sm:h-auto h-full max-h-[91px] object-cover rounded-md"
                        src="images/img_image_100.png"
                        alt="image_Three"
                      />
                    </div>
                    <div className="absolute bg-gradient3  h-[187px] inset-[0] justify-center m-auto w-full"></div>
                  </div>
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="flex-1 text-base text-white-A700 w-auto"
                      size="txtManropeSemiBold16"
                    >
                      Drama
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowleft.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col items-start justify-start p-6 sm:px-5 rounded-[10px] w-full">
                  <div className="h-[187px] md:h-auto relative w-full">
                    <div className="flex flex-1 flex-row gap-[5px] h-full items-center justify-evenly mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[91px] sm:h-auto h-full max-h-[91px] object-cover rounded-md"
                        src="images/img_image_101.png"
                        alt="image"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[91px] sm:h-auto h-full max-h-[91px] object-cover rounded-md"
                        src="images/img_image_102.png"
                        alt="image_One"
                      />
                    </div>
                    <div className="flex flex-1 flex-row gap-[5px] h-full items-center justify-evenly mt-auto mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[91px] sm:h-auto h-full max-h-[91px] object-cover rounded-md"
                        src="images/img_image_103.png"
                        alt="image_Two"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[91px] sm:h-auto h-full max-h-[91px] object-cover rounded-md"
                        src="images/img_image_104.png"
                        alt="image_Three"
                      />
                    </div>
                    <div className="absolute bg-gradient3  h-[187px] inset-[0] justify-center m-auto w-full"></div>
                  </div>
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="flex-1 text-base text-white-A700 w-auto"
                      size="txtManropeSemiBold16"
                    >
                      Horror
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowleft.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
              </List>
            </div>
            <div className="flex flex-col gap-10 items-start justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[100px] items-center justify-start w-full">
                <Text
                  className="flex-1 text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-auto"
                  size="txtManropeBold30"
                >
                  Popular Top 10 In Genres
                </Text>
                <div className="bg-black-900 border border-gray-900_02 border-solid flex flex-row gap-3 items-center justify-start p-3 rounded-[10px] w-auto">
                  <Img
                    className="h-11 rounded-md w-11"
                    src="images/img_button.svg"
                    alt="button_Two"
                  />
                  <PagerIndicator
                    className="flex gap-[3px] h-1 items-start justify-start w-[69px]"
                    count={4}
                    activeCss="inline-block cursor-pointer h-1 bg-red-A700 w-[18px] rounded-sm"
                    activeIndex={1}
                    inactiveCss="inline-block cursor-pointer h-1 bg-blue_gray-900 w-3.5 rounded-sm"
                    selectedWrapperCss="inline-block"
                    unselectedWrapperCss="inline-block"
                  />
                  <Img
                    className="h-11 rounded-md w-11"
                    src="images/img_button_gray_900_03.svg"
                    alt="button_Three"
                  />
                </div>
              </div>
              <List
                className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start w-full"
                orientation="horizontal"
              >
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col h-[317px] md:h-auto items-end justify-start p-[30px] sm:px-5 rounded-[12px] w-full">
                  <div className="bg-gradient3  h-full relative w-full">
                    <div className="flex flex-1 flex-row gap-2.5 h-full items-center justify-between mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[98px] sm:h-auto h-full max-h-[98px] object-cover rounded"
                        src="images/img_image_121x141.png"
                        alt="image"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[98px] sm:h-auto h-full max-h-[98px] object-cover rounded"
                        src="images/img_image_105.png"
                        alt="image_One"
                      />
                    </div>
                    <div className="flex flex-1 flex-row gap-2.5 h-full items-center justify-between mt-auto mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[98px] sm:h-auto h-full max-h-[98px] object-cover rounded"
                        src="images/img_image_106.png"
                        alt="image_Two"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[98px] sm:h-auto h-full max-h-[98px] object-cover rounded"
                        src="images/img_image_107.png"
                        alt="image_Three"
                      />
                    </div>
                    <div className="absolute bg-gradient3  h-[206px] inset-[0] justify-center m-auto w-full"></div>
                  </div>
                  <div className="flex flex-row gap-5 items-center justify-start w-full">
                    <div className="flex flex-1 flex-col gap-0.5 items-start justify-start w-full">
                      <Text
                        className="bg-red-A700 justify-center pb-0.5 pt-[5px] px-2 rounded text-white-A700 text-xs w-auto"
                        size="txtManropeSemiBold12"
                      >
                        Top 10 In
                      </Text>
                      <Text
                        className="text-base text-white-A700 w-full"
                        size="txtManropeSemiBold16"
                      >
                        Action
                      </Text>
                    </div>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowleft.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col h-[317px] md:h-auto items-end justify-start p-[30px] sm:px-5 rounded-[12px] w-full">
                  <div className="bg-gradient3  h-full relative w-full">
                    <div className="flex flex-1 flex-row gap-2.5 h-full items-center justify-between mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[98px] sm:h-auto h-full max-h-[98px] object-cover rounded"
                        src="images/img_image_108.png"
                        alt="image"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[98px] sm:h-auto h-full max-h-[98px] object-cover rounded"
                        src="images/img_image_109.png"
                        alt="image_One"
                      />
                    </div>
                    <div className="flex flex-1 flex-row gap-2.5 h-full items-center justify-between mt-auto mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[98px] sm:h-auto h-full max-h-[98px] object-cover rounded"
                        src="images/img_image_110.png"
                        alt="image_Two"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[98px] sm:h-auto h-full max-h-[98px] object-cover rounded"
                        src="images/img_image_111.png"
                        alt="image_Three"
                      />
                    </div>
                    <div className="absolute bg-gradient3  h-[206px] inset-[0] justify-center m-auto w-full"></div>
                  </div>
                  <div className="flex flex-row gap-5 items-center justify-start w-full">
                    <div className="flex flex-1 flex-col gap-0.5 items-start justify-start w-full">
                      <Text
                        className="bg-red-A700 justify-center pb-0.5 pt-[5px] px-2 rounded text-white-A700 text-xs w-auto"
                        size="txtManropeSemiBold12"
                      >
                        Top 10 In
                      </Text>
                      <Text
                        className="text-base text-white-A700 w-full"
                        size="txtManropeSemiBold16"
                      >
                        Adventure
                      </Text>
                    </div>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowleft.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col h-[317px] md:h-auto items-end justify-start p-[30px] sm:px-5 rounded-[12px] w-full">
                  <div className="bg-gradient3  h-full relative w-full">
                    <div className="flex flex-1 flex-row gap-2.5 h-full items-center justify-between mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[98px] sm:h-auto h-full max-h-[98px] object-cover rounded"
                        src="images/img_image_112.png"
                        alt="image"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[98px] sm:h-auto h-full max-h-[98px] object-cover rounded"
                        src="images/img_image_113.png"
                        alt="image_One"
                      />
                    </div>
                    <div className="flex flex-1 flex-row gap-2.5 h-full items-center justify-between mt-auto mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[98px] sm:h-auto h-full max-h-[98px] object-cover rounded"
                        src="images/img_image_114.png"
                        alt="image_Two"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[98px] sm:h-auto h-full max-h-[98px] object-cover rounded"
                        src="images/img_image_115.png"
                        alt="image_Three"
                      />
                    </div>
                    <div className="absolute bg-gradient3  h-[206px] inset-[0] justify-center m-auto w-full"></div>
                  </div>
                  <div className="flex flex-row gap-5 items-center justify-start w-full">
                    <div className="flex flex-1 flex-col gap-0.5 items-start justify-start w-full">
                      <Text
                        className="bg-red-A700 justify-center pb-0.5 pt-[5px] px-2 rounded text-white-A700 text-xs w-auto"
                        size="txtManropeSemiBold12"
                      >
                        Top 10 In
                      </Text>
                      <Text
                        className="text-base text-white-A700 w-full"
                        size="txtManropeSemiBold16"
                      >
                        Comedy
                      </Text>
                    </div>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowleft.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col h-[317px] md:h-auto items-end justify-start p-[30px] sm:px-5 rounded-[12px] w-full">
                  <div className="bg-gradient3  h-full relative w-full">
                    <div className="flex flex-1 flex-row gap-2.5 h-full items-center justify-between mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[98px] sm:h-auto h-full max-h-[98px] object-cover rounded"
                        src="images/img_image_116.png"
                        alt="image"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[98px] sm:h-auto h-full max-h-[98px] object-cover rounded"
                        src="images/img_image_117.png"
                        alt="image_One"
                      />
                    </div>
                    <div className="flex flex-1 flex-row gap-2.5 h-full items-center justify-between mt-auto mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[98px] sm:h-auto h-full max-h-[98px] object-cover rounded"
                        src="images/img_image_118.png"
                        alt="image_Two"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[98px] sm:h-auto h-full max-h-[98px] object-cover rounded"
                        src="images/img_image_119.png"
                        alt="image_Three"
                      />
                    </div>
                    <div className="absolute bg-gradient3  h-[206px] inset-[0] justify-center m-auto w-full"></div>
                  </div>
                  <div className="flex flex-row gap-5 items-center justify-start w-full">
                    <div className="flex flex-1 flex-col gap-0.5 items-start justify-start w-full">
                      <Text
                        className="bg-red-A700 justify-center pb-0.5 pt-[5px] px-2 rounded text-white-A700 text-xs w-auto"
                        size="txtManropeSemiBold12"
                      >
                        Top 10 In
                      </Text>
                      <Text
                        className="text-base text-white-A700 w-full"
                        size="txtManropeSemiBold16"
                      >
                        Drama
                      </Text>
                    </div>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowleft.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
              </List>
            </div>
            <div className="flex flex-col gap-10 items-start justify-start w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 gap-[100px] items-center justify-start w-full">
                <Text
                  className="flex-1 text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-auto"
                  size="txtManropeBold30"
                >
                  Trending Now
                </Text>
                <div className="bg-black-900 border border-gray-900_02 border-solid flex flex-row gap-3 items-center justify-start p-3 rounded-[10px] w-auto">
                  <Img
                    className="h-11 rounded-md w-11"
                    src="images/img_button.svg"
                    alt="button_Four"
                  />
                  <PagerIndicator
                    className="flex gap-[3px] h-1 items-start justify-start w-[69px]"
                    count={4}
                    activeCss="inline-block cursor-pointer h-1 bg-red-A700 w-[18px] rounded-sm"
                    activeIndex={1}
                    inactiveCss="inline-block cursor-pointer h-1 bg-blue_gray-900 w-3.5 rounded-sm"
                    selectedWrapperCss="inline-block"
                    unselectedWrapperCss="inline-block"
                  />
                  <Img
                    className="h-11 rounded-md w-11"
                    src="images/img_button_gray_900_03.svg"
                    alt="button_Five"
                  />
                </div>
              </div>
              <List
                className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-start w-full"
                orientation="horizontal"
              >
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col gap-4 h-[308px] md:h-auto items-start justify-start p-4 rounded-[10px] w-full">
                  <Img
                    className="md:h-auto h-full object-cover rounded-[10px] w-full"
                    src="images/img_image_232x192.png"
                    alt="image"
                  />
                  <div className="flex flex-row items-start justify-between w-full">
                    <Button
                      className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[84px] rounded-[14px]"
                      leftIcon={
                        <Img
                          className="h-5 mr-0.5"
                          src="images/img_icon_gray_500.svg"
                          alt="Icon"
                        />
                      }
                      shape="round"
                      color="gray_900_01"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-medium text-left text-xs">
                        1h 30min
                      </div>
                    </Button>
                    <Button
                      className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[51px] rounded-[14px]"
                      leftIcon={
                        <Img
                          className="h-5 mr-1"
                          src="images/img_icon_gray_500_24x24.svg"
                          alt="Icon"
                        />
                      }
                      shape="round"
                      color="gray_900_01"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-medium text-left text-xs">2K</div>
                    </Button>
                  </div>
                </div>
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col gap-4 h-[308px] md:h-auto items-start justify-start p-4 rounded-[10px] w-full">
                  <Img
                    className="md:h-auto h-full object-cover rounded-[10px] w-full"
                    src="images/img_image_143.png"
                    alt="image"
                  />
                  <div className="flex flex-row items-start justify-between w-full">
                    <Button
                      className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[83px] rounded-[14px]"
                      leftIcon={
                        <Img
                          className="h-5 mr-0.5"
                          src="images/img_icon_gray_500.svg"
                          alt="Icon"
                        />
                      }
                      shape="round"
                      color="gray_900_01"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-medium text-left text-xs">
                        1h 57min
                      </div>
                    </Button>
                    <Button
                      className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[58px] rounded-[14px]"
                      leftIcon={
                        <Img
                          className="h-5 mr-1"
                          src="images/img_icon_gray_500_24x24.svg"
                          alt="Icon"
                        />
                      }
                      shape="round"
                      color="gray_900_01"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-medium text-left text-xs">1.5K</div>
                    </Button>
                  </div>
                </div>
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col gap-4 h-[308px] md:h-auto items-start justify-start p-4 rounded-[10px] w-full">
                  <Img
                    className="md:h-auto h-full object-cover rounded-[10px] w-full"
                    src="images/img_image_144.png"
                    alt="image"
                  />
                  <div className="flex flex-row items-start justify-between w-full">
                    <Button
                      className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[84px] rounded-[14px]"
                      leftIcon={
                        <Img
                          className="h-5 mr-0.5"
                          src="images/img_icon_gray_500.svg"
                          alt="Icon"
                        />
                      }
                      shape="round"
                      color="gray_900_01"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-medium text-left text-xs">
                        2h 10min
                      </div>
                    </Button>
                    <Button
                      className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[59px] rounded-[14px]"
                      leftIcon={
                        <Img
                          className="h-5 mr-1"
                          src="images/img_icon_gray_500_24x24.svg"
                          alt="Icon"
                        />
                      }
                      shape="round"
                      color="gray_900_01"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-medium text-left text-xs">1.8K</div>
                    </Button>
                  </div>
                </div>
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col gap-4 h-[308px] md:h-auto items-start justify-start p-4 rounded-[10px] w-full">
                  <Img
                    className="md:h-auto h-full object-cover rounded-[10px] w-full"
                    src="images/img_image_145.png"
                    alt="image"
                  />
                  <div className="flex flex-row items-start justify-between w-full">
                    <Button
                      className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[86px] rounded-[14px]"
                      leftIcon={
                        <Img
                          className="h-5 mr-0.5"
                          src="images/img_icon_gray_500.svg"
                          alt="Icon"
                        />
                      }
                      shape="round"
                      color="gray_900_01"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-medium text-left text-xs">
                        2h 20min
                      </div>
                    </Button>
                    <Button
                      className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[51px] rounded-[14px]"
                      leftIcon={
                        <Img
                          className="h-5 mr-1"
                          src="images/img_icon_gray_500_24x24.svg"
                          alt="Icon"
                        />
                      }
                      shape="round"
                      color="gray_900_01"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-medium text-left text-xs">3K</div>
                    </Button>
                  </div>
                </div>
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col gap-4 h-[308px] md:h-auto items-start justify-start p-4 rounded-[10px] w-full">
                  <Img
                    className="md:h-auto h-full object-cover rounded-[10px] w-full"
                    src="images/img_image_146.png"
                    alt="image"
                  />
                  <div className="flex flex-row items-start justify-between w-full">
                    <Button
                      className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[84px] rounded-[14px]"
                      leftIcon={
                        <Img
                          className="h-5 mr-0.5"
                          src="images/img_icon_gray_500.svg"
                          alt="Icon"
                        />
                      }
                      shape="round"
                      color="gray_900_01"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-medium text-left text-xs">
                        1h 42min
                      </div>
                    </Button>
                    <Button
                      className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[51px] rounded-[14px]"
                      leftIcon={
                        <Img
                          className="h-5 mr-1"
                          src="images/img_icon_gray_500_24x24.svg"
                          alt="Icon"
                        />
                      }
                      shape="round"
                      color="gray_900_01"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-medium text-left text-xs">5K</div>
                    </Button>
                  </div>
                </div>
              </List>
            </div>
            <div className="flex flex-col gap-10 items-start justify-start w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 gap-[100px] items-center justify-start w-full">
                <Text
                  className="flex-1 text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-auto"
                  size="txtManropeBold30"
                >
                  New Releases
                </Text>
                <div className="bg-black-900 border border-gray-900_02 border-solid flex flex-row gap-3 items-center justify-start p-3 rounded-[10px] w-auto">
                  <Img
                    className="h-11 rounded-md w-11"
                    src="images/img_button.svg"
                    alt="button_Six"
                  />
                  <PagerIndicator
                    className="flex gap-[3px] h-1 items-start justify-start w-[69px]"
                    count={4}
                    activeCss="inline-block cursor-pointer h-1 bg-red-A700 w-[18px] rounded-sm"
                    activeIndex={1}
                    inactiveCss="inline-block cursor-pointer h-1 bg-blue_gray-900 w-3.5 rounded-sm"
                    selectedWrapperCss="inline-block"
                    unselectedWrapperCss="inline-block"
                  />
                  <Img
                    className="h-11 rounded-md w-11"
                    src="images/img_button_gray_900_03.svg"
                    alt="button_Seven"
                  />
                </div>
              </div>
              <List
                className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-start w-full"
                orientation="horizontal"
              >
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col gap-4 h-[308px] md:h-auto items-center justify-center p-4 rounded-[10px] w-full">
                  <Img
                    className="md:h-auto h-full object-cover rounded-[10px] w-full"
                    src="images/img_image_230x192.png"
                    alt="image"
                  />
                  <Text
                    className="bg-gray-900_01 border border-gray-900 border-solid justify-center pb-1 pt-2 px-3.5 rounded-[15px] text-center text-gray-500 text-xs w-auto"
                    size="txtManropeMedium12"
                  >
                    <span className="text-gray-500 font-manrope font-medium">
                      Released at{" "}
                    </span>
                    <span className="text-gray-400 font-manrope font-medium">
                      14 April 2023
                    </span>
                  </Text>
                </div>
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col gap-4 h-[308px] md:h-auto items-center justify-center p-4 rounded-[10px] w-full">
                  <Img
                    className="md:h-auto h-full object-cover rounded-[10px] w-full"
                    src="images/img_image_147.png"
                    alt="image"
                  />
                  <Text
                    className="bg-gray-900_01 border border-gray-900 border-solid justify-center pb-1 pt-2 px-3.5 rounded-[15px] text-center text-gray-500 text-xs w-auto"
                    size="txtManropeMedium12"
                  >
                    <span className="text-gray-500 font-manrope font-medium">
                      Released at{" "}
                    </span>
                    <span className="text-gray-400 font-manrope font-medium">
                      22 April 2023
                    </span>
                  </Text>
                </div>
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col gap-4 h-[308px] md:h-auto items-center justify-center p-4 rounded-[10px] w-full">
                  <Img
                    className="md:h-auto h-full object-cover rounded-[10px] w-full"
                    src="images/img_image_148.png"
                    alt="image"
                  />
                  <Text
                    className="bg-gray-900_01 border border-gray-900 border-solid justify-center pb-1 pt-2 px-3.5 rounded-[15px] text-center text-gray-500 text-xs w-auto"
                    size="txtManropeMedium12"
                  >
                    <span className="text-gray-500 font-manrope font-medium">
                      Released at{" "}
                    </span>
                    <span className="text-gray-400 font-manrope font-medium">
                      13 April 2023
                    </span>
                  </Text>
                </div>
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col gap-4 h-[308px] md:h-auto items-center justify-center p-4 rounded-[10px] w-full">
                  <Img
                    className="md:h-auto h-full object-cover rounded-[10px] w-full"
                    src="images/img_image_149.png"
                    alt="image"
                  />
                  <Text
                    className="bg-gray-900_01 border border-gray-900 border-solid justify-center pb-1 pt-2 px-3.5 rounded-[15px] text-center text-gray-500 text-xs w-auto"
                    size="txtManropeMedium12"
                  >
                    <span className="text-gray-500 font-manrope font-medium">
                      Released at{" "}
                    </span>
                    <span className="text-gray-400 font-manrope font-medium">
                      19 April 2023
                    </span>
                  </Text>
                </div>
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col gap-4 h-[308px] md:h-auto items-center justify-center p-4 rounded-[10px] w-full">
                  <Img
                    className="md:h-auto h-full object-cover rounded-[10px] w-full"
                    src="images/img_image_150.png"
                    alt="image"
                  />
                  <Text
                    className="bg-gray-900_01 border border-gray-900 border-solid justify-center pb-1 pt-2 px-3.5 rounded-[15px] text-center text-gray-500 text-xs w-auto"
                    size="txtManropeMedium12"
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
            <div className="flex flex-col gap-10 items-start justify-start w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 gap-[100px] items-center justify-start w-full">
                <Text
                  className="flex-1 text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-auto"
                  size="txtManropeBold30"
                >
                  Must - Watch Movies
                </Text>
                <div className="bg-black-900 border border-gray-900_02 border-solid flex flex-row gap-3 items-center justify-start p-3 rounded-[10px] w-auto">
                  <Img
                    className="h-11 rounded-md w-11"
                    src="images/img_button.svg"
                    alt="button_Eight"
                  />
                  <PagerIndicator
                    className="flex gap-[3px] h-1 items-start justify-start w-[69px]"
                    count={4}
                    activeCss="inline-block cursor-pointer h-1 bg-red-A700 w-[18px] rounded-sm"
                    activeIndex={1}
                    inactiveCss="inline-block cursor-pointer h-1 bg-blue_gray-900 w-3.5 rounded-sm"
                    selectedWrapperCss="inline-block"
                    unselectedWrapperCss="inline-block"
                  />
                  <Img
                    className="h-11 rounded-md w-11"
                    src="images/img_button_gray_900_03.svg"
                    alt="button_Nine"
                  />
                </div>
              </div>
              <List
                className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start w-full"
                orientation="horizontal"
              >
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col gap-4 h-[404px] md:h-auto items-start justify-start p-4 rounded-[10px] w-full">
                  <Img
                    className="md:h-auto h-full object-cover rounded-[10px] w-full"
                    src="images/img_image_324x253.png"
                    alt="image"
                  />
                  <div className="flex flex-row items-center justify-between w-full">
                    <Button
                      className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[87px] rounded-[16px]"
                      leftIcon={
                        <Img
                          className="h-5 mr-0.5"
                          src="images/img_icon_gray_500.svg"
                          alt="Icon"
                        />
                      }
                      shape="round"
                      color="gray_900_01"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-medium text-left text-xs">
                        1h 57min
                      </div>
                    </Button>
                    <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-row gap-1 items-center justify-start px-2.5 py-1.5 rounded-[15px] w-auto">
                      <div className="flex flex-row gap-px items-start justify-start w-auto">
                        <Img
                          className="h-3.5 w-3.5"
                          src="images/img_shape_14x14.svg"
                          alt="shape"
                        />
                        <Img
                          className="h-3.5 w-3.5"
                          src="images/img_shape_15.svg"
                          alt="shape_One"
                        />
                        <Img
                          className="h-3.5 w-3.5"
                          src="images/img_shape_16.svg"
                          alt="shape_Two"
                        />
                        <Img
                          className="h-3.5 w-3.5"
                          src="images/img_shape_17.svg"
                          alt="shape_Three"
                        />
                        <Img
                          className="h-3.5 w-3.5"
                          src="images/img_user.svg"
                          alt="user"
                        />
                      </div>
                      <Text
                        className="text-gray-500 text-xs w-auto"
                        size="txtManropeMedium12"
                      >
                        20K
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col gap-4 h-[404px] md:h-auto items-start justify-start p-4 rounded-[10px] w-full">
                  <Img
                    className="md:h-auto h-full object-cover rounded-[10px] w-full"
                    src="images/img_image_151.png"
                    alt="image"
                  />
                  <div className="flex flex-row items-center justify-between w-full">
                    <Button
                      className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[88px] rounded-[16px]"
                      leftIcon={
                        <Img
                          className="h-5 mr-0.5"
                          src="images/img_icon_gray_500.svg"
                          alt="Icon"
                        />
                      }
                      shape="round"
                      color="gray_900_01"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-medium text-left text-xs">
                        1h 30min
                      </div>
                    </Button>
                    <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-row gap-1 items-center justify-start px-2.5 py-1.5 rounded-[15px] w-auto">
                      <div className="flex flex-row items-start justify-start w-auto">
                        <RatingBar
                          className="flex justify-between w-[74px]"
                          value={4}
                          starCount={5}
                          color="#999999"
                          activeColor="#e50000"
                          size={14}
                        ></RatingBar>
                      </div>
                      <Text
                        className="text-gray-500 text-xs w-auto"
                        size="txtManropeMedium12"
                      >
                        20K
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col gap-4 h-[404px] md:h-auto items-start justify-start p-4 rounded-[10px] w-full">
                  <Img
                    className="md:h-auto h-full object-cover rounded-[10px] w-full"
                    src="images/img_image_152.png"
                    alt="image"
                  />
                  <div className="flex flex-row items-center justify-between w-full">
                    <Button
                      className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[88px] rounded-[16px]"
                      leftIcon={
                        <Img
                          className="h-5 mr-0.5"
                          src="images/img_icon_gray_500.svg"
                          alt="Icon"
                        />
                      }
                      shape="round"
                      color="gray_900_01"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-medium text-left text-xs">
                        1h 42min
                      </div>
                    </Button>
                    <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-row gap-1 items-center justify-start px-2.5 py-1.5 rounded-[15px] w-auto">
                      <div className="flex flex-row gap-px items-start justify-start w-auto">
                        <Img
                          className="h-3.5 w-3.5"
                          src="images/img_shape_18.svg"
                          alt="shape"
                        />
                        <Img
                          className="h-3.5 w-3.5"
                          src="images/img_shape_19.svg"
                          alt="shape_One"
                        />
                        <Img
                          className="h-3.5 w-3.5"
                          src="images/img_shape_20.svg"
                          alt="shape_Two"
                        />
                        <Img
                          className="h-3.5 w-3.5"
                          src="images/img_shape_21.svg"
                          alt="shape_Three"
                        />
                        <Img
                          className="h-3.5 w-3.5"
                          src="images/img_user.svg"
                          alt="user"
                        />
                      </div>
                      <Text
                        className="text-gray-500 text-xs w-auto"
                        size="txtManropeMedium12"
                      >
                        20K
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col gap-4 h-[404px] md:h-auto items-start justify-start p-4 rounded-[10px] w-full">
                  <Img
                    className="md:h-auto h-full object-cover rounded-[10px] w-full"
                    src="images/img_image_230x192.png"
                    alt="image"
                  />
                  <div className="flex flex-row items-center justify-between w-full">
                    <Button
                      className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[88px] rounded-[16px]"
                      leftIcon={
                        <Img
                          className="h-5 mr-0.5"
                          src="images/img_icon_gray_500.svg"
                          alt="Icon"
                        />
                      }
                      shape="round"
                      color="gray_900_01"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-medium text-left text-xs">
                        2h 10min
                      </div>
                    </Button>
                    <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-row gap-1 items-center justify-start px-2.5 py-1.5 rounded-[15px] w-auto">
                      <div className="flex flex-row items-start justify-start w-auto">
                        <RatingBar
                          className="flex justify-between w-[74px]"
                          value={4}
                          starCount={5}
                          color="#999999"
                          activeColor="#e50000"
                          size={14}
                        ></RatingBar>
                      </div>
                      <Text
                        className="text-gray-500 text-xs w-auto"
                        size="txtManropeMedium12"
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
        <div className="flex flex-col max-w-[1279px] mt-[120px] mx-auto md:px-5 relative w-full">
          <div className="flex flex-col items-start justify-start mx-auto px-10 sm:px-5 w-full">
            <Button
              className="cursor-pointer font-semibold min-w-[91px] rounded-md text-base text-center"
              color="red_A700"
              size="sm"
              variant="fill"
            >
              Shows
            </Button>
          </div>
          <div className="border border-gray-900 border-solid flex flex-col md:gap-10 gap-20 items-center justify-start mb-auto mt-[-22px] mx-auto p-10 sm:px-5 rounded-[12px] w-full z-[1]">
            <div className="flex flex-col gap-10 items-start justify-start w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 gap-[100px] items-center justify-start w-full">
                <Text
                  className="flex-1 text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-auto"
                  size="txtManropeBold30"
                >
                  Our Genres
                </Text>
                <div className="bg-black-900 border border-gray-900_02 border-solid flex flex-row gap-3 items-center justify-start p-3 rounded-[10px] w-auto">
                  <Img
                    className="h-11 rounded-md w-11"
                    src="images/img_button.svg"
                    alt="button_Ten"
                  />
                  <PagerIndicator
                    className="flex gap-[3px] h-1 items-start justify-start w-[69px]"
                    count={4}
                    activeCss="inline-block cursor-pointer h-1 bg-red-A700 w-[18px] rounded-sm"
                    activeIndex={1}
                    inactiveCss="inline-block cursor-pointer h-1 bg-blue_gray-900 w-3.5 rounded-sm"
                    selectedWrapperCss="inline-block"
                    unselectedWrapperCss="inline-block"
                  />
                  <Img
                    className="h-11 rounded-md w-11"
                    src="images/img_button_gray_900_03.svg"
                    alt="button_Eleven"
                  />
                </div>
              </div>
              <List
                className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-start w-full"
                orientation="horizontal"
              >
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col items-start justify-start p-6 sm:px-5 rounded-[10px] w-full">
                  <div className="h-[187px] md:h-auto relative w-full">
                    <div className="flex flex-1 flex-row gap-[5px] h-full items-center justify-evenly mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[91px] sm:h-auto h-full max-h-[91px] object-cover rounded-md"
                        src="images/img_image_102x93.png"
                        alt="image"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[91px] sm:h-auto h-full max-h-[91px] object-cover rounded-md"
                        src="images/img_image_86.png"
                        alt="image_One"
                      />
                    </div>
                    <div className="flex flex-1 flex-row gap-[5px] h-full items-center justify-evenly mt-auto mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[91px] sm:h-auto h-full max-h-[91px] object-cover rounded-md"
                        src="images/img_image_87.png"
                        alt="image_Two"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[91px] sm:h-auto h-full max-h-[91px] object-cover rounded-md"
                        src="images/img_image_88.png"
                        alt="image_Three"
                      />
                    </div>
                    <div className="absolute bg-gradient3  h-[187px] inset-[0] justify-center m-auto w-full"></div>
                  </div>
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="flex-1 text-base text-white-A700 w-auto"
                      size="txtManropeSemiBold16"
                    >
                      Action
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowleft.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col items-start justify-start p-6 sm:px-5 rounded-[10px] w-full">
                  <div className="h-[187px] md:h-auto relative w-full">
                    <div className="flex flex-1 flex-row gap-[5px] h-full items-center justify-between mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[91px] sm:h-auto h-full max-h-[91px] object-cover rounded-md"
                        src="images/img_image_89.png"
                        alt="image"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[91px] sm:h-auto h-full max-h-[91px] object-cover rounded-md"
                        src="images/img_image_90.png"
                        alt="image_One"
                      />
                    </div>
                    <div className="flex flex-1 flex-row gap-[5px] h-full items-center justify-between mt-auto mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[91px] sm:h-auto h-full max-h-[91px] object-cover rounded-md"
                        src="images/img_image_91.png"
                        alt="image_Two"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[91px] sm:h-auto h-full max-h-[91px] object-cover rounded-md"
                        src="images/img_image_92.png"
                        alt="image_Three"
                      />
                    </div>
                    <div className="absolute bg-gradient3  h-[187px] inset-[0] justify-center m-auto w-full"></div>
                  </div>
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="flex-1 text-base text-white-A700 w-auto"
                      size="txtManropeSemiBold16"
                    >
                      Adventure
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowleft.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col items-start justify-start p-6 sm:px-5 rounded-[10px] w-full">
                  <div className="h-[187px] md:h-auto relative w-full">
                    <div className="flex flex-1 flex-row gap-[5px] h-full items-center justify-evenly mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[91px] sm:h-auto h-full max-h-[91px] object-cover rounded-md"
                        src="images/img_image_93.png"
                        alt="image"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[91px] sm:h-auto h-full max-h-[91px] object-cover rounded-md"
                        src="images/img_image_94.png"
                        alt="image_One"
                      />
                    </div>
                    <div className="flex flex-1 flex-row gap-[5px] h-full items-center justify-evenly mt-auto mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[91px] sm:h-auto h-full max-h-[91px] object-cover rounded-md"
                        src="images/img_image_95.png"
                        alt="image_Two"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[91px] sm:h-auto h-full max-h-[91px] object-cover rounded-md"
                        src="images/img_image_96.png"
                        alt="image_Three"
                      />
                    </div>
                    <div className="absolute bg-gradient3  h-[187px] inset-[0] justify-center m-auto w-full"></div>
                  </div>
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="flex-1 text-base text-white-A700 w-auto"
                      size="txtManropeSemiBold16"
                    >
                      Comedy
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowleft.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col items-start justify-start p-6 sm:px-5 rounded-[10px] w-full">
                  <div className="h-[187px] md:h-auto relative w-full">
                    <div className="flex flex-1 flex-row gap-[5px] h-full items-center justify-evenly mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[91px] sm:h-auto h-full max-h-[91px] object-cover rounded-md"
                        src="images/img_image_97.png"
                        alt="image"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[91px] sm:h-auto h-full max-h-[91px] object-cover rounded-md"
                        src="images/img_image_98.png"
                        alt="image_One"
                      />
                    </div>
                    <div className="flex flex-1 flex-row gap-[5px] h-full items-center justify-evenly mt-auto mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[91px] sm:h-auto h-full max-h-[91px] object-cover rounded-md"
                        src="images/img_image_99.png"
                        alt="image_Two"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[91px] sm:h-auto h-full max-h-[91px] object-cover rounded-md"
                        src="images/img_image_100.png"
                        alt="image_Three"
                      />
                    </div>
                    <div className="absolute bg-gradient3  h-[187px] inset-[0] justify-center m-auto w-full"></div>
                  </div>
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="flex-1 text-base text-white-A700 w-auto"
                      size="txtManropeSemiBold16"
                    >
                      Drama
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowleft.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col items-start justify-start p-6 sm:px-5 rounded-[10px] w-full">
                  <div className="h-[187px] md:h-auto relative w-full">
                    <div className="flex flex-1 flex-row gap-[5px] h-full items-center justify-evenly mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[91px] sm:h-auto h-full max-h-[91px] object-cover rounded-md"
                        src="images/img_image_101.png"
                        alt="image"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[91px] sm:h-auto h-full max-h-[91px] object-cover rounded-md"
                        src="images/img_image_102.png"
                        alt="image_One"
                      />
                    </div>
                    <div className="flex flex-1 flex-row gap-[5px] h-full items-center justify-evenly mt-auto mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[91px] sm:h-auto h-full max-h-[91px] object-cover rounded-md"
                        src="images/img_image_103.png"
                        alt="image_Two"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[91px] sm:h-auto h-full max-h-[91px] object-cover rounded-md"
                        src="images/img_image_104.png"
                        alt="image_Three"
                      />
                    </div>
                    <div className="absolute bg-gradient3  h-[187px] inset-[0] justify-center m-auto w-full"></div>
                  </div>
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="flex-1 text-base text-white-A700 w-auto"
                      size="txtManropeSemiBold16"
                    >
                      Horror
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowleft.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
              </List>
            </div>
            <div className="flex flex-col gap-10 items-start justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[100px] items-center justify-start w-full">
                <Text
                  className="flex-1 text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-auto"
                  size="txtManropeBold30"
                >
                  Popular Top 10 In Genres
                </Text>
                <div className="bg-black-900 border border-gray-900_02 border-solid flex flex-row gap-3 items-center justify-start p-3 rounded-[10px] w-auto">
                  <Img
                    className="h-11 rounded-md w-11"
                    src="images/img_button.svg"
                    alt="button_Twelve"
                  />
                  <PagerIndicator
                    className="flex gap-[3px] h-1 items-start justify-start w-[69px]"
                    count={4}
                    activeCss="inline-block cursor-pointer h-1 bg-red-A700 w-[18px] rounded-sm"
                    activeIndex={1}
                    inactiveCss="inline-block cursor-pointer h-1 bg-blue_gray-900 w-3.5 rounded-sm"
                    selectedWrapperCss="inline-block"
                    unselectedWrapperCss="inline-block"
                  />
                  <Img
                    className="h-11 rounded-md w-11"
                    src="images/img_button_gray_900_03.svg"
                    alt="button_Thirteen"
                  />
                </div>
              </div>
              <List
                className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start w-full"
                orientation="horizontal"
              >
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col h-[317px] md:h-auto items-end justify-start p-[30px] sm:px-5 rounded-[12px] w-full">
                  <div className="h-full relative w-full">
                    <div className="flex flex-col items-center justify-start m-auto w-full">
                      <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                        <div className="flex flex-row gap-2.5 h-full items-start justify-start w-full">
                          <Img
                            className="flex-1 md:flex-none md:h-[98px] sm:h-auto h-full max-h-[98px] object-cover rounded"
                            src="images/img_image_121x141.png"
                            alt="image"
                          />
                          <Img
                            className="flex-1 md:flex-none md:h-[98px] sm:h-auto h-full max-h-[98px] object-cover rounded"
                            src="images/img_image_105.png"
                            alt="image_One"
                          />
                        </div>
                        <div className="flex flex-row gap-2.5 h-full items-start justify-start w-full">
                          <Img
                            className="flex-1 md:flex-none md:h-[98px] sm:h-auto h-full max-h-[98px] object-cover rounded"
                            src="images/img_image_106.png"
                            alt="image_Two"
                          />
                          <Img
                            className="flex-1 md:flex-none md:h-[98px] sm:h-auto h-full max-h-[98px] object-cover rounded"
                            src="images/img_image_107.png"
                            alt="image_Three"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bg-gradient3  h-[206px] inset-[0] justify-center m-auto w-full"></div>
                  </div>
                  <div className="flex flex-row gap-5 items-center justify-start w-full">
                    <div className="flex flex-1 flex-col gap-0.5 items-start justify-start w-full">
                      <Text
                        className="bg-red-A700 justify-center pb-0.5 pt-[5px] px-2 rounded text-white-A700 text-xs w-auto"
                        size="txtManropeSemiBold12"
                      >
                        Top 10 In
                      </Text>
                      <Text
                        className="text-base text-white-A700 w-full"
                        size="txtManropeSemiBold16"
                      >
                        Action
                      </Text>
                    </div>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowleft.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col h-[317px] md:h-auto items-end justify-start p-[30px] sm:px-5 rounded-[12px] w-full">
                  <div className="bg-gradient3  h-full relative w-full">
                    <div className="flex flex-1 flex-row gap-2.5 h-full items-center justify-between mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[98px] sm:h-auto h-full max-h-[98px] object-cover rounded"
                        src="images/img_image_108.png"
                        alt="image"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[98px] sm:h-auto h-full max-h-[98px] object-cover rounded"
                        src="images/img_image_109.png"
                        alt="image_One"
                      />
                    </div>
                    <div className="flex flex-1 flex-row gap-2.5 h-full items-center justify-between mt-auto mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[98px] sm:h-auto h-full max-h-[98px] object-cover rounded"
                        src="images/img_image_110.png"
                        alt="image_Two"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[98px] sm:h-auto h-full max-h-[98px] object-cover rounded"
                        src="images/img_image_111.png"
                        alt="image_Three"
                      />
                    </div>
                    <div className="absolute bg-gradient3  h-[206px] inset-[0] justify-center m-auto w-full"></div>
                  </div>
                  <div className="flex flex-row gap-5 items-center justify-start w-full">
                    <div className="flex flex-1 flex-col gap-0.5 items-start justify-start w-full">
                      <Text
                        className="bg-red-A700 justify-center pb-0.5 pt-[5px] px-2 rounded text-white-A700 text-xs w-auto"
                        size="txtManropeSemiBold12"
                      >
                        Top 10 In
                      </Text>
                      <Text
                        className="text-base text-white-A700 w-full"
                        size="txtManropeSemiBold16"
                      >
                        Adventure
                      </Text>
                    </div>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowleft.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col h-[317px] md:h-auto items-end justify-start p-[30px] sm:px-5 rounded-[12px] w-full">
                  <div className="h-full relative w-full">
                    <div className="flex flex-col items-center justify-start m-auto w-full">
                      <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                        <div className="flex flex-row gap-2.5 h-full items-start justify-start w-full">
                          <Img
                            className="flex-1 md:flex-none md:h-[98px] sm:h-auto h-full max-h-[98px] object-cover rounded"
                            src="images/img_image_112.png"
                            alt="image"
                          />
                          <Img
                            className="flex-1 md:flex-none md:h-[98px] sm:h-auto h-full max-h-[98px] object-cover rounded"
                            src="images/img_image_113.png"
                            alt="image_One"
                          />
                        </div>
                        <div className="flex flex-row gap-2.5 h-full items-start justify-start w-full">
                          <Img
                            className="flex-1 md:flex-none md:h-[98px] sm:h-auto h-full max-h-[98px] object-cover rounded"
                            src="images/img_image_114.png"
                            alt="image_Two"
                          />
                          <Img
                            className="flex-1 md:flex-none md:h-[98px] sm:h-auto h-full max-h-[98px] object-cover rounded"
                            src="images/img_image_115.png"
                            alt="image_Three"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bg-gradient3  h-[206px] inset-[0] justify-center m-auto w-full"></div>
                  </div>
                  <div className="flex flex-row gap-5 items-center justify-start w-full">
                    <div className="flex flex-1 flex-col gap-0.5 items-start justify-start w-full">
                      <Text
                        className="bg-red-A700 justify-center pb-0.5 pt-[5px] px-2 rounded text-white-A700 text-xs w-auto"
                        size="txtManropeSemiBold12"
                      >
                        Top 10 In
                      </Text>
                      <Text
                        className="text-base text-white-A700 w-full"
                        size="txtManropeSemiBold16"
                      >
                        Comedy
                      </Text>
                    </div>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowleft.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col h-[317px] md:h-auto items-end justify-start p-[30px] sm:px-5 rounded-[12px] w-full">
                  <div className="bg-gradient3  h-full relative w-full">
                    <div className="flex flex-1 flex-row gap-2.5 h-full items-center justify-between mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[98px] sm:h-auto h-full max-h-[98px] object-cover rounded"
                        src="images/img_image_116.png"
                        alt="image"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[98px] sm:h-auto h-full max-h-[98px] object-cover rounded"
                        src="images/img_image_117.png"
                        alt="image_One"
                      />
                    </div>
                    <div className="flex flex-1 flex-row gap-2.5 h-full items-center justify-between mt-auto mx-auto w-full">
                      <Img
                        className="flex-1 md:flex-none md:h-[98px] sm:h-auto h-full max-h-[98px] object-cover rounded"
                        src="images/img_image_118.png"
                        alt="image_Two"
                      />
                      <Img
                        className="flex-1 md:flex-none md:h-[98px] sm:h-auto h-full max-h-[98px] object-cover rounded"
                        src="images/img_image_119.png"
                        alt="image_Three"
                      />
                    </div>
                    <div className="absolute bg-gradient3  h-[206px] inset-[0] justify-center m-auto w-full"></div>
                  </div>
                  <div className="flex flex-row gap-5 items-center justify-start w-full">
                    <div className="flex flex-1 flex-col gap-0.5 items-start justify-start w-full">
                      <Text
                        className="bg-red-A700 justify-center pb-0.5 pt-[5px] px-2 rounded text-white-A700 text-xs w-auto"
                        size="txtManropeSemiBold12"
                      >
                        Top 10 In
                      </Text>
                      <Text
                        className="text-base text-white-A700 w-full"
                        size="txtManropeSemiBold16"
                      >
                        Drama
                      </Text>
                    </div>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowleft.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
              </List>
            </div>
            <List
              className="flex flex-col gap-20 items-center w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 flex-col gap-10 items-start justify-start w-full">
                <div className="flex sm:flex-col flex-row md:gap-10 gap-[100px] items-center justify-start w-full">
                  <Text
                    className="flex-1 text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-auto"
                    size="txtManropeBold30"
                  >
                    Trending Shows Now
                  </Text>
                  <div className="bg-black-900 border border-gray-900_02 border-solid flex flex-row gap-3 items-center justify-start p-3 rounded-[10px] w-auto">
                    <Img
                      className="h-11 rounded-md w-11"
                      src="images/img_button.svg"
                      alt="button"
                    />
                    <PagerIndicator
                      className="flex gap-[3px] h-1 items-start justify-start w-[69px]"
                      count={4}
                      activeCss="inline-block cursor-pointer h-1 bg-red-A700 w-[18px] rounded-sm"
                      activeIndex={1}
                      inactiveCss="inline-block cursor-pointer h-1 bg-blue_gray-900 w-3.5 rounded-sm"
                      selectedWrapperCss="inline-block"
                      unselectedWrapperCss="inline-block"
                    />
                    <Img
                      className="h-11 rounded-md w-11"
                      src="images/img_button_gray_900_03.svg"
                      alt="button_One"
                    />
                  </div>
                </div>
                <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-start justify-start w-full">
                  <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col gap-4 h-[404px] md:h-auto items-start justify-start p-4 rounded-[10px] w-full">
                    <Img
                      className="md:h-auto h-full object-cover rounded-[10px] w-full"
                      src="images/img_image_328x252.png"
                      alt="image"
                    />
                    <div className="flex flex-row items-start justify-between w-full">
                      <Button
                        className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[86px] rounded-[14px]"
                        leftIcon={
                          <Img
                            className="h-5 mr-0.5"
                            src="images/img_icon_gray_500.svg"
                            alt="Icon"
                          />
                        }
                        shape="round"
                        color="gray_900_01"
                        size="xs"
                        variant="fill"
                      >
                        <div className="font-medium text-left text-xs">
                          8h 20min
                        </div>
                      </Button>
                      <Button
                        className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[88px] rounded-[14px]"
                        leftIcon={
                          <Img
                            className="h-5 mr-1"
                            src="images/img_icon_24x24.svg"
                            alt="Icon"
                          />
                        }
                        shape="round"
                        color="gray_900_01"
                        size="xs"
                        variant="fill"
                      >
                        <div className="font-medium text-left text-xs">
                          4 Season
                        </div>
                      </Button>
                    </div>
                  </div>
                  <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col gap-4 h-[404px] md:h-auto items-start justify-start p-4 rounded-[10px] w-full">
                    <Img
                      className="md:h-auto h-full object-cover rounded-[10px] w-full"
                      src="images/img_image_153.png"
                      alt="image_One"
                    />
                    <div className="flex flex-row items-start justify-between w-full">
                      <Button
                        className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[90px] rounded-[14px]"
                        leftIcon={
                          <Img
                            className="h-5 mr-0.5"
                            src="images/img_icon_gray_500.svg"
                            alt="Icon"
                          />
                        }
                        shape="round"
                        color="gray_900_01"
                        size="xs"
                        variant="fill"
                      >
                        <div className="font-medium text-left text-xs">
                          12h 23min
                        </div>
                      </Button>
                      <Button
                        className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[88px] rounded-[14px]"
                        leftIcon={
                          <Img
                            className="h-5 mr-1"
                            src="images/img_icon_24x24.svg"
                            alt="Icon"
                          />
                        }
                        shape="round"
                        color="gray_900_01"
                        size="xs"
                        variant="fill"
                      >
                        <div className="font-medium text-left text-xs">
                          5 Season
                        </div>
                      </Button>
                    </div>
                  </div>
                  <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col gap-4 h-[404px] md:h-auto items-start justify-start p-4 rounded-[10px] w-full">
                    <Img
                      className="md:h-auto h-full object-cover rounded-[10px] w-full"
                      src="images/img_image_154.png"
                      alt="image_Two"
                    />
                    <div className="flex flex-row items-start justify-between w-full">
                      <Button
                        className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[91px] rounded-[14px]"
                        leftIcon={
                          <Img
                            className="h-5 mr-0.5"
                            src="images/img_icon_gray_500.svg"
                            alt="Icon"
                          />
                        }
                        shape="round"
                        color="gray_900_01"
                        size="xs"
                        variant="fill"
                      >
                        <div className="font-medium text-left text-xs">
                          14h 30min
                        </div>
                      </Button>
                      <Button
                        className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[88px] rounded-[14px]"
                        leftIcon={
                          <Img
                            className="h-5 mr-1"
                            src="images/img_icon_24x24.svg"
                            alt="Icon"
                          />
                        }
                        shape="round"
                        color="gray_900_01"
                        size="xs"
                        variant="fill"
                      >
                        <div className="font-medium text-left text-xs">
                          3 Season
                        </div>
                      </Button>
                    </div>
                  </div>
                  <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col gap-4 h-[404px] md:h-auto items-start justify-start p-4 rounded-[10px] w-full">
                    <Img
                      className="md:h-auto h-full object-cover rounded-[10px] w-full"
                      src="images/img_image_155.png"
                      alt="image_Three"
                    />
                    <div className="flex flex-row items-start justify-between w-full">
                      <Button
                        className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[86px] rounded-[14px]"
                        leftIcon={
                          <Img
                            className="h-5 mr-0.5"
                            src="images/img_icon_gray_500.svg"
                            alt="Icon"
                          />
                        }
                        shape="round"
                        color="gray_900_01"
                        size="xs"
                        variant="fill"
                      >
                        <div className="font-medium text-left text-xs">
                          7h 40min
                        </div>
                      </Button>
                      <Button
                        className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[88px] rounded-[14px]"
                        leftIcon={
                          <Img
                            className="h-5 mr-1"
                            src="images/img_icon_24x24.svg"
                            alt="Icon"
                          />
                        }
                        shape="round"
                        color="gray_900_01"
                        size="xs"
                        variant="fill"
                      >
                        <div className="font-medium text-left text-xs">
                          2 Season
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-10 items-start justify-start w-full">
                <div className="flex sm:flex-col flex-row md:gap-10 gap-[100px] items-center justify-start w-full">
                  <Text
                    className="flex-1 text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-auto"
                    size="txtManropeBold30"
                  >
                    New Released Shows
                  </Text>
                  <div className="bg-black-900 border border-gray-900_02 border-solid flex flex-row gap-3 items-center justify-start p-3 rounded-[10px] w-auto">
                    <Img
                      className="h-11 rounded-md w-11"
                      src="images/img_button.svg"
                      alt="button"
                    />
                    <PagerIndicator
                      className="flex gap-[3px] h-1 items-start justify-start w-[69px]"
                      count={4}
                      activeCss="inline-block cursor-pointer h-1 bg-red-A700 w-[18px] rounded-sm"
                      activeIndex={1}
                      inactiveCss="inline-block cursor-pointer h-1 bg-blue_gray-900 w-3.5 rounded-sm"
                      selectedWrapperCss="inline-block"
                      unselectedWrapperCss="inline-block"
                    />
                    <Img
                      className="h-11 rounded-md w-11"
                      src="images/img_button_gray_900_03.svg"
                      alt="button_One"
                    />
                  </div>
                </div>
                <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-start justify-start w-full">
                  <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col gap-4 h-[404px] md:h-auto items-start justify-start p-4 rounded-[10px] w-full">
                    <Img
                      className="md:h-auto h-full object-cover rounded-[10px] w-full"
                      src="images/img_image_156.png"
                      alt="image"
                    />
                    <div className="flex flex-row items-start justify-between w-full">
                      <Button
                        className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[90px] rounded-[14px]"
                        leftIcon={
                          <Img
                            className="h-5 mr-0.5"
                            src="images/img_icon_gray_500.svg"
                            alt="Icon"
                          />
                        }
                        shape="round"
                        color="gray_900_01"
                        size="xs"
                        variant="fill"
                      >
                        <div className="font-medium text-left text-xs">
                          12h 23min
                        </div>
                      </Button>
                      <Button
                        className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[88px] rounded-[14px]"
                        leftIcon={
                          <Img
                            className="h-5 mr-1"
                            src="images/img_icon_24x24.svg"
                            alt="Icon"
                          />
                        }
                        shape="round"
                        color="gray_900_01"
                        size="xs"
                        variant="fill"
                      >
                        <div className="font-medium text-left text-xs">
                          5 Season
                        </div>
                      </Button>
                    </div>
                  </div>
                  <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col gap-4 h-[404px] md:h-auto items-start justify-start p-4 rounded-[10px] w-full">
                    <Img
                      className="md:h-auto h-full object-cover rounded-[10px] w-full"
                      src="images/img_image_157.png"
                      alt="image_One"
                    />
                    <div className="flex flex-row items-start justify-between w-full">
                      <Button
                        className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[86px] rounded-[14px]"
                        leftIcon={
                          <Img
                            className="h-5 mr-0.5"
                            src="images/img_icon_gray_500.svg"
                            alt="Icon"
                          />
                        }
                        shape="round"
                        color="gray_900_01"
                        size="xs"
                        variant="fill"
                      >
                        <div className="font-medium text-left text-xs">
                          7h 40min
                        </div>
                      </Button>
                      <Button
                        className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[88px] rounded-[14px]"
                        leftIcon={
                          <Img
                            className="h-5 mr-1"
                            src="images/img_icon_24x24.svg"
                            alt="Icon"
                          />
                        }
                        shape="round"
                        color="gray_900_01"
                        size="xs"
                        variant="fill"
                      >
                        <div className="font-medium text-left text-xs">
                          2 Season
                        </div>
                      </Button>
                    </div>
                  </div>
                  <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col gap-4 h-[404px] md:h-auto items-start justify-start p-4 rounded-[10px] w-full">
                    <Img
                      className="md:h-auto h-full object-cover rounded-[10px] w-full"
                      src="images/img_image_158.png"
                      alt="image_Two"
                    />
                    <div className="flex flex-row items-start justify-between w-full">
                      <Button
                        className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[86px] rounded-[14px]"
                        leftIcon={
                          <Img
                            className="h-5 mr-0.5"
                            src="images/img_icon_gray_500.svg"
                            alt="Icon"
                          />
                        }
                        shape="round"
                        color="gray_900_01"
                        size="xs"
                        variant="fill"
                      >
                        <div className="font-medium text-left text-xs">
                          8h 20min
                        </div>
                      </Button>
                      <Button
                        className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[88px] rounded-[14px]"
                        leftIcon={
                          <Img
                            className="h-5 mr-1"
                            src="images/img_icon_24x24.svg"
                            alt="Icon"
                          />
                        }
                        shape="round"
                        color="gray_900_01"
                        size="xs"
                        variant="fill"
                      >
                        <div className="font-medium text-left text-xs">
                          4 Season
                        </div>
                      </Button>
                    </div>
                  </div>
                  <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col gap-4 h-[404px] md:h-auto items-start justify-start p-4 rounded-[10px] w-full">
                    <Img
                      className="md:h-auto h-full object-cover rounded-[10px] w-full"
                      src="images/img_image_159.png"
                      alt="image_Three"
                    />
                    <div className="flex flex-row items-start justify-between w-full">
                      <Button
                        className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[91px] rounded-[14px]"
                        leftIcon={
                          <Img
                            className="h-5 mr-0.5"
                            src="images/img_icon_gray_500.svg"
                            alt="Icon"
                          />
                        }
                        shape="round"
                        color="gray_900_01"
                        size="xs"
                        variant="fill"
                      >
                        <div className="font-medium text-left text-xs">
                          10h 30min
                        </div>
                      </Button>
                      <Button
                        className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[88px] rounded-[14px]"
                        leftIcon={
                          <Img
                            className="h-5 mr-1"
                            src="images/img_icon_24x24.svg"
                            alt="Icon"
                          />
                        }
                        shape="round"
                        color="gray_900_01"
                        size="xs"
                        variant="fill"
                      >
                        <div className="font-medium text-left text-xs">
                          3 Season
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </List>
            <div className="flex flex-col gap-10 items-start justify-start w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 gap-[100px] items-center justify-start w-full">
                <Text
                  className="flex-1 text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-auto"
                  size="txtManropeBold30"
                >
                  Must - Watch Shows
                </Text>
                <div className="bg-black-900 border border-gray-900_02 border-solid flex flex-row gap-3 items-center justify-start p-3 rounded-[10px] w-auto">
                  <Img
                    className="h-11 rounded-md w-11"
                    src="images/img_button.svg"
                    alt="button_Fourteen"
                  />
                  <PagerIndicator
                    className="flex gap-[3px] h-1 items-start justify-start w-[69px]"
                    count={4}
                    activeCss="inline-block cursor-pointer h-1 bg-red-A700 w-[18px] rounded-sm"
                    activeIndex={1}
                    inactiveCss="inline-block cursor-pointer h-1 bg-blue_gray-900 w-3.5 rounded-sm"
                    selectedWrapperCss="inline-block"
                    unselectedWrapperCss="inline-block"
                  />
                  <Img
                    className="h-11 rounded-md w-11"
                    src="images/img_button_gray_900_03.svg"
                    alt="button_Fifteen"
                  />
                </div>
              </div>
              <List
                className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start w-full"
                orientation="horizontal"
              >
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col gap-4 h-[404px] md:h-auto items-start justify-start p-4 rounded-[10px] w-full">
                  <Img
                    className="md:h-auto h-full object-cover rounded-[10px] w-full"
                    src="images/img_image_324x252.png"
                    alt="image"
                  />
                  <div className="flex flex-row items-center justify-between w-full">
                    <Button
                      className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[90px] rounded-[16px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-0.5"
                          src="images/img_icon_gray_500.svg"
                          alt="Icon"
                        />
                      }
                      shape="round"
                      color="gray_900_01"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-medium text-left text-xs">
                        7h 40min
                      </div>
                    </Button>
                    <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-row gap-1 items-center justify-start px-2.5 py-1.5 rounded-[15px] w-auto">
                      <div className="flex flex-row gap-px items-start justify-start w-auto">
                        <Img
                          className="h-3.5 w-3.5"
                          src="images/img_shape_22.svg"
                          alt="shape"
                        />
                        <Img
                          className="h-3.5 w-3.5"
                          src="images/img_shape_23.svg"
                          alt="shape_One"
                        />
                        <Img
                          className="h-3.5 w-3.5"
                          src="images/img_shape_24.svg"
                          alt="shape_Two"
                        />
                        <Img
                          className="h-3.5 w-3.5"
                          src="images/img_shape_25.svg"
                          alt="shape_Three"
                        />
                        <Img
                          className="h-3.5 w-3.5"
                          src="images/img_user.svg"
                          alt="user"
                        />
                      </div>
                      <Text
                        className="text-gray-500 text-xs w-auto"
                        size="txtManropeMedium12"
                      >
                        12K
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col gap-4 h-[404px] md:h-auto items-start justify-start p-4 rounded-[10px] w-full">
                  <Img
                    className="md:h-auto h-full object-cover rounded-[10px] w-full"
                    src="images/img_image_160.png"
                    alt="image"
                  />
                  <div className="flex flex-row items-center justify-between w-full">
                    <Button
                      className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[94px] rounded-[16px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-0.5"
                          src="images/img_icon_gray_500.svg"
                          alt="Icon"
                        />
                      }
                      shape="round"
                      color="gray_900_01"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-medium text-left text-xs">
                        12h 23min
                      </div>
                    </Button>
                    <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-row gap-1 items-center justify-start px-2.5 py-1.5 rounded-[15px] w-auto">
                      <div className="flex flex-row items-start justify-start w-auto">
                        <RatingBar
                          className="flex justify-between w-[74px]"
                          value={5}
                          starCount={5}
                          activeColor="#e50000"
                          size={14}
                        ></RatingBar>
                      </div>
                      <Text
                        className="text-gray-500 text-xs w-auto"
                        size="txtManropeMedium12"
                      >
                        28K
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col gap-4 h-[404px] md:h-auto items-start justify-start p-4 rounded-[10px] w-full">
                  <Img
                    className="md:h-auto h-full object-cover rounded-[10px] w-full"
                    src="images/img_image_161.png"
                    alt="image"
                  />
                  <div className="flex flex-row items-center justify-between w-full">
                    <Button
                      className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[95px] rounded-[16px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-0.5"
                          src="images/img_icon_gray_500.svg"
                          alt="Icon"
                        />
                      }
                      shape="round"
                      color="gray_900_01"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-medium text-left text-xs">
                        10h 30min
                      </div>
                    </Button>
                    <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-row gap-1 items-center justify-start px-2.5 py-1.5 rounded-[15px] w-auto">
                      <div className="flex flex-row items-start justify-start w-auto">
                        <RatingBar
                          className="flex justify-between w-[74px]"
                          value={4}
                          starCount={5}
                          color="#999999"
                          activeColor="#e50000"
                          size={14}
                        ></RatingBar>
                      </div>
                      <Text
                        className="text-gray-500 text-xs w-auto"
                        size="txtManropeMedium12"
                      >
                        2K
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-1 flex-col gap-4 h-[404px] md:h-auto items-start justify-start p-4 rounded-[10px] w-full">
                  <Img
                    className="md:h-auto h-full object-cover rounded-[10px] w-full"
                    src="images/img_image_328x252.png"
                    alt="image"
                  />
                  <div className="flex flex-row items-center justify-between w-full">
                    <Button
                      className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[90px] rounded-[16px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-0.5"
                          src="images/img_icon_gray_500.svg"
                          alt="Icon"
                        />
                      }
                      shape="round"
                      color="gray_900_01"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-medium text-left text-xs">
                        8h 20min
                      </div>
                    </Button>
                    <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-row gap-1 items-center justify-start px-2.5 py-1.5 rounded-[15px] w-auto">
                      <div className="flex flex-row gap-px items-start justify-start w-auto">
                        <Img
                          className="h-3.5 w-3.5"
                          src="images/img_shape_26.svg"
                          alt="shape"
                        />
                        <Img
                          className="h-3.5 w-3.5"
                          src="images/img_shape_27.svg"
                          alt="shape_One"
                        />
                        <Img
                          className="h-3.5 w-3.5"
                          src="images/img_shape_28.svg"
                          alt="shape_Two"
                        />
                        <Img
                          className="h-3.5 w-3.5"
                          src="images/img_shape_29.svg"
                          alt="shape_Three"
                        />
                        <Img
                          className="h-3.5 w-3.5"
                          src="images/img_user.svg"
                          alt="user"
                        />
                      </div>
                      <Text
                        className="text-gray-500 text-xs w-auto"
                        size="txtManropeMedium12"
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
        <div className="bg-black-900 border border-gray-900 border-solid flex flex-col items-center justify-start max-w-7xl mt-[120px] mx-auto md:px-5 px-[60px] py-20 rounded-[12px] w-full">
          <div className="flex h-[236px] md:h-[250px] sm:h-[817px] justify-end relative rounded-[12px] w-[1280px] md:w-full">
            <div className="absolute flex sm:flex-col flex-row gap-5 h-full inset-x-[0] items-center justify-between mx-auto top-[0] w-full">
              <Img
                className="flex-1 md:h-auto h-full max-h-[13px] object-cover sm:w-[]"
                src="images/img_image_42x165.png"
                alt="image_One"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[13px] object-cover sm:w-[]"
                src="images/img_image_54.png"
                alt="image_Two"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[13px] object-cover sm:w-[]"
                src="images/img_image_55.png"
                alt="image_Three"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[13px] object-cover sm:w-[]"
                src="images/img_image_56.png"
                alt="image_Four"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[13px] object-cover sm:w-[]"
                src="images/img_image_57.png"
                alt="image_Five"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[13px] object-cover sm:w-[]"
                src="images/img_image_58.png"
                alt="image_Six"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[13px] object-cover sm:w-[]"
                src="images/img_image_59.png"
                alt="image_Seven"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[13px] object-cover sm:w-[]"
                src="images/img_image_60.png"
                alt="image_Eight"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[13px] object-cover sm:w-[]"
                src="images/img_image_42x115.png"
                alt="image_Nine"
              />
            </div>
            <div className="absolute flex sm:flex-col flex-row gap-5 h-full inset-x-[0] items-center justify-between mx-auto top-[14%] w-full">
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_83x165.png"
                alt="image_Ten"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_61.png"
                alt="image_Eleven"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_62.png"
                alt="image_Twelve"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_63.png"
                alt="image_Thirteen"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_64.png"
                alt="image_Fourteen"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_65.png"
                alt="image_Fifteen"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_66.png"
                alt="image_Sixteen"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_67.png"
                alt="image_Seventeen"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_83x115.png"
                alt="image_Eighteen"
              />
            </div>
            <div className="absolute bottom-[15%] flex sm:flex-col flex-row gap-5 h-full inset-x-[0] items-center justify-between mx-auto w-full">
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_68.png"
                alt="image_Nineteen"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_69.png"
                alt="image_Twenty"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_70.png"
                alt="image_TwentyOne"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_71.png"
                alt="image_TwentyTwo"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_72.png"
                alt="image_TwentyThree"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_73.png"
                alt="image_TwentyFour"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_74.png"
                alt="image_TwentyFive"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_75.png"
                alt="image_TwentySix"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_76.png"
                alt="image_TwentySeven"
              />
            </div>
            <div className="flex sm:flex-col flex-row gap-5 h-full items-center justify-between mt-auto mx-auto w-full">
              <Img
                className="flex-1 md:h-auto h-full max-h-3.5 object-cover sm:w-[]"
                src="images/img_image_77.png"
                alt="image_TwentyEight"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-3.5 object-cover sm:w-[]"
                src="images/img_image_78.png"
                alt="image_TwentyNine"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-3.5 object-cover sm:w-[]"
                src="images/img_image_79.png"
                alt="image_Thirty"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-3.5 object-cover sm:w-[]"
                src="images/img_image_80.png"
                alt="image_ThirtyOne"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-3.5 object-cover sm:w-[]"
                src="images/img_image_81.png"
                alt="image_ThirtyTwo"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-3.5 object-cover sm:w-[]"
                src="images/img_image_82.png"
                alt="image_ThirtyThree"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-3.5 object-cover sm:w-[]"
                src="images/img_image_83.png"
                alt="image_ThirtyFour"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-3.5 object-cover sm:w-[]"
                src="images/img_image_84.png"
                alt="image_ThirtyFive"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-3.5 object-cover sm:w-[]"
                src="images/img_image_85.png"
                alt="image_ThirtySix"
              />
            </div>
            <div className="absolute inset-[0] justify-center m-auto rounded-[12px] w-full">
              <div className="absolute bg-gradient6  h-[250px] inset-[0] justify-center m-auto w-full"></div>
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between m-auto relative w-[91%]">
                <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-full"
                    size="txtManropeBold28"
                  >
                    Start your free trial today!
                  </Text>
                  <Text
                    className="text-base text-gray-500 w-full"
                    size="txtManropeRegular16"
                  >
                    This is a clear and concise call to action that encourages
                    users to sign up for a free trial of StreamVibe.
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-semibold min-w-[149px] md:mt-0 my-[13px] rounded-lg text-center text-sm"
                  color="red_A700"
                  size="md"
                  variant="fill"
                >
                  Start a Free Trail
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Footer1 className="bg-black-900 flex gap-20 items-center justify-center mt-[120px] pb-10 pt-20 px-20 md:px-5 w-full" />
      </div>
    </>
  );
};

export default MoviesShowsPageLaptopPage;
