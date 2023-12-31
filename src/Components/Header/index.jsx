import "./style.css";
import logomarca from "../../assets/logomarca-menor.png";
import iconInfo from "../../assets/icon-info.png";
import iconConfig from "../../assets/icon-config.png";
import iconPerfil from "../../assets/icon-perfil.png";
import { Link } from "react-router-dom";
import { NavBar } from "./style";

export function Header() {
  return (
    <div className="cabecalho">
      <section className="menu">
        <Link to={"/home"}>
          {" "}
          <img src={logomarca} alt="logomarca" />
        </Link>
        {/* <ul>
          <li>
            <Link to="/unidadesGestoras">Cadastro</Link>
          </li>
          <li>Lançamentos</li>
          <li>Relatórios</li>
        </ul> */}

        
        <NavBar>
          <div class="dropdown">
            <a
              class=" dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Cadastro
            </a>

            <ul class="dropdown-menu">
              <li>
                <Link to="/unidadesGestoras" class="dropdown-item">
                  Unidade Gerenciadora
                </Link>
              </li>
              <li>
                <Link to='/uspr' class="dropdown-item">
                  USPR
                </Link>
                
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Beneficiário
                </a>
              </li>
            </ul>
          </div>
{/*  02  */}
          <div class="dropdown">
            <a
              class=" dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Lançamentos
            </a>

            <ul class="dropdown-menu">
              <li>
                <Link to="#" class="dropdown-item">
                  Consumo diário de MP
                </Link>
              </li>
              <li>
                <Link to='#' class="dropdown-item">
                  Refeições Ofertadas
                </Link>
                
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Diário de Bordo
                </a>
              </li>
            </ul>
          </div>

{/* 03 */}

<div class="dropdown">
            <a
              class=" dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Relatórios
            </a>

            <ul class="dropdown-menu">
              <li>
                <Link to="#" class="dropdown-item">
                  Dados do beneficiário
                </Link>
              </li>
              <li>
                <Link to='#' class="dropdown-item">
                  Dados Estatísticos
                </Link>
                
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Acompanhamento
                </a>
              </li>
            </ul>
          </div>
        </NavBar>
      </section>
      <section className="configs">
        <img src={iconInfo} alt="" />
        <img src={iconConfig} alt="" />
        <img src={iconPerfil} alt="" />
      </section>
    </div>
  );
}
