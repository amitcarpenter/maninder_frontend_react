import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const Homeslider = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="container mx-auto py-6 lg:py-20 px-4 lg:px-10">
      <div className="flex flex-col text-center w-full mb-5 lg:mb-14">
        <h1 className=" text-2xl lg:text-5xl font-[400] mb-4 text-[#C5B351]  ">
          Popular Categories
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          From luxurious waterfront estates to charming urban condos, we have
          something to suit every lifestyle and preference. Dive into the world
          of suburban tranquility with our spacious single-family homes or
          embrace the convenience of city living with our vibrant downtown
          properties.
        </p>
      </div>

      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={2000}
        infinite={true}
        itemClass=""
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        <Link to="/feature" className="">
          <div
            class="  mx-[2px] bg-cover bg-no-repeat rounded-[10px] shadow overflow-hidden relative cursor-pointer"
            style={{
              cursor: "pointer",
              backgroundImage: `url("./img/luxury-kitchen-remodel-maria-decotiis-interior-design-img~4e91c30902153c43_4-4253-1-12df3bb.jpg")`,
            }}
          >
            <div class="bg-black  bg-opacity-25 inset-0 hover:bg-opacity-0 z-50 py-40 md:py-48">
              <div class="absolute bottom-10 w-full flex justify-center">
                <div className="text-center">
                  <p class="text-white text-2xl font-normal font-prata tracking-tight mb-2">
                    Residential{" "}
                  </p>
                  <span className="px-2 inline-flex text-white  items-center rounded-lg bg-NewYello">
                    {" "}
                    0 Listings{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/feature">
          <div
            class="  mx-[2px] bg-cover bg-no-repeat rounded-[10px] shadow overflow-hidden relative"
            style={{
              cursor: "pointer",
              backgroundImage: `url("./img/b_VANCOUVER-Martini-Interiors-453183-rela7f101b3.webp")`,
            }}
          >
            <div class="bg-black bg-opacity-25 inset-0 hover:bg-opacity-0 z-50 py-40 md:py-48">
              <div class="absolute bottom-10 w-full flex justify-center">
                <div className="text-center">
                  <p class="text-white text-2xl font-normal font-prata tracking-tight mb-2">
                    Condo{" "}
                  </p>
                  <span className="px-2 inline-flex text-white  items-center rounded-lg bg-NewYello">
                    {" "}
                    5 Listings{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/feature">
          <div
            class=" mx-[2px] bg-cover bg-no-repeat rounded-[10px] shadow overflow-hidden relative"
            style={{
              cursor: "pointer",
              backgroundImage: `url("./img/contemporary-bathroom-design-with-golden-details.jpg")`,
            }}
          >
            <div class="bg-black bg-opacity-25 inset-0 hover:bg-opacity-0 z-50 py-40 md:py-48">
              <div class="absolute bottom-10 w-full flex justify-center">
                <div className="text-center">
                  <p class="text-white text-2xl font-normal font-prata tracking-tight mb-2">
                    Commercial{" "}
                  </p>
                  <span className="px-2 inline-flex text-white  items-center rounded-lg bg-NewYello">
                    {" "}
                    2 Listings{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/feature">
          <div
            class="mx-[2px] bg-cover bg-no-repeat rounded-[10px] shadow overflow-hidden relative"
            style={{
              cursor: "pointer",
              backgroundImage: `url("./img/ellsworth-primary-bath-vancouver-02_51294893628_o-scaled.jpg")`,
            }}
          >
            <div class="bg-black bg-opacity-25 inset-0 hover:bg-opacity-0 z-50 py-40 md:py-48">
              <div class="absolute bottom-10 w-full flex justify-center">
                <div className="text-center">
                  <p class="text-white text-2xl font-normal font-prata tracking-tight mb-2">
                    Condo{" "}
                  </p>
                  <span className="px-2 inline-flex text-white  items-center rounded-lg bg-NewYello">
                    {" "}
                    0 Listings{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </Carousel>
    </div>
  );
};

export default Homeslider;
