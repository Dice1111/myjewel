import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineCalendarDays, HiOutlineUserCircle } from "react-icons/hi2";
import { IoBagOutline, IoSearchOutline } from "react-icons/io5";
import DropDownButton from "./DropDownButton";

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
        <div className="container mx-auto flex justify-between h-[35px] ">
          <div className="flex items-center">
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
          <div className="flex items-center gap-5">
            <HiOutlineUserCircle size={22} className="cursor-pointer" />
            <FaRegHeart size={22} className="cursor-pointer" />
            <IoBagOutline size={22} className="cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="border-b-1 text-[13px]">
        <div className="container mx-auto flex justify-between h-20 items-center">
          <div className=" h-full flex items-center px-20 border-r-1">
            <h1 className="text-4xl">MyJewel</h1>
          </div>

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

          <div className="border-l-1 h-full flex items-center justify-center px-10">
            <IoSearchOutline size={25} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
