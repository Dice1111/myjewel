import CarouselComponent from "@/components/CarouselComponent";
import { getTestimonies } from "@/lib/getTestimonies";

const Testimonials = async () => {
  const testimonials = await getTestimonies();

  return (
    <section className="flex flex-col justify-center items-center py-20">
      <h1>Testimonials</h1>
      <CarouselComponent testimonials={testimonials} />
    </section>
  );
};

export default Testimonials;
