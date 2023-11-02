import { Header } from '../../Components/Header'
import './style.css'
import logoGoverno from '../../assets/cearasemfomelogo.png';

import { Tabs } from 'antd';

import { TabelaUspr } from '../../Components/TabelaUspr';
import { FormularioUspr } from '../../Components/FormularioUspr';
const { TabPane } = Tabs;


export function Uspr() {


    return(
        <>
            <Header/>
        <div className='CadUnidadesGestoras'>
            <div className='boxUnidadesGestoras'>
                <section className='cabecalhoUnidades'>
                    <section className='texto'>
                        <h3>Unidade Social de Produção de Refeição - USPR</h3>
                        <p>Cadastre e acompanhe as USPRs</p>
                    </section>
                    <section className='logomarcas'>
                        <img src={logoGoverno} alt="logomarcas" />
                    </section>
                </section>
                <hr />
                <section className='tabs'>
                <Tabs defaultActiveKey="1" onChange={(key) => console.log(key)}>
                    <TabPane tab="Listagem" key="1">
                    <TabelaUspr/>
                    
                    </TabPane>
                    <TabPane tab="Detalhamento" key="2">
                    
                    <FormularioUspr/>

                    </TabPane>
                   
                </Tabs>


                </section>
            </div>
        </div>
        </>
    )
}