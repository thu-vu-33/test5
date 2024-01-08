import React from "react";

const sizeClasses = {
  txtManropeMedium14WhiteA700: "font-manrope font-medium",
  txtInterRegular20: "font-inter font-normal",
  txtManropeSemiBold30: "font-manrope font-semibold",
  txtInterMedium24: "font-inter font-medium",
  txtInterSemiBold24: "font-inter font-semibold",
  txtManropeMedium20: "font-manrope font-medium",
  txtManropeMedium22: "font-manrope font-medium",
  txtInterRegular35596: "font-inter font-normal",
  txtManropeBold38: "font-bold font-manrope",
  txtManropeRegular14: "font-manrope font-normal",
  txtInterMedium30: "font-inter font-medium",
  txtManropeRegular16: "font-manrope font-normal",
  txtInterSemiBold30: "font-inter font-semibold",
  txtInterSemiBold75147: "font-inter font-semibold",
  txtManropeRegular18: "font-manrope font-normal",
  txtManropeBold100: "font-bold font-manrope",
  txtInterMedium18: "font-inter font-medium",
  txtManropeSemiBold24Gray500: "font-manrope font-semibold",
  txtManropeRegular14Gray500: "font-manrope font-normal",
  txtInterSemiBold24Bluegray900: "font-inter font-semibold",
  txtInterSemiBold34: "font-inter font-semibold",
  txtInterMedium16: "font-inter font-medium",
  txtInterSemiBold38: "font-inter font-semibold",
  txtManropeSemiBold40: "font-manrope font-semibold",
  txtInterSemiBold41479: "font-inter font-semibold",
  txtManropeBold48: "font-bold font-manrope",
  txtInterRegular14: "font-inter font-normal",
  txtInterRegular20Gray700: "font-inter font-normal",
  txtInterRegular16: "font-inter font-normal",
  txtInterMedium84Gray900: "font-inter font-medium",
  txtInterRegular17: "font-inter font-normal",
  txtInterRegular18: "font-inter font-normal",
  txtInterRegular18Gray500: "font-inter font-normal",
  txtInterMedium84Bluegray900: "font-inter font-medium",
  txtManropeBold20: "font-bold font-manrope",
  txtManropeSemiBold16: "font-manrope font-semibold",
  txtInterSemiBold50: "font-inter font-semibold",
  txtArchivoRomanMedium16: "font-archivo font-medium",
  txtManropeSemiBold18: "font-manrope font-semibold",
  txtManropeBold58: "font-bold font-manrope",
  txtManropeSemiBold12: "font-manrope font-semibold",
  txtManropeMedium16WhiteA700: "font-manrope font-medium",
  txtInterRegular14WhiteA700: "font-inter font-normal",
  txtArchivoRomanMedium18: "font-archivo font-medium",
  txtInterSemiBold30Bluegray900: "font-inter font-semibold",
  txtInterSemiBold34Bluegray900: "font-inter font-semibold",
  txtInterSemiBold1236: "font-inter font-semibold",
  txtManropeRegular18Gray400: "font-manrope font-normal",
  txtManropeSemiBold30Gray500: "font-manrope font-semibold",
  txtInterRegular16WhiteA700: "font-inter font-normal",
  txtInterRegular18Gray80001: "font-inter font-normal",
  txtInterSemiBold58: "font-inter font-semibold",
  txtManropeSemiBold20: "font-manrope font-semibold",
  txtManropeBold30: "font-bold font-manrope",
  txtInterMedium84Gray90003: "font-inter font-medium",
  txtManropeBold28: "font-bold font-manrope",
  txtManropeMedium12: "font-manrope font-medium",
  txtManropeBold24: "font-bold font-manrope",
  txtManropeSemiBold24: "font-manrope font-semibold",
  txtManropeMedium14: "font-manrope font-medium",
  txtInterMedium84: "font-inter font-medium",
  txtManropeMedium16: "font-manrope font-medium",
  txtManropeMedium18WhiteA700: "font-manrope font-medium",
  txtInterMedium84Bluegray90002: "font-inter font-medium",
  txtManropeMedium18: "font-manrope font-medium",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
