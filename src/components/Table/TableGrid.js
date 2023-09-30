import React, { useEffect, useState } from 'react';
import { DataGrid, GridToolbar, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import { Box, Paper, Stack, Typography } from '@mui/material';

import Search from './SearchInput';

const data = [
  { id: 1, name: 'John Doe', age: 25 },
  { id: 2, name: 'Jane Smith', age: 30 },
  { id: 3, name: 'Bob Johnson', age: 35 },
  { id: 5, name: 'Bob Johnson', age: 35 },
  { id: 6, name: 'Bob Johnson', age: 35 },
  { id: 7, name: 'Bob Johnson', age: 35 },
  { id: 8, name: 'Bob Johnson', age: 35 },
  { id: 9, name: 'Bob Johnson', age: 35 },
  { id: 10, name: 'Bob Johnson', age: 35 },
  // Add more data as needed
];

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'age', headerName: 'Age', width: 70 },
];
function CustomToolbar() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', color: 'black' }}>
      <GridToolbarContainer>
        {/* <GridToolbarExport  /> */}
        <GridToolbar />
      </GridToolbarContainer>
    </Box>
  );
}
const Table = () => {
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();

    const filteredRows = data.filter((row) =>
      Object.values(row).some((value) => String(value).toLowerCase().includes(searchTerm))
    );

    setFilteredData(filteredRows);
  };

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  return (
    <Paper sx={{ p: 2 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" flexWrap>
        <Typography variant="h4">Users</Typography>
        <Search handleSearch={handleSearch} />
      </Stack>

      <Box sx={{ height: 400, width: '100%', mt: 2 }}>
        <DataGrid
          rows={filteredData}
          columns={columns}
          initialState={{
            pagination: { paginationModel: { pageSize: 5 } },
          }}
          pageSizeOptions={[5, 10, 25]}
          checkboxSelection
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
