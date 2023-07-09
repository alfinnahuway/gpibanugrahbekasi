import together from "../img/together.jpg";

const Contact = () => {
  return (
    <>
      <section className="w-full h-screen flex justify-center items-center mb-10">
        <main className="w-full h-screen grid lg:grid-cols-3 sm:grid-cols-1 bg-[linear-gradient(to_right_bottom,rgba(17,34,52,100),rgba(5,3,66,0.8))]">
          <div
            className="w-full h-screen bg-cover bg-center bg-no-repeat absolute -z-20 "
            style={{ backgroundImage: `url(${together})` }}
          ></div>
          <div className="w-full flex justify-center items-center p-5">
            <div className="flex justify-center items-center flex-col gap-10 p-10 bg-red-500 rounded-xl text-white">
              <h1 className="sm:text-xl lg:text-4xl font-[700] text-center">
                Hubungi Kami
              </h1>
              <p className="sm:text-sm lg:text-xl text-center font-[400]">
                Jl. Perum. P. Dan K No.Blok A, Lambangsari, Kec. Tambun Sel.,
                Kabupaten Bekasi, Jawa Barat 17510
              </p>
              <p className="sm:text-sm lg:text-xl text-center font-[400]">
                087809378448
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center sm:items-start sm:col-span-2 sm:p-5">
            <div className="flex justify-center items-start flex-col gap-5">
              <h1 className="sm:text-xl lg:text-4xl font-[700] text-white">
                Informasi lebih lengkap kontak kami dibawah ini
              </h1>
              <p className="sm:text-sm lg:text-xl text-white font-[400] text-justify">
                Jangan sungkan untuk menghubungi kami. GPIB Anugrah Bekasi hadir
                dengan khotbah, pelayanan, acara, kesaksian, anggota staf yang
                senantiasa melayani anda
              </p>
              <a
                className="sm:text-sm lg:text-xl p-3 rounded-md text-white font-[500] bg-red-500"
                href="#"
              >
                Kontak Kami
              </a>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Contact;
