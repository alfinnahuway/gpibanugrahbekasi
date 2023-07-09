import { useRef, useState } from "react";
import NavBar from "./nav/NavBar";
import logo from "../img/chruch-logo.png";

const Header = () => {
  const [active, setActive] = useState(null);
  const [toggle, setToggle] = useState(false);
  const showNav = useRef(null);

  const navBarItems = [
    {
      title: "Beranda",
      type: "link",
      path: "/",
    },
    {
      title: "Tentang Gereja",
      type: "list",
      items: [
        {
          title: "Visi & Misi",
          type: "link",
          path: "/",
        },
        {
          title: "Symbol Gereja",
          type: "link",
          path: "/",
        },
        {
          title: "Sejarah",
          type: "link",
          path: "/",
        },
        {
          title: "Fungsionaris",
          type: "link",
          path: "/",
        },
      ],
    },
    {
      title: "Informasi",
      type: "list",
      items: [
        {
          title: "Pendaftaran Jemaat",
          type: "link",
          path: "/",
        },
        {
          title: "Jadwal Ibadah",
          type: "link",
          path: "/",
        },
        {
          title: "Katekisasi Sidi",
          type: "link",
          path: "/",
        },
        {
          title: "Pelayanan",
          type: "link",
          path: "/",
        },
        {
          title: "Rekening GPIB Anugrah",
          type: "link",
          path: "/",
        },
      ],
    },
    {
      title: "Hubungi Kami",
      type: "link",
      path: "/",
    },
  ];

  const handleClick = () => {
    setToggle(!toggle);
    if (showNav.current.classList.contains("sm:h-0")) {
      showNav.current.classList.add("sm:h-screen");
      showNav.current.classList.remove("sm:h-0");
    } else {
      showNav.current.classList.remove("sm:h-screen");
      showNav.current.classList.add("sm:h-0");
    }
  };

  return (
    <>
      {/* Header */}
      <header className="bg-[#f1e7d9] fixed z-50 top-0 right-0 left-0">
        {/* Navigate */}
        <nav className="sm:py-4 flex justify-between  items-center mx-auto w-[88%]">
          {/* Chruch Logo */}
          <a className="flex justify-center items-center " href="#">
            <img className="w-10 inline-block" src={logo} alt="" />
            <div className="flex flex-col  ml-2">
              <span className="sm:text-xl font-[500] text-[#1d1d1c]">
                G P I B
              </span>
              <span className="sm:text-sm mt-[-6px] text-[#1d1d1c]">
                Anugrah Bekasi
              </span>
            </div>
          </a>
          {/* End Logo */}

          {/* List Navigate */}
          <div
            className="flex sm:bg-[#f1e7d9] sm:justify-start sm:inline-block sm:absolute sm:right-0 sm:left-0 sm:top-16 overflow-hidden  sm:transition-height duration-1000 
            ease-out sm:h-0"
            ref={showNav}
          >
            <ul className="w-[88%] sm:mx-auto py-8">
              {navBarItems.map((navItems, index) => (
                <NavBar
                  key={index}
                  navItems={navItems}
                  index={index}
                  active={active}
                  setActive={setActive}
                />
              ))}
            </ul>
          </div>
          {/* End List Navigate */}

          {/* Hamburger Menu */}
          <a
            onClick={() => handleClick()}
            className="text-[#1d1d1c] desktop:hidden  sm:inline-block  sm:absolute right-7 transition duration-150 ease-in-out"
          >
            {!toggle ? (
              <i className="fa-solid fa-bars fa-xl"></i>
            ) : (
              <i className="fa-solid fa-xmark fa-xl"></i>
            )}
          </a>
          {/* End Hamburger Menu */}
        </nav>
        {/* End Navigate */}
      </header>
      {/* End Header */}
    </>
  );
};

export default Header;
