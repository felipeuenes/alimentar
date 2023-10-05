import { Header } from '../../Components/Header'
import './style.css'
import logoGoverno from '../../assets/cearasemfomelogo.png';
import { Tabela } from '../../Components/Tabela';
import { Tabs } from 'antd';
import { Formulario } from '../../Components/Formulario';
const { TabPane } = Tabs;


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
                <section className='tabs'>
                <Tabs defaultActiveKey="1" onChange={(key) => console.log(key)}>
                    <TabPane tab="Listagem" key="1">
                    <Tabela/>
                    
                    </TabPane>
                    <TabPane tab="Detalhamento" key="2">
                    
                    <Formulario/>

                    </TabPane>
                   
                </Tabs>


                </section>
            </div>
        </div>
        </>
    )
}