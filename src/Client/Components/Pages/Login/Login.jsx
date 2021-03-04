import useBody from "../../Hooks/useBody";
import bg_login from "../../../Images/bg_login.jpg";
import css from "./Login.module.css";
import { useState } from "react";
import { BiUser, BiKey } from "react-icons/bi";

const cssBody = {
  background: `linear-gradient(140deg, #00000003, #0000009e), url('${bg_login}')`,
  backgroundSize: "cover",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default function Login() {
  useBody(cssBody);
  const [auth, setAuth] = useState({ email: "", password: "" });

  function handleOnChange({ target }) {
    const { name, value } = target;
    setAuth((a) => ({ ...a, [name]: value }));
  }

  return (
    <div className={css.login}>
      <h2>Inicia Sesión</h2>
      <p className={css.lead}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, voluptas?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, voluptas?
      </p>

      <form autoComplete="off">
        <div className={css.group}>
          <BiUser className={css.groupIcon} />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={handleOnChange}
            value={auth.user}
            required
          />
        </div>

        <div className={css.group}>
          <BiKey className={css.groupIcon} />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={auth.password}
            onChange={handleOnChange}
            required
          />
        </div>

        <div className="group">
          <button type="submit">Iniciar</button>
        </div>
      </form>
    </div>
  );
}
