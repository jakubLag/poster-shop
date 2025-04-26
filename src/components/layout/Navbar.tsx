import NavbarListElement from "./NavbarListElement";
import { ShoppingBasket } from "lucide-react";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="p-5 pr-30 flex justify-between items-center">
      <h1 className="font-bold text-5xl bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
        PosterVoteS.
      </h1>
      <div className="flex gap-25">
        <NavbarListElement text="Posters" />
        <NavbarListElement text="Votes" />
        <Link href="/cart"><ShoppingBasket color="#f6339a" className="cursor-pointer"/></Link>
      </div>
    </div>
  );
};
export default Navbar;
