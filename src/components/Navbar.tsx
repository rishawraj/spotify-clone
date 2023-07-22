import SpotifyIcon from "../assets/spotify.svg";
import { BiPersonCircle } from "./icons/ProfileIcon";

function Navbar() {
  return (
    <nav className="bg-black text-white p-5 flex justify-around items-center">
      <div className="flex items-center space-x-2">
        <img src={SpotifyIcon} alt="Spotify Icon" />
        <h1>Spotify Clone</h1>
      </div>
      <div className="flex space-x-5 items-center">
        <h3 className="hover:text-green-500 cursor-pointer">Premium</h3>
        <h3 className="hover:text-green-500 cursor-pointer">Support</h3>
        <h3 className="hover:text-green-500 cursor-pointer">Download</h3>
        <div className="h-4 w-0.5 bg-white"></div>
        <BiPersonCircle />
      </div>
    </nav>
  );
}

export { Navbar };
