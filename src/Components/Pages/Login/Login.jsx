import useBody from "../../Hooks/useBody";
import bg_login from "../../../Images/bg_login.jpg";
import css from "./Login.module.css";

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

  return (
    <div className={css.login}>
      <h2>Inicia Sesión</h2>
      <p className={css.lead}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, voluptas?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, voluptas?
      </p>

      <form autoComplete="off">
        <div className={css.group}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>

        <div className={css.group}>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
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
