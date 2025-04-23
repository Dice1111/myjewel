import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

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

interface carouselProps {
  testimonials: Testimonial[];
}

const CarouselComponent = ({ testimonials }: carouselProps) => {
  return (
    <Carousel className="w-full max-w-6xl mx-auto">
      <CarouselContent className="px-4">
        {testimonials.map((item, index) => (
          <CarouselItem key={index} className="p-4 md:basis-1/2 lg:basis-1/4">
            <div className="border p-6 rounded-lg text-center shadow-sm bg-white h-full flex flex-col items-center">
              <Image
                src={item.profileImage}
                alt={item.name}
                width={100}
                height={100}
                className="rounded object-cover mb-4"
              />
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-500 mb-3">{item.title}</p>
              <p className="text-sm text-gray-700 italic">"{item.message}"</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-[-40px]" />
      <CarouselNext className="right-[-40px]" />
    </Carousel>
  );
};

export default CarouselComponent;
