import { Header } from '../../Components/Header'
import './style.css'
import logoGoverno from '../../assets/cearasemfomelogo.png';


export function UnidadesGestoras() {


    return(
        <>
            <Header/>
        <div className='CadUnidadesGestoras'>
            <div className='boxUnidadesGestoras'>
                <section className='cabecalhoUnidades'>
                    <section className='texto'>
                        <h3>Unidades Gestoras</h3>
                        <p>Cadastre e acompanhe as unidades gestoras</p>
                    </section>
                    <section className='logomarcas'>
                        <img src={logoGoverno} alt="logomarcas" />
                    </section>
                </section>
                <hr />
                <section>
               



                </section>
            </div>
        </div>
        </>
    )
}