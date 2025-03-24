type NavbarListElementProps = {
  text: String;
};

const NavbarListElement = ({ text }: NavbarListElementProps) => (
  <h2 className="text-pink-500 text-xl cursor-pointer">{text}</h2>
);

export default NavbarListElement;
