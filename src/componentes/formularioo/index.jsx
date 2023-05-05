import { useRef, useState } from "react"
import { Box, TextField } from "@mui/material"
import { validarTitulo,validarGeneral } from "./validaciones"
import BottonP from "./boton/principal"
import styled from "styled-components"
import "./index.css"
import { v4 as uuidv4 } from 'uuid';
import BottonS from "./boton/secundario"
import { Link } from "react-router-dom"
import ListaOpciones from "./ListaOpciones"

const CostumeField = styled(TextField)`
    color: #E5E5E5;
    width: 95%;
`

const Titulo = styled.h1`
    font-weight:400;
    color: #f5f5f5;
    font-size: 60px;
    text-align: center;
    font-family: 'Roboto', sans-serif;
`

const Form = (props) => {
    const form = useRef()

    const [titulo,setTitulo] = useState({
        label: "Titulo",
        valid: null,
        type: "text",
        value: ""
    })
    const [linkVideo,setLinkVideo] = useState({
        label: "Link del video",
        valid: null,
        type: "text",
        value: ""
    })
    const [linkImg,setLinkImg] = useState({
        label: "Link de la imagen",
        valid: null,
        type: "text",
        value: ""
    })
    const [categoria,setCategoria] = useState({
        valid: null,
        value: ""
    })
    const [Descripcion,setDescripcion] = useState({
        label: "Descripcion",
        valid: null,
        type: "text",
        value: ""
    })
    const [codigo,setCodigo] = useState({
        label: "Codigo",
        valid: null,
        type: "text",
        value: ""
    })
    
    const onSubmit = (e) => {
        e.preventDefault()
        form.current.reset()
        e.target.reset()
        if(titulo.valid && linkVideo.valid && linkImg.valid && Descripcion.valid && codigo.valid) {
            form.current.reset()
            e.target.reset()
            props.NuevoVideo({
                id: uuidv4(),
                titulo : titulo.value,
                linkVideo: linkVideo.value,
                linkImg: linkImg.value,
                genero: categoria.value,
                descripcion: Descripcion.value,
                codigo: codigo.value,
            })
        }   
    }


    return (<Box
        ref={form}
        component="form"
        autoComplete="off"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around ",
          flexDirection: "row",
          backgroundColor: "#000000e0",
          flexWrap: "wrap",
        }
    }
        onSubmit={(e) => onSubmit(e)}
    >
        <Titulo>Nuevo Video</Titulo>
        <CostumeField label={titulo.label} className="campo-texto" variant="filled"  margin="normal" type={titulo.type} error={titulo.valid === false} helperText={titulo.valid === false && "Ingresa un titulo valido"} value={titulo.value} onChange={(e) => setTitulo({value:e.target.value,valid:validarTitulo(e.target.value)})}/>
        <CostumeField label={linkVideo.label} variant="filled" className="campo-texto" margin="normal"  type={linkVideo.type} error={linkVideo.valid === false} helperText={linkVideo.valid === false && "Ingresa un link valido"} value={linkVideo.value} onChange={(e) => setLinkVideo({value:e.target.value,valid:validarGeneral(e.target.value)})}/>
        <CostumeField label={linkImg.label} variant="filled" className="campo-texto" margin="normal"  type={linkImg.type} error={linkImg.valid === false} helperText={linkImg.valid === false && "Ingresa un link valido"} value={linkImg.value} onChange={(e) => setLinkImg({value:e.target.value,valid:validarGeneral(e.target.value)})}/>
        <CostumeField label={Descripcion.label} variant="filled" className="campo-texto" margin="normal" multiline rows={4}  type={Descripcion.type} error={Descripcion.valid === false} helperText={Descripcion.valid === false && "Ingresa una descripcion valida"} value={Descripcion.value} onChange={(e) => setDescripcion({value:e.target.value,valid:validarGeneral(e.target.value)})}/>
        <ListaOpciones value={categoria.value} setValue={setCategoria} categoria={props.categoria}/>
        <CostumeField label={codigo.label} variant="filled" className="campo-texto" margin="normal"  type={codigo.type} error={codigo.valid === false} helperText={codigo.valid === false && "Ingresa un codigo valido"} value={codigo.value} onChange={(e) => setCodigo({value:e.target.value,valid:validarGeneral(e.target.value)})}/>
        <BottonP titulo="Guardar" type="submit"/>
        <BottonS titulo="Limpiar" onClick={() => console.log("hola")}/>
        <Link to="/nuevacategoria" className="Nuevacategoria">Nueva categoria </Link>
    </Box>)
}
export default Form