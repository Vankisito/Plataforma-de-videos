import {  Box } from "@mui/material"
import { Link } from "react-router-dom"
import "./index.css"
import styled from "styled-components"
const Logo = styled.div`
    display: flex;
    justify-content: center;

`
const Botones = styled.div`
    display: flex;
    justify-content: end;

    @media(max-width: 768px) {

    display:none;
    }
`
const NavVar = () => {
    return <Box
    sx={{
        display:"flex",
        backgroundColor: "black",
        justifyContent: "space-between",
        borderBottom: "2px solid #2A7AE4",
        padding: "1rem"
        
    }}
    >
        <Logo>
            <Link to="/"><img src="https://fontmeme.com/permalink/230501/efcdd449a339c4d8c1b34f69850d2c39.png"  alt="netflix-font" border="0"/></Link>
        </Logo>
        <Botones>
            <Link to="/subirvideo" className="BontonUpload" >Subir video</Link>
            <Link to="/nuevacategoria" className="BontonUpload" >Nueva categoria</Link>
        </Botones>
    
    </Box>
}

export default NavVar