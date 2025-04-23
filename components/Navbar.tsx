import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineCalendarDays, HiOutlineUserCircle } from "react-icons/hi2";
import { IoBagOutline, IoSearchOutline } from "react-icons/io5";
import DropDownButton from "./DropDownButton";
import { TbMenu2 } from "react-icons/tb";

// dropdown links Data
const jewel_links = [
  { name: "Jewellery", href: "/jewellery" },
  { name: "Bracelets", href: "/bracelets" },
  { name: "Necklaces", href: "/necklaces" },
  { name: "Earrings", href: "/earrings" },
];

const love_links = [
  { name: "Rings", href: "/rings" },
  { name: "Weddings", href: "/weddings" },
  { name: "Engagements", href: "/engagements" },
];

const gift_links = [
  { name: "Lockets", href: "/lockets" },
  { name: "Boxes", href: "/boxes" },
  { name: "Sets", href: "/sets" },
];

const Navbar = () => {
  return (
    <nav className="z-50 ">
      <div className="border-b-1 text-[11px]">
        <div className="container mx-auto flex justify-center lg:justify-between h-[35px] ">
          <div className="lg:flex lg:items-center hidden">
            <HiOutlineCalendarDays size={22} className="cursor-pointer" />
            <span className="font-[10px] uppercase">Book an appointment</span>
          </div>
          <div className="capitalize flex items-center gap-1">
            <div className="rounded-full w-1 h-1 bg-black"></div>
            <div>
              Exclusive Collection Launch: Discover Timeless Elegance Today
            </div>
            <div className="rounded-full w-1 h-1 bg-black"></div>
          </div>
          <div className="hidden lg:flex lg:items-center lg:gap-5">
            <HiOutlineUserCircle size={22} className="cursor-pointer" />
            <FaRegHeart size={22} className="cursor-pointer" />
            <IoBagOutline size={22} className="cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="border-b-1 text-[13px] px-10">
        <div className="container mx-auto flex justify-between h-20 items-center">
          <div className=" lg:hidden flex items-center gap-2">
            <TbMenu2 size={22} className="cursor-pointer" />
            <HiOutlineCalendarDays size={22} className="cursor-pointer" />
          </div>

          <div className=" h-full flex items-center lg:px-20 border-r-none lg:border-r-1">
            <h1 className="text-4xl">MyJewel</h1>
          </div>

          <div className="hidden lg:flex items-center gap-5">
            <DropDownButton name={"JEWELRY"} links={jewel_links} />
            <DropDownButton name={"LOVE AND ENGAGEMENT"} links={love_links} />
            <DropDownButton name={"GIFTS"} links={gift_links} />

            <Link href={"/#"} className="p-2 rounded hover:bg-accent">
              CUSTOM JEWELRY
            </Link>

            <Link href={"/#"} className="p-2 rounded hover:bg-accent">
              ABOUT
            </Link>

            <Link href={"/#"} className="p-2 rounded hover:bg-accent">
              CONTACT
            </Link>
          </div>

          <div className="lg:border-l-1 h-full flex items-center justify-center gap-5 lg:px-10">
            <FaRegHeart size={22} className="cursor-pointer lg:hidden" />
            <IoBagOutline size={22} className="cursor-pointer lg:hidden" />
            <IoSearchOutline size={25} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
