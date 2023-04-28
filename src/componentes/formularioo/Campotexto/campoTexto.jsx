import { TextField } from "@mui/material";

const CampoTexto = ({data}) => {
    return(<>
        {data.map((data,i) => {
            const {label, type, value, valid, onChange, helperText, } = data
            return(
            <TextField
            key={i}
            label={label}
            variant="standard"
            fullWidth
            margin="dense"
            type={type}
            error={valid === false}
            helperText={valid === false && helperText}
            value={value}
            onChange={(e) => onChange(e)}/>);
        })}</>)

   
}
export default CampoTexto