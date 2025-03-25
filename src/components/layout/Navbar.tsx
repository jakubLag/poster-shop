import NavbarListElement from "./NavbarListElement";

const Navbar = () => {
  return (
    <div className="p-5 pr-30 flex justify-between items-center">
      <h1 className="font-bold text-5xl bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
        PosterVoteS.
      </h1>
      <div className="flex gap-25">
        <NavbarListElement text="Posters" />
        <NavbarListElement text="Votes" />
        <NavbarListElement text="Top #10" />
      </div>
    </div>
  );
};
export default Navbar;
