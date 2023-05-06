import BannerMain from './componentes/Pagprincipal/BannerMain';
import NavVar from './componentes/Pagprincipal/Navvar/index';
import Form from './componentes/formularioo';
import {  useState,useEffect } from "react"
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './componentes/Pagprincipal/footer';
import FormCategoria from './componentes/formularioo/FormCategoria';
import Table from './componentes/formularioo/ListaOpciones/Table';
 
function App() {
  const [categorias,setCategorias] = useState([
    {
      id: uuidv4(),
      nombre: "Reggaeton",
      colorPrimario: "#6BD1FF",
      descripcion: "Musica de Reggaeton",
      codigo: ""
    },
    {
      id: uuidv4(),
      nombre: "Salsa",
      colorPrimario: "#9CD33B",
      descripcion: "Musica de salsa",
      codigo: ""
    },
    {
      id: uuidv4(),
      nombre: "Bachata",
      colorPrimario: "#00C86F",
      descripcion: "Musica de Bachata",
      codigo: ""
    },
    {
      id: uuidv4(),
      nombre: "Trap",
      colorPrimario: "#6B5BE2",
      descripcion: "Musica de Trap",
      codigo: ""
    },
    {
      id: uuidv4(),
      nombre: "Rap",
      colorPrimario: "#FFBA05",
      descripcion: "Musica de Rap",
      codigo: ""
    },
    {
      id: uuidv4(),
      nombre: "Pop",
      colorPrimario: "#FF8C2A",
      descripcion: "Musica de Pop",
      codigo: ""
    },
    {
      id: uuidv4(),
      nombre: "Indie",
      colorPrimario: "#DC6EBE",
      descripcion: "Musica de Indie",
      codigo: ""
    },
    {
      id: uuidv4(),
      nombre: "Vallenato",
      colorPrimario: "#9CD33B",
      descripcion: "Musica de Vallenato",
      codigo: ""
    },
  ])

  const [Videos,setVideos] = useState([
    {
      id: uuidv4(),
      titulo: "Dakiti",
      linkVideo: "https://www.youtube.com/watch?v=TmKh7lAwnBI&pp=ygUGZGFraXRp",
      linkImg: "https://i.ytimg.com/vi/TmKh7lAwnBI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBeh4ubgf7hu-IDXhZmGd7vyA8mbg",
      genero: "Reggaeton",
      descripcion: "La cancion mas pegada de todo el mundo",
      codigo: "001"
    },
    {
      id: uuidv4(),
      titulo: "Desesperados",
      linkVideo: "https://www.youtube.com/watch?v=K9mTSekTktw&pp=ygUKZGVzZXNwZXJhbw%3D%3D",
      linkImg: "https://i.ytimg.com/vi/K9mTSekTktw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAqwXO0fr6NvXWf3mTiSOac_i0EoQ",
      genero: "Reggaeton",
      descripcion: "La cancion mas pegada de todo el mundo",
      codigo: "001"
    },
    {
      id: uuidv4(),
      titulo: "Desenfocao",
      linkVideo: "https://www.youtube.com/watch?v=HBdEkUgX95k&pp=ygUKZGVzZXNwZXJhbw%3D%3D",
      linkImg: "https://i.ytimg.com/vi/HBdEkUgX95k/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC77O2G-vk_eyhBfIvY5CpT-nc0rg",
      genero: "Reggaeton",
      descripcion: "La cancion mas pegada de todo el mundo",
      codigo: "001"
    },
    {
      id: uuidv4(),
      titulo: "Modelito",
      linkVideo: "https://www.youtube.com/watch?v=lBx8ZqsxZ3Y&pp=ygUEbW9yYQ%3D%3D",
      linkImg: "https://i.ytimg.com/vi/lBx8ZqsxZ3Y/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBU83DmmWc9xWdCYH9uq0OilP0fYw",
      genero: "Reggaeton",
      descripcion: "La cancion mas pegada de todo el mundo",
      codigo: "001"
    },
    {
      id: uuidv4(),
      titulo: "Costear",
      linkVideo: "https://www.youtube.com/watch?v=fOvKjr-RiVM",
      linkImg: "https://i.ytimg.com/vi/fOvKjr-RiVM/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARh_IBMoHTAP&rs=AOn4CLAEQ6JDFoYk5adBaDb5uwfmThEhOg",
      genero: "Reggaeton",
      descripcion: "La cancion mas pegada de todo el mundo",
      codigo: "001"
    },
    {
      id: uuidv4(),
      titulo: "Mi funeral",
      linkVideo: "https://www.youtube.com/watch?v=xdb_Fhshlig",
      linkImg: "https://i.ytimg.com/vi/xdb_Fhshlig/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDLdbGFKIfp7dzXhw_wvOUFcZOjZA",
      genero: "Reggaeton",
      descripcion: "La cancion mas pegada de todo el mundo",
      codigo: "001"
    },
    {
      id: uuidv4(),
      titulo: "Te soñé de nuevo",
      linkVideo: "https://www.youtube.com/watch?v=eKaD_-Tl544",
      linkImg: "https://i.ytimg.com/vi/eKaD_-Tl544/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDsySfxGcXGgDdQDtWuGJfxGO9bvQ",
      genero: "Reggaeton",
      descripcion: "La cancion mas pegada de todo el mundo",
      codigo: "001"
    },

  ])


  //nuevo video
  const NewVideo = (Video) => {
    setVideos([...Videos,Video])
  }

  const NewCategoria = (Categoria) => {
    setCategorias([...categorias,Categoria])
  }

  //eliminar genero
  const eliminarGenero = (id) => {
    const handleGenero = categorias.filter((genero) => genero.id != id)
    setCategorias(handleGenero)
  }


  
  return (
    <div className="App">
      <Router>
        <NavVar/>
        <Routes>
          <Route path='/' element={<BannerMain categoria={categorias} video={Videos}/>}/>
          <Route path='/subirvideo' element={<Form categoria={categorias.map((categoria) => categoria.nombre)} NuevoVideo={NewVideo}/>}/>
          <Route path='/nuevacategoria' element={<FormCategoria NuevaCategoria={NewCategoria}  categorias={categorias}  setCategorias={setCategorias}/>}/>
          <Route path='*' element={<BannerMain/>}/>
          <Route path='/categorias' element={<Table categorias={categorias} setCategorias={setCategorias} eliminarGenero={eliminarGenero}/>}/>
          
        </Routes>
        <Footer/>
      </Router>
      
    
    </div>
  );
}

export default App;
