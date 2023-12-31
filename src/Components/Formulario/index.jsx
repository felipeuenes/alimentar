import { FormContainer } from './style';
import './style.css';


export function Formulario() {


    return(
        <FormContainer>

        <div className='containerFormulario'>
            <section className='cabecalhoFormulario'>
                <h3>Dados da unidade gestora</h3>
                <button>Gerar PDF</button>
            </section>
            <hr />
            <div className='formulario2'>
                <section id='linha1'>
                    <label htmlFor="razao">Razão Social:</label>
                    <input type="text" id='razao'/>
                </section>
            <div className='linha'>

                <section>
                    <label htmlFor="nomef">Nome Fantasia:</label>
                    <input type="text" id='nomef'/>
                </section>
                <section>
                    <label htmlFor="tel">Telefone:</label>
                    <input type="text" id='tel'/>
                </section>
            </div>

            <div className='linha'>
                <section>
                    <label htmlFor="cnpj">CNPJ:</label>
                    <input type="text" id='cnpj'/>
                </section>
                <section>
                    <label htmlFor="inscricao">Inscrição Estadual:</label>
                    <input type="text" id='inscricao'/>
                </section>
            </div>

            <div className='linha'>
                <section className=''>
                    <label htmlFor="end">Endereço:</label>
                    <input type="text" id='end'/>
                </section>
            </div>

            <div className='linha'>
                <section>
                    <label htmlFor="bairro">Bairro:</label>
                    <input type="text" id='bairro'/>
                </section>
                <section>
                    <label htmlFor="municipio">Município:</label>
                    <select name="municipio" id="municipio">
                        <option value="">Iguatu</option>
                        <option value="">Jucás</option>
                        <option value="">Outros</option>
                    </select>
                </section>
            </div>
            <div className='linha'>
                    <section>
                        <label htmlFor="cep">CEP:</label>
                        <input type="text" id='cep'/>
                    </section>
                    <section>
                        <label htmlFor="comp">Complemento:</label>
                        <input type="text" id='comp'/>
                    </section>
            </div>
            <div className='linha'>
                <section>
                    <label htmlFor="contato">Contato:</label>
                    <input type="text" id='contato'/>
                </section>
                <section>
                    <label htmlFor="telco">Telefone - Contato:</label>
                    <input type="text" id='telco'/>
                </section>
            </div>
            <div className='buttonSave'>
                    <button>Salvar</button>
            </div>
            </div>

        </div>
        </FormContainer>
    )
}