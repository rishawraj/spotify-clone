import { useEffect, useRef, useState } from "react";
import SpotifyIcon from "../assets/spotify.svg";
import { BiPersonCircleComponent } from "./icons/ProfileIcon";
import { BiMenu, BiX, BiUserCircle } from "react-icons/bi";

function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);
  const toggleMenuRef = useRef<HTMLDivElement>(null);

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      disableScroll();
    } else {
      enableScroll();
    }
  }, [menuOpen]);

  const disableScroll = () => {
    // Get the current scroll position
    const scrollY = window.scrollY;

    // Prevent scrolling
    // document.body.style.overflow = "hidden";
    document.body.style.overflowY = "scroll";

    // Restore the scroll position to prevent the page from jumping
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
  };

  const enableScroll = () => {
    // Restore the scroll position
    const scrollY = parseInt(document.body.style.top || "0", 10);
    document.body.style.overflow = "";
    document.body.style.position = "";
    document.body.style.top = "";
    window.scrollTo(0, Math.abs(scrollY));
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (
      navRef.current &&
      menuOpen &&
      !navRef.current.contains(e.target as HTMLDivElement)
    ) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className="bg-black">
      <nav className="bg-black text-white p-2 max-w-7xl mx-auto lg:p-5 lg:max-w-5xl md:max-w-3xl sm:max-w-3xl xs:max-w-2xl flex justify-between px-5 items-center">
        <div className="flex items-center gap-2">
          <img src={SpotifyIcon} alt="Spotify Icon" />
          <h1 className="font-semibold">Spotify Clone</h1>
        </div>

        <div className="hidden lg:flex space-x-5 items-center">
          <h3 className="hover:text-green-500 cursor-pointer">Premium</h3>
          <h3 className="hover:text-green-500 cursor-pointer">Support</h3>
          <h3 className="hover:text-green-500 cursor-pointer">Download</h3>
          <div className="h-4 w-0.5 bg-white"></div>
          <BiPersonCircleComponent />
        </div>

        {/* Hamburger menu for md and small screens */}
        <div className="lg:hidden flex items-start">
          {menuOpen ? (
            <BiX
              className="cursor-pointer text-4xl z-10"
              onClick={toggleMenu}
            />
          ) : (
            <div ref={toggleMenuRef} className="flex">
              <BiUserCircle className="cursor-pointer text-4xl z-10" />
              <BiMenu
                className="cursor-pointer text-4xl z-10"
                onClick={toggleMenu}
              />
            </div>
          )}
        </div>
        {menuOpen && (
          <div className="lg:hidden absolute h-screen w-full bg-black bg-opacity-75 top-0 left-0 flex justify-end overscroll-none">
            <div
              ref={navRef}
              className="top-0 right-0 h-full lg:w-3/6 md:w-3/6 w-4/5  bg-black text-white p-4 pl-10 custom-sidenav flex flex-col justify-between "
            >
              <div>
                <h3 className="block text-4xl font-semibold my-5 hover:text-green-500 cursor-pointer">
                  Premium
                </h3>
                <h3 className="block text-4xl font-semibold my-5 hover:text-green-500 cursor-pointer">
                  Support
                </h3>
                <h3 className="block text-4xl font-semibold my-5 hover:text-green-500 cursor-pointer">
                  Download
                </h3>

                <div className="h-0.5 w-4 my-10 bg-white separator"></div>

                <h3 className="block text-2xl my-4 hover:text-green-500 cursor-pointer">
                  Account
                </h3>
                <h3 className="block text-2xl my-4 hover:text-green-500 cursor-pointer">
                  Log out
                </h3>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-10 logo">
                  <img src={SpotifyIcon} alt="Spotify Icon" />
                  <h1 className="font-semibold">Spotify Clone</h1>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export { Navbar };
