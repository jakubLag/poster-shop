import NavbarListElement from "./NavbarListElement";
import { ShoppingBasket } from "lucide-react";
import Link from "next/link";
import { Switch } from "../ui/switch";
import ThemeToggle from "./ThemeToggle";
const Navbar = () => {
  return (
    <div className="p-5 pr-30 flex justify-between items-center">
      <Link href={"/"}>
        <h1 className="font-bold text-5xl bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
          PosterVoteS.
        </h1>
      </Link>
      <div className="flex gap-25">
        <Link href="/wall">
          <h2 className="text-pink-500 text-xl cursor-pointer">Posters</h2>
        </Link>
        <Link href="/cart">
          <ShoppingBasket color="#f6339a" className="cursor-pointer" />
        </Link>
        <ThemeToggle />
      </div>
    </div>
  );
};
export default Navbar;
