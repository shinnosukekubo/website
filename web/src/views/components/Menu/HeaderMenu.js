import "./HeaderMenu.css";
import MenuText from "./MenuText.js";

export default function HeaderMenu() {
  return (
    <div className="header-menu">
      <MenuText text="Home" path="/" />
      <MenuText text="Blog" path="/blog" />
      <MenuText text="Career" path="/career" />
    </div>
  );
}
