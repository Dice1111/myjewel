import Hero from "./Hero";
import Services from "./Services";
import WhyChoose from "./WhyChoose";

export default function Home() {
  return (
    <main className="space-y-20">
      <Hero />
      <Services />
      <WhyChoose />
    </main>
  );
}
