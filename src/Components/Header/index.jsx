import './style.css';
import logomarca from '../../assets/logomarca-menor.png'
import iconInfo from '../../assets/icon-info.png'
import iconConfig from '../../assets/icon-config.png'
import iconPerfil from '../../assets/icon-perfil.png'


export function Header(){


    return(
        <div className='cabecalho'>
            <section className='menu'>
                <img src={logomarca} alt="logomarca" />
                <ul>
                    <li>Cadastro</li>
                    <li>Lançamentos</li>
                    <li>Relatórios</li>
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