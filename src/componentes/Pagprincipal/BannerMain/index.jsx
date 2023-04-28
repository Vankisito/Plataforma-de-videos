import styled from "styled-components"

const DivMain = styled.div`
    display: flex;
    background-image: url("/bgM.png");
    justify-content: space-evenly;
    align-items: center;
    padding: 20px 20px 130px 20px;
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
`
const SubTitulo = styled.h2`
    margin: 0 0 20px;
    color: #f5f5f5;
`
const Parrafo = styled.p`
    margin: 0 0 20px;
    width: 400px;
    color: #f5f5f5;
`

const ImageDiv = styled.div`
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Image = styled.img`
    max-width: 100%;
    height: auto;
    margin-right: 25%;
`


const BannerMain = () => {
    return <DivMain>
        <TextDiv>
            <Titulo> Reggaeton </Titulo> 
            <SubTitulo>Challenge React</SubTitulo>
            <Parrafo>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</Parrafo>
        </TextDiv>  
        <ImageDiv>
            <Image src="/player.png" alt="Imagen referencia"/>
        </ImageDiv>
    </DivMain>
    
}

export default BannerMain