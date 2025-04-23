import Explore from "./Explore";
import Hero from "./Hero";
import Services from "./Services";
import Testimonials from "./Testimonials";
import WhyChoose from "./WhyChoose";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyChoose />
      <Explore />
      <Testimonials />
    </main>
  );
}
