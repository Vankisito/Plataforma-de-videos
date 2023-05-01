import {  Box } from "@mui/material"
import { Link } from "react-router-dom"
import "./index.css"


const NavVar = () => {
    return <Box
    sx={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "black",
        justifyContent: "space-around",
        borderBottom: "2px solid #2A7AE4",
        paddin: "1rem"
        
    }}
    >
    <Link to="/"><img src="https://fontmeme.com/permalink/230501/efcdd449a339c4d8c1b34f69850d2c39.png" alt="netflix-font" border="0"/></Link>
    <Link to="/subirvideo" className="BontonUpload" >Subir video</Link>
    
    </Box>
}

export default NavVar