import { Component } from "react";
import background from "../img/cross.jpg";
import bird from "../img/bird-contrast.webp";

class Hero extends Component {
  render() {
    return (
      <>
        {/* Hero Section Content */}
        <section className="w-full sm:h-[60vh] lg:h-screen flex justify-center mb-10">
          <main className="flex w-full justify-center">
            <div
              className="sm:w-fit sm:h-[50vh] lg:w-full lg:h-screen sm:bg-cover  sm:mt-16  md:h-[80vh] bg-no-repeat absolute flex justify-center items-center bg-top"
              style={{ backgroundImage: `url(${background})` }}
              id="bgHero"
            >
              <div className="w-screen p-10">
                <h1 className="sm:text-4xl lg:text-7xl font-[700] text-[#fff] drop-shadow-lg">
                  GPIB Anugerah Bekasi
                </h1>
              </div>
            </div>
          </main>
        </section>
        {/* End Hero Section Content */}
      </>
    );
  }
}

export default Hero;
