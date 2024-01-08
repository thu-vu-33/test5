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

const MoviesPageOpenLaptopPage = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-gray-900_01 flex flex-col font-manrope items-center justify-start mx-auto w-full">
        <Header1 className="flex md:flex-col flex-row md:gap-10 items-center justify-between px-20 md:px-5 py-6 w-full" />
        <div
          className="bg-cover bg-gradient7  bg-no-repeat border border-solid flex flex-col gap-6 gray_900_gray_900_00_02_border4 h-[709px] md:h-auto items-center justify-end max-w-7xl mt-10 mx-auto pb-4 pt-10 px-10 md:px-5 rounded-[12px] w-full"
          style={{ backgroundImage: "url('images/img_container_1.png')" }}
        >
          <div className="flex flex-col gap-0.5 items-center justify-start md:px-10 sm:px-5 px-[100px] w-full">
            <Text
              className="text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700 w-full"
              size="txtManropeBold30"
            >
              Kantara
            </Text>
            <Text
              className="text-base text-center text-gray-500 w-full"
              size="txtManropeRegular16"
            >
              A fiery young man clashes with an unflinching forest officer in a
              south Indian village where spirituality, fate and folklore rule
              the lands.
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
              <div className="font-semibold text-left text-sm">Play Now</div>
            </Button>
            <Img
              className="h-12 w-40"
              src="images/img_buttonscontainer_black_900_48x160.svg"
              alt="buttonscontaine_One"
            />
          </div>
        </div>
        <div className="flex md:flex-col flex-row gap-5 items-start justify-start max-w-[1286px] mt-20 mx-auto md:px-5 w-full">
          <div className="flex flex-1 flex-col gap-5 items-end justify-start w-full">
            <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-col gap-2.5 items-start justify-start p-10 sm:px-5 rounded-[10px] w-full">
              <Text
                className="text-base text-gray-500 w-full"
                size="txtManropeMedium16"
              >
                Description
              </Text>
              <Text
                className="leading-[150.00%] max-w-[770px] md:max-w-full text-base text-white-A700"
                size="txtManropeMedium16WhiteA700"
              >
                A fiery young man clashes with an unflinching forest officer in
                a south Indian village where spirituality, fate and folklore
                rule the lands.
              </Text>
            </div>
            <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-col font-archivo gap-5 items-start justify-start p-10 sm:px-5 rounded-[10px] w-full">
              <div className="flex flex-row gap-[30px] items-center justify-start w-full">
                <Text
                  className="flex-1 text-base text-gray-500 w-auto"
                  size="txtArchivoRomanMedium16"
                >
                  Cast
                </Text>
                <Img
                  className="h-11 w-24"
                  src="images/img_upload.svg"
                  alt="upload"
                />
              </div>
              <div className="gap-2.5 grid sm:grid-cols-1 md:grid-cols-4 grid-cols-8 items-start justify-start w-full">
                <Img
                  className="flex-1 md:flex-none h-[89px] sm:h-auto max-h-[89px] object-cover rounded-[10px]"
                  src="images/img_image_89x87.png"
                  alt="image_Two"
                />
                <Img
                  className="flex-1 md:flex-none h-[89px] sm:h-auto max-h-[89px] object-cover rounded-[10px]"
                  src="images/img_image_170.png"
                  alt="image_Three"
                />
                <Img
                  className="flex-1 md:flex-none h-[89px] sm:h-auto max-h-[89px] object-cover rounded-[10px]"
                  src="images/img_image_171.png"
                  alt="image_Four"
                />
                <Img
                  className="flex-1 md:flex-none h-[89px] sm:h-auto max-h-[89px] object-cover rounded-[10px]"
                  src="images/img_image_172.png"
                  alt="image_Five"
                />
                <Img
                  className="flex-1 md:flex-none h-[89px] sm:h-auto max-h-[89px] object-cover rounded-[10px]"
                  src="images/img_image_173.png"
                  alt="image_Six"
                />
                <Img
                  className="flex-1 md:flex-none h-[89px] sm:h-auto max-h-[89px] object-cover rounded-[10px]"
                  src="images/img_image_174.png"
                  alt="image_Seven"
                />
                <Img
                  className="flex-1 md:flex-none h-[89px] sm:h-auto max-h-[89px] object-cover rounded-[10px]"
                  src="images/img_image_175.png"
                  alt="image_Eight"
                />
                <Img
                  className="flex-1 md:flex-none h-[89px] sm:h-auto max-h-[89px] object-cover rounded-[10px]"
                  src="images/img_image_176.png"
                  alt="image_Nine"
                />
              </div>
            </div>
            <div className="bg-gray-900_03 border border-gray-900 border-solid flex flex-col font-manrope gap-[30px] items-center justify-center p-10 sm:px-5 rounded-[10px] w-full">
              <div className="flex flex-row gap-3.5 items-center justify-start w-full">
                <Text
                  className="flex-1 text-base text-gray-500 w-auto"
                  size="txtManropeMedium16"
                >
                  Reviews
                </Text>
                <Button
                  className="border border-gray-900 border-solid cursor-pointer flex items-center justify-center min-w-[160px] rounded-md"
                  leftIcon={
                    <Img
                      className="h-6 mr-1"
                      src="images/img_icon_30x30.svg"
                      alt="Icon"
                    />
                  }
                  color="gray_900_01"
                  size="sm"
                  variant="fill"
                >
                  <div className="!text-white-A700 font-medium text-left text-sm">
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
                className="flex gap-4 w-full"
                items={[...Array(8)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <div className="bg-black-900 border border-gray-900 border-solid flex flex-1 flex-col gap-4 items-start justify-start mx-2.5 p-[30px] sm:px-5 rounded-[12px]">
                      <div className="flex flex-row gap-[41px] items-center justify-start w-full">
                        <div className="flex flex-1 flex-col items-start justify-center w-full">
                          <Text
                            className="text-lg text-white-A700 w-full"
                            size="txtManropeMedium18WhiteA700"
                          >
                            Aniket Roy
                          </Text>
                          <Text
                            className="text-base text-gray-500 w-full"
                            size="txtManropeMedium16"
                          >
                            From India
                          </Text>
                        </div>
                        <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-row gap-0.5 items-center justify-start px-2 py-1 rounded-[14px] w-auto">
                          <div className="flex flex-row gap-px items-start justify-start w-auto">
                            <Img
                              className="h-3.5 w-3.5"
                              src="images/img_shape_37.svg"
                              alt="shape"
                            />
                            <Img
                              className="h-3.5 w-3.5"
                              src="images/img_shape_38.svg"
                              alt="shape_One"
                            />
                            <Img
                              className="h-3.5 w-3.5"
                              src="images/img_shape_39.svg"
                              alt="shape_Two"
                            />
                            <Img
                              className="h-3.5 w-3.5"
                              src="images/img_shape_40.svg"
                              alt="shape_Three"
                            />
                            <Img
                              className="h-3.5 w-3.5"
                              src="images/img_user.svg"
                              alt="user"
                            />
                          </div>
                          <Text
                            className="text-gray-500 text-sm"
                            size="txtManropeMedium14"
                          >
                            4.5
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="leading-[150.00%] max-w-[317px] md:max-w-full text-base text-gray-500"
                        size="txtManropeRegular16"
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
                  className="rounded-[50%] w-11"
                  src="images/img_button_gray_900_01_44x44.svg"
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
                  className="rounded-[50%] w-11"
                  src="images/img_button_44x44.svg"
                  alt="button_One"
                />
              </div>
            </div>
          </div>
          <div className="bg-gray-900_03 border border-gray-900 border-solid flex sm:flex-1 flex-col gap-6 items-start justify-start p-10 sm:px-5 rounded-[10px] w-[416px] sm:w-full">
            <div className="flex flex-col gap-2.5 items-start justify-start w-full">
              <div className="flex flex-row gap-0.5 items-center justify-start w-full">
                <Img
                  className="h-5 w-5"
                  src="images/img_icon_7.svg"
                  alt="icon_One"
                />
                <Text
                  className="flex-1 text-base text-gray-500 w-auto"
                  size="txtManropeMedium16"
                >
                  Released Year
                </Text>
              </div>
              <Text
                className="text-base text-white-A700 w-full"
                size="txtManropeSemiBold16"
              >
                2022
              </Text>
            </div>
            <div className="flex flex-col gap-2.5 items-start justify-start w-full">
              <div className="flex flex-row gap-0.5 items-center justify-start w-full">
                <Img
                  className="h-5 w-5"
                  src="images/img_arrowright_gray_500.svg"
                  alt="arrowright"
                />
                <Text
                  className="flex-1 text-base text-gray-500 w-auto"
                  size="txtManropeMedium16"
                >
                  Available Languages
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col gap-2.5 items-start justify-start w-[86%]">
                  <div className="flex flex-row gap-2.5 items-center justify-between w-full">
                    <Button
                      className="!text-white-A700 border border-gray-900 border-solid cursor-pointer font-medium min-w-[72px] rounded-md text-center text-sm"
                      color="gray_900_01"
                      size="xs"
                      variant="fill"
                    >
                      English
                    </Button>
                    <Button
                      className="!text-white-A700 border border-gray-900 border-solid cursor-pointer font-medium min-w-[58px] rounded-md text-center text-sm"
                      color="gray_900_01"
                      size="xs"
                      variant="fill"
                    >
                      Hindi
                    </Button>
                    <Button
                      className="!text-white-A700 border border-gray-900 border-solid cursor-pointer font-medium min-w-[59px] rounded-md text-center text-sm"
                      color="gray_900_01"
                      size="xs"
                      variant="fill"
                    >
                      Tamil
                    </Button>
                    <Button
                      className="!text-white-A700 border border-gray-900 border-solid cursor-pointer font-medium min-w-[69px] rounded-md text-center text-sm"
                      color="gray_900_01"
                      size="xs"
                      variant="fill"
                    >
                      Telegu
                    </Button>
                  </div>
                  <Button
                    className="!text-white-A700 border border-gray-900 border-solid cursor-pointer font-medium min-w-[82px] rounded-md text-center text-sm"
                    color="gray_900_01"
                    size="xs"
                    variant="fill"
                  >
                    Kannada
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2.5 items-start justify-start w-full">
              <div className="flex flex-row gap-1 items-center justify-start w-full">
                <Img
                  className="h-5 w-5"
                  src="images/img_signal_gray_500.svg"
                  alt="signal"
                />
                <Text
                  className="flex-1 text-base text-gray-500 w-auto"
                  size="txtManropeMedium16"
                >
                  Ratings
                </Text>
              </div>
              <List
                className="sm:flex-col flex-row gap-4 grid grid-cols-2 justify-start w-full"
                orientation="horizontal"
              >
                <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-1 flex-col gap-1 items-start justify-start p-3.5 rounded-lg w-full">
                  <Text
                    className="text-base text-white-A700 w-auto"
                    size="txtManropeSemiBold16"
                  >
                    IMDb
                  </Text>
                  <div className="flex flex-row gap-0.5 items-center justify-start w-auto">
                    <div className="flex flex-row gap-px items-start justify-start w-auto">
                      <Img
                        className="h-[18px] w-[18px]"
                        src="images/img_shape_41.svg"
                        alt="shape"
                      />
                      <Img
                        className="h-[18px] w-[18px]"
                        src="images/img_shape_42.svg"
                        alt="shape_One"
                      />
                      <Img
                        className="h-[18px] w-[18px]"
                        src="images/img_shape_43.svg"
                        alt="shape_Two"
                      />
                      <Img
                        className="h-[18px] w-[18px]"
                        src="images/img_shape_44.svg"
                        alt="shape_Three"
                      />
                      <Img
                        className="h-[18px] w-[18px]"
                        src="images/img_user.svg"
                        alt="user"
                      />
                    </div>
                    <Text
                      className="text-sm text-white-A700"
                      size="txtManropeMedium14WhiteA700"
                    >
                      4.5
                    </Text>
                  </div>
                </div>
                <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-1 flex-col gap-1 items-start justify-start p-3.5 rounded-lg w-full">
                  <Text
                    className="text-base text-white-A700 w-auto"
                    size="txtManropeSemiBold16"
                  >
                    Streamvibe
                  </Text>
                  <div className="flex flex-row gap-0.5 items-center justify-start w-auto">
                    <div className="flex flex-row items-start justify-start w-auto">
                      <RatingBar
                        className="flex justify-between w-[94px]"
                        value={4}
                        starCount={5}
                        color="#999999"
                        activeColor="#e50000"
                        size={18}
                      ></RatingBar>
                    </div>
                    <Text
                      className="text-sm text-white-A700 w-auto"
                      size="txtManropeMedium14WhiteA700"
                    >
                      4
                    </Text>
                  </div>
                </div>
              </List>
            </div>
            <div className="flex flex-col gap-2.5 items-start justify-start w-full">
              <div className="flex flex-row gap-0.5 items-center justify-start w-full">
                <Img
                  className="h-5 w-5"
                  src="images/img_icon_8.svg"
                  alt="icon_Two"
                />
                <Text
                  className="flex-1 text-base text-gray-500 w-auto"
                  size="txtManropeMedium16"
                >
                  Gernes
                </Text>
              </div>
              <div className="flex flex-row gap-2.5 items-start justify-start w-auto">
                <Button
                  className="!text-white-A700 border border-gray-900 border-solid cursor-pointer font-medium min-w-[67px] rounded-md text-center text-sm"
                  color="gray_900_01"
                  size="xs"
                  variant="fill"
                >
                  Action
                </Button>
                <Button
                  className="!text-white-A700 border border-gray-900 border-solid cursor-pointer font-medium min-w-[93px] rounded-md text-center text-sm"
                  color="gray_900_01"
                  size="xs"
                  variant="fill"
                >
                  Adventure
                </Button>
              </div>
            </div>
            <List
              className="flex flex-col gap-6 items-center w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
                <Text
                  className="text-base text-gray-500 w-full"
                  size="txtManropeMedium16"
                >
                  Director
                </Text>
                <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-row gap-2 items-center justify-start p-3 rounded-lg w-full">
                  <Img
                    className="h-[50px] md:h-auto max-h-[50px] object-cover rounded-md"
                    src="images/img_image_50x47.png"
                    alt="image"
                  />
                  <div className="flex flex-1 flex-col items-start justify-center w-full">
                    <Text
                      className="text-base text-white-A700 w-full"
                      size="txtManropeMedium16WhiteA700"
                    >
                      Rishab Shetty
                    </Text>
                    <Text
                      className="text-gray-500 text-sm w-full"
                      size="txtManropeMedium14"
                    >
                      From India
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
                <Text
                  className="text-base text-gray-500 w-full"
                  size="txtManropeMedium16"
                >
                  Music
                </Text>
                <div className="bg-gray-900_01 border border-gray-900 border-solid flex flex-row gap-2 items-center justify-start p-3 rounded-lg w-full">
                  <Img
                    className="h-[50px] md:h-auto max-h-[50px] object-cover rounded-md"
                    src="images/img_image_177.png"
                    alt="image"
                  />
                  <div className="flex flex-1 flex-col items-start justify-center w-full">
                    <Text
                      className="text-base text-white-A700 w-full"
                      size="txtManropeMedium16WhiteA700"
                    >
                      B. Ajaneesh Loknath
                    </Text>
                    <Text
                      className="text-gray-500 text-sm w-full"
                      size="txtManropeMedium14"
                    >
                      From India
                    </Text>
                  </div>
                </div>
              </div>
            </List>
          </div>
        </div>
        <div className="bg-black-900 border border-gray-900 border-solid flex flex-col items-center justify-start max-w-7xl mt-32 mx-auto md:px-5 px-[60px] py-20 rounded-[12px] w-full">
          <div className="flex h-[236px] md:h-[250px] sm:h-[817px] justify-end relative rounded-[12px] w-[1280px] md:w-full">
            <div className="absolute flex sm:flex-col flex-row gap-5 h-full inset-x-[0] items-center justify-between mx-auto top-[0] w-full">
              <Img
                className="flex-1 md:h-auto h-full max-h-[13px] object-cover sm:w-[]"
                src="images/img_image_42x165.png"
                alt="image_Ten"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[13px] object-cover sm:w-[]"
                src="images/img_image_54.png"
                alt="image_Eleven"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[13px] object-cover sm:w-[]"
                src="images/img_image_55.png"
                alt="image_Twelve"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[13px] object-cover sm:w-[]"
                src="images/img_image_56.png"
                alt="image_Thirteen"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[13px] object-cover sm:w-[]"
                src="images/img_image_57.png"
                alt="image_Fourteen"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[13px] object-cover sm:w-[]"
                src="images/img_image_58.png"
                alt="image_Fifteen"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[13px] object-cover sm:w-[]"
                src="images/img_image_59.png"
                alt="image_Sixteen"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[13px] object-cover sm:w-[]"
                src="images/img_image_60.png"
                alt="image_Seventeen"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[13px] object-cover sm:w-[]"
                src="images/img_image_42x115.png"
                alt="image_Eighteen"
              />
            </div>
            <div className="absolute flex sm:flex-col flex-row gap-5 h-full inset-x-[0] items-center justify-between mx-auto top-[14%] w-full">
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_83x165.png"
                alt="image_Nineteen"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_61.png"
                alt="image_Twenty"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_62.png"
                alt="image_TwentyOne"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_63.png"
                alt="image_TwentyTwo"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_64.png"
                alt="image_TwentyThree"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_65.png"
                alt="image_TwentyFour"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_66.png"
                alt="image_TwentyFive"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_67.png"
                alt="image_TwentySix"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_83x115.png"
                alt="image_TwentySeven"
              />
            </div>
            <div className="absolute bottom-[15%] flex sm:flex-col flex-row gap-5 h-full inset-x-[0] items-center justify-between mx-auto w-full">
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_68.png"
                alt="image_TwentyEight"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_69.png"
                alt="image_TwentyNine"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_70.png"
                alt="image_Thirty"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_71.png"
                alt="image_ThirtyOne"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_72.png"
                alt="image_ThirtyTwo"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_73.png"
                alt="image_ThirtyThree"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_74.png"
                alt="image_ThirtyFour"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_75.png"
                alt="image_ThirtyFive"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-[73px] object-cover sm:w-[]"
                src="images/img_image_76.png"
                alt="image_ThirtySix"
              />
            </div>
            <div className="flex sm:flex-col flex-row gap-5 h-full items-center justify-between mt-auto mx-auto w-full">
              <Img
                className="flex-1 md:h-auto h-full max-h-3.5 object-cover sm:w-[]"
                src="images/img_image_77.png"
                alt="image_ThirtySeven"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-3.5 object-cover sm:w-[]"
                src="images/img_image_78.png"
                alt="image_ThirtyEight"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-3.5 object-cover sm:w-[]"
                src="images/img_image_79.png"
                alt="image_ThirtyNine"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-3.5 object-cover sm:w-[]"
                src="images/img_image_80.png"
                alt="image_Forty"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-3.5 object-cover sm:w-[]"
                src="images/img_image_81.png"
                alt="image_FortyOne"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-3.5 object-cover sm:w-[]"
                src="images/img_image_82.png"
                alt="image_FortyTwo"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-3.5 object-cover sm:w-[]"
                src="images/img_image_83.png"
                alt="image_FortyThree"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-3.5 object-cover sm:w-[]"
                src="images/img_image_84.png"
                alt="image_FortyFour"
              />
              <Img
                className="flex-1 md:h-auto h-full max-h-3.5 object-cover sm:w-[]"
                src="images/img_image_85.png"
                alt="image_FortyFive"
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

export default MoviesPageOpenLaptopPage;
