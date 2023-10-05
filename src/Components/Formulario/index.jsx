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
            <div className='linha2'>

                <section>
                    <label htmlFor="nomef">Nome Fantasia:</label>
                    <input type="text" id='nomef'/>
                </section>
                <section>
                    <label htmlFor="tel">Telefone:</label>
                    <input type="text" id='tel'/>
                </section>
            </div>
            </div>

        </div>
    )
}