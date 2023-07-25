import { BiCheck } from "react-icons/bi";

function PlanCard() {
  return (
    <div className="font-Spotify flex flex-col bg-white border-2 p-5 w-96 mb-10 rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <span className="bg-blue-500 text-sm text-white px-2 py-1 rounded w-fit font-bold">
        1 month free
      </span>

      <h1 className="text-2xl font-bold">Indiviual</h1>
      <p>$9.99/month after offer period</p>
      <p>1 account</p>
      <div className="w-full h-0.5 bg-gray-500 my-5"></div>
      <div className="flex items-center text-4xl gap-4 ">
        <BiCheck />
        <p className="text-base">Ad-free music listening</p>
      </div>
      <div className="flex items-center text-4xl gap-4 ">
        <BiCheck />
        <p className="text-base">Play anywhere - even offline</p>
      </div>
      <div className="flex items-center text-4xl gap-4 ">
        <BiCheck />
        <p className="text-base">On demand playback</p>
      </div>

      <button className="custom-plancard-button bg-[#191414] hover:bg-[#0B0909] hover:scale-105 text-white rounded-full cursor-pointer py-3 my-4 uppercase font-semibold focus:outline-none focus:ring-[2px] focus:ring-black focus:ring-offset-4">
        get started
      </button>

      <p className="text-xs">
        <a className="underline" href="#">
          Terms and conditions apply.
        </a>
        1 month free not available for users who have already tried Premium.
      </p>
    </div>
  );
}

export default PlanCard;
