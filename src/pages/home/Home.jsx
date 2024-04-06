import React from "react";
import "./home.css";
import Header from "../../components/header/Header";
import Homebanner from "../../components/banner/Homebanner";
import Footer from "../../components/footer/Footer";
import Testimonial from "../../components/testimonial/Testimonial";
import HomeContact from "./HomeContact";
import About from "./About";
import CardList from "./CardList";
import Homeinfo from "./Homeinfo";
import Homeslider from "./Homeslider";
import DemoCarousel from "./DemoCarousel";
import { useMyContext } from "../../store/ContextApi";
import MessageBox from "../../components/MessageBox";
const Home = () => {
  const { showMessageBox, handleClose } = useMyContext();

  return (
    <>
      <Header />
      <Homebanner />
      <Homeslider />
      <div className=" mt-0 sm:mt-12 py-6">
        <About />
      </div>

      <section className="container mx-auto py-6 lg:pt-20 lg:pb:14 px-4 lg:px-10">
        <div className="flex flex-col text-center w-full mb-5 lg:mb-14">
          <h1 className=" text-2xl lg:text-5xl font-[400] mb-4 text-[#C5B351]  ">
            Featured Neighborhoods
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            In the vibrant neighborhood of San Jose, California, Sam is renowned
            among residents, property developers, local businesses, and
            professionals in the real estate industry for her remarkable skills,
            dynamic approach, and tireless commitment to facilitating
            transactions for buyers and sellers.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 ">
          <div
            class="col-span-1 parent-div  py-28  lg:py-40 bg-cover bg-no-repeat shadow overflow-hidden relative flex items-center justify-center"
            style={{
              backgroundImage: `url("./img/wp7733723-luxury-home-wallpapers.jpg")`,
            }}
          >
            <div class="   bg-black bg-opacity-70 hover:bg-opacity-0 z-50  text-center absolute inset-0 flex items-center justify-center ">
              <div className="flex flex-col">
                <p class="text-white text-2xl font-normal font-prata  tracking-tight ">
                  MISSION
                </p>
                <div className="text-white content flex gap-2 mt-3">
                  <button className="px-4 py-1.5 bg-black hover:bg-NewYello">
                    House
                  </button>
                  <button className="px-4 py-1.5 bg-black hover:bg-NewYello">
                    Condos
                  </button>
                  <button className="px-4 py-1.5 bg-black hover:bg-NewYello">
                    Tounhouses
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            class="col-span-1 parent-div  py-28  lg:py-40 bg-cover bg-no-repeat  shadow overflow-hidden relative flex items-center justify-center"
            style={{
              backgroundImage: `url("./img/wp6671464-luxury-life-wallpapers.jpg")`,
            }}
          >
            <div class="   bg-black bg-opacity-70 hover:bg-opacity-0 z-50  text-center absolute inset-0 flex items-center justify-center ">
              <div className="flex flex-col">
                <p class="text-white text-2xl font-normal font-prata  tracking-tight ">
                  SURREY
                </p>
                <div className="text-white content flex gap-2 mt-3">
                  <button className="px-4 py-1.5 bg-black hover:bg-NewYello">
                    House
                  </button>
                  <button className="px-4 py-1.5 bg-black hover:bg-NewYello">
                    Condos
                  </button>
                  <button className="px-4 py-1.5 bg-black hover:bg-NewYello">
                    Tounhouses
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            class="col-span-1 parent-div  py-28  lg:py-40 bg-cover bg-no-repeat  shadow overflow-hidden relative flex items-center justify-center"
            style={{
              backgroundImage: `url("./img/wp3982700-house-wallpapers.jpg")`,
            }}
          >
            <div class="   bg-black bg-opacity-70 hover:bg-opacity-0 z-50  text-center absolute inset-0 flex items-center justify-center ">
              <div className="flex flex-col">
                <p class="text-white text-2xl font-normal font-prata  tracking-tight ">
                  CHILLIWACK
                </p>
                <div className="text-white content flex gap-2 mt-3">
                  <button className="px-4 py-1.5 bg-black hover:bg-NewYello">
                    House
                  </button>
                  <button className="px-4 py-1.5 bg-black hover:bg-NewYello">
                    Condos
                  </button>
                  <button className="px-4 py-1.5 bg-black hover:bg-NewYello">
                    Tounhouses
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            class="col-span-1 parent-div  py-28  lg:py-40 bg-cover bg-no-repeat  shadow overflow-hidden relative flex items-center justify-center"
            style={{
              backgroundImage: `url("./img/wp3701682-luxury-homes-wallpapers.jpg")`,
            }}
          >
            <div class="   bg-black bg-opacity-70 hover:bg-opacity-0 z-50  text-center absolute inset-0 flex items-center justify-center ">
              <div className="flex flex-col">
                <p class="text-white text-2xl font-normal font-prata  tracking-tight ">
                  MAPLE RIDGE
                </p>
                <div className="text-white content flex gap-2 mt-3">
                  <button className="px-4 py-1.5 bg-black hover:bg-NewYello">
                    House
                  </button>
                  <button className="px-4 py-1.5 bg-black hover:bg-NewYello">
                    Condos
                  </button>
                  <button className="px-4 py-1.5 bg-black hover:bg-NewYello">
                    Tounhouses
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2">
          <div
            class="col-span-1 parent-div  py-28  lg:py-40 bg-cover bg-no-repeat shadow overflow-hidden relative flex items-center justify-center"
            style={{
              backgroundImage: `url("./img/wp3701651-luxury-homes-wallpapers.jpg")`,
            }}
          >
            <div class="   bg-black bg-opacity-70 hover:bg-opacity-0 z-50  text-center absolute inset-0 flex items-center justify-center ">
              <div className="flex flex-col">
                <p class="text-white text-2xl font-normal font-prata  tracking-tight ">
                  HOPE
                </p>
                <div className="text-white content flex gap-2 mt-3">
                  <button className="px-4 py-1.5 bg-black hover:bg-NewYello">
                    House
                  </button>
                  <button className="px-4 py-1.5 bg-black hover:bg-NewYello">
                    Condos
                  </button>
                  <button className="px-4 py-1.5 bg-black hover:bg-NewYello">
                    Tounhouses
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            class="col-span-1 parent-div w-full py-28  lg:py-40 bg-cover bg-no-repeat  shadow overflow-hidden relative flex items-center justify-center"
            style={{
              backgroundImage: `url("./img/61378d9cd055f908dfcbc33a_classic-custom-kitchen-antique-woodwork-luxury hand-carved-hood-new-jersey-05.jpg")`,
            }}
          >
            <div class="   bg-black bg-opacity-70 hover:bg-opacity-0 z-50  text-center absolute inset-0 flex items-center justify-center ">
              <div className="flex flex-col">
                <p class="text-white text-2xl font-normal font-prata  tracking-tight ">
                  HARRISON
                </p>
                <div className="text-white content flex gap-2 mt-3">
                  <button className="px-4 py-1.5 bg-black hover:bg-NewYello">
                    House
                  </button>
                  <button className="px-4 py-1.5 bg-black hover:bg-NewYello">
                    Condos
                  </button>
                  <button className="px-4 py-1.5 bg-black hover:bg-NewYello">
                    Tounhouses
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            class="col-span-1 parent-div  py-28  lg:py-40 bg-cover bg-no-repeat  shadow overflow-hidden relative flex items-center justify-center"
            style={{ backgroundImage: `url("./img/wp2406660.jpg")` }}
          >
            <div class="   bg-black bg-opacity-70 hover:bg-opacity-0 z-50  text-center absolute inset-0 flex items-center justify-center ">
              <div className="flex flex-col">
                <p class="text-white text-2xl font-normal font-prata  tracking-tight ">
                  SILVERDALE
                </p>
                <div className="text-white content flex gap-2 mt-3">
                  <button className="px-4 py-1.5 bg-black hover:bg-NewYello">
                    House
                  </button>
                  <button className="px-4 py-1.5 bg-black hover:bg-NewYello">
                    Condos
                  </button>
                  <button className="px-4 py-1.5 bg-black hover:bg-NewYello">
                    Tounhouses
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            class="col-span-1 parent-div  py-28  lg:py-40 bg-cover bg-no-repeat  shadow overflow-hidden relative flex items-center justify-center"
            style={{
              backgroundImage: `url("./img/robyn-bessenger-photography-34.jpeg")`,
            }}
          >
            <div class="   bg-black bg-opacity-70 hover:bg-opacity-0 z-50  text-center absolute inset-0 flex items-center justify-center ">
              <div className="flex flex-col">
                <p class="text-white text-2xl font-normal font-prata  tracking-tight ">
                  LANGLEY
                </p>
                <div className="text-white content flex gap-2 mt-3">
                  <button className="px-4 py-1.5 bg-black hover:bg-NewYello">
                    House
                  </button>
                  <button className="px-4 py-1.5 bg-black hover:bg-NewYello">
                    Condos
                  </button>
                  <button className="px-4 py-1.5 bg-black hover:bg-NewYello">
                    Tounhouses
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-16">
        <DemoCarousel />
      </div>

      <div className="mt-3 lg:mt-16">
        <CardList />
      </div>
      <div className="mt-3 ">
        <HomeContact />
      </div>

      {/* <div className='mt-16'>
                <Testimonial />
            </div> */}
      <div className="mt-16">
        <Homeinfo />
      </div>

      {showMessageBox && <MessageBox onClose={handleClose} />}

      <Footer />
    </>
  );
};

export default Home;
