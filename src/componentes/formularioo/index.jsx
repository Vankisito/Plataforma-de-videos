import { useState } from "react"
import CampoTexto from "./Campotexto/campoTexto"
import { Box } from "@mui/material"
import { validarTitulo,validarCodigo,validarDescripcion,validarLinkImg,validarLinkVideo } from "./validaciones"
import BottonP from "./boton/principal"

const Form = () => {

    const handleChangeTitulo = (e, i, validator) => {
        const value = e.target.value;
        const valid = validator(value)
        setInfoForm({titulo: value})
        setInputs(inputs[0].value = value)
        console.log(infoForm.titulo)

    }
    const handleChangeLinkVideo = (e, i, validator) => {
        const value = e.target.value;
        const valid = validator(value)
        setInfoForm({linkVideo: value})
        setInputs(inputs[i].valid =valid)


    }
    const handleChangeLinkImg = (e, i, validator) => {
        const value = e.target.value;
        const valid = validator(value)
        setInfoForm({linkImagen: value})
        setInputs(inputs[i].valid =valid)


    }
    const handleChangeDescripcion = (e, i, validator) => {
        const value = e.target.value;
        const valid = validator(value)
        setInfoForm({descripcion: value})
        setInputs(inputs[i].valid =valid)

    }
    const handleChangeCodigo = (e, i, validator) => {
        const value = e.target.value;
        const valid = validator(value)
        setInfoForm({codigo: value})
        setInputs(inputs[i].valid =valid)

    }

    const [infoForm, setInfoForm] = useState(
        {
            titulo: "",
            linkVideo: "",
            linkImagen: "",
            categoria: "",
            descripcion: "",
            codigo: "",   
        },
    )

    const [inputs,setInputs] = useState([
        {
            label: "Titulo",
            type: "text",
            value: "",
            valid: null,
            onChange: handleChangeTitulo,
            helperText: "Ingresa un titulo.",
            validator: validarTitulo,
        },
        {
            label: "Link del video",
            type: "text",
            value: "",
            valid: null,
            onChange: handleChangeLinkVideo,
            helperText: "Ingresa un link valido.",
            validator: validarLinkVideo,
        },
        
        {
            label: "Link imagen del video",
            type: "text",
            value: "",
            valid: null,
            onChange: handleChangeLinkImg,
            helperText: "Ingresa un enlace valido.",
            validator: validarLinkImg,
        },
        {
            label: "Descripcion",
            type: "text",
            value: "",
            valid: null,
            onChange: handleChangeDescripcion,
            helperText: "Ingresa una descripcon.",
            validator: validarDescripcion,
        },
        {
            label: "Codigo de seguridad",
            type: "text",
            value: "",
            valid: null,
            onChange: handleChangeCodigo,
            helperText: "Ingresa un codigo.",
            validator: validarCodigo,
        },
    ])

    return (<Box>
        
        <CampoTexto data={inputs}/>
        <BottonP/>
    </Box>)
}
export default Form