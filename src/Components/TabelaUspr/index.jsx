import './style.css';
import iconFiltro from '../../assets/filtro.png'
import barra from '../../assets/barra.png'
import editar from '../../assets/editar.png'
import lixeira from '../../assets/lixeira.png'


export function TabelaUspr() {


    return(
        <div className='containerTabela'>
            <div className='cabecalhoTabela'>

            <section>
                <h3>Listagem de USPRs</h3>
            </section>
            <section>
                <img src={iconFiltro} alt="filtroIcon" />
                <img src={barra} alt="" id='barra'/>
                <button id='add'>Adicionar Unidade</button>
                <button id='pdf'>Gerar PDF</button>
            </section>
            </div>
            <hr />
        <div className='tabela'>

        <table class="table table-sm">
         <thead>
            <tr>
            <th scope="col">Código</th>
            <th scope="col">Nome da USPR</th>
            <th scope="col">Cidade</th>
            <th scope="col">Responsável</th>
            <th scope="col">Telefone</th>
            <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            <tr className='linha1'>
            <th scope="row">001</th>
            <td>Unidade 1</td>
            <td>Fortaleza</td>
            <td>Reponsável 1</td>
            <td>(00) 00000-0000</td>
            <td id='icons'><img src={editar} alt="" id='editar' /><img src={lixeira} alt="" id='lixeira'/></td>
            </tr>
            <tr>
            <th scope="row">002</th>
            <td>Unidade 2</td>
            <td>Jucás</td>
            <td>Responsável 2</td>
            <td></td>
            </tr>
            <tr className='linha1'>
            <th scope="row">003</th>
            <td colspan="1">Unidade 3</td>
            <td colspan="1">Iguatu</td>
            <td>Responsável 3</td>
            <td></td>
            <td id='icons'><img src={editar} alt="" id='editar' /><img src={lixeira} alt="" id='lixeira'/></td>
            </tr>
        </tbody>
        </table>
        </div>
        </div>
    )
}