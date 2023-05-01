import styled from "styled-components"

const Bottons = styled.button`
    color: #000;
    background-color: #9E9E9E;
    border-radius: 4px;
    font-family: 'Source Sans Pro', sans-serif;
    font-size:21px;
    font-weight:600;
    text-align:center;
    cursor: pointer;
    padding: .75rem 1.5rem;
    border: none;
    margin: 1rem;
`

const BottonS = ({titulo}) => {
 return <Bottons >{titulo}</Bottons>
     
}
export default BottonS