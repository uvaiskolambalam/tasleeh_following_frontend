import React, { useEffect, useState } from 'react';
import { Key } from '@mui/icons-material';
import { NavLink, useNavigate } from "react-router-dom";
import { DataGrid, GridToolbar, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import { Box, Paper, Stack, Typography, Button } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
// import FormDialog from '../components/add-new/FormDialog';
import Search from '../components/Table/SearchInput';
import Addcompany from '../components/add-company-modal/Addcompany';
import SERVER_URL from '../utils/axios';

const data = [
  { id: 1, company: 'Reach British school', employeeCount: 25 },
  { id: 2, company: 'Imperium', employeeCount: 30 },
  { id: 3, company: '3D Power', employeeCount: 35 },
  { id: 5, company: 'MK General Contarctiong', employeeCount: 35 },
  { id: 6, company: 'Al Dhabi Security Services', employeeCount: 35 },
  { id: 7, company: 'Asia Medical', employeeCount: 35 },
  { id: 8, company: 'Tasleeh Typing', employeeCount: 35 },
  { id: 9, company: 'Sea Waves Group', employeeCount: 35 },
  { id: 10, company: 'Best Opticals', employeeCount: 35 },
  // Add more data as needed
];

const columns = [
  // { field: 'id', headerName: 'ID', width: 70 },
  { field: 'email', headerName: 'email', width: 300 },
  { field: 'companyName', headerName: 'companyName', width: 150 },
];

function CustomToolbar() {
  
  
  // const getCompanyDetailsForDisplay = async () => {
  //   const response = await SERVER_URL.get('/companies/getCompanyDetails')
  //   dispatch({ type: "COMPANY", payload: response.data });
  // }
  // const companyDetails = useSelector((state)=>state.companyAllDet  ails)

  
  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', color: 'black' }}>
      <GridToolbarContainer>
        <GridToolbarExport  />
        <GridToolbar />
      </GridToolbarContainer>
    </Box>
  );
}

const Table = () => {
  const navigate=useNavigate()
  // const handleClose = () => setOpen(false);
  // const [open, setOpen] = useState(false);
  const [filteredData, setFilteredData] = useState('');
  // const [CompanyDatas, setCompanyDatas] = useState('')
  // const [allData, setA] = useState(data);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();

    const filteredRows = filteredData.filter((row,index) =>
      Object.values(row).some((value) => String(value).toLowerCase().includes(searchTerm).Key(index))
    );

    setFilteredData(filteredRows);
  };

  // useEffect(() => {
  //   setFilteredData(data);
  // }, [data]);
    
    
    const addNewCompany = () => {
        console.log('addddd');
    }


  
  







  // const dispatch = useDispatch()
  const getCompanyDetails = async () => {
    try {
      const response = await SERVER_URL.get('/companies/getCompanyDetails')
      // dispatch({ type: "COMPANY", payload: response.data });
     
      const companyAllDetails = response.data.company
      setFilteredData(companyAllDetails)
        
      } catch (error) {
        console.log(error, 'error');
      }
  }
  const updateCompanyData = async (formValues)=>{
    const response = await SERVER_URL.post('/companies/companies', formValues)
    getCompanyDetails()
    handleClose()
  }
  const handleClose = () => setOpen(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  useEffect(() => {
    // const getCompanyDetails = async () => {
    //   try {
    //     const response = await SERVER_URL.get('/companies/getCompanyDetails')
    //     console.log('lll');
    //     console.log(response.data);
    //     const companyAllDetails = response.data.company
          
    //     } catch (error) {
    //       console.log(error, 'error');
    //     }
    // }
    // setFilteredData(companyAllDetails)
    getCompanyDetails()
  }, [])
  const handleCompany = () => {
    navigate('/dashboard/companies/users')
  }
  return (
    <Paper sx={{ p: 2 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" flexWrap>
        <Typography variant="h4">Users</Typography>
              <Search handleSearch={handleSearch} />
              {/* <Button variant="contained" onClick={addNewCompany}>Add</Button> */}
        {/* <FormDialog /> */}
        {/* <Button>bbb</Button> */}
        
        <Addcompany
          updateCompanyData={updateCompanyData}
          handleClose={handleClose}
          handleOpen={handleOpen}
          open={open}
        
        />
      </Stack>

          <Box sx={{ height: 400, width: '100%', mt: 2 }}>
              
              <DataGrid
          onRowClick={handleCompany}
          // rows={rows}
          rows={filteredData}
          columns={columns}
          initialState={{
            pagination: { paginationModel: { pageSize: 5 } },
          }}
          // getRowId={filteredData.map((item, index) => {
            
          // })}
          pageSizeOptions={[5, 10, 25]}
          checkboxSelection
          getRowId={(row) => row._id}
          
          // getRowId={(row) => row.internalId} 

          disableRowSelectionOnClick
          slots={{
            toolbar: CustomToolbar,
                  }}
            
        />
      </Box>
    </Paper>
  );
};

export default Table;
