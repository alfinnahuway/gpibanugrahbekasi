import gereja from "../img/GPIB-anugrah-bks.jpg";

const About = () => {
  return (
    <>
      <section className="w-full mb-10">
        <main className="w-[88%] mx-auto">
          <div className="grid lg:grid-flow-col sm:grid-cols-1 lg:grid-cols-2 w-full gap-3">
            <div className="flex justify-center items-center">
              <img
                className="w-full lg:h-[90vh] md:w-[50vw] md:h-[80vh] sm:h-[60vh] "
                src={gereja}
                alt=""
              />
            </div>
            <div className="w-full col-span-1">
              <h1 className=" font-semibold mb-3">ABOUT US</h1>
              <h1 className="text-3xl font-bold mb-3">
                Sekilas Tentang GPIB Anugrah Bekasi
              </h1>
              <p className="text-justify">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo,
                cupiditate quia! Sint officia soluta voluptatem distinctio
                fugiat eius asperiores, ipsa aperiam consectetur aliquid illum
                voluptatibus, voluptas quod et quas alias? Eveniet at recusandae
                ut nulla quisquam ipsum illo soluta voluptatum omnis nihil quis
                impedit nisi labore sequi et vero officiis, voluptatem veniam.
                Saepe ea porro laboriosam quo veritatis temporibus nostrum
                assumenda quis quia repellendus ab doloremque iure quibusdam
                consequatur autem placeat tempore asperiores eius ipsum earum,
                optio soluta pariatur tenetur?
              </p>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default About;
