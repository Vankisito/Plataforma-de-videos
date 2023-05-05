import styled from "styled-components";
import { useState } from "react";
import { TextField } from "@mui/material";
import { v4 as uuidv4 } from 'uuid';
import BottonP from "../boton/principal";
import BottonS from "../boton/secundario";
import { Link } from "react-router-dom";
const CostumeField = styled(TextField)`
    width: 95%;
`

const Titulo = styled.h1`
    font-weight:400;
    color: #f5f5f5;
    font-size: 60px;
    text-align: center;
    font-family: 'Roboto', sans-serif;
`
const Form = styled.form`
    display: flex;
    align-items: flex-start;
    justify-content: space-around ;
    flex-direction: row;
    background-color: #000000e0;
    flex-wrap: wrap;
`

const InputColor = styled.input`
    width: 95%;
    height:40px;
    background-color: #4E5358;
    border: none;
    align-self: center;
    box-sizing: border-box;
`
const InputcolorDiv = styled.div`
    display:flex;
    width: 94.1vw;
    flex-direction:column;
    background-color: #4E5358;
    flex-wrap: wrap;
    margin: .75rem 0;
    color: #1A1F22;
    font-size: 12px;
    font-family: 'Roboto', sans-serif;

`
const Label = styled.label`
    margin-left: 12px;
    font-size: 16px;
    display: inline-block;
`
const FormCategoria = (props) => {

    const validarGeneral = (value) => {
        const length = value.length;
        return length > 3  ? true : false;
    }
    const [nombre,setNombre] = useState({
        label: "Nombre",
        valid: null,
        value: ""
    })
    
    const [descripcion,setDescripcion] = useState({
        label: "Descripcion",
        valid: null,
        value: ""
    })

    const [color,SetColor] = useState({
        label: "Color",
        valid: null,
        value: ""
    })

    const [codigo,setCodigo] = useState({
        label: "codigo",
        valid: null,
        value: ""
    })
    const onSubmit = (e) => {
        e.preventDefault()
        e.target.reset()
        if(nombre.valid && descripcion.valid && color.valid && codigo.valid){
            props.NuevaCategoria({ id: uuidv4(),
                nombre: nombre.value,
                colorPrimario: color.value,
                descripcion: descripcion.value,
                codigo: codigo.value,})
        }
    }


    return(<><Form onSubmit={(e) => onSubmit(e)}>
        <Titulo>Nueva categoria</Titulo>
        <CostumeField label={nombre.label} variant="filled" className="campo-texto" margin="normal" type="text" error={nombre.valid === false} helperText={nombre.valid === false && "Ingresa un nombre valido"} value={nombre.value} onChange={(e) => setNombre({value:e.target.value,valid:validarGeneral(e.target.value)})}/>
        <CostumeField label={descripcion.label} variant="filled" className="campo-texto" margin="normal"  type="text" error={descripcion.valid === false} helperText={descripcion.valid === false && "Ingresa una descripcion de mayor caracteres"} value={descripcion.value} onChange={(e) => setDescripcion({value:e.target.value,valid:validarGeneral(e.target.value)})}/>
        <InputcolorDiv>
            <Label>Color</Label>
            <InputColor  type="color"  value={color.value} onChange={(e) => SetColor({value:e.target.value,valid:validarGeneral(e.target.value)})}/>
        </InputcolorDiv>
        <CostumeField label={codigo.label} variant="filled" className="campo-texto" margin="normal"  type="text" error={codigo.valid === false} helperText={codigo.valid === false && "Ingresa un codigo de mayor caracteres"} value={codigo.value} onChange={(e) => setCodigo({value:e.target.value,valid:validarGeneral(e.target.value)})}/>
        <BottonP titulo="Guardar" type="submit"/>
        <Link to="/categorias" className="Nuevacategoria">Ver categorias</Link>
        </Form>
        
    </>
    )
}
export default FormCategoria