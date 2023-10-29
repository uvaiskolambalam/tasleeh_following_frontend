import React, { useEffect, useState } from 'react'
import { DataGrid, GridToolbar, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import toast from 'react-hot-toast'
import { Box, Paper, Stack, Typography } from '@mui/material';
import {Button} from 'antd'
import { AddSponser } from '../components/add-sponser/AddSponser';
import SERVER_URL from '../utils/axios';
import Search from '../components/Table/SearchInput';


function CustomToolbar() {  
    return (
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', color: 'black' }}>
        <GridToolbarContainer>
          <GridToolbarExport  />
          <GridToolbar />
        </GridToolbarContainer>
      </Box>
    );
}
  


const columns = [
    {field:'domestic_sponser_name',headerName:'Name', width:350},
    { field: 'domestic_sponser_eid', headerName: 'Emirates ID', width: 350 },
    { field: 'domestic_sponser_nationality', headerName: 'Nationality', width: 150 },
   
];
  
const data = [
    {
      key: '1',
      name: 'nahu',
      sponser_id: 784199878458746,
      labour_number:107874659,
      emitates_id_exp: '25/04/2025',
      labour_exp: '12/08/2026',
      
      },
      
    
];
  

const Domestic = () => {
    const [filteredData, setFilteredData] = useState([])
    const handleDomesticSponserData = async (values) => {
    
        const response = await SERVER_URL.post('/domestic/addDomesticSponser', values)
        if (response.data.success) {
            
            toast.success(response.data.message)
            getDomesticSponsersData()
        }
        else {
            toast.error("ERROR")
            getDomesticSponsersData()
        }
        console.log(values);
        getDomesticSponsersData()
    }
    
    
    
    const handleSearch = (event) => {
        console.log(event,'evvu');
        const searchTerm = event.target.value.toUpperCase()
        console.log(searchTerm,'evvu');
    
        // const filteredRows = filteredData.filter((row,index) =>
        //   Object.values(row).some((value) => String(value).toLowerCase().includes(searchTerm).Key(index))
        // );
        const filteredRows=filteredData.filter(filteredData=>filteredData.domestic_sponser_name.includes(searchTerm))
    
        setFilteredData(filteredRows);
        if (searchTerm) {
            setFilteredData(filteredRows);
        } else {
            getDomesticSponsersData()
            
        }
    };
    
    
    
    const getDomesticSponsersData = async () => {
        const response = await SERVER_URL.get('/domestic/getDomesticSponsers')
        setFilteredData(response.data.sponsers)
        console.log(response.data,'dom data');
    }
    useEffect(() => {
        getDomesticSponsersData()
    },[])
  return (
      <div>
          <Paper>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" flexWrap>
                    <Typography variant="h4">DOMESTIC SPONSERS</Typography>
                  {/* <Search handleSearch={handleSearch} /> */}
                  <Search handleSearch={ handleSearch} />

                    </Stack>
                <Box sx={{ height: 500, width: '100%', mt: 2 }}>
                  <AddSponser handleDomesticSponserData={ handleDomesticSponserData} />
                        <DataGrid
                            // onRowClick={handleEmployee}
                        columns={columns}
                            rows={filteredData}
                            initialState={{
                                pagination: { paginationModel: { pageSize: 5 } },
                              }}
                              pageSizeOptions={[10, 20, 50]}
                              getRowId={(row) => row._id}
                              slots={{
                                toolbar: CustomToolbar,
                                      }}
                        
                    />
            </Box>
                </Paper>
    </div>
  )
}

export default Domestic