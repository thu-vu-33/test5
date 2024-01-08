import React from "react";

import { Img } from "components";

const ThumbnailPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-start mx-auto w-full">
        <Img
          className="h-[960px] sm:h-auto object-cover w-full"
          src="images/img_thumnail.png"
          alt="thumnail"
        />
      </div>
    </>
  );
};

export default ThumbnailPage;
