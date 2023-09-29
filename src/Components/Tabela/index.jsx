import './style.css';



export function Tabela() {


    return(
        <div className='tabela'>

        <table class="table table-sm">
         <thead>
            <tr>
            <th scope="col">Código</th>
            <th scope="col">Nome da unidade gestora</th>
            <th scope="col">CNPJ</th>
            <th scope="col">Responsável</th>
            <th scope="col">Telefone</th>
            <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">001</th>
            <td>Unidade 1</td>
            <td>00.000.000/0001-01</td>
            <td>Reponsável 1</td>
            <td>(00) 00000-0000</td>
            </tr>
            <tr>
            <th scope="row">002</th>
            <td>Unidade 2</td>
            <td>00.000.000/0001-01</td>
            <td>Responsável 2</td>
            <td></td>
            </tr>
            <tr>
            <th scope="row">003</th>
            <td colspan="1">Unidade 3</td>
            <td colspan="1">0000000000</td>
            <td>Responsável 3</td>
            </tr>
        </tbody>
        </table>
        </div>
    )
}