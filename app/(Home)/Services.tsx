import BreadCrumbSeparator from "@/components/BreadCrumbSeparator";
import React from "react";
import Image from "next/image";
const services = [
  {
    id: "01",
    name: "Consultation",
    description:
      "We discuss your vision and preferences to craft a unique design.",
  },
  {
    id: "02",
    name: "Selecting Materials",
    description:
      "Choose from exquisite diamonds, precious metals, and gemstones.",
  },
  {
    id: "03",
    name: "Creating a 3D Model",
    description:
      "Visualize your design with a precise 3D model before production.",
  },
  {
    id: "04",
    name: "Manufacturing",
    description:
      "Expert artisans bring your piece to life with precision and care.",
  },
  {
    id: "05",
    name: "Quality Assurance",
    description: "Every detail is inspected to ensure flawless craftsmanship.",
  },
  {
    id: "06",
    name: "Delivery",
    description:
      "Your custom jewelry is elegantly packaged and delivered to you.",
  },
];

const Services = () => {
  return (
    <section className="container mx-auto pt-10 px-10">
      <div className="relative">
        <BreadCrumbSeparator page_name={"Custom Jewelry"} address={"#"} />
        <div className=" justify-between sm:flex space-y-10">
          <div>
            <h1 className="text-4xl">Custom Jewelry</h1>
            <p className="max-w-[380px] ">
              Create Your Masterpiece: Bespoke Jewelry Crafted for You
            </p>
          </div>
          <div className="space-y-10 flex flex-col-reverse sm:flex-col">
            <p className="max-w-[560px] text-[16px]">
              Exquisite design, flawless craftsmanship, and timeless
              elegance—your vision, perfectly crafted.
            </p>
            <div className="space-y-5 ">
              {services.map((service) => (
                <div key={service.id}>
                  <div className="flex gap-5">
                    <p>{service.id}</p>
                    <div className=" w-full">
                      <h2>{service.name}</h2>
                      <p className="border-b-1 pb-6 w-full">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="sm:absolute sm:bottom-30 sm:left-0 ">
          <div className="w-[300px] relative">
            <Image
              src="/images/small_ring.jpg"
              alt="services"
              className="w-full h-auto"
              width={1920}
              height={1080}
            />
            <div className="w-[200px] absolute -bottom-30 -right-30 p-1 bg-white">
              <Image
                src="/images/small_ring.jpg"
                alt="services"
                className="w-full h-auto"
                width={1920}
                height={1080}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
