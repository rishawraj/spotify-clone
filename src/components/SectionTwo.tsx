import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
import four from "../assets/four.png";

function SectionTwo() {
  return (
    <section className="flex flex-col mb-10 xl:max-w-6xl  xl:m-auto xl:mb-20">
      {" "}
      <h2 className="text-3xl font-semibold text-center my-5 md:my-14 md:text-4xl">
        Why go Premium?
      </h2>
      <div className="w-full flex justify-center pl-5">
        <div className="flex flex-col md:flex-row justify-between gap-y-14 flex-wrap p-4 mb-10  xl:justify-center xl:gap-32  w-full">
          <div className="flex xl:justify-center items-center my-2 gap-6 md:w-3/6 xl:flex-col xl:w-fit ">
            <img className="w-24 xl:w-36 h-fit" src={one} alt="" />
            <div className="flex flex-col gap-2 xl:items-center">
              <h3 className="text-lg font-semibold">Download music.</h3>
              <p>Listen anywhere.</p>
            </div>
          </div>

          <div className="flex items-center my-2 md:w-2/4 gap-6 xl:flex-col xl:w-fit">
            <img className="w-24 xl:w-36 h-fit" src={two} alt="" />
            <div className="flex xl:items-center flex-col gap-2">
              <h3 className="text-lg font-semibold">
                Ad-free music listening.
              </h3>
              <p>Enjoy nonstop music.</p>
            </div>
          </div>

          <div className="flex items-center md:w-2/4 my-2 gap-6 xl:flex-col xl:w-fit ">
            <img className="w-24 xl:w-36 h-fit" src={three} alt="" />
            <div className="flex xl:items-center flex-col gap-2">
              <h3 className="text-lg font-semibold">Play any song.</h3>
              <p>Even on mobile.</p>
            </div>
          </div>

          <div className="flex items-center my-2 md:w-2/4 gap-6 xl:flex-col xl:w-fit ">
            <img className="w-24  xl:w-36 h-fit" src={four} alt="" />
            <div className="flex xl:items-center flex-col gap-2">
              <h3 className="text-lg font-semibold">Unlimited skips.</h3>
              <p>Just hit next.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { SectionTwo };
