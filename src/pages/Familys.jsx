import React, { useEffect, useState } from 'react';
import { DataGrid, GridToolbar, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import toast from 'react-hot-toast'
import { Box, Paper, Stack, Typography } from '@mui/material';
import { Table, Divider } from 'antd';
import AddFamily from '../components/add-family/AddFamily'
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
  {field:'sponser_name',headerName:'Name', width:350},
  { field: 'sponser_id', headerName: 'Emirates ID', width: 350 },
  { field: 'sponser_company', headerName: 'Company Name', width: 150 },
 
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
  },
];
const Familys = () => {
  const [filteredData, setFilteredData] = useState([])
    const [sponsers,setSponsers]=useState([])
    const handleSponserData = async (values) => {
        const response = await SERVER_URL.post('/familys/familys', values)
        console.log(response.data,'response data');
        if (response.data.success) {
            toast.success(response.data.message)
        } else {
            toast.error(response.data.message)
        }
        // console.log(value,'spornces data');
        getFamilySponsers()
  }
  


  const handleSearch = (event) => {
    console.log(event,'evvu');
    const searchTerm = event.target.value.toUpperCase()
    console.log(searchTerm,'evvu');

    // const filteredRows = filteredData.filter((row,index) =>
    //   Object.values(row).some((value) => String(value).toLowerCase().includes(searchTerm).Key(index))
    // );
    const filteredRows=filteredData.filter(filteredData=>filteredData.sponser_name.includes(searchTerm))

    setFilteredData(filteredRows);
    if (searchTerm) {
        setFilteredData(filteredRows);
    } else {
      getFamilySponsers()
        
    }
  };
  



    const getFamilySponsers=async() => {
        const response = await SERVER_URL.get('/familys/getSponsers')
        const allSponsers = response.data.sponsers
        setFilteredData(allSponsers)
        console.log(allSponsers,'allsponsers');
    }
    useEffect(() => {
        getFamilySponsers()
      }, [])
    
    
    return(
    <>
        {/* <Divider>FAMILY SPONSERS</Divider> */}
        {/* <AddFamily
            handleSponserData={handleSponserData}
        /> */}
        
        {/* <Table columns={columns} dataSource={sponsers} size="middle" /> */}
        <Paper>
        <Stack direction="row" justifyContent="space-between" alignItems="center" flexWrap>
                    <Typography variant="h4">FAMILY SPONSERS</Typography>
                  {/* <Search handleSearch={handleSearch} /> */}
                  <Search handleSearch={ handleSearch} />

          </Stack>
          <Box sx={{ height: 500, width: '100%', mt: 2 }}>
          <AddFamily
            handleSponserData={handleSponserData}
            />
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
    
    </>
)};
export default Familys;