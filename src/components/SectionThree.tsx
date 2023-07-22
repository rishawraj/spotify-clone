import PlanCard from "./PlanCard";

function SectionThree() {
  return (
    <section>
      <h1>Pick you Premium</h1>
      <p>Listen without limits on your phone, speaker, and other devices.</p>
      <div className="flex gap-2">
        <PlanCard />
        <PlanCard />
        <PlanCard />
        <PlanCard />
      </div>
    </section>
  );
}

export { SectionThree };
