import {  Box } from "@mui/material"
import styled from "styled-components"

const BontonUpload = styled.button`
    background-color: transparent;
    border-radius: 4px;
    color: #f5f5f5;
    border: 1px solid #f5f5f5;
    margin: 20px 0 20px 0;
    padding: 1.1rem;
    cursor: pointer;
    @media(max-width: 768px){
        display: none
    }
        
`
const NavVar = () => {
    return <Box
    sx={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "black",
        justifyContent: "space-around",
        borderBottom: "3.5px solid #2A7AE4",
        
        
    }}
    >
    <img src="/vankiflix.png" alt="logo pagina"></img>
    <BontonUpload>Subir video</BontonUpload>
    
    </Box>
}

export default NavVar