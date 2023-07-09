const Footer = () => {
  return (
    <>
      <footer className="w-full">
        <main className="w-[88%] mx-auto grid grid-cols-4">
          <div className="w-full p-5">
            <div className="text-justify">
              <h1>Tentang GPIB</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda laudantium necessitatibus natus, tenetur minus.
              </p>
            </div>
            <div>
              <a href=""></a>
              <a href=""></a>
              <a href=""></a>
              <a href=""></a>
            </div>
          </div>
          <div>
            <h1>Unduhan</h1>
            <ul>
              <li>
                <a href="">Warta Jemaat</a>
              </li>
              <li>
                <a href="">Tata Ibadah</a>
              </li>
              <li>
                <a href="">Lain Lain</a>
              </li>
            </ul>
          </div>
          <div>
            <h1>Berita Terbaru</h1>
            <ul>
              <li>
                <a href="">Pelkat</a>
              </li>
              <li>
                <a href="">PKB</a>
              </li>
            </ul>
          </div>
          <div>
            <h1>Lokasi GPIB Anugrah Bekasi</h1>
            <iframe
              className="w-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.918732032256!2d107.04144981476931!3d-6.274415995458625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698e370d8293d9%3A0x5fffbd1f83e52356!2sGereja%20GPIB%20Jemaat%20Anugerah%2CBekasi.!5e0!3m2!1sid!2sid!4v1688730879688!5m2!1sid!2sid"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </main>
      </footer>
    </>
  );
};

export default Footer;
