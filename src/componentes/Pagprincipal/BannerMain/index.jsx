import styled from "styled-components"
import Generos from "../generos"
import { Link } from "react-router-dom"
import "./index.css"

const DivMain = styled.div`
    display: flex;
    background-image: url("/bgM.svg");
    justify-content: space-evenly;
    align-items: center;
    padding: 20px 20px 60px 20px;
    font-family: 'Roboto', sans-serif;
`

const TextDiv = styled.div`
    margin-left: 2rem;
    width: 70%;
    display: inline-block;
    flex-direction: column;
`
const Titulo = styled.h1`
    margin: 0 0 20px;
    background-color: #6BD1FF;
    display: inline-block;
    box-sizing: border-box;
    color: #f5f5f5;
    padding: 10px;
    border-radius: 4px;
    @media(max-width: 768px){
        display: none;
        font-size: 27px;
        
    }
`
const SubTitulo = styled.h2`
    margin: 0 0 20px;
    color: #f5f5f5;
    @media(max-width: 768px){
        margin: 150px 0;
        font-size: 27px;
        
    }
   
`
const Parrafo = styled.p`
    margin: 0 0 20px;

    width: 400px;
    color: #f5f5f5;
    @media (max-width: 769px){
        display: none;
    }
`

const ImageDiv = styled.div`
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 769px){
        display: none;
    }
`

const Image = styled.img`
    max-width: 100%;
    border: 2px solid#6BD1FF;
    margin-right: 30%;
    @media (max-width: 769px){
        display: none;
    }
`

const DivBM = styled.div`
    display:none;
    background-color: #6BD1FF;
    padding: 1rem;
    margin-top: 1rem;
    @media(max-width: 768px){
    background-color: #6BD1FF;
    display:contents;
    padding: 1rem;
    margin-top: 1rem;
    }
    
`

const BannerMain = ({categoria, video}) => {
    return (<>
    <DivMain>
        <TextDiv>
            <Titulo> Reggaeton </Titulo> 
            <SubTitulo>Challenge React</SubTitulo>
            <Parrafo>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</Parrafo>
        </TextDiv>  
        <ImageDiv>
            <Image src="https://i.ytimg.com/vi/ZPJN-aWvj_U/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC87ZEaKhMVAnQbLQb0r7O0iFAWLA" alt="Imagen referencia" />
        </ImageDiv>
        
    </DivMain>
    {
        categoria.map((data) => <Generos datos={data} key={data.nombre} videos={video.filter(video => video.genero === data.nombre)}/>)
    }

    <DivBM ><Link to="/subirvideo" className="buttonmobile">Subir video</Link></DivBM>
       
    </>)
}

export default BannerMain