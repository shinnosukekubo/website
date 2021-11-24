import "./MenuText.css";
import { Link } from "react-router-dom";

export default function MenuText({ text, path }) {
  return (
    <Link className="menutext" to={path}>
      {text}
    </Link>
  );
}
