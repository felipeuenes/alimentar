import './style.css'
import logomarca from '../../assets/logomarca.png';
import logoGoverno from '../../assets/cearasemfomelogo.png'


export function Home() {


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
                                <button>Entrar</button>
                            </section>
                            <section className='help'>
                                <section>
                                     <input type="checkbox" id='relembrar'/> 
                                     <label htmlFor="relembrar">Relembrar</label>
                                </section>
                                <a href=""> 
                                    <p>Esqueceu a senha?</p>
                                    </a>
                            </section>
                        </form>
                    </section>

                </section>
            </div>

        </div>
    )
}