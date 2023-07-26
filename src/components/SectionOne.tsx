function SectionOne() {
  return (
    <main className="bg-[#1C75DE] text-white ">
      <div className="max-w-5xl mx-auto p-3 md:max-w-3xl lg:max-w-5xl">
        <h1 className="text-2xl font-bold py-8 md:text-4xl ">
          Get Premium free for 1 month
        </h1>
        <p className="text-lg tracking-wide py-2 md:text-2xl">
          Only $9.99/month after. Cancel anytime.
        </p>

        <div className="flex flex-col gap-2 my-10 md:flex-row">
          <button className="bg-[#191414] hover:bg-[#0B0909] hover:scale-105 text-white rounded-full cursor-pointer py-3 mx-1 font-semibold focus:outline-none focus:ring-[3px] focus:ring-black focus:ring-offset-4 md:px-10 md:text-base">
            Get Started
          </button>

          <button className="bg-transparent hover:scale-105 rounded-full border-2 border-white py-3 mx-1 font-semibold focus:outline-none focus:ring-[3px] focus:ring-black focus:ring-offset-4 md:px-10 md:text-base ">
            View Plans
          </button>
        </div>

        <p className="text-2xs mt-15 mb-28">
          <a className="underline" href="#">
            Terms and condition apply.
          </a>{" "}
          1 month free not avialble for user who have already tried Premium
        </p>
      </div>
    </main>
  );
  // 0.6875rem
}

export { SectionOne };
