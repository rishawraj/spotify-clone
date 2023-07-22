import SpotifyIcon from "../assets/spotify.svg";
import { BiInstagram } from "./icons/Instagram";
import { BiTwitter } from "./icons/Twitter";
import { BiFacebook } from "./icons/Facebook";

function Footer() {
  return (
    <div className="bg-black text-white p-10 mt-10 flex justify-between">
      <div className="flex items-center space-x-2">
        <img src={SpotifyIcon} alt="Spotify Icon" />
        <h1>Spotify Clone</h1>
      </div>

      <div className="flex space-x-5">
        <BiInstagram />
        <BiTwitter />
        <BiFacebook />
      </div>
    </div>
  );
}

export { Footer };
