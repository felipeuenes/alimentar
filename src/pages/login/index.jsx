import './style.css'
import logomarca from '../../assets/logomarca.png';
import logoGoverno from '../../assets/cearasemfomelogo.png'
import { Link } from 'react-router-dom';


export function Login() {


    return(

        <div className='home-fundo-geral'>
            <div className='home-box'>
                <section className='logos'>
                    <section className='logoAlimentar'><img src={logomarca} alt="" /></section>
                    <section className='logoGoverno'><img src={logoGoverno} alt="" /></section>
                </section>
                <section className='form'>
                    
                    <section className='login'><h1>LOGIN</h1></section>
                         <hr></hr>
                    <section className='formulario'>
                        <form action="">
                            <section className='inputs'>
                                <label htmlFor="email">Email:</label>
                                <input type="text" id='email'/>
                            </section>
                            <section className='inputs'>
                                <label htmlFor="senha">Senha:</label>
                                <input type="text" id='senha'/>
                            </section>
                            <section className='botao'>
                                <Link to={'/'}>
                                 <button>Entrar</button>
                                </Link>
                            </section>
                            <section className='help'>
                               <section>
                                    <label htmlFor="relembrar">Relembrar:</label>
                                    <input type="checkbox" id='relembrar'/>
                               </section>
                               <section>
                                <p><a href="">Esqueceu a senha?</a></p>
                               </section>
                            </section>
                        </form>
                    </section>

                </section>
            </div>

        </div>
    )
}