import { useState } from "react";
import "./Login.css";
import { useLogin } from "../../../modules/Auth";
import "../../../resources/global.css";
import { useFetch } from "../../../hocks/Fetch";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [userId, setUserId] = useState("");
  const login = useLogin();

  const handleLogin = () => {
    login(userId);
  };
  return (
    <div className="body">
      <div className="login_text">ユーザーログイン</div>
      <div className="login_form">
        <div className="login_from_content">
          <div className="text_default_color text_title">メールアドレス</div>
          <input
            className="table_row textbox"
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <div className="table_row text_default_color text_title">
            パスワード
          </div>
          <input
            className="table_row textbox"
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <button
            className="login_button"
            onClick={() => User.login(email, password)}
          >
            <div>ログイン</div>
          </button>
        </div>
      </div>
    </div>
  );
}
