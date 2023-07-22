function SectionOne() {
  return (
    <main className="bg-[#1C75DE] text-white flex flex-col p-10">
      <h1 className="text-4xl font-bold my-5">Get Premium free for 1 month</h1>
      <p className="text-xl my-5">Only $9.99/month after. Cancel anytime.</p>

      <div className="flex gap-2 my-5">
        <button className="bg-black text-white rounded-full cursor-pointer py-3 px-8 uppercase font-semibold">
          get started
        </button>
        <button className="bg-transparent rounded-full border border-white py-3 px-8 uppercase font-semibold">
          view plans
        </button>
      </div>

      <p className="text-xs mt-15 mb-20">
        <a className="underline" href="#">
          Terms and condition apply.
        </a>{" "}
        1 month free not avialble for user who have already tried Premium
      </p>
    </main>
  );
  // 0.6875rem
}

export { SectionOne };
