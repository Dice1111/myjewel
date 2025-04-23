
interface Testimonial {
    _id: string;
    name: string;
    title: string;
    link: string;
    profileImage: string;
    rating: number;
    source: string;
    date: string;
    message: string;
    images: string[];
  }

export const getTestimonies = async (): Promise<Testimonial[]> => {
    const testimonials = await fetch("https://api.shapo.io/testimonials?size=6", {
        headers: {
          Authorization: `Bearer ${process.env.SHAPO_KEY}`,
          Accept: "application/json",
        },
        cache: "force-cache",
        next: { revalidate: 86400 }, //24 hours
      });
    
      const data: Testimonial[] = await testimonials.json();
    return data;
};