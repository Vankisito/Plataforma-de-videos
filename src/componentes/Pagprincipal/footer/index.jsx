import { Box } from "@mui/material"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Img = styled.img`
    margin-top:20px;
`


const Footer = () => {
    return <Box
    sx={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "black",
        justifyContent: "Center",
        borderTop: "2px solid #2A7AE4",
        paddingBottom: "1.25rem",
    }}
    >
    <Link to="/"><Img src="/vankiflix.png" alt="LOGO"/></Link>
    
    </Box>
}

export default Footer