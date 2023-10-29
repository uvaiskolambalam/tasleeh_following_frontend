import React, { useEffect, useState } from 'react';
import { Table, Divider, Button, Form, Input } from 'antd';
import toast from "react-hot-toast";
import './UserList.css'
import {SearchOutlined} from '@ant-design/icons'
import { useParams,useNavigate } from 'react-router-dom';
import { DataGrid, GridToolbar, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import { Box, Paper, Stack, Typography } from '@mui/material';
import { EditOutlined } from '@mui/icons-material';
// import AddCompanyDetails from '../components/addCompanyDetails/AddCompanyDetails'
import EditCompanyDetails from '../components/edit-company-details/EditCompanyDetails';
import SERVER_URL from '../utils/axios';
import AddEmployee from '../components/add-employee/AddEmployee';
import Search from '../components/Table/SearchInput';



// const columns = [
    
//   {
//     title: 'Name',
//     dataIndex: 'employee_name',
//         filterDropdown: ({setSelectedKeys, selectedKeys,confirm,clearFilters}) => {
//             return(
//             <>
//                     <Input
//                         className='userSearchIput'
             
//                 autoFocus
//                 placeholder='Type text here...'
//                 value={selectedKeys[0]}
//                         onChange={(e) => {
//                             console.log(e.target.value,'eeeee');
//                     setSelectedKeys(e.target.value?[e.target.value]:[])
//                     confirm({closeDropdown:false})
//                 }}
//                 onPressEnter={() => {
//                     confirm()
//                  }}
//                 onBlur={() => {
//                     confirm()
//                 }}
//             />
//                 <Button onClick={() => {
//                     confirm()
//                 }} type='primary' >Search</Button>
//             <Button onClick={()=>{
//                     clearFilters()
//                 }} type='primary' danger >Reset</Button>
//                 </>
//                 )
//     },
//         filterIcon: () =>{
//         return <SearchOutlined/>
//         },
//         onFilter: (value, record) => {
//             console.log(value, record,'value,record');
//             return record.name.toLowerCase().includes(value.toLowerCase())
//         }
//   },
//   {
//     title: 'Emirates ID',
//       dataIndex: 'eid_number',
//       filterDropdown: ({setSelectedKeys, selectedKeys,confirm,clearFilters}) => {
//         return(
//         <>
//                 <Input
         
//                     autoFocus
//                     type='number'
//             placeholder='Type text here...'
//             value={selectedKeys[0]}
//                     onChange={(e) => {
//                 console.log(e.target.value,'emirates id');
//                 setSelectedKeys(e.target.value?[e.target.value]:[])
//                 confirm({closeDropdown:false})
//             }}
//             onPressEnter={() => {
//                 confirm()
//              }}
//             onBlur={() => {
//                 confirm()
//             }}
//         />
//             <Button onClick={() => {
//                 confirm()
//             }} type='primary' >Search</Button>
//         <Button onClick={()=>{
//                 clearFilters()
//             }} type='primary' danger >Reset</Button>
//             </>
//             )
// },
//     filterIcon: () =>{
//     return <SearchOutlined/>
//     },
//     onFilter: (value, record) => {
//         return record.emirates_id === value 
//     }
//   },
//   {
//     title: 'Labour NO',
//     dataIndex: 'labour_number',
//     filterDropdown: ({setSelectedKeys, selectedKeys,confirm,clearFilters}) => {
//         return(
//         <>
//                 <Input
         
//             autoFocus
//             placeholder='Type text here...'
//             value={selectedKeys[0]}
//             onChange={(e) => {
//                 setSelectedKeys(e.target.value?[e.target.value]:[])
//                 confirm({closeDropdown:false})
//             }}
//             onPressEnter={() => {
//                 confirm()
//              }}
//             onBlur={() => {
//                 confirm()
//             }}
//         />
//             <Button onClick={() => {
//                 confirm()
//             }} type='primary' >Search</Button>
//         <Button onClick={()=>{
//                 clearFilters()
//             }} type='primary' danger >Reset</Button>
//             </>
//             )
// },
//     filterIcon: () =>{
//     return <SearchOutlined/>
//     },
//       onFilter: async(value, record) => {
//           console.log(value, record,'value,record');
//         return await record.labour_number === value
//     }
//     },
    
//   {
    
//       title: 'EID Exp',
//       dataIndex: 'eid_exp'
//   },
//   {
//       title: 'Labour Exp',
//       dataIndex: 'labour_expiry'
//     },
//     {
//       title:"Actions"
      
//   }
// ];
const columns = [
    {field:'user_id',headerName:'User ID', width:150},
    { field: 'employee_name', headerName: 'Name', width: 350 },
    { field: 'passport_number', headerName: 'Passport Number', width: 150 },
    { field: 'visa_type', headerName: 'Visa Type', width: 150 },
    {field:'labour_expiry',headerName:'Labour Exp', width:100}
   
  ];
const data = [
  {
    key: '1',
    name: 'nahu',
    emirates_id: 784199878458746,
    labour_number:107874659,
    emitates_id_exp: '25/04/2025',
    labour_exp: '12/08/2026',
    
    },
    {
        key: '2',
        name: 'uvvu',
        emirates_id: 33,
        labour_number: 107874659,
        emitates_id_exp: '25/04/2025',
        labour_exp: '12/08/2026',
        
    },
    {
        key: '3',
        name: 'arshi',
        emirates_id: 78419987845745,
        labour_number: 107874659,
        emitates_id_exp: '25/04/2025',
        labour_exp: '12/08/2026',
        
    },
    {
        key: '4',
        name: 'sanu',
        emirates_id: 784199876746,
        labour_number: 10,
        emitates_id_exp: '25/04/2025',
        labour_exp: '12/08/2026',
        
        },
    
    
    
  
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
const UserList = ({ rowId }) => {
    const [companyDetails,setCompanyDetails ]=useState({})
    const { companyId } = useParams()
    const [allEmployees, setAllEmployees] = useState([])
    const [filteredData, setFilteredData] = useState([]);
    const navigate=useNavigate()
    // console.log(companyId,'comapny id');
    
    // const handleCompanyDatas = async(values) => {
    //     const companyDatas = {
            
    //     }
    //     console.log(values,'final comapny data');
    // }
    // console.log(rowId,'row id');

    const [companyDetailsExp, setCompanyDetailsExp] = useState(false)
    const editCompanyDetails = () => {
        setCompanyDetailsExp(!companyDetailsExp)
    }
    const handleCompanyDatas=async(value) => {
        console.log(value, 'company datas vau');
        const response = await SERVER_URL.patch(`/companies/editCompanyDetails/${companyId}`, value) 
        console.log(response.data.sucess,'response data messate');
        if (response.data.success===false) {
            
            toast.error("Comany Data Not Updated")
        }
        else {
            toast.success(response.data.message)
            getOwnCompanyDetails()
        }
        // setCompanyDetailsExp(!companyDetailsExp)
    }
    const getOwnCompanyDetails = async() => {
        const response = await SERVER_URL.get(`/companies/getOwnCompanyDetails/${companyId}`)
       
        setCompanyDetails(response.data)
        // console.log(response.data.company_name,'own company');
    }
    const handleEmployeeData = async(values) => {
        const response = await SERVER_URL.post(`/users/employeeDetails/${companyId}`,values)
        // console.log(values)
        getOwnCompanyEmployees()
    }
    // const filteredRows = filteredData.filter((row,index) =>
    //   Object.values(row).some((value) => String(value).toLowerCase().includes(searchTerm).Key(index))
    // );
    const getOwnCompanyEmployees = async () => {
        const response = await SERVER_URL.get(`/users/getEmployees/${companyId}`)
        setFilteredData(response.data.employees)
        // console.log(response.data,'employee');

    }



    





    const handleSearch = (event) => {
        console.log(event,'evvu');
        const searchTerm = event.target.value.toUpperCase()
        console.log(searchTerm,'evvu');
    
        // const filteredRows = filteredData.filter((row,index) =>
        //   Object.values(row).some((value) => String(value).toLowerCase().includes(searchTerm).Key(index))
        // );
        const filteredRows=filteredData.filter(filteredData=>filteredData.employee_name.includes(searchTerm))
        
        setFilteredData(filteredRows);
        if (searchTerm) {
            setFilteredData(filteredRows);
            
        } else {
            getOwnCompanyEmployees()
            
        }
    };
    
    const handleEmployee = (event) => {
        const rowId = event.row._id
            
        // const rowId = event.row._id
        console.log(rowId,'rowid');
        navigate(`/dashboard/companies/employes/${rowId}`)

    }





    useEffect(() => {
        getOwnCompanyDetails()
        getOwnCompanyEmployees()
    },[])
        return(
    <>
        <div className="CompanyDetailContainer">
            <div className="companyDetails">
                        <div className="companyDatailsEdit" >
                            <EditCompanyDetails handleCompanyDatas={handleCompanyDatas} companyDetails={companyDetails} />
                            
                            {/* <AddCompanyDetails/> */}
                           {/*      handleCompanyDatas={handleCompanyDatas}
                            /> */}
                    {/* <Button onClick={editCompanyDetails}>f<EditOutlined /></Button> */}
                </div>
                    {/* <p>Company Name: Baik bin hassan coal & enngj sole proprietorship llc </p> */}
                <div className="companyDetailsLeft">
                            <h5>COMPANY NAME: <span>{ companyDetails.company_name}</span> </h5>
                    <h5>LICENSE NUMBER: <span>{ companyDetails.lisence_number}</span>  </h5>
                    <h5>COMPANY CODE: <span>{ companyDetails.company_code} </span> </h5>
                    <h5>MENSHA NUMBER: <span>{ companyDetails.mensha_no}</span>  </h5>
                </div>
                <div className="companyDetailsCenter">
                    <h5>ECHANNEL EXPIRY: <span>{companyDetails.echannel_exp}</span>   </h5>
                    <h5>LICENSE EXPIRY: <span>{ companyDetails.license_exp}</span></h5>
                    <h5>DAMAN EXPIRY: <span>{companyDetails.daman_exp}</span> </h5>

                </div>
                
                    </div>
                   
                 
        </div>
                <Divider>Employees</Divider>
                {/* <Button onClick={editCompanyDetails}>+</Button> */}
                
                <AddEmployee handleEmployeeData={ handleEmployeeData} />
                
                
                {/* <Table columns={columns} dataSource={allEmployees} size="middle" /> */}
                
                <Paper>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" flexWrap>
                    <Typography variant="h4">Users</Typography>
              <Search handleSearch={handleSearch} />

                    </Stack>
                <Box sx={{ height: 500, width: '100%', mt: 2 }}>
                        <DataGrid
                            onRowClick={handleEmployee}
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
export default UserList;