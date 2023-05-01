import BannerMain from './componentes/Pagprincipal/BannerMain';
import NavVar from './componentes/Pagprincipal/Navvar/index';
import Form from './componentes/formularioo';
import { useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './componentes/Pagprincipal/footer';

 
function App() {
  const [categorias,setCategorias] = useState([
    {
      id: uuidv4(),
      nombre: "Reggaeton",
      colorPrimario: "#6BD1FF",
      descripcion: "",
      codigo: ""
    },
    {
      id: uuidv4(),
      nombre: "Salsa",
      colorPrimario: "#9CD33B",
      descripcion: "",
      codigo: ""
    },
    {
      id: uuidv4(),
      nombre: "Bachata",
      colorPrimario: "#00C86F",
      descripcion: "",
      codigo: ""
    },
    {
      id: uuidv4(),
      nombre: "Trap",
      colorPrimario: "#6B5BE2",
      descripcion: "",
      codigo: ""
    },
    {
      id: uuidv4(),
      nombre: "Rap",
      colorPrimario: "#FFBA05",
      descripcion: "",
      codigo: ""
    },
    {
      id: uuidv4(),
      nombre: "Pop",
      colorPrimario: "#FF8C2A",
      descripcion: "",
      codigo: ""
    },
    {
      id: uuidv4(),
      nombre: "Indie",
      colorPrimario: "#DC6EBE",
      descripcion: "",
      codigo: ""
    },
    {
      id: uuidv4(),
      nombre: "Vallenato",
      colorPrimario: "#9CD33B",
      descripcion: "",
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
    }
  ])

  //nuevo video
  const NewVideo = (Video) => {
    setVideos([...Videos,Video])
  }


  useEffect(() =>{
    console.log(Videos)
},[Videos])


  return (
    <div className="App">
      <Router>
        <NavVar/>
        <Routes>
          <Route path='/' element={<BannerMain/>}/>
          <Route path='/subirvideo' element={<Form categoria={categorias.map((categoria) => categoria.nombre)} NuevoVideo={NewVideo}/>}/>
          <Route path='*' element={<BannerMain/>}/>
        </Routes>
        <Footer/>
      </Router>
      
    
    </div>
  );
}

export default App;
