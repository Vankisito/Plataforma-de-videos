import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
export const [categorias,setCategorias] = useState([
    {
      id: uuidv4(),
      nombre: "Reggaeton",
      colorPrimario: "#6BD1FF"
    },
    {
      id: uuidv4(),
      nombre: "Salsa",
      colorPrimario: "#9CD33B"
    },
    {
      id: uuidv4(),
      nombre: "Bachata",
      colorPrimario: "#00C86F"
    },
    {
      id: uuidv4(),
      nombre: "Trap",
      colorPrimario: "#6B5BE2"
    },
    {
      id: uuidv4(),
      nombre: "Rap",
      colorPrimario: "#FFBA05"
    },
    {
      id: uuidv4(),
      nombre: "Pop",
      colorPrimario: "#FF8C2A"
    },
    {
      id: uuidv4(),
      nombre: "Indie",
      colorPrimario: "#DC6EBE"
    },
    {
      id: uuidv4(),
      nombre: "Vallenato",
      colorPrimario: "#9CD33B"
    },
   
  ])
  