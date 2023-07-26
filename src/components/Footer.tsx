import SpotifyIcon from "../assets/spotify.svg";
import { BiInstagram } from "./icons/Instagram";
import { BiTwitter } from "./icons/Twitter";
import { BiFacebook } from "./icons/Facebook";
import { BiGlobe } from "react-icons/bi";

function Footer() {
  return (
    <div className="bg-black flex justify-center">
      <div className="bg-black text-white pt-12 p-4 flex flex-col gap-4 md:p-8 md:max-w-3xl lg:max-w-none lg:w-full xl:max-w-6xl">
        {/*  */}
        <div className="lg:flex lg:mt-10 justify-around items-start">
          <div className="flex items-center gap-2 font-semibold mb-6 lg:text-2xl">
            <img src={SpotifyIcon} alt="Spotify Icon" />
            <h1>Spotify Clone</h1>
          </div>

          <div className="md:flex justify-center lg:gap-10 ">
            <div className="flex flex-col gap-y-4 mb-12 md:w-1/3">
              <h3 className="custom-footer-h3">COMPANY</h3>
              <p className="custom-footer-p">About</p>
              <p className="custom-footer-p">Jobs</p>
              <p className="custom-footer-p">For the Record</p>
            </div>

            <div className="flex flex-col gap-y-4 mb-12 md:w-1/3">
              <h3 className="custom-footer-h3">COMMUNITIES</h3>
              <p className="custom-footer-p">For Artists</p>
              <p className="custom-footer-p">Developers</p>
              <p className="custom-footer-p">Advertising</p>
              <p className="custom-footer-p">Investors</p>
              <p className="custom-footer-p">Vendors</p>
            </div>

            <div className="flex flex-col gap-y-4 md:w-1/3">
              <h3 className="custom-footer-h3">USEFUL LINKS</h3>
              <p className="custom-footer-p">Support</p>
              <p className="custom-footer-p">Web Player</p>
              <p className="custom-footer-p">Free Mobile App</p>
            </div>
          </div>

          <div className="flex gap-4 mt-20  lg:mt-5 text-2xl lg:text-4xl">
            <BiInstagram />
            <BiTwitter />
            <BiFacebook />
          </div>
        </div>

        <div className="flex cursor-pointer justify-end items-center text-gray-400 gap-2 hover:text-green-500 text-xs">
          <BiGlobe />
          <p>USA</p>
        </div>

        <div className="text-[10px] cursor-pointer flex justify-between items-start xl:text-[11px]">
          <div className="flex flex-wrap gap-4">
            <p className="py-2 text-gray-400 hover:text-green-500">Legal</p>
            <p className="py-2 text-gray-400 hover:text-green-500 ">
              Privacy Center
            </p>
            <p className="py-2 text-gray-400 hover:text-green-500">
              Privacy Policy
            </p>
            <p className="py-2 text-gray-400 hover:text-green-500">Cookies</p>
            <p className="py-2 text-gray-400 hover:text-green-500">About Ads</p>
            <p className="py-2 text-gray-400 hover:text-green-500">
              Accessibility
            </p>
            <p className="py-2 text-gray-400 hover:text-green-500">
              Notice at Collection
            </p>
            <p className="py-2 text-gray-400 hover:text-green-500">
              Your Privacy Choices
            </p>
          </div>
          <div className="min-w-[85px]">
            <p className="py-2 text-gray-400 hover:text-green-500">
              © 2022 Spotify AB
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Footer };
