import { FormContainer2 } from "./style";
import "./style.css";

export function FormularioUspr() {
  return (
    <FormContainer2>
      <div className="containerFormulario">
        <section className="cabecalhoFormulario">
          <h3>Dados da USPR</h3>
          <button>Gerar PDF</button>
        </section>
        <hr />
        <div className="formulario2">
          <div className="linha">
            <section id="linha1">
              <label htmlFor="razao">Nome da USPR:</label>
              <input type="text" id="razao" />
            </section>
            <section id="linha1">
              <label htmlFor="cnpj">CNPJ:</label>
              <input type="text" id="cpnj" />
            </section>
          </div>
          <div className="linha excecao">
            <section>
              <label htmlFor="ende">Endereço:</label>
              <input type="text" id="ende" />
            </section>
            <section>
              <label htmlFor="tel">Telefone:</label>
              <input type="text" id="tel" />
            </section>
          </div>

          <div className="linha">
            <section>
              <label htmlFor="bairro">Bairro:</label>
              <input type="text" id="bairro" />
            </section>
            <section>
              <label htmlFor="muni">Município:</label>
              <input type="text" id="muni" />
            </section>
          </div>

          

          <div className="linha">
            <section>
              <label htmlFor="cep">CEP:</label>
              <input type="text" id="cep" />
            </section>
            <section>
              <label htmlFor="comp">Complemento:</label>
              <input type="text" id="comp"/>
            </section>
          </div>
          
          <div className="linha">
            <section>
              <label htmlFor="contato">Contato:</label>
              <input type="text" id="contato" />
            </section>
            <section>
              <label htmlFor="telco">Telefone - Contato:</label>
              <input type="text" id="telco" />
            </section>
          </div>
          <div className="buttonSave">
            <button>Salvar</button>
          </div>
        </div>
      </div>
    </FormContainer2>
  );
}
