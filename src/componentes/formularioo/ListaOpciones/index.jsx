import styled from "styled-components";




const SelectLista = styled.select`
    width: 94vw;
    background-color: #4E5358;
    border: none;
    margin: .75rem 0 .75rem;
    padding: 24px 18px;
    outline-color: #2A7AE4;
    font-size: 16px;
    color: #1A1F22;
    box-sizing: border-box;
`


const ListaOpciones = (props) => {
    const getCambio = (e) => {
        props.setValue({value: e.target.value})
    }

    return (<div>
    
    <SelectLista value={props.value} onChange={getCambio}>
        <option value="" disabled defaultValue="" hidden>Seleccioanar género...</option>
    {props.categoria.map((categoria,index) =>  <option key={index} value={categoria}>{categoria}</option>) }
    </SelectLista>
</div>)
}

export default ListaOpciones