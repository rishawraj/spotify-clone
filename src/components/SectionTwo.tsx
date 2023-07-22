import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
import four from "../assets/four.png";

function SectionTwo() {
  return (
    <section className="bg-green-200 flex flex-col items-center">
      <h2 className="text-4xl">Why go Premium</h2>

      <div className="flex flex-col">
        <ul className="flex">
          <li className="flex gap-2">
            <img style={{ width: "100px", height: "100px" }} src={one} alt="" />
            <div>
              <h3>Download music.</h3>
              <p>Listen anywhere.</p>
            </div>
          </li>
          <li>
            <img style={{ width: "100px" }} src={two} alt="" />
            <div>
              <h3>Ad-free music listening.</h3>
              <p>Enjoy nonstop music.</p>
            </div>
          </li>
          <li>
            <img style={{ width: "100px" }} src={three} alt="" />
            <div>
              <h3>Play any song.</h3>
              <p>Even on mobile.</p>
            </div>
          </li>
          <li>
            <img style={{ width: "100px" }} src={four} alt="" />
            <div>
              <h3>Unlimited skips.</h3>
              <p>Just hit next.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export { SectionTwo };
