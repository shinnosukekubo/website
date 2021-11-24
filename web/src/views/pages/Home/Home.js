import logo from "../../../resources/logo.svg";
import go_logo from "../../../resources/golang.webp";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="text">IT系の情報をなどブログを通じて発信しています。</div>
      <img src={go_logo} className="App-logo" alt="go_logo" />
      <img src={logo} className="App-logo" alt="logo" />
      <p>学習のためGOとReactでサイト構築されています。</p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}
