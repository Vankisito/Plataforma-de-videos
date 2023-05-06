import { DataGrid } from '@mui/x-data-grid';
import styled from 'styled-components';

const columns = [
    {field: 'id', headerName: 'ID', width: 100},
    { field: 'Titulo', headerName: 'Titulo', width: 180 },
    { field: 'Descripcion', headerName: 'Descripcion', width: 400 },

  ];
  
const DivStyled = styled.div`
    width: 100%;
    height: 400px;
`
  
  

const Table = (props) => {
    const { setCategorias, categorias, eliminarGenero } = props
    const {id, nombre, descripcion, codigo} = props.categorias


    const rows = categorias.map((categoria,i) => {
        return {id: i, Titulo: categoria.nombre, Descripcion: categoria.descripcion, }
    })

    return(
        <DivStyled>
            <DataGrid
                rows={rows}
                
                columns={columns}
                getRowId={(row) => row.id}
                initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 6 },
                    },
                  }}
               
            />

        </DivStyled>
         )


}

export default Table