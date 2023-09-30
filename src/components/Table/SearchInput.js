import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';


export default function SearchInput({handleSearch}) {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300, border:'1px solid #f0f0f0',mt:1 }}
    >
      
      <IconButton type="button" disabled  sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search.."
        inputProps={{ 'aria-label': 'search google maps' }}
        onChange={handleSearch}
      />
      {/* 
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <DirectionsIcon />
      </IconButton> */}
    </Paper>
  );
}