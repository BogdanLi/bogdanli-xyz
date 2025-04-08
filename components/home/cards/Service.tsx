import GradientCard from "@/components/GradientCard";

export default function Service() {
  return (
    <>
      <GradientCard className="col-span-2" variant="tr">
        Web Apps
      </GradientCard>
      <GradientCard variant="tr">Browser Extensions</GradientCard>
      <GradientCard variant="bl">Course Instructing</GradientCard>
    </>
  );
}
