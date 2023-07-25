import PlanCard from "./PlanCard";
import visaLogo from "../assets/visa.svg";
import mastercardLogo from "../assets/mastercard.svg";
import amexLogo from "../assets/amex.svg";
import discoverLogo from "../assets/discover.svg";
import paypalLogo from "../assets/paypal.png";

function SectionThree() {
  return (
    <section className="bg-[#EFEFEF] p-4 flex flex-col items-center">
      <h1 className="text-3xl mt-4 font-bold text-center">Pick your Premium</h1>
      <p className="text-base text-center mb-4">
        Listen without limits on your phone, speaker, and other devices.
      </p>
      <div className="flex gap-2 mb-10">
        <img src={visaLogo} alt="visa" className="w-7" />
        <img src={mastercardLogo} alt="mastercard" className="w-7" />
        <img src={amexLogo} alt="amex" className="w-7" />
        <img src={discoverLogo} alt="discover" className="w-7" />
        <img src={paypalLogo} alt="paypal" className="w-7" />
      </div>

      <div className="flex flex-col gap-2">
        <PlanCard />
        <PlanCard />
        <PlanCard />
        <PlanCard />
      </div>
    </section>
  );
}

export { SectionThree };
