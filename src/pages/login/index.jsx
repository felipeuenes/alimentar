import "./style.css";
import logomarca from "../../assets/logomarca.png";
import logoGoverno from "../../assets/cearasemfomelogo.png";
import { Link } from "react-router-dom";
import { FormLogin } from "./style.js";

export function Login() {
  return (
    <div className="home-fundo-geral">
      <div className="home-box">
        <div className="logos">
          <section className="logoAlimentar">
            <img src={logomarca} alt="" />
          </section>
          <section className="logoGoverno">
            <img src={logoGoverno} alt="logogoverno" id="logoGoverno" />
          </section>
        </div>

        <FormLogin>
          <form action="">
            <section className="login">
              <h1>LOGIN</h1>
            </section>
            <hr></hr>
            <div className="formulario">
              <section>
                <label htmlFor="email">E-mail:</label>
                <input type="text" id="email" />
              </section>
              <section>
                <label htmlFor="senha">Senha:</label>
                <input type="password" id="senha" />
              </section>

              <div className="btn">
                <Link to={"/home"}>
                  {" "}
                  <button>Entrar</button>{" "}
                </Link>
              </div>
              <div className="ajuda">
                <section id="checkbox">
                  <input type="checkbox" />
                  <p>Relembrar</p>
                </section>
                <section>
                  <p>Esqueci a senha</p>
                </section>
              </div>
            </div>
          </form>
        </FormLogin>
      </div>
    </div>
  );
}
