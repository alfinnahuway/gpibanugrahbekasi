import offerings from "../img/offerings.jpg";

const Offerings = () => {
  return (
    <>
      {/* Hero Section Content */}
      <section className="sm:w-full h-[60vh] flex justify-center mb-10">
        <main className="flex w-full h-[60vh]  justify-center bg-[linear-gradient(to_left_bottom,rgba(17,34,52,100),rgba(5,3,66,0.8))]">
          <div
            className="w-full h-[60vh] bg-cover bg-center bg-no-repeat absolute -z-10 bg-fixed"
            style={{ backgroundImage: `url(${offerings})` }}
          ></div>
          <div className="w-full flex flex-col justify-center items-center ">
            <div className="p-10">
              <h1 className="sm:text-3xl lg:text-5xl font-[500] italic text-[#fff] drop-shadow-lg">
                "Persembahan Syukur Jemaat"
              </h1>
            </div>
            <div>
              <a
                className="p-4 border-2 border-white text-xl font-[500] text-white"
                href=""
              >
                Klik Disini
              </a>
            </div>
          </div>
        </main>
      </section>
      {/* End Hero Section Content */}
    </>
  );
};

export default Offerings;
