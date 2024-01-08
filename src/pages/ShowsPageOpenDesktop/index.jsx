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

const ShowsPageOpenDesktopPage = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-gray-900_01 flex flex-col font-manrope items-center justify-start mx-auto w-full">
        <Header className="flex md:flex-col flex-row md:gap-10 items-center justify-between md:px-5 px-[162px] py-[30px] w-full" />
        <div
          className="bg-cover bg-gradient7  bg-no-repeat border border-solid flex flex-col gap-[30px] gray_900_gray_900_00_02_border5 h-[835px] md:h-auto items-center justify-end max-w-[1594px] mt-[50px] mx-auto pb-5 pt-[50px] md:px-5 px-[50px] rounded-[12px] w-full"
          style={{ backgroundImage: "url('images/img_container_2.png')" }}
        >
          <div className="flex flex-col gap-1 items-center justify-start md:px-10 sm:px-5 px-[120px] w-full">
            <Text
              className="md:text-4xl sm:text-[34px] text-[38px] text-center text-white-A700 w-full"
              size="txtManropeBold38"
            >
              Stranger Things
            </Text>
            <Text
              className="text-center text-gray-500 text-lg w-full"
              size="txtManropeRegular18"
            >
              When a young boy vanishes, a small town uncovers a mystery
              involving secret experiments, terrifying supernatural forces and
              one strange little girl.
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
              <div className="font-semibold text-left text-lg">Play Now</div>
            </Button>
            <Img
              className="h-14 w-[188px]"
              src="images/img_buttonscontainer_black_900.svg"
              alt="buttonscontaine_One"
            />
          </div>
        </div>
        <div className="flex md:flex-col flex-row gap-5 items-start justify-start max-w-[1601px] mt-[100px] mx-auto md:px-5 w-full">
          <div className="flex flex-1 flex-col gap-[30px] items-end justify-start w-full">
            <div className="bg-gray-900_03 flex flex-col gap-10 items-start justify-start p-10 sm:px-5 rounded-[12px] w-full">
              <Text
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
                size="txtManropeSemiBold24"
              >
                Seasons and Episodes
              </Text>
              <div className="flex flex-col gap-5 items-start justify-start w-full">
                <div className="bg-black-900 border border-gray-900 border-solid flex flex-row sm:gap-10 items-center justify-between md:px-10 sm:px-5 px-[50px] py-6 rounded-[12px] w-full">
                  <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                      size="txtManropeSemiBold24"
                    >
                      Season 01
                    </Text>
                    <Text
                      className="text-gray-500 text-lg w-auto"
                      size="txtManropeMedium18"
                    >
                      9 Episodes
                    </Text>
                  </div>
                  <Button
                    className="border border-gray-900 border-solid flex h-[52px] items-center justify-center w-[52px]"
                    shape="circle"
                    color="gray_900_01"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-6"
                      src="images/img_arrowdown.svg"
                      alt="arrowdown"
                    />
                  </Button>
                </div>
                <div className="bg-black-900 border border-gray-900 border-solid flex flex-col gap-[30px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full">
                  <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                      <Text
                        className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                        size="txtManropeSemiBold24"
                      >
                        Season 02
                      </Text>
                      <Text
                        className="text-gray-500 text-lg w-auto"
                        size="txtManropeMedium18"
                      >
                        5 Episodes
                      </Text>
                    </div>
                    <Button
                      className="border border-gray-900 border-solid flex h-[52px] items-center justify-center w-[52px]"
                      shape="circle"
                      color="gray_900_01"
                      size="md"
                      variant="fill"
                    >
                      <Img
                        className="h-6"
                        src="images/img_icon_gray_500_52x52.svg"
                        alt="icon"
                      />
                    </Button>
                  </div>
                  <List
                    className="flex flex-col items-start w-full"
                    orientation="vertical"
                  >
                    <div className="border-gray-900 border-solid border-y flex flex-1 md:flex-col flex-row gap-5 items-center justify-start my-0 py-10 w-full">
                      <Text
                        className="text-3xl sm:text-[26px] md:text-[28px] text-gray-500 w-auto"
                        size="txtManropeSemiBold30Gray500"
                      >
                        01
                      </Text>
                      <Img
                        className="h-[118px] md:h-auto max-h-[118px] object-cover rounded-[12px] sm:w-[] md:w-[]"
                        src="images/img_subcontainer.png"
                        alt="subcontainer"
                      />
                      <div className="flex flex-1 flex-col gap-3.5 items-start justify-start w-full">
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                          <Text
                            className="flex-1 text-white-A700 text-xl w-auto"
                            size="txtManropeSemiBold20"
                          >
                            Chapter One : The Vanishing of Will Byers
                          </Text>
                          <Button
                            className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[98px] rounded-lg"
                            leftIcon={
                              <Img
                                className="h-6 mr-1"
                                src="images/img_icon_9.svg"
                                alt="Icon"
                              />
                            }
                            color="gray_900_01"
                            size="xs"
                            variant="fill"
                          >
                            <div className="font-medium text-base text-left">
                              49 min
                            </div>
                          </Button>
                        </div>
                        <Text
                          className="leading-[150.00%] max-w-[610px] md:max-w-full text-gray-500 text-lg"
                          size="txtManropeRegular18"
                        >
                          On his way from a friend’s house, young Will sees
                          something terrifying . Nearby, a sinister secret lurks
                          in the depths of a government lab.
                        </Text>
                      </div>
                    </div>
                    <div className="border-b border-gray-900 border-solid flex flex-1 md:flex-col flex-row gap-5 items-center justify-start my-0 py-10 w-full">
                      <Text
                        className="text-3xl sm:text-[26px] md:text-[28px] text-gray-500 w-auto"
                        size="txtManropeSemiBold30Gray500"
                      >
                        02
                      </Text>
                      <Img
                        className="h-[118px] md:h-auto max-h-[118px] object-cover rounded-[12px] sm:w-[] md:w-[]"
                        src="images/img_subcontainer_118x172.png"
                        alt="subcontainer"
                      />
                      <div className="flex flex-1 flex-col gap-3.5 items-start justify-start w-full">
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                          <Text
                            className="flex-1 text-white-A700 text-xl w-auto"
                            size="txtManropeSemiBold20"
                          >
                            Chapter Two: The Weirdo on Maple Street
                          </Text>
                          <Button
                            className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[98px] rounded-lg"
                            leftIcon={
                              <Img
                                className="h-6 mr-1"
                                src="images/img_icon_9.svg"
                                alt="Icon"
                              />
                            }
                            color="gray_900_01"
                            size="xs"
                            variant="fill"
                          >
                            <div className="font-medium text-base text-left">
                              56 min
                            </div>
                          </Button>
                        </div>
                        <Text
                          className="leading-[150.00%] max-w-[610px] md:max-w-full text-gray-500 text-lg"
                          size="txtManropeRegular18"
                        >
                          Lucas, Mike and Dustin try to talk to the girl they
                          found in the woods. Hopper questions an anxious Joyce
                          about an unsettling phone call.
                        </Text>
                      </div>
                    </div>
                    <div className="border-b border-gray-900 border-solid flex flex-1 md:flex-col flex-row gap-5 items-center justify-start my-0 py-10 w-full">
                      <Text
                        className="text-3xl sm:text-[26px] md:text-[28px] text-gray-500 w-auto"
                        size="txtManropeSemiBold30Gray500"
                      >
                        03
                      </Text>
                      <Img
                        className="h-[118px] md:h-auto max-h-[118px] object-cover rounded-[12px] sm:w-[] md:w-[]"
                        src="images/img_subcontainer_1.png"
                        alt="subcontainer"
                      />
                      <div className="flex flex-1 flex-col gap-3.5 items-start justify-start w-full">
                        <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                          <Text
                            className="flex-1 text-white-A700 text-xl w-auto"
                            size="txtManropeSemiBold20"
                          >
                            Chapter Three: Holly, Jolly
                          </Text>
                          <Button
                            className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[97px] rounded-lg"
                            leftIcon={
                              <Img
                                className="h-6 mr-1"
                                src="images/img_icon_9.svg"
                                alt="Icon"
                              />
                            }
                            color="gray_900_01"
                            size="xs"
                            variant="fill"
                          >
                            <div className="font-medium text-base text-left">
                              52 min
                            </div>
                          </Button>
                        </div>
                        <Text
                          className="leading-[150.00%] max-w-[610px] md:max-w-full text-gray-500 text-lg"
                          size="txtManropeRegular18"
                        >
                          <>
                            An increasingly concerned Nancy looks for Barb and
                            finds out what Jonathan&#39;s been up to. Joyce is
                            convinced Will is trying to talk to her.
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="border-b border-gray-900 border-solid flex flex-1 md:flex-col flex-row gap-5 items-center justify-start my-0 py-10 w-full">
                      <Text
                        className="text-3xl sm:text-[26px] md:text-[28px] text-gray-500 w-auto"
                        size="txtManropeSemiBold30Gray500"
                      >
                        04
                      </Text>
                      <Img
                        className="h-[118px] md:h-auto max-h-[118px] object-cover rounded-[12px] sm:w-[] md:w-[]"
                        src="images/img_subcontainer_2.png"
                        alt="subcontainer"
                      />
                      <div className="flex flex-1 flex-col gap-3.5 items-start justify-start w-full">
                        <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                          <Text
                            className="flex-1 text-white-A700 text-xl w-auto"
                            size="txtManropeSemiBold20"
                          >
                            Chapter Four: The Body
                          </Text>
                          <Button
                            className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[95px] rounded-lg"
                            leftIcon={
                              <Img
                                className="h-6 mr-1"
                                src="images/img_icon_9.svg"
                                alt="Icon"
                              />
                            }
                            color="gray_900_01"
                            size="xs"
                            variant="fill"
                          >
                            <div className="font-medium text-base text-left">
                              51 min
                            </div>
                          </Button>
                        </div>
                        <Text
                          className="leading-[150.00%] max-w-[610px] md:max-w-full text-gray-500 text-lg"
                          size="txtManropeRegular18"
                        >
                          Refusing to believe Will is dead, Joyce tries to
                          connect with her son. The boys give Eleven a
                          makeover..
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-1 md:flex-col flex-row gap-5 items-center justify-start my-0 pt-10 w-full">
                      <Text
                        className="text-3xl sm:text-[26px] md:text-[28px] text-gray-500 w-auto"
                        size="txtManropeSemiBold30Gray500"
                      >
                        05
                      </Text>
                      <Img
                        className="h-[118px] md:h-auto max-h-[118px] object-cover rounded-[12px] sm:w-[] md:w-[]"
                        src="images/img_subcontainer_3.png"
                        alt="subcontainer"
                      />
                      <div className="flex flex-1 flex-col gap-3.5 items-start justify-start w-full">
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                          <Text
                            className="flex-1 text-white-A700 text-xl w-auto"
                            size="txtManropeSemiBold20"
                          >
                            Chapter Five: The Flea and the Acrobat
                          </Text>
                          <Button
                            className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[97px] rounded-lg"
                            leftIcon={
                              <Img
                                className="h-6 mr-1"
                                src="images/img_icon_9.svg"
                                alt="Icon"
                              />
                            }
                            color="gray_900_01"
                            size="xs"
                            variant="fill"
                          >
                            <div className="font-medium text-base text-left">
                              53 min
                            </div>
                          </Button>
                        </div>
                        <Text
                          className="leading-[150.00%] max-w-[610px] md:max-w-full text-gray-500 text-lg"
                          size="txtManropeRegular18"
                        >
                          Hopper breaks into the lab while Nancy and Jonathan
                          confront the force that took Will. The boys ask Mr.
                          Clarke how to travel to another dimension.
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
                <div className="bg-black-900 border border-gray-900 border-solid flex flex-row sm:gap-10 items-center justify-between md:px-10 sm:px-5 px-[50px] py-6 rounded-[12px] w-full">
                  <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                      size="txtManropeSemiBold24"
                    >
                      Season 03
                    </Text>
                    <Text
                      className="text-gray-500 text-lg w-auto"
                      size="txtManropeMedium18"
                    >
                      7 Episodes
                    </Text>
                  </div>
                  <Button
                    className="border border-gray-900 border-solid flex h-[52px] items-center justify-center w-[52px]"
                    shape="circle"
                    color="gray_900_01"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-6"
                      src="images/img_arrowdown.svg"
                      alt="arrowdown_One"
                    />
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-col gap-3.5 items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full">
              <Text
                className="text-gray-500 text-lg w-full"
                size="txtManropeMedium18"
              >
                Description
              </Text>
              <Text
                className="leading-[150.00%] max-w-[962px] md:max-w-full text-lg text-white-A700"
                size="txtManropeMedium18WhiteA700"
              >
                When a young boy vanishes, a small town uncovers a mystery
                involving secret experiments, terrifying supernatural forces and
                one strange little girl.
              </Text>
            </div>
            <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-col font-archivo gap-[30px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full">
              <div className="flex flex-row gap-[30px] items-center justify-start w-full">
                <Text
                  className="flex-1 text-gray-500 text-lg w-auto"
                  size="txtArchivoRomanMedium18"
                >
                  Cast
                </Text>
                <Img
                  className="h-[52px] w-[114px]"
                  src="images/img_buttonscontainer_gray_900_01.svg"
                  alt="buttonscontaine_Two"
                />
              </div>
              <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-4 grid-cols-8 items-start justify-start w-full">
                <Img
                  className="flex-1 md:flex-none h-[109px] sm:h-auto max-h-[109px] object-cover rounded-[12px]"
                  src="images/img_image_178.png"
                  alt="image_Three"
                />
                <Img
                  className="flex-1 md:flex-none h-[109px] sm:h-auto max-h-[109px] object-cover rounded-[12px]"
                  src="images/img_image_179.png"
                  alt="image_Four"
                />
                <Img
                  className="flex-1 md:flex-none h-[109px] sm:h-auto max-h-[109px] object-cover rounded-[12px]"
                  src="images/img_image_180.png"
                  alt="image_Five"
                />
                <Img
                  className="flex-1 md:flex-none h-[109px] sm:h-auto max-h-[109px] object-cover rounded-[12px]"
                  src="images/img_image_181.png"
                  alt="image_Six"
                />
                <Img
                  className="flex-1 md:flex-none h-[109px] sm:h-auto max-h-[109px] object-cover rounded-[12px]"
                  src="images/img_image_182.png"
                  alt="image_Seven"
                />
                <Img
                  className="flex-1 md:flex-none h-[109px] sm:h-auto max-h-[109px] object-cover rounded-[12px]"
                  src="images/img_image_183.png"
                  alt="image_Eight"
                />
                <Img
                  className="flex-1 md:flex-none h-[109px] sm:h-auto max-h-[109px] object-cover rounded-[12px]"
                  src="images/img_image_184.png"
                  alt="image_Nine"
                />
                <Img
                  className="flex-1 md:flex-none h-[109px] sm:h-auto max-h-[109px] object-cover rounded-[12px]"
                  src="images/img_image_185.png"
                  alt="image_Ten"
                />
              </div>
            </div>
            <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-col font-manrope gap-10 items-center justify-center p-[50px] md:px-10 sm:px-5 rounded-[12px] w-full">
              <div className="flex flex-row gap-3.5 items-center justify-start w-full">
                <Text
                  className="flex-1 text-gray-500 text-lg w-auto"
                  size="txtManropeMedium18"
                >
                  Reviews
                </Text>
                <Button
                  className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[204px] rounded-lg"
                  leftIcon={
                    <Img
                      className="h-[30px] mr-1"
                      src="images/img_icon_30x30.svg"
                      alt="Icon"
                    />
                  }
                  color="gray_900_01"
                  size="md"
                  variant="fill"
                >
                  <div className="!text-white-A700 font-medium text-left text-lg">
                    Add Your Review
                  </div>
                </Button>
              </div>
              <Slider
                autoPlay
                autoPlayInterval={2000}
                activeIndex={sliderState}
                responsive={{
                  0: { items: 1 },
                  550: { items: 1 },
                  1050: { items: 2 },
                }}
                onSlideChanged={(e) => {
                  setsliderState(e?.item);
                }}
                ref={sliderRef}
                className="flex gap-5 w-full"
                items={[...Array(8)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <div className="bg-black-900 border border-gray-900 border-solid flex flex-1 flex-col gap-5 items-start justify-start mx-2.5 p-10 sm:px-5 rounded-[12px]">
                      <div className="flex sm:flex-col flex-row gap-[41px] items-center justify-start w-full">
                        <div className="flex flex-1 flex-col items-start justify-center w-full">
                          <Text
                            className="text-white-A700 text-xl w-full"
                            size="txtManropeMedium20"
                          >
                            Aniket Roy
                          </Text>
                          <Text
                            className="text-gray-500 text-lg w-full"
                            size="txtManropeMedium18"
                          >
                            From India
                          </Text>
                        </div>
                        <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-row gap-1 items-center justify-start px-2.5 py-1.5 rounded-[19px] w-auto">
                          <div className="flex flex-row gap-0.5 items-start justify-start w-auto">
                            <Img
                              className="h-[18px] w-[18px]"
                              src="images/img_shape_45.svg"
                              alt="shape"
                            />
                            <Img
                              className="h-[18px] w-[18px]"
                              src="images/img_shape_46.svg"
                              alt="shape_One"
                            />
                            <Img
                              className="h-[18px] w-[18px]"
                              src="images/img_shape_47.svg"
                              alt="shape_Two"
                            />
                            <Img
                              className="h-[18px] w-[18px]"
                              src="images/img_shape_48.svg"
                              alt="shape_Three"
                            />
                            <Img
                              className="h-4 w-[17px]"
                              src="images/img_user.svg"
                              alt="user"
                            />
                          </div>
                          <Text
                            className="text-gray-500 text-lg"
                            size="txtManropeMedium18"
                          >
                            4.5
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="leading-[150.00%] max-w-[391px] md:max-w-full text-gray-500 text-lg"
                        size="txtManropeRegular18"
                      >
                        This movie was recommended to me by a very dear friend
                        who went for the movie by herself. I went to the cinemas
                        to watch but had a houseful board so couldn’t watch it.
                      </Text>
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
              <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                <Img
                  className="rounded-[50%] w-[52px]"
                  src="images/img_button_gray_900_01.svg"
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
                  className="rounded-[50%] w-[52px]"
                  src="images/img_button_gray_900_01_52x52.svg"
                  alt="button_One"
                />
              </div>
            </div>
          </div>
          <div className="bg-gray-900_03 border border-gray-900 border-solid flex sm:flex-1 flex-col gap-[30px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[12px] w-[519px] sm:w-full">
            <div className="flex flex-col gap-3.5 items-start justify-start w-full">
              <div className="flex flex-row gap-1 items-center justify-start w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_icon_7.svg"
                  alt="icon_Two"
                />
                <Text
                  className="flex-1 text-gray-500 text-lg w-auto"
                  size="txtManropeMedium18"
                >
                  Released Year
                </Text>
              </div>
              <Text
                className="text-white-A700 text-xl w-full"
                size="txtManropeSemiBold20"
              >
                2022
              </Text>
            </div>
            <div className="flex flex-col gap-3.5 items-start justify-start w-full">
              <div className="flex flex-row gap-1 items-center justify-start w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowright_gray_500.svg"
                  alt="arrowright"
                />
                <Text
                  className="flex-1 text-gray-500 text-lg w-auto"
                  size="txtManropeMedium18"
                >
                  Available Languages
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col gap-2.5 items-start justify-start w-[84%]">
                  <div className="flex flex-row gap-2.5 items-center justify-between w-full">
                    <Button
                      className="!text-white-A700 border border-gray-900 border-solid cursor-pointer font-medium min-w-[90px] rounded-md text-center text-lg"
                      color="gray_900_01"
                      size="sm"
                      variant="fill"
                    >
                      English
                    </Button>
                    <Button
                      className="!text-white-A700 border border-gray-900 border-solid cursor-pointer font-medium min-w-[72px] rounded-md text-center text-lg"
                      color="gray_900_01"
                      size="sm"
                      variant="fill"
                    >
                      Hindi
                    </Button>
                    <Button
                      className="!text-white-A700 border border-gray-900 border-solid cursor-pointer font-medium min-w-[73px] rounded-md text-center text-lg"
                      color="gray_900_01"
                      size="sm"
                      variant="fill"
                    >
                      Tamil
                    </Button>
                    <Button
                      className="!text-white-A700 border border-gray-900 border-solid cursor-pointer font-medium min-w-[85px] rounded-md text-center text-lg"
                      color="gray_900_01"
                      size="sm"
                      variant="fill"
                    >
                      Telegu
                    </Button>
                  </div>
                  <Button
                    className="!text-white-A700 border border-gray-900 border-solid cursor-pointer font-medium min-w-[102px] rounded-md text-center text-lg"
                    color="gray_900_01"
                    size="sm"
                    variant="fill"
                  >
                    Kannada
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3.5 items-start justify-start w-full">
              <div className="flex flex-row gap-1 items-center justify-start w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_signal.svg"
                  alt="signal"
                />
                <Text
                  className="flex-1 text-gray-500 text-lg w-auto"
                  size="txtManropeMedium18"
                >
                  Ratings
                </Text>
              </div>
              <List
                className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 grid-cols-2 justify-start w-full"
                orientation="horizontal"
              >
                <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-1 flex-col gap-1 items-start justify-start p-4 rounded-lg w-full">
                  <Text
                    className="text-white-A700 text-xl w-auto"
                    size="txtManropeSemiBold20"
                  >
                    IMDb
                  </Text>
                  <div className="flex flex-row gap-1 items-center justify-start w-auto">
                    <div className="flex flex-row gap-0.5 items-start justify-start w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_shape_49.svg"
                        alt="shape"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_shape_50.svg"
                        alt="shape_One"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_shape_51.svg"
                        alt="shape_Two"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_shape_52.svg"
                        alt="shape_Three"
                      />
                      <Img
                        className="h-6 w-[25px]"
                        src="images/img_user.svg"
                        alt="user"
                      />
                    </div>
                    <Text
                      className="text-white-A700 text-xl"
                      size="txtManropeMedium20"
                    >
                      4.5
                    </Text>
                  </div>
                </div>
                <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-1 flex-col gap-1 items-start justify-start p-4 rounded-lg w-full">
                  <Text
                    className="text-white-A700 text-xl w-auto"
                    size="txtManropeSemiBold20"
                  >
                    Streamvibe
                  </Text>
                  <div className="flex flex-row gap-1 items-center justify-start w-auto">
                    <div className="flex flex-row items-start justify-start w-auto">
                      <RatingBar
                        className="flex justify-between w-32"
                        value={4}
                        starCount={5}
                        color="#999999"
                        activeColor="#e50000"
                        size={24}
                      ></RatingBar>
                    </div>
                    <Text
                      className="text-white-A700 text-xl w-auto"
                      size="txtManropeMedium20"
                    >
                      4
                    </Text>
                  </div>
                </div>
              </List>
            </div>
            <div className="flex flex-col gap-3.5 items-start justify-start w-full">
              <div className="flex flex-row gap-1 items-center justify-start w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_icon_8.svg"
                  alt="icon_Three"
                />
                <Text
                  className="flex-1 text-gray-500 text-lg w-auto"
                  size="txtManropeMedium18"
                >
                  Gernes
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row gap-2.5 items-start justify-start w-auto sm:w-full">
                <Button
                  className="!text-white-A700 border border-gray-900 border-solid cursor-pointer font-medium min-w-[101px] rounded-md text-center text-lg"
                  color="gray_900_01"
                  size="sm"
                  variant="fill"
                >
                  Sci-Fi TV
                </Button>
                <Button
                  className="!text-white-A700 border border-gray-900 border-solid cursor-pointer font-medium min-w-[155px] rounded-md text-center text-lg"
                  color="gray_900_01"
                  size="sm"
                  variant="fill"
                >
                  Teen TV Shows
                </Button>
                <Button
                  className="!text-white-A700 border border-gray-900 border-solid cursor-pointer font-medium min-w-[137px] rounded-md text-center text-lg"
                  color="gray_900_01"
                  size="sm"
                  variant="fill"
                >
                  US TV Shows
                </Button>
              </div>
            </div>
            <List
              className="flex flex-col gap-[30px] items-center w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 flex-col gap-3.5 items-start justify-start w-full">
                <Text
                  className="text-gray-500 text-lg w-full"
                  size="txtManropeMedium18"
                >
                  Director
                </Text>
                <div className="bg-gray-900_01 border border-gray-900 border-solid flex sm:flex-col flex-row gap-2.5 items-center justify-start p-3.5 rounded-lg w-full">
                  <Img
                    className="h-[60px] md:h-auto max-h-[60px] object-cover rounded-lg sm:w-[]"
                    src="images/img_image_186.png"
                    alt="image"
                  />
                  <div className="flex flex-1 flex-col items-start justify-center w-full">
                    <Text
                      className="text-lg text-white-A700 w-full"
                      size="txtManropeMedium18WhiteA700"
                    >
                      The Duffer Brothers
                    </Text>
                    <Text
                      className="text-base text-gray-500 w-full"
                      size="txtManropeMedium16"
                    >
                      From USA
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-3.5 items-start justify-start w-full">
                <Text
                  className="text-gray-500 text-lg w-full"
                  size="txtManropeMedium18"
                >
                  Music
                </Text>
                <div className="bg-gray-900_01 border border-gray-900 border-solid flex sm:flex-col flex-row gap-2.5 items-center justify-start p-3.5 rounded-lg w-full">
                  <Img
                    className="h-[60px] md:h-auto max-h-[60px] object-cover rounded-lg sm:w-[]"
                    src="images/img_image_187.png"
                    alt="image"
                  />
                  <div className="flex flex-1 flex-col items-start justify-center w-full">
                    <Text
                      className="text-lg text-white-A700 w-full"
                      size="txtManropeMedium18WhiteA700"
                    >
                      Kyle Dixon
                    </Text>
                    <Text
                      className="text-base text-gray-500 w-full"
                      size="txtManropeMedium16"
                    >
                      From USA
                    </Text>
                  </div>
                </div>
              </div>
            </List>
          </div>
        </div>
        <div className="bg-black-900 border border-gray-900 border-solid flex flex-col items-center justify-start max-w-[1596px] mt-[150px] mx-auto px-20 md:px-5 py-[100px] rounded-[12px] w-full">
          <div className="flex h-[313px] sm:h-[907px] justify-end relative rounded-[12px] w-[1596px] md:w-full">
            <div className="absolute flex sm:flex-col flex-row gap-5 h-full inset-x-[0] items-center justify-between mx-auto top-[0] w-full">
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_42x165.png"
                alt="image_Eleven"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_54.png"
                alt="image_Twelve"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_55.png"
                alt="image_Thirteen"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_56.png"
                alt="image_Fourteen"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_57.png"
                alt="image_Fifteen"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_58.png"
                alt="image_Sixteen"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_59.png"
                alt="image_Seventeen"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_60.png"
                alt="image_Eighteen"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_42x115.png"
                alt="image_Nineteen"
              />
            </div>
            <div className="absolute flex sm:flex-col flex-row gap-5 h-full inset-x-[0] items-center justify-between mx-auto top-[20%] w-full">
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_83x165.png"
                alt="image_Twenty"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_61.png"
                alt="image_TwentyOne"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_62.png"
                alt="image_TwentyTwo"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_63.png"
                alt="image_TwentyThree"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_64.png"
                alt="image_TwentyFour"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_65.png"
                alt="image_TwentyFive"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_66.png"
                alt="image_TwentySix"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_67.png"
                alt="image_TwentySeven"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_83x115.png"
                alt="image_TwentyEight"
              />
            </div>
            <div className="absolute bottom-[20%] flex sm:flex-col flex-row gap-5 h-full inset-x-[0] items-center justify-between mx-auto w-full">
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_68.png"
                alt="image_TwentyNine"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_69.png"
                alt="image_Thirty"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_70.png"
                alt="image_ThirtyOne"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_71.png"
                alt="image_ThirtyTwo"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_72.png"
                alt="image_ThirtyThree"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_73.png"
                alt="image_ThirtyFour"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_74.png"
                alt="image_ThirtyFive"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_75.png"
                alt="image_ThirtySix"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[83px] object-cover sm:w-[]"
                src="images/img_image_76.png"
                alt="image_ThirtySeven"
              />
            </div>
            <div className="flex sm:flex-col flex-row gap-5 h-full items-center justify-between mt-auto mx-auto w-full">
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_77.png"
                alt="image_ThirtyEight"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_78.png"
                alt="image_ThirtyNine"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_79.png"
                alt="image_Forty"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_80.png"
                alt="image_FortyOne"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_81.png"
                alt="image_FortyTwo"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_82.png"
                alt="image_FortyThree"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_83.png"
                alt="image_FortyFour"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_84.png"
                alt="image_FortyFive"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[42px] object-cover sm:w-[]"
                src="images/img_image_85.png"
                alt="image_FortySix"
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

export default ShowsPageOpenDesktopPage;
