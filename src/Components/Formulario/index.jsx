import './style.css';


export function Formulario() {


    return(

        <div className='containerFormulario'>
            <section className='cabecalhoFormulario'>
                <h3>Dados da unidade gestora</h3>
                <button>Gerar PDF</button>
            </section>
            <hr />
            <div className='formulario'>
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
            </div>

        </div>
    )
}