import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from '../../dummyData';
import './productList.css'
import { Link } from 'react-router-dom';

const productList = () => {
    const [data, setData] = useState(productRows)

    const handleClick = (id) =>{
        const filteredList = data.filter(item =>item.id !== id );
        setData(filteredList);
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: "name",
            headerName: "Product Name",
            width: 200,
            renderCell: (params) => {
              return (
                <div className="productListItem">
                  <img className="productListImg" src={params.row.img} alt="product" />
                  {params.row.name}
                </div>
              );
            },
        },
        { field: "stock", headerName: "Stock", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
        {
            field:'action',
            headerName:"Action",
            width:150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`/product/${params.row.id}`}>
                            <button className="productListEdit">
                                Edit
                            </button>
                        </Link>
                        <DeleteOutline className="productListDelete" onClick={()=>handleClick(params.id)}/>
                    </>
                )
            }
        }
      ];
  return (
    <div className='productList'>
       <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}

export default productList
