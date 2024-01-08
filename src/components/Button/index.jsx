import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", round: "rounded-[12px]" };
const variants = {
  fill: {
    gray_100_02: "bg-gray-100_02 text-blue_gray-900",
    gray_900_02: "bg-gray-900_02 text-white-A700",
    gray_900_03: "bg-gray-900_03",
    gray_900_01: "bg-gray-900_01 text-gray-500",
    red_A700: "bg-red-A700 text-white-A700",
    black_900: "bg-black-900 text-gray-300",
  },
  gradient: { blue_A700_light_blue_A400: "bg-gradient  text-white-A700" },
};
const sizes = {
  xs: "p-1.5",
  sm: "p-[11px]",
  md: "p-3.5",
  lg: "p-[17px]",
  xl: "p-[22px] sm:px-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  variant: PropTypes.oneOf(["fill", "gradient"]),
  color: PropTypes.oneOf([
    "gray_100_02",
    "gray_900_02",
    "gray_900_03",
    "gray_900_01",
    "red_A700",
    "black_900",
    "blue_A700_light_blue_A400",
  ]),
};

export { Button };
