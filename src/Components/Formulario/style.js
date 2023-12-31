import styled from "styled-components";


export const FormContainer = styled.div`

.containerFormulario{
    border: 0.03rem solid rgba(0, 0, 0, 0.493);
    border-radius: .5rem;
}

.cabecalhoFormulario{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 2.4rem;
}

.cabecalhoFormulario button{
    width: 18.0rem;
    height: 3.5rem;
    background-color: #3A465C;
    color: white;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
}


.formulario2{
    display: flex;
    flex-direction: column;
    padding: 2.4rem;
    margin: 0;
    
}

.formulario2 section{
    display: flex;
    flex-direction: column;
}

.formulario2 section input{
    width: 50.0rem;
}

#linha1{
    width: 100%;
}
#razao , #end{
    width: 100%;
}



.linha{
    display: flex;
    flex-direction: row;
    gap: 1.6rem;
    width: 100%;
}

.linha section{
    width: 100%;
    
}
input, select{
    border-radius: 0.5rem;
    border: solid .05rem #aaa;
    height: 3.0rem;
}

.linha section input{
    width: 100%;
   
}

select{
    height: 3.0rem;
}

.buttonSave{
    width: 100%;
    margin-top: 2.0rem;
    display: flex;
    justify-content: end;
}

.buttonSave button{
    width: 20.0rem;
    background-color: #9CCD5D;
    border: none;
    border-radius: .5rem;
    height: 3.0rem;
    color: white;
    cursor: pointer;
    
}

label{
    font-weight: 700;
    margin: 0;
}


`
