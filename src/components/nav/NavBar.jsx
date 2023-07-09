const NavBar = ({ navItems, index, active, setActive }) => {
  return (
    <>
      {navItems.type === "list" ? (
        <li className="bg-[#e7ddce] sm:mb-2" key={index}>
          <button
            className="flex justify-between items-center w-full  text-left sm:p-2"
            onClick={() => {
              setActive(active === index ? null : index);
            }}
          >
            <span>{navItems.title}</span>
            <svg
              className={`transition-all duration-300 ${
                index === active ? "rotate-90" : "rotate-0"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 320 512"
            >
              <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
            </svg>
          </button>
          <ul
            className={`overflow-hidden transition-all duration-300 sm:ml-4 ${
              index === active ? "h-52" : "h-0"
            }`}
          >
            {navItems.items.map((e, i) => {
              return (
                <a
                  key={i}
                  className="inline-block w-full sm:my-3"
                  href={e.path}
                >
                  {e.title}
                </a>
              );
            })}
          </ul>
        </li>
      ) : (
        <li key={index} className="sm:mb-2">
          <a className="inline-block w-full sm:p-2" href={navItems.path}>
            {navItems.title}
          </a>
        </li>
      )}
    </>
  );
};

export default NavBar;
