import "./Header.css";
import HeaderMenu from "../Menu/HeaderMenu.js";

export default function Header() {
  return (
    <header className="header">
      <div className="title-parent">
        <div className="title">SK.TECH</div>
        <div className="subtitle">IT技術系ブログ</div>
      </div>
      <HeaderMenu />
    </header>
  );
}
