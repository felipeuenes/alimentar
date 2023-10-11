import './style.css';
import logomarca from '../../assets/logomarca-menor.png'
import iconInfo from '../../assets/icon-info.png'
import iconConfig from '../../assets/icon-config.png'
import iconPerfil from '../../assets/icon-perfil.png'
import { Link } from 'react-router-dom';


export function Header(){


    return(
        <div className='cabecalho'>
            <section className='menu'>
             <Link to={'/home'}> <img src={logomarca} alt="logomarca" /></Link>  
                <ul>
                 <li><Link to='/unidadesGestoras'>Cadastro</Link></li>
                    <li>Lançamentos</li>
                    <li>Relatórios</li>
                    <div class="dropdown">
 
</div>
                </ul>
            </section>
            <section className='configs'>
                <img src={iconInfo} alt="" />
                <img src={iconConfig} alt="" />
                <img src={iconPerfil} alt="" />
            </section>
            
        </div>
    )
}