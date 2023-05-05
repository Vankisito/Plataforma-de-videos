import styled from "styled-components"
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
    const Section = styled.section`
        display: flex;
        background-image: url("/bgM.svg");
        flex-direction: column;
        flex-wrap: wrap;
        padding: 1px;
        box-sizing: border-box;
        justify-content:center;
    `
   const Img = styled.img`
    max-width: 300px;
    max-height: 300px;
    border: 2px solid #fff;
    `
    const Titulo = styled.h3`
        font-size: 35px;
        font-weight: 400;
        align-self:center;
        padding: 1rem;
        border-radius: 4px;
        font-family: 'Roboto';
        color: #F5F5F5;
        box-sizing: border-box;
        
    `
    const Videos = styled.div`
        display: flex;
        align-items:center;
        justify-content: center;
        max-width: 100%;
        box-sizing: border-box;
    `

 const Generos = (props) => {
    const { nombre, colorPrimario} = props.datos
    const {videos} = props
    const {id, titulo, linkVideo, linkImg, genero} = props.videos

   const obj = {
    backgroundColor: colorPrimario
   }
   const obj1 = {
    borderColor: colorPrimario
   }

    return <>{
          videos.length > 0 &&
            <Section >
                <Titulo style={obj}> {nombre}</Titulo>
                    <Videos>
                       <Splide
                         options={ {
                            rewind: true,
                            gap : "1rem",
                            label: {Titulo},
                            perPage:3,
                            perMove: 1,
                            start: 0,
                            focus: "center",
                            mediaQuery: 'min',
                            breakpoints: {
                             
                                640: {
                                  perPage: 1,
                                    width: 300
                                },
                              },
                              updateOnMove : true,
                                pagination: false,
                          } }
                       >
                            {
                                videos.map((video,index) => <SplideSlide key={index}><Img src={video.linkImg} alt={titulo} style={obj1}/></SplideSlide>)
                            }
                       </Splide>
                    </Videos>
            </Section>
          
        }
    </>

                    }
export default Generos