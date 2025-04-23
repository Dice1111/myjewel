import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";

const linkSections = [
  [
    { id: 1, name: "How to Select the Ideal Wedding Band", href: "/#" },
    { id: 2, name: "Lab Grown Diamond Guide", href: "/#" },
  ],
  [
    { id: 1, name: "How to Choose the Engagement Ring", href: "/#" },
    { id: 2, name: "Ring Size Guide", href: "/#" },
  ],
];

const Explore = () => {
  return (
    <section className="lg:pl-20 lg:flex lg:justify-between">
      <div className="px-10 space-y-5 py-20 lg:py-0">
        <h1>Explore More</h1>
        <p className="w-[432px] text-[14px]">
          Looking for more diamond guides, buying tips or details about the 4Cs?
          Explore more of our diamond education pages:
        </p>

        <div className="sm:flex sm:gap-10 space-y-4 text-sm md:space-y-0">
          {linkSections.map((section, idx) => (
            <div key={idx} className="space-y-4 w-full">
              {section.map((link) => (
                <div
                  key={link.id}
                  className="flex justify-between items-center"
                >
                  <div>{link.name}</div>
                  <Button className="rounded-full w-15 h-15 border-2 text-black bg-background hover:text-white cursor-pointer">
                    <BsBoxArrowUpRight />
                  </Button>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full lg:w-[560px]">
        <Image
          src="/images/lady.png"
          alt="lady"
          className="w-full h-auto"
          width={1920}
          height={1080}
        />
      </div>
    </section>
  );
};

export default Explore;
